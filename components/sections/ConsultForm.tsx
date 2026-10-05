"use client";

import { useState } from "react";
import { consultationEmail, parseConsultation, spaceOptions, stageOptions } from "@/lib/consultation";
import { site } from "@/lib/site";

/**
 * Consultation lead form. The browser posts straight to FormSubmit.
 * A server-side post from Vercel is rejected (403) before the mail is sent.
 * The WhatsApp link stays as a direct alternative.
 */
export function ConsultForm({
  initial = "idle",
}: {
  initial?: "idle" | "sent" | "error";
}) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(initial);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;
    const form = e.currentTarget;
    const f = new FormData(form);
    const parsed = parseConsultation({
      name: f.get("name") ?? "",
      phone: f.get("phone") ?? "",
      space: f.get("space") ?? "",
      city: f.get("city") ?? "",
      sqft: f.get("sqft") ?? "",
      stage: f.get("stage") ?? "",
      notes: f.get("notes") ?? "",
      company: f.get("company") ?? "",
    });
    if (!parsed.ok) {
      setStatus("error");
      return;
    }
    if (parsed.spam) {
      form.reset();
      setStatus("sent");
      return;
    }

    setStatus("sending");
    const lead = parsed.lead;
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(site.email)}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: consultationEmail(lead).subject,
          _template: "table",
          _captcha: "false",
          _url: `${site.domain}/consultation`,
          Name: lead.name,
          Phone: lead.phone,
          Space: lead.space || "-",
          Area: lead.sqft ? `${lead.sqft} sq ft` : "-",
          City: lead.city || "-",
          Stage: lead.stage || "-",
          Notes: lead.notes || "-",
        }),
      });
      const data = (await res.json().catch(() => null)) as { success?: string } | null;
      if (!res.ok || data?.success === "false") {
        setStatus("error");
        return;
      }
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className="form-card" method="post" action="/api/consultation" onSubmit={onSubmit}>
      <div className="form-grid">
        <div className="field">
          <label htmlFor="name">Your name</label>
          <input id="name" name="name" required placeholder="Full name" autoComplete="name" />
        </div>
        <div className="field">
          <label htmlFor="phone">Phone / WhatsApp</label>
          <input id="phone" name="phone" required placeholder="+91…" inputMode="tel" autoComplete="tel" />
        </div>
        <div className="field">
          <label htmlFor="space">Type of space</label>
          <select id="space" name="space" defaultValue="">
            <option value="" disabled>Select…</option>
            {spaceOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </div>
        <div className="field">
          <label htmlFor="city">City</label>
          <input id="city" name="city" placeholder="e.g. Kochi" autoComplete="address-level2" />
        </div>
        <div className="field">
          <label htmlFor="sqft">Approximate area (sq ft)</label>
          <input id="sqft" name="sqft" placeholder="e.g. 2000" inputMode="numeric" />
        </div>
        <div className="field full">
          <label htmlFor="stage">Where are you in the project?</label>
          <select id="stage" name="stage" defaultValue="">
            <option value="" disabled>Select…</option>
            {stageOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </div>
        <div className="field full">
          <label htmlFor="notes">Anything you&rsquo;d like us to know</label>
          <textarea id="notes" name="notes" placeholder="Rooms, style you like, a reference you've seen, timeline…" />
        </div>
      </div>
      <div className="hp" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" tabIndex={-1} autoComplete="off" />
      </div>
      <div className="cta-ctas" style={{ justifyContent: "flex-start", marginTop: 24 }}>
        <button type="submit" className="btn btn-gold" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Request Consultation"}{" "}
          {status !== "sending" && <span className="arr">→</span>}
        </button>
        <a className="btn btn-ghost" href={site.whatsapp} target="_blank" rel="noopener noreferrer">
          Or message us directly
        </a>
      </div>
      {status === "sent" && (
        <p className="form-note" role="status" style={{ color: "var(--gold)" }}>
          Thanks. Your request is with the studio. We&rsquo;ll reply within one
          working day, usually on the number you gave us.
        </p>
      )}
      {status === "error" && (
        <p className="form-note" role="status">
          We couldn&rsquo;t send that. Please try again, or message us on WhatsApp.
        </p>
      )}
      <p className="form-note">Free, no obligation. We reply within one working day.</p>
      <p className="form-note">
        By submitting, you agree to our{" "}
        <a href="/privacy" style={{ textDecoration: "underline" }}>
          Privacy Policy
        </a>
        .
      </p>
    </form>
  );
}
