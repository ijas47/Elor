"use client";

import { motion, useReducedMotion, useInView, type Variants } from "framer-motion";
import { useRef, type ReactNode } from "react";

/**
 * Scroll reveal. Content is server-rendered inside; we only animate its
 * presentation (opacity/translate), so crawlers always see the text.
 */

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  as?: "div" | "span" | "li" | "section" | "article";
  once?: boolean;
}

export function Reveal({
  children,
  className,
  delay = 0,
  y = 26,
  as = "div",
  once = true,
}: RevealProps) {
  const reduce = useReducedMotion();

  // Reduced motion: render fully visible, no scroll dependency.
  if (reduce) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  const MotionTag = motion[as];
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount: 0.15 }}
      transition={{
        duration: 0.9,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </MotionTag>
  );
}

/**
 * Staggered container — children fade+rise in sequence.
 */
const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.05 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] },
  },
};

export function Stagger({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  // useInView + animate is more reliable than whileInView for variant
  // propagation to children (fires deterministically once 12% is visible).
  const inView = useInView(ref, { once: true, amount: 0.12 });

  if (reduce) return <div className={className}>{children}</div>;

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div className={className} variants={itemVariants}>
      {children}
    </motion.div>
  );
}
