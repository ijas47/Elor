import type { Metadata } from "next";
import { site } from "@/lib/site";
import { breadcrumbSchema } from "@/lib/schema";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { MagneticButton } from "@/components/motion/MagneticButton";

const TITLE = "Can a False Ceiling Hold a Chandelier? Weights & Anchoring";
const DESC =
  "Gypsum and POP false ceilings carry a few kilograms, not a chandelier. What each ceiling type holds, what fixtures actually weigh, and why the anchor has to go in before the ceiling closes.";
const PATH = "/guides/false-ceiling-chandelier-weight";
const UPDATED = "20 August 2026";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: PATH },
};

const steps = [
  {
    h: "1. Decide the fixture before the ceiling closes",
    p: "This is the whole guide in one line. The anchor has to go into the structural slab, and the slab is only accessible while the false ceiling is open. Choosing the chandelier at the end of a fit-out is what turns a simple hook into a demolition job.",
  },
  {
    h: "2. Anchor into the RCC slab, never the framework",
    p: "A through-bolt, expansion anchor or chemical anchor set into the concrete slab above, sized with a safe working load of at least four times the fixture weight. The GI framework holding a gypsum ceiling is designed to carry boards, not point loads.",
  },
  {
    h: "3. Bring the rod or chain down through the ceiling",
    p: "The false ceiling is cut around the drop rod and finished with a plate or recess. The ceiling carries none of the weight — it only conceals the anchor. Done properly this is invisible; done as an afterthought it cracks the board around the opening.",
  },
  {
    h: "4. Run the circuit at the same time",
    p: "Conduit for a separately switched, correctly dimmed circuit goes in with the anchor. Chasing wiring through a finished gypsum ceiling later means opening it, rewiring, reboarding and repainting.",
  },
];

const faqs = [
  {
    q: "How much weight can a gypsum false ceiling hold?",
    a: "Only a few kilograms, and only at a properly supported framing intersection — enough for a light fitting or a small pendant. A gypsum ceiling's GI framework is engineered to carry the boards themselves plus a modest service load, not a concentrated point load. Anything heavier goes into the slab above.",
  },
  {
    q: "Can a POP ceiling hold a chandelier?",
    a: "Less than gypsum, and it should not be relied on at all. Plaster of Paris is brittle and fails suddenly rather than sagging as a warning. Treat a POP ceiling as a finish, not a structure.",
  },
  {
    q: "How much does a chandelier actually weigh?",
    a: "A small pendant is 2 to 5 kg. A mid-size crystal chandelier is typically 15 to 30 kg. Large multi-tier pieces run 40 to 80 kg, and grand foyer cascades can pass 100 kg. Only the smallest of those is anywhere near what a false ceiling can carry.",
  },
  {
    q: "My false ceiling is already finished. What now?",
    a: "It is still solvable. We locate the slab above, open a small section at the mounting point, set a proper anchor, and make good the ceiling around the drop. More work than doing it upfront, but far cheaper than a fixture coming down.",
  },
  {
    q: "Can I use the existing ceiling fan hook?",
    a: "Only if the fixture is lighter than a fan and the hook is genuinely set into the slab. Fan hooks are rated for a fan's weight plus its vibration, and most chandeliers are heavier. We check the hook and its anchorage rather than assuming.",
  },
  {
    q: "What safety factor should the anchor be rated for?",
    a: "At least four times the fixture's weight as a safe working load. A 30 kg chandelier means anchorage rated for 120 kg or more. Overhead fixtures carry a real consequence if they fail, so the margin is not the place to economise.",
  },
];

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to hang a chandelier below a false ceiling",
  description: DESC,
  step: steps.map((s, i) => ({
    "@type": "HowToStep",
    position: i + 1,
    name: s.h,
    text: s.p,
  })),
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: TITLE,
  description: DESC,
  image: `${site.domain}/work/w2-corridor.jpg`,
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

export default function FalseCeilingGuide() {
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
              { name: "False Ceilings & Chandelier Weight", path: PATH },
            ])
          ),
        }}
      />

      <section className="page-hero">
        <div className="wrap-tight">
          <Reveal as="span"><span className="eyebrow">Technical · Updated {UPDATED}</span></Reveal>
          <Reveal delay={0.06}>
            <h1 className="h-xl" style={{ marginTop: 18 }}>
              What a false ceiling<br /><span className="serif-i">can actually hold.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="lede" style={{ marginTop: 22 }}>
              A gypsum or POP false ceiling carries its own boards and a light
              fitting of a few kilograms. It does not carry a chandelier. Every
              piece past that goes into the RCC slab above, on an anchor that
              has to be placed while the ceiling is still open &mdash; which is
              why this is a decision for the start of a fit-out, not the end.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap-tight">
          <Reveal><h2 className="h-lg">What each ceiling type carries</h2></Reveal>
          <Reveal delay={0.12}>
            <div className="spec-wrap">
              <table className="spec-table">
                <thead>
                  <tr>
                    <th>Ceiling</th>
                    <th>Realistic point load</th>
                    <th>Suitable for</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>POP on frame</td>
                    <td className="warn">Treat as zero</td>
                    <td>Finish only. Brittle, and fails without warning.</td>
                  </tr>
                  <tr>
                    <td>Gypsum board on GI frame</td>
                    <td>A few kg at a framing intersection</td>
                    <td>Downlights, small pendants, nothing with mass.</td>
                  </tr>
                  <tr>
                    <td>Grid / modular ceiling</td>
                    <td className="warn">Treat as zero</td>
                    <td>Tiles lift out. Never a mounting surface.</td>
                  </tr>
                  <tr>
                    <td>RCC slab, anchored</td>
                    <td>Set by the anchor, not the slab</td>
                    <td>Everything. Rate the anchor at 4× fixture weight.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="sec glow-top">
        <div className="wrap-tight">
          <Reveal><h2 className="h-lg">What fixtures weigh</h2></Reveal>
          <Reveal delay={0.06}>
            <p className="lede" style={{ marginTop: 16 }}>
              Only the first row is anywhere near what a false ceiling can take
              on its own.
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="spec-wrap">
              <table className="spec-table">
                <thead>
                  <tr>
                    <th>Fixture</th>
                    <th>Typical weight</th>
                    <th>Anchor rated for</th>
                    <th>Needs the slab?</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Single pendant</td><td>2–5 kg</td><td>20 kg</td><td>Usually not</td></tr>
                  <tr><td>Cluster / ring pendant</td><td>8–15 kg</td><td>60 kg</td><td className="warn">Yes</td></tr>
                  <tr><td>Mid-size crystal chandelier</td><td>15–30 kg</td><td>120 kg</td><td className="warn">Yes</td></tr>
                  <tr><td>Large multi-tier</td><td>40–80 kg</td><td>320 kg</td><td className="warn">Yes</td></tr>
                  <tr><td>Foyer cascade</td><td>100 kg+</td><td>400 kg+</td><td className="warn">Yes, engineered</td></tr>
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="sec">
        <div className="wrap-tight">
          <Reveal><h2 className="h-lg">Doing it in the right order</h2></Reveal>
        </div>
        <div className="wrap">
          <Stagger className="register">
            {steps.map((s) => (
              <StaggerItem key={s.h} className="register-row">
                <h3>{s.h}</h3>
                <p>{s.p}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <Reveal><h2 className="h-lg" style={{ textAlign: "center", marginBottom: 56 }}>Questions, answered</h2></Reveal>
          <div className="faq">
            {faqs.map((f, i) => (
              <Reveal key={f.q} delay={i * 0.04}>
                <details className="faq-item" name="false-ceiling-faq">
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
          <Reveal><h2 className="h-lg">Still at the ceiling stage? Good.</h2></Reveal>
          <Reveal delay={0.06}>
            <p className="lede" style={{ margin: "16px auto 0" }}>
              Tell us what you are planning and we will specify the anchor and
              the circuit before the boards go up. If the ceiling is already
              finished, we work with that too.
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
