export interface Guide {
  slug: string;
  title: string;
  dek: string;
  tag: "Pricing" | "City Guide";
  image: string;
  updated: string;
}

export const guides: Guide[] = [
  {
    slug: "chandelier-pricing-guide",
    title: "What Does a Custom Chandelier Cost in India?",
    dek: "Ready-collection price bands, what drives bespoke pricing, and how to budget before you call anyone.",
    tag: "Pricing",
    image: "/lifestyle/showroom-grand.jpg",
    updated: "19 August 2026",
  },
  {
    slug: "custom-chandeliers-kannur",
    title: "Custom Chandeliers & Lighting Design in Kannur",
    dek: "What Elor and Celestial Lights build for Kannur homes and spaces, and how to start.",
    tag: "City Guide",
    image: "/lifestyle/villa-night.jpg",
    updated: "19 August 2026",
  },
  {
    slug: "custom-chandeliers-kochi",
    title: "Custom Chandeliers & Lighting Design in Kochi",
    dek: "What Elor Lighting builds for Kochi homes and spaces, and how to start.",
    tag: "City Guide",
    image: "/work/w4-lounge.jpg",
    updated: "19 August 2026",
  },
  {
    slug: "custom-chandeliers-kozhikode",
    title: "Custom Chandeliers & Lighting Design in Kozhikode",
    dek: "What Elor and Celestial Lights build for Kozhikode homes and spaces, and how to start.",
    tag: "City Guide",
    image: "/work/w1-cascade.jpg",
    updated: "19 August 2026",
  },
];
