"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Cinematic title reveal. Splits a line into words that rise out from a
 * clipped mask, in sequence. The real text is passed as `lines` and rendered
 * in the DOM, so it's fully indexable — we animate presentation only.
 *
 * Use <i>…</i> inside a line to mark the italic gold accent word(s).
 */

interface Props {
  lines: ReactNode[]; // each entry is one visual line
  className?: string;
  delay?: number;
}

export function HeroTitle({ lines, className = "", delay = 0.15 }: Props) {
  const reduce = useReducedMotion();

  return (
    <h1 className={className} style={{ margin: 0 }}>
      {lines.map((line, i) => (
        <span
          key={i}
          style={{ display: "block", overflow: "hidden", paddingBottom: "0.06em" }}
        >
          <motion.span
            style={{ display: "block" }}
            initial={reduce ? { opacity: 0 } : { y: "108%" }}
            animate={reduce ? { opacity: 1 } : { y: "0%" }}
            transition={{
              duration: 1.05,
              delay: delay + i * 0.12,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </h1>
  );
}
