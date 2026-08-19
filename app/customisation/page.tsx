import type { Metadata } from "next";
import Image from "next/image";
import { site } from "@/lib/site";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { Icon } from "@/components/ui/Icon";

export const metadata: Metadata = {
  title: "Custom Chandeliers · Send a Picture, We Build the Light",
  description:
    "Elor builds custom chandeliers and statement lighting from any reference, a photo, a render, a magazine page or a sketch. Measure, design, fabricate and install, with up to 5-year warranty. Kerala & pan-India.",
  alternates: { canonical: "/customisation" },
};

const faqs = [
  // Also serialized into FAQPage schema below — keep questions/answers in sync
  // with what's actually asked on the page.
  { q: "What can you actually make?", a: "Chandeliers, cascades, cluster pendants and statement ceiling pieces. If it hangs and it glows, it is in scope. We work in crystal, glass, metal, acrylic and LED, at any drop and diameter." },
  { q: "I only have a photo. Is that enough?", a: "Yes. The picture is the brief. A Pinterest screenshot, a hotel photo, a magazine page or a rough sketch all work. We reverse-engineer it into a buildable fixture and confirm dimensions with you." },
  { q: "How long does a custom piece take?", a: "Most pieces are designed, fabricated and installed within 3 to 6 weeks depending on size and finish. We give you a firm timeline with the quote, before you commit." },
  { q: "What about budget?", a: "We quote firm before any commitment. You will know the full cost, fixture, delivery and installation, up front. There are no surprises after the piece is built." },
  { q: "Is a custom piece serviceable later?", a: "Yes. We retain drawings and component lists, and custom pieces carry warranty up to 5 years, so a bespoke fixture stays serviceable for the long run." },
];

const briefTypes = [
  { icon: "render", h: "A photo or screenshot", p: "Something you saw and loved, a lobby, a Pinterest pin, a friend's home. Send it exactly as it is." },
  { icon: "drawing", h: "A drawing or render", p: "An elevation, a 3D render, a mood image from your architect or designer. We build to it." },
  { icon: "spark", h: "Just a description", p: "No image at all? Describe the feeling and the space. We sketch options for you to choose from." },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Custom Chandelier Fabrication",
  serviceType: "Bespoke lighting fabrication",
  provider: { "@type": "Organization", name: site.name, url: site.domain },
  areaServed: "IN",
  description:
    "Custom chandeliers and statement lighting built from any reference photo, render or sketch: measured, designed, fabricated by hand and installed, with up to 5-year warranty.",
  url: `${site.domain}/customisation`,
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

export default function Customisation() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="page-hero">
        <div className="wrap">
          <div className="split" style={{ alignItems: "center" }}>
            <div>
              <Reveal as="span"><span className="eyebrow">Custom chandeliers · Our specialty</span></Reveal>
              <Reveal delay={0.06}>
                <h1 className="h-xl" style={{ marginTop: 18 }}>
                  Send us a picture.<br /><span className="serif-i">We build the light.</span>
                </h1>
              </Reveal>
              <Reveal delay={0.12}>
                <p className="lede" style={{ marginTop: 22 }}>
                  Any reference is a complete brief, no drawings, dimensions or
                  lighting vocabulary required. If you can show it to us, we can
                  make it, sized to your ceiling and finished to match your room.
                </p>
              </Reveal>
              <Reveal delay={0.18}>
                <div className="cta-ctas" style={{ justifyContent: "flex-start", marginTop: 30 }}>
                  <MagneticButton href="#brief" variant="gold">Send a Reference <span className="arr">→</span></MagneticButton>
                  <MagneticButton href={site.whatsapp} variant="ghost" external>WhatsApp a Photo</MagneticButton>
                </div>
              </Reveal>
            </div>
            <Reveal delay={0.1} className="split-media frame">
              <Image src="/collections/astral-debris.jpg" alt="A bespoke astral debris chandelier suspended in a stairwell" fill sizes="(max-width: 1020px) 100vw, 50vw" priority style={{ objectFit: "cover" }} />
            </Reveal>
          </div>
        </div>
      </section>

      {/* A picture is a complete brief */}
      <section className="sec glow-top">
        <div className="wrap">
          <div className="sec-head">
            <div className="stack-sm">
              <Reveal as="span"><span className="eyebrow">Three ways to start</span></Reveal>
              <Reveal delay={0.06}><h2 className="h-lg">A picture is a<br />complete brief.</h2></Reveal>
            </div>
            <Reveal delay={0.12}><p className="lede">However rough your reference, it&rsquo;s enough for us to start. Pick whichever you have.</p></Reveal>
          </div>
          <Stagger className="pillars">
            {briefTypes.map((b) => (
              <StaggerItem key={b.h}>
                <div className="pillar">
                  <div className="pillar-ico"><Icon name={b.icon as "render"} /></div>
                  <h3>{b.h}</h3>
                  <p>{b.p}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Process */}
      <section className="sec">
        <div className="wrap">
          <Reveal><h2 className="h-lg" style={{ textAlign: "center", marginBottom: 64 }}>Measure. Design. <span className="serif-i">Fabricate.</span> Install.</h2></Reveal>
          <Stagger className="journey">
            {[
              { h: "Measure", p: "We confirm your ceiling height, drop, diameter and mounting so the piece fits its exact void." },
              { h: "Design", p: "We translate your reference into a buildable design and quote it firm, before you commit." },
              { h: "Fabricate", p: "The piece is built by hand in our workshop, from crystal and glass to metal and LED." },
              { h: "Install", p: "Our own crew hangs, aims and tunes it, and hands you one warranty up to 5 years." },
            ].map((s) => (
              <StaggerItem key={s.h}>
                <div className="j-step"><h3>{s.h}</h3><p>{s.p}</p></div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Brief form */}
      <section className="sec glow-top" id="brief">
        <div className="wrap-tight">
          <div className="sec-head" style={{ justifyContent: "center", textAlign: "center", flexDirection: "column", alignItems: "center" }}>
            <Reveal as="span"><span className="eyebrow center">Send your reference</span></Reveal>
            <Reveal delay={0.06}><h2 className="h-lg">Start your custom piece.</h2></Reveal>
            <Reveal delay={0.12}><p className="lede" style={{ textAlign: "center" }}>Tell us about the space and share your reference. The fastest way is WhatsApp, the picture arrives with your enquiry.</p></Reveal>
          </div>
          <Reveal delay={0.1}>
            <div className="form-card" style={{ textAlign: "center" }}>
              <p style={{ fontFamily: "var(--serif)", fontSize: 22, marginBottom: 10 }}>The picture is the brief.</p>
              <p className="lede" style={{ margin: "0 auto 26px", textAlign: "center" }}>
                Send your reference image straight to us on WhatsApp and we&rsquo;ll
                reply with feasibility and a timeline.
              </p>
              <div className="cta-ctas">
                <MagneticButton href={site.whatsapp} variant="gold" external>Send on WhatsApp <span className="arr">→</span></MagneticButton>
                <a className="btn btn-ghost" href={`mailto:${site.email}?subject=Custom%20piece%20enquiry`}>Email a Reference</a>
              </div>
              <p className="form-note" style={{ textAlign: "center" }}>Prefer to talk? Call {site.phone}, {site.hours}.</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="sec">
        <div className="wrap">
          <Reveal><h2 className="h-lg" style={{ textAlign: "center", marginBottom: 56 }}>Questions, answered</h2></Reveal>
          <div className="faq">
            {faqs.map((f, i) => (
              <Reveal key={f.q} delay={i * 0.04}>
                <details className="faq-item" name="cust-faq">
                  <summary>{f.q}</summary>
                  <p className="faq-a">{f.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-band">
        <div className="wrap-tight">
          <Reveal delay={0.06}><h2 className="h-lg">The light you pictured<br /><span className="serif-i">is buildable.</span></h2></Reveal>
          <Reveal delay={0.12}><p className="lede" style={{ textAlign: "center" }}>Send the reference. We&rsquo;ll tell you what it takes to hang it in your home.</p></Reveal>
          <Reveal delay={0.16}>
            <div className="cta-ctas">
              <MagneticButton href={site.whatsapp} variant="gold" external>Send a Reference <span className="arr">→</span></MagneticButton>
              <MagneticButton href="/consultation" variant="ghost">Book a Consultation</MagneticButton>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
