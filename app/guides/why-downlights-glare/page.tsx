import type { Metadata } from "next";
import { site } from "@/lib/site";
import { breadcrumbSchema } from "@/lib/schema";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { RelatedGuides } from "@/components/ui/RelatedGuides";

const TITLE = "Why a Downlight Glares — Baffles, Cutoff and the Seated View";
const META_TITLE = "Why a Downlight Glares";
const DESC =
  "If you can see the LED from the sofa, the fitting is too shallow. Baffle depth, cutoff, and where the driver sits, decided before the ceiling closes.";
const PATH = "/guides/why-downlights-glare";
const UPDATED = "23 September 2026";

export const metadata: Metadata = {
  title: META_TITLE,
  description: DESC,
  alternates: { canonical: PATH },
};

const checks = [
  {
    h: "Sit down before you approve the ceiling",
    p: "Glare is judged from the chair, not from the doorway. Stand under a downlight and the lamp is above you. Sit on the sofa and you look back into it. A fitting that seems fine on a site walk can be the bright spot in every evening photograph.",
  },
  {
    h: "The source has to sit up inside the fitting",
    p: "A shallow trim puts the LED chip near the ceiling line, so it is in view across the room. A deep baffle, or a trimless fitting recessed into the gypsum, holds the chip higher. From a normal seated position you see the lit room, not the lamp. The ceiling build-up has to allow that depth. This is one more reason the points are marked before the boards close.",
  },
  {
    h: "Fewer fittings, on a dimmer",
    p: "A grid of identical downlights is bright and still glaring, because every chip is a point you can see. Ambient light can be a quiet cove plus a few recessed fittings, dimmed for the evening. The wall and the art take their own layer. The chandelier is the object, not the cure for a glaring ceiling.",
  },
  {
    h: "Leave a way back to the driver",
    p: "The driver is what fails, years before the LED. It needs a place you can reach: above a removable panel, in a cupboard, or in a fitting that opens. Buried in a closed gypsum void, with no hatch, it becomes a ceiling demolition the first time it dies.",
  },
];

const faqs = [
  {
    q: "Why do I see the bulb in a downlight?",
    a: "The LED is too close to the ceiling opening for the angle you are looking from. A deeper baffle or a regressed trim hides it from a seated view. The fitting has to be chosen for that depth, and the ceiling has to have room for it.",
  },
  {
    q: "Is a trimless downlight always better?",
    a: "Trimless is a ceiling detail. It looks quiet when the recess is deep enough and the edge is finished cleanly. A shallow trimless fitting glares just as much as a shallow trim. Depth is the glare decision. Trimless is the look.",
  },
  {
    q: "Can I fix glare after the ceiling is closed?",
    a: "Sometimes, by swapping to a deeper fitting of the same cut-out, or by dimming. Often the cut-out is too small, or the gypsum build-up is too thin, and the fix is opening the ceiling. Decide it on the section.",
  },
  {
    q: "How many downlights does a living room need?",
    a: "Enough to cross the room when the decorative lights are off, and no more. The wall wash, the cove, and the chandelier do the rest. A full grid is what you get when those layers were never drawn.",
  },
  {
    q: "Where should the driver go?",
    a: "Somewhere the electrician can replace it without cutting gypsum. A remote driver in an accessible void, or a fitting that opens from below. Write that on the plan with the point.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: TITLE,
  description: DESC,
  image: `${site.domain}/spaces/living.jpg`,
  author: { "@type": "Organization", name: site.name, url: site.domain },
  publisher: {
    "@type": "Organization",
    name: site.name,
    logo: { "@type": "ImageObject", url: `${site.domain}/brand/logo-mark.svg` },
  },
  datePublished: "2026-09-23",
  dateModified: "2026-09-23",
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

export default function DownlightGlareGuide() {
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
              { name: "Why a Downlight Glares", path: PATH },
            ])
          ),
        }}
      />

      <section className="page-hero">
        <div className="wrap-tight">
          <Breadcrumbs crumbs={[{ name: "Guides", path: "/guides" }, { name: "Why a Downlight Glares", path: PATH }]} />
          <Reveal as="span"><span className="eyebrow">Technical · Updated {UPDATED}</span></Reveal>
          <Reveal delay={0.06}>
            <h1 className="h-xl" style={{ marginTop: 18 }}>
              If you can see the lamp,<br /><span className="serif-i">it is the wrong fitting.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="lede" style={{ marginTop: 22 }}>
              Most glaring ceilings are a depth problem. The LED sits too
              close to the opening, so from the sofa you look straight into
              it. The fix is decided on the ceiling section, with the layers
              in the{" "}
              <a href="/guides/how-a-lighting-plan-is-built">lighting plan</a>,
              before the gypsum closes.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <Stagger className="register">
            {checks.map((item) => (
              <StaggerItem key={item.h} className="register-row">
                <h3>{item.h}</h3>
                <p>{item.p}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="sec glow-top">
        <div className="wrap-tight">
          <Reveal><h2 className="h-lg">What to write on the drawing</h2></Reveal>
          <Reveal delay={0.08}>
            <ul className="check-list" style={{ marginTop: 28 }}>
              <li><span className="tick">✓</span>Recess depth, not just the cut-out diameter. The baffle has to hide the chip from a seated eye.</li>
              <li><span className="tick">✓</span>A dimmer on the ambient group, separate from the wall wash and the chandelier.</li>
              <li><span className="tick">✓</span>3000K in the living room, CRI 90. Colour is the other half of comfort, in the Kelvin guide.</li>
              <li><span className="tick">✓</span>Driver location, and a hatch if it is remote.</li>
              <li><span className="tick">✓</span>The anchor for anything heavy still goes into the slab. The false-ceiling guide covers that load.</li>
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
                <details className="faq-item" name="glare-faq">
                  <summary>{f.q}</summary>
                  <p className="faq-a">{f.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <RelatedGuides currentSlug="why-downlights-glare" />

      <section className="sec glow-top">
        <div className="wrap-tight" style={{ textAlign: "center" }}>
          <Reveal><h2 className="h-lg">Sit in the centre and look up.</h2></Reveal>
          <Reveal delay={0.06}>
            <p className="lede" style={{ margin: "16px auto 0" }}>
              The Kannur, Kochi, and Kozhikode centres have fittings at
              different recess depths. Bring the ceiling section if you have
              it.
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="cta-ctas" style={{ marginTop: 30 }}>
              <MagneticButton href="/consultation" variant="gold">Book a Consultation <span className="arr">→</span></MagneticButton>
              <MagneticButton href="/guides/colour-of-light" variant="ghost">Kelvin, CRI, beam</MagneticButton>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
