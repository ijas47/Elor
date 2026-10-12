/**
 * Plain, descriptive internal links to the guides. Shared by the home page,
 * /customisation, /consultation, the store pages and the footer so every guide
 * is reachable by a normal <a href> from pages outside the guides themselves.
 */
export interface GuideLink {
  href: string;
  label: string;
}

export const roomGuideLinks: GuideLink[] = [
  { href: "/guides/home-lighting-design", label: "Home lighting design" },
  { href: "/guides/chandelier-for-living-room", label: "Living room chandeliers" },
  { href: "/guides/ceiling-and-lighting-design", label: "False ceiling lighting design" },
  { href: "/guides/bedroom-lighting-design", label: "Bedroom lighting design" },
  { href: "/guides/kitchen-lighting-design", label: "Kitchen lighting design" },
  { href: "/guides/staircase-lighting-design", label: "Staircase lighting design" },
];

export const topicGuideLinks: GuideLink[] = [
  { href: "/guides/how-to-choose-a-custom-chandelier", label: "How to choose a custom chandelier" },
  { href: "/guides/wooden-chandelier", label: "Wooden chandeliers" },
  { href: "/guides/brass-chandelier", label: "Brass chandeliers" },
  { href: "/guides/chandelier-with-ceiling-fan", label: "Chandelier with a ceiling fan" },
  { href: "/guides/colour-of-light", label: "Colour of light: Kelvin, CRI and beam angle" },
  { href: "/guides/how-to-clean-a-crystal-chandelier", label: "How to clean a crystal chandelier" },
  { href: "/guides/ip-rating-for-outdoor-lights", label: "IP ratings for outdoor lights" },
];
