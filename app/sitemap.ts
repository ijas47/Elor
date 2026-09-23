import type { MetadataRoute } from "next";
import { site, stores } from "@/lib/site";
import { guides } from "@/lib/guides";
import { pieces } from "@/lib/collections";

// lastModified is the real date each page's content last changed, not the build
// timestamp. Store and guide routes are derived from their data files so a new
// store or guide can never be silently missing from the sitemap.
const staticRoutes = [
  { path: "/", priority: 1.0, freq: "weekly" as const, lastModified: "2026-08-19" },
  { path: "/collections", priority: 0.9, freq: "weekly" as const, lastModified: "2026-08-01" },
  { path: "/customisation", priority: 0.9, freq: "monthly" as const, lastModified: "2026-08-19" },
  { path: "/consultation", priority: 0.8, freq: "monthly" as const, lastModified: "2026-08-19" },
  { path: "/stores", priority: 0.7, freq: "monthly" as const, lastModified: "2026-08-19" },
  { path: "/guides", priority: 0.8, freq: "monthly" as const, lastModified: "2026-08-19" },
  { path: "/for/architects-and-designers", priority: 0.7, freq: "monthly" as const, lastModified: "2026-08-24" },
  { path: "/press", priority: 0.3, freq: "monthly" as const, lastModified: "2026-08-24" },
  { path: "/privacy", priority: 0.2, freq: "yearly" as const, lastModified: "2026-08-19" },
  { path: "/terms", priority: 0.2, freq: "yearly" as const, lastModified: "2026-08-19" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const storeRoutes = stores.map((s) => ({
    path: `/stores/${s.city.toLowerCase()}`,
    priority: 0.8,
    freq: "monthly" as const,
    lastModified: "2026-08-19",
  }));

  const guideRoutes = guides.map((g) => ({
    path: `/guides/${g.slug}`,
    priority: 0.7,
    freq: "monthly" as const,
    lastModified: g.slug === "colour-of-light" || g.slug === "how-a-lighting-plan-is-built" ? "2026-09-23" : "2026-08-19",
  }));

  // Deduplicated, absolute image URLs for the gallery on /collections — the
  // `images` field maps to the sitemap's <image:image> extension, which is a
  // legitimate discovery signal for Google Images independent of whether each
  // image also has ImageObject schema on the page.
  const collectionImages = Array.from(new Set(pieces.map((p) => `${site.domain}${p.image}`)));

  return [...staticRoutes, ...storeRoutes, ...guideRoutes].map((r) => ({
    url: `${site.domain}${r.path}`,
    lastModified: r.lastModified,
    changeFrequency: r.freq,
    priority: r.priority,
    ...(r.path === "/collections" && { images: collectionImages }),
  }));
}
