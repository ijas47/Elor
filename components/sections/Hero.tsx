"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { HeroTitle } from "@/components/motion/HeroTitle";
import styles from "./Hero.module.css";

/**
 * Scroll-scrubbed hero. The section is four viewports tall and its contents
 * are pinned, so scrolling moves through a sequence of scenes rather than down
 * the page. The scenes escalate in scale (one fixture, the room, the full drop,
 * the building) and the headline changes with each one.
 *
 * Every headline is in the DOM at build time and only its presentation
 * animates, so the pinning costs nothing in SEO.
 *
 * Reduced motion is handled entirely in CSS, not by branching here: rendering a
 * different tree for it would not match what the server sent and hydration
 * would fail. The media query collapses the track to one static scene.
 */

const STAGES = [
  {
    src: "/hero/stage-1-piece.jpg",
    alt: "A custom crystal candle chandelier, lit, filling the frame",
    eyebrow: "Custom chandeliers · Consultation · Installation",
    lines: [
      <>One piece,</>,
      <>
        made <i className="serif-i">once.</i>
      </>,
    ],
    lede: "We build custom chandeliers from any picture you send us. A Pinterest screenshot, a render, a sketch on paper. Sized to your ceiling, finished to match your interiors.",
  },
  {
    src: "/hero/stage-2-room.jpg",
    alt: "A hotel lobby lounge lit by a crystal ceiling installation and warm cove lighting",
    eyebrow: "Then the room",
    lines: [
      <>Then the room</>,
      <>
        arranges itself <i className="serif-i">around it.</i>
      </>,
    ],
    lede: "Ambient, task and accent light planned as one scheme, so the room has an evening as well as a daytime. We mark every fixture position with you before anything is ordered.",
  },
  {
    src: "/hero/stage-3-void.jpg",
    alt: "A tiered gold crystal cascade falling through a double-height space",
    eyebrow: "Then every floor it falls through",
    lines: [
      <>Then every floor</>,
      <>
        it <i className="serif-i">falls through.</i>
      </>,
    ],
    lede: "Stairwells, voids and double-height halls are where a made-to-measure piece earns its keep. Built to your exact drop and diameter, rigged and load-fixed by our own crew.",
  },
  {
    src: "/hero/stage-4-building.jpg",
    alt: "A building facade at night, its terraces outlined in warm cove lighting",
    eyebrow: "Then the whole building",
    lines: [
      <>Then the whole building,</>,
      <>
        from <i className="serif-i">the road.</i>
      </>,
    ],
    lede: "Facade, landscape and approach lighting, designed so the building reads as one idea after dark. One team from the first sketch to the final switch-on. Pan-India, from Kerala.",
  },
];

const N = STAGES.length;
const SEG = 1 / N;

/**
 * Scenes cross-dissolve: each image fades out over the same window the next one
 * fades in, centred on the boundary between their segments, so only ever two
 * layers are mixing.
 */
function useSceneOpacity(p: MotionValue<number>, i: number) {
  return useTransform(
    p,
    [i * SEG - 0.06, i * SEG + 0.01, (i + 1) * SEG - 0.06, (i + 1) * SEG + 0.01],
    // the first scene is already on screen, the last one has to stay
    [i === 0 ? 1 : 0, 1, 1, i === N - 1 ? 1 : 0]
  );
}

/**
 * Copy does NOT cross-dissolve. Two superimposed headlines are unreadable, so
 * each one finishes fading out exactly where the next starts fading in.
 */
function useCopyOpacity(p: MotionValue<number>, i: number) {
  return useTransform(
    p,
    [i * SEG - 0.04, i * SEG + 0.03, (i + 1) * SEG - 0.09, (i + 1) * SEG - 0.04],
    [i === 0 ? 1 : 0, 1, 1, i === N - 1 ? 1 : 0]
  );
}

function StageMedia({
  stage,
  i,
  progress,
}: {
  stage: (typeof STAGES)[number];
  i: number;
  progress: MotionValue<number>;
}) {
  const opacity = useSceneOpacity(progress, i);
  // a slow push-in across the scene's own window, so it never sits still
  const scale = useTransform(progress, [i * SEG - SEG, (i + 1) * SEG], [1.13, 1.0]);

  return (
    <motion.div className={styles.layer} style={{ opacity }} aria-hidden={i > 0}>
      <motion.div className={styles.layerInner} style={{ scale }}>
        <Image
          src={stage.src}
          alt={stage.alt}
          fill
          priority={i === 0}
          sizes="100vw"
          className={styles.img}
        />
      </motion.div>
    </motion.div>
  );
}

function StageCopy({
  stage,
  i,
  progress,
}: {
  stage: (typeof STAGES)[number];
  i: number;
  progress: MotionValue<number>;
}) {
  const opacity = useCopyOpacity(progress, i);
  const y = useTransform(progress, [i * SEG - 0.05, (i + 1) * SEG - 0.03], [26, -26]);

  return (
    <motion.div
      className={styles.copy}
      style={{ opacity, y }}
      aria-hidden={i > 0}
      // stages that are faded out must not catch clicks or the tab order
      inert={i > 0}
    >
      <p className={`eyebrow ${styles.eyebrow}`}>{stage.eyebrow}</p>
      {i === 0 ? (
        <HeroTitle className={`h-xl ${styles.title}`} lines={stage.lines} />
      ) : (
        <p className={`h-xl ${styles.title}`}>
          {stage.lines.map((l, k) => (
            <span key={k} style={{ display: "block" }}>
              {l}
            </span>
          ))}
        </p>
      )}
      <p className={`lede ${styles.lede}`}>{stage.lede}</p>
    </motion.div>
  );
}

function Tick({ i, progress }: { i: number; progress: MotionValue<number> }) {
  const active = useTransform(
    progress,
    [i * SEG - SEG * 0.3, i * SEG + SEG * 0.2, (i + 1) * SEG - SEG * 0.2, (i + 1) * SEG + SEG * 0.3],
    [0.22, 1, 1, 0.22]
  );
  return <motion.span className={styles.tick} style={{ opacity: active }} />;
}

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const cueOpacity = useTransform(scrollYProgress, [0, 0.06], [1, 0]);

  return (
    <div ref={ref} className={styles.track} style={{ height: `${N * 100}svh` }}>
      <section className={`${styles.hero} ${styles.pinned}`}>
        <div className={styles.media}>
          {STAGES.map((s, i) => (
            <StageMedia key={s.src} stage={s} i={i} progress={scrollYProgress} />
          ))}
          <div className={styles.scrim} />
          <div className={styles.vignette} />
        </div>

        <div className={`wrap ${styles.inner}`}>
          <div className={styles.stack}>
            {STAGES.map((s, i) => (
              <StageCopy key={s.src} stage={s} i={i} progress={scrollYProgress} />
            ))}
          </div>

          <motion.div
            className={styles.ctas}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <MagneticButton href="/customisation" variant="gold">
              Create a Custom Piece <span className="arr">→</span>
            </MagneticButton>
            <MagneticButton href="/consultation" variant="ghost">
              Book a Free Consultation
            </MagneticButton>
          </motion.div>

          <motion.div
            className={styles.note}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.95, duration: 1 }}
          >
            <span className={styles.dot} />3 experience stores in Kerala · Kannur ·
            Kochi · Kozhikode
          </motion.div>
        </div>

        <div className={styles.rail} aria-hidden>
          {STAGES.map((s, i) => (
            <Tick key={s.src} i={i} progress={scrollYProgress} />
          ))}
        </div>

        <motion.div className={styles.scroll} style={{ opacity: cueOpacity }}>
          <span>Scroll</span>
          <motion.span
            className={styles.scrollLine}
            animate={{ scaleY: [0, 1, 0], transformOrigin: ["top", "top", "bottom"] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </section>
    </div>
  );
}
