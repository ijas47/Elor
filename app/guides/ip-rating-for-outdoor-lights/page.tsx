import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { site } from "@/lib/site";
import { guideDates } from "@/lib/guides";
import { breadcrumbSchema } from "@/lib/schema";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Reveal } from "@/components/motion/Reveal";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { RelatedGuides } from "@/components/ui/RelatedGuides";

const TITLE = "IP Rating for Outdoor Lights in Kerala";
const DESC =
  "What IP rating outdoor lights need: IP44 for a covered sit-out, IP65 for rain-exposed walls, IP66/67 for poolside and ground-recessed. With Kerala examples.";
const PATH = "/guides/ip-rating-for-outdoor-lights";
const CELESTIAL = "https://www.celestiallights.in";
const { updated: UPDATED, modified: MODIFIED } = guideDates(PATH);

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: PATH },
};

const steps = [
  {
    h: "Mark where rain reaches",
    p: "Walk the outside of the house in the monsoon, or ask the site engineer, and mark every point driven rain can hit.",
  },
  {
    h: "Sort each point",
    p: "Covered and only splashed: IP44. Open to driven rain, like a facade, terrace, gate, or courtyard: IP65. Jets, immersion, or ground-recessed: IP66 or IP67.",
  },
  {
    h: "Take the higher rating when unsure",
    p: "If a point sits between two categories, specify the higher one.",
  },
  {
    h: "Add finish and fixings near the coast",
    p: "On the coast, specify a corrosion-resistant body, finish, and stainless fixings as well as the IP number.",
  },
  {
    h: "Check the rating on the fitting",
    p: "Confirm the IP rating is printed on the product or its data sheet before it is installed.",
  },
];

const faqs = [
  {
    q: "What IP rating do outdoor lights need in Kerala?",
    a: "IP44 at minimum for a covered sit-out or balcony, IP65 for anything exposed to driven rain such as a facade, terrace, or open courtyard, and IP66 or IP67 for poolside and ground-recessed lights.",
  },
  {
    q: "Is IP65 waterproof?",
    a: "IP65 is protected against low-pressure water jets from any direction, which covers monsoon rain on a wall. It is not rated for immersion. Use IP67 where a fitting can sit in water.",
  },
  {
    q: "What do the two digits in IP65 mean?",
    a: "The first digit, 6, is protection against dust. The second digit, 5, is protection against water jets. The higher each digit, the more protection.",
  },
  {
    q: "Can Elor plan the outdoor lighting for my house?",
    a: "Yes. Elor designs lighting for sites anywhere in India from its centres in Kerala, and sets the IP rating, finish, and fixing for each point in the plan. Book a consultation to start.",
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
  datePublished: "2026-10-12",
  dateModified: MODIFIED,
  mainEntityOfPage: `${site.domain}${PATH}`,
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to choose the IP rating for an outdoor light",
  description: DESC,
  step: steps.map((s, i) => ({
    "@type": "HowToStep",
    position: i + 1,
    name: s.h,
    text: s.p,
  })),
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

export default function IpRatingGuide() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Guides", path: "/guides" },
              { name: "IP Rating for Outdoor Lights", path: PATH },
            ])
          ),
        }}
      />

      <section className="page-hero">
        <div className="wrap-tight">
          <Breadcrumbs crumbs={[{ name: "Guides", path: "/guides" }, { name: "IP Rating for Outdoor Lights", path: PATH }]} />
          <Reveal as="span"><span className="eyebrow">Technical · Updated {UPDATED}</span></Reveal>
          <Reveal delay={0.06}>
            <h1 className="h-xl" style={{ marginTop: 18 }}>
              Read the second digit,<br /><span className="serif-i">then the place.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="lede" style={{ marginTop: 22 }}>
              Outdoor lights in Kerala need IP44 under a covered sit-out or
              balcony, IP65 where driven monsoon rain reaches a facade,
              terrace or courtyard, and IP66 or IP67 by a pool or in the
              ground. The first digit is dust. The second is water. Ready
              outdoor fittings are at{" "}
              <a href={CELESTIAL} target="_blank" rel="noopener noreferrer">Celestial Lights</a>.
              {" "}Design is free with purchase from Celestial.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap-tight">
          <div
            style={{
              position: "relative",
              aspectRatio: "16 / 10",
              borderRadius: 18,
              overflow: "hidden",
            }}
          >
            <Image
              src="/spaces/outdoor.jpg"
              alt="A building facade at night with its terraces outlined in warm light"
              fill
              priority
              sizes="(max-width: 760px) 100vw, 760px"
            />
          </div>
        </div>
      </section>

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="register">
            <div className="register-row">
              <h2>What does an IP rating mean?</h2>
              <div>
                <p>
                  IP stands for ingress protection. The first digit says how
                  well the fitting keeps out solids and dust. The second says
                  how well it keeps out water. A higher second digit means
                  more water. IP20 is an indoor fitting. IP44 handles
                  splashing. IP65 handles low-pressure jets, which is what
                  monsoon rain against a wall behaves like. IP66 and IP67
                  take heavy jets or immersion.
                </p>
              </div>
            </div>
            <div className="register-row">
              <h2>Which IP rating for each place outside a Kerala home?</h2>
              <div>
                <p>
                  Covered sit-out, car porch, or balcony under a slab: IP44.
                  Wall lights on an exposed facade, gate pillars, open
                  terraces, and a nalukettu courtyard open to the sky: IP65.
                  Poolside, water features, and uplights set into the ground:
                  IP66 or IP67. When the place sits between two of these,
                  take the higher rating. The table and the coastal detail
                  are in the{" "}
                  <Link href="/guides/coastal-lighting-kerala">coastal lighting guide</Link>.
                </p>
              </div>
            </div>
            <div className="register-row">
              <h2>Is the IP rating enough near the sea?</h2>
              <div>
                <p>
                  No. The rating covers water and dust getting in. It says
                  nothing about salt air eating the body, the screws, or the
                  bracket. In Kochi, Kannur, Kozhikode, or anywhere on the
                  coast, ask for the finish and the fixings as well as the
                  number.{" "}
                  <Link href="/guides/coastal-lighting-kerala">Why brass and iron pit</Link>
                  {" "}is covered there too.
                </p>
              </div>
            </div>
            <div className="register-row">
              <h2>Do bathrooms count as outdoor?</h2>
              <div>
                <p>
                  For the fitting, nearly. A Kerala bathroom stays humid for
                  months, so a fitting near the shower wants IP44 or better.
                  The same goes for a kitchen hood zone. How the whole house
                  is planned room by room is the{" "}
                  <Link href="/guides/home-lighting-design">home lighting design guide</Link>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap-tight">
          <h2 className="h-lg">How to choose the IP rating for an outdoor light</h2>
          <ol style={{ marginTop: 24, paddingLeft: 22 }}>
            {steps.map((step) => (
              <li key={step.h} style={{ marginTop: 14 }}>
                <strong>{step.h}.</strong> {step.p}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="sec glow-top">
        <div className="wrap-tight">
          <Reveal><h2 className="h-lg">Shelf, or made for the room?</h2></Reveal>
          <Reveal delay={0.06}>
            <ul className="check-list" style={{ marginTop: 28 }}>
              <li>
                <span className="tick">✓</span>
                Outdoor wall, gate, and garden fittings that already exist in
                the range are shelf pieces at{" "}
                <a href={CELESTIAL} target="_blank" rel="noopener noreferrer">Celestial Lights</a>
                . Ask for the IP rating with the photo.
              </li>
              <li>
                <span className="tick">✓</span>
                A facade, courtyard, or pool lit as one plan, with the rating
                set per point, is a lighting design Elor draws before the
                wiring goes in. Design is free with purchase from Celestial.
              </li>
              <li>
                <span className="tick">✓</span>
                Custom pieces are usually ready in 3 to 6 weeks. We install
                custom lights and give installation support for everything
                else. Warranty is up to 5 years.
              </li>
              <li>
                <span className="tick">✓</span>
                Kannur and Kozhikode are Celestial Lights stores. Kochi is
                the Elor experience centre.
              </li>
            </ul>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="cta-ctas" style={{ marginTop: 30 }}>
              <MagneticButton href="/customisation" variant="gold">
                Send a picture <span className="arr">→</span>
              </MagneticButton>
              <MagneticButton href={CELESTIAL} variant="ghost" external>
                See the range <span className="arr">→</span>
              </MagneticButton>
            </div>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="form-note" style={{ marginTop: 18 }}>
              Want the plan before the piece?{" "}
              <Link href="/consultation">Book a consultation</Link>
              . What a custom piece costs is in the{" "}
              <Link href="/guides/chandelier-pricing-guide">pricing guide</Link>.
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
                <details className="faq-item" name="ip-rating-faq">
                  <summary>{f.q}</summary>
                  <p className="faq-a">
                    {f.q === "Can Elor plan the outdoor lighting for my house?" ? (
                      <>
                        Yes. Elor designs lighting for sites anywhere in India
                        from its centres in Kerala, and sets the IP rating,
                        finish, and fixing for each point in the plan.{" "}
                        <Link href="/consultation">Book a consultation</Link>
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

      <RelatedGuides currentSlug="ip-rating-for-outdoor-lights" />
    </>
  );
}
