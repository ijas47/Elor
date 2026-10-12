"use client";

import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/motion/Reveal";
import styles from "./ShowroomReel.module.css";

const clips = [
  { src: "/video/showroom-crystal.mp4", poster: "/video/showroom-crystal.jpg", caption: "Crystal bubble chandeliers" },
  { src: "/video/showroom-petal.mp4", poster: "/video/showroom-petal.jpg", caption: "Cascading petal pendants" },
  { src: "/video/showroom-orb.mp4", poster: "/video/showroom-orb.jpg", caption: "Crystal orbs over a stairwell" },
];

export function ShowroomReel() {
  const refs = useRef<(HTMLVideoElement | null)[]>([]);
  const reelRef = useRef<HTMLDivElement>(null);
  // Posters are set only as the reel approaches the viewport. As plain
  // poster= attributes they were fetched at first load (~130 KB, Medium
  // priority) and competed with the home hero image, the LCP element.
  const [near, setNear] = useState(false);

  useEffect(() => {
    const el = reelRef.current;
    if (!el || !("IntersectionObserver" in window)) {
      setNear(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setNear(true);
          io.disconnect();
        }
      },
      { rootMargin: "1200px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          const v = e.target as HTMLVideoElement;
          if (e.isIntersecting) {
            v.play().catch(() => {});
            v.parentElement?.classList.add(styles.playing);
          } else {
            v.pause();
            v.parentElement?.classList.remove(styles.playing);
          }
        });
      },
      { threshold: 0.4 }
    );
    refs.current.forEach((v) => v && io.observe(v));
    return () => io.disconnect();
  }, []);

  return (
    <div ref={reelRef} className={styles.reel}>
      {clips.map((c, i) => (
        <Reveal key={c.src} delay={i * 0.08} className={styles.item}>
          <figure className={styles.figure}>
            <video
              ref={(el) => {
                refs.current[i] = el;
              }}
              src={c.src}
              poster={near ? c.poster : undefined}
              muted
              loop
              playsInline
              preload="none"
            />
            <span className={styles.play} aria-hidden="true">
              ▶
            </span>
            <figcaption>{c.caption}</figcaption>
          </figure>
        </Reveal>
      ))}
    </div>
  );
}
