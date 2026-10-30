import { N_STAGES, sceneOpacity, sceneScale, copyOpacity, copyY, tickOpacity, cueOpacity } from "./heroTimeline";

/**
 * Scroll driver for the home hero. Loaded with a dynamic import after the page
 * has painted, so the server-rendered first scene (the LCP image) never waits
 * on it. It only writes inline opacity/transform on elements that are already
 * in the DOM, starting from the same progress-0 values the server sent, so
 * nothing moves when it attaches.
 */
export function attachHeroScroll(track: HTMLElement) {
  const q = (s: string) => Array.from(track.querySelectorAll<HTMLElement>(s));
  const layers = q("[data-hero-layer]");
  const inners = q("[data-hero-layer-inner]");
  const copies = q("[data-hero-copy]");
  const ticks = q("[data-hero-tick]");
  const cue = track.querySelector<HTMLElement>("[data-hero-cue]");

  let frame = 0;
  function apply() {
    frame = 0;
    const rect = track.getBoundingClientRect();
    const span = rect.height - window.innerHeight;
    // useScroll offset ["start start", "end end"]
    const p = span > 0 ? Math.min(1, Math.max(0, -rect.top / span)) : 0;
    for (let i = 0; i < N_STAGES; i++) {
      if (layers[i]) layers[i].style.opacity = String(sceneOpacity(p, i));
      if (inners[i]) inners[i].style.transform = `scale(${sceneScale(p, i)})`;
      if (copies[i]) {
        copies[i].style.opacity = String(copyOpacity(p, i));
        copies[i].style.transform = `translateY(${copyY(p, i)}px)`;
      }
      if (ticks[i]) ticks[i].style.opacity = String(tickOpacity(p, i));
    }
    if (cue) cue.style.opacity = String(cueOpacity(p));
  }
  const schedule = () => {
    if (!frame) frame = requestAnimationFrame(apply);
  };
  window.addEventListener("scroll", schedule, { passive: true });
  window.addEventListener("resize", schedule);
  apply(); // in case the page was restored mid-scroll
  return () => {
    window.removeEventListener("scroll", schedule);
    window.removeEventListener("resize", schedule);
    if (frame) cancelAnimationFrame(frame);
  };
}
