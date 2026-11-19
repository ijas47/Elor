"use client";

import { useEffect } from "react";
import { pagePath, trackGaEvent } from "@/lib/analytics";

function eventForHref(href: string): "call_click" | "whatsapp_click" | null {
  const value = href.trim();
  if (value.toLowerCase().startsWith("tel:")) return "call_click";
  try {
    const url = new URL(value, typeof window !== "undefined" ? window.location.origin : "https://www.elorlighting.com");
    const host = url.hostname.replace(/^www\./, "").toLowerCase();
    if (host === "wa.me" || host === "api.whatsapp.com") return "whatsapp_click";
  } catch {
    return null;
  }
  return null;
}

function hrefFromTarget(target: EventTarget | null): string | null {
  if (!(target instanceof Element)) return null;
  const link = target.closest("a[href]");
  if (!(link instanceof HTMLAnchorElement)) return null;
  return link.getAttribute("href") || link.href || null;
}

/**
 * One document-level click listener for tel: and WhatsApp links, mounted once
 * from the root layout. Individual links are left untouched.
 */
export function GaClickListener() {
  useEffect(() => {
    function onClick(event: MouseEvent) {
      const href = hrefFromTarget(event.target);
      if (!href) return;
      const name = eventForHref(href);
      if (!name) return;
      trackGaEvent(name, { page_path: pagePath() });
    }

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
