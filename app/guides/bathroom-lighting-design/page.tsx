import Link from "next/link";
import type { Metadata } from "next";
import { site } from "@/lib/site";
import { guideDates } from "@/lib/guides";
import { breadcrumbSchema } from "@/lib/schema";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Reveal } from "@/components/motion/Reveal";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { RelatedGuides } from "@/components/ui/RelatedGuides";

const TITLE = "Bathroom Lighting Design for Kerala Homes";
const CRUMB = "Bathroom Lighting Design for Kerala Homes";
const DESC =
  "Bathroom lighting for Kerala homes: plan it before tiling, light the mirror from the sides, and use a fitting rated for a damp room.";
const PATH = "/guides/bathroom-lighting-design";
const CELESTIAL = "https://www.celestiallights.in";
const { updated: UPDATED, modified: MODIFIED } = guideDates(PATH);

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: PATH },
};

const faqs = [
  { q: "When should the points be decided?", a: "Before the tiles go on, while the walls and the ceiling are still open. That is when conduits, mirror points, an extract, and any shower or niche light can be placed without breaking finished work." },
  { q: "Can I use an ordinary ceiling light in a bathroom?", a: "Not near the shower, and not if the room stays damp for months, as Kerala bathrooms often do. Use a fitting meant for moisture. A qualified electrician should confirm the rating and the wiring. How IP ratings work is in our IP rating guide. A Kerala bathroom fitting near the shower wants IP44 or better, as that guide already says." },
  { q: "Do I need a separate mirror circuit?", a: "Yes, if you can. The mirror light is the one you use to see your face. It should work without turning the whole ceiling on." },
  { q: "Can I put a light inside the shower?", a: "Only a fitting rated for that spot, and only if a qualified electrician agrees the point and the wiring. Our IP rating guide says a fitting near the shower wants IP44 or better. Do not assume any fitting is safe inside the shower until the electrician has checked it." },
  { q: "Is design free?", a: "Design is free with purchase from Celestial. Ready fittings are bought from Celestial. Elor writes the plan for the house." },
];

const faqBodies = [
  <>Before the tiles go on, while the walls and the ceiling are still open. That is when conduits, mirror points, an extract, and any shower or niche light can be placed without breaking finished work.</>,
  <>Not near the shower, and not if the room stays damp for months, as Kerala bathrooms often do. Use a fitting meant for moisture. A qualified electrician should confirm the rating and the wiring. How IP ratings work is in our <Link href="/guides/ip-rating-for-outdoor-lights" style={{ color: "var(--gold)" }}>IP rating guide</Link>. A Kerala bathroom fitting near the shower wants IP44 or better, as that guide already says.</>,
  <>Yes, if you can. The mirror light is the one you use to see your face. It should work without turning the whole ceiling on.</>,
  <>Only a fitting rated for that spot, and only if a qualified electrician agrees the point and the wiring. Our IP rating guide says a fitting near the shower wants IP44 or better. Do not assume any fitting is safe inside the shower until the electrician has checked it.</>,
  <>Design is free with purchase from Celestial. Ready fittings are bought from Celestial. Elor writes the plan for the house.</>,
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Bathroom lighting design for a Kerala home",
  description: DESC,
  author: { "@type": "Organization", name: site.name, url: site.domain },
  publisher: {
    "@type": "Organization",
    name: site.name,
    logo: { "@type": "ImageObject", url: `${site.domain}/brand/logo-mark.svg` },
  },
  datePublished: "2026-11-19",
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

export default function BathroomLightingGuide() {
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
              { name: CRUMB, path: PATH },
            ])
          ),
        }}
      />

      <section className="page-hero">
        <div className="wrap-tight">
          <Breadcrumbs crumbs={[{ name: "Guides", path: "/guides" }, { name: CRUMB, path: PATH }]} />
          <Reveal as="span">
            <span className="eyebrow">Technical · Updated {UPDATED}</span>
          </Reveal>
          <Reveal delay={0.06}>
            <h1 className="h-xl" style={{ marginTop: 18 }}>
              Bathroom lighting design for a Kerala home
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="lede" style={{ marginTop: 22 }}>
              Plan bathroom lighting before the tiles go on. Use a fitting rated for a damp room, especially near the shower. Light the mirror from the sides or a front-facing bar, not only a downlight above your head. Ready fittings are at <a href={CELESTIAL} target="_blank" rel="noopener noreferrer">Celestial Lights</a>. Elor can plan the house. Design is free with purchase from Celestial.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap-tight">
          <ul className="check-list">
              <li><span className="tick">✓</span>Plan the points before the tiles go on, while the walls are still open.</li>
              <li><span className="tick">✓</span>Light the face, not only the ceiling: sides of the mirror, or a front-facing bar.</li>
              <li><span className="tick">✓</span>Use a fitting rated for a wet, damp room, especially near the shower.</li>
          </ul>
          <div className="cta-ctas" style={{ marginTop: 30 }}>
            <MagneticButton href="/consultation" variant="gold">Book a consultation <span className="arr">→</span></MagneticButton>
            <MagneticButton href={CELESTIAL} variant="ghost" external>See the range <span className="arr">→</span></MagneticButton>
          </div>
        </div>
      </section>

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="register">
            <div className="register-row">
              <h2>When should bathroom lighting be planned?</h2>
              <div>
                <p>Before the tiles go on. Once the walls and the ceiling are closed, adding a mirror point, a shower light, or an extract means breaking finished work. While the room is open, mark the conduits, the switch positions, and any niche or shower point. A bathroom in a Kerala house stays humid for months, so those choices are harder to undo later than in a dry climate.</p>
                <p style={{ marginTop: 16 }}>The bathroom should sit on the same house plan as the other rooms. How that plan is written is in <Link href="/guides/how-a-lighting-plan-is-built" style={{ color: "var(--gold)" }}>how a lighting plan is built</Link> and <Link href="/guides/home-lighting-design" style={{ color: "var(--gold)" }}>home lighting design</Link>.</p>
              </div>
            </div>
            <div className="register-row">
              <h2>How should the mirror be lit?</h2>
              <div>
                <p>From both sides, or with a bar on the front of the mirror, so light reaches the face. A single downlight above the head is the usual mistake. It lights the top of the hair and throws shadows into the eyes and under the chin, which is a poor light for shaving or makeup.</p>
                <p style={{ marginTop: 16 }}>Two wall lights, one on each side of the mirror, at about face height, or a front-facing mirror bar, do the job. The exact height and wattage should be set on site.</p>
              </div>
            </div>
            <div className="register-row">
              <h2>What layers does a small wet room need?</h2>
              <div>
                <p>Three is enough in most homes.</p>
                <ul className="check-list" style={{ marginTop: 16 }}>
                  <li><span className="tick">✓</span>A general ceiling light, so the room is not only lit at the mirror.</li>
                  <li><span className="tick">✓</span>The mirror light, on its own switch, so you can see your face without the ceiling being fully on.</li>
                  <li><span className="tick">✓</span>An optional light in the shower or in a niche, only if the fitting is rated for that place, and only if an electrician agrees the point.</li>
                </ul>
                <p style={{ marginTop: 16 }}>Each layer should have a sensible switch. Dimming helps if the fitting allows it. A ceiling fan is not the issue in a bathroom. An extract fan is, and a false ceiling still needs enough depth for the fittings you choose.</p>
              </div>
            </div>
            <div className="register-row">
              <h2>What rating does a damp bathroom need?</h2>
              <div>
                <p>A Kerala bathroom stays humid for months. Use a fitting meant for moisture, especially near the shower. Do not treat an ordinary indoor ceiling light as good enough for that place.</p>
                <p style={{ marginTop: 16 }}>The rating system is explained in <Link href="/guides/ip-rating-for-outdoor-lights" style={{ color: "var(--gold)" }}>IP rating for outdoor lights</Link>. That guide already says a fitting near the shower wants IP44 or better. A qualified electrician should confirm the rating and the wiring for your room.</p>
                <p style={{ marginTop: 16 }}>Near the coast, or in a bathroom that stays wet through the monsoon, metal finishes also matter. What fails first in salt air is in the <Link href="/guides/coastal-lighting-kerala" style={{ color: "var(--gold)" }}>coastal guide</Link>.</p>
              </div>
            </div>
            <div className="register-row">
              <h2>What colour of light works in a bathroom?</h2>
              <div>
                <p>Choose a warm, even light that flatters skin at the mirror, and keep the ceiling light in the same colour family so the room does not look split. The numbers on the box, and what they change, are in <Link href="/guides/colour-of-light" style={{ color: "var(--gold)" }}>Kelvin, CRI, and beam angle</Link>.</p>
              </div>
            </div>
            <div className="register-row">
              <h2>Ready fittings, or a plan for the whole house?</h2>
              <div>
                <p>Look for ready fittings at <a href={CELESTIAL} target="_blank" rel="noopener noreferrer">Celestial Lights</a>. Check that the rating suits the spot in your room before you buy.</p>
                <p style={{ marginTop: 16 }}>Elor writes the lighting plan for the house, including the bathroom, and can take a custom brief if a ready piece will not do. Design is free with purchase from Celestial.</p>
              </div>
            </div>
          </div>
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
                <details className="faq-item" name="bathroom-lighting-design-faq">
                  <summary>{f.q}</summary>
                  <p className="faq-a">{faqBodies[i]}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="sec glow-top">
        <div className="wrap-tight">
          <Reveal><h2 className="h-lg">Plan the bathroom while the walls are still open.</h2></Reveal>
          <Reveal delay={0.06}>
            <p className="lede" style={{ marginTop: 16 }}>Send a floor plan and a photo of the room, and Elor can help mark the points before the tiles go on. Design is free with purchase from Celestial.</p>
          </Reveal>
          <div className="cta-ctas" style={{ marginTop: 30 }}>
            <MagneticButton href="/consultation" variant="gold">Book a consultation <span className="arr">→</span></MagneticButton>
            <MagneticButton href={CELESTIAL} variant="ghost" external>See the range <span className="arr">→</span></MagneticButton>
          </div>
        </div>
      </section>

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap-tight">
          <h2 className="h-lg">More guides</h2>
          <p className="lede" style={{ marginTop: 16 }}>
            <Link href="/guides/home-lighting-design" style={{ color: "var(--gold)" }}>Home lighting design</Link> ·             <Link href="/guides/ip-rating-for-outdoor-lights" style={{ color: "var(--gold)" }}>IP rating for outdoor lights</Link> ·             <Link href="/guides/colour-of-light" style={{ color: "var(--gold)" }}>Kelvin, CRI, and beam angle</Link> ·             <Link href="/guides/how-a-lighting-plan-is-built" style={{ color: "var(--gold)" }}>How a lighting plan is built</Link> ·             <Link href="/guides/coastal-lighting-kerala" style={{ color: "var(--gold)" }}>Coastal lighting in Kerala</Link> ·             <Link href="/guides" style={{ color: "var(--gold)" }}>All lighting guides</Link>
          </p>
        </div>
      </section>

      <RelatedGuides currentSlug="bathroom-lighting-design" />
    </>
  );
}
