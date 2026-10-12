"use client";

import { useEffect } from "react";

/**
 * Renders nothing. After hydration it pulls in the scroll driver as its own
 * chunk and attaches it to the hero track. Reduced motion is left to the
 * stylesheet, which collapses the track to the static first scene.
 */
export function HeroScroll({ trackId }: { trackId: string }) {
  useEffect(() => {
    let detach: (() => void) | undefined;
    let cancelled = false;
    import("./heroScroll").then(({ attachHeroScroll }) => {
      const track = document.getElementById(trackId);
      if (!cancelled && track) detach = attachHeroScroll(track);
    });
    return () => {
      cancelled = true;
      detach?.();
    };
  }, [trackId]);
  return null;
}
