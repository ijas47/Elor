export interface Guide {
  slug: string;
  title: string;
  dek: string;
  tag: "Pricing" | "Buying Guide" | "Technical" | "Local";
  image: string;
  /** Describes the photograph. Falls back to the title on older cards. */
  imageAlt?: string;
  updated: string;
  /** ISO date for the sitemap. Omit on older guides; the sitemap keeps their dates. */
  modified?: string;
}

/**
 * The editorial guides index. City/store content is NOT here — each store city
 * lives at /stores/{city} with LightingStore schema, and service-area cities
 * (where we deliver but have no premises) will live under /lighting/{city}.
 * Keeping them apart is what stops the two page types cannibalising each other.
 */
export const guides: Guide[] = [
  {
    slug: "how-to-clean-a-crystal-chandelier",
    title: "How to Clean a Crystal Chandelier",
    dek: "Power off at the breaker, wipe in place, and wash only the drops that stay dull.",
    tag: "Technical",
    image: "/video/showroom-crystal.jpg",
    imageAlt: "Crystal chandeliers lit in the showroom",
    updated: "12 October 2026",
    modified: "2026-10-12",
  },
  {
    slug: "ip-rating-for-outdoor-lights",
    title: "IP Rating for Outdoor Lights",
    dek: "IP44 under cover, IP65 where monsoon rain reaches, IP66/67 by the pool. And why the number is not enough on the coast.",
    tag: "Technical",
    image: "/work/w5-garden.jpg",
    imageAlt: "Garden and path lighting at night",
    updated: "12 October 2026",
    modified: "2026-10-12",
  },
  {
    slug: "chandelier-for-living-room",
    title: "Living Room Chandelier for Kerala Homes",
    dek: "Size it to the seating, clear the fan, and put the anchor in the slab before the ceiling closes.",
    tag: "Buying Guide",
    image: "/spaces/living.jpg",
    imageAlt: "A living room with a chandelier, cove light in the tray ceiling, and a lamp beside the sofa",
    updated: "12 October 2026",
    modified: "2026-10-12",
  },
  {
    slug: "ceiling-and-lighting-design",
    title: "False Ceiling Lighting for Kerala Homes",
    dek: "Cove, spots, and the decorative piece are three jobs. The ceiling is drawn after the furniture.",
    tag: "Technical",
    image: "/spaces/living.jpg",
    imageAlt: "A tray ceiling with cove lighting, recessed spots, and a chandelier over the seating",
    updated: "12 October 2026",
    modified: "2026-10-12",
  },
  {
    slug: "home-lighting-design",
    title: "Home Lighting Design for Kerala Houses",
    dek: "One plan for every room, written before the ceilings close. The same job as a house lighting design.",
    tag: "Technical",
    image: "/lifestyle/villa-night.jpg",
    imageAlt: "A house at night with cove light under the slabs, wall lights, and a lit path",
    updated: "12 October 2026",
    modified: "2026-10-12",
  },
  {
    slug: "staircase-lighting-design",
    title: "Staircase Lighting for Kerala Homes",
    dek: "Light the nose of each tread, and hang the void from the slab. The two are separate decisions.",
    tag: "Technical",
    image: "/collections/staircase-cascade.jpg",
    imageAlt: "A red crystal cascade hung in a spiral stair, with a wall light on the landing",
    updated: "12 October 2026",
    modified: "2026-10-12",
  },
  {
    slug: "bedroom-lighting-design",
    title: "Bedroom Lighting for Kerala Homes",
    dek: "Nothing bright over the pillow. A reading light on its own switch, and a dimmable piece in the ceiling.",
    tag: "Technical",
    image: "/spaces/bedroom.jpg",
    imageAlt: "A tiered crystal chandelier in a vaulted bedroom, hung clear of the window",
    updated: "12 October 2026",
    modified: "2026-10-12",
  },
  {
    slug: "kitchen-lighting-design",
    title: "Kitchen Lighting for Kerala Homes",
    dek: "The worktop gets its own light. The pendant over the island is a second circuit, not the task light.",
    tag: "Technical",
    image: "/collections/abstract-rings.jpg",
    imageAlt: "A linear pendant over a dining table, with the kitchen visible beyond",
    updated: "12 October 2026",
    modified: "2026-10-12",
  },
  {
    slug: "wooden-chandelier",
    title: "Wooden Chandelier for Kerala Homes",
    dek: "Wood suits a dry, air-conditioned room. On a humid coast it needs a sealed finish, or another material.",
    tag: "Buying Guide",
    image: "/lifestyle/store-wall.jpg",
    imageAlt: "The Celestial Lights wall, with mosaic pendants and crystal cascades on display",
    updated: "12 October 2026",
    modified: "2026-10-12",
  },
  {
    slug: "brass-chandelier",
    title: "Brass Chandelier for Kerala Homes",
    dek: "Untreated brass pits in salt air. The finish is specified for the room, then the piece is sized to it.",
    tag: "Buying Guide",
    image: "/collections/dandelion-gold.jpg",
    imageAlt: "A brass-coloured sputnik chandelier with frosted glass globes",
    updated: "12 October 2026",
    modified: "2026-10-12",
  },
  {
    slug: "how-to-choose-a-custom-chandelier",
    title: "How to Choose a Custom Chandelier — Villa, Duplex or Hotel",
    dek: "What actually changes between a living room, a stairwell and a lobby, and six questions to answer before you choose anything.",
    tag: "Buying Guide",
    image: "/work/w3-showroom.jpg",
    updated: "19 August 2026",
  },
  {
    slug: "how-a-lighting-plan-is-built",
    title: "How a Lighting Plan Is Built — Layers, Walls and Scenes",
    dek: "What gets light, in what order, and why the ceiling is the last thing drawn. The method behind an Elor plan.",
    tag: "Technical",
    image: "/spaces/living.jpg",
    updated: "23 September 2026",
  },
  {
    slug: "why-downlights-glare",
    title: "Why a Downlight Glares — Baffles, Cutoff and the Seated View",
    dek: "If you can see the lamp from the sofa, the fitting is too shallow. What to ask for before the ceiling closes.",
    tag: "Technical",
    image: "/spaces/living.jpg",
    updated: "23 September 2026",
  },
  {
    slug: "colour-of-light",
    title: "Kelvin, CRI and Beam Angle — How to Read a Light",
    dek: "The three numbers on a specification that decide whether a room feels like a home or a clinic, and what to ask for in Kerala.",
    tag: "Technical",
    image: "/lifestyle/showroom-grand.jpg",
    updated: "23 September 2026",
  },
  {
    slug: "chandelier-size-calculator",
    title: "Chandelier Size Calculator — Diameter, Drop & Fan Clearance",
    dek: "Put in the room, get back a diameter and a drop — plus the two checks Indian rooms actually need.",
    tag: "Technical",
    image: "/work/w1-cascade.jpg",
    updated: "20 August 2026",
  },
  {
    slug: "chandelier-with-ceiling-fan",
    title: "Chandelier With a Ceiling Fan — How to Make Both Work",
    dek: "Four layouts that work, the clearances they need, and the wiring mistake we get called to fix most often.",
    tag: "Technical",
    image: "/work/w4-lounge.jpg",
    updated: "20 August 2026",
  },
  {
    slug: "false-ceiling-chandelier-weight",
    title: "Can a False Ceiling Hold a Chandelier?",
    dek: "What gypsum, POP and RCC each carry, what fixtures weigh, and why the anchor goes in before the ceiling closes.",
    tag: "Technical",
    image: "/work/w2-corridor.jpg",
    updated: "20 August 2026",
  },
  {
    slug: "crystal-vs-glass-chandelier",
    title: "Crystal vs Glass vs Acrylic Chandeliers",
    dek: "How the four materials differ in light, weight, cleaning and cost — and which suits a humid coast or a hotel lobby.",
    tag: "Buying Guide",
    image: "/lifestyle/showroom-grand.jpg",
    updated: "20 August 2026",
  },
  {
    slug: "coastal-lighting-kerala",
    title: "Coastal & Humid Climate Lighting in Kerala",
    dek: "Salt air pits untreated brass and iron within two seasons. What lasts, what IP rating you need, and the fixings that fail first.",
    tag: "Technical",
    image: "/work/w5-garden.jpg",
    updated: "20 August 2026",
  },
  {
    slug: "how-to-choose-a-chandelier-shop",
    title: "How to Choose a Chandelier Shop or Fabricator in India",
    dek: "Seven questions that separate a shop that makes chandeliers from one that only imports and resells them.",
    tag: "Buying Guide",
    image: "/lifestyle/store-wall.jpg",
    updated: "24 August 2026",
  },
  {
    slug: "chandelier-pricing-guide",
    title: "What Does a Custom Chandelier Cost in India?",
    dek: "Ready-collection price bands, what drives bespoke pricing, and how to budget before you call anyone.",
    tag: "Pricing",
    image: "/lifestyle/showroom-grand.jpg",
    updated: "19 August 2026",
  },
];
