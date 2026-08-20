import type { Metadata } from "next";
import { site } from "@/lib/site";
import { breadcrumbSchema } from "@/lib/schema";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { MagneticButton } from "@/components/motion/MagneticButton";

const TITLE = "Crystal vs Glass vs Acrylic Chandeliers — Which to Choose";
const DESC =
  "How crystal, hand-blown glass, acrylic and metal chandeliers actually differ in light, weight, cleaning and cost — and which suits an Indian home, humid coast or hotel lobby.";
const PATH = "/guides/crystal-vs-glass-chandelier";
const UPDATED = "20 August 2026";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: PATH },
};

const materials = [
  {
    h: "Lead crystal — the reference standard",
    p: "Crystal contains lead oxide (or a modern barium/zinc equivalent), which raises the refractive index and gives you the split, prismatic sparkle nothing else reproduces. It is the heaviest option, the most expensive, and the one that rewards a room where it will actually be seen up close and lit properly. In a room with little natural light and only flat downlighting, most of what you paid for never shows.",
  },
  {
    h: "Hand-blown glass — character over sparkle",
    p: "Glass refracts less than crystal, so it glows rather than sparkles. What it offers instead is form: colour, organic shapes and visible hand-work that crystal's faceted geometry cannot do. Lighter than crystal, more forgiving to clean, and it reads as contemporary where crystal reads as formal.",
  },
  {
    h: "Acrylic — light, safe, and honest about what it is",
    p: "A fraction of the weight and cost, and it does not shatter. Genuinely the right answer for a child's room, a high ceiling that is hard to service, a rental, or a false ceiling that cannot take a slab anchor. It will not fool anyone standing under it, and it yellows over years under strong UV, so keep it away from a west-facing window.",
  },
  {
    h: "Metal and mixed media — structure as the statement",
    p: "Brass, stainless, powder-coated steel and blackened iron, often with LED integrated rather than lamped. The lightest visual language of the four and the most durable. Where crystal is about the light it throws, metal is about the shape it draws in the air, which makes it the usual choice for a modern interior.",
  },
];

const faqs = [
  {
    q: "What is the difference between a crystal and a glass chandelier?",
    a: "Crystal contains lead oxide or a barium/zinc equivalent that raises its refractive index, so it splits light into visible prismatic sparkle. Ordinary glass refracts far less and glows softly instead. Crystal is heavier and costs more; glass offers colour, organic shapes and visible hand-work that faceted crystal cannot.",
  },
  {
    q: "Which chandelier material is best for a humid or coastal Kerala home?",
    a: "Crystal, glass, stainless steel and properly powder-coated metal. Avoid untreated brass, iron and mild steel within a few kilometres of the coast — salt-laden air corrodes them within a couple of years. Sealed fittings and stainless fixings matter as much as the visible material.",
  },
  {
    q: "Is acrylic a reasonable substitute for crystal?",
    a: "For weight, safety and budget, yes. For appearance, only at a distance. Acrylic is the sensible choice for a child's room, a hard-to-service height, or a false ceiling that cannot take a heavy anchor. It yellows over years under strong direct UV, so it is a poor choice beside a west-facing window.",
  },
  {
    q: "Which material is easiest to clean?",
    a: "Metal and acrylic wipe down in place. Glass is straightforward. Crystal is the most demanding, because every facet shows dust and multi-tier pieces often need drops removed to clean properly. In a room with a ceiling fan running most of the year, plan on cleaning two or three times a year rather than annually.",
  },
  {
    q: "Does crystal actually give more light than glass?",
    a: "Not more light, but differently distributed. The same lamp behind crystal throws sharp points and refracted patterns across walls and ceiling; behind glass it produces a softer, more even wash. Choose crystal for drama and glass for ambience — the lumens are set by the lamp, not the material.",
  },
  {
    q: "What do the different materials cost?",
    a: "Across our ready collection, accent and wall pieces run ₹3,000 to ₹15,000, mid-scale statement chandeliers ₹20,000 to ₹50,000, and large duplex pieces ₹45,000 to ₹70,000 and up. Within any given size, acrylic and metal sit at the lower end, glass in the middle, and crystal at the top. Bespoke fabrication is quoted per design.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: TITLE,
  description: DESC,
  image: `${site.domain}/lifestyle/showroom-grand.jpg`,
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

export default function MaterialsComparisonGuide() {
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
              { name: "Crystal vs Glass vs Acrylic", path: PATH },
            ])
          ),
        }}
      />

      <section className="page-hero">
        <div className="wrap-tight">
          <Reveal as="span"><span className="eyebrow">Buying Guide · Updated {UPDATED}</span></Reveal>
          <Reveal delay={0.06}>
            <h1 className="h-xl" style={{ marginTop: 18 }}>
              Crystal, glass, acrylic<br /><span className="serif-i">or metal?</span>
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="lede" style={{ marginTop: 22 }}>
              The short version: crystal sparkles and costs the most, glass
              glows and carries more character, acrylic is light and safe and
              honest about being acrylic, metal draws a shape rather than
              throwing light. Which is right depends less on budget than on how
              the room is lit and how close anyone stands to it.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap-tight">
          <Reveal><h2 className="h-lg">Side by side</h2></Reveal>
          <Reveal delay={0.12}>
            <div className="spec-wrap">
              <table className="spec-table">
                <thead>
                  <tr>
                    <th>&nbsp;</th>
                    <th>Crystal</th>
                    <th>Hand-blown glass</th>
                    <th>Acrylic</th>
                    <th>Metal</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Light quality</td><td>Prismatic sparkle</td><td>Soft, even glow</td><td>Flat, diffused</td><td>Directional</td></tr>
                  <tr><td>Relative weight</td><td className="warn">Heaviest</td><td>Moderate</td><td>Lightest</td><td>Light to moderate</td></tr>
                  <tr><td>Relative cost</td><td className="warn">Highest</td><td>Mid to high</td><td>Lowest</td><td>Low to mid</td></tr>
                  <tr><td>Cleaning</td><td className="warn">Demanding</td><td>Straightforward</td><td>Wipe in place</td><td>Wipe in place</td></tr>
                  <tr><td>Coastal humidity</td><td>Good</td><td>Good</td><td>Good</td><td className="warn">Depends on finish</td></tr>
                  <tr><td>Breakage risk</td><td>High</td><td>High</td><td>None</td><td>None</td></tr>
                  <tr><td>Reads as</td><td>Formal, classical</td><td>Crafted, contemporary</td><td>Practical</td><td>Modern, architectural</td></tr>
                  <tr><td>Best for</td><td>Foyers, formal dining</td><td>Living, dining, stairwells</td><td>Kids&rsquo; rooms, high ceilings</td><td>Modern interiors, commercial</td></tr>
                </tbody>
              </table>
            </div>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="form-note" style={{ marginTop: 12 }}>
              Weight and cost are relative within a given size &mdash; a small
              crystal piece weighs less than a large metal one. See the{" "}
              <a href="/guides/chandelier-pricing-guide">pricing guide</a> for
              real bands, and the{" "}
              <a href="/guides/false-ceiling-chandelier-weight">weight guide</a>{" "}
              for what your ceiling can carry.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="sec glow-top">
        <div className="wrap-tight">
          <Reveal><h2 className="h-lg">What each one is actually for</h2></Reveal>
        </div>
        <div className="wrap">
          <Stagger className="register">
            {materials.map((m) => (
              <StaggerItem key={m.h} className="register-row">
                <h3>{m.h}</h3>
                <p>{m.p}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="sec">
        <div className="wrap-tight">
          <Reveal><h2 className="h-lg">How to decide in one pass</h2></Reveal>
          <Reveal delay={0.12}>
            <ul className="check-list" style={{ marginTop: 28 }}>
              <li><span className="tick">✓</span>Will anyone stand within a few metres of it? If not, crystal&rsquo;s detail is largely wasted &mdash; scale and silhouette matter more than material.</li>
              <li><span className="tick">✓</span>Is the room dimmable, or lit flat? Crystal needs a point source and some contrast to sparkle. Under uniform daylight-temperature downlights it looks inert.</li>
              <li><span className="tick">✓</span>Within a few kilometres of the coast? Rule out untreated brass, iron and mild steel before considering anything else.</li>
              <li><span className="tick">✓</span>Can the ceiling take the weight, and can anyone reach it to clean it? Both questions have killed more crystal specifications than budget has.</li>
              <li><span className="tick">✓</span>Formal room or modern one? Crystal and glass carry different registers, and mixing the register with the interior is the mistake that no amount of quality fixes.</li>
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
                <details className="faq-item" name="materials-faq">
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
          <Reveal><h2 className="h-lg">Come and see the difference lit.</h2></Reveal>
          <Reveal delay={0.06}>
            <p className="lede" style={{ margin: "16px auto 0" }}>
              Crystal against glass is a five-second decision standing under
              both, and an impossible one from photographs. All three stores
              carry the full range.
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="cta-ctas" style={{ marginTop: 30 }}>
              <MagneticButton href="/stores" variant="gold">Visit a Store <span className="arr">→</span></MagneticButton>
              <MagneticButton href="/guides/coastal-lighting-kerala" variant="ghost">Coastal & Humidity Guide</MagneticButton>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
