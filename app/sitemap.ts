import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

// lastModified is the real date each page's content last changed (from git
// history), not the build timestamp — update the date here when you make a
// meaningful content change to that page.
const routes = [
  { path: "/", priority: 1.0, freq: "weekly" as const, lastModified: "2026-08-19" },
  { path: "/collections", priority: 0.9, freq: "weekly" as const, lastModified: "2026-08-01" },
  { path: "/customisation", priority: 0.9, freq: "monthly" as const, lastModified: "2026-08-19" },
  { path: "/consultation", priority: 0.8, freq: "monthly" as const, lastModified: "2026-08-19" },
  { path: "/stores", priority: 0.7, freq: "monthly" as const, lastModified: "2026-08-19" },
  { path: "/guides", priority: 0.8, freq: "monthly" as const, lastModified: "2026-08-19" },
  { path: "/guides/chandelier-pricing-guide", priority: 0.7, freq: "monthly" as const, lastModified: "2026-08-19" },
  { path: "/guides/how-to-choose-a-custom-chandelier", priority: 0.7, freq: "monthly" as const, lastModified: "2026-08-19" },
  { path: "/guides/custom-chandeliers-kannur", priority: 0.7, freq: "monthly" as const, lastModified: "2026-08-19" },
  { path: "/guides/custom-chandeliers-kochi", priority: 0.7, freq: "monthly" as const, lastModified: "2026-08-19" },
  { path: "/guides/custom-chandeliers-kozhikode", priority: 0.7, freq: "monthly" as const, lastModified: "2026-08-19" },
  { path: "/privacy", priority: 0.2, freq: "yearly" as const, lastModified: "2026-08-19" },
  { path: "/terms", priority: 0.2, freq: "yearly" as const, lastModified: "2026-08-19" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((r) => ({
    url: `${site.domain}${r.path}`,
    lastModified: r.lastModified,
    changeFrequency: r.freq,
    priority: r.priority,
  }));
}
