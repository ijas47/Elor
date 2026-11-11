import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { site } from "@/lib/site";
import { guideDates } from "@/lib/guides";
import { breadcrumbSchema } from "@/lib/schema";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Reveal } from "@/components/motion/Reveal";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { RelatedGuides } from "@/components/ui/RelatedGuides";
import { guideArticles } from "@/lib/guide-articles";

const TITLE = "How to Clean a Crystal Chandelier";
const DESC =
  "Clean a crystal chandelier with the power off, a cloth-and-glove wipe in place, and the drops washed by hand only when they are dull. Steps for Kerala homes.";
const PATH = "/guides/how-to-clean-a-crystal-chandelier";
const CELESTIAL = "https://www.celestiallights.in";
const { updated: UPDATED, modified: MODIFIED } = guideDates(PATH);
const others = guideArticles.filter((item) => item.slug !== "how-to-clean-a-crystal-chandelier");

const steps = [
  {
    h: "Switch off at the breaker",
    p: "Turn the circuit off at the distribution board, as well as at the wall switch, and let the lamps cool.",
  },
  {
    h: "Photograph the piece",
    p: "Take photos from below and from the side so every drop and strand goes back where it came from.",
  },
  {
    h: "Set up below it",
    p: "Lay a folded towel or a padded sheet under the chandelier. Use a stable platform, and have a second person hold it for anything high.",
  },
  {
    h: "Wipe each drop in place",
    p: "Wear cotton gloves. Hold each drop with one hand and wipe it with a dry lint-free cloth in the other, working round one tier at a time.",
  },
  {
    h: "Hand-wash only the dull drops",
    p: "If a drop stays hazy, unhook it, wash it by hand in a bowl of lukewarm water with a little mild dish soap, rinse, and dry it with a lint-free cloth. Do one tier at a time so the layout is not lost.",
  },
  {
    h: "Dust the frame and holders",
    p: "Wipe the frame with a dry cloth. Keep water away from the lamp holders and the canopy.",
  },
  {
    h: "Rehang, dry, then power on",
    p: "Hang the drops back using the photos. Wait until every piece and holder is fully dry before switching the breaker back on.",
  },
];

const faqs = [
  {
    q: "Can I clean a crystal chandelier without taking it down?",
    a: "Yes, in most homes. Switch it off at the breaker, wipe each drop in place with gloves and a lint-free cloth, and only unhook the drops that stay hazy.",
  },
  {
    q: "Can I spray cleaner on a chandelier while it hangs?",
    a: "Avoid it. Liquid that runs into the lamp holders or along the wiring is the real risk. Wipe the drops instead, and wash the dull ones off the frame.",
  },
  {
    q: "Why does my chandelier get dusty so fast?",
    a: "A ceiling fan running most of the year carries dust onto every facet, and crystal shows it more than glass or acrylic. A kitchen or a road-facing room adds more.",
  },
  {
    q: "Who should clean a chandelier hung high?",
    a: "If nobody can reach it from a stable platform with a second person holding it, do not use a household ladder. Ask whoever installed it how the piece comes down safely.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: TITLE,
  description: DESC,
  image: `${site.domain}/video/showroom-crystal.jpg`,
  author: { "@type": "Organization", name: site.name, url: site.domain },
  publisher: {
    "@type": "Organization",
    name: site.name,
    logo: { "@type": "ImageObject", url: `${site.domain}/brand/logo-mark.svg` },
  },
  datePublished: "2026-10-12",
  dateModified: MODIFIED,
  mainEntityOfPage: `${site.domain}${PATH}`,
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to clean a crystal chandelier",
  description: DESC,
  step: steps.map((s, i) => ({
    "@type": "HowToStep",
    position: i + 1,
    name: s.h,
    text: s.p,
  })),
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: PATH },
};

export default function HowToCleanCrystalChandelierGuide() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Guides", path: "/guides" },
              { name: TITLE, path: PATH },
            ])
          ),
        }}
      />

      <section className="page-hero">
        <div className="wrap-tight">
          <Breadcrumbs crumbs={[{ name: "Guides", path: "/guides" }, { name: TITLE, path: PATH }]} />
          <Reveal as="span">
            <span className="eyebrow">How-to · Updated {UPDATED}</span>
          </Reveal>
          <Reveal delay={0.06}>
            <h1 className="h-xl" style={{ marginTop: 18 }}>
              Switch it off,
              <br />
              <span className="serif-i">then clean it in place.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="lede" style={{ marginTop: 22 }}>
              To clean a crystal chandelier, switch it off at the breaker, let the lamps cool, and photograph it. Wipe each drop in place with a lint-free cloth and cotton gloves. Take drops off and hand-wash them only when a wipe does not clear the haze. Dry every piece before the power goes back on.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap-tight">
          <div
            style={{
              position: "relative",
              aspectRatio: "16 / 10",
              borderRadius: 18,
              overflow: "hidden",
            }}
          >
            <Image
              src="/video/showroom-crystal.jpg"
              alt="Crystal chandeliers lit in the showroom"
              fill
              priority
              sizes="(max-width: 760px) 100vw, 760px"
            />
          </div>
        </div>
      </section>

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="register">
            <div className="register-row">
              <h2>How often does a crystal chandelier need cleaning?</h2>
              <div>
                <p>
                  When the sparkle goes flat. In a Kerala room with a ceiling fan running most of the year, that comes round sooner than people expect, because the fan moves dust onto every facet. A kitchen or a room near a road needs it more often than a closed bedroom. Why crystal shows dust more than glass or acrylic is in the{" "}
                  <Link href="/guides/crystal-vs-glass-chandelier" style={{ color: "var(--gold)" }}>
                    crystal, glass, and acrylic guide
                  </Link>
                  .
                </p>
              </div>
            </div>
            <div className="register-row">
              <h2>Can I clean it without taking it down?</h2>
              <div>
                <p>
                  Usually, yes. The frame stays on its anchor. Only the drops move, and only if a wipe will not clear them. A piece hung high in a double-height void or over a{" "}
                  <Link href="/guides/staircase-lighting-design" style={{ color: "var(--gold)" }}>
                    staircase
                  </Link>
                  {" "}needs proper access: a stable platform, a second person, and the floor below cleared. If nobody can reach it safely, it is not a job for a household ladder.
                </p>
              </div>
            </div>
            <div className="register-row">
              <h2>What should I not use on crystal?</h2>
              <div>
                <p>
                  Nothing abrasive, and no spray aimed at the fitting. Liquid that runs into a lamp holder or along the wiring is the risk, not the crystal. Do not twist drops while the frame is loaded, and do not let the fixing take your weight. Plated or brass frames also need a dry cloth, not a wet one. The{" "}
                  <Link href="/guides/brass-chandelier" style={{ color: "var(--gold)" }}>
                    brass guide
                  </Link>
                  {" "}covers finishes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap-tight">
          <h2 className="h-lg">How to clean a crystal chandelier</h2>
          <ol style={{ marginTop: 24, paddingLeft: 22 }}>
            {steps.map((step) => (
              <li key={step.h} style={{ marginTop: 14 }}>
                <strong>{step.h}.</strong> {step.p}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="sec glow-top">
        <div className="wrap-tight">
          <Reveal>
            <h2 className="h-lg">Shelf, or made for the room</h2>
          </Reveal>
          <Reveal delay={0.06}>
            <ul className="check-list" style={{ marginTop: 28 }}>
              <li>
                <span className="tick">✓</span>
                A crystal piece that already exists in the collection is a shelf fitting at{" "}
                <a href={CELESTIAL} target="_blank" rel="noopener noreferrer">Celestial Lights</a>.
              </li>
              <li>
                <span className="tick">✓</span>
                A crystal chandelier sized and hung for a room nobody can easily reach is designed by Elor with access for cleaning drawn in from the start. Design is free with purchase from Celestial.
              </li>
              <li>
                <span className="tick">✓</span>
                Custom pieces are usually ready in 3 to 6 weeks. We install custom lights and give installation support for everything else. Warranty is up to 5 years.
              </li>
              <li>
                <span className="tick">✓</span>
                Kannur and Kozhikode are Celestial Lights stores. Kochi is the Elor experience centre.
              </li>
            </ul>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="cta-ctas" style={{ marginTop: 30 }}>
              <MagneticButton href="/customisation" variant="gold">
                Send a picture <span className="arr">→</span>
              </MagneticButton>
              <MagneticButton href={CELESTIAL} variant="ghost" external>
                See the range <span className="arr">→</span>
              </MagneticButton>
            </div>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="form-note" style={{ marginTop: 18 }}>
              Want the plan before the piece?{" "}
              <Link href="/consultation" style={{ color: "var(--gold)" }}>
                Book a consultation
              </Link>
              . What a custom piece costs is in the{" "}
              <Link href="/guides/chandelier-pricing-guide" style={{ color: "var(--gold)" }}>
                pricing guide
              </Link>
              .
            </p>
          </Reveal>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <Reveal>
            <h2 className="h-lg" style={{ textAlign: "center", marginBottom: 56 }}>
              Questions, answered
            </h2>
          </Reveal>
          <div className="faq">
            {faqs.map((f, i) => (
              <Reveal key={f.q} delay={i * 0.04}>
                <details className="faq-item" name="how-to-clean-a-crystal-chandelier">
                  <summary>{f.q}</summary>
                  <p className="faq-a">{f.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap-tight">
          <h2 className="h-lg">Rooms and materials</h2>
          <p className="lede" style={{ marginTop: 16 }}>
            {others.map((item, i) => (
              <span key={item.slug}>
                {i > 0 ? " · " : ""}
                <Link href={`/guides/${item.slug}`} style={{ color: "var(--gold)" }}>
                  {item.crumb}
                </Link>
              </span>
            ))}
          </p>
        </div>
      </section>

      <RelatedGuides currentSlug="how-to-clean-a-crystal-chandelier" />
    </>
  );
}
