import type { Metadata } from "next";
import Image from "next/image";
import { site } from "@/lib/site";
import { breadcrumbSchema } from "@/lib/schema";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { ConsultForm } from "@/components/sections/ConsultForm";
import { Icon, type IconName } from "@/components/ui/Icon";

export const metadata: Metadata = {
  title: "Lighting Consultation · Design, Supply & Installation",
  description:
    "Book a free lighting consultation with Elor. A designer plans your whole space fixture-by-fixture; we supply from our own range and install it ourselves, with one warranty. Kerala & pan-India.",
  alternates: { canonical: "/consultation" },
};

const faqs = [
  // Also serialized into FAQPage schema below — keep questions/answers in sync
  // with what's actually asked on the page.
  { q: "Is the consultation really free?", a: "Yes. The first session, at your site, in any of our stores, or over video, is free and carries no obligation. You only pay if you choose to go ahead." },
  { q: "Do I have to buy everything from you?", a: "No, but there's a real advantage to it: when we supply and install, one team owns quality, pricing and the warranty. No blame games between shop, designer and electrician." },
  { q: "Can you work with my architect or interior designer?", a: "Absolutely. We work alongside architects and designers constantly, reading drawings, improving them, and coordinating on site so the scheme lands the way it was designed." },
  { q: "Do you work outside Kerala?", a: "Yes. We deliver pan-India and run remote consultations over video with the same designers you'd meet in-store. For larger projects we travel to site." },
];

const audiences = [
  { icon: "spark", h: "Homeowners", p: "A room-by-room plan that makes your home feel considered, warm and expensive, without over-lighting or guesswork." },
  { icon: "ruler", h: "Architects & designers", p: "A supply-and-install partner who reads your drawings, protects the intent, and shows up on site on schedule." },
  { icon: "shield", h: "Commercial owners", p: "Lighting tuned to keep guests longer and make product look its best, delivered on spec with project pricing." },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Lighting Design Consultation",
  serviceType: "Interior lighting design consultation",
  provider: { "@type": "Organization", name: site.name, url: site.domain },
  areaServed: "IN",
  description:
    "A free lighting consultation covering the whole space fixture-by-fixture, with supply from Elor's own range and installation by Elor's own crew, under one warranty.",
  url: `${site.domain}/consultation`,
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

export default function Consultation() {
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema([{ name: "Consultation", path: "/consultation" }])),
        }}
      />

      <section className="page-hero">
        <div className="wrap">
          <Reveal as="span"><span className="eyebrow">Consultation & implementation</span></Reveal>
          <Reveal delay={0.06}>
            <h1 className="h-xl" style={{ marginTop: 18, maxWidth: "16ch" }}>
              You dream it. We light it. <span className="serif-i">End to end.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="lede">
              One team plans, supplies and installs the lighting for your whole
              space, then hands you a single warranty for all of it. Book a free
              first session below.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Method */}
      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <Stagger className="journey">
            {[
              { h: "Consult", p: "Free first session at your site, in a store, or on video. We listen before we recommend." },
              { h: "Design", p: "A fixture-by-fixture plan: positions, colour temperature, dimming zones and a transparent estimate." },
              { h: "Supply", p: "From our own range, see it glowing in-store before you commit. Delivered pan-India." },
              { h: "Install", p: "Our crew installs, aims and tunes every light. One point of contact, one warranty." },
            ].map((s) => (
              <StaggerItem key={s.h}>
                <div className="j-step"><h3>{s.h}</h3><p>{s.p}</p></div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Audiences */}
      <section className="sec glow-top">
        <div className="wrap">
          <div className="sec-head">
            <div className="stack-sm">
              <Reveal as="span"><span className="eyebrow">Who we work with</span></Reveal>
              <Reveal delay={0.06}><h2 className="h-lg">Built for how you<br />actually decide.</h2></Reveal>
            </div>
          </div>
          <Stagger className="pillars">
            {audiences.map((a) => (
              <StaggerItem key={a.h}>
                <div className="pillar">
                  <div className="pillar-ico"><Icon name={a.icon as IconName} /></div>
                  <h3>{a.h}</h3>
                  <p>{a.p}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Split with photo + form */}
      <section className="sec" id="form">
        <div className="wrap">
          <div className="split">
            <div>
              <Reveal as="span"><span className="eyebrow">Book your session</span></Reveal>
              <Reveal delay={0.06}><h2 className="h-lg" style={{ marginTop: 18 }}>Tell us about<br />your space.</h2></Reveal>
              <Reveal delay={0.12}>
                <p className="lede" style={{ marginTop: 20 }}>
                  A few details is all we need to prepare. The fastest route is
                  WhatsApp, send a photo or floor plan and it arrives with your
                  enquiry.
                </p>
              </Reveal>
              <Reveal delay={0.16} className="split-media frame" >
                <Image src="/lifestyle/showroom-grand.jpg" alt="A grand chandelier lit inside the Celestial Lights showroom" fill sizes="(max-width: 1020px) 100vw, 50vw" style={{ objectFit: "cover" }} />
              </Reveal>
            </div>
            <Reveal delay={0.1}>
              <ConsultForm />
            </Reveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="sec glow-top">
        <div className="wrap">
          <Reveal><h2 className="h-lg" style={{ textAlign: "center", marginBottom: 56 }}>Questions, answered</h2></Reveal>
          <div className="faq">
            {faqs.map((f, i) => (
              <Reveal key={f.q} delay={i * 0.04}>
                <details className="faq-item" name="consult-faq">
                  <summary>{f.q}</summary>
                  <p className="faq-a">{f.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
