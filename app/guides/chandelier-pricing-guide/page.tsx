import Link from "next/link";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { site } from "@/lib/site";
import { elorContact } from "@/lib/brands";
import { guideDates } from "@/lib/guides";
import { breadcrumbSchema } from "@/lib/schema";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { RelatedGuides } from "@/components/ui/RelatedGuides";
import { Icon, type IconName } from "@/components/ui/Icon";

const TITLE = "What Does a Custom Chandelier Cost in India?";
const META_TITLE = "What a Custom Chandelier Costs in India";
const DESC =
  "Ready chandeliers in India cost ₹3,000 to ₹70,000+. Custom pieces get a firm price after a measure. Design is free with purchase from Celestial.";
const PATH = "/guides/chandelier-pricing-guide";
const CELESTIAL = "https://www.celestiallights.in";
const { updated: UPDATED, modified: MODIFIED } = guideDates(PATH);

export const metadata: Metadata = {
  title: META_TITLE,
  description: DESC,
  alternates: { canonical: PATH },
};

const priceBands = [
  {
    h: "Accent and wall pieces: ₹3,000 to ₹15,000",
    p: "Reading lights, wall sconces and smaller accent fittings in glass, brass and metal. A starting point for a considered room.",
  },
  {
    h: "Statement chandeliers: ₹20,000 to ₹50,000",
    p: "Mid-size dining and living-room chandeliers in crystal, glass and mixed metal. This is the size most homes actually need.",
  },
  {
    h: "Large and duplex statement pieces: ₹45,000 to ₹70,000+",
    p: "Double-height cascades and large centrepieces built for stairwells, lobbies and duplex ceilings.",
  },
];

const factors: { icon: IconName; h: string; p: string }[] = [
  { icon: "ruler", h: "How does size and drop change the price?", p: "A 24-inch flush mount and an 8-foot duplex cascade are different jobs, not different sizes of the same job. Scale is the single biggest driver." },
  { icon: "supplier", h: "How does material change the price?", p: "Crystal, hand-blown glass, brass and marble all price differently. It also matters whether a material is already in stock or has to be sourced for your piece." },
  { icon: "spark", h: "How does fabrication complexity change the price?", p: "A single-tier ring costs less to build than a multi-layer cascade with hand-set crystal or custom metalwork. Complexity is time, and time is cost." },
  { icon: "shield", h: "Do installation and site conditions change the price?", p: "We install custom lights and give installation support for everything else. For ready fittings, ceiling height, mounting and site access shape the installation support. That is confirmed at a consultation, not guessed from a photo." },
];

const faqs: { q: string; a: ReactNode; schema: string }[] = [
  {
    q: "Is the ready-collection price the final price?",
    a: "Yes, for ready pieces bought as shown. Delivery is quoted separately based on your location. We install custom lights and give installation support for everything else.",
    schema: "Yes, for ready pieces bought as shown. Delivery is quoted separately based on your location. We install custom lights and give installation support for everything else.",
  },
  {
    q: "How much does a custom chandelier typically add over a ready piece?",
    a: "It depends entirely on the design. There is no fixed multiplier. A custom piece can cost about the same as a large ready piece, or considerably more, depending on material and complexity. You get a firm number before committing, not an estimate.",
    schema: "It depends entirely on the design. There is no fixed multiplier. A custom piece can cost about the same as a large ready piece, or considerably more, depending on material and complexity. You get a firm number before committing, not an estimate.",
  },
  {
    q: "Do you charge for the design itself?",
    a: (
      <>
        The first session is free. Design is free with purchase from{" "}
        <a href={CELESTIAL} target="_blank" rel="noopener noreferrer">Celestial Lights</a>.
        {" "}You get a firm price before you commit, and you only pay once you approve the design.
      </>
    ),
    schema: "The first session is free. Design is free with purchase from Celestial Lights. You get a firm price before you commit, and you only pay once you approve the design.",
  },
  {
    q: "Is installation included in the quote?",
    a: "We install custom lights and give installation support for everything else, arranged with the quote so you know what is covered before you order.",
    schema: "We install custom lights and give installation support for everything else, arranged with the quote so you know what is covered before you order.",
  },
  {
    q: "Do prices differ between Kannur, Kochi and Kozhikode?",
    a: "Product pricing is the same across all three stores and pan-India delivery. Installation support for ready pieces can vary with site access and distance from the nearest store. We install custom lights and give installation support for everything else.",
    schema: "Product pricing is the same across all three stores and pan-India delivery. Installation support for ready pieces can vary with site access and distance from the nearest store. We install custom lights and give installation support for everything else.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: TITLE,
  description: DESC,
  image: `${site.domain}/lifestyle/lobby-canopy.jpg`,
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
    acceptedAnswer: { "@type": "Answer", text: f.schema },
  })),
};

export default function ChandelierPricingGuide() {
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
              { name: "Chandelier Pricing Guide", path: PATH },
            ])
          ),
        }}
      />

      <section className="page-hero">
        <div className="wrap-tight">
          <Breadcrumbs crumbs={[{ name: "Guides", path: "/guides" }, { name: "Chandelier Pricing Guide", path: PATH }]} />
          <Reveal as="span"><span className="eyebrow">Pricing Guide · Updated {UPDATED}</span></Reveal>
          <Reveal delay={0.06}>
            <h1 className="h-xl" style={{ marginTop: 18 }}>
              What does a custom chandelier<br /><span className="serif-i">actually cost</span> in India?
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="lede" style={{ marginTop: 22 }}>
              Ready pieces at Celestial Lights cost ₹3,000 to ₹15,000 for
              accents, ₹20,000 to ₹50,000 for statement chandeliers, and
              ₹45,000 to ₹70,000+ for large or duplex pieces. A custom piece
              has no list price. Elor measures the space and gives a firm
              price before you commit. Design is free with purchase from
              Celestial.
            </p>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="lede" style={{ marginTop: 16 }}>
              Elor Lighting is the design shop. We plan lighting and make
              custom fittings. Ready lights are sold by our sister shop,{" "}
              <a href={CELESTIAL} target="_blank" rel="noopener noreferrer">Celestial Lights</a>.
              {" "}You can visit Celestial in Kannur and Kozhikode, or the Elor
              centre in Kochi. We install custom lights and give installation
              support for everything else.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap-tight">
          <Reveal><h2 className="h-lg">What does a ready chandelier cost?</h2></Reveal>
          <Reveal delay={0.06}>
            <p className="lede" style={{ marginTop: 16 }}>
              These are the current Celestial Lights ready-collection bands, by
              scale, across crystal, marble, glass and brass. See the live range
              at{" "}
              <a href={CELESTIAL} target="_blank" rel="noopener noreferrer">Celestial Lights</a>.
            </p>
          </Reveal>
        </div>
        <div className="wrap">
          <Stagger className="register">
            {priceBands.map((b) => (
              <StaggerItem key={b.h} className="register-row">
                <h3>{b.h}</h3>
                <p>{b.p}</p>
              </StaggerItem>
            ))}
          </Stagger>
          <p className="form-note" style={{ marginTop: 8 }}>
            Ready pieces ship faster than a custom commission, because nothing
            has to be designed or built first. We install custom lights and
            give installation support for everything else.
          </p>
          <p className="form-note" style={{ marginTop: 8 }}>
            These bands are also published as a plain-text file at{" "}
            <a href="/pricing.md">/pricing.md</a>, so other tools can read them
            without loading this page.
          </p>
        </div>
      </section>

      <section className="sec glow-top">
        <div className="wrap-tight">
          <Reveal><h2 className="h-lg">How is a custom chandelier priced?</h2></Reveal>
          <Reveal delay={0.06}>
            <p className="lede" style={{ marginTop: 16 }}>
              There is no custom price list, because no two pieces are the
              same. Drop, diameter, material and how hard the piece is to
              build all move the number. What we do instead is measure your
              space, design the piece, and give you a firm price before you
              commit. There are no surprises after it is built.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="lede" style={{ marginTop: 16 }}>
              Design is free with purchase from{" "}
              <a href={CELESTIAL} target="_blank" rel="noopener noreferrer">Celestial Lights</a>.
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="cta-ctas" style={{ justifyContent: "flex-start", marginTop: 28 }}>
              <MagneticButton href="/consultation" variant="gold">Start a Consultation <span className="arr">→</span></MagneticButton>
              <MagneticButton href={elorContact.whatsappHref} variant="ghost" external>WhatsApp a Photo</MagneticButton>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="sec-head">
            <div className="stack-sm">
              <Reveal delay={0.06}><h2 className="h-lg">What actually moves<br />the price?</h2></Reveal>
            </div>
          </div>
          <Stagger className="pillars">
            {factors.map((f) => (
              <StaggerItem key={f.h}>
                <div className="pillar">
                  <div className="pillar-ico"><Icon name={f.icon} /></div>
                  <h3>{f.h}</h3>
                  <p>{f.p}</p>
                </div>
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
                <details className="faq-item" name="pricing-faq">
                  <summary>{f.q}</summary>
                  <p className="faq-a">{f.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <RelatedGuides currentSlug="chandelier-pricing-guide" />

      <section className="sec glow-top">
        <div className="wrap-tight" style={{ textAlign: "center" }}>
          <Reveal><h2 className="h-lg">Ready to get a firm price?</h2></Reveal>
          <Reveal delay={0.06}>
            <p className="lede" style={{ margin: "16px auto 0" }}>
              The first session is free. Visit Celestial Lights in Kannur
              (Philips Building, 670005) or Kozhikode, or the Elor centre in
              Kochi, or <Link href="/consultation">book a consultation</Link>.
              To buy a ready piece, go to{" "}
              <a href={CELESTIAL} target="_blank" rel="noopener noreferrer">Celestial Lights</a>.
              {" "}Design is free with purchase from Celestial.
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="cta-ctas" style={{ marginTop: 30 }}>
              <MagneticButton href="/consultation" variant="gold">Book a Consultation <span className="arr">→</span></MagneticButton>
              <MagneticButton href="/stores" variant="ghost">Find a Store</MagneticButton>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
