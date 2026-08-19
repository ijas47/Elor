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
- [Stores](${site.domain}/stores): the three experience stores (${stores.map((s) => s.city).join(", ")})
- [Guides](${site.domain}/guides): pricing and city guides — ${guides.map((g) => g.title).join("; ")}

## Contact

- Phone/WhatsApp: ${site.phone}
- Email: ${site.email}
- Hours: ${site.hours}
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
