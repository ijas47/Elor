import https from "node:https";
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

function postToFormSubmit(payload: string, page: string): Promise<{ status: number; text: string }> {
  return new Promise((resolve, reject) => {
    const req = https.request(
      `https://formsubmit.co/ajax/${encodeURIComponent(site.email)}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Referer: page,
          Origin: site.domain,
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36",
          "Content-Length": Buffer.byteLength(payload),
        },
      },
      (res) => {
        const chunks: Buffer[] = [];
        res.on("data", (chunk) => chunks.push(chunk));
        res.on("end", () => resolve({ status: res.statusCode ?? 0, text: Buffer.concat(chunks).toString("utf8") }));
      },
    );
    req.on("error", reject);
    req.write(payload);
    req.end();
  });
}

/**
 * Emails a consultation request to site.email.
 * Delivered through FormSubmit, which emails that inbox directly.
 * hello@ has confirmed the address. The page posts from the browser;
 * this route is the no-JavaScript fallback.
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
  // FormSubmit rejects a post with no Referer. Node fetch from Vercel is also
  // answered 403, so this fallback uses a plain HTTPS request a browser would
  // send. The form itself posts from the visitor's browser.
  const page = `${site.domain}/consultation`;
  const payload = JSON.stringify({
    _subject: subject,
    _template: "table",
    _captcha: "false",
    _url: page,
    Name: lead.name,
    Phone: lead.phone,
    Space: lead.space || "-",
    Area: lead.sqft ? `${lead.sqft} sq ft` : "-",
    City: lead.city || "-",
    Stage: lead.stage || "-",
    Notes: lead.notes || "-",
  });

  try {
    const sent = await postToFormSubmit(payload, page);
    const data = JSON.parse(sent.text) as { success?: string; message?: string };
    if (sent.status !== 200 || data?.success === "false") {
      console.error("[consultation] send failed", sent.status, sent.text.slice(0, 300));
      return reply(req, json, false, 502);
    }
    if (data?.message) console.info("[consultation]", data.message);
  } catch (err) {
    console.error("[consultation] send failed", err);
    return reply(req, json, false, 502);
  }

  return reply(req, json, true);
}
