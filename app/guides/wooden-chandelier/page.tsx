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

const TITLE = "Wooden Chandelier for Kerala Homes";
const DESC =
  "Choose a wooden chandelier for a Kerala home by the room and a finish specified for humidity. Buy ready from Celestial, or have Elor make one to match joinery.";
const PATH = "/guides/wooden-chandelier";
const CELESTIAL = "https://www.celestiallights.in";
const { updated: UPDATED, modified: MODIFIED } = guideDates(PATH);

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: PATH },
};

const faqs = [
  {
    q: "Is a wooden chandelier suitable in Kerala?",
    a: "In a dry, air-conditioned room, with a finish specified for humidity, it can be. In open salt air, untreated timber moves and fails. The coastal guide is the check before the material is chosen.",
  },
  {
    q: "Does a wooden chandelier suit a nalukettu or traditional house?",
    a: "Often, because it can match the rafters and pillars. Ask how it is finished for damp air if the room opens onto a courtyard, and keep the light warm and low.",
  },
  {
    q: "Do you have wooden chandeliers on the shelf?",
    a: "Whatever wood is in the current collection is at Celestial Lights. See the range and we will say what is actually there.",
  },
  {
    q: "Can you make a wooden piece to match the furniture?",
    a: "Yes. Send the timber, the span, and a photograph of the joinery. Elor designs and makes that piece, usually in 3 to 6 weeks. We install custom lights and give installation support for everything else.",
  },
  {
    q: "Does the ceiling hold a timber frame?",
    a: "The false ceiling does not. The anchor is in the slab, marked before the gypsum closes. Weight is covered in the false-ceiling guide.",
  },
];

// Article schema deliberately has no image: there is no wooden-piece photo
// in the library, and the retained showroom petal hero must not be marked up
// as one.
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: TITLE,
  description: DESC,
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

export default function WoodenChandelierGuide() {
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
              { name: "Wooden Chandelier", path: PATH },
            ])
          ),
        }}
      />

      <section className="page-hero">
        <div className="wrap-tight">
          <Breadcrumbs crumbs={[{ name: "Guides", path: "/guides" }, { name: "Wooden Chandelier", path: PATH }]} />
          <Reveal as="span"><span className="eyebrow">Buying guide · Updated {UPDATED}</span></Reveal>
          <Reveal delay={0.06}>
            <h1 className="h-xl" style={{ marginTop: 18 }}>
              Wood, where the<br /><span className="serif-i">air allows it.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <ul className="check-list" style={{ marginTop: 22 }}>
              <li><span className="tick">✓</span>Choose the room first.</li>
              <li><span className="tick">✓</span>Ask which timber and finish are meant for a humid room.</li>
              <li>
                <span className="tick">✓</span>
                Buy a ready piece from{" "}
                <a href={CELESTIAL} target="_blank" rel="noopener noreferrer">Celestial Lights</a>
                {" "}if it fits, or have Elor make one to match the joinery. Design is free with purchase from Celestial.
              </li>
            </ul>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="lede" style={{ marginTop: 22 }}>
              Choose a wooden chandelier for a Kerala home by the room first,
              then a timber and finish meant for humid air. Size it to the
              furniture, keep it clear of the fan, and fix it to the slab, not
              the false ceiling. Ready pieces are at{" "}
              <a href={CELESTIAL} target="_blank" rel="noopener noreferrer">Celestial Lights</a>.
              {" "}Elor makes custom ones to match the joinery.
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
                src="/video/showroom-petal.jpg"
                alt="Showroom pendants at Celestial Lights, Kannur"
                fill
                priority
                sizes="(max-width: 760px) 100vw, 760px"
              />
            </div>
            <figcaption className="form-note" style={{ marginTop: 12 }}>
              Showroom pendants at Celestial Lights, Kannur
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="register">
            <div className="register-row">
              <h2>Why choose a wooden chandelier?</h2>
              <div>
                <p>
                  Because it belongs with the rest of the house. Kerala homes
                  are full of timber: doors, window frames, ceilings,
                  staircases, and in traditional houses whole verandas and
                  courtyards. A wooden chandelier can pick up that joinery
                  instead of competing with it. It gives a warmer, quieter
                  light than crystal, and it reads as part of the architecture
                  rather than an object hung in the middle of the room.
                </p>
                <p style={{ marginTop: 16 }}>
                  It is a material decision before it is a shape. Choose the
                  room and the timber first, then the design.
                </p>
              </div>
            </div>

            <div className="register-row">
              <h2>Which rooms suit a wooden chandelier?</h2>
              <div>
                <p>
                  Rooms where the timber already is. A dining room with a
                  wooden table and a timber ceiling, a living room with wooden
                  joinery, a bedroom with a carved headboard, or a stair with
                  a wooden handrail are natural places. A modern apartment
                  with white walls and gypsum ceilings can also take one, as a
                  single warm object. The living room is covered in{" "}
                  <Link href="/guides/chandelier-for-living-room">chandelier for a living room</Link>
                  {" "}and the bedroom in{" "}
                  <Link href="/guides/bedroom-lighting-design">bedroom lighting</Link>.
                </p>
              </div>
            </div>

            <div className="register-row">
              <h2>Does a wooden chandelier suit a traditional Kerala house?</h2>
              <div>
                <p>
                  Often better than crystal does. In a nalukettu or a house
                  built around a central courtyard, a timber piece in the same
                  tone as the rafters or the pillars looks as if it was always
                  there. The care is with the air: a courtyard open to the
                  rain brings damp right into the rooms around it, so ask how
                  the piece is finished for that before choosing it. For a
                  heritage house, keep the light warm and low, so the timber
                  of the room glows rather than the fitting. Colour of light
                  is covered in{" "}
                  <Link href="/guides/colour-of-light">Kelvin, CRI, and beam</Link>.
                </p>
              </div>
            </div>

            <div className="register-row">
              <h2>What should I ask about timber and humidity?</h2>
              <div>
                <p>
                  Ask which timber is used, how it is finished, and whether
                  that finish is specified for a humid room. A finish chosen
                  for the room is part of the piece, not a coat added later.
                  Say which room the piece is for, and whether it is near a
                  bathroom, a kitchen, an open window, or a courtyard. Near
                  the coast, ask about the metal parts too: the brackets,
                  chains, and screws, because those are often what show wear
                  first. The{" "}
                  <Link href="/guides/coastal-lighting-kerala">coastal guide</Link>
                  {" "}covers what to ask for near the sea.
                </p>
                <div className="spec-wrap" style={{ marginTop: 16 }}>
                  <table className="spec-table">
                    <thead>
                      <tr>
                        <th>Ask</th>
                        <th>Why it matters</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Which timber is used?</td>
                        <td>Different woods move differently in humid air.</td>
                      </tr>
                      <tr>
                        <td>How is it finished, and is that finish meant for a humid room?</td>
                        <td>A finish chosen for the room is part of the piece, not a coat added later.</td>
                      </tr>
                      <tr>
                        <td>Is the room near a bathroom, kitchen, open window or courtyard?</td>
                        <td>Damp air is the risk, not the style of the house.</td>
                      </tr>
                      <tr>
                        <td>What metal is used for brackets, chains and screws?</td>
                        <td>Near the coast, the metal parts often show wear first.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p style={{ marginTop: 16 }}>
                  If the room is damp for much of the year, compare wood with
                  the alternatives before deciding. Crystal, glass, and sealed
                  metal are the usual ones. The comparison is in{" "}
                  <Link href="/guides/crystal-vs-glass-chandelier">crystal, glass, and acrylic</Link>
                  {" "}and the{" "}
                  <Link href="/guides/brass-chandelier">brass guide</Link>.
                </p>
              </div>
            </div>

            <div className="register-row">
              <h2>How should a wooden chandelier be lit and switched?</h2>
              <div>
                <p>
                  On its own switch, with a dimmer if the fitting and the
                  lamps support one. Many wooden designs throw light through
                  slats, cut-outs, or woven panels, so they draw patterns on
                  the ceiling and walls. Look at the piece lit in a dark room
                  before choosing it, because the shadows are part of the
                  design. Keep the lamps warm, so the timber reads as wood and
                  not as grey. If the piece is the only light in the room, it
                  will be either too bright to look at or too dim to use. The
                  cove and spots carry the room, and the chandelier sits on
                  top. How those layers are set out is in{" "}
                  <Link href="/guides/how-a-lighting-plan-is-built">how a lighting plan is built</Link>.
                </p>
              </div>
            </div>

            <div className="register-row">
              <h2>What size wooden chandelier do I need?</h2>
              <div>
                <p>
                  The same as any chandelier: size it to the furniture and the
                  ceiling, not the whole room. Over a dining table, the piece
                  follows the table. Over seating, it follows the seating
                  group. Timber pieces often look heavier than metal ones of
                  the same size, so when in doubt, go slightly smaller. In a
                  double-height void, the piece is seen from the stair and the
                  upper landing as well as from below, so judge it from above
                  too. The{" "}
                  <Link href="/guides/chandelier-size-calculator">size calculator</Link>
                  {" "}turns the room into a diameter and a drop.
                </p>
              </div>
            </div>

            <div className="register-row">
              <h2>Can a false ceiling hold a wooden chandelier?</h2>
              <div>
                <p>
                  No. A timber frame can be heavier than it looks, and gypsum
                  and POP do not carry a chandelier of any material. The
                  anchor goes into the slab before the ceiling closes. That
                  sequence is in the{" "}
                  <Link href="/guides/false-ceiling-chandelier-weight">false-ceiling guide</Link>
                  , and how the ceiling and its circuits are laid out is in{" "}
                  <Link href="/guides/ceiling-and-lighting-design">ceiling and lighting design</Link>.
                </p>
              </div>
            </div>

            <div className="register-row">
              <h2>Can a wooden chandelier hang near a ceiling fan?</h2>
              <div>
                <p>
                  Not on the same point, and not close. Most Kerala rooms run
                  a fan for much of the year. Give the fan and the chandelier
                  separate points far enough apart that the blades never reach
                  the piece and the moving air does not set it swaying. The
                  layouts are in{" "}
                  <Link href="/guides/chandelier-with-ceiling-fan">chandelier with a ceiling fan</Link>.
                </p>
              </div>
            </div>

            <div className="register-row">
              <h2>How do I clean a wooden chandelier?</h2>
              <div>
                <p>
                  With the power off at the breaker and a dry, soft cloth or
                  brush. Ask the maker what the finish tolerates before using
                  anything else on it, and keep water away from the lamp
                  holders and the wiring. If the piece has glass or crystal
                  parts, those are cleaned as in{" "}
                  <Link href="/guides/how-to-clean-a-crystal-chandelier">how to clean a crystal chandelier</Link>.
                </p>
              </div>
            </div>

            <div className="register-row">
              <h2>Should a wooden chandelier be ready-made or custom?</h2>
              <div>
                <p>
                  <a href={CELESTIAL} target="_blank" rel="noopener noreferrer">Celestial Lights</a>
                  {" "}carries ready fittings for every room. If a wooden piece
                  in the collection fits the room, the size, and the climate,
                  it is a shelf fitting. When the span, the timber, or the
                  finish has to match the joinery, send a photograph of the
                  joinery and the measurements, and Elor designs and makes the
                  piece. Design is free with purchase from Celestial. The
                  process, timeline, and what drives the cost are on{" "}
                  <Link href="/customisation">custom chandeliers</Link>.
                  {" "}If the house is still being built,{" "}
                  <Link href="/consultation">book a lighting consultation</Link>
                  {" "}and the piece is planned with the rest of the house. See{" "}
                  <Link href="/guides/home-lighting-design">home lighting design</Link>.
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
                If a wood piece in the collection fits the room and the
                climate, it is a shelf fitting at{" "}
                <a href={CELESTIAL} target="_blank" rel="noopener noreferrer">Celestial Lights</a>.
              </li>
              <li>
                <span className="tick">✓</span>
                If the span, the timber, or the finish has to match the
                joinery, Elor designs and makes it.
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
                <details className="faq-item" name="wooden-chandelier-faq">
                  <summary>{f.q}</summary>
                  <p className="faq-a">
                    {f.q === "Do you have wooden chandeliers on the shelf?" ? (
                      <>
                        Whatever wood is in the current collection is at{" "}
                        <a href={CELESTIAL} target="_blank" rel="noopener noreferrer">Celestial Lights</a>
                        . See the range and we will say what is actually there.
                      </>
                    ) : f.q === "Is a wooden chandelier suitable in Kerala?" ? (
                      <>
                        In a dry, air-conditioned room, with a finish specified
                        for humidity, it can be. In open salt air, untreated
                        timber moves and fails. The{" "}
                        <Link href="/guides/coastal-lighting-kerala">coastal guide</Link>
                        {" "}is the check before the material is chosen.
                      </>
                    ) : f.q === "Does the ceiling hold a timber frame?" ? (
                      <>
                        The false ceiling does not. The anchor is in the slab,
                        marked before the gypsum closes. Weight is covered in
                        the{" "}
                        <Link href="/guides/false-ceiling-chandelier-weight">false-ceiling guide</Link>.
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

      <RelatedGuides currentSlug="wooden-chandelier" />
    </>
  );
}
