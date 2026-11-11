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

const TITLE = "Staircase Lighting for Kerala Homes";
const CRUMB = "Staircase Lighting Design";
const DESC =
  "Staircase lighting design for Kerala homes: light each tread without glare, hang the double-height void from the slab, and keep the fan clear of the cascade.";
const PATH = "/guides/staircase-lighting-design";
const CELESTIAL = "https://www.celestiallights.in";
const IMAGE = "/collections/staircase-cascade.jpg";
const IMAGE_ALT =
  "A red crystal cascade hung in a spiral stair, with a wall light on the landing";
const { updated: UPDATED, modified: MODIFIED } = guideDates(PATH);
const others = guideArticles.filter((item) => item.slug !== "staircase-lighting-design");

const faqs = [
  {
    q: "What does staircase lighting design include?",
    a: "Light on the treads, so each step reads at night without glare, and a decision about the void. The decorative piece, if there is one, hangs from the slab on its own anchor.",
  },
  {
    q: "What is the best way to light stair treads?",
    a: "Low lights in the wall beside the steps, or a small fitting at each tread, on their own circuit. Avoid a downlight on the landing aimed down the flight, because it glares at anyone climbing.",
  },
  {
    q: "Can a false ceiling at the top of the stair hold a cascade?",
    a: "No. The gypsum is a finish. The anchor is fixed to the slab while that ceiling is open. The false-ceiling guide sets out the sequence.",
  },
  {
    q: "How long should a staircase chandelier drop?",
    a: "Long enough to belong to the void, and short of the handrail and of anyone using the stair. Measure the clear height, use the size calculator, and draw the stair in section before ordering.",
  },
  {
    q: "How is a chandelier over a staircase cleaned?",
    a: "Not from a household ladder on the steps. Plan a stable platform or a way to lower the piece when the anchor is set. The crystal cleaning guide has the routine.",
  },
  {
    q: "Is a stair piece from the shelf or made?",
    a: "If the collection has a cascade that fits the width and the drop, it is at Celestial Lights. If it has to be made for that void, Elor designs and builds it, usually in 3 to 6 weeks. We install custom lights and give installation support for everything else.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: TITLE,
  description: DESC,
  image: `${site.domain}${IMAGE}`,
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

export default function StaircaseLightingDesignGuide() {
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
              Light the tread.
              <br />
              <span className="serif-i">Hang the void.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="lede" style={{ marginTop: 22 }}>
              Staircase lighting in a Kerala home is two separate decisions. First, light the edge of every tread so each step reads at night without a lamp glaring into your eyes. Second, if the stair has a double-height void, hang the decorative piece from the slab, clear of the handrail, with a way to reach it for cleaning.
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
                src={IMAGE}
                alt={IMAGE_ALT}
                fill
                priority
                sizes="(max-width: 760px) 100vw, 760px"
              />
            </div>
          </figure>
        </div>
      </section>

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="register">
            <div className="register-row">
              <h2>How should stair treads be lit?</h2>
              <div>
                <p>
                  The job is to show the edge of each step. A low light set into the wall beside the treads, or a small fitting at each tread, puts light where the foot goes. A wall washer along the flight can do the same over a wider stair. What fails is a downlight on the landing ceiling aimed down the flight: it lights the steps and glares straight into the eyes of anyone climbing. The fitting is chosen so the lamp stays hidden from someone on the stair. The same idea in a room is{" "}
                  <Link href="/guides/why-downlights-glare" style={{ color: "var(--gold)" }}>
                    why a downlight glares
                  </Link>
                  .
                </p>
                <p style={{ marginTop: 16 }}>
                  Put the tread lights on their own circuit, switchable from the top and the bottom of the flight. Late at night they are often the only light anyone needs, and the colour should be warm enough not to wake the house. Choosing the colour of light is covered in the{" "}
                  <Link href="/guides/colour-of-light" style={{ color: "var(--gold)" }}>
                    Kelvin, CRI, and beam guide
                  </Link>
                  .
                </p>
              </div>
            </div>
            <div className="register-row">
              <h2>What goes in a double-height stair void?</h2>
              <div>
                <p>
                  Many Kerala houses put the stair in a double-height void, often beside the living room or the entrance, and that void is where a cascade or a long chandelier usually goes. It is not a dining drop. The piece is sized to the void, not to a table, and it is seen from the floor, from every step of the flight, and from the upper landing, so it has to look right from above as well as below.
                </p>
                <p style={{ marginTop: 16 }}>
                  The bottom of the piece stays clear of anyone on the flight and of the handrail. A spiral or a turning stair makes this tighter, because the clear space changes at every step.{" "}
                  <Link href="/guides/chandelier-size-calculator" style={{ color: "var(--gold)" }}>
                    The size calculator
                  </Link>
                  {" "}is the first check. Then draw the stair in section, with the piece in it, before anything is ordered.
                </p>
              </div>
            </div>
            <div className="register-row">
              <h2>How should the landing and the stair wall be lit?</h2>
              <div>
                <p>
                  The landing is where people turn, stop, and sometimes look back down into the void, so it wants its own light rather than borrowed spill from the chandelier. A wall light at the turn, at a height nobody&rsquo;s head will meet, marks the change of direction. On a long straight flight, the wall beside the stair is often the best surface in the house for a picture light or a quiet wash, because everyone passes it slowly.
                </p>
                <p style={{ marginTop: 16 }}>
                  Keep the switching simple. The tread lights, the landing light, and the piece in the void are three circuits, each reachable from both ends of the stair. The decorative piece is then something you switch on for an evening or for guests, not the only way to see the steps. How circuits are grouped across a whole house is set out in{" "}
                  <Link href="/guides/how-a-lighting-plan-is-built" style={{ color: "var(--gold)" }}>
                    how a lighting plan is built
                  </Link>
                  .
                </p>
              </div>
            </div>
            <div className="register-row">
              <h2>Where is a staircase chandelier fixed?</h2>
              <div>
                <p>
                  To the slab at the top of the void, on its own anchor, set while the ceiling there is still open. A false ceiling at the top of the stair is a finish and does not carry the weight. Long cascades with many drops can be heavy, and the weight sits on that one point. What each ceiling build-up can and cannot hold is in the{" "}
                  <Link href="/guides/false-ceiling-chandelier-weight" style={{ color: "var(--gold)" }}>
                    false-ceiling guide
                  </Link>
                  .
                </p>
              </div>
            </div>
            <div className="register-row">
              <h2>Can a ceiling fan sit near a stair cascade?</h2>
              <div>
                <p>
                  Not close to it. Kerala homes run fans for much of the year, and a fan near the void sets the drops swinging and carries dust onto every strand. If the landing or the hall beside the stair needs a fan, keep it well away from the piece and give each its own point. The layouts that work are in{" "}
                  <Link href="/guides/chandelier-with-ceiling-fan" style={{ color: "var(--gold)" }}>
                    chandelier with a ceiling fan
                  </Link>
                  .
                </p>
              </div>
            </div>
            <div className="register-row">
              <h2>How does humidity affect staircase lighting?</h2>
              <div>
                <p>
                  A stair beside an open courtyard, as in a nalukettu, or a flight with a window that stays open through the monsoon, sees damp air for months. Fittings near the opening want a rating for that, and metal finishes should be specified for humidity, not chosen from a dry showroom. Untreated brass and iron mark near the coast. The{" "}
                  <Link href="/guides/coastal-lighting-kerala" style={{ color: "var(--gold)" }}>
                    coastal guide
                  </Link>
                  {" "}sets out what fails first, and{" "}
                  <Link href="/guides/ip-rating-for-outdoor-lights" style={{ color: "var(--gold)" }}>
                    IP rating for outdoor lights
                  </Link>
                  {" "}explains the numbers.
                </p>
              </div>
            </div>
            <div className="register-row">
              <h2>How do I clean a chandelier over a staircase?</h2>
              <div>
                <p>
                  Decide this before the piece is bought. A cascade over a flight cannot be reached from a household ladder on the steps. It needs a stable platform or a fixing that lets the piece be lowered, and a second person. Plan the access with the anchor. The routine itself, with the power off at the breaker, is in{" "}
                  <Link href="/guides/how-to-clean-a-crystal-chandelier" style={{ color: "var(--gold)" }}>
                    how to clean a crystal chandelier
                  </Link>
                  .
                </p>
              </div>
            </div>
            <div className="register-row">
              <h2>Should a stair piece be ready-made or custom?</h2>
              <div>
                <p>
                  If the collection has a cascade that fits the width and the drop, it is at{" "}
                  <a href={CELESTIAL} target="_blank" rel="noopener noreferrer">Celestial Lights</a>
                  . Measure the void first and compare its width and height with that piece, not with photographs. A stair that turns, a void that does not match a ready piece, or joinery the finish has to match is where a made piece earns its place: send the section and a picture, and Elor designs it. How custom work runs, and what drives the cost, is on{" "}
                  <Link href="/customisation" style={{ color: "var(--gold)" }}>
                    custom chandeliers
                  </Link>
                  .
                </p>
                <p style={{ marginTop: 16 }}>
                  If the wiring and the ceiling are still open, start with the section through the stair.{" "}
                  <Link href="/consultation" style={{ color: "var(--gold)" }}>
                    Book a lighting consultation
                  </Link>
                  {" "}and the stair is planned with the rest of the house. The{" "}
                  <Link href="/guides/home-lighting-design" style={{ color: "var(--gold)" }}>
                    home lighting design guide
                  </Link>
                  {" "}covers that whole-house plan, and if the void opens onto the hall, the{" "}
                  <Link href="/guides/chandelier-for-living-room" style={{ color: "var(--gold)" }}>
                    living room guide
                  </Link>
                  {" "}covers the room beside it. Comparing showrooms first? The{" "}
                  <Link href="/guides/how-to-choose-a-chandelier-shop" style={{ color: "var(--gold)" }}>
                    chandelier shop guide
                  </Link>
                  {" "}lists what to ask.
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
                A cascade already in the collection is a shelf piece at{" "}
                <a href={CELESTIAL} target="_blank" rel="noopener noreferrer">Celestial Lights</a>.
              </li>
              <li>
                <span className="tick">✓</span>
                A void with an odd width, a turn, or a finish that has to match the joinery is made by Elor. Design is free with purchase from Celestial.
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
                <details className="faq-item" name="staircase-lighting-design">
                  <summary>{f.q}</summary>
                  <p className="faq-a">
                    {f.q === "Is a stair piece from the shelf or made?" ? (
                      <>
                        If the collection has a cascade that fits the width and the drop, it is at{" "}
                        <a href={CELESTIAL} target="_blank" rel="noopener noreferrer">Celestial Lights</a>
                        . If it has to be made for that void, Elor designs and builds it, usually in 3 to 6 weeks. We install custom lights and give installation support for everything else.
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

      <RelatedGuides currentSlug="staircase-lighting-design" />
    </>
  );
}
