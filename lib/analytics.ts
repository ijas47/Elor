/**
 * Thin wrapper around the gtag stub installed in the root layout.
 * If gtag is missing (blocked, or the snippet has not run), events are dropped.
 */
type GtagFn = (...args: unknown[]) => void;

function getGtag(): GtagFn | undefined {
  if (typeof window === "undefined") return undefined;
  const gtag = (window as Window & { gtag?: GtagFn }).gtag;
  return typeof gtag === "function" ? gtag : undefined;
}

export function trackGaEvent(name: string, params?: Record<string, string>) {
  const gtag = getGtag();
  if (!gtag) return;
  gtag("event", name, params);
}

export function pagePath(): string {
  if (typeof window === "undefined") return "";
  return window.location.pathname;
}
