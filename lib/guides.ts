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
    image: "/images/guides/how-to-clean-a-crystal-chandelier/crystal-chandelier-living-room.webp",
    imageAlt: "A rectangular crystal chandelier hanging in a double-height living room, the kind of piece that is wiped in place",
    modified: "2026-11-19",
    related: ["ip-rating-for-outdoor-lights", "ceiling-and-lighting-design", "home-lighting-design"],
  },
  {
    slug: "ip-rating-for-outdoor-lights",
    title: "Outdoor Light IP Ratings in India (Kerala Tips)",
    dek: "IP44 under cover, IP65 where monsoon rain reaches, IP66/67 by the pool. And why the number is not enough on the coast.",
    tag: "Technical",
    image: "/images/guides/ip-rating-for-outdoor-lights/facade-terrace-lighting.webp",
    imageAlt: "A house facade at night with warm light lining each terrace edge",
    modified: "2026-11-19",
    related: ["home-lighting-design", "staircase-lighting-design", "brass-chandelier", "coastal-lighting-kerala"],
  },
  {
    slug: "chandelier-for-living-room",
    title: "Living Room Chandeliers in India (Kerala Tips)",
    dek: "Size it to the seating, clear the fan, and put the anchor in the slab before the ceiling closes.",
    tag: "Buying Guide",
    image: "/images/guides/chandelier-for-living-room/living-room-crystal-chandelier.webp",
    imageAlt: "A crystal chandelier hanging over a seating group in a tall living room, with a warm wash along the curtains",
    modified: "2026-11-19",
    related: ["chandelier-with-ceiling-fan", "how-to-choose-a-custom-chandelier", "home-lighting-design"],
  },
  {
    slug: "ceiling-and-lighting-design",
    title: "False Ceiling Lighting in India (Kerala Tips)",
    dek: "Cove, spots, and the decorative piece are three jobs. The ceiling is drawn after the furniture.",
    tag: "Technical",
    image: "/images/guides/ceiling-and-lighting-design/lobby-false-ceiling-lighting.webp",
    imageAlt: "A lobby with a crystal chandelier in a wooden tray ceiling, linear coves, and wall lights on either side of the lifts",
    modified: "2026-11-19",
    related: ["home-lighting-design", "kitchen-lighting-design", "chandelier-with-ceiling-fan"],
  },
  {
    slug: "home-lighting-design",
    title: "Home Lighting Design in India (Kerala Tips)",
    dek: "One plan for every room, written before the ceilings close. The same job as a house lighting design.",
    tag: "Technical",
    image: "/images/guides/home-lighting-design/living-room-layered-lighting.webp",
    imageAlt: "A living room with lit shelves, a pendant over a seating group, downlights in the ceiling, and a ceiling fan",
    modified: "2026-11-19",
    related: ["how-to-clean-a-crystal-chandelier", "ip-rating-for-outdoor-lights", "ceiling-and-lighting-design"],
  },
  {
    slug: "staircase-lighting-design",
    title: "Staircase Lighting for Indian Homes (Kerala Tips)",
    dek: "Light the nose of each tread, and hang the void from the slab. The two are separate decisions.",
    tag: "Technical",
    image: "/images/guides/staircase-lighting-design/crystal-cascade-staircase.webp",
    imageAlt: "A red crystal cascade hung in a spiral stair, with a wall light on the landing",
    modified: "2026-11-19",
    related: ["how-to-clean-a-crystal-chandelier", "ip-rating-for-outdoor-lights", "ceiling-and-lighting-design"],
  },
  {
    slug: "bedroom-lighting-design",
    title: "Bedroom Lighting for Indian Homes (Kerala Tips)",
    dek: "Nothing bright over the pillow. A reading light on its own switch, and a dimmable piece in the ceiling.",
    tag: "Technical",
    image: "/images/guides/bedroom-lighting-design/bedroom-dome-pendant.webp",
    imageAlt: "A bedroom with a black ribbed dome pendant lighting the desk beside the bed",
    modified: "2026-11-19",
    related: ["how-to-clean-a-crystal-chandelier", "ip-rating-for-outdoor-lights", "ceiling-and-lighting-design"],
  },
  {
    slug: "kitchen-lighting-design",
    title: "Kitchen Lighting for Indian Homes (Kerala Tips)",
    dek: "The worktop gets its own light. The pendant over the island is a second circuit, not the task light.",
    tag: "Technical",
    image: "/images/guides/kitchen-lighting-design/apartment-kitchen-task-and-pendant-lighting.webp",
    imageAlt: "A city-apartment kitchen with under-cabinet task lighting along the worktop and a pendant over the breakfast counter",
    modified: "2026-11-19",
    related: ["how-to-clean-a-crystal-chandelier", "ip-rating-for-outdoor-lights", "ceiling-and-lighting-design"],
  },
  {
    slug: "wooden-chandelier",
    title: "Wooden Chandelier for Indian Homes (Kerala Tips)",
    dek: "Wood suits a dry, air-conditioned room. On a humid coast it needs a sealed finish, or another material.",
    tag: "Buying Guide",
    image: "/images/guides/wooden-chandelier/wooden-ring-chandelier-living-room.webp",
    imageAlt: "A circular wooden chandelier hanging over a living and dining room in a city apartment",
    modified: "2026-11-19",
    related: ["brass-chandelier", "how-to-clean-a-crystal-chandelier", "how-to-choose-a-custom-chandelier"],
  },
  {
    slug: "brass-chandelier",
    title: "Brass Chandelier for Indian Homes (Kerala Tips)",
    dek: "Untreated brass pits in salt air. The finish is specified for the room, then the piece is sized to it.",
    tag: "Buying Guide",
    image: "/images/guides/brass-chandelier/brass-chandelier-over-dining-table.webp",
    imageAlt: "A brass chandelier with fabric shades hanging over a dining table in a city apartment",
    modified: "2026-11-19",
    related: ["chandelier-for-living-room", "wooden-chandelier", "how-to-choose-a-custom-chandelier"],
  },
  {
    slug: "how-to-choose-a-custom-chandelier",
    title: "How to Choose a Custom Chandelier: Villa, Duplex or Hotel",
    dek: "What actually changes between a living room, a stairwell and a lobby, and six questions to answer before you choose anything.",
    tag: "Buying Guide",
    image: "/images/guides/how-to-choose-a-custom-chandelier/custom-lobby-chandelier.webp",
    imageAlt: "A large custom chandelier of dark hanging shards in a double-height lobby",
    modified: "2026-11-19",
    related: ["chandelier-for-living-room", "staircase-lighting-design", "chandelier-size-calculator"],
  },
  {
    slug: "how-a-lighting-plan-is-built",
    title: "How a Lighting Plan Is Built: Layers, Walls and Scenes",
    dek: "What gets light, in what order, and why the ceiling is the last thing drawn. The method behind an Elor plan.",
    tag: "Technical",
    image: "/images/guides/how-a-lighting-plan-is-built/layered-living-room-lighting.webp",
    imageAlt: "A city-apartment living room with a hidden ceiling cove, recessed downlights, a pendant over the coffee table, and a wash on a stone wall",
    modified: "2026-11-19",
    related: ["home-lighting-design", "kitchen-lighting-design", "bedroom-lighting-design"],
  },
  {
    slug: "why-downlights-glare",
    title: "Why a Downlight Glares: Baffles, Cutoff and the Seated View",
    dek: "If you can see the lamp from the sofa, the fitting is too shallow. What to ask for before the ceiling closes.",
    tag: "Technical",
    image: "/images/guides/why-downlights-glare/downlights-over-seating.webp",
    imageAlt: "A living room with recessed downlights in the ceiling above a sofa, a wooden ceiling fan, and a laterite wall",
    modified: "2026-11-19",
    related: ["kitchen-lighting-design", "bedroom-lighting-design", "staircase-lighting-design"],
  },
  {
    slug: "colour-of-light",
    title: "Kelvin, CRI and Beam Angle: How to Read a Light",
    dek: "The three numbers on a specification that decide whether a room feels like a home or a clinic, and what to ask for in Kerala.",
    tag: "Technical",
    image: "/images/guides/colour-of-light/warm-living-dining-light.webp",
    imageAlt: "A city-apartment living and dining room at night in warm light, with a brass pendant, a glowing cove, and a city view beyond the windows",
    modified: "2026-11-19",
    related: ["kitchen-lighting-design", "bedroom-lighting-design", "home-lighting-design"],
  },
  {
    slug: "chandelier-size-calculator",
    title: "Chandelier Size Calculator: Diameter, Drop & Fan Clearance",
    dek: "Put in the room, get back a diameter and a drop, plus the two checks Indian rooms actually need.",
    tag: "Technical",
    image: "/images/guides/chandelier-size-calculator/double-height-living-room-chandelier.webp",
    imageAlt: "A rectangular crystal chandelier sized to a double-height living room, with a warm cove along the curtains",
    modified: "2026-11-19",
    related: ["chandelier-with-ceiling-fan", "false-ceiling-chandelier-weight", "staircase-lighting-design", "chandelier-for-living-room"],
  },
  {
    slug: "chandelier-with-ceiling-fan",
    title: "Chandelier With a Ceiling Fan: How to Make Both Work",
    dek: "Four layouts that work, the clearances they need, and the wiring mistake we get called to fix most often.",
    tag: "Technical",
    image: "/images/guides/chandelier-with-ceiling-fan/chandelier-and-ceiling-fan.webp",
    imageAlt: "A living room with a crystal chandelier in one ceiling tray and a wooden ceiling fan in the other, both clear of each other",
    modified: "2026-11-19",
    related: ["how-to-clean-a-crystal-chandelier", "ip-rating-for-outdoor-lights", "ceiling-and-lighting-design", "chandelier-for-living-room"],
  },
  {
    slug: "false-ceiling-chandelier-weight",
    title: "Can a False Ceiling Hold a Chandelier?",
    dek: "What gypsum, POP and RCC each carry, what fixtures weigh, and why the anchor goes in before the ceiling closes.",
    tag: "Technical",
    image: "/images/guides/false-ceiling-chandelier-weight/double-height-crystal-chandelier.webp",
    imageAlt: "A rectangular crystal chandelier hanging in a double-height living room, with a warm cove along the curtains",
    modified: "2026-11-19",
    related: ["ceiling-and-lighting-design", "chandelier-with-ceiling-fan", "staircase-lighting-design", "chandelier-size-calculator"],
  },
  {
    slug: "crystal-vs-glass-chandelier",
    title: "Crystal vs Glass vs Acrylic Chandeliers",
    dek: "How the four materials differ in light, weight, cleaning and cost, and which suits a humid coast or a hotel lobby.",
    tag: "Buying Guide",
    image: "/images/guides/crystal-vs-glass-chandelier/crystal-chandelier-living-room.webp",
    imageAlt: "A rectangular crystal chandelier hanging in a double-height living room, catching warm light",
    modified: "2026-11-19",
    related: ["how-to-clean-a-crystal-chandelier", "brass-chandelier", "how-to-choose-a-custom-chandelier", "chandelier-pricing-guide"],
  },
  {
    slug: "coastal-lighting-kerala",
    title: "Coastal Lighting in India (Kerala Tips)",
    dek: "Salt air pits untreated brass and iron within two seasons. What lasts, what IP rating you need, and the fixings that fail first.",
    tag: "Technical",
    image: "/images/guides/coastal-lighting-kerala/coastal-villa-sit-out-lighting.webp",
    imageAlt: "A coastal villa sit-out at dusk with teak furniture, up-down wall lights, and a downlight under the roof overhang, the sea visible beyond",
    modified: "2026-11-19",
    related: ["brass-chandelier", "how-to-clean-a-crystal-chandelier", "home-lighting-design", "ip-rating-for-outdoor-lights"],
  },
  {
    slug: "how-to-choose-a-chandelier-shop",
    title: "How to Choose a Chandelier Shop or Fabricator in India",
    dek: "Seven questions that separate a shop that makes chandeliers from one that only imports and resells them.",
    tag: "Buying Guide",
    image: "/images/guides/how-to-choose-a-chandelier-shop/lighting-showroom-chandeliers.webp",
    imageAlt: "A lighting showroom with crystal, glass and brass chandeliers hanging over a stone floor, and an Indian city street visible through arched windows",
    modified: "2026-11-19",
    related: ["how-to-choose-a-custom-chandelier", "how-to-clean-a-crystal-chandelier", "brass-chandelier"],
  },
  {
    slug: "chandelier-pricing-guide",
    title: "What Does a Custom Chandelier Cost in India?",
    dek: "Ready-collection price bands, what drives bespoke pricing, and how to budget before you call anyone.",
    tag: "Pricing",
    image: "/images/guides/chandelier-pricing-guide/custom-statement-chandelier.webp",
    imageAlt: "A large custom chandelier of dark hanging shards in a double-height lobby",
    modified: "2026-11-19",
    related: ["how-to-choose-a-custom-chandelier", "crystal-vs-glass-chandelier", "brass-chandelier", "home-lighting-design"],
  },
  {
    slug: "cove-lighting-kerala",
    title: "Cove Lighting for Indian Homes (Kerala Tips)",
    dek: "Draw the recess before the ceiling closes, hide the strip behind a lip, and keep it on its own dimmer.",
    tag: "Technical",
    image: "/images/guides/cove-lighting-kerala/kerala-living-room-cove-lighting.webp",
    imageAlt: "A living room with laterite walls, teak seating, and warm cove light washing a tray ceiling",
    modified: "2026-11-19",
    related: ["ceiling-and-lighting-design", "false-ceiling-chandelier-weight", "colour-of-light"],
  },
  {
    slug: "downlight-placement",
    title: "Downlight Placement in India (Kerala Tips)",
    dek: "Start from the furniture, hide the lamp in a deep fitting, and plan the spots with the fan, cove and chandelier.",
    tag: "Technical",
    image: "/images/guides/downlight-placement/downlights-over-living-room-seating.webp",
    imageAlt: "Recessed downlights placed over a sofa and coffee table, with a ceiling fan on a separate point",
    modified: "2026-11-19",
    related: ["why-downlights-glare", "cove-lighting-kerala", "ceiling-and-lighting-design"],
  },
  {
    slug: "track-lighting",
    title: "Track and Magnetic Track Lighting for a Home",
    dek: "Use track for an aimed wall or a room that will change, and plan the feed before the ceiling closes.",
    tag: "Technical",
    image: "/images/guides/track-lighting/ceiling-track-lighting-dining-room.webp",
    imageAlt: "A slim black ceiling track with adjustable heads aimed at a laterite wall and a teak dining table",
    modified: "2026-11-19",
    related: ["ceiling-and-lighting-design", "downlight-placement", "why-downlights-glare"],
  },
  {
    slug: "bathroom-lighting-design",
    title: "Bathroom Lighting for Indian Homes (Kerala Tips)",
    dek: "Plan the points before the tiles go on, light the face from the sides, and use a fitting rated for a damp room.",
    tag: "Technical",
    image: "/images/guides/bathroom-lighting-design/kerala-bathroom-vanity-lighting.webp",
    imageAlt: "A bathroom with a stone vanity, a mirror lit from both sides, and a recessed downlight over the shower",
    modified: "2026-11-19",
    related: ["home-lighting-design", "ip-rating-for-outdoor-lights", "colour-of-light"],
  },
  {
    slug: "outdoor-balcony-lighting-kerala",
    title: "Outdoor Lighting for Indian Homes (Kerala Tips)",
    dek: "Light the seat, the door and the steps first, and choose fittings for the monsoon before the plaster goes on.",
    tag: "Technical",
    image: "/images/guides/outdoor-balcony-lighting-kerala/kerala-villa-facade-lighting.webp",
    imageAlt: "A tropical modern villa at night, with warm facade uplights, path lights along the driveway, and a lit balcony",
    modified: "2026-11-19",
    related: ["ip-rating-for-outdoor-lights", "coastal-lighting-kerala", "home-lighting-design"],
  },
  {
    slug: "dining-room-lighting-design",
    title: "Dining Room Lighting Design: Start With the Table",
    dek: "Size the light to the table, hang it 75 to 90 cm above the top, and give it its own switch.",
    tag: "Technical",
    image: "/images/guides/chandelier-size-calculator/dining-chandelier-scale.webp",
    imageAlt: "A brass chandelier hanging over a dining table in a modern apartment, sized to the table rather than the whole room",
    modified: "2026-11-20",
    related: ["chandelier-size-calculator", "chandelier-for-living-room", "chandelier-with-ceiling-fan", "home-lighting-design"],
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
