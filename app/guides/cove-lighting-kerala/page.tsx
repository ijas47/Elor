import Link from "next/link";
import type { Metadata } from "next";
import { site } from "@/lib/site";
import { guideDates } from "@/lib/guides";
import { breadcrumbSchema } from "@/lib/schema";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Reveal } from "@/components/motion/Reveal";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { RelatedGuides } from "@/components/ui/RelatedGuides";

const TITLE = "Cove and Profile Lighting for a Kerala Ceiling";
const CRUMB = "Cove and Profile Lighting for a Kerala Ceiling";
const DESC =
  "Cove lighting for a Kerala false ceiling: draw it before gypsum or POP closes, hide the strip behind a lip or profile, and put it on its own dimmer.";
const PATH = "/guides/cove-lighting-kerala";
const CELESTIAL = "https://www.celestiallights.in";
const { updated: UPDATED, modified: MODIFIED } = guideDates(PATH);

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: PATH },
};

const faqs = [
  { q: "Can a cove replace downlights?", a: "No. A cove gives a soft wash on the ceiling. It is not enough on its own for tasks, for a dining table, or for a dark corner. You still need spots or a hanging piece where the work happens, each on its own switch." },
  { q: "When does the carpenter need the drawing?", a: "Before the gypsum or POP closes. The drawing should show the lip height, the depth of the recess, the corners, and where the driver sits, while the ceiling is still open." },
  { q: "Can I add a cove after the ceiling is finished?", a: "Sometimes, but it usually means opening the ceiling at the edge and making that good again. It is cleaner to draw the cove before the ceiling closes." },
];

const faqBodies = [
  <>No. A cove gives a soft wash on the ceiling. It is not enough on its own for tasks, for a dining table, or for a dark corner. You still need spots or a hanging piece where the work happens, each on its own switch.</>,
  <>Before the gypsum or POP closes. The drawing should show the lip height, the depth of the recess, the corners, and where the driver sits, while the ceiling is still open.</>,
  <>Sometimes, but it usually means opening the ceiling at the edge and making that good again. It is cleaner to draw the cove before the ceiling closes.</>,
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Cove and profile lighting for a Kerala false ceiling",
  description: DESC,
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

export default function CoveLightingGuide() {
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
              Cove and profile lighting for a Kerala false ceiling
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="lede" style={{ marginTop: 22 }}>
              Cove lighting is a hidden strip that washes the ceiling. Draw the recess, the lip, and the driver while the gypsum or POP is still open. If you can see the strip from the sofa, the lip is too shallow or the profile has no diffuser. Elor plans the ceiling. Design is free with purchase from Celestial.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap-tight">
          <ul className="check-list">
              <li><span className="tick">✓</span>Draw the cove before the gypsum or POP closes.</li>
              <li><span className="tick">✓</span>Hide the strip behind a lip or a profile, so you cannot see it from the sofa.</li>
              <li><span className="tick">✓</span>Put the cove on its own dimmer.</li>
          </ul>

        </div>
      </section>

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="register">
            <div className="register-row">
              <h2>What a cove is, and what a profile is</h2>
              <div>
                <p>A cove is a recess in the false ceiling, usually at the edge or in a tray, that hides a strip of light and washes the ceiling above it. The light is meant to be seen as a glow, not as a row of dots.</p>
                <p style={{ marginTop: 16 }}>A profile is the aluminium channel that holds the strip, often with a diffuser in front of it. The diffuser spreads the light so the individual lamps do not show. A cove and a profile often work together: the recess hides the hardware, and the profile keeps the strip straight and even.</p>
                <p style={{ marginTop: 16 }}>This is not the same job as a downlight or a chandelier. Those light the room or the table. A cove lights the ceiling.</p>
              </div>
            </div>
            <div className="register-row">
              <h2>Draw it before the gypsum or POP closes</h2>
              <div>
                <p>The carpenter and the electrician need a drawing while the ceiling is still open. That drawing should show:</p>
                <ul className="check-list" style={{ marginTop: 16 }}>
                  <li><span className="tick">✓</span>the lip that hides the strip, and how deep the recess is</li>
                  <li><span className="tick">✓</span>how the corners turn, so the strip does not break or glare at a join</li>
                  <li><span className="tick">✓</span>where the driver sits, and how someone can reach it later</li>
                </ul>
                <p style={{ marginTop: 16 }}>Once the gypsum or POP is closed, changing the lip or the depth means cutting the ceiling. If the house also needs a chandelier, the slab anchor is a separate job and has to be marked at the same time. That is in the <Link href="/guides/false-ceiling-chandelier-weight" style={{ color: "var(--gold)" }}>false-ceiling guide</Link>. The cove is one part of a whole-ceiling plan; <Link href="/guides/ceiling-and-lighting-design" style={{ color: "var(--gold)" }}>ceiling and lighting design</Link> shows how the pieces sit together, and <Link href="/guides/how-a-lighting-plan-is-built" style={{ color: "var(--gold)" }}>how a lighting plan is built</Link> covers the order of work.</p>
              </div>
            </div>
            <div className="register-row">
              <h2>How to hide the strip</h2>
              <div>
                <p>Stand where people sit, usually the sofa, and look up. If you can see the dots, the lip is too shallow or the profile has no diffuser. The fix is in the drawing, not in a brighter strip.</p>
                <p style={{ marginTop: 16 }}>A shallow lip is a common miss in a hurry. So is a strip left bare in a recess that can be seen from the dining chair. Get the depth right before the boards go up.</p>
              </div>
            </div>
            <div className="register-row">
              <h2>Where a cove helps, and where it is not enough</h2>
              <div>
                <p>A cove is good for a calm wash in a living room, a bedroom, or a passage. It is not the only light the room needs. You still want spots or a hanging piece for the table, the art, or a dark corner, and those should be on their own switches. A cove on a dimmer can carry a quiet evening; the brighter lights come on when the room has to work harder.</p>
                <p style={{ marginTop: 16 }}>Spots that glare are a different problem, covered in <Link href="/guides/why-downlights-glare" style={{ color: "var(--gold)" }}>why downlights glare</Link>.</p>
                <p style={{ marginTop: 16 }}>Do not mix colour temperatures in one room without a reason. If the cove is a different colour from the spots or the chandelier, the ceiling will look one way and the table another. The numbers on the box are explained in <Link href="/guides/colour-of-light" style={{ color: "var(--gold)" }}>colour of light</Link>.</p>
                <p style={{ marginTop: 16 }}>A rope light or a fluorescent tube is not the current default for a new cove. Use a proper strip in a profile, planned with the ceiling.</p>
              </div>
            </div>
            <div className="register-row">
              <h2>POP, gypsum, and damp rooms</h2>
              <div>
                <p>A cove is a finish detail in the ceiling, not a structure. It does not change the rule that a chandelier is fixed to the slab, not to the gypsum or the POP.</p>
                <p style={{ marginTop: 16 }}>In a damp room, or in a house close to the sea, be careful with the fittings and the drivers. The cautious notes are in <Link href="/guides/coastal-lighting-kerala" style={{ color: "var(--gold)" }}>coastal lighting in Kerala</Link> and <Link href="/guides/ip-rating-for-outdoor-lights" style={{ color: "var(--gold)" }}>IP ratings for outdoor lights</Link>. Ask the electrician to choose a fitting that suits the room.</p>
              </div>
            </div>
            <div className="register-row">
              <h2>Ready profiles, or a plan for the whole ceiling</h2>
              <div>
                <p>Look for ready profiles, diffusers, and strips at <a href={CELESTIAL} target="_blank" rel="noopener noreferrer">Celestial Lights</a>. Elor plans the ceiling, including the recess, the lip, and how the cove sits with the rest of the lights. Design is free with purchase from Celestial.</p>
                <p style={{ marginTop: 16 }}>If the ceiling is still open, <Link href="/consultation" style={{ color: "var(--gold)" }}>book a lighting consultation</Link> and draw the cove with the rest of the house.</p>
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
                <details className="faq-item" name="cove-lighting-kerala-faq">
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
            <Link href="/guides/ceiling-and-lighting-design" style={{ color: "var(--gold)" }}>Ceiling and lighting design</Link> ·             <Link href="/guides/false-ceiling-chandelier-weight" style={{ color: "var(--gold)" }}>False-ceiling chandelier weight</Link> ·             <Link href="/guides/colour-of-light" style={{ color: "var(--gold)" }}>Colour of light</Link> ·             <Link href="/guides" style={{ color: "var(--gold)" }}>All lighting guides</Link>
          </p>
        </div>
      </section>

      <RelatedGuides currentSlug="cove-lighting-kerala" />
    </>
  );
}
