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

const TITLE = "Balcony and Outdoor Lighting for a Kerala Home";
const CRUMB = "Balcony and Outdoor Lighting for a Kerala Home";
const DESC =
  "Balcony, sit-out and facade lighting for a Kerala home: light the seat and steps, choose fittings for the monsoon, and plan points before the plaster.";
const PATH = "/guides/outdoor-balcony-lighting-kerala";
const CELESTIAL = "https://www.celestiallights.in";
const { updated: UPDATED, modified: MODIFIED } = guideDates(PATH);

const HERO_IMAGE = "/images/guides/outdoor-balcony-lighting-kerala/kerala-villa-facade-lighting.webp";
const HERO_ALT =
  "A tropical modern villa at night, with warm facade uplights, path lights along the driveway, and a lit balcony";
const BODY_IMAGE = "/images/guides/outdoor-balcony-lighting-kerala/facade-up-down-wall-light.webp";
const BODY_ALT =
  "A black up-down wall light on a white facade, throwing a beam up and down the wall";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: PATH },
  openGraph: {
    title: TITLE,
    description: DESC,
    images: [{ url: HERO_IMAGE, width: 1400, height: 1050, alt: HERO_ALT }],
  },
};

const faqs = [
  { q: "Can I use an indoor wall light on a balcony?", a: "Not on an open balcony. An indoor fitting is not made for rain, and a Kerala monsoon will reach it. Under a deep covered sit-out it may sit out of the rain, but a fitting meant for outdoor use is the safer choice. Check the rating in the IP guide." },
  { q: "When should outdoor points be decided?", a: "Before the plaster and the paving. The facade, steps, gate, and sit-out need wires laid while the walls and floor are open. Adding a point later means cutting plaster or lifting tiles." },
  { q: "Do fairy lights count as the outdoor plan?", a: "No. Fairy lights and rope lights are fine for a festival or a wedding. They do not light the seat, the door, or the steps, so they should not be the main outdoor lighting. Plan the useful light first." },
];

const faqBodies = [
  <>Not on an open balcony. An indoor fitting is not made for rain, and a Kerala monsoon will reach it. Under a deep covered sit-out it may sit out of the rain, but a fitting meant for outdoor use is the safer choice. Check the rating in the IP guide.</>,
  <>Before the plaster and the paving. The facade, steps, gate, and sit-out need wires laid while the walls and floor are open. Adding a point later means cutting plaster or lifting tiles.</>,
  <>No. Fairy lights and rope lights are fine for a festival or a wedding. They do not light the seat, the door, or the steps, so they should not be the main outdoor lighting. Plan the useful light first.</>,
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Outdoor, balcony and facade lighting for a Kerala home",
  description: DESC,
  image: `${site.domain}${HERO_IMAGE}`,
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

export default function OutdoorBalconyLightingGuide() {
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
              Outdoor, balcony and facade lighting for a Kerala home
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="lede" style={{ marginTop: 22 }}>
              Balcony lighting starts with the chair, the door, and the steps, not a string of decorative dots. A covered sit-out and an open balcony are different jobs, so pick a fitting made for weather and a finish that can take salt air. Buy ready fittings at Celestial. Elor plans the house, and design is free with purchase from Celestial.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap-tight">
          <ul className="check-list">
              <li><span className="tick">✓</span>Light the seat, the door, and the steps first. Decorative dots come last, if at all.</li>
              <li><span className="tick">✓</span>A covered sit-out and an open balcony need different fittings, because rain reaches them differently.</li>
              <li><span className="tick">✓</span>The weather rating and the metal for the coast have their own guides. This page links them instead of repeating them.</li>
          </ul>

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
              src={HERO_IMAGE}
              alt={HERO_ALT}
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
              <h2>What should you light first? The seat, the door, and the steps</h2>
              <div>
                <p>Start from how the family uses the space after dark. In most Kerala houses the sit-out is used most evenings. People read the paper there, take tea, wait for a child, or talk to a neighbour at the gate. Light that seat first, so a face and a cup can be seen without glare.</p>
                <p style={{ marginTop: 16 }}>Next, light the way in and out. The front door needs enough light to find the keys and to see who is standing there. Every step, and any change in level, needs light so nobody trips on a wet night. Low light near the edge of a step or a path does this better than one bright lamp that shines into the eyes of the person walking up.</p>
                <p style={{ marginTop: 16 }}>Only then look at the rest. A string of decorative dots on the parapet is not a plan. It looks festive for a week and leaves the steps dark.</p>
                <p style={{ marginTop: 16 }}>A simple way to list it, place by place:</p>
                <ul className="check-list" style={{ marginTop: 16 }}>
                  <li><span className="tick">✓</span><strong>Covered sit-out:</strong> a wall light or a ceiling light over the seat, and a light at the door. On a switch by the door.</li>
                  <li><span className="tick">✓</span><strong>Open balcony:</strong> a wall light that suits open rain, placed where it lights the floor and the chair, not the neighbour.</li>
                  <li><span className="tick">✓</span><strong>Facade:</strong> a soft graze up or down the wall, on its own circuit, with a timer or sensor if you want it to come on at dusk.</li>
                  <li><span className="tick">✓</span><strong>Steps and path:</strong> low light at each step or along the edge, aimed down.</li>
                  <li><span className="tick">✓</span><strong>A little garden:</strong> a few points on a tree or a planter, aimed down or across, not into windows.</li>
                </ul>
              </div>
            </div>
            <div className="register-row">
              <h2>Covered sit-out vs an open balcony: what is the difference?</h2>
              <div>
                <p>Rain reaches them differently, so they need different fittings. A sit-out under a slab gets splashes and blown spray. An open balcony, a terrace, or the sides of a courtyard open to the sky take driven monsoon rain from the side. A fitting that is fine under the slab can fail on an open wall.</p>
                <p style={{ marginTop: 16 }}>The rating number for each spot, and what to do when a spot sits between two, is in <Link href="/guides/ip-rating-for-outdoor-lights" style={{ color: "var(--gold)" }}>IP ratings for outdoor lights</Link>. Mark each point as covered or open on the drawing, then take the number from that guide. Check that the rating is printed on the fitting or its data sheet before it goes up.</p>
                <p style={{ marginTop: 16 }}>One honest drawback: a covered sit-out often looks more open than it is. If the monsoon blows in from one side, treat that wall as open.</p>
              </div>
            </div>
            <div className="register-row">
              <h2>What is an up-down light on a facade?</h2>
              <div>
                <p>An up-down light is a wall light that throws light both up and down the wall from one fitting. On a facade it is used to graze the wall: the light runs along the surface and shows the texture of laterite, plaster, or timber. It is not a floodlight.</p>
                <p style={{ marginTop: 16 }}>A floodlight on a pole or a parapet lights the whole front at once. It also lights the road, the neighbour&apos;s bedroom window, and the eyes of anyone at the gate. A graze stays on your wall.</p>
                <p style={{ marginTop: 16 }}>A few plain rules for the facade:</p>
                <ul className="check-list" style={{ marginTop: 16 }}>
                  <li><span className="tick">✓</span>Keep it soft. A little light on the front goes a long way.</li>
                  <li><span className="tick">✓</span>Aim it at the wall, and keep the beam off windows, yours and the neighbour&apos;s.</li>
                  <li><span className="tick">✓</span>Use a warm white that matches the sit-out, so the house front and the sitting area look like one house. The colour numbers are in <Link href="/guides/colour-of-light" style={{ color: "var(--gold)" }}>colour of light</Link>.</li>
                  <li><span className="tick">✓</span>Put the facade on its own switch or timer, so it can stay off on a normal night.</li>
                </ul>
                <p style={{ marginTop: 16 }}>The facade faces the weather more than any other part of the house, so the fitting needs the right rating for an open wall. That is in the IP guide linked above.</p>

                <figure style={{ marginTop: 24, marginBottom: 0 }}>
                  <div
                    style={{
                      position: "relative",
                      aspectRatio: "1 / 1",
                      borderRadius: 18,
                      overflow: "hidden",
                    }}
                  >
                    <Image
                      src={BODY_IMAGE}
                      alt={BODY_ALT}
                      fill
                      sizes="(max-width: 760px) 100vw, 480px"
                    />
                  </div>
                </figure>
              </div>
            </div>
            <div className="register-row">
              <h2>Which finishes last near the sea?</h2>
              <div>
                <p>The rating keeps water and dust out of the fitting. It says nothing about salt air eating the body, the screws, or the bracket. In Kochi, Kannur, Kozhikode, or anywhere on the coast, ask for the finish and the fixings as well as the rating.</p>
                <p style={{ marginTop: 16 }}>Which metals hold up, how close to the sea, is in <Link href="/guides/coastal-lighting-kerala" style={{ color: "var(--gold)" }}>coastal lighting in Kerala</Link>. Read it before you pick a finish for a sea-facing balcony. A fitting that looks right in a dry showroom can look tired after a couple of monsoons on the coast.</p>
              </div>
            </div>
            <div className="register-row">
              <h2>When should outdoor points be decided?</h2>
              <div>
                <p>Before the plaster and the paving. The facade, the steps, the gate, and the sit-out need wires and boxes laid while the walls and the floor are still open. After that, adding a point means cutting plaster or lifting tiles.</p>
                <p style={{ marginTop: 16 }}>The outside belongs in the same drawing as the rooms inside, with its own circuits. How the whole house plan fits together is in <Link href="/guides/home-lighting-design" style={{ color: "var(--gold)" }}>home lighting design</Link>.</p>
              </div>
            </div>
            <div className="register-row">
              <h2>Ready outdoor fittings, or a plan for the house?</h2>
              <div>
                <p>If you only need a wall light for the sit-out or a light by the door, look at ready outdoor fittings at <a href={CELESTIAL} target="_blank" rel="noopener noreferrer">Celestial Lights</a>. Ask for the rating and the finish with the photo. Celestial gives wholesale best rates and can match any quote.</p>
                <p style={{ marginTop: 16 }}>If you are lighting the facade, the balcony, the steps, and the garden together, Elor can draw it as one plan, with each point marked before the plaster. Design is free with purchase from Celestial.</p>
                <p style={{ marginTop: 16 }}>If the walls are still open, <Link href="/consultation" style={{ color: "var(--gold)" }}>book a lighting consultation</Link> and plan the outside with the rest of the house.</p>
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
                <details className="faq-item" name="outdoor-balcony-lighting-kerala-faq">
                  <summary>{f.q}</summary>
                  <p className="faq-a">{faqBodies[i]}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap-tight">
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
            <Link href="/guides/ip-rating-for-outdoor-lights" style={{ color: "var(--gold)" }}>IP ratings for outdoor lights</Link> ·             <Link href="/guides/coastal-lighting-kerala" style={{ color: "var(--gold)" }}>Coastal lighting in Kerala</Link> ·             <Link href="/guides/home-lighting-design" style={{ color: "var(--gold)" }}>Home lighting design</Link> ·             <Link href="/guides/colour-of-light" style={{ color: "var(--gold)" }}>Colour of light</Link> ·             <Link href="/guides" style={{ color: "var(--gold)" }}>All lighting guides</Link>
          </p>
        </div>
      </section>

      <RelatedGuides currentSlug="outdoor-balcony-lighting-kerala" />
    </>
  );
}
