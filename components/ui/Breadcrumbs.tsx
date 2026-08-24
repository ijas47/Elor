import Link from "next/link";

/**
 * Visible breadcrumb trail, always built from the same crumb list passed to
 * lib/schema.ts's breadcrumbSchema() so the visible trail and the
 * BreadcrumbList markup can never drift apart. Home is prepended here exactly
 * as it is in breadcrumbSchema.
 */
export function Breadcrumbs({ crumbs }: { crumbs: { name: string; path: string }[] }) {
  const items = [{ name: "Home", path: "/" }, ...crumbs];

  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <ol>
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={item.path}>
              {isLast ? (
                <span aria-current="page">{item.name}</span>
              ) : (
                <Link href={item.path}>{item.name}</Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
