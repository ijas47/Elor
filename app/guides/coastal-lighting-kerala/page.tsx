import Link from "next/link";
import type { Metadata } from "next";
import { site } from "@/lib/site";
import { guideDates } from "@/lib/guides";
import { breadcrumbSchema } from "@/lib/schema";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { RelatedGuides } from "@/components/ui/RelatedGuides";

const TITLE = "Coastal & Humid Climate Lighting: What Survives in Kerala";
const META_TITLE = "Coastal & Humid Climate Lighting in Kerala";
const DESC =
  "Salt air pits untreated brass and iron within two seasons. Which finishes last near the Kerala coast, what IP rating you need, and what fails first.";
const PATH = "/guides/coastal-lighting-kerala";
const CELESTIAL = "https://www.celestiallights.in";
const { updated: UPDATED, modified: MODIFIED } = guideDates(PATH);

export const metadata: Metadata = {
  title: META_TITLE,
  description: DESC,
  alternates: { canonical: PATH },
};

const zones = [
  {
    h: "Within about 500 m of open sea",
    p: "This is the harshest band. Salt spray hits the building and is carried inside by the air. Untreated brass, mild steel and iron will pit within a couple of seasons, no matter how they left the factory. Specify marine-grade stainless, crystal, glass or acrylic, and check every screw and chain link as well as the body you can see.",
  },
  {
    h: "Roughly 500 m to 5 km inland",
    p: "Salt air still reaches this band on the monsoon wind, but without direct spray. Powder-coated steel over a proper primer holds well, and lacquered brass survives indoors if it is not in the path of a sea-facing window. This covers most of Kochi, Kozhikode city and coastal Kannur.",
  },
  {
    h: "Inland Kerala: humidity without salt",
    p: "Thrissur, Palakkad, Kottayam and the hill districts swap salt for long spells of high humidity and, higher up, real condensation. Corrosion is slower, and material choice is more forgiving. What matters here is sealing and ventilation, because moisture that forms inside a housing has nowhere to go.",
  },
  {
    h: "Bathrooms, balconies and open courtyards, anywhere",
    p: "These small climates behave like the coast, wherever the building is. A nalukettu courtyard is open to rain, and a Kerala bathroom stays very damp for months. These need an IP rating and sealed fittings even in Palakkad.",
  },
];

const faqs = [
  {
    q: "Which chandelier materials last near the sea in Kerala?",
    a: "Crystal, glass, acrylic, marine-grade stainless steel, and properly powder-coated aluminium or steel. Avoid untreated brass, iron and mild steel within a few kilometres of open sea. Salt air pits them in about two seasons, starting at the fixings and joints, not on the surface you see.",
  },
  {
    q: "Does brass work at all in coastal Kerala?",
    a: "Lacquered brass works indoors, away from sea-facing windows and outside the first 500 m band. Unlacquered brass will change colour quickly, which some people want and most do not. Solid brass fails more slowly than brass plating, which lifts and flakes once the plating is broken.",
  },
  {
    q: "What IP rating do I need for a Kerala balcony or courtyard?",
    a: "IP44 at minimum for a covered balcony, IP65 for anything open to driven rain or an open courtyard. A nalukettu courtyard counts as fully exposed. Indoor bathrooms need IP44 near the shower because Kerala bathrooms stay very damp for months of the year.",
  },
  {
    q: "What actually fails first on a coastal fixture?",
    a: "The fixings, almost always: screws, chain links, suspension wires, and the hidden fasteners. A fitting can have a perfect marine-grade body and still fail if it was put together with plated mild-steel screws. Stainless fixings throughout cost very little and double practical life.",
  },
  {
    q: "How often should coastal fixtures be cleaned?",
    a: "Two to three times a year, and rinse rather than just dust. Salt deposits hold water against the surface between cleanings. That habit extends the life of a coastal fitting more than a finish upgrade.",
  },
  {
    q: "Does the monsoon affect fixtures indoors?",
    a: "Yes. Months of humidity can leave water inside housings and speed up corrosion at electrical contacts. Fittings that are ventilated or truly sealed both work. The failure is a housing that is almost sealed and traps moisture with no way out.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: TITLE,
  description: DESC,
  image: `${site.domain}/spaces/outdoor.jpg`,
  author: { "@type": "Organization", name: site.name, url: site.domain },
  publisher: {
    "@type": "Organization",
    name: site.name,
    logo: { "@type": "ImageObject", url: `${site.domain}/brand/logo-mark.svg` },
  },
  datePublished: "2026-08-20",
  dateModified: MODIFIED,
  mainEntityOfPage: `${site.domain}${PATH}`,
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

export default function CoastalLightingGuide() {
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
              { name: "Coastal & Humid Climate Lighting", path: PATH },
            ])
          ),
        }}
      />

      <section className="page-hero">
        <div className="wrap-tight">
          <Breadcrumbs crumbs={[{ name: "Guides", path: "/guides" }, { name: "Coastal & Humid Climate Lighting", path: PATH }]} />
          <Reveal as="span"><span className="eyebrow">Technical · Updated {UPDATED}</span></Reveal>
          <Reveal delay={0.06}>
            <h1 className="h-xl" style={{ marginTop: 18 }}>
              What survives<br /><span className="serif-i">on the Kerala coast.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="lede" style={{ marginTop: 22 }}>
              Kerala has about 590 km of coast, and most of its cities sit on it.
              Salt air pits untreated brass, iron and mild steel in about two
              seasons. It starts at the screws and joints, not on the surface
              you see. Crystal, glass, acrylic and marine-grade stainless are
              not affected.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap-tight">
          <Reveal><h2 className="h-lg">Material by distance from the sea</h2></Reveal>
          <Reveal delay={0.12}>
            <div className="spec-wrap">
              <table className="spec-table">
                <thead>
                  <tr>
                    <th>Material</th>
                    <th>Under 500 m</th>
                    <th>500 m to 5 km</th>
                    <th>Inland</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Crystal</td><td>Excellent</td><td>Excellent</td><td>Excellent</td></tr>
                  <tr><td>Glass</td><td>Excellent</td><td>Excellent</td><td>Excellent</td></tr>
                  <tr><td>Acrylic</td><td>Excellent</td><td>Excellent</td><td>Excellent</td></tr>
                  <tr><td>Marine-grade stainless (316)</td><td>Excellent</td><td>Excellent</td><td>Excellent</td></tr>
                  <tr><td>Standard stainless (304)</td><td className="warn">Tea-staining likely</td><td>Good</td><td>Excellent</td></tr>
                  <tr><td>Powder-coated aluminium</td><td>Good, if primed</td><td>Good</td><td>Excellent</td></tr>
                  <tr><td>Lacquered brass</td><td className="warn">Indoors only</td><td>Good indoors</td><td>Excellent</td></tr>
                  <tr><td>Plated brass</td><td className="warn">Avoid</td><td className="warn">Indoors only</td><td>Good</td></tr>
                  <tr><td>Untreated iron / mild steel</td><td className="warn">Avoid</td><td className="warn">Avoid</td><td>Acceptable indoors</td></tr>
                </tbody>
              </table>
            </div>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="form-note" style={{ marginTop: 12 }}>
              &ldquo;Tea-staining&rdquo; is the brown surface mark that 304
              stainless gets in marine air. It is cosmetic rather than
              structural, but it does not clean off easily.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="sec glow-top">
        <div className="wrap-tight">
          <Reveal><h2 className="h-lg">Four zones, four different answers</h2></Reveal>
        </div>
        <div className="wrap">
          <Stagger className="register">
            {zones.map((z) => (
              <StaggerItem key={z.h} className="register-row">
                <h3>{z.h}</h3>
                <p>{z.p}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="sec">
        <div className="wrap-tight">
          <Reveal><h2 className="h-lg">IP ratings, plainly</h2></Reveal>
          <Reveal delay={0.06}>
            <p className="lede" style={{ marginTop: 16 }}>
              The first digit is dust, the second is water. For Kerala, the
              second one usually decides anything. Every rating, and what to
              specify outside, is in the{" "}
              <Link href="/guides/ip-rating-for-outdoor-lights" style={{ color: "var(--gold)" }}>IP rating guide</Link>
              . This page stays the salt and humidity guide; that one stays the codes.
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="spec-wrap">
              <table className="spec-table">
                <thead>
                  <tr>
                    <th>Rating</th>
                    <th>Protects against</th>
                    <th>Use it for</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>IP20</td><td>Nothing wet</td><td>Interior rooms, away from bathrooms</td></tr>
                  <tr><td>IP44</td><td>Splashing from any direction</td><td>Covered balconies, bathrooms outside the shower zone</td></tr>
                  <tr><td>IP65</td><td>Low-pressure jets, driven rain</td><td>Open courtyards, facades, exposed terraces</td></tr>
                  <tr><td>IP66/67</td><td>Heavy jets or immersion</td><td>Poolside, water features, ground-recessed</td></tr>
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="sec">
        <div className="wrap-tight">
          <Reveal><h2 className="h-lg">What we specify differently on the coast</h2></Reveal>
          <Reveal delay={0.12}>
            <ul className="check-list" style={{ marginTop: 28 }}>
              <li><span className="tick">✓</span>Stainless fixings throughout, including screws, chain, suspension wire and internal fasteners as well as the visible body. This is the single highest-value change and it costs very little.</li>
              <li><span className="tick">✓</span>Sealed or genuinely ventilated housings, never the almost-sealed middle that traps monsoon condensation with no way out.</li>
              <li><span className="tick">✓</span>Powder coat over a proper primer, not over bare metal, and touched up at any drilled or cut edge during installation.</li>
              <li><span className="tick">✓</span>Crystal and glass wherever the client wants the look of metal but the building is in the first 500 m band.</li>
              <li><span className="tick">✓</span>A rinse-and-dry cleaning routine handed over with the fitting, because salt deposits hold moisture against the surface between cleanings.</li>
            </ul>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="lede" style={{ marginTop: 22 }}>
              Ready fittings are at{" "}
              <a href={CELESTIAL} target="_blank" rel="noopener noreferrer">Celestial Lights</a>
              . Ask for the finish and the IP rating with the photo. Design is free with purchase from Celestial.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <Reveal><h2 className="h-lg" style={{ textAlign: "center", marginBottom: 56 }}>Questions, answered</h2></Reveal>
          <div className="faq">
            {faqs.map((f, i) => (
              <Reveal key={f.q} delay={i * 0.04}>
                <details className="faq-item" name="coastal-faq">
                  <summary>{f.q}</summary>
                  <p className="faq-a">{f.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <RelatedGuides currentSlug="coastal-lighting-kerala" />

      <section className="sec glow-top">
        <div className="wrap-tight" style={{ textAlign: "center" }}>
          <Reveal><h2 className="h-lg">Tell us how close you are to the water.</h2></Reveal>
          <Reveal delay={0.06}>
            <p className="lede" style={{ margin: "16px auto 0" }}>
              It changes the specification more than the budget does. All three
              of our stores are on the coast, so this is the constraint we design
              around every day. Design is free with purchase from Celestial.
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="cta-ctas" style={{ marginTop: 30 }}>
              <MagneticButton href="/consultation" variant="gold">Book a Consultation <span className="arr">→</span></MagneticButton>
              <MagneticButton href="/guides/crystal-vs-glass-chandelier" variant="ghost">Compare Materials</MagneticButton>
              <MagneticButton href={CELESTIAL} variant="ghost" external>See the range <span className="arr">→</span></MagneticButton>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
