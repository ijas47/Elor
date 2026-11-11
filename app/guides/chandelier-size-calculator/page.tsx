import Link from "next/link";
import type { Metadata } from "next";
import { site } from "@/lib/site";
import { guideDates } from "@/lib/guides";
import { breadcrumbSchema } from "@/lib/schema";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ChandelierCalculator } from "@/components/ui/ChandelierCalculator";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { RelatedGuides } from "@/components/ui/RelatedGuides";

const TITLE = "Chandelier Size Calculator: Diameter, Drop & Fan Clearance";
// Shorter than TITLE, which stays as the Article headline and H1 subject.
const META_TITLE = "Chandelier Size Calculator";
const DESC =
  "Get a starting chandelier diameter and drop for your room, then check ceiling fan clearance and whether the false ceiling can take the weight.";
const PATH = "/guides/chandelier-size-calculator";
const CELESTIAL = "https://www.celestiallights.in";
const { updated: UPDATED, modified: MODIFIED } = guideDates(PATH);

export const metadata: Metadata = {
  title: META_TITLE,
  description: DESC,
  alternates: { canonical: PATH },
};

const rules = [
  {
    h: "Diameter: add the room's length and width in feet",
    p: "A 15 ft × 12 ft room takes a fixture around 27 inches across, or roughly 70 cm. It is the oldest rule in the trade and it still holds, because it scales the fixture to the room's footprint rather than to a catalogue photo.",
  },
  {
    h: "Over a dining table, the table governs, not the room",
    p: "Half to two-thirds of the table's short side. A 1 m wide table takes a 50 to 65 cm fixture. Sized to the room instead, it overhangs the edges and people knock their heads reaching across.",
  },
  {
    h: "Drop: 2.5 to 3 inches of fixture height per foot of ceiling",
    p: "A 10 ft ceiling carries 25 to 30 inches of fixture, about 65 to 75 cm. Cascade pieces built for a double-height void are the exception. Those are measured to the actual vertical distance between floors.",
  },
  {
    h: "Bottom of the fixture: 2.1 m above the floor, minimum",
    p: "Anywhere people walk. Over a dining table the rule changes entirely: 75 to 90 cm above the tabletop, so sightlines across the table stay open.",
  },
];

const faqs = [
  {
    q: "What size chandelier do I need for a 15 by 12 foot room?",
    a: "Around 27 inches (about 70 cm) in diameter. Add the room's length and width in feet, and read the total as inches of diameter. For a 4.5 m × 3.6 m room in metric, that works out to roughly 70 cm.",
  },
  {
    q: "How low should a chandelier hang in a room with a ceiling fan?",
    a: "It should not hang in the fan's path at all. Keep the chandelier's centre at least the fan's blade radius plus 600 mm plus the fixture's own radius away from the fan's centre. For a common 1200 mm sweep and a 70 cm fixture, that is about 1.55 m of separation.",
  },
  {
    q: "How high should a chandelier hang above a dining table?",
    a: "75 to 90 cm above the tabletop. That clears sightlines across the table while keeping the light close enough to pool on the surface rather than washing the whole room.",
  },
  {
    q: "Can I hang a chandelier from a gypsum or POP false ceiling?",
    a: "Not on its own. False ceilings are designed to carry their own weight plus light fittings of a few kilograms. Anything heavier must be anchored into the RCC slab above, and that anchor has to be placed before the false ceiling is closed.",
  },
  {
    q: "Does the calculator work for double-height voids and stairwells?",
    a: "Use it as a starting point only. In a void the drop is set by the vertical distance between floors and by where the piece is seen from, which is often a mezzanine or landing rather than directly below. Those we measure on site.",
  },
  {
    q: "Is it better to go slightly larger or slightly smaller?",
    a: "Slightly larger, within the clearance limits. Undersizing is the single most common mistake we correct. A fixture that looked substantial in a showroom reads as a pendant once it is up in a real room.",
  },
];

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to work out chandelier size for a room",
  description: DESC,
  step: rules.map((r, i) => ({
    "@type": "HowToStep",
    position: i + 1,
    name: r.h,
    text: r.p,
  })),
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: TITLE,
  description: DESC,
  image: `${site.domain}/collections/staircase-cascade.jpg`,
  author: { "@type": "Organization", name: site.name, url: site.domain },
  publisher: {
    "@type": "Organization",
    name: site.name,
    logo: { "@type": "ImageObject", url: `${site.domain}/brand/logo-mark.svg` },
  },
  datePublished: "2026-08-20",
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

export default function SizeCalculatorGuide() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Guides", path: "/guides" },
              { name: "Chandelier Size Calculator", path: PATH },
            ])
          ),
        }}
      />

      <section className="page-hero">
        <div className="wrap-tight">
          <Breadcrumbs crumbs={[{ name: "Guides", path: "/guides" }, { name: "Chandelier Size Calculator", path: PATH }]} />
          <Reveal as="span"><span className="eyebrow">Technical · Updated {UPDATED}</span></Reveal>
          <Reveal delay={0.06}>
            <h1 className="h-xl" style={{ marginTop: 18 }}>
              Chandelier size calculator<br /><span className="serif-i">for Indian rooms.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="lede" style={{ marginTop: 22 }}>
              This calculator gives a starting diameter, drop and mounting
              height from standard rules, not a final specification. Check
              ceiling-fan clearance and whether the false ceiling can take
              the weight. Elor measures on site before making a custom piece.
              If a ready size fits, buy it from Celestial Lights. Design is
              free with purchase from Celestial.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap-tight">
          <Reveal><ChandelierCalculator /></Reveal>
          <Reveal delay={0.08}>
            <p className="form-note" style={{ marginTop: 14 }}>
              Nothing is sent anywhere. This runs entirely in your browser.
              Treat the output as a starting range, not a specification: voids,
              stairwells and sloped ceilings all change the answer, which is why
              we measure on site before fabricating anything. The full false-ceiling
              sequence is in the{" "}
              <a href="/guides/false-ceiling-chandelier-weight">false-ceiling chandelier weight guide</a>.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="sec glow-top">
        <div className="wrap-tight">
          <Reveal><h2 className="h-lg">What are the four rules it uses?</h2></Reveal>
        </div>
        <div className="wrap">
          <Stagger className="register">
            {rules.map((r) => (
              <StaggerItem key={r.h} className="register-row">
                <h3>{r.h}</h3>
                <p>{r.p}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="sec">
        <div className="wrap-tight">
          <Reveal><h2 className="h-lg">What size does a typical Indian room need?</h2></Reveal>
          <Reveal delay={0.06}>
            <p className="lede" style={{ marginTop: 16 }}>
              Common Indian room dimensions, with the diameter the rule produces
              and the fan separation you need at a 1200 mm sweep.
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="spec-wrap">
              <table className="spec-table">
                <thead>
                  <tr>
                    <th>Room</th>
                    <th>Diameter</th>
                    <th>Drop at 3 m ceiling</th>
                    <th>Clear of a 1200 mm fan</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>3.0 × 3.0 m bedroom</td><td>55 to 65 cm</td><td>60 to 75 cm</td><td>1.50 m</td></tr>
                  <tr><td>3.6 × 3.0 m dining</td><td>60 to 70 cm</td><td>60 to 75 cm</td><td>1.55 m</td></tr>
                  <tr><td>4.5 × 3.6 m living</td><td>75 to 90 cm</td><td>60 to 75 cm</td><td>1.65 m</td></tr>
                  <tr><td>6.0 × 4.5 m hall</td><td>95 to 115 cm</td><td>60 to 75 cm</td><td>1.78 m</td></tr>
                  <tr><td>Double-height foyer</td><td className="warn">Measured on site</td><td className="warn">Set by the void</td><td>Usually no fan</td></tr>
                </tbody>
              </table>
            </div>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="form-note" style={{ marginTop: 12 }}>
              Fan separation is centre-to-centre, using the upper diameter in each row. For living-room layouts, see{" "}
              <a href="/guides/chandelier-for-living-room">chandelier for a living room</a>. For fan clearance layouts, see{" "}
              <a href="/guides/chandelier-with-ceiling-fan">chandelier with a ceiling fan</a>.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <Reveal><h2 className="h-lg" style={{ textAlign: "center", marginBottom: 56 }}>Questions, answered</h2></Reveal>
          <div className="faq">
            {faqs.map((f, i) => (
              <Reveal key={f.q} delay={i * 0.04}>
                <details className="faq-item" name="size-calculator-faq">
                  <summary>{f.q}</summary>
                  <p className="faq-a">{f.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="sec glow-top">
        <div className="wrap-tight" style={{ textAlign: "center" }}>
          <Reveal><h2 className="h-lg">What should you do after you have a size?</h2></Reveal>
          <Reveal delay={0.06}>
            <p className="lede" style={{ margin: "16px auto 0" }}>
              The number is a starting range, not a specification. Elor Lighting
              will measure on site before making a custom piece.{" "}
              <Link href="/consultation">Book a consultation</Link> for that
              measure, or start a <Link href="/customisation">custom piece</Link>{" "}
              if the room needs one made.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="lede" style={{ margin: "16px auto 0" }}>
              If a ready chandelier in this size range fits the room, the
              ceiling and the fan, buy it from{" "}
              <a href={CELESTIAL} target="_blank" rel="noopener noreferrer">Celestial Lights</a>.
              {" "}Design is free with purchase from Celestial.
            </p>
          </Reveal>
          <Reveal delay={0.14}>
            <div className="cta-ctas" style={{ marginTop: 30 }}>
              <MagneticButton href="/consultation" variant="gold">Book a Consultation <span className="arr">→</span></MagneticButton>
              <MagneticButton href={CELESTIAL} variant="ghost" external>See the range</MagneticButton>
            </div>
          </Reveal>
        </div>
      </section>

      <RelatedGuides currentSlug="chandelier-size-calculator" />
    </>
  );
}
