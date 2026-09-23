import { site, stores } from "@/lib/site";
import { guides } from "@/lib/guides";

// llms.txt: a plain-language summary for AI assistants/crawlers, per the
// emerging llms.txt convention. Kept in sync with site.ts by reading from it
// rather than duplicating copy.
export const dynamic = "force-static";

export async function GET() {
  const body = `# ${site.name}

> ${site.description}

## Pages

- [Home](${site.domain}/): overview, capabilities, service areas
- [Collections](${site.domain}/collections): curated lighting collections
- [Customisation](${site.domain}/customisation): custom chandelier fabrication from a photo, render or sketch
- [Consultation](${site.domain}/consultation): book a lighting design consultation
- [Stores](${site.domain}/stores): Celestial stores and experience centres in Kannur and Calicut, and a full experience centre in Kochi
${stores.map((s) => `  - [${s.brand}, ${s.city}](${site.domain}/stores/${s.city.toLowerCase()}): ${s.address}`).join("\n")}
- [Guides](${site.domain}/guides): ${guides.map((g) => g.title).join("; ")}
- [For Architects & Designers](${site.domain}/for/architects-and-designers): trade fabrication service for architects and interior designers
- [Press](${site.domain}/press): company facts, logo assets, contact for media

## Machine-readable

- [Pricing](${site.domain}/pricing.md): price bands, services and warranty in plain markdown

## Contact

- Phone/WhatsApp: ${site.phone}
- Email: ${site.email}
- Hours: ${site.hours}
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
