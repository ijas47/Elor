import type { CSSProperties, ReactNode } from "react";

/**
 * Cinematic title reveal. Each line rises out from a clipped mask, in
 * sequence. Pure CSS keyframes (globals.css .hero-rise), so it starts at first
 * paint instead of waiting for JS to hydrate, which was holding the hero
 * headline (the home page LCP element) invisible for several seconds on mobile.
 * Reduced motion disables the animation in the stylesheet.
 *
 * Use <i>…</i> inside a line to mark the italic gold accent word(s).
 */

interface Props {
  lines: ReactNode[]; // each entry is one visual line
  className?: string;
  delay?: number;
}

export function HeroTitle({ lines, className = "", delay = 0.15 }: Props) {
  return (
    <h1 className={className} style={{ margin: 0 }}>
      {lines.map((line, i) => (
        <span
          key={i}
          style={{ display: "block", overflow: "hidden", paddingBottom: "0.06em" }}
        >
          <span
            data-heroline=""
            className="hero-rise"
            style={{ display: "block", animationDelay: `${delay + i * 0.12}s` } as CSSProperties}
          >
            {line}
          </span>
        </span>
      ))}
    </h1>
  );
}
