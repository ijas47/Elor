/**
 * Real pixel dimensions for /public images used in ImageObject schema and the
 * sitemap's image extension. Google's ImageObject guidance wants actual
 * width/height, not a guess — these were read directly off the files with
 * `sips -g pixelWidth -g pixelHeight`, not inferred from CSS display size.
 *
 * Only images that appear in structured data need an entry here. Re-run the
 * sips command and update this file if a collection image is replaced.
 */
export const imageDimensions: Record<string, { width: number; height: number }> = {
  "/collections/abstract-rings.jpg": { width: 1500, height: 1500 },
  "/collections/acrylic-leaf.jpg": { width: 1500, height: 1500 },
  "/collections/amber-crystal.png": { width: 500, height: 500 },
  "/collections/arbor-wall.jpg": { width: 1500, height: 1500 },
  "/collections/arc-facade.jpg": { width: 1500, height: 1500 },
  "/collections/arctic-cage.jpg": { width: 1500, height: 1500 },
  "/collections/asgard.jpg": { width: 3200, height: 3200 },
  "/collections/astral-debris.jpg": { width: 1500, height: 1500 },
  "/collections/aurora-capsule.webp": { width: 1500, height: 1500 },
  "/collections/aurora-loop-sconce.webp": { width: 1500, height: 1500 },
  "/collections/autumn-leaves.jpg": { width: 1500, height: 1500 },
  "/collections/beach-view.jpg": { width: 1000, height: 1000 },
  "/collections/blossom-wall.webp": { width: 1500, height: 1500 },
  "/collections/butterfly-pendant.jpg": { width: 1024, height: 1024 },
  "/collections/coastal-facade.jpg": { width: 1500, height: 1500 },
  "/collections/crescent-moon.png": { width: 1500, height: 1500 },
  "/collections/crown-jewel-pendant.jpg": { width: 1500, height: 1500 },
  "/collections/crystal-petal.jpg": { width: 850, height: 850 },
  "/collections/dandelion-gold.jpg": { width: 800, height: 800 },
  "/collections/double-height-stair.jpg": { width: 1269, height: 1269 },
  "/collections/staircase-cascade.jpg": { width: 1000, height: 1000 },
  "/collections/villa-facade.jpg": { width: 1400, height: 1050 },
};
