import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

/**
 * Allow all crawlers, including AI crawlers (GPTBot, PerplexityBot, ClaudeBot,
 * Google-Extended), this is a public marketing site and AI citations are a
 * growth channel here.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${site.domain}/sitemap.xml`,
    host: site.domain,
  };
}
