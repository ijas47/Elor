import Image from "next/image";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { HeroTitle } from "@/components/motion/HeroTitle";
import { HeroScroll } from "./HeroScroll";
import { sceneOpacity, sceneScale, copyOpacity, copyY, tickOpacity } from "./heroTimeline";
import styles from "./Hero.module.css";

/**
 * Scroll-scrubbed hero. The section is three viewports tall and its contents
 * are pinned, so scrolling moves through a sequence of scenes rather than down
 * the page.
 *
 * The copy follows April Dunford's Sales Pitch structure, which suits a scrolled
 * hero because it is sequential: scene 1 is the insight (lighting is decided at
 * a construction gate, not at a showroom), scene 2 is the competitive
 * alternative, scene 3 states the criteria a good answer has to meet and then
 * introduces us as the only party that meets all three.
 *
 * Every headline should fail the swap test for a competitor. The claims are
 * deliberately structural (we design, manufacture, install and warranty) rather
 * than adjectival, because a survey of ~50 lighting firms found the category
 * competes almost entirely on adjectives about light. Consultancies cannot copy
 * scene 3 (no factory) and manufacturers cannot copy it either (no practice).
 *
 * Scene 2 describes the default without insulting the trade. It concedes the
 * default openly, because it genuinely is the right answer for a small flat,
 * and a fair concession is more persuasive than a put-down. It also matters
 * commercially: electricians refer work to us, and our own crew installs.
 *
 * Every headline is in the DOM at build time and only its presentation
 * animates, so the pinning costs nothing in SEO.
 *
 * The hero is a server component: the first scene, the LCP image, is plain
 * HTML that paints without any JS. The scroll scrub is a small driver
 * (heroScroll.ts) that is dynamically imported after hydration and only
 * updates inline opacity/transform, starting from the same progress-0 values
 * rendered here, so attaching it changes nothing on screen.
 *
 * Reduced motion is handled entirely in CSS, not by branching here: rendering a
 * different tree for it would not match what the server sent and hydration
 * would fail. The media query collapses the track to one static scene.
 */

const STAGES = [
  {
    src: "/hero/stage-1-installation.jpg",
    alt: "A bespoke glass leaf installation suspended across a double-height lobby ceiling",
    lines: [
      <>Lighting is decided before</>,
      <>
        the ceiling <i className="serif-i">closes.</i>
      </>,
    ],
    lede: "We write the lighting plan in DIALux, supply the fittings, and make the custom pieces in our factory. For architects, and for owners building homes and commercial spaces.",
  },
  {
    src: "/hero/stage-2-project.jpg",
    alt: "A hotel lobby lit by a wide crystal ceiling installation over lounge seating",
    lines: [
      <>You are not choosing lighting.</>,
      <>
        You are <i className="serif-i">inheriting</i> it.
      </>,
    ],
    lede: "On most sites the points go in first, then a shop fills them with what is in stock. Fine for a small flat. Not for a house you will live in for thirty years.",
  },
  {
    src: "/hero/stage-3-property.jpg",
    alt: "A villa at night with its approach, lawn and facade lit as a single scheme",
    lines: [
      <>One drawing, one supplier,</>,
      <>
        one <i className="serif-i">warranty.</i>
      </>,
    ],
    lede: "A consultant will not make the piece. A shop will not write the plan. We do the plan, the supply and the custom work, and we still answer the phone in year three.",
  },
];

const N = STAGES.length;
const TRACK_ID = "home-hero-track";

// first-frame (scroll progress 0) values, identical to what the driver computes
const P0 = 0;

export function Hero() {
  return (
    <div id={TRACK_ID} className={styles.track} style={{ height: `${N * 100}svh` }}>
      <section className={`${styles.hero} ${styles.pinned}`}>
        <div className={styles.media}>
          {STAGES.map((s, i) => (
            <div
              key={s.src}
              data-hero-layer=""
              className={styles.layer}
              style={{ opacity: sceneOpacity(P0, i) }}
              aria-hidden={i > 0}
            >
              <div
                data-hero-layer-inner=""
                className={styles.layerInner}
                style={{ transform: `scale(${sceneScale(P0, i)})` }}
              >
                {/* A gentle push-in so the scene never sits still. Kept small
                    on purpose: the photos are already cropped to a wide band. */}
                <Image
                  src={s.src}
                  alt={s.alt}
                  fill
                  priority={i === 0}
                  fetchPriority={i === 0 ? "high" : undefined}
                  sizes="100vw"
                  className={styles.img}
                />
              </div>
            </div>
          ))}
          <div className={styles.scrim} />
          <div className={styles.vignette} />
        </div>

        <div className={`wrap ${styles.inner}`}>
          <div className={styles.stack}>
            {STAGES.map((s, i) => (
              <div
                key={s.src}
                data-hero-copy=""
                className={styles.copy}
                style={{ opacity: copyOpacity(P0, i), transform: `translateY(${copyY(P0, i)}px)` }}
                aria-hidden={i > 0}
                // stages that are faded out must not catch clicks or the tab order
                inert={i > 0}
              >
                {i === 0 ? (
                  <HeroTitle className={`h-xl ${styles.title}`} lines={s.lines} />
                ) : (
                  <p className={`h-xl ${styles.title}`}>
                    {s.lines.map((l, k) => (
                      <span key={k} style={{ display: "block" }}>
                        {l}
                      </span>
                    ))}
                  </p>
                )}
                <p className={`lede ${styles.lede}`}>{s.lede}</p>
              </div>
            ))}
          </div>

          <div
            className={`${styles.ctas} hero-fade-up`}
            style={{ animationDelay: "0.7s" }}
          >
            <MagneticButton href="/consultation" variant="gold">
              Get a Lighting Plan <span className="arr">→</span>
            </MagneticButton>
            <MagneticButton href="/customisation" variant="ghost">
              Send a reference
            </MagneticButton>
          </div>

          <div className={`${styles.note} hero-fade`} style={{ animationDelay: "0.95s" }}>
            <span className={styles.dot} />Celestial stores in Kannur and Calicut · Full
            experience centre in Kochi
          </div>
        </div>

        <div className={styles.rail} aria-hidden>
          {STAGES.map((s, i) => (
            <span key={s.src} data-hero-tick="" className={styles.tick} style={{ opacity: tickOpacity(P0, i) }} />
          ))}
        </div>

        <div data-hero-cue="" className={styles.scroll} style={{ opacity: 1 }}>
          <span>Scroll</span>
          <span className={styles.scrollLine} />
        </div>
      </section>
      <HeroScroll trackId={TRACK_ID} />
    </div>
  );
}
