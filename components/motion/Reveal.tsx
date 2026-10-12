"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

/**
 * Scroll reveal, CSS-driven.
 *
 * Content is server-rendered VISIBLE. Nothing is hidden in the HTML, so
 * above-the-fold copy and images paint on first frame (good LCP) and the page
 * reads fine with JS off. After hydration, only elements that start BELOW the
 * fold are "armed" (set to their hidden pre-reveal state, while off screen, so
 * there is no visible flash) and then revealed by an IntersectionObserver as
 * they scroll in. Reduced motion is handled in globals.css.
 */

const EASE = "cubic-bezier(0.16, 1, 0.3, 1)";

function belowFold(el: Element) {
  return el.getBoundingClientRect().top > window.innerHeight * 0.98;
}

function useArmedReveal<T extends HTMLElement>(amount: number, once: boolean) {
  const ref = useRef<T>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!belowFold(el)) return; // already on screen: leave it visible
    el.classList.add("reveal-armed");
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            el.classList.add("reveal-in");
            if (once) io.disconnect();
          } else if (!once) {
            el.classList.remove("reveal-in");
          }
        }
      },
      { threshold: amount }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [amount, once]);
  return ref;
}

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
  const ref = useArmedReveal<HTMLElement>(0.15, once);
  const Tag = as as "div";
  const style = {
    "--reveal-y": `${y}px`,
    "--reveal-delay": `${delay}s`,
    "--reveal-ease": EASE,
  } as CSSProperties;
  return (
    <Tag
      ref={ref as React.Ref<HTMLDivElement>}
      className={className ? `reveal ${className}` : "reveal"}
      style={style}
    >
      {children}
    </Tag>
  );
}

/**
 * Staggered container, children fade+rise in sequence once it scrolls in.
 * Same rule: visible in the HTML, armed only if it starts below the fold.
 */
export function Stagger({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useArmedReveal<HTMLDivElement>(0.12, true);
  useEffect(() => {
    ref.current
      ?.querySelectorAll<HTMLElement>(".stagger-item")
      .forEach((n, i) => n.style.setProperty("--stagger-i", String(i)));
  }, [ref]);
  return (
    <div ref={ref} className={className ? `stagger ${className}` : "stagger"}>
      {children}
    </div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={className ? `stagger-item ${className}` : "stagger-item"}>
      {children}
    </div>
  );
}
