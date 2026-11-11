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

const TITLE = "False Ceiling Lighting Design for Kerala";
const DESC =
  "False ceiling lighting design for Kerala homes: draw the furniture first, put cove, spots and the chandelier on separate circuits, and anchor it to the slab.";
const PATH = "/guides/ceiling-and-lighting-design";
const CELESTIAL = "https://www.celestiallights.in";
const { updated: UPDATED, modified: MODIFIED } = guideDates(PATH);

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: PATH },
};

const faqs: { q: string; a: string; visible?: "weight" | "fittings" }[] = [
  {
    q: "What is ceiling and lighting design?",
    a: "A marked ceiling that says where the cove, the spots, and the decorative piece go, which circuit each is on, and what the anchor is fixed to. It is drawn before the false ceiling closes.",
  },
  {
    q: "Should the chandelier be the only light?",
    a: "No. A single fitting in the middle leaves the walls dark and gives the room one level. Cove, spots, and task light stay in the plan. The chandelier sits on top of them.",
  },
  {
    q: "Can gypsum or POP hold a chandelier?",
    a: "No. The anchor goes into the slab while the ceiling is open, and the false ceiling is built around it. The false-ceiling guide sets out the sequence.",
    visible: "weight",
  },
  {
    q: "Why can I see the bulb in my false-ceiling downlights?",
    a: "The fitting is too shallow, or the lamp sits too close to the opening. A deeper baffle or a recessed lamp hides it. Check the depth each fitting needs before the ceiling height is fixed.",
  },
  {
    q: "Who draws the ceiling?",
    a: "Elor writes the lighting plan, in DIALux where the room needs a calculation, and marks the anchor before the ceiling closes. You can start with a floor plan and a photo.",
  },
  {
    q: "Where do the fittings come from?",
    a: "Ready fittings are at Celestial Lights. Anything the ceiling still needs, and that the collection does not have, is designed and made by Elor, usually in 3 to 6 weeks. We install custom lights and give installation support for everything else.",
    visible: "fittings",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: TITLE,
  description: DESC,
  image: `${site.domain}/photos/living-room.jpg`,
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

export default function CeilingLightingDesignGuide() {
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
              { name: "Ceiling and Lighting Design", path: PATH },
            ])
          ),
        }}
      />

      <section className="page-hero">
        <div className="wrap-tight">
          <Breadcrumbs crumbs={[{ name: "Guides", path: "/guides" }, { name: "Ceiling and Lighting Design", path: PATH }]} />
          <Reveal as="span"><span className="eyebrow">Technical · Updated {UPDATED}</span></Reveal>
          <Reveal delay={0.06}>
            <h1 className="h-xl" style={{ marginTop: 18 }}>
              Design the ceiling<br /><span className="serif-i">around the light.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="lede" style={{ marginTop: 22 }}>
              Design a false ceiling and its lighting together, before the
              gypsum closes. Draw the furniture first, then place three
              layers: cove for a soft wash, spots for tasks and paths, and a
              decorative piece over the seating or table. Give each its own
              circuit, fix the chandelier anchor to the slab, and leave the
              fan its own point.
            </p>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="lede" style={{ marginTop: 16 }}>
              Elor Lighting writes that plan. Ready fittings are at{" "}
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
              src="/photos/living-room.jpg"
              alt="A living room with lit shelves, a pendant, and warm seating"
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
              <h2>What is ceiling and lighting design?</h2>
              <div>
                <p>
                  It is the order of the work, not a folder of photographs. A
                  false ceiling in a Kerala home is usually gypsum or POP hung
                  below the RCC slab, and the lighting decides how deep it
                  needs to be, where it steps, and where the openings go. If
                  the ceiling is drawn first and the lights are fitted into
                  whatever space is left, the result is spots in the wrong
                  places, a cove that shows its LED strip, and a chandelier
                  with nothing solid above it.
                </p>
                <p style={{ marginTop: 16 }}>
                  The drawing that settles this is a reflected ceiling plan:
                  the ceiling seen from below, with every light, every fan,
                  every anchor, and every circuit marked. The method behind
                  it is{" "}
                  <Link href="/guides/how-a-lighting-plan-is-built">how a lighting plan is built</Link>.
                </p>
              </div>
            </div>

            <div className="register-row">
              <h2>Why should the furniture be drawn before the ceiling?</h2>
              <div>
                <p>
                  Because the light is for the furniture, not for the middle
                  of the room. The sofa, the dining table, the bed, and the
                  kitchen counter decide where the decorative piece hangs and
                  where task light falls. A tray ceiling centred on the room
                  but not on the seating puts the chandelier over the
                  walkway. Fix the furniture layout, even roughly, and centre
                  the ceiling features on it. Where a living and dining area
                  share one long hall, as in many Kerala homes, each end gets
                  its own ceiling feature and its own decorative light,
                  rather than one tray stretched across both. If the
                  furniture is likely to move, keep the decorative points
                  flexible by marking two anchor positions while the ceiling
                  is still open.
                </p>
              </div>
            </div>

            <div className="register-row">
              <h2>What do cove, spots, and the chandelier each do?</h2>
              <div>
                <p>
                  A cove washes the edge of the ceiling and makes the room
                  feel taller and calmer; it is the light for a quiet
                  evening. Spots mark a task or a path, or pick out a wall, a
                  picture, or a shelf. The chandelier or pendant is the
                  object in the room, the piece people notice. Put all three
                  on one switch and the room has one scene, brighter or
                  darker. On three circuits it has several, and that is most
                  of what makes a room feel designed.
                </p>
                <p style={{ marginTop: 16 }}>
                  Agree the colour of the lamps once for the room, so the
                  cove, the spots, and the chandelier match. The numbers are
                  in{" "}
                  <Link href="/guides/colour-of-light">Kelvin, CRI, and beam</Link>.
                </p>
              </div>
            </div>

            <div className="register-row">
              <h2>How deep should a false ceiling be for lighting?</h2>
              <div>
                <p>
                  Deep enough for the fittings you choose, which is why the
                  fittings are chosen first. A downlight with a deep baffle,
                  which hides the lamp from the sofa, needs more depth than a
                  flat panel. A trimless fitting needs room behind the
                  gypsum. A cove needs a lip high enough that the strip is
                  not seen from across the room. If the lamp is visible from
                  where people sit, the fitting was too shallow for the job.
                  That is{" "}
                  <Link href="/guides/why-downlights-glare">why a downlight glares</Link>
                  . Ask for the depth each fitting needs from its data sheet
                  before the ceiling height is fixed.
                </p>
              </div>
            </div>

            <div className="register-row">
              <h2>Can a false ceiling hold a chandelier?</h2>
              <div>
                <p>
                  No. Gypsum and POP are finishes, not structure. The
                  chandelier anchor goes into the slab, at a point marked
                  while the ceiling is open, and the false ceiling is built
                  around it. The same applies to a heavy pendant. Leave it
                  until after the ceiling closes and the choice is between
                  cutting the ceiling and hanging something lighter than you
                  wanted. The full sequence, and what each build-up can
                  carry, is in the{" "}
                  <Link href="/guides/false-ceiling-chandelier-weight">false-ceiling guide</Link>.
                </p>
              </div>
            </div>

            <div className="register-row">
              <h2>Where does the ceiling fan go?</h2>
              <div>
                <p>
                  On its own point, marked on the same drawing. Most Kerala
                  rooms need a fan for much of the year, and the fan competes
                  with the chandelier for the centre of the ceiling. Decide
                  which one takes the centre, then place the other far
                  enough away that the blades never reach it. A fan below
                  downlights also flickers the light as the blades pass, so
                  keep spots out of the circle the blades sweep. The usual
                  layouts are in{" "}
                  <Link href="/guides/chandelier-with-ceiling-fan">chandelier with a ceiling fan</Link>.
                </p>
              </div>
            </div>

            <div className="register-row">
              <h2>How does Kerala&apos;s humidity affect a false ceiling with lights?</h2>
              <div>
                <p>
                  Gypsum near a bathroom, under a leaking terrace, or beside
                  a nalukettu courtyard open to the rain sees damp for
                  months. Fittings in those ceilings should be chosen for
                  damp air, and drivers placed where they can be reached
                  without breaking the ceiling. Leave a way in: an access
                  panel near the drivers and the junctions saves a lot of
                  damage later. What fails first near the coast is in the{" "}
                  <Link href="/guides/coastal-lighting-kerala">coastal guide</Link>
                  , and the ratings are explained in{" "}
                  <Link href="/guides/ip-rating-for-outdoor-lights">IP rating for outdoor lights</Link>.
                </p>
              </div>
            </div>

            <div className="register-row">
              <h2>How does this apply room by room?</h2>
              <div>
                <p>
                  The living room centres the decorative piece on the
                  seating; see{" "}
                  <Link href="/guides/chandelier-for-living-room">chandelier for a living room</Link>
                  . The bedroom keeps spots away from the pillow; see{" "}
                  <Link href="/guides/bedroom-lighting-design">bedroom lighting</Link>
                  . The kitchen puts task light in front of the cook, not
                  behind; see{" "}
                  <Link href="/guides/kitchen-lighting-design">kitchen lighting</Link>
                  . A double-height void hangs from the top slab; see{" "}
                  <Link href="/guides/staircase-lighting-design">staircase lighting</Link>
                  . Whatever hangs from the ceiling has to be reachable for
                  cleaning; the routine is in{" "}
                  <Link href="/guides/how-to-clean-a-crystal-chandelier">how to clean a crystal chandelier</Link>.
                </p>
              </div>
            </div>

            <div className="register-row">
              <h2>Who draws the ceiling, and where do the fittings come from?</h2>
              <div>
                <p>
                  Elor writes the lighting plan, in DIALux where the room
                  needs a calculation, and marks the anchors before the
                  ceiling closes.{" "}
                  <Link href="/consultation">Book a lighting consultation</Link>
                  {" "}and start with a floor plan and a photo.{" "}
                  <a href={CELESTIAL} target="_blank" rel="noopener noreferrer">Celestial Lights</a>
                  {" "}carries ready fittings for every room. A piece made for
                  this ceiling is on{" "}
                  <Link href="/customisation">custom chandeliers</Link>
                  , and the{" "}
                  <Link href="/guides/how-to-choose-a-chandelier-shop">chandelier shop guide</Link>
                  {" "}lists what to ask anyone else. Design is free with
                  purchase from Celestial.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec glow-top">
        <div className="wrap-tight">
          <Reveal><h2 className="h-lg">Shelf, or made for the room?</h2></Reveal>
          <Reveal delay={0.06}>
            <ul className="check-list" style={{ marginTop: 28 }}>
              <li>
                <span className="tick">✓</span>
                Ready fittings for every room, including the ceiling, are
                shelf pieces at{" "}
                <a href={CELESTIAL} target="_blank" rel="noopener noreferrer">Celestial Lights</a>.
              </li>
              <li>
                <span className="tick">✓</span>
                A piece made for this ceiling, or a plan for the whole room,
                is Elor&apos;s work.
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
                <details className="faq-item" name="ceiling-design-faq">
                  <summary>{f.q}</summary>
                  <p className="faq-a">
                    {f.visible === "weight" ? (
                      <>
                        No. The anchor goes into the slab while the ceiling is
                        open, and the false ceiling is built around it. The{" "}
                        <Link href="/guides/false-ceiling-chandelier-weight">false-ceiling guide</Link>
                        {" "}sets out the sequence.
                      </>
                    ) : f.visible === "fittings" ? (
                      <>
                        Ready fittings are at{" "}
                        <a href={CELESTIAL} target="_blank" rel="noopener noreferrer">Celestial Lights</a>
                        . Anything the ceiling still needs, and that the
                        collection does not have, is designed and made by
                        Elor, usually in 3 to 6 weeks. We install custom
                        lights and give installation support for everything
                        else.
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

      <RelatedGuides currentSlug="ceiling-and-lighting-design" />
    </>
  );
}
