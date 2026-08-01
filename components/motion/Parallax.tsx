"use client";

import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef, type ReactNode } from "react";

/**
 * Scroll parallax. Wrap an image/element; it drifts slowly as the section
 * scrolls through the viewport. `speed` is the vertical travel in px.
 */
export function Parallax({
  children,
  speed = 60,
  className,
}: {
  children: ReactNode;
  speed?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const yRaw = useTransform(scrollYProgress, [0, 1], [speed, -speed]);
  const y = reduce ? 0 : yRaw;

  return (
    <div ref={ref} className={className} style={{ overflow: "hidden" }}>
      <motion.div style={{ y, willChange: "transform" }}>{children}</motion.div>
    </div>
  );
}
