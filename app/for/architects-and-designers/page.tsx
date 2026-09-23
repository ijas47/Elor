import type { Metadata } from "next";
import Image from "next/image";
import { site } from "@/lib/site";
import { breadcrumbSchema } from "@/lib/schema";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { MagneticButton } from "@/components/motion/MagneticButton";

const TITLE = "Custom Lighting Fabrication for Architects & Interior Designers";
const META_TITLE = "Custom Lighting for Architects & Designers";
const DESC =
  "Lighting plans modelled in DIALux, then supplied and fabricated. For the piece your drawing calls for, with spec sheets, phased delivery and site coordination.";
const PATH = "/for/architects-and-designers";

export const metadata: Metadata = {
  title: META_TITLE,
  description: DESC,
  alternates: { canonical: PATH },
};

const workWith = [
  {
    h: "Modelled in DIALux before site",
    p: "We build the scheme in DIALux from your drawings and send the calculation with the set. Lux levels, uniformity and glare are checked while the ceiling is still open. You are not finding out the room is dark after handover.",
  },
  {
    h: "Built from your drawing, not our catalogue",
    p: "Send a render, a CAD file, or a rough sketch with dimensions. We work from what you've already specified rather than asking you to pick the nearest thing we happen to stock. If the brief calls for a dimension or a finish that doesn't exist yet, that's the normal starting point of a fabrication job, not an exception.",
  },
  {
    h: "Spec sheets and samples before fabrication",
    p: "A formal spec sheet — dimensions, material, finish, lumens, IP rating where relevant, lead time — before anything is built, so it can go straight into your documentation. Material and finish samples on request for client sign-off.",
  },
  {
    h: "Site coordination that fits your program",
    p: "Ceiling anchor points, electrical load and site access planned against your construction timeline, not worked out after the fact. We coordinate directly with your site team or contractor when that's easier than routing everything through you.",
  },
  {
    h: "Phased delivery for multi-unit projects",
    p: "Hotels, restaurants and multi-unit residential rarely need everything on one date. Fixtures are staged to your handover schedule floor by floor or phase by phase, so storage and site damage aren't your problem to manage.",
  },
  {
    h: "One warranty, one point of contact",
    p: "Up to 5-year warranty on fabricated pieces, and one team responsible for design, build and installation — not a fixture from one vendor and installation from another, with the warranty caught between them if something goes wrong.",
  },
];

const projectTypes = [
  "Hotels & hospitality — lobby centrepieces, corridor and room lighting, facade wash",
  "Restaurants & cafés — mood-driven dining light, matched fixtures across multiple outlets",
  "Retail & showrooms — display lighting specified to flatter the merchandise, not generic",
  "Residential villas & duplexes — stairwell cascades, double-height statement pieces",
  "Offices & clinics — glare-free ambient light built to a lighting plan, not off-the-shelf",
];

const faqs = [
  {
    q: "Do you work directly with architects and interior designers, or only end clients?",
    a: "Both, and we're set up for either. We can work from your drawings and specifications directly, coordinate on-site with your contractor, and invoice however your project structure requires — through you, or directly to the client with you looped in.",
  },
  {
    q: "Can you fabricate from a CAD file or render?",
    a: "Yes — a render, CAD file, or dimensioned sketch is the normal starting point for a custom brief. We confirm exact measurements and structural mounting on-site before fabrication begins, and provide a spec sheet for your documentation before anything is built.",
  },
  {
    q: "How do you handle multi-unit projects like hotels with dozens of identical fixtures?",
    a: "Project pricing and phased delivery, staged to your handover schedule rather than delivered all at once. We coordinate site access and installation timing against your construction program directly with your site team when that's more efficient than routing through the design team.",
  },
  {
    q: "What's your typical lead time for a specified custom piece?",
    a: "Most single custom pieces are designed, fabricated and installed within 3 to 6 weeks of a confirmed brief. Multi-unit or large-scale commercial projects are quoted with a phased timeline matched to your construction schedule — ask at consultation for a project-specific estimate.",
  },
  {
    q: "Is there trade pricing for architects and designers?",
    a: "Project-scale pricing applies to multi-unit and commercial work — talk to us about your project scope at consultation. Ready-collection pricing is published at the pricing guide linked below for single pieces.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Custom lighting fabrication for trade professionals",
  provider: { "@type": "Organization", name: site.name, url: site.domain },
  areaServed: "IN",
  audience: { "@type": "Audience", audienceType: "Architects and interior designers" },
  description: DESC,
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

export default function ArchitectsAndDesigners() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema([{ name: "For Architects & Designers", path: PATH }])),
        }}
      />

      <section className="page-hero">
        <div className="wrap">
          <div className="split" style={{ alignItems: "center" }}>
            <div>
              <Breadcrumbs crumbs={[{ name: "For Architects & Designers", path: PATH }]} />
              <Reveal as="span"><span className="eyebrow">For the trade</span></Reveal>
              <Reveal delay={0.06}>
                <h1 className="h-xl" style={{ marginTop: 18 }}>
                  Lighting your drawings<br /><span className="serif-i">call for.</span>
                </h1>
              </Reveal>
              <Reveal delay={0.12}>
                <p className="lede" style={{ marginTop: 22 }}>
                  Send the drawings. We model the lighting in DIALux, supply
                  the fittings, and make the piece that isn&rsquo;t in a
                  catalogue. One set your site team can build from.
                </p>
              </Reveal>
              <Reveal delay={0.18}>
                <div className="cta-ctas" style={{ justifyContent: "flex-start", marginTop: 30 }}>
                  <MagneticButton href="/consultation" variant="gold">Discuss a Project <span className="arr">→</span></MagneticButton>
                  <MagneticButton href="/customisation" variant="ghost">See the Fabrication Process</MagneticButton>
                </div>
              </Reveal>
            </div>
            <Reveal delay={0.1} className="split-media frame">
              <Image
                src="/lifestyle/showroom-grand.jpg"
                alt="A large fabricated chandelier centrepiece in a commercial lobby setting"
                fill
                sizes="(max-width: 1020px) 100vw, 50vw"
                priority
                style={{ objectFit: "cover" }}
              />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="sec glow-top">
        <div className="wrap">
          <div className="sec-head">
            <div className="stack-sm">
              <Reveal as="span"><span className="eyebrow">How we work with you</span></Reveal>
              <Reveal delay={0.06}><h2 className="h-lg">From spec<br />to site.</h2></Reveal>
            </div>
          </div>
          <Stagger className="register">
            {workWith.map((w) => (
              <StaggerItem key={w.h} className="register-row">
                <h3>{w.h}</h3>
                <p>{w.p}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="sec">
        <div className="wrap-tight">
          <Reveal><h2 className="h-lg">Project types we take on</h2></Reveal>
          <Reveal delay={0.12}>
            <ul className="check-list" style={{ marginTop: 28 }}>
              {projectTypes.map((t) => (
                <li key={t}><span className="tick">✓</span>{t}</li>
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
                <details className="faq-item" name="trade-faq">
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
          <Reveal><h2 className="h-lg">Bring us the brief.</h2></Reveal>
          <Reveal delay={0.06}>
            <p className="lede" style={{ margin: "16px auto 0" }}>
              A drawing, a render, or a rough sketch with dimensions is enough
              to start a conversation about scope and timeline.
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
