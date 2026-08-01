"use client";

import Link from "next/link";
import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "framer-motion";
import { useRef, type ReactNode } from "react";

/**
 * A pill button that leans toward the cursor (subtle magnetic pull).
 * The <Link> stays a real anchor for SSR + prefetch; a motion wrapper
 * carries the transform. Falls back to no motion when reduced-motion is set.
 */

interface Props {
  href: string;
  children: ReactNode;
  variant?: "gold" | "ghost";
  className?: string;
  external?: boolean;
}

export function MagneticButton({
  href,
  children,
  variant = "gold",
  className = "",
  external = false,
}: Props) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 16, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 220, damping: 16, mass: 0.4 });

  function onMove(e: React.MouseEvent) {
    if (reduce || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * 0.28);
    y.set((e.clientY - (r.top + r.height / 2)) * 0.4);
  }
  function onLeave() {
    x.set(0);
    y.set(0);
  }

  const linkProps = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <motion.span
      ref={ref}
      style={{ x: sx, y: sy, display: "inline-flex" }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      <Link href={href} className={`btn btn-${variant} ${className}`} {...linkProps}>
        {children}
      </Link>
    </motion.span>
  );
}
