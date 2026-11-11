import { site } from "@/lib/site";
import { elorContact } from "@/lib/brands";

/**
 * /pricing.md: structured pricing for AI agents that compare options before a
 * human ever visits the site. Opaque pricing gets filtered out of AI-mediated
 * buying journeys, so the bands published in the pricing guide are mirrored
 * here in a form any model can parse without rendering the page.
 *
 * Bands must stay in sync with app/guides/chandelier-pricing-guide/page.tsx.
 * Bespoke fabrication is deliberately not given a number. It is quoted per
 * design, and inventing a figure here would be worse than omitting it.
 */
export const dynamic = "force-static";

export async function GET() {
  const body = `# Pricing: ${site.name}

Last updated: 11 November 2026
Currency: INR (₹). All prices include GST as applicable.

${site.name} is the lighting consulting and custom fabrication arm of
Celestial Lights. Ready-collection pieces are sold at fixed prices; bespoke
fabrication is quoted per design. The first session is free. Design is
free with purchase from Celestial.

## Ready collection: fixed price bands

### Accent & wall pieces
- Price: ₹3,000 to ₹15,000
- Includes: reading lights, wall sconces, smaller accent fixtures
- Materials: glass, brass, metal

### Statement chandeliers
- Price: ₹20,000 to ₹50,000
- Includes: mid-scale dining and living-room chandeliers
- Materials: crystal, glass, mixed metal
- Note: the size most homes actually need

### Large & duplex statement pieces
- Price: ₹45,000 to ₹70,000+
- Includes: double-height cascades, grand centrepieces
- For: stairwells, lobbies, duplex ceilings

## Bespoke fabrication

- Price: quoted per design, with no fixed multiplier over ready pieces
- The first session is free
- Design: free with purchase from Celestial
- Payment: only after you approve the design
- Range: a custom piece can cost about the same as a large ready piece, or
  considerably more, depending on material and fabrication complexity

Pricing drivers, in order of impact: size and drop; material (crystal,
hand-blown glass, brass, marble); fabrication complexity. For ready fittings,
site conditions are arranged with the order.
We install custom lights and give installation support for everything else.

## Services

- The first session is free (at your site, in Kannur, Calicut or Kochi, or on video)
- Design: free with purchase from Celestial
- We install custom lights and give installation support for everything else.
- Delivery: pan-India
- Warranty: up to 5 years

## Notes

- Product pricing is identical across all three stores and pan-India delivery.
- Installation support for ready pieces varies with site access and distance from the nearest store.
- Ready-collection prices are final for pieces bought as shown. Delivery is
  quoted separately. Those pieces come with installation support.
- We install custom lights and give installation support for everything else.

## Where to buy

- Celestial Lights, Kannur: Philips Building, 670005
- Elor Lighting, Kochi: 63/500, 1st Floor, Chalakuzhy, Gandhinagar Road, near the Fire and Rescue Station, Gandhi Nagar, Kadavanthra, Kochi, Kerala 682020
- Celestial Lights, Kozhikode: Kozhikode, Kerala
- Shop: https://www.celestiallights.in
- Pan-India delivery from any store.

## Contact

- Phone: ${elorContact.phone}
- WhatsApp: ${elorContact.whatsapp}
- Email: ${site.email}
- Hours: ${site.hours}
- Full pricing guide: ${site.domain}/guides/chandelier-pricing-guide
`;

  return new Response(body, {
    headers: { "Content-Type": "text/markdown; charset=utf-8" },
  });
}
