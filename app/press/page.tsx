import type { Metadata } from "next";
import Image from "next/image";
import { site, stores } from "@/lib/site";
import { breadcrumbSchema } from "@/lib/schema";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Reveal } from "@/components/motion/Reveal";

const TITLE = "Press & Media";
const DESC =
  "Logos, photography and company facts for journalists and press covering Elor Lighting and Celestial Lights. Direct contact, no forms.";
const PATH = "/press";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: PATH },
};

const facts = [
  { k: "Founded", v: "Elor Lighting / Celestial Lights, Kerala, India" },
  { k: "What we do", v: "Custom chandelier design, fabrication and installation, plus a ready-made lighting collection" },
  { k: "Locations", v: "3 experience stores — Kannur, Kochi, Kozhikode" },
  { k: "Coverage", v: "Pan-India delivery and installation" },
  { k: "Warranty", v: "Up to 5 years on fabricated pieces" },
];

const assets = [
  { name: "Logo mark", href: "/brand/logo-mark.svg", note: "Icon only, SVG" },
  { name: "Wordmark, light background", href: "/brand/logo-wordmark.svg", note: "SVG" },
  { name: "Wordmark, dark background", href: "/brand/logo-wordmark-dark.svg", note: "SVG" },
  { name: "Wordmark, gold", href: "/brand/logo-wordmark-gold.svg", note: "SVG" },
];

const pressSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: TITLE,
  description: DESC,
  url: `${site.domain}${PATH}`,
  mainEntity: {
    "@type": "Organization",
    name: site.name,
    url: site.domain,
    logo: `${site.domain}/brand/logo-mark.svg`,
    email: site.email,
    telephone: site.phone,
  },
};

export default function Press() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pressSchema) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema([{ name: "Press", path: PATH }])),
        }}
      />

      <section className="page-hero">
        <div className="wrap-tight">
          <Breadcrumbs crumbs={[{ name: "Press", path: PATH }]} />
          <Reveal as="span"><span className="eyebrow">Press &amp; Media</span></Reveal>
          <Reveal delay={0.06}>
            <h1 className="h-xl" style={{ marginTop: 18 }}>
              Everything a journalist<br /><span className="serif-i">needs, in one place.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="lede" style={{ marginTop: 22 }}>
              For interview requests, quotes or assets, email{" "}
              <a href={`mailto:${site.email}`} style={{ color: "var(--gold)" }}>{site.email}</a> — we
              respond within 24 hours. No forms.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap-tight">
          <Reveal><h2 className="h-lg">Company facts</h2></Reveal>
          <Reveal delay={0.12}>
            <div className="spec-wrap" style={{ marginTop: 26 }}>
              <table className="spec-table">
                <tbody>
                  {facts.map((f) => (
                    <tr key={f.k}>
                      <td>{f.k}</td>
                      <td>{f.v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="form-note" style={{ marginTop: 12 }}>
              One paragraph, copy-paste ready: &ldquo;{site.description}&rdquo;
            </p>
          </Reveal>
        </div>
      </section>

      <section className="sec glow-top">
        <div className="wrap-tight">
          <Reveal><h2 className="h-lg">Stores</h2></Reveal>
          <Reveal delay={0.06}>
            <p className="lede" style={{ marginTop: 16 }}>
              Available for on-site photography or interviews by appointment.
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="spec-wrap" style={{ marginTop: 26 }}>
              <table className="spec-table">
                <thead>
                  <tr><th>Store</th><th>Trading as</th><th>Address</th></tr>
                </thead>
                <tbody>
                  {stores.map((s) => (
                    <tr key={s.city}>
                      <td>{s.city}</td>
                      <td>{s.brand}</td>
                      <td>{s.address}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="sec">
        <div className="wrap-tight">
          <Reveal><h2 className="h-lg">Logo &amp; brand assets</h2></Reveal>
          <Reveal delay={0.06}>
            <p className="lede" style={{ marginTop: 16 }}>
              SVG downloads below. Need a raster format or a specific size?
              Email {site.email} and we&rsquo;ll send it same day.
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="spec-wrap" style={{ marginTop: 26 }}>
              <table className="spec-table">
                <thead>
                  <tr><th>Asset</th><th>Format</th><th>Download</th></tr>
                </thead>
                <tbody>
                  {assets.map((a) => (
                    <tr key={a.name}>
                      <td>{a.name}</td>
                      <td>{a.note}</td>
                      <td><a href={a.href} target="_blank" rel="noopener noreferrer">Open →</a></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="sec glow-top">
        <div className="wrap-tight">
          <Reveal><h2 className="h-lg">Photography</h2></Reveal>
          <Reveal delay={0.12}>
            <div className="collection-grid" style={{ marginTop: 26, display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 16 }}>
              {["/lifestyle/showroom-grand.jpg", "/lifestyle/store-wall.jpg", "/work/w3-showroom.jpg", "/collections/asgard.jpg"].map((src) => (
                <div key={src} className="frame" style={{ position: "relative", aspectRatio: "4/3" }}>
                  <Image src={src} alt="Elor Lighting press photography" fill sizes="(max-width: 640px) 100vw, 25vw" style={{ objectFit: "cover" }} />
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.18}>
            <p className="form-note" style={{ marginTop: 16 }}>
              Full-resolution originals available on request — {site.email}.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
