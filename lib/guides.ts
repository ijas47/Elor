export interface GuideEntry {
  slug: string;
  title: string;
  dek: string;
  tag: "Pricing" | "Buying Guide" | "Technical" | "Local";
  image: string;
  /** Describes the photograph. Falls back to the title on older cards. */
  imageAlt?: string;
  /** ISO date the content last changed. The visible "Updated" label, sitemap and schema all derive from it. */
  modified: string;
  /**
   * Slugs shown first in this guide's Related guides row, ahead of the same-tag
   * fill. Set on indexed guides so each guide Google has not indexed yet gets
   * at least three links from pages it already crawls.
   */
  related?: string[];
}

/**
 * The editorial guides index. City/store content is NOT here. Each store city
 * lives at /stores/{city} with LightingStore schema, and service-area cities
 * (where we deliver but have no premises) will live under /lighting/{city}.
 * Keeping them apart is what stops the two page types cannibalising each other.
 */
const entries: GuideEntry[] = [
  {
    slug: "how-to-clean-a-crystal-chandelier",
    title: "How to Clean a Crystal Chandelier",
    dek: "Power off at the breaker, wipe in place, and wash only the drops that stay dull.",
    tag: "Technical",
    image: "/video/showroom-crystal.jpg",
    imageAlt: "Crystal chandeliers lit in the showroom",
    modified: "2026-10-12",
  },
  {
    slug: "ip-rating-for-outdoor-lights",
    title: "IP Rating for Outdoor Lights",
    dek: "IP44 under cover, IP65 where monsoon rain reaches, IP66/67 by the pool. And why the number is not enough on the coast.",
    tag: "Technical",
    image: "/spaces/outdoor.jpg",
    imageAlt: "A building facade at night with its terraces outlined in warm light",
    modified: "2026-10-12",
    related: ["home-lighting-design", "staircase-lighting-design", "brass-chandelier"],
  },
  {
    slug: "chandelier-for-living-room",
    title: "Living Room Chandelier for Kerala Homes",
    dek: "Size it to the seating, clear the fan, and put the anchor in the slab before the ceiling closes.",
    tag: "Buying Guide",
    image: "/photos/living-room.jpg",
    imageAlt: "A living room at night with lit display shelves, a wood coffee table, and warm seating",
    modified: "2026-10-12",
    related: ["chandelier-with-ceiling-fan", "how-to-choose-a-custom-chandelier", "home-lighting-design"],
  },
  {
    slug: "ceiling-and-lighting-design",
    title: "False Ceiling Lighting Design for Kerala Homes",
    dek: "Cove, spots, and the decorative piece are three jobs. The ceiling is drawn after the furniture.",
    tag: "Technical",
    image: "/photos/living-room.jpg",
    imageAlt: "A living room with lit shelves, a pendant, and warm seating",
    modified: "2026-10-12",
    related: ["home-lighting-design", "kitchen-lighting-design", "chandelier-with-ceiling-fan"],
  },
  {
    slug: "home-lighting-design",
    title: "Home Lighting Design for Kerala Houses",
    dek: "One plan for every room, written before the ceilings close. The same job as a house lighting design.",
    tag: "Technical",
    image: "/spaces/outdoor.jpg",
    imageAlt: "A building facade at night with its terraces outlined in warm light",
    modified: "2026-10-12",
  },
  {
    slug: "staircase-lighting-design",
    title: "Staircase Lighting for Kerala Homes",
    dek: "Light the nose of each tread, and hang the void from the slab. The two are separate decisions.",
    tag: "Technical",
    image: "/collections/staircase-cascade.jpg",
    imageAlt: "A red crystal cascade hung in a spiral stair, with a wall light on the landing",
    modified: "2026-10-12",
  },
  {
    slug: "bedroom-lighting-design",
    title: "Bedroom Lighting for Kerala Homes",
    dek: "Nothing bright over the pillow. A reading light on its own switch, and a dimmable piece in the ceiling.",
    tag: "Technical",
    image: "/photos/bedroom-dome.jpg",
    imageAlt: "A bedroom with a black ribbed dome pendant lighting the desk beside the bed",
    modified: "2026-10-12",
  },
  {
    slug: "kitchen-lighting-design",
    title: "Kitchen Lighting for Kerala Homes",
    dek: "The worktop gets its own light. The pendant over the island is a second circuit, not the task light.",
    tag: "Technical",
    image: "/collections/staircase-cascade.jpg",
    imageAlt: "A red crystal cascade falling beside a dark spiral staircase",
    modified: "2026-10-12",
  },
  {
    slug: "wooden-chandelier",
    title: "Wooden Chandelier for Kerala Homes",
    dek: "Wood suits a dry, air-conditioned room. On a humid coast it needs a sealed finish, or another material.",
    tag: "Buying Guide",
    image: "/video/showroom-petal.jpg",
    imageAlt: "Showroom pendants at Celestial Lights, Kannur",
    modified: "2026-11-11",
    related: ["brass-chandelier", "how-to-clean-a-crystal-chandelier", "how-to-choose-a-custom-chandelier"],
  },
  {
    slug: "brass-chandelier",
    title: "Brass Chandelier for Kerala Homes",
    dek: "Untreated brass pits in salt air. The finish is specified for the room, then the piece is sized to it.",
    tag: "Buying Guide",
    image: "/collections/staircase-cascade.jpg",
    imageAlt: "A red crystal cascade falling beside a dark spiral staircase",
    modified: "2026-10-12",
  },
  {
    slug: "how-to-choose-a-custom-chandelier",
    title: "How to Choose a Custom Chandelier: Villa, Duplex or Hotel",
    dek: "What actually changes between a living room, a stairwell and a lobby, and six questions to answer before you choose anything.",
    tag: "Buying Guide",
    image: "/photos/crystal-low.jpg",
    modified: "2026-08-19",
  },
  {
    slug: "how-a-lighting-plan-is-built",
    title: "How a Lighting Plan Is Built: Layers, Walls and Scenes",
    dek: "What gets light, in what order, and why the ceiling is the last thing drawn. The method behind an Elor plan.",
    tag: "Technical",
    image: "/photos/living-room.jpg",
    modified: "2026-09-23",
    related: ["home-lighting-design", "kitchen-lighting-design", "bedroom-lighting-design"],
  },
  {
    slug: "why-downlights-glare",
    title: "Why a Downlight Glares: Baffles, Cutoff and the Seated View",
    dek: "If you can see the lamp from the sofa, the fitting is too shallow. What to ask for before the ceiling closes.",
    tag: "Technical",
    image: "/photos/living-room.jpg",
    modified: "2026-09-23",
    related: ["kitchen-lighting-design", "bedroom-lighting-design", "staircase-lighting-design"],
  },
  {
    slug: "colour-of-light",
    title: "Kelvin, CRI and Beam Angle: How to Read a Light",
    dek: "The three numbers on a specification that decide whether a room feels like a home or a clinic, and what to ask for in Kerala.",
    tag: "Technical",
    image: "/lifestyle/lobby-canopy.jpg",
    modified: "2026-09-23",
    related: ["kitchen-lighting-design", "bedroom-lighting-design", "home-lighting-design"],
  },
  {
    slug: "chandelier-size-calculator",
    title: "Chandelier Size Calculator: Diameter, Drop & Fan Clearance",
    dek: "Put in the room, get back a diameter and a drop, plus the two checks Indian rooms actually need.",
    tag: "Technical",
    image: "/collections/staircase-cascade.jpg",
    modified: "2026-11-11",
    related: ["chandelier-with-ceiling-fan", "false-ceiling-chandelier-weight", "staircase-lighting-design", "chandelier-for-living-room"],
  },
  {
    slug: "chandelier-with-ceiling-fan",
    title: "Chandelier With a Ceiling Fan: How to Make Both Work",
    dek: "Four layouts that work, the clearances they need, and the wiring mistake we get called to fix most often.",
    tag: "Technical",
    image: "/work/w4-lounge.jpg",
    modified: "2026-08-20",
  },
  {
    slug: "false-ceiling-chandelier-weight",
    title: "Can a False Ceiling Hold a Chandelier?",
    dek: "What gypsum, POP and RCC each carry, what fixtures weigh, and why the anchor goes in before the ceiling closes.",
    tag: "Technical",
    image: "/work/w2-corridor.jpg",
    modified: "2026-11-11",
    related: ["ceiling-and-lighting-design", "chandelier-with-ceiling-fan", "staircase-lighting-design", "chandelier-size-calculator"],
  },
  {
    slug: "crystal-vs-glass-chandelier",
    title: "Crystal vs Glass vs Acrylic Chandeliers",
    dek: "How the four materials differ in light, weight, cleaning and cost, and which suits a humid coast or a hotel lobby.",
    tag: "Buying Guide",
    image: "/lifestyle/lobby-canopy.jpg",
    modified: "2026-11-11",
    related: ["how-to-clean-a-crystal-chandelier", "brass-chandelier", "how-to-choose-a-custom-chandelier", "chandelier-pricing-guide"],
  },
  {
    slug: "coastal-lighting-kerala",
    title: "Coastal & Humid Climate Lighting in Kerala",
    dek: "Salt air pits untreated brass and iron within two seasons. What lasts, what IP rating you need, and the fixings that fail first.",
    tag: "Technical",
    image: "/spaces/outdoor.jpg",
    modified: "2026-08-20",
    related: ["brass-chandelier", "how-to-clean-a-crystal-chandelier", "home-lighting-design"],
  },
  {
    slug: "how-to-choose-a-chandelier-shop",
    title: "How to Choose a Chandelier Shop or Fabricator in India",
    dek: "Seven questions that separate a shop that makes chandeliers from one that only imports and resells them.",
    tag: "Buying Guide",
    image: "/video/showroom-petal.jpg",
    modified: "2026-08-24",
    related: ["how-to-choose-a-custom-chandelier", "how-to-clean-a-crystal-chandelier", "brass-chandelier"],
  },
  {
    slug: "chandelier-pricing-guide",
    title: "What Does a Custom Chandelier Cost in India?",
    dek: "Ready-collection price bands, what drives bespoke pricing, and how to budget before you call anyone.",
    tag: "Pricing",
    image: "/lifestyle/lobby-canopy.jpg",
    modified: "2026-11-11",
    related: ["how-to-choose-a-custom-chandelier", "crystal-vs-glass-chandelier", "brass-chandelier", "home-lighting-design"],
  },
];

export interface Guide extends GuideEntry {
  updated: string;
}

export function formatGuideDate(iso: string): string {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
}

export const guides: Guide[] = entries.map((e) => ({ ...e, updated: formatGuideDate(e.modified) }));

export function guideDates(path: string): { modified: string; updated: string } {
  const slug = path.replace(/^\/guides\//, "");
  const guide = guides.find((x) => x.slug === slug);
  if (!guide) throw new Error(`No entry for ${slug} in lib/guides.ts. Add it there; dates are read from that entry.`);
  return { modified: guide.modified, updated: guide.updated };
}
