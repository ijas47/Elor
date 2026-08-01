"use client";

import { useState } from "react";
import { site } from "@/lib/site";

/**
 * Consultation lead form. Front-end only for now — on submit it composes a
 * WhatsApp message (the picture/brief arrives with the enquiry) and shows a
 * confirmation. Swap the submit handler for a form endpoint when a backend
 * exists; the fields already map to a clean payload.
 */
export function ConsultForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const msg = [
      `Hi Elor, I'd like a lighting consultation.`,
      ``,
      `Name: ${f.get("name") || "-"}`,
      `Phone: ${f.get("phone") || "-"}`,
      `Space: ${f.get("space") || "-"}`,
      `City: ${f.get("city") || "-"}`,
      `Stage: ${f.get("stage") || "-"}`,
      `Notes: ${f.get("notes") || "-"}`,
    ].join("\n");
    const url = `https://wa.me/919000000000?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setSent(true);
    e.currentTarget.reset();
  }

  return (
    <form className="form-card" onSubmit={onSubmit}>
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
            <option>Home — full house</option>
            <option>Home — single room</option>
            <option>Villa / duplex</option>
            <option>Restaurant / café / hotel</option>
            <option>Retail / showroom</option>
            <option>Office / clinic</option>
          </select>
        </div>
        <div className="field">
          <label htmlFor="city">City</label>
          <input id="city" name="city" placeholder="e.g. Kochi" autoComplete="address-level2" />
        </div>
        <div className="field full">
          <label htmlFor="stage">Where are you in the project?</label>
          <select id="stage" name="stage" defaultValue="">
            <option value="" disabled>Select…</option>
            <option>Just exploring ideas</option>
            <option>Interiors in progress</option>
            <option>Ready to finalise lighting</option>
            <option>Need it installed soon</option>
          </select>
        </div>
        <div className="field full">
          <label htmlFor="notes">Anything you&rsquo;d like us to know</label>
          <textarea id="notes" name="notes" placeholder="Rooms, style you like, a reference you've seen, timeline…" />
        </div>
      </div>
      <div className="cta-ctas" style={{ justifyContent: "flex-start", marginTop: 24 }}>
        <button type="submit" className="btn btn-gold">
          Request Consultation <span className="arr">→</span>
        </button>
        <a className="btn btn-ghost" href={site.whatsapp} target="_blank" rel="noopener noreferrer">
          Or message us directly
        </a>
      </div>
      {sent && (
        <p className="form-note" role="status" style={{ color: "var(--gold)" }}>
          Thanks — we&rsquo;ve opened WhatsApp with your details. Send the message
          and we&rsquo;ll reply, usually the same day.
        </p>
      )}
      <p className="form-note">Free, no obligation. We reply within one working day.</p>
    </form>
  );
}
