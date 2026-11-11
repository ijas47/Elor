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

const TITLE = "Living Room Chandelier for Kerala Homes";
const DESC =
  "How to choose a living room chandelier for a Kerala home: size it to the seating, keep it apart from the fan, anchor it to the slab, and suit it to humidity.";
const PATH = "/guides/chandelier-for-living-room";
const CELESTIAL = "https://www.celestiallights.in";
const { updated: UPDATED, modified: MODIFIED } = guideDates(PATH);

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: PATH },
};

const faqs: { q: string; a: string; visible?: "size" | "fan" }[] = [
  {
    q: "What size chandelier works in a Kerala living room?",
    a: "Size it to the seating group and the ceiling height, not to the full length of the hall. The chandelier size calculator on this site turns those two measurements into a diameter and a drop.",
    visible: "size",
  },
  {
    q: "Can I have a chandelier and a ceiling fan in the same living room?",
    a: "Yes, on separate points with their own anchors, far enough apart that the blades never reach the piece. The fan guide covers the usual layouts.",
    visible: "fan",
  },
  {
    q: "Can the living-room false ceiling hold the chandelier?",
    a: "No. Gypsum and POP do not carry the weight. The anchor goes into the slab before the false ceiling closes, and the ceiling is built around it.",
  },
  {
    q: "Will a chandelier survive Kerala's humidity?",
    a: "The right one will. Choose the drops for how much cleaning you will do, and ask for a sealed finish on the metal, especially near the coast or beside an open courtyard.",
  },
  {
    q: "How should a chandelier in a double-height living room be planned?",
    a: "Size the drop to where it is seen from, including the stair and the upper landing. Fix the anchor to the top slab and plan access for cleaning and lamp changes at the same time.",
  },
  {
    q: "When is a living-room chandelier custom?",
    a: "When the ceiling, the reference picture, or the drop is not a stock size. Elor designs and makes that piece. Custom work is usually ready in 3 to 6 weeks. We install custom lights and give installation support for everything else.",
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

export default function LivingRoomChandelierGuide() {
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
              { name: "Chandelier for a Living Room", path: PATH },
            ])
          ),
        }}
      />

      <section className="page-hero">
        <div className="wrap-tight">
          <Breadcrumbs crumbs={[{ name: "Guides", path: "/guides" }, { name: "Chandelier for a Living Room", path: PATH }]} />
          <Reveal as="span"><span className="eyebrow">Buying guide · Updated {UPDATED}</span></Reveal>
          <Reveal delay={0.06}>
            <h1 className="h-xl" style={{ marginTop: 18 }}>
              A living room chandelier<br /><span className="serif-i">for a Kerala home.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="lede" style={{ marginTop: 22 }}>
              Choose a living room chandelier in Kerala by the seating group,
              not the whole hall. Keep it off the fan&apos;s point, fix it to
              the slab before the false ceiling closes, and pick a finish that
              stands the humidity. Put it on its own switch. Ready pieces are
              at{" "}
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
              alt="A living room at night with lit display shelves, a wood coffee table, and warm seating"
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
              <h2>What size chandelier suits a Kerala living room?</h2>
              <div>
                <p>
                  Size it to the part of the room where people sit. Many
                  Kerala halls run straight into the dining area, sometimes
                  into the foyer as well, and a diameter taken from the full
                  length of that space lands too large once the sofas are in.
                  Measure the seating group, then the clear height from floor
                  to finished ceiling. The{" "}
                  <Link href="/guides/chandelier-size-calculator">chandelier size calculator</Link>
                  {" "}turns those two numbers into a diameter and a drop. Use
                  it before anyone orders a fitting from a photograph, because
                  a photograph never shows the ceiling height it was taken
                  under.
                </p>
                <p style={{ marginTop: 16 }}>
                  The bottom of the piece has to clear anyone walking past,
                  and it should not sit in the line of sight between two
                  people talking across the sofas. If the dining table shares
                  the room, the dining area usually gets its own light. One
                  large piece trying to cover both ends up in the wrong place
                  for each.
                </p>
              </div>
            </div>

            <div className="register-row">
              <h2>Can a chandelier and a ceiling fan share a living room?</h2>
              <div>
                <p>
                  Yes, but not the same point. In most Kerala homes the fan
                  runs for much of the year, so the living room has to work
                  with it rather than around it. The fan and the chandelier
                  each get their own position and their own anchor, far
                  enough apart that the blades never reach the piece and the
                  fan does not set the drops swinging. A fan moving air past
                  crystal also carries dust onto it, which matters later when
                  the piece needs cleaning.
                </p>
                <p style={{ marginTop: 16 }}>
                  Where the ceiling is only one storey high, a low,
                  close-fitting piece over the seating with the fan elsewhere
                  is often the cleaner answer. The usual layouts and
                  clearances are in{" "}
                  <Link href="/guides/chandelier-with-ceiling-fan">chandelier with a ceiling fan</Link>.
                </p>
              </div>
            </div>

            <div className="register-row">
              <h2>What changes in a double-height living room?</h2>
              <div>
                <p>
                  A double-height void, common in Kerala villas and in homes
                  built by families working abroad, gives the chandelier more
                  room and makes every decision harder to undo. The piece is
                  seen from the floor, from the stair, and from the upper
                  landing, so it has to read from above as well as below. The
                  drop is set by where it is seen from, not by a stock length.
                </p>
                <p style={{ marginTop: 16 }}>
                  The anchor goes into the slab at the top of the void, and
                  the wiring and access are planned at the same time. Someone
                  will need to reach that piece to clean it and to change a
                  lamp. If the stair wraps the void, the{" "}
                  <Link href="/guides/staircase-lighting-design">staircase lighting guide</Link>
                  {" "}covers the clearances from the flight and the handrail.
                </p>
              </div>
            </div>

            <div className="register-row">
              <h2>Can a false ceiling hold a living room chandelier?</h2>
              <div>
                <p>
                  The decorative ceiling does not carry the weight. Gypsum
                  and POP are finishes, not structure. The fixing goes into
                  the RCC slab, on a point marked while the false ceiling is
                  still open, and the ceiling is then built around it. Leave
                  that until the gypsum has closed and the choices are to cut
                  the ceiling or to hang something lighter than you wanted.
                  What each ceiling build-up can and cannot hold is in the{" "}
                  <Link href="/guides/false-ceiling-chandelier-weight">false-ceiling guide</Link>.
                </p>
                <p style={{ marginTop: 16 }}>
                  The same moment is when the circuits are decided. Cove
                  light, spots, and the chandelier are three jobs and work
                  better on three switches, so the room can be bright for
                  guests and soft in the evening. How that is laid out is in{" "}
                  <Link href="/guides/ceiling-and-lighting-design">ceiling and lighting design</Link>.
                </p>
              </div>
            </div>

            <div className="register-row">
              <h2>Which chandelier material lasts in Kerala&apos;s humidity?</h2>
              <div>
                <p>
                  Crystal, glass, and acrylic all behave differently in
                  weight, in the light they give, and in how much cleaning
                  they ask for. Crystal sparkles most and shows dust most.
                  Glass glows rather than sparkles and is more forgiving. The
                  comparison is in{" "}
                  <Link href="/guides/crystal-vs-glass-chandelier">crystal, glass, and acrylic</Link>.
                </p>
                <p style={{ marginTop: 16 }}>
                  The metal matters as much as the drops. A living room near
                  the coast in Kochi, Kannur, or Kozhikode, or one opening
                  onto a nalukettu courtyard, sees damp air for months.
                  Untreated brass and iron mark in salt air, so ask for the
                  finish in writing. The{" "}
                  <Link href="/guides/brass-chandelier">brass guide</Link>
                  {" "}and the{" "}
                  <Link href="/guides/coastal-lighting-kerala">coastal guide</Link>
                  {" "}explain what to ask for. For a traditional house where
                  a crystal piece would look out of place, the{" "}
                  <Link href="/guides/wooden-chandelier">wooden chandelier guide</Link>
                  {" "}is the other route.
                </p>
              </div>
            </div>

            <div className="register-row">
              <h2>How should a living room chandelier be switched?</h2>
              <div>
                <p>
                  On its own switch, and ideally on a dimmer if the fitting
                  and the lamps support one. A chandelier is the object
                  people notice, but it is rarely the light anyone wants for
                  a quiet evening with the fan on and the television running.
                  Lamps beside the sofa and a soft cove carry most evenings.
                  The chandelier comes on when guests arrive, for a function,
                  or for an occasion such as Onam or a wedding visit. Choose
                  a warm colour of light so it flatters skin and wood; the{" "}
                  <Link href="/guides/colour-of-light">Kelvin, CRI, and beam guide</Link>
                  {" "}explains the numbers on the box.
                </p>
              </div>
            </div>

            <div className="register-row">
              <h2>How do I keep a living room chandelier clean?</h2>
              <div>
                <p>
                  Plan for it before you buy. A piece over the seating at
                  normal height can be wiped in place from a stable platform.
                  A piece in a double-height void needs proper access, so
                  decide at the start who will clean it and how. The routine,
                  with the power off at the breaker, is in{" "}
                  <Link href="/guides/how-to-clean-a-crystal-chandelier">how to clean a crystal chandelier</Link>.
                </p>
              </div>
            </div>

            <div className="register-row">
              <h2>Should I buy a ready chandelier or have one made?</h2>
              <div>
                <p>
                  If a piece in the collection already fits the seating, the
                  ceiling height, and the finish you want, it is a shelf
                  fitting from{" "}
                  <a href={CELESTIAL} target="_blank" rel="noopener noreferrer">Celestial Lights</a>
                  . You can see it at the Celestial Lights stores in Kannur
                  and Kozhikode, or at the Elor experience centre in Kochi.
                  When the void is unusual, the ceiling has an off-centre
                  beam, or the picture you have saved is not something anyone
                  stocks, Elor designs and makes the piece. Design is free
                  with purchase from Celestial. How that works, with
                  timelines and what drives the cost, is on{" "}
                  <Link href="/customisation">custom chandeliers</Link>
                  , and the{" "}
                  <Link href="/guides/chandelier-pricing-guide">pricing guide</Link>
                  {" "}covers budgeting.
                </p>
                <p style={{ marginTop: 16 }}>
                  If the ceiling is still open and the room is still being
                  drawn, start with the plan rather than the piece.{" "}
                  <Link href="/consultation">Book a lighting consultation</Link>
                  {" "}and the living room is planned with the rest of the
                  house before anything is bought. The method is in{" "}
                  <Link href="/guides/how-a-lighting-plan-is-built">how a lighting plan is built</Link>.
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
                A living-room piece that already exists in the collection is
                a shelf fitting at{" "}
                <a href={CELESTIAL} target="_blank" rel="noopener noreferrer">Celestial Lights</a>.
              </li>
              <li>
                <span className="tick">✓</span>
                A double-height void, an off-centre beam, or a picture nobody
                stocks is a piece Elor designs and makes.
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
                <details className="faq-item" name="living-room-faq">
                  <summary>{f.q}</summary>
                  <p className="faq-a">
                    {f.visible === "size" ? (
                      <>
                        Size it to the seating group and the ceiling height,
                        not to the full length of the hall. The{" "}
                        <Link href="/guides/chandelier-size-calculator">chandelier size calculator</Link>
                        {" "}on this site turns those two measurements into a
                        diameter and a drop.
                      </>
                    ) : f.visible === "fan" ? (
                      <>
                        Yes, on separate points with their own anchors, far
                        enough apart that the blades never reach the piece.
                        The{" "}
                        <Link href="/guides/chandelier-with-ceiling-fan">fan guide</Link>
                        {" "}covers the usual layouts.
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

      <RelatedGuides currentSlug="chandelier-for-living-room" />
    </>
  );
}
