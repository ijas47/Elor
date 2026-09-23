import { NextResponse } from "next/server";
import { consultationEmail, parseConsultation } from "@/lib/consultation";
import { site } from "@/lib/site";

export const runtime = "nodejs";

function reply(req: Request, json: boolean, ok: boolean, status = 200) {
  if (json) return NextResponse.json({ ok }, { status: ok ? 200 : status });
  const target = new URL(ok ? "/consultation?sent=1" : "/consultation?error=1", req.url);
  target.hash = "form";
  return NextResponse.redirect(target, 303);
}

/**
 * Emails a consultation request to site.email.
 * Delivered through FormSubmit, which emails that inbox directly.
 * The first submission asks that inbox to confirm the address once.
 */
export async function POST(req: Request) {
  const type = req.headers.get("content-type") || "";
  const json = type.includes("application/json");
  const host = req.headers.get("host");
  const origin = req.headers.get("origin");
  let originHost = "";
  try {
    originHost = origin ? new URL(origin).host : "";
  } catch {
    originHost = "";
  }
  if (!host || originHost !== host) {
    console.error("[consultation] origin rejected", { origin, host });
    return reply(req, json, false, 403);
  }

  let body: unknown;
  try {
    if (json) {
      body = await req.json();
    } else {
      const form = await req.formData();
      body = Object.fromEntries(
        [...form.entries()].filter((entry): entry is [string, string] => typeof entry[1] === "string"),
      );
    }
  } catch {
    return reply(req, json, false, 400);
  }

  const parsed = parseConsultation(body);
  if (!parsed.ok) return reply(req, json, false, 400);
  if (parsed.spam) return reply(req, json, true);

  const { subject } = consultationEmail(parsed.lead);
  const lead = parsed.lead;

  try {
    const res = await fetch(
      `https://formsubmit.co/ajax/${encodeURIComponent(site.email)}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: subject,
          _template: "table",
          _captcha: "false",
          Name: lead.name,
          Phone: lead.phone,
          Space: lead.space || "-",
          Area: lead.sqft ? `${lead.sqft} sq ft` : "-",
          City: lead.city || "-",
          Stage: lead.stage || "-",
          Notes: lead.notes || "-",
        }),
      },
    );
    const data = (await res.json().catch(() => null)) as { success?: string; message?: string } | null;
    if (!res.ok || data?.success === "false") {
      console.error("[consultation] send failed", res.status, data);
      return reply(req, json, false, 502);
    }
    if (data?.message) console.info("[consultation]", data.message);
  } catch (err) {
    console.error("[consultation] send failed", err);
    return reply(req, json, false, 502);
  }

  return reply(req, json, true);
}
