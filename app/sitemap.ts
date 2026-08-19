import type { MetadataRoute } from "next";
import { site, stores } from "@/lib/site";
import { guides } from "@/lib/guides";

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
    lastModified: "2026-08-19",
  }));

  return [...staticRoutes, ...storeRoutes, ...guideRoutes].map((r) => ({
    url: `${site.domain}${r.path}`,
    lastModified: r.lastModified,
    changeFrequency: r.freq,
    priority: r.priority,
  }));
}
