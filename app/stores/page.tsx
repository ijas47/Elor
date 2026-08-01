import type { Metadata } from "next";
import Image from "next/image";
import { site, stores } from "@/lib/site";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { MagneticButton } from "@/components/motion/MagneticButton";

export const metadata: Metadata = {
  title: "Our Stores — Celestial Lights in Kannur, Kochi & Kozhikode",
  description:
    "Visit a Celestial Lights experience store in Kannur, Kochi or Kozhikode to see every Elor fixture lit before you buy. Pan-India delivery and remote consultation also available.",
  alternates: { canonical: "/stores" },
};

// LocalBusiness schema per store — strong signal for local + AI search.
const localBusinessSchema = stores.map((s) => ({
  "@context": "https://schema.org",
  "@type": "LightingStore",
  name: `${site.name} — ${s.brand}, ${s.city}`,
  image: `${site.domain}/lifestyle/store-wall.jpg`,
  address: {
    "@type": "PostalAddress",
    streetAddress: s.address,
    addressLocality: s.city,
    addressRegion: "Kerala",
    addressCountry: "IN",
  },
  telephone: s.phone,
  openingHours: "Mo-Sa 09:30-20:30",
  url: `${site.domain}/stores`,
  parentOrganization: { "@type": "Organization", name: site.name },
}));

export default function Stores() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      <section className="page-hero">
        <div className="wrap">
          <div className="split" style={{ alignItems: "center" }}>
            <div>
              <Reveal as="span"><span className="eyebrow">Celestial Lights stores</span></Reveal>
              <Reveal delay={0.06}>
                <h1 className="h-xl" style={{ marginTop: 18 }}>
                  See the glow<br /><span className="serif-i">before you buy.</span>
                </h1>
              </Reveal>
              <Reveal delay={0.12}>
                <p className="lede" style={{ marginTop: 22 }}>
                  Photos lie about light. Our three experience stores across Kerala
                  let you stand under every fixture, compare warm against cool, and
                  talk to people who light rooms for a living.
                </p>
              </Reveal>
              <Reveal delay={0.18}>
                <div className="cta-ctas" style={{ justifyContent: "flex-start", marginTop: 30 }}>
                  <MagneticButton href="/consultation" variant="gold">Book a Visit <span className="arr">→</span></MagneticButton>
                  <MagneticButton href={site.shopUrl} variant="ghost" external>Shop {site.shopLabel}</MagneticButton>
                </div>
              </Reveal>
            </div>
            <Reveal delay={0.1} className="split-media frame">
              <Image src="/lifestyle/store-wall.jpg" alt="Inside a Celestial Lights store, a wall of lit fixtures" fill sizes="(max-width: 1020px) 100vw, 50vw" priority style={{ objectFit: "cover" }} />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <Stagger className="stores-grid">
            {stores.map((s) => (
              <StaggerItem key={s.city}>
                <div className="store-card">
                  <div className="store-city">{s.city}</div>
                  <div className="store-brand">{s.brand}</div>
                  <p><span className="store-k">Address</span>{s.address}</p>
                  <p><span className="store-k">Hours</span>{s.hours}</p>
                  <p><span className="store-k">Phone</span><a href={s.phoneHref} style={{ color: "var(--text-dim)" }}>{s.phone}</a></p>
                  <a className="store-link" href={s.maps} target="_blank" rel="noopener noreferrer">Get directions →</a>
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal delay={0.1}>
            <div className="online-banner" style={{ marginTop: 24 }}>
              <div>
                <h3>The fourth store is wherever you are.</h3>
                <p>Not in Kerala? Browse the full collection at {site.shopLabel} with pan-India delivery, and book a remote consultation over video with the same designers you&rsquo;d meet in-store.</p>
              </div>
              <a className="btn btn-gold" href={site.shopUrl} target="_blank" rel="noopener noreferrer">Shop Online <span className="arr">→</span></a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="cta-band">
        <div className="wrap-tight">
          <Reveal as="span"><span className="eyebrow center">Come stand under it</span></Reveal>
          <Reveal delay={0.06}><h2 className="h-lg" style={{ marginTop: 18 }}>Book a store visit, or<br />bring us <span className="serif-i">to your site.</span></h2></Reveal>
          <Reveal delay={0.16}>
            <div className="cta-ctas">
              <MagneticButton href="/consultation" variant="gold">Book a Consultation <span className="arr">→</span></MagneticButton>
              <MagneticButton href={site.whatsapp} variant="ghost" external>WhatsApp Us</MagneticButton>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
