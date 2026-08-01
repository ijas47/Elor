import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "/", priority: 1.0, freq: "weekly" as const },
    { path: "/collections", priority: 0.9, freq: "weekly" as const },
    { path: "/customisation", priority: 0.9, freq: "monthly" as const },
    { path: "/consultation", priority: 0.8, freq: "monthly" as const },
    { path: "/stores", priority: 0.7, freq: "monthly" as const },
  ];
  const now = new Date();
  return routes.map((r) => ({
    url: `${site.domain}${r.path}`,
    lastModified: now,
    changeFrequency: r.freq,
    priority: r.priority,
  }));
}
