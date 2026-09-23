/**
 * Consultation form payload. The options are shared with the form so a new
 * choice cannot be submitted unless it is also shown on the page.
 */

export const spaceOptions = [
  "Home, full house",
  "Home, single room",
  "Villa / duplex",
  "Restaurant / café / hotel",
  "Retail / showroom",
  "Office / clinic",
] as const;

export const stageOptions = [
  "Just exploring ideas",
  "Interiors in progress",
  "Ready to finalise lighting",
  "Need it installed soon",
] as const;

export type ConsultationLead = {
  name: string;
  phone: string;
  space: string;
  city: string;
  sqft: string;
  stage: string;
  notes: string;
};

function clean(value: unknown, max: number): string | null {
  if (typeof value !== "string") return null;
  const trimmed = value.replace(/[\u0000-\u001F\u007F]/g, "").trim();
  if (trimmed.length > max) return null;
  return trimmed;
}

function oneOf(value: string, allowed: readonly string[]): boolean {
  return value === "" || allowed.includes(value);
}

export function parseConsultation(
  body: unknown,
): { ok: true; spam: true } | { ok: true; spam: false; lead: ConsultationLead } | { ok: false } {
  if (!body || typeof body !== "object") return { ok: false };
  const record = body as Record<string, unknown>;

  // Filled honeypot means a bot. Pretend it succeeded and send nothing.
  const company = clean(record.company ?? "", 200);
  if (company === null) return { ok: false };
  if (company !== "") return { ok: true, spam: true };

  const name = clean(record.name, 80);
  const phone = clean(record.phone, 40);
  const space = clean(record.space ?? "", 80);
  const city = clean(record.city ?? "", 80);
  const sqft = clean(record.sqft ?? "", 12);
  const stage = clean(record.stage ?? "", 80);
  const notes = clean(record.notes ?? "", 2000);

  if (!name || !phone || space === null || city === null || sqft === null || stage === null || notes === null) {
    return { ok: false };
  }
  if ((phone.match(/\d/g) || []).length < 6) return { ok: false };
  if (!oneOf(space, spaceOptions) || !oneOf(stage, stageOptions)) return { ok: false };
  if (sqft !== "" && !/^[\d,\s]+$/.test(sqft)) return { ok: false };

  return {
    ok: true,
    spam: false,
    lead: { name, phone, space, city, sqft, stage, notes },
  };
}

export function consultationEmail(lead: ConsultationLead): { subject: string; text: string } {
  const subject = `Consultation request — ${lead.name}${lead.city ? `, ${lead.city}` : ""}`;
  const text = [
    `Name: ${lead.name}`,
    `Phone: ${lead.phone}`,
    `Space: ${lead.space || "-"}`,
    `Area: ${lead.sqft ? `${lead.sqft} sq ft` : "-"}`,
    `City: ${lead.city || "-"}`,
    `Stage: ${lead.stage || "-"}`,
    ``,
    `Notes:`,
    lead.notes || "-",
  ].join("\n");
  return { subject, text };
}
