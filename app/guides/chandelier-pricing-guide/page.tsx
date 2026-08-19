import type { Metadata } from "next";
import { site } from "@/lib/site";
import { breadcrumbSchema } from "@/lib/schema";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { Icon, type IconName } from "@/components/ui/Icon";

export const metadata: Metadata = {
  title: "Custom Chandelier Cost in India — A Real Pricing Guide",
  description:
    "What a chandelier actually costs in India: real ready-collection price bands by size and material, and how bespoke fabrication pricing is worked out.",
  alternates: { canonical: "/guides/chandelier-pricing-guide" },
};

const UPDATED = "19 August 2026";

const priceBands = [
  {
    h: "Accent & wall pieces — ₹3,000 to ₹15,000",
    p: "Reading lights, wall sconces and smaller accent fixtures in glass, brass and metal. The entry point for a considered room.",
  },
  {
    h: "Statement chandeliers — ₹20,000 to ₹50,000",
    p: "Mid-scale dining and living-room chandeliers in crystal, glass and mixed metal, the size most homes actually need.",
  },
  {
    h: "Large & duplex statement pieces — ₹45,000 to ₹70,000+",
    p: "Double-height cascades and grand centrepieces built for stairwells, lobbies and duplex ceilings.",
  },
];

const factors: { icon: IconName; h: string; p: string }[] = [
  { icon: "ruler", h: "Size & drop", p: "A 24-inch flush mount and an 8-foot duplex cascade are different fabrication jobs, not different sizes of the same job. Scale is the single biggest driver." },
  { icon: "supplier", h: "Material", p: "Crystal, hand-blown glass, brass and marble all price differently, and so does whether a material is stocked or sourced specially for your piece." },
  { icon: "spark", h: "Fabrication complexity", p: "A single-tier ring costs less to build than a multi-layer cascade with hand-set crystal or custom metalwork. Complexity is time, and time is cost." },
  { icon: "shield", h: "Installation & site conditions", p: "Ceiling height, structural mounting and site access all factor into the final number, confirmed at consultation, not guessed at from a photo." },
];

const faqs = [
  { q: "Is the ready-collection price the final price?", a: "Yes, for ready pieces bought as shown. Delivery and installation are quoted separately based on your location and site." },
  { q: "How much does a custom chandelier typically add over a ready piece?", a: "It depends entirely on the design, there is no fixed multiplier. A custom piece can cost about the same as a large ready piece, or considerably more, depending on material and complexity. You get a firm number before committing, not an estimate." },
  { q: "Do you charge for the design and quote itself?", a: "No. The consultation, design direction and firm quote are free. You only pay once you approve the design." },
  { q: "Is installation included in the quote?", a: "Installation is quoted alongside the piece so the full cost is clear upfront, no separate electrician needed." },
  { q: "Do prices differ between Kannur, Kochi and Kozhikode?", a: "Product pricing is the same across all three stores and pan-India delivery. Installation cost can vary slightly with site access and distance from the nearest store." },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "What Does a Custom Chandelier Cost in India?",
  description:
    "Real ready-collection price bands by size and material, and how bespoke chandelier fabrication pricing is worked out.",
  image: `${site.domain}/lifestyle/showroom-grand.jpg`,
  author: { "@type": "Organization", name: site.name, url: site.domain },
  publisher: {
    "@type": "Organization",
    name: site.name,
    logo: { "@type": "ImageObject", url: `${site.domain}/brand/logo-mark.svg` },
  },
  datePublished: "2026-08-19",
  dateModified: "2026-08-19",
  mainEntityOfPage: `${site.domain}/guides/chandelier-pricing-guide`,
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
              { name: "Chandelier Pricing Guide", path: "/guides/chandelier-pricing-guide" },
            ])
          ),
        }}
      />

      <section className="page-hero">
        <div className="wrap-tight">
          <Reveal as="span"><span className="eyebrow">Pricing Guide · Updated {UPDATED}</span></Reveal>
          <Reveal delay={0.06}>
            <h1 className="h-xl" style={{ marginTop: 18 }}>
              What does a custom chandelier<br /><span className="serif-i">actually cost</span> in India?
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="lede" style={{ marginTop: 22 }}>
              Two different questions get asked here, and they have two
              different answers: what a ready piece costs, and what a bespoke
              one costs. This guide covers both, with real numbers, not a
              &ldquo;starting from&rdquo; figure that never applies to anyone.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap-tight">
          <Reveal><h2 className="h-lg">Ready-collection pricing</h2></Reveal>
          <Reveal delay={0.06}>
            <p className="lede" style={{ marginTop: 16 }}>
              The Celestial Lights collection is priced and published. Three
              broad bands, by scale:
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
            Figures reflect the current Celestial Lights ready-collection
            range across materials including crystal, marble, glass and
            brass. Ready pieces ship and install faster than a bespoke
            commission, because nothing has to be designed or fabricated
            first.
          </p>
        </div>
      </section>

      <section className="sec glow-top">
        <div className="wrap-tight">
          <Reveal><h2 className="h-lg">Bespoke pricing works differently</h2></Reveal>
          <Reveal delay={0.06}>
            <p className="lede" style={{ marginTop: 16 }}>
              There is no bespoke price list, because no two custom pieces
              are the same object. Drop, diameter, material and fabrication
              complexity all move the number. What we do instead: measure
              your space, design the piece, and give you a firm price before
              you commit to anything, no surprises after the piece is built.
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="cta-ctas" style={{ justifyContent: "flex-start", marginTop: 28 }}>
              <MagneticButton href="/consultation" variant="gold">Start a Consultation <span className="arr">→</span></MagneticButton>
              <MagneticButton href={site.whatsapp} variant="ghost" external>WhatsApp a Photo</MagneticButton>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="sec-head">
            <div className="stack-sm">
              <Reveal as="span"><span className="eyebrow">Four factors</span></Reveal>
              <Reveal delay={0.06}><h2 className="h-lg">What actually moves<br />the price.</h2></Reveal>
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

      <section className="sec glow-top">
        <div className="wrap-tight" style={{ textAlign: "center" }}>
          <Reveal><h2 className="h-lg">Get a firm price, not a guess.</h2></Reveal>
          <Reveal delay={0.06}>
            <p className="lede" style={{ margin: "16px auto 0" }}>
              Free consultation, in person at our Kannur, Kochi or Kozhikode
              store, or pan-India by appointment.
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
