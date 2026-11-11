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

const TITLE = "Home Lighting Design for Kerala Houses";
const CRUMB = "Home Lighting Design";
const DESC =
  "Home lighting design for Kerala houses: one plan for every room and the outside, drawn before the ceilings close, with consistent colour and separate circuits.";
const PATH = "/guides/home-lighting-design";
const CELESTIAL = "https://www.celestiallights.in";
const { updated: UPDATED, modified: MODIFIED } = guideDates(PATH);
const others = guideArticles.filter((item) => item.slug !== "home-lighting-design");

const faqs = [
  {
    q: "What is a home lighting design?",
    a: "A plan that places the light in every room, names the circuits, and marks the anchors before the false ceilings close. House lighting design means the same thing.",
  },
  {
    q: "When should I start the lighting plan for a new house?",
    a: "While the structure is going up, before conduits are concealed and ceilings close. Start from the architect's floor plans and a furniture layout.",
  },
  {
    q: "Do I need a plan if I only want a chandelier?",
    a: "The chandelier still needs a point, a drop, and an anchor. The rest of the room needs its own layers, or the piece becomes the only light. Send the floor plan and a photo either way.",
  },
  {
    q: "Can this be done from outside Kerala?",
    a: "The plan and the quotation can be done from drawings and video. Installation is arranged from the Kannur, Kozhikode, or Kochi centre, depending on the house. Kannur and Kozhikode trade as Celestial Lights. Kochi is the Elor experience centre.",
  },
  {
    q: "What is made, and what is from the shelf?",
    a: "Shelf fittings are at Celestial Lights. Elor writes the plan and makes the custom pieces, usually in 3 to 6 weeks. We install custom lights and give installation support for everything else. Warranty is up to 5 years.",
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

function FaqAnswer({ q, a }: { q: string; a: string }) {
  if (q === "Can this be done from outside Kerala?") {
    return (
      <>
        The plan and the quotation can be done from drawings and video. Installation is arranged from the Kannur, Kozhikode, or Kochi centre, depending on the house. Kannur and Kozhikode trade as{" "}
        <a href={CELESTIAL} target="_blank" rel="noopener noreferrer">Celestial Lights</a>
        . Kochi is the Elor experience centre.
      </>
    );
  }
  if (q === "What is made, and what is from the shelf?") {
    return (
      <>
        Shelf fittings are at{" "}
        <a href={CELESTIAL} target="_blank" rel="noopener noreferrer">Celestial Lights</a>
        . Elor writes the plan and makes the custom pieces, usually in 3 to 6 weeks. We install custom lights and give installation support for everything else. Warranty is up to 5 years.
      </>
    );
  }
  return <>{a}</>;
}

export default function HomeLightingDesignGuide() {
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
              The whole house,
              <br />
              <span className="serif-i">one lighting plan.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="lede" style={{ marginTop: 22 }}>
              Home lighting design for a Kerala house is one plan for every room and the outside, drawn while the ceilings are still open. It places each light against the furniture, gives every room separate circuits, keeps one colour of light through the house, sets fans and anchors, and chooses outdoor and bathroom fittings for the monsoon and the coast.
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
              <h2>What is home lighting design?</h2>
              <div>
                <p>
                  A drawing for the whole house that says where every light goes, which switch controls it, what it is fixed to, and what colour it is. House lighting design is the same search and the same job. It is different from choosing fittings room by room in a showroom, because it makes the decisions that have to be made before the electrician and the ceiling contractor finish: points, circuits, anchors, and depths.
                </p>
                <p style={{ marginTop: 16 }}>
                  The order we draw a plan in is set out in{" "}
                  <Link href="/guides/how-a-lighting-plan-is-built" style={{ color: "var(--gold)" }}>
                    how a lighting plan is built
                  </Link>
                  .
                </p>
              </div>
            </div>
            <div className="register-row">
              <h2>When should a house lighting plan be drawn?</h2>
              <div>
                <p>
                  Before the wiring is concealed and before any false ceiling closes. In a typical build the conduits go into the slab and the walls early, so the plan is most useful when the structure is going up. Start from the architect's floor plans and the furniture layout. If the house is already finished, a plan still helps, but changes then mean chasing walls or opening ceilings.
                </p>
              </div>
            </div>
            <div className="register-row">
              <h2>Which rooms should be planned first?</h2>
              <div>
                <p>
                  The ones whose ceilings and walls close earliest: kitchens, bathrooms, and the stair. Mark those points first. Living, dining, and bedrooms follow. Outside comes into the same drawing, not as an afterthought, because the gate, the path, the car porch, the sit-out, and the facade need conduits laid before the paving and the plaster.
                </p>
              </div>
            </div>
            <div className="register-row">
              <h2>Why should the whole house use one colour of light?</h2>
              <div>
                <p>
                  So the house does not change temperature as you walk through it. A warm living room opening onto a cold white corridor and a bluish kitchen looks like three different houses. Agree the colour temperature and colour rendering once, then make exceptions on purpose, for example a task light over a work counter. The three numbers to agree are in{" "}
                  <Link href="/guides/colour-of-light" style={{ color: "var(--gold)" }}>
                    Kelvin, CRI, and beam
                  </Link>
                  .
                </p>
              </div>
            </div>
            <div className="register-row">
              <h2>How should circuits and switches be planned?</h2>
              <div>
                <p>
                  Each room gets layers on separate switches: a general light, task light where work happens, and any decorative piece on its own. Switches go where people enter and where they stop, including two-way switching on the stair and beside the bed. The fan has its own regulator and point. A house planned this way can be lit for an evening, for guests, or for a function without every light in the room coming on at once.
                </p>
              </div>
            </div>
            <div className="register-row">
              <h2>How should the outside of a Kerala house be lit?</h2>
              <div>
                <p>
                  As its own set of circuits, planned with the rooms. The gate and the compound wall tell a visitor where to go. The path needs low light at the edges so nobody trips, without lamps shining into the eyes of someone walking up it. The car porch and the sit-out are rooms in their own right in a Kerala house, used most evenings, and deserve the same warm colour as the living room inside. The facade can be lit softly from below or from the slab edges, but a little goes a long way.
                </p>
                <p style={{ marginTop: 16 }}>
                  Put the outside lights on a timer or a sensor if you want them to come on reliably at dusk, and keep the sit-out on a switch by the door. Every one of these fittings faces the monsoon, so the rating and the finish matter more than the shape.
                </p>
              </div>
            </div>
            <div className="register-row">
              <h2>What changes in a Kerala house?</h2>
              <div>
                <p>
                  Fans run for much of the year, so every room's ceiling has to place the fan and the decorative light apart; see{" "}
                  <Link href="/guides/chandelier-with-ceiling-fan" style={{ color: "var(--gold)" }}>
                    chandelier with a ceiling fan
                  </Link>
                  . Many houses have a double-height void by the stair or the living room, and the piece in it hangs from the top slab; see{" "}
                  <Link href="/guides/staircase-lighting-design" style={{ color: "var(--gold)" }}>
                    staircase lighting
                  </Link>
                  . The monsoon keeps bathrooms, verandas, and courtyards damp for months, and the coast adds salt air.
                </p>
                <p style={{ marginTop: 16 }}>
                  A nalukettu or a courtyard open to the sky treats its edges as outdoors, so the fittings there need a weather rating; see{" "}
                  <Link href="/guides/ip-rating-for-outdoor-lights" style={{ color: "var(--gold)" }}>
                    IP rating for outdoor lights
                  </Link>
                  . Metal finishes near the sea need specifying, not choosing from a dry showroom; see the{" "}
                  <Link href="/guides/coastal-lighting-kerala" style={{ color: "var(--gold)" }}>
                    coastal guide
                  </Link>
                  . If you want a material that suits a traditional house, the{" "}
                  <Link href="/guides/wooden-chandelier" style={{ color: "var(--gold)" }}>
                    wooden chandelier
                  </Link>
                  {" "}and{" "}
                  <Link href="/guides/brass-chandelier" style={{ color: "var(--gold)" }}>
                    brass chandelier
                  </Link>
                  {" "}guides cover what to ask for.
                </p>
              </div>
            </div>
            <div className="register-row">
              <h2>How is each room handled?</h2>
              <div>
                <p>
                  The{" "}
                  <Link href="/guides/chandelier-for-living-room" style={{ color: "var(--gold)" }}>
                    living room
                  </Link>
                  {" "}sizes the chandelier to the seating. The{" "}
                  <Link href="/guides/ceiling-and-lighting-design" style={{ color: "var(--gold)" }}>
                    ceiling
                  </Link>
                  {" "}splits cove, spots, and the decorative piece onto separate circuits. The{" "}
                  <Link href="/guides/staircase-lighting-design" style={{ color: "var(--gold)" }}>
                    stair
                  </Link>
                  {" "}lights the tread and the void separately. The{" "}
                  <Link href="/guides/bedroom-lighting-design" style={{ color: "var(--gold)" }}>
                    bedroom
                  </Link>
                  {" "}keeps the lamp out of the eyes. The{" "}
                  <Link href="/guides/kitchen-lighting-design" style={{ color: "var(--gold)" }}>
                    kitchen
                  </Link>
                  {" "}gives the worktop its own light. Every decorative piece is fixed to the slab, not the false ceiling, as set out in the{" "}
                  <Link href="/guides/false-ceiling-chandelier-weight" style={{ color: "var(--gold)" }}>
                    false-ceiling guide
                  </Link>
                  , and placed where someone can reach it to clean it; see{" "}
                  <Link href="/guides/how-to-clean-a-crystal-chandelier" style={{ color: "var(--gold)" }}>
                    how to clean a crystal chandelier
                  </Link>
                  .
                </p>
              </div>
            </div>
            <div className="register-row">
              <h2>Can the plan be done if I am building from abroad?</h2>
              <div>
                <p>
                  The plan can start from drawings and video calls, which suits families building in Kerala while working elsewhere. Elor also designs lighting for sites elsewhere in India.
                </p>
              </div>
            </div>
            <div className="register-row">
              <h2>Should I buy ready fittings or have pieces made?</h2>
              <div>
                <p>
                  Most of a house is lit with ready fittings, and{" "}
                  <a href={CELESTIAL} target="_blank" rel="noopener noreferrer">Celestial Lights</a>
                  {" "}carries ready fittings for every room. A piece made for a particular void, ceiling, or picture is designed and made by Elor; the process, timeline, and what drives the cost are on{" "}
                  <Link href="/customisation" style={{ color: "var(--gold)" }}>
                    custom chandeliers
                  </Link>
                  , and budgeting is in the{" "}
                  <Link href="/guides/chandelier-pricing-guide" style={{ color: "var(--gold)" }}>
                    pricing guide
                  </Link>
                  . To start the plan,{" "}
                  <Link href="/consultation" style={{ color: "var(--gold)" }}>
                    book a lighting consultation
                  </Link>
                  {" "}with the floor plans. Comparing showrooms first? The{" "}
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
                Room by room, a fitting that already exists is a shelf piece at{" "}
                <a href={CELESTIAL} target="_blank" rel="noopener noreferrer">Celestial Lights</a>.
              </li>
              <li>
                <span className="tick">✓</span>
                The plan, and any light the house still needs, is designed and made by Elor. Design is free with purchase from Celestial.
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
                <details className="faq-item" name="home-lighting-design">
                  <summary>{f.q}</summary>
                  <p className="faq-a">
                    <FaqAnswer q={f.q} a={f.a} />
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

      <RelatedGuides currentSlug="home-lighting-design" />
    </>
  );
}
