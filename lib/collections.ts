/**
 * Curated collection shown on this marketing site.
 * No prices, no cart, every piece hands off to Celestial Lights (site.shopUrl).
 * Real photography lives in /public/collections.
 */

export type Category =
  | "Chandeliers"
  | "Pendants"
  | "Wall & Sconce"
  | "Outdoor & Facade";

export interface Piece {
  slug: string;
  name: string;
  category: Category;
  image: string;
  blurb: string;
  tag?: string;
  /** relative aspect for the masonry-ish gallery: "tall" | "wide" | "square" */
  ratio?: "tall" | "wide" | "square";
}

export const categories: { label: Category; note: string }[] = [
  { label: "Chandeliers", note: "Statement crystal, tiered & staircase pieces" },
  { label: "Pendants", note: "Clusters, rings & single-drop pendants" },
  { label: "Wall & Sconce", note: "Ambient wall light & reading sconces" },
  { label: "Outdoor & Facade", note: "Wall washers, bollards & facade light" },
];

export const pieces: Piece[] = [
  {
    slug: "asgard-crystal-chandelier",
    name: "Asgard Crystal Chandelier",
    category: "Chandeliers",
    image: "/collections/asgard.jpg",
    blurb: "A cascading crystal column for double-height voids and grand foyers.",
    tag: "Signature",
    ratio: "tall",
  },
  {
    slug: "abstract-five-ring",
    name: "Abstract Five-Ring",
    category: "Chandeliers",
    image: "/collections/abstract-rings.jpg",
    blurb: "Concentric LED rings that float above a dining table like orbits.",
    tag: "Bestseller",
    ratio: "square",
  },
  {
    slug: "crystal-petal",
    name: "Lipheion Crystal Petal",
    category: "Chandeliers",
    image: "/collections/crystal-petal.jpg",
    blurb: "Hand-set petals throw a warm, faceted glow across the room.",
    ratio: "wide",
  },
  {
    slug: "astral-debris",
    name: "Astral Debris",
    category: "Chandeliers",
    image: "/collections/astral-debris.jpg",
    blurb: "Scattered glass fragments suspended in a slow, sculptural drift.",
    tag: "New",
    ratio: "square",
  },
  {
    slug: "autumn-leaves",
    name: "Autumn Leaves Cascade",
    category: "Chandeliers",
    image: "/collections/autumn-leaves.jpg",
    blurb: "Gilded leaves fall through a stairwell in a single, quiet gesture.",
    ratio: "tall",
  },
  {
    slug: "amber-crystal",
    name: "Amber Crystal Six-Light",
    category: "Chandeliers",
    image: "/collections/amber-crystal.png",
    blurb: "Warm amber crystal for a living room that glows at dusk.",
    ratio: "square",
  },
  {
    slug: "double-height-stair",
    name: "22-Light Staircase",
    category: "Chandeliers",
    image: "/collections/double-height-stair.jpg",
    blurb: "Twenty-two lights engineered for double-height stairwells.",
    tag: "Made to measure",
    ratio: "tall",
  },
  {
    slug: "spiral-staircase-cascade",
    name: "Spiral Staircase Cascade",
    category: "Chandeliers",
    image: "/collections/staircase-cascade.jpg",
    blurb: "A crystal spiral that falls the full height of a stairwell.",
    tag: "Made to measure",
    ratio: "tall",
  },
  {
    slug: "acrylic-leaf",
    name: "Acrylic Leaf Dining",
    category: "Chandeliers",
    image: "/collections/acrylic-leaf.jpg",
    blurb: "Layered acrylic leaves in a soft, organic canopy.",
    ratio: "wide",
  },
  {
    slug: "dandelion-gold",
    name: "Asteraceae Gold",
    category: "Pendants",
    image: "/collections/dandelion-gold.jpg",
    blurb: "A gold dandelion burst, delicate, architectural, unforgettable.",
    tag: "Signature",
    ratio: "square",
  },
  {
    slug: "crown-jewel-pendant",
    name: "Crown Jewel Pendant",
    category: "Pendants",
    image: "/collections/crown-jewel-pendant.jpg",
    blurb: "A jewelled single-drop for islands, bedsides and reading nooks.",
    ratio: "tall",
  },
  {
    slug: "arctic-cage",
    name: "Arctic Cage",
    category: "Pendants",
    image: "/collections/arctic-cage.jpg",
    blurb: "A crisp caged pendant with a clean, modern silhouette.",
    ratio: "square",
  },
  {
    slug: "aurora-capsule",
    name: "Aurora Capsule",
    category: "Pendants",
    image: "/collections/aurora-capsule.webp",
    blurb: "Capsule diffusers in a linear run over long tables.",
    ratio: "wide",
  },
  {
    slug: "butterfly-pendant",
    name: "Butterfly Crystal",
    category: "Pendants",
    image: "/collections/butterfly-pendant.jpg",
    blurb: "Crystal wings that catch and scatter warm light.",
    ratio: "square",
  },
  {
    slug: "beach-view",
    name: "Beach View",
    category: "Pendants",
    image: "/collections/beach-view.jpg",
    blurb: "Airy glass drops the colour of sea-glass at golden hour.",
    ratio: "square",
  },
  {
    slug: "arbor-wall",
    name: "Arbor Wall Light",
    category: "Wall & Sconce",
    image: "/collections/arbor-wall.jpg",
    blurb: "A branching sconce that washes texture up the wall.",
    ratio: "square",
  },
  {
    slug: "blossom-wall",
    name: "Blossom Arc Glow",
    category: "Wall & Sconce",
    image: "/collections/blossom-wall.webp",
    blurb: "An arc of soft bloom-light for hallways and headboards.",
    ratio: "tall",
  },
  {
    slug: "aurora-loop-sconce",
    name: "Aurora Loop Sconce",
    category: "Wall & Sconce",
    image: "/collections/aurora-loop-sconce.webp",
    blurb: "A looping ribbon of light, equal parts sculpture and sconce.",
    ratio: "square",
  },
  {
    slug: "crescent-moon",
    name: "Crescent Moon",
    category: "Wall & Sconce",
    image: "/collections/crescent-moon.png",
    blurb: "A half-moon frame that glows like a rising crescent.",
    ratio: "square",
  },
  {
    slug: "arc-facade",
    name: "Arc Facade Light",
    category: "Outdoor & Facade",
    image: "/collections/arc-facade.jpg",
    blurb: "Up-down wall washers that trace a building after dark.",
    ratio: "wide",
  },
  {
    slug: "coastal-facade",
    name: "Coastal Radiance",
    category: "Outdoor & Facade",
    image: "/collections/coastal-facade.jpg",
    blurb: "Weatherproof facade light built for the Kerala coast.",
    ratio: "square",
  },
  {
    slug: "villa-facade",
    name: "Villa Facade & Landscape",
    category: "Outdoor & Facade",
    image: "/collections/villa-facade.jpg",
    blurb: "A full exterior scheme, cove, facade wash and path lighting.",
    tag: "Project",
    ratio: "wide",
  },
];
