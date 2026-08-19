import type { Metadata } from "next";
import { site } from "@/lib/site";
import { breadcrumbSchema } from "@/lib/schema";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { MagneticButton } from "@/components/motion/MagneticButton";

const TITLE = "Chandelier With a Ceiling Fan — How to Make Both Work";
const DESC =
  "Almost every Indian room has a ceiling fan, and almost every chandelier guide ignores it. The four layouts that work, the clearances they need, and the wiring nobody mentions.";
const PATH = "/guides/chandelier-with-ceiling-fan";
const UPDATED = "20 August 2026";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: PATH },
};

const layouts = [
  {
    h: "1. Offset — the fan keeps the centre, the chandelier moves",
    p: "The most common fix and usually the best one. The fan stays on the existing centre point over the seating, and the chandelier goes over the dining table, the coffee table or a seating group. Two separate ceiling points, two separate switches, no overlap. Most rooms have a natural second focal point already.",
  },
  {
    h: "2. Chandelier centre, fans to the sides",
    p: "The chandelier takes the centre of the ceiling and two smaller fans — typically 900 mm — go on either side, over the areas people actually sit. Better air distribution than a single central fan in a wide room, and it frees the centre entirely. Costs a second fan and two more ceiling points.",
  },
  {
    h: "3. Replace the fan rather than work around it",
    p: "Wall-mounted fans, tower fans or a ducted system remove the conflict completely. Worth considering in a formal dining room or a double-height foyer where a ceiling fan was never going to be effective anyway — air thrown from a 5 m ceiling does very little at head height.",
  },
  {
    h: "4. Above the sweep — only with a real void",
    p: "A compact fixture mounted well above the blade plane, in a double-height space where the fan hangs low on a downrod. This works only when there is genuine vertical separation and the fixture has no loose drops. In a standard 3 m room there is not enough height, and it is the configuration that most often ends in a rattling, swinging chandelier.",
  },
];

const faqs = [
  {
    q: "Can you put a chandelier and a ceiling fan in the same room?",
    a: "Yes, but almost never on the same ceiling point. The reliable approach is to offset them: the fan keeps the room's centre, and the chandelier goes over a dining table or seating group, with at least 600 mm of clear air between the fixture's edge and the blade tips.",
  },
  {
    q: "How far should a chandelier be from a ceiling fan?",
    a: "Measure centre to centre: the fan's blade radius, plus 600 mm, plus the chandelier's own radius. For a common 1200 mm sweep fan and a 70 cm chandelier, that is about 1.55 m between the two ceiling points.",
  },
  {
    q: "Why does my chandelier rattle when the fan is on?",
    a: "Moving air is catching hanging crystal or glass drops and swinging them against each other. It means the fixture is inside the fan's airflow, not just outside the blade circle. Either move the fixture further out, or choose a piece with fixed rather than freely hanging elements.",
  },
  {
    q: "Can I run a chandelier off the fan's existing wiring?",
    a: "No. A fan regulator is a speed controller, not a light dimmer, and the two do different things to the supply. A chandelier needs its own switched circuit, and a dimmable one needs a dimmer matched to its LED drivers. Sharing the point is the most common wiring mistake we are called to fix.",
  },
  {
    q: "Will a fan make a chandelier collect more dust?",
    a: "Yes, noticeably. Air movement carries dust onto every facet, and crystal shows it faster than metal or glass. If the room has a fan running most of the year, plan on cleaning two or three times a year rather than annually, and favour fixtures whose parts can be wiped in place.",
  },
  {
    q: "Is a fan-light combination a reasonable alternative?",
    a: "For a bedroom or a small room, often yes. For a room where the fixture is meant to be the visual anchor, no — the integrated lights in fan-light units are sized for utility, not for presence, and you lose the thing you wanted the chandelier for.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: TITLE,
  description: DESC,
  image: `${site.domain}/work/w4-lounge.jpg`,
  author: { "@type": "Organization", name: site.name, url: site.domain },
  publisher: {
    "@type": "Organization",
    name: site.name,
    logo: { "@type": "ImageObject", url: `${site.domain}/brand/logo-mark.svg` },
  },
  datePublished: "2026-08-20",
  dateModified: "2026-08-20",
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

export default function CeilingFanGuide() {
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
              { name: "Chandelier With a Ceiling Fan", path: PATH },
            ])
          ),
        }}
      />

      <section className="page-hero">
        <div className="wrap-tight">
          <Reveal as="span"><span className="eyebrow">Technical · Updated {UPDATED}</span></Reveal>
          <Reveal delay={0.06}>
            <h1 className="h-xl" style={{ marginTop: 18 }}>
              A chandelier and a ceiling fan<br /><span className="serif-i">in the same room.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="lede" style={{ marginTop: 22 }}>
              Nearly every room in India has a ceiling fan, and nearly every
              chandelier guide is written as though it does not. The short
              answer: keep them apart. The fan holds the centre of the ceiling,
              the chandelier takes a second point at least 600 mm clear of the
              blade tips, and the two never share a circuit.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap-tight">
          <Reveal><h2 className="h-lg">The clearance, in numbers</h2></Reveal>
          <Reveal delay={0.06}>
            <p className="lede" style={{ marginTop: 16 }}>
              Separation is measured centre to centre, and it is the blade
              radius plus 600 mm of clear air plus the fixture&rsquo;s own
              radius. Below that, the fixture sits in the airflow.
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="spec-wrap">
              <table className="spec-table">
                <thead>
                  <tr>
                    <th>Fan sweep</th>
                    <th>Blade radius</th>
                    <th>With a 60 cm fixture</th>
                    <th>With a 90 cm fixture</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>900 mm</td><td>450 mm</td><td>1.35 m</td><td>1.50 m</td></tr>
                  <tr><td>1200 mm (most common)</td><td>600 mm</td><td>1.50 m</td><td>1.65 m</td></tr>
                  <tr><td>1400 mm</td><td>700 mm</td><td>1.60 m</td><td>1.75 m</td></tr>
                </tbody>
              </table>
            </div>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="form-note" style={{ marginTop: 12 }}>
              A 3.6 × 3.0 m dining room has roughly 1.8 m from centre to the
              middle of a table set to one side &mdash; enough for a 1200 mm fan
              and a 60 cm fixture, and not enough for much more than that.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="sec glow-top">
        <div className="wrap-tight">
          <Reveal><h2 className="h-lg">Four layouts that work</h2></Reveal>
        </div>
        <div className="wrap">
          <Stagger className="register">
            {layouts.map((l) => (
              <StaggerItem key={l.h} className="register-row">
                <h3>{l.h}</h3>
                <p>{l.p}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="sec">
        <div className="wrap-tight">
          <Reveal><h2 className="h-lg">The wiring nobody mentions</h2></Reveal>
          <Reveal delay={0.06}>
            <p className="lede" style={{ marginTop: 16 }}>
              Three things go wrong often enough to be worth stating plainly.
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <ul className="check-list" style={{ marginTop: 28 }}>
              <li><span className="tick">✓</span>A fan regulator is a speed controller, not a dimmer. A chandelier needs its own switched circuit, and a dimmable one needs a dimmer matched to its LED drivers.</li>
              <li><span className="tick">✓</span>The second ceiling point has to be planned before the false ceiling closes, not chased afterwards. Retrofitting a conduit through a finished gypsum ceiling means opening and refinishing it.</li>
              <li><span className="tick">✓</span>The chandelier&rsquo;s anchor goes into the RCC slab, never the false ceiling or the fan&rsquo;s existing hook. A fan hook is rated for a fan, and most chandeliers are heavier.</li>
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <Reveal><h2 className="h-lg" style={{ textAlign: "center", marginBottom: 56 }}>Questions, answered</h2></Reveal>
          <div className="faq">
            {faqs.map((f, i) => (
              <Reveal key={f.q} delay={i * 0.04}>
                <details className="faq-item" name="ceiling-fan-faq">
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
          <Reveal><h2 className="h-lg">Send us the ceiling, we&rsquo;ll plan the points.</h2></Reveal>
          <Reveal delay={0.06}>
            <p className="lede" style={{ margin: "16px auto 0" }}>
              Easiest before the false ceiling goes up, and still workable
              after. A photo and the room dimensions are enough to start.
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="cta-ctas" style={{ marginTop: 30 }}>
              <MagneticButton href="/consultation" variant="gold">Book a Consultation <span className="arr">→</span></MagneticButton>
              <MagneticButton href="/guides/chandelier-size-calculator" variant="ghost">Size Calculator</MagneticButton>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
