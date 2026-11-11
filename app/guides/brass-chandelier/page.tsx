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
import { guideArticles } from "@/lib/guide-articles";

const TITLE = "Brass Chandelier for Kerala Homes";
const CRUMB = "Brass Chandelier";
const DESC =
  "How to choose a brass chandelier for a Kerala home: solid, plated or painted, a finish specified for humidity, sized to the furniture and fixed to the slab.";
const PATH = "/guides/brass-chandelier";
const CELESTIAL = "https://www.celestiallights.in";
const STAIR_ALT = "A red crystal cascade falling beside a dark spiral staircase";
const { updated: UPDATED, modified: MODIFIED } = guideDates(PATH);
const others = guideArticles.filter((item) => item.slug !== "brass-chandelier");

const faqs = [
  {
    q: "Will a brass chandelier last in Kerala?",
    a: "A sealed finish, specified for humidity, can. Untreated brass pits in salt air. Say which room it is for before the finish is chosen. The coastal guide lists what fails first.",
  },
  {
    q: "Is brass the same as a gold-coloured finish?",
    a: "No. Solid brass, brass plate, and a painted gold coat age differently. The specification should name which one you are buying or making.",
  },
  {
    q: "Can I polish a brass chandelier?",
    a: "Only with what the finish allows. A polish for bare brass can strip a lacquer or a plated coat. Ask the maker, and clean with a dry cloth with the power off.",
  },
  {
    q: "Where do I see brass fittings?",
    a: "Shelf pieces are at Celestial Lights. See the range at the shop for what is in the collection.",
  },
  {
    q: "Can Elor make a brass piece to a drawing?",
    a: "Yes. Send the diameter, the finish, and the ceiling height. Custom work is usually 3 to 6 weeks. We install custom lights and give installation support for everything else. Warranty is up to 5 years.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: TITLE,
  description: DESC,
  image: `${site.domain}/collections/staircase-cascade.jpg`,
  author: { "@type": "Organization", name: site.name, url: site.domain },
  publisher: {
    "@type": "Organization",
    name: site.name,
    logo: { "@type": "ImageObject", url: `${site.domain}/brand/logo-mark.svg` },
  },
  datePublished: "2026-10-05",
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

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: PATH },
};

export default function BrassChandelierGuide() {
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
            <span className="eyebrow">Buying guide · Updated {UPDATED}</span>
          </Reveal>
          <Reveal delay={0.06}>
            <h1 className="h-xl" style={{ marginTop: 18 }}>
              Brass has to survive
              <br />
              <span className="serif-i">the air it hangs in.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="lede" style={{ marginTop: 22 }}>
              Choose a brass chandelier for a Kerala home by first asking what it actually is: solid brass, brass-plated, or a gold-coloured coat. Then specify the finish for the room, especially near the coast, a kitchen, or a courtyard. Size it to the furniture and the ceiling, keep it clear of the fan, and fix it to the slab.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap-tight">
          <figure>
            <div
              style={{
                position: "relative",
                aspectRatio: "16 / 10",
                borderRadius: 18,
                overflow: "hidden",
              }}
            >
              <Image
                src="/collections/staircase-cascade.jpg"
                alt={STAIR_ALT}
                fill
                priority
                sizes="(max-width: 760px) 100vw, 760px"
              />
            </div>
            <figcaption className="form-note" style={{ marginTop: 12 }}>
              A stair piece: a red crystal cascade falling beside a dark spiral staircase
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="register">
            <div className="register-row">
              <h2>Why choose a brass chandelier?</h2>
              <div>
                <p>
                  Brass is familiar in a Kerala home. It is the metal of the nilavilakku, the temple lamp, and the old door fittings, so a brass chandelier can feel at home in a traditional house as easily as in a modern one. It suits warm light, works with timber and with white walls, and comes in shapes from classic arms to modern sputnik and linear designs.
                </p>
              </div>
            </div>
            <div className="register-row">
              <h2>Is it solid brass, plated, or a gold-coloured finish?</h2>
              <div>
                <p>
                  Ask before anything else, because they are different products. Solid brass is the metal all the way through. Brass plate is a thin brass layer over another metal. A gold-coloured coat is paint or powder coat that looks like brass. Each looks different up close, weighs differently, and behaves differently over the years. The specification, or the bill, should name which one you are buying or having made.
                </p>
              </div>
            </div>
            <div className="register-row">
              <h2>Which finish should a brass chandelier have?</h2>
              <div>
                <p>
                  Pick one and write it down: a lacquered finish, a plated coat, or a living finish that is allowed to change. Say which room the piece is for, and whether it is near the sea, a kitchen, a bathroom, or an open courtyard, so the finish can be chosen for that room rather than for a dry showroom. A kitchen and a coastal veranda are harder on any metal than a closed living room. What to ask for near the sea is in the{" "}
                  <Link href="/guides/coastal-lighting-kerala" style={{ color: "var(--gold)" }}>
                    coastal guide
                  </Link>
                  .
                </p>
              </div>
            </div>
            <div className="register-row">
              <h2>Which rooms suit a brass chandelier?</h2>
              <div>
                <p>
                  Living and dining rooms, a double-height entrance, a pooja area where brass is already the language, and bedrooms where a small piece adds warmth. In a kitchen, think about steam and grease before choosing an open brass design; see{" "}
                  <Link href="/guides/kitchen-lighting-design" style={{ color: "var(--gold)" }}>
                    kitchen lighting
                  </Link>
                  . For a double-height void, the clearances from the stair and the handrail are in{" "}
                  <Link href="/guides/staircase-lighting-design" style={{ color: "var(--gold)" }}>
                    staircase lighting
                  </Link>
                  . If the room is mostly timber and you want the light to disappear into it, compare the{" "}
                  <Link href="/guides/wooden-chandelier" style={{ color: "var(--gold)" }}>
                    wooden chandelier guide
                  </Link>
                  .
                </p>
              </div>
            </div>
            <div className="register-row">
              <h2>Does a brass chandelier suit a pooja room?</h2>
              <div>
                <p>
                  It can, because brass is already the material of the lamps and vessels in most pooja rooms. Keep the piece small and the light warm and low, so it supports the lamp rather than outshining it. Many families prefer the pooja area lit softly from the side or the ceiling edge, with no fitting directly above the idols; ask the family what they want before placing anything. Smoke and oil from the lamp settle on any fitting nearby, so choose a design that is easy to reach and wipe.
                </p>
              </div>
            </div>
            <div className="register-row">
              <h2>How should brass sit with the other metals in a room?</h2>
              <div>
                <p>
                  Decide the room's metal once. Brass next to chrome taps, steel handles, and black window frames can look accidental. Either let the brass chandelier be the one warm metal in a cool room, on purpose, or carry brass into a few other details, such as door handles, a mirror frame, or switch plates, so it reads as a choice. The same applies to tone: a polished brass chandelier and an antique-finish wall light in the same room rarely look like a pair. Bring a photo of the room, or a sample of the other finishes, when choosing. If the room also has wooden joinery, look at the brass against that timber in daylight and in the evening, because both change with the light.
                </p>
              </div>
            </div>
            <div className="register-row">
              <h2>What colour of light suits brass?</h2>
              <div>
                <p>
                  Warm light flatters brass and the room around it; a cold white lamp makes it look flat and greenish. Agree the colour temperature once for the room, so the brass piece and the cove and spots match. If the piece has glass shades, the glass changes the light too, so look at it lit before deciding. The numbers to agree are in{" "}
                  <Link href="/guides/colour-of-light" style={{ color: "var(--gold)" }}>
                    Kelvin, CRI, and beam
                  </Link>
                  , and the glass options are compared in{" "}
                  <Link href="/guides/crystal-vs-glass-chandelier" style={{ color: "var(--gold)" }}>
                    crystal, glass, and acrylic
                  </Link>
                  .
                </p>
              </div>
            </div>
            <div className="register-row">
              <h2>What size brass chandelier do I need?</h2>
              <div>
                <p>
                  Size it to the furniture and the ceiling, not the whole room: the seating group in a living room, the table in a dining room.{" "}
                  <Link href="/guides/chandelier-size-calculator" style={{ color: "var(--gold)" }}>
                    The size calculator
                  </Link>
                  {" "}turns those measurements into a diameter and a drop. Measure before ordering from a photograph, because a photograph never shows the ceiling height it was taken under.
                </p>
              </div>
            </div>
            <div className="register-row">
              <h2>Can a false ceiling hold a brass chandelier?</h2>
              <div>
                <p>
                  No. Brass frames carry real weight, and gypsum and POP do not carry a chandelier. The anchor goes into the slab before the ceiling closes, as set out in the{" "}
                  <Link href="/guides/false-ceiling-chandelier-weight" style={{ color: "var(--gold)" }}>
                    false-ceiling guide
                  </Link>
                  . Plan the fan on its own point, well away from the piece; the layouts are in{" "}
                  <Link href="/guides/chandelier-with-ceiling-fan" style={{ color: "var(--gold)" }}>
                    chandelier with a ceiling fan
                  </Link>
                  .
                </p>
              </div>
            </div>
            <div className="register-row">
              <h2>How do I clean a brass chandelier?</h2>
              <div>
                <p>
                  With the power off at the breaker and a dry, soft cloth. Ask the maker what the finish tolerates before using any polish or cleaner, because a polish meant for bare brass can strip a lacquer or a plated coat. Keep liquid away from the lamp holders and the wiring. Glass or crystal parts are cleaned as in{" "}
                  <Link href="/guides/how-to-clean-a-crystal-chandelier" style={{ color: "var(--gold)" }}>
                    how to clean a crystal chandelier
                  </Link>
                  .
                </p>
              </div>
            </div>
            <div className="register-row">
              <h2>Should a brass chandelier be ready-made or custom?</h2>
              <div>
                <p>
                  <a href={CELESTIAL} target="_blank" rel="noopener noreferrer">Celestial Lights</a>
                  {" "}carries ready fittings for every room; if a brass or brass-coloured piece in the collection fits the room and the finish you need, it is a shelf fitting. When you need a diameter, a finish, or a drawing the collection does not have, send the diameter, the finish, and the ceiling height, and Elor makes the piece. The process, timeline, and what drives the cost are on{" "}
                  <Link href="/customisation" style={{ color: "var(--gold)" }}>
                    custom chandeliers
                  </Link>
                  , and budgeting is in the{" "}
                  <Link href="/guides/chandelier-pricing-guide" style={{ color: "var(--gold)" }}>
                    pricing guide
                  </Link>
                  . If the house is still being built,{" "}
                  <Link href="/consultation" style={{ color: "var(--gold)" }}>
                    book a lighting consultation
                  </Link>
                  {" "}and the piece is planned with the rest of the house.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec glow-top">
        <div className="wrap-tight">
          <Reveal>
            <h2 className="h-lg">Shelf, or made for the room</h2>
          </Reveal>
          <Reveal delay={0.06}>
            <ul className="check-list" style={{ marginTop: 28 }}>
              <li>
                <span className="tick">✓</span>
                A brass or brass-coloured piece already in the collection is a shelf fitting at{" "}
                <a href={CELESTIAL} target="_blank" rel="noopener noreferrer">Celestial Lights</a>.
              </li>
              <li>
                <span className="tick">✓</span>
                A diameter, a finish, or a drawing the collection does not have is made by Elor. Design is free with purchase from Celestial.
              </li>
              <li>
                <span className="tick">✓</span>
                Custom pieces are usually ready in 3 to 6 weeks. We install custom lights and give installation support for everything else. Warranty is up to 5 years.
              </li>
              <li>
                <span className="tick">✓</span>
                Kannur and Kozhikode are Celestial Lights stores. Kochi is the Elor experience centre.
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
              <Link href="/consultation" style={{ color: "var(--gold)" }}>
                Book a consultation
              </Link>
              . What a custom piece costs is in the{" "}
              <Link href="/guides/chandelier-pricing-guide" style={{ color: "var(--gold)" }}>
                pricing guide
              </Link>
              .
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
                <details className="faq-item" name="brass-chandelier">
                  <summary>{f.q}</summary>
                  <p className="faq-a">
                    {f.q === "Where do I see brass fittings?" ? (
                      <>
                        Shelf pieces are at{" "}
                        <a href={CELESTIAL} target="_blank" rel="noopener noreferrer">Celestial Lights</a>
                        . See the range at the shop for what is in the collection.
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
          <h2 className="h-lg">Rooms and materials</h2>
          <p className="lede" style={{ marginTop: 16 }}>
            {others.map((item, i) => (
              <span key={item.slug}>
                {i > 0 ? " · " : ""}
                <Link href={`/guides/${item.slug}`} style={{ color: "var(--gold)" }}>
                  {item.crumb}
                </Link>
              </span>
            ))}
          </p>
        </div>
      </section>

      <RelatedGuides currentSlug="brass-chandelier" />
    </>
  );
}
