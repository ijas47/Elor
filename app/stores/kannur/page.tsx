import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { site, stores } from "@/lib/site";
import { elorContact } from "@/lib/brands";
import { breadcrumbSchema } from "@/lib/schema";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Reveal } from "@/components/motion/Reveal";
import { MagneticButton } from "@/components/motion/MagneticButton";

const TITLE = "Celestial Lights Kannur";
const DESC =
  "Celestial Lights Kannur at Philips Building, 670005. Buy the ready collection on the floor. Design is free with purchase from Celestial. Walk in or book.";
const PATH = "/stores/kannur";
const CELESTIAL = "https://www.celestiallights.in";
const IMAGE = "/lifestyle/hero-4.jpg";
const IMAGE_ALT = "Custom chandelier lighting in Kannur";
const store = stores.find((s) => s.city === "Kannur")!;
const others = stores.filter((s) => s.city !== "Kannur");

const faqs = [
  {
    q: "Can I just walk in, or do I need an appointment?",
    a: "Walk-ins are welcome during store hours. Booking a consultation ahead means we can prepare mood boards and a cost range before you arrive.",
  },
  {
    q: "Can I buy from the floor?",
    a: "Yes. The store carries the Celestial Lights ready collection to see and buy on the spot, and also takes custom briefs for anything you cannot find on the floor.",
  },
  {
    q: "Is design free?",
    a: "Design is free with purchase from Celestial. Elor does the design work. Book a consultation to start.",
  },
  {
    q: "Do you only serve Kannur, or the wider district?",
    a: "The Kannur store serves the whole district and nearby towns for consultation and installation support. We install custom lights and give installation support for everything else. We deliver pan-India from all three stores for anything ordered online or by phone.",
  },
  {
    q: "How long does a custom piece take from the Kannur store?",
    a: "Most custom pieces are designed, fabricated and installed within 3 to 6 weeks of your consultation.",
  },
];

const guideLinks = [
  { href: "/guides/home-lighting-design", label: "Home lighting design" },
  { href: "/guides/chandelier-for-living-room", label: "Living room chandeliers" },
  { href: "/guides/ceiling-and-lighting-design", label: "False ceiling lighting design" },
  { href: "/guides/bedroom-lighting-design", label: "Bedroom lighting design" },
  { href: "/guides/kitchen-lighting-design", label: "Kitchen lighting design" },
  { href: "/guides/staircase-lighting-design", label: "Staircase lighting design" },
  { href: "/guides/how-to-choose-a-custom-chandelier", label: "How to choose a custom chandelier" },
  { href: "/guides", label: "All lighting guides" },
];

const storeSchema = {
  "@context": "https://schema.org",
  "@type": "LightingStore",
  "@id": `${site.domain}${PATH}#store`,
  name: "Celestial Lights, Kannur",
  description: DESC,
  image: `${site.domain}${IMAGE}`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Philips Building",
    addressLocality: "Kannur",
    addressRegion: "Kerala",
    postalCode: "670005",
    addressCountry: "IN",
  },
  telephone: store.phone,
  email: site.email,
  openingHours: "Mo-Sa 09:30-20:30",
  url: `${site.domain}${PATH}`,
  hasMap: store.maps,
  parentOrganization: { "@id": `${site.domain}/#organization` },
  areaServed: { "@type": "City", name: "Kannur" },
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

export default function KannurStorePage() {
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
              { name: "Kannur", path: PATH },
            ])
          ),
        }}
      />

      <section className="page-hero">
        <div className="wrap">
          <Breadcrumbs crumbs={[{ name: "Stores", path: "/stores" }, { name: "Kannur", path: PATH }]} />
          <div className="split" style={{ alignItems: "center" }}>
            <div>
              <Reveal as="span">
                <span className="eyebrow">{store.brand}, Kannur</span>
              </Reveal>
              <Reveal delay={0.06}>
                <h1 className="h-xl" style={{ marginTop: 18 }}>
                  Celestial Lights in Kannur, with Elor design on site
                </h1>
              </Reveal>
              <Reveal delay={0.12}>
                <ul className="check-list" style={{ marginTop: 22 }}>
                  <li>
                    <span className="tick">✓</span>
                    This is the{" "}
                    <a href={CELESTIAL} target="_blank" rel="noopener noreferrer">Celestial Lights</a>
                    {" "}store and experience centre in Kannur, at Philips Building, 670005.
                  </li>
                  <li>
                    <span className="tick">✓</span>
                    You can walk in and buy from the ready collection on the floor.
                  </li>
                  <li>
                    <span className="tick">✓</span>
                    Design is free with purchase from Celestial. Elor does that design work.
                  </li>
                </ul>
              </Reveal>
              <Reveal delay={0.16}>
                <p className="lede" style={{ marginTop: 22 }}>
                  Celestial Lights in Kannur is the shop and experience centre where you can see and buy the ready collection. It is at Philips Building, 670005, open Monday to Saturday, 9:30 AM to 8:30 PM. You can walk in, or book ahead. Elor handles the lighting design. Design is free with purchase from Celestial.
                </p>
              </Reveal>
              <Reveal delay={0.18}>
                <div className="cta-ctas" style={{ justifyContent: "flex-start", marginTop: 30 }}>
                  <MagneticButton href="/consultation" variant="gold">
                    Book a Consultation <span className="arr">→</span>
                  </MagneticButton>
                  <MagneticButton href={elorContact.whatsappHref} variant="ghost" external>
                    WhatsApp Us
                  </MagneticButton>
                </div>
              </Reveal>
            </div>
            <Reveal delay={0.1} className="split-media frame">
              <Image
                src={IMAGE}
                alt={IMAGE_ALT}
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
          <Reveal>
            <p className="lede">
              The ready fittings are on the floor. A custom piece starts from a photo, a render, or a sketch, and we measure the ceiling before we build. Most custom pieces take 3 to 6 weeks after the brief is agreed.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="sec glow-top">
        <div className="wrap">
          <div className="sec-head">
            <div className="stack-sm">
              <Reveal as="span">
                <span className="eyebrow">Visit us</span>
              </Reveal>
              <Reveal delay={0.06}>
                <h2 className="h-lg">Visit the Kannur store</h2>
              </Reveal>
            </div>
          </div>
          <Reveal delay={0.12}>
            <div className="store-card" style={{ maxWidth: 420 }}>
              <div className="store-city">{store.city}</div>
              <div className="store-brand">{store.brand}</div>
              <p>
                <span className="store-k">Address</span>
                {store.address}
              </p>
              <p>
                <span className="store-k">Hours</span>
                {store.hours}
              </p>
              <p>
                <span className="store-k">Phone</span>
                <a href={store.phoneHref} style={{ color: "var(--text-dim)" }}>
                  {store.phone}
                </a>
              </p>
              <a className="store-link" href={store.maps} target="_blank" rel="noopener noreferrer">
                Get directions →
              </a>
            </div>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="form-note" style={{ marginTop: 16 }}>
              The map link is a search for Philips Building, Kannur, 670005. It is not a claimed street pin.
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <p className="lede" style={{ marginTop: 22 }}>
              Walk-ins are welcome during store hours. Booking a consultation ahead means we can prepare mood boards and a cost range before you arrive.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="sec">
        <div className="wrap-tight">
          <Reveal>
            <h2 className="h-lg">Buy lights here</h2>
          </Reveal>
          <Reveal delay={0.06}>
            <p className="lede" style={{ marginTop: 16 }}>
              This is a shop, not only a design studio. The ready collection is on the showroom floor, to see and to take home.{" "}
              <a href={CELESTIAL} target="_blank" rel="noopener noreferrer">Celestial Lights</a>
              {" "}is where those ready pieces are sold. There is no stock list on this page; what is on the floor is what you can buy today.
            </p>
          </Reveal>
          <Reveal delay={0.12}>
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
            <h2 className="h-lg">Free design with purchase from Celestial</h2>
          </Reveal>
          <Reveal delay={0.06}>
            <p className="lede" style={{ marginTop: 16 }}>
              Custom chandeliers start from a photo, a render or a sketch, and are made in crystal, glass, metal or acrylic. Elor writes the plan and makes the custom piece. Design is free with purchase from Celestial. Start with a{" "}
              <Link href="/consultation" style={{ color: "var(--gold)" }}>
                consultation
              </Link>
              , or send a picture on{" "}
              <Link href="/customisation" style={{ color: "var(--gold)" }}>
                customisation
              </Link>
              .
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="lede" style={{ marginTop: 16 }}>
              We install custom lights and give installation support for everything else, with warranty up to 5 years.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="sec">
        <div className="wrap-tight">
          <Reveal>
            <h2 className="h-lg">How to find us</h2>
          </Reveal>
          <Reveal delay={0.06}>
            <p className="lede" style={{ marginTop: 16 }}>
              The store is at Philips Building, Kannur, Kerala 670005. Use the directions link above.
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="lede" style={{ marginTop: 16 }}>
              Not in Kannur? Visit the{" "}
              {others.map((s, i) => (
                <span key={s.city}>
                  <Link href={`/stores/${s.city.toLowerCase()}`} style={{ color: "var(--gold)" }}>
                    {s.city} store
                  </Link>
                  {i === 0 ? " or the " : ""}
                </span>
              ))}
              , or{" "}
              <Link href="/consultation" style={{ color: "var(--gold)" }}>
                book a remote consultation
              </Link>
              {" "}from anywhere in India.
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
                <details className="faq-item" name="kannur-store-faq">
                  <summary>{f.q}</summary>
                  <p className="faq-a">
                    {f.q === "Is design free?" ? (
                      <>
                        Design is free with purchase from Celestial. Elor does the design work.{" "}
                        <Link href="/consultation" style={{ color: "var(--gold)" }}>
                          Book a consultation
                        </Link>
                        {" "}to start.
                      </>
                    ) : (
                      f.a
                    )}
                  </p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap-tight">
          <h2 className="h-lg">Lighting guides</h2>
          <p className="lede" style={{ marginTop: 16 }}>
            {guideLinks.map((item, i) => (
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
            <h2 className="h-lg">Ready to plan your Kannur space?</h2>
          </Reveal>
          <Reveal delay={0.06}>
            <p className="lede" style={{ margin: "16px auto 0" }}>
              See what a custom piece costs in the{" "}
              <Link href="/guides/chandelier-pricing-guide" style={{ color: "var(--gold)" }}>
                pricing guide
              </Link>
              , or{" "}
              <Link href="/consultation" style={{ color: "var(--gold)" }}>
                book a consultation
              </Link>
              . Design is free with purchase from Celestial.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
