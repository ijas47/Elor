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
 * Scroll-scrubbed hero. The section is three viewports tall and its contents
 * are pinned, so scrolling moves through a sequence of scenes rather than down
 * the page.
 *
 * The copy follows a positioning-first structure rather than an atmospheric one:
 * scene 1 says what Elor is (the consulting and custom arm of Celestial Lights)
 * and who it is for, scene 2 names the status quo it displaces, scene 3 gives
 * the differentiator and points at the stores. Each headline should fail the
 * swap test for a competitor.
 *
 * Scene 2 attacks the default, not a trade. Naming the electrician was both
 * needlessly rude and self-defeating, since our own crew does the installing.
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
    src: "/hero/stage-1-installation.jpg",
    alt: "A bespoke glass leaf installation suspended across a double-height lobby ceiling",
    eyebrow: "Lighting consulting & custom lighting · By Celestial Lights",
    lines: [
      <>Perfect light is a</>,
      <>
        question of <i className="serif-i">position.</i>
      </>,
    ],
    lede: "Elor is the lighting consulting and custom manufacturing arm of Celestial Lights. We work out where every light belongs, design and build the pieces that have to be made for the space, and install the whole scheme. For architects, developers and homeowners across India.",
  },
  {
    src: "/hero/stage-2-project.jpg",
    alt: "A hotel lobby lit by a wide crystal ceiling installation over lounge seating",
    eyebrow: "The problem",
    lines: [
      <>Most rooms are lit</>,
      <>
        by <i className="serif-i">guesswork.</i>
      </>,
    ],
    lede: "Fixtures spaced evenly across a ceiling because it looks tidy on a drawing. A chandelier sized to the catalogue rather than to the room. Nothing aimed at anything in particular. The result is bright without being designed, and once the ceiling closes it is expensive to change.",
  },
  {
    src: "/hero/stage-3-property.jpg",
    alt: "A villa at night with its approach, lawn and facade lit as a single scheme",
    eyebrow: "Why clients choose Elor",
    lines: [
      <>One drawing, one supplier,</>,
      <>
        one <i className="serif-i">warranty.</i>
      </>,
    ],
    lede: "We set the positions, specify every fixture, manufacture whatever has to be made to measure, and install it with our own crew. Warranty of up to five years. And three Celestial Lights stores in Kannur, Kochi and Kozhikode, if you would rather stand under it before you decide.",
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
  // A gentle push-in so the scene never sits still. Kept small on purpose: the
  // source photos are already cropped to a wide band, and a heavier zoom on top
  // of that reads as a blown-up snapshot rather than a wide shot.
  const scale = useTransform(progress, [i * SEG - SEG, (i + 1) * SEG], [1.06, 1.0]);

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
            <MagneticButton href="/consultation" variant="gold">
              Get a Lighting Plan <span className="arr">→</span>
            </MagneticButton>
            <MagneticButton href="/customisation" variant="ghost">
              Create a Custom Piece
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
