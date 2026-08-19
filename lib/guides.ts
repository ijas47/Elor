export interface Guide {
  slug: string;
  title: string;
  dek: string;
  tag: "Pricing" | "Buying Guide" | "Technical" | "Local";
  image: string;
  updated: string;
}

/**
 * The editorial guides index. City/store content is NOT here — each store city
 * lives at /stores/{city} with LightingStore schema, and service-area cities
 * (where we deliver but have no premises) will live under /lighting/{city}.
 * Keeping them apart is what stops the two page types cannibalising each other.
 */
export const guides: Guide[] = [
  {
    slug: "how-to-choose-a-custom-chandelier",
    title: "How to Choose a Custom Chandelier — Villa, Duplex or Hotel",
    dek: "What actually changes between a living room, a stairwell and a lobby, and six questions to answer before you choose anything.",
    tag: "Buying Guide",
    image: "/work/w3-showroom.jpg",
    updated: "19 August 2026",
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
    slug: "chandelier-pricing-guide",
    title: "What Does a Custom Chandelier Cost in India?",
    dek: "Ready-collection price bands, what drives bespoke pricing, and how to budget before you call anyone.",
    tag: "Pricing",
    image: "/lifestyle/showroom-grand.jpg",
    updated: "19 August 2026",
  },
];
