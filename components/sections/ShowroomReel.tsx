"use client";

import { useEffect, useRef } from "react";
import { Reveal } from "@/components/motion/Reveal";
import styles from "./ShowroomReel.module.css";

const clips = [
  { src: "/video/showroom-crystal.mp4", poster: "/video/showroom-crystal.jpg", caption: "Crystal bubble chandeliers" },
  { src: "/video/showroom-petal.mp4", poster: "/video/showroom-petal.jpg", caption: "Cascading petal pendants" },
  { src: "/video/showroom-orb.mp4", poster: "/video/showroom-orb.jpg", caption: "Crystal orbs over a stairwell" },
];

export function ShowroomReel() {
  const refs = useRef<(HTMLVideoElement | null)[]>([]);

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
    <div className={styles.reel}>
      {clips.map((c, i) => (
        <Reveal key={c.src} delay={i * 0.08} className={styles.item}>
          <figure className={styles.figure}>
            <video
              ref={(el) => {
                refs.current[i] = el;
              }}
              src={c.src}
              poster={c.poster}
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
