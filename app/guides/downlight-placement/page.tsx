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

const TITLE = "How to Place Downlights in a Kerala Home";
const CRUMB = "How to Place Downlights in a Kerala Home";
const DESC =
  "How to place downlights in a Kerala home: start from the furniture, hide the lamp in a deep fitting, and plan them with the fan, cove, and chandelier.";
const PATH = "/guides/downlight-placement";
const CELESTIAL = "https://www.celestiallights.in";
const { updated: UPDATED, modified: MODIFIED } = guideDates(PATH);

const HERO_IMAGE = "/images/guides/downlight-placement/downlights-over-living-room-seating.webp";
const HERO_ALT =
  "Recessed downlights placed over a sofa and coffee table, with a ceiling fan on a separate point";
const BODY_IMAGE = "/images/guides/downlight-placement/deep-recessed-downlight.webp";
const BODY_ALT =
  "A deep recessed anti-glare downlight in a white ceiling, with a wooden fan blade nearby";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: PATH },
  openGraph: {
    title: TITLE,
    description: DESC,
    images: [{ url: HERO_IMAGE, width: 1600, height: 893, alt: HERO_ALT }],
  },
};

const faqs = [
  { q: "How many downlights does a living room need?", a: "There is no single number. Start from the sofa, the tables, and any dark corners, and from whether a cove or a hanging piece will also be in the room. A regular grid often puts too many bright points in the middle of the view." },
  { q: "Can I fix placement after the ceiling is closed?", a: "Only by opening the ceiling at those points and making the boards good again. The cleaner time to place downlights is while the false ceiling is still open, with the furniture plan in hand." },
  { q: "Do downlights replace a chandelier?", a: "No. Downlights light the room or a task. A chandelier is a hanging piece you see. They can share a room, on separate switches, with the chandelier fixed to the slab, not to the false ceiling." },
];

const faqBodies = [
  <>There is no single number. Start from the sofa, the tables, and any dark corners, and from whether a cove or a hanging piece will also be in the room. A regular grid often puts too many bright points in the middle of the view.</>,
  <>Only by opening the ceiling at those points and making the boards good again. The cleaner time to place downlights is while the false ceiling is still open, with the furniture plan in hand.</>,
  <>No. Downlights light the room or a task. A chandelier is a hanging piece you see. They can share a room, on separate switches, with the chandelier fixed to the slab, not to the false ceiling.</>,
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to place downlights in a Kerala home",
  description: DESC,
  image: `${site.domain}${HERO_IMAGE}`,
  author: { "@type": "Organization", name: site.name, url: site.domain },
  publisher: {
    "@type": "Organization",
    name: site.name,
    logo: { "@type": "ImageObject", url: `${site.domain}/brand/logo-mark.svg` },
  },
  datePublished: "2026-11-19",
  dateModified: MODIFIED,
  mainEntityOfPage: `${site.domain}${PATH}`,
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

export default function DownlightPlacementGuide() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Guides", path: "/guides" },
              { name: CRUMB, path: PATH },
            ])
          ),
        }}
      />

      <section className="page-hero">
        <div className="wrap-tight">
          <Breadcrumbs crumbs={[{ name: "Guides", path: "/guides" }, { name: CRUMB, path: PATH }]} />
          <Reveal as="span">
            <span className="eyebrow">Guide · Updated {UPDATED}</span>
          </Reveal>
          <Reveal delay={0.06}>
            <h1 className="h-xl" style={{ marginTop: 18 }}>
              How to place downlights in a Kerala home
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="lede" style={{ marginTop: 22 }}>
              Place downlights from the furniture and the seated eye, not from a grid across the ceiling. Hide the lamp up inside a deep fitting so it does not glare. Keep spots out of the fan&apos;s sweep, and use a cove so the room needs fewer of them. Elor plans the ceiling. Design is free with purchase from Celestial.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap-tight">
          <ul className="check-list">
              <li><span className="tick">✓</span>Start from the furniture and the sofa, not from a grid.</li>
              <li><span className="tick">✓</span>Hide the lamp in a deep fitting.</li>
              <li><span className="tick">✓</span>Use a cove so the room needs fewer spots.</li>
          </ul>

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
              src={HERO_IMAGE}
              alt={HERO_ALT}
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
              <h2>Start from the furniture and the seated eye</h2>
              <div>
                <p>A regular grid looks tidy on a drawing and often feels harsh in the room. The bright points sit in the middle of the view from the sofa, or they miss the table and the corners that actually need light.</p>
                <p style={{ marginTop: 16 }}>Start with the furniture plan. Mark where people sit, where they walk, and where a task happens. Place a downlight to serve those points, not to fill every tile of the ceiling. From a seated eye, you should see a quiet ceiling, not a row of lamps.</p>
                <p style={{ marginTop: 16 }}>Spacing varies with the fitting, the ceiling, and the other lights in the room.</p>
              </div>
            </div>
            <div className="register-row">
              <h2>Depth and cut-out, in plain words</h2>
              <div>
                <p>The lamp has to sit up inside the fitting, not at the mouth of the hole. If it sits too low, it shines into the eyes. That is the usual cause of glare, and the diagnosis is in <Link href="/guides/why-downlights-glare" style={{ color: "var(--gold)" }}>why downlights glare</Link>.</p>
                <p style={{ marginTop: 16 }}>The cut-out in the false ceiling has to match the fitting, and there has to be enough depth above the board for the body and the driver. That is decided while the ceiling is still open. The colour of the light should suit the rest of the room; those numbers are in <Link href="/guides/colour-of-light" style={{ color: "var(--gold)" }}>colour of light</Link>.</p>

                <figure style={{ marginTop: 24, marginBottom: 0 }}>
                  <div
                    style={{
                      position: "relative",
                      aspectRatio: "4 / 3",
                      borderRadius: 18,
                      overflow: "hidden",
                    }}
                  >
                    <Image
                      src={BODY_IMAGE}
                      alt={BODY_ALT}
                      fill
                      sizes="(max-width: 760px) 100vw, 480px"
                    />
                  </div>
                </figure>
              </div>
            </div>
            <div className="register-row">
              <h2>How they sit with a fan, a cove, and a chandelier</h2>
              <div>
                <p>Keep downlights out of the fan&apos;s blade sweep. A spot in that path flickers as the blades pass, and the fitting can get in the way of the fan. The usual layouts are in <Link href="/guides/chandelier-with-ceiling-fan" style={{ color: "var(--gold)" }}>chandelier with a ceiling fan</Link>.</p>
                <p style={{ marginTop: 16 }}>A cove can carry the room&apos;s soft wash, which means you need fewer spots. How to draw that recess is in <Link href="/guides/cove-lighting-kerala" style={{ color: "var(--gold)" }}>cove and profile lighting</Link>. The chandelier, if there is one, sits on its own circuit and is fixed to the slab, not to the false ceiling. That rule is in the <Link href="/guides/false-ceiling-chandelier-weight" style={{ color: "var(--gold)" }}>false-ceiling guide</Link>. The three jobs belong in one ceiling plan: <Link href="/guides/ceiling-and-lighting-design" style={{ color: "var(--gold)" }}>ceiling and lighting design</Link>.</p>
              </div>
            </div>
            <div className="register-row">
              <h2>Circuits and access</h2>
              <div>
                <p>Put the general wash, the spots, and any hanging piece on separate switches. A dimmer on the softer group makes a quiet evening possible without turning the room off.</p>
                <p style={{ marginTop: 16 }}>Leave a way to reach the driver later. A fitting sealed into a closed ceiling with no access is hard to service. Mark that access on the drawing before the boards go up.</p>
              </div>
            </div>
            <div className="register-row">
              <h2>Ready fittings, or a plan</h2>
              <div>
                <p>Look for ready downlights at <a href={CELESTIAL} target="_blank" rel="noopener noreferrer">Celestial Lights</a>. Elor plans where they go, how deep they sit, and how they work with the fan, the cove, and any chandelier. Design is free with purchase from Celestial.</p>
                <p style={{ marginTop: 16 }}>If the ceiling is still open, <Link href="/consultation" style={{ color: "var(--gold)" }}>book a lighting consultation</Link> and place the spots with the rest of the house.</p>
              </div>
            </div>
          </div>
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
                <details className="faq-item" name="downlight-placement-faq">
                  <summary>{f.q}</summary>
                  <p className="faq-a">{faqBodies[i]}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap-tight">
          <div className="cta-ctas" style={{ marginTop: 30 }}>
            <MagneticButton href="/consultation" variant="gold">Book a consultation <span className="arr">→</span></MagneticButton>
            <MagneticButton href={CELESTIAL} variant="ghost" external>See the range <span className="arr">→</span></MagneticButton>
          </div>
        </div>
      </section>

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap-tight">
          <h2 className="h-lg">More guides</h2>
          <p className="lede" style={{ marginTop: 16 }}>
            <Link href="/guides/why-downlights-glare" style={{ color: "var(--gold)" }}>Why downlights glare</Link> ·             <Link href="/guides/cove-lighting-kerala" style={{ color: "var(--gold)" }}>Cove and profile lighting</Link> ·             <Link href="/guides/ceiling-and-lighting-design" style={{ color: "var(--gold)" }}>Ceiling and lighting design</Link> ·             <Link href="/guides/colour-of-light" style={{ color: "var(--gold)" }}>Colour of light</Link> ·             <Link href="/guides" style={{ color: "var(--gold)" }}>All lighting guides</Link>
          </p>
        </div>
      </section>

      <RelatedGuides currentSlug="downlight-placement" />
    </>
  );
}
