import type { Metadata } from "next";
import { site } from "@/lib/site";
import { breadcrumbSchema } from "@/lib/schema";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { MagneticButton } from "@/components/motion/MagneticButton";

export const metadata: Metadata = {
  title: "How to Choose a Custom Chandelier — Villa, Duplex or Hotel",
  description:
    "What actually changes between lighting a villa living room, a duplex stairwell and a hotel lobby, and six questions to answer before you choose anything.",
  alternates: { canonical: "/guides/how-to-choose-a-custom-chandelier" },
};

const UPDATED = "19 August 2026";

const spaces = [
  {
    h: "Villa living & dining rooms",
    p: "Usually one generously scaled statement piece per room, sized to the table or seating group below it, not the ceiling. Material and finish matter more here, since it's seen up close, every day.",
  },
  {
    h: "Duplex stairwells & double-height voids",
    p: "Drop matters more than diameter. A cascade or tiered piece is built to the exact vertical distance between floors, and is viewed from multiple angles and heights, not just from directly below.",
  },
  {
    h: "Hotel lobbies & banquet halls",
    p: "Built for scale, durability and often multiple identical or matching pieces across a property. Project pricing, phased delivery and site coordination replace a single consultation.",
  },
];

const questions = [
  "What's the ceiling height and the drop available, measured, not guessed?",
  "Is this the single statement piece in the room, or one of several fixtures working together?",
  "What's the room's dominant material and palette, so the fixture complements it instead of competing with it?",
  "Will it be seen from below only, or also from a stairwell, mezzanine or upper floor?",
  "Does a ready piece fit the space, or does an unusual void need something built to measure?",
  "Who's installing it, and what happens if something needs servicing in year three?",
];

const faqs = [
  { q: "Do I need to know exact dimensions before I start?", a: "No. Bring what you have, even a rough estimate, and we confirm exact ceiling height, drop and diameter as the first step of any consultation." },
  { q: "Can one chandelier work for both everyday use and hosting?", a: "Yes, with the right dimming and layering. The fixture is the ambient centrepiece, with task and accent lighting handling the rest, so it looks right lit low on a Tuesday and fully on for a party." },
  { q: "What's different about lighting a hotel versus a home?", a: "Scale, consistency across multiple units or properties, and durability under daily commercial use. Project pricing and phased delivery also replace a single-fixture quote." },
  { q: "Should I match the chandelier to my existing decor or lead with it?", a: "Either works, but decide on purpose. A chandelier as the room's anchor point can lead the palette; a quieter piece should defer to furniture and walls already chosen." },
  { q: "How do I avoid choosing something too big or too small?", a: "This is the single most common mistake, and it's why we measure ceiling height, drop and sightlines before recommending anything, rather than showing a catalogue first." },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Choose a Custom Chandelier — Villa, Duplex or Hotel",
  description:
    "What actually changes between lighting a villa living room, a duplex stairwell and a hotel lobby, and six questions to answer before you choose anything.",
  image: `${site.domain}/work/w3-showroom.jpg`,
  author: { "@type": "Organization", name: site.name, url: site.domain },
  publisher: {
    "@type": "Organization",
    name: site.name,
    logo: { "@type": "ImageObject", url: `${site.domain}/brand/logo-mark.svg` },
  },
  datePublished: "2026-08-19",
  dateModified: "2026-08-19",
  mainEntityOfPage: `${site.domain}/guides/how-to-choose-a-custom-chandelier`,
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
              { name: "How to Choose a Custom Chandelier", path: "/guides/how-to-choose-a-custom-chandelier" },
            ])
          ),
        }}
      />

      <section className="page-hero">
        <div className="wrap-tight">
          <Reveal as="span"><span className="eyebrow">Buying Guide · Updated {UPDATED}</span></Reveal>
          <Reveal delay={0.06}>
            <h1 className="h-xl" style={{ marginTop: 18 }}>
              How to choose a custom chandelier<br /><span className="serif-i">for a villa, duplex or hotel.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="lede" style={{ marginTop: 22 }}>
              The right chandelier depends more on the space than the style.
              What actually changes between a living room, a stairwell and a
              lobby, and six questions worth answering before you choose
              anything.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap-tight">
          <Reveal><h2 className="h-lg">What actually changes by space</h2></Reveal>
        </div>
        <div className="wrap">
          <Stagger className="register">
            {spaces.map((s) => (
              <StaggerItem key={s.h} className="register-row">
                <h3>{s.h}</h3>
                <p>{s.p}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="sec glow-top">
        <div className="wrap-tight">
          <Reveal><h2 className="h-lg">Six questions to answer first</h2></Reveal>
          <Reveal delay={0.06}>
            <p className="lede" style={{ marginTop: 16 }}>
              Answer these honestly before you look at a single catalogue,
              and the wrong-sized-fixture mistake mostly takes care of
              itself.
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <ul className="check-list" style={{ marginTop: 28 }}>
              {questions.map((q) => (
                <li key={q}><span className="tick">✓</span>{q}</li>
              ))}
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
                <details className="faq-item" name="how-to-choose-faq">
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
          <Reveal><h2 className="h-lg">Not sure yet? That&rsquo;s what the consultation is for.</h2></Reveal>
          <Reveal delay={0.06}>
            <p className="lede" style={{ margin: "16px auto 0" }}>
              We measure the space and tell you what actually fits, before
              you commit to anything.
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="cta-ctas" style={{ marginTop: 30 }}>
              <MagneticButton href="/consultation" variant="gold">Book a Consultation <span className="arr">→</span></MagneticButton>
              <MagneticButton href="/guides/chandelier-pricing-guide" variant="ghost">See Pricing Guide</MagneticButton>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
