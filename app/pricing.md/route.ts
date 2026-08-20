import { site, stores } from "@/lib/site";

/**
 * /pricing.md — structured pricing for AI agents that compare options before a
 * human ever visits the site. Opaque pricing gets filtered out of AI-mediated
 * buying journeys, so the bands published in the pricing guide are mirrored
 * here in a form any model can parse without rendering the page.
 *
 * Bands must stay in sync with app/guides/chandelier-pricing-guide/page.tsx.
 * Bespoke fabrication is deliberately not given a number — it is quoted per
 * design, and inventing a figure here would be worse than omitting it.
 */
export const dynamic = "force-static";

export async function GET() {
  const body = `# Pricing — ${site.name}

Last updated: 20 August 2026
Currency: INR (₹). All prices include GST as applicable.

${site.name} is the lighting consulting and custom fabrication arm of
Celestial Lights. Ready-collection pieces are sold at fixed prices; bespoke
fabrication is quoted per design after a free consultation.

## Ready collection — fixed price bands

### Accent & wall pieces
- Price: ₹3,000 – ₹15,000
- Includes: reading lights, wall sconces, smaller accent fixtures
- Materials: glass, brass, metal

### Statement chandeliers
- Price: ₹20,000 – ₹50,000
- Includes: mid-scale dining and living-room chandeliers
- Materials: crystal, glass, mixed metal
- Note: the size most homes actually need

### Large & duplex statement pieces
- Price: ₹45,000 – ₹70,000+
- Includes: double-height cascades, grand centrepieces
- For: stairwells, lobbies, duplex ceilings

## Bespoke fabrication

- Price: quoted per design — no fixed multiplier over ready pieces
- Design consultation, design direction and firm quote: free
- Payment: only after you approve the design
- Range: a custom piece can cost about the same as a large ready piece, or
  considerably more, depending on material and fabrication complexity

Pricing drivers, in order of impact: size and drop; material (crystal,
hand-blown glass, brass, marble); fabrication complexity; installation and
site conditions.

## Services

- Design consultation: free (in store, at your site, or over video)
- Installation: quoted alongside the piece, no separate electrician needed
- Delivery: pan-India
- Warranty: up to 5 years

## Notes

- Product pricing is identical across all three stores and pan-India delivery.
- Installation cost varies with site access and distance from the nearest store.
- Ready-collection prices are final for pieces bought as shown; delivery and
  installation are quoted separately.

## Where to buy

${stores.map((s) => `- ${s.brand}, ${s.city} — ${s.address}`).join("\n")}
- Pan-India delivery and remote video consultation from any store.

## Contact

- Phone/WhatsApp: ${site.phone}
- Email: ${site.email}
- Hours: ${site.hours}
- Full pricing guide: ${site.domain}/guides/chandelier-pricing-guide
`;

  return new Response(body, {
    headers: { "Content-Type": "text/markdown; charset=utf-8" },
  });
}
