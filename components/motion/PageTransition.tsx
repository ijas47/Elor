"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

/**
 * Route entrance. Uses a CSS keyframe (not a JS animation) so it ALWAYS
 * settles at opacity:1 — it can never get stuck mid-animation and dim the
 * page. Keyed on pathname so it re-runs on navigation. Respects
 * prefers-reduced-motion via the stylesheet.
 */
export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  return (
    <main key={pathname} className="page-enter">
      {children}
    </main>
  );
}
