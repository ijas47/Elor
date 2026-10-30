"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

/**
 * Route wrapper. Keyed on pathname so client navigations remount the page.
 * The entrance does not start from opacity 0: that blanked the first paint.
 */
export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  return (
    <main key={pathname} className="page-enter">
      {children}
    </main>
  );
}
