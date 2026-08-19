import Image from "next/image";
import Link from "next/link";
import { site, stores } from "@/lib/site";
import { testimonials } from "@/lib/testimonials";
import { breadcrumbSchema } from "@/lib/schema";
import { storeCities, type StoreCity } from "@/lib/storeCities";
import { Reveal } from "@/components/motion/Reveal";
import { MagneticButton } from "@/components/motion/MagneticButton";

/**
 * Shared template for the three store pages (/stores/kannur|kochi|kozhikode).
 *
 * These are the ONLY pages that carry `LightingStore` schema — the estate index
 * at /stores lists them as an ItemList instead, so each physical store maps to
 * exactly one schema entity at one canonical URL. Service-area cities where we
 * have no premises get `Service` + `areaServed` and never a LocalBusiness type.
 *
 * All copy and data are per-city (lib/storeCities.ts, lib/site.ts's `stores`,
 * lib/testimonials.ts) — this component only supplies the structure.
 */
export function StoreCityPage({ city }: { city: StoreCity }) {
  const copy = storeCities[city];
  const store = stores.find((s) => s.city === city)!;
  const testimonial = testimonials.find((t) => t.city === city)!;
  const path = `/stores/${city.toLowerCase()}`;
  const others = stores.filter((s) => s.city !== city);

  const storeSchema = {
    "@context": "https://schema.org",
    "@type": "LightingStore",
    name: `${store.brand}, ${store.city}`,
    description: copy.metaDescription,
    image: `${site.domain}${copy.heroImage}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: store.address,
      addressLocality: store.city,
      addressRegion: "Kerala",
      addressCountry: "IN",
    },
    telephone: store.phone,
    email: site.email,
    openingHours: "Mo-Sa 09:30-20:30",
    url: `${site.domain}${path}`,
    hasMap: store.maps,
    parentOrganization: { "@type": "Organization", name: site.name, url: site.domain },
    geo: { "@type": "GeoCoordinates", latitude: store.geo.lat, longitude: store.geo.lng },
    areaServed: { "@type": "City", name: store.city },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: copy.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(storeSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Stores", path: "/stores" },
              { name: city, path },
            ])
          ),
        }}
      />

      <section className="page-hero">
        <div className="wrap">
          <div className="split" style={{ alignItems: "center" }}>
            <div>
              <Reveal as="span"><span className="eyebrow">{store.brand}, {city}</span></Reveal>
              <Reveal delay={0.06}>
                <h1 className="h-xl" style={{ marginTop: 18 }}>{copy.heroHeadline}</h1>
              </Reveal>
              <Reveal delay={0.12}>
                <p className="lede" style={{ marginTop: 22 }}>{copy.heroLede}</p>
              </Reveal>
              <Reveal delay={0.18}>
                <div className="cta-ctas" style={{ justifyContent: "flex-start", marginTop: 30 }}>
                  <MagneticButton href="/consultation" variant="gold">Book a Consultation <span className="arr">→</span></MagneticButton>
                  <MagneticButton href={site.whatsapp} variant="ghost" external>WhatsApp Us</MagneticButton>
                </div>
              </Reveal>
            </div>
            <Reveal delay={0.1} className="split-media frame">
              <Image
                src={copy.heroImage}
                alt={`Custom chandelier lighting in ${city}`}
                fill
                sizes="(max-width: 1020px) 100vw, 50vw"
                priority
                style={{ objectFit: "cover" }}
              />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap-tight">
          <Reveal><p className="lede">{copy.intro}</p></Reveal>
        </div>
      </section>

      <section className="sec glow-top">
        <div className="wrap">
          <div className="sec-head">
            <div className="stack-sm">
              <Reveal as="span"><span className="eyebrow">Why {city} chooses us</span></Reveal>
              <Reveal delay={0.06}><h2 className="h-lg">What you get<br />at the {city} store.</h2></Reveal>
            </div>
          </div>
          <Reveal delay={0.12}>
            <ul className="check-list">
              {copy.whyUs.map((item) => (
                <li key={item}><span className="tick">✓</span>{item}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="sec-head">
            <div className="stack-sm">
              <Reveal as="span"><span className="eyebrow">Visit us</span></Reveal>
              <Reveal delay={0.06}><h2 className="h-lg">The {city} store.</h2></Reveal>
            </div>
          </div>
          <Reveal delay={0.12}>
            <div className="store-card" style={{ maxWidth: 420 }}>
              <div className="store-city">{store.city}</div>
              <div className="store-brand">{store.brand}</div>
              <p><span className="store-k">Address</span>{store.address}</p>
              <p><span className="store-k">Hours</span>{store.hours}</p>
              <p><span className="store-k">Phone</span><a href={store.phoneHref} style={{ color: "var(--text-dim)" }}>{store.phone}</a></p>
              <a className="store-link" href={store.maps} target="_blank" rel="noopener noreferrer">Get directions →</a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="sec">
        <div className="wrap-tight">
          <Reveal>
            <div className="quote-card">
              <span className="quote-mark">&ldquo;</span>
              <blockquote>{testimonial.quote}</blockquote>
              <div className="quote-who">
                <span className="quote-av">{testimonial.initial}</span>
                <div>
                  <div className="quote-name">{testimonial.name}</div>
                  <div className="quote-role">{testimonial.role}</div>
                </div>
              </div>
              <div className="stars">★★★★★</div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <Reveal><h2 className="h-lg" style={{ textAlign: "center", marginBottom: 56 }}>Questions, answered</h2></Reveal>
          <div className="faq">
            {copy.faqs.map((f, i) => (
              <Reveal key={f.q} delay={i * 0.04}>
                <details className="faq-item" name={`${city.toLowerCase()}-store-faq`}>
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
          <Reveal><h2 className="h-lg">Ready to plan your {city} space?</h2></Reveal>
          <Reveal delay={0.06}>
            <p className="lede" style={{ margin: "16px auto 0" }}>
              See real ready-collection pricing first, or go straight to a
              free consultation.
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="cta-ctas" style={{ marginTop: 30 }}>
              <MagneticButton href="/consultation" variant="gold">Book a Consultation <span className="arr">→</span></MagneticButton>
              <MagneticButton href="/guides/chandelier-pricing-guide" variant="ghost">See Pricing Guide</MagneticButton>
            </div>
          </Reveal>
          {/* Sibling-store links: keeps each store page one click from the other
              two and from the estate index, so no store page is a dead end. */}
          <Reveal delay={0.18}>
            <p className="fine" style={{ marginTop: 34 }}>
              Not in {city}? Visit the{" "}
              {others.map((s, i) => (
                <span key={s.city}>
                  <Link href={`/stores/${s.city.toLowerCase()}`}>{s.city} store</Link>
                  {i === 0 ? " or the " : ""}
                </span>
              ))}
              , see <Link href="/stores">all three</Link>, or book a remote
              consultation from anywhere in India.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
