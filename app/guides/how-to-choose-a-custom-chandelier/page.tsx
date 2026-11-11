import Link from "next/link";
import type { Metadata } from "next";
import { site } from "@/lib/site";
import { guideDates } from "@/lib/guides";
import { breadcrumbSchema } from "@/lib/schema";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Reveal } from "@/components/motion/Reveal";
import { MagneticButton } from "@/components/motion/MagneticButton";

const TITLE = "How to Choose a Custom Chandelier";
const H1 = "How to choose a custom chandelier, or a ready piece that already fits";
const DESC =
  "A ready chandelier is enough when the size already fits. If the void is unusual, Elor designs a custom piece. Design is free with purchase from Celestial.";
const PATH = "/guides/how-to-choose-a-custom-chandelier";
const CELESTIAL = "https://www.celestiallights.in";
const { updated: UPDATED, modified: MODIFIED } = guideDates(PATH);

const faqs = [
  {
    q: "When is a ready chandelier enough?",
    a: "When the drop, the width and the finish already fit the room. Measure the void first, then compare it with a piece at Celestial Lights, not with a photograph. If it fits, buy that piece.",
  },
  {
    q: "When should the piece be custom?",
    a: "When the void is unusual, the stair turns, or the finish has to match the joinery. Send a photo, the sizes you have, and the ceiling type. Elor designs and builds that piece. Design is free with purchase from Celestial.",
  },
  {
    q: "Do I need to know exact dimensions before I start?",
    a: "No. Bring what you have, even a rough estimate, and we confirm exact ceiling height, drop and diameter as the first step of any consultation.",
  },
  {
    q: "What should I send to start a custom piece?",
    a: "A photo, a render or a sketch, the sizes you have, and the ceiling type: slab, false ceiling, or a stair void. A picture is enough to start. Exact measurements are confirmed at consultation.",
  },
  {
    q: "Can one chandelier work for both everyday use and hosting?",
    a: "Yes, with the right dimming and layering. The fixture is the main light in the room. Task and accent lighting handle the rest, so it looks right lit low on a Tuesday and fully on for a party.",
  },
  {
    q: "What is different about lighting a hotel versus a home?",
    a: "Scale, consistency across multiple units or properties, and durability under daily commercial use. Project pricing and phased delivery also replace a single-fixture quote.",
  },
  {
    q: "Should I match the chandelier to my existing decor, or lead with it?",
    a: "Either works, but decide on purpose. A chandelier as the room's anchor point can lead the palette. A quieter piece should defer to furniture and walls already chosen.",
  },
  {
    q: "How do I avoid choosing something too big or too small?",
    a: "This is the single most common mistake, and it is why we measure ceiling height, drop and sightlines before recommending anything, rather than showing a catalogue first.",
  },
  {
    q: "Is design free?",
    a: "Design is free with purchase from Celestial. Ready fittings are bought from Celestial. Custom pieces are designed and made by Elor.",
  },
];

const related = [
  { href: "/guides/chandelier-for-living-room", label: "Living room chandeliers" },
  { href: "/guides/staircase-lighting-design", label: "Staircase lighting" },
  { href: "/guides/chandelier-size-calculator", label: "Chandelier size calculator" },
  { href: "/customisation", label: "Customisation" },
  { href: "/guides/chandelier-pricing-guide", label: "Chandelier pricing guide" },
  { href: "/guides/wooden-chandelier", label: "Wooden chandelier" },
  { href: "/guides/brass-chandelier", label: "Brass chandelier" },
  { href: "/guides/how-a-lighting-plan-is-built", label: "How a lighting plan is built" },
  { href: "/guides/how-to-choose-a-chandelier-shop", label: "How to choose a chandelier shop" },
  { href: "/guides", label: "All lighting guides" },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: H1,
  description: DESC,
  author: { "@type": "Organization", name: site.name, url: site.domain },
  publisher: {
    "@type": "Organization",
    name: site.name,
    logo: { "@type": "ImageObject", url: `${site.domain}/brand/logo-mark.svg` },
  },
  datePublished: "2026-08-19",
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

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: PATH },
};

export default function HowToChooseGuide() {
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
              { name: "How to Choose a Custom Chandelier", path: PATH },
            ])
          ),
        }}
      />

      <section className="page-hero">
        <div className="wrap-tight">
          <Breadcrumbs crumbs={[{ name: "Guides", path: "/guides" }, { name: "How to Choose a Custom Chandelier", path: PATH }]} />
          <Reveal as="span">
            <span className="eyebrow">Buying Guide · Updated {UPDATED}</span>
          </Reveal>
          <Reveal delay={0.06}>
            <h1 className="h-xl" style={{ marginTop: 18 }}>
              How to choose a custom chandelier,{" "}
              <br />
              <span className="serif-i">or a ready piece that already fits</span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <ul className="check-list" style={{ marginTop: 22 }}>
              <li>
                <span className="tick">✓</span>
                A ready piece is enough when the drop, the width and the finish already fit the room.
              </li>
              <li>
                <span className="tick">✓</span>
                A custom piece is for an unusual void, or a finish that has to match the joinery.
              </li>
              <li>
                <span className="tick">✓</span>
                Design is free with purchase from Celestial. Elor does that design work.
              </li>
            </ul>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="lede" style={{ marginTop: 22 }}>
              A ready chandelier is enough when the drop, the width and the finish already fit the room. If the void is unusual, or the finish has to match the joinery, Elor designs a custom piece. Ready fittings are bought from{" "}
              <a href={CELESTIAL} target="_blank" rel="noopener noreferrer">Celestial Lights</a>
              . Design is free with purchase from Celestial. Measure the ceiling before you look at a catalogue.
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <div className="cta-ctas" style={{ justifyContent: "flex-start", marginTop: 30 }}>
              <MagneticButton href="/consultation" variant="gold">
                Book a Consultation <span className="arr">→</span>
              </MagneticButton>
              <MagneticButton href="/customisation" variant="ghost">
                Send a picture <span className="arr">→</span>
              </MagneticButton>
              <MagneticButton href={CELESTIAL} variant="ghost" external>
                See the range <span className="arr">→</span>
              </MagneticButton>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap-tight">
          <Reveal>
            <h2 className="h-lg">When is a ready chandelier enough?</h2>
          </Reveal>
          <Reveal delay={0.06}>
            <p className="lede" style={{ marginTop: 16 }}>
              When the drop, the width and the finish already fit the room. Measure the void first, then compare it with a piece at{" "}
              <a href={CELESTIAL} target="_blank" rel="noopener noreferrer">Celestial Lights</a>
              , not with a photograph. If the collection has a piece that fits, buy that one.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="lede" style={{ marginTop: 16 }}>
              A villa living or dining room is the usual case for this. The piece is sized to the table or the seating, not to the whole ceiling, and you see it up close every day. If a ready piece already matches that size and finish, you do not need a custom one.
            </p>
          </Reveal>
          <Reveal delay={0.14}>
            <div className="cta-ctas" style={{ justifyContent: "flex-start", marginTop: 30 }}>
              <MagneticButton href={CELESTIAL} variant="ghost" external>
                See the range <span className="arr">→</span>
              </MagneticButton>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="sec">
        <div className="wrap-tight">
          <Reveal>
            <h2 className="h-lg">When should the piece be made to measure?</h2>
          </Reveal>
          <Reveal delay={0.06}>
            <p className="lede" style={{ marginTop: 16 }}>
              When the void is unusual, the stair turns, or the finish has to match the joinery. A double-height stair, a narrow hall, or a hotel that needs several matching pieces is often in this group. Send a photo, the sizes you have, and the ceiling type. Elor designs and builds that piece. Design is free with purchase from Celestial.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="lede" style={{ marginTop: 16 }}>
              How that work runs is on{" "}
              <Link href="/customisation" style={{ color: "var(--gold)" }}>
                customisation
              </Link>
              . What drives the cost is in the{" "}
              <Link href="/guides/chandelier-pricing-guide" style={{ color: "var(--gold)" }}>
                pricing guide
              </Link>
              .
            </p>
          </Reveal>
        </div>
      </section>

      <section className="sec">
        <div className="wrap-tight">
          <Reveal>
            <h2 className="h-lg">What actually changes in a villa, a duplex, or a hotel?</h2>
          </Reveal>
          <Reveal delay={0.06}>
            <p className="lede" style={{ marginTop: 16 }}>
              The space decides the piece more than the style does. The three cases below use the same questions. The decision at the end of each is whether a ready piece fits, or whether Elor should make one.
            </p>
          </Reveal>
        </div>
        <div className="wrap">
          <div className="register" style={{ marginTop: 28 }}>
            <div className="register-row">
              <h3>Villa living and dining rooms</h3>
              <div>
                <p>
                  Usually one statement piece per room, sized to the table or the seating group below it, not to the ceiling. Finish matters here, because you see the piece up close, every day.
                </p>
                <p style={{ marginTop: 16 }}>
                  The decision: if a ready piece already fits the drop, the diameter and the finish, buy it from Celestial. If the size is off, or the finish has to match the joinery, have Elor make it. The{" "}
                  <Link href="/guides/chandelier-for-living-room" style={{ color: "var(--gold)" }}>
                    living room guide
                  </Link>
                  {" "}covers seating, fans and the ceiling anchor in that room. For wood or brass in a Kerala house, see the{" "}
                  <Link href="/guides/wooden-chandelier" style={{ color: "var(--gold)" }}>
                    wooden chandelier
                  </Link>
                  {" "}and{" "}
                  <Link href="/guides/brass-chandelier" style={{ color: "var(--gold)" }}>
                    brass chandelier
                  </Link>
                  {" "}guides.
                </p>
              </div>
            </div>
            <div className="register-row">
              <h3>Duplex stairwells and double-height voids</h3>
              <div>
                <p>
                  Drop matters more than diameter. A cascade or a tiered piece is built to the exact height between floors. It is seen from the floor, from the stairs, and from the landing above, including from directly below.
                </p>
                <p style={{ marginTop: 16 }}>
                  The decision: if the collection has a cascade that fits the width and the drop, it is at Celestial. If the void is odd, or the stair turns, Elor designs it to that section. Draw the stair before you order. The{" "}
                  <Link href="/guides/staircase-lighting-design" style={{ color: "var(--gold)" }}>
                    staircase lighting guide
                  </Link>
                  {" "}and the{" "}
                  <Link href="/guides/chandelier-size-calculator" style={{ color: "var(--gold)" }}>
                    size calculator
                  </Link>
                  {" "}are the first checks.
                </p>
              </div>
            </div>
            <div className="register-row">
              <h3>Hotel lobbies and banquet halls</h3>
              <div>
                <p>
                  These are built for scale, for durability under daily commercial use, and often for several identical or matching pieces across a property. Project pricing, phased delivery and site coordination replace a single consultation, and a single-fixture quote.
                </p>
                <p style={{ marginTop: 16 }}>
                  The decision: a ready piece can work where one fixture is enough and the size already fits. Matching sets, unusual voids, or a finish that has to run across rooms are custom work. Start with the site, not with a catalogue.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap-tight">
          <Reveal>
            <h2 className="h-lg">What should I measure, and what should I send?</h2>
          </Reveal>
          <Reveal delay={0.06}>
            <p className="lede" style={{ marginTop: 16 }}>
              Measure the ceiling height, the drop you actually have, and the diameter the piece can occupy, from the room itself, not from a plan you have not checked. Sightlines matter too: will you see the piece only from below, or also from a stair, a mezzanine or an upper floor? The{" "}
              <Link href="/guides/chandelier-size-calculator" style={{ color: "var(--gold)" }}>
                size calculator
              </Link>
              {" "}is a first check. We confirm exact figures at consultation, so a rough estimate is enough to start.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="lede" style={{ marginTop: 16 }}>
              For a custom piece, send a photo, a render or a sketch, and the sizes you have. Also send the ceiling type: a slab, a false ceiling, or a stair void. A picture is a complete brief. If the ceiling is a false ceiling, the anchor still has to go into the slab. That sequence is in the{" "}
              <Link href="/guides/false-ceiling-chandelier-weight" style={{ color: "var(--gold)" }}>
                false-ceiling guide
              </Link>
              .
            </p>
          </Reveal>
        </div>
      </section>

      <section className="sec">
        <div className="wrap-tight">
          <Reveal>
            <h2 className="h-lg">Six questions to answer first</h2>
          </Reveal>
          <Reveal delay={0.06}>
            <p className="lede" style={{ marginTop: 16 }}>
              Answer these before you look at a catalogue. The wrong-size mistake mostly takes care of itself.
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <ul className="check-list" style={{ marginTop: 28 }}>
              <li>
                <span className="tick">✓</span>
                What is the ceiling height, and the drop available, measured, not guessed?
              </li>
              <li>
                <span className="tick">✓</span>
                Is this the single statement piece in the room, or one of several fixtures working together?
              </li>
              <li>
                <span className="tick">✓</span>
                What is the room&rsquo;s dominant material and palette, so the fixture complements it instead of competing with it?
              </li>
              <li>
                <span className="tick">✓</span>
                Will it be seen from below only, or also from a stairwell, mezzanine or upper floor?
              </li>
              <li>
                <span className="tick">✓</span>
                Does a ready piece fit the space, or does an unusual void need something built to measure?
              </li>
              <li>
                <span className="tick">✓</span>
                Who is installing it, and what happens if something needs servicing in year three?
              </li>
            </ul>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="lede" style={{ marginTop: 22 }}>
              The last question is one to ask before you buy. A shop that builds the piece should be able to say who hangs it and how a part is replaced later. Questions like that, for any showroom, are in{" "}
              <Link href="/guides/how-to-choose-a-chandelier-shop" style={{ color: "var(--gold)" }}>
                how to choose a chandelier shop
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
                <details className="faq-item" name="how-to-choose-a-custom-chandelier-faq">
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
          <h2 className="h-lg">Related guides</h2>
          <p className="lede" style={{ marginTop: 16 }}>
            {related.map((item, i) => (
              <span key={item.href}>
                {i > 0 ? " · " : ""}
                <Link href={item.href} style={{ color: "var(--gold)" }}>
                  {item.label}
                </Link>
              </span>
            ))}
          </p>
        </div>
      </section>

      <section className="sec glow-top">
        <div className="wrap-tight" style={{ textAlign: "center" }}>
          <Reveal>
            <h2 className="h-lg">Measure first, then decide</h2>
          </Reveal>
          <Reveal delay={0.06}>
            <p className="lede" style={{ margin: "16px auto 0" }}>
              We measure the space and tell you what actually fits, before you commit to anything. If a ready piece already fits, buy it from Celestial. If it has to be made, Elor designs it. Design is free with purchase from Celestial.
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="cta-ctas" style={{ marginTop: 30 }}>
              <MagneticButton href="/consultation" variant="gold">
                Book a Consultation <span className="arr">→</span>
              </MagneticButton>
              <MagneticButton href="/customisation" variant="ghost">
                Send a picture <span className="arr">→</span>
              </MagneticButton>
              <MagneticButton href={CELESTIAL} variant="ghost" external>
                See the range <span className="arr">→</span>
              </MagneticButton>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
