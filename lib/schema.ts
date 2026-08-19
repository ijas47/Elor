import { site } from "@/lib/site";

// Shared BreadcrumbList builder, used on every non-home page. Pass the crumbs
// after Home, in order — Home is always prepended automatically.
export function breadcrumbSchema(crumbs: { name: string; path: string }[]) {
  const items = [{ name: "Home", path: "/" }, ...crumbs];
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: `${site.domain}${c.path === "/" ? "" : c.path}`,
    })),
  };
}
