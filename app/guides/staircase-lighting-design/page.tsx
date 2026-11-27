import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { site } from "@/lib/site";
import { guideDates } from "@/lib/guides";
import { breadcrumbSchema } from "@/lib/schema";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Reveal } from "@/components/motion/Reveal";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { RelatedGuides } from "@/components/ui/RelatedGuides";
import { guideArticles } from "@/lib/guide-articles";

const TITLE = "Staircase Lighting Design for Indian Homes";
const H1 = "Staircase lighting design: light the tread, hang the void";
const CRUMB = "Staircase Lighting Design";
const DESC =
  "Staircase lighting design for Indian homes: light each tread without glare, hang the void piece from the slab, and keep the fan clear of the cascade.";
const PATH = "/guides/staircase-lighting-design";
const CELESTIAL = "https://www.celestiallights.in";
const HERO_IMAGE = "/images/guides/staircase-lighting-design/crystal-cascade-staircase.webp";
const HERO_ALT = "A red crystal cascade hung in a spiral stair, with a wall light on the landing";
const BODY_IMAGE = "/images/guides/staircase-lighting-design/stair-tread-lighting.webp";
const BODY_ALT = "A staircase with small lights in the treads and a wall light on the landing";
const { updated: UPDATED, modified: MODIFIED } = guideDates(PATH);
const others = guideArticles.filter((item) => item.slug !== "staircase-lighting-design");

function plain(text: string) {
  return text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, "$1");
}

function Rich({ text }: { text: string }) {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g);
  return (
    <>
      {parts.map((part, i) => {
        const m = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
        if (!m) return <span key={i}>{part}</span>;
        const [, label, href] = m;
        if (href.startsWith("http")) {
          return (
            <a key={i} href={href} target="_blank" rel="noopener noreferrer" style={{ color: "var(--gold)" }}>
              {label}
            </a>
          );
        }
        return (
          <Link key={i} href={href} style={{ color: "var(--gold)" }}>
            {label}
          </Link>
        );
      })}
    </>
  );
}

function Row({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="register-row">
      <h2>{title}</h2>
      <div>{children}</div>
    </div>
  );
}

function Para({ text, first = false }: { text: string; first?: boolean }) {
  return (
    <p style={first ? undefined : { marginTop: 16 }}>
      <Rich text={text} />
    </p>
  );
}

function Sub({ title, text }: { title: string; text: string }) {
  return (
    <>
      <h3 style={{ marginTop: 24, fontSize: "1.05rem" }}>{title}</h3>
      <p style={{ marginTop: 8 }}>
        <Rich text={text} />
      </p>
    </>
  );
}

const ticks = [
  "Light the edge of every step, low down, with the lamp hidden from anyone climbing.",
  "Put the tread lights on their own circuit, switched from the top and the bottom.",
  "Hang any piece in a double-height void from the slab, clear of the handrail, with a way to reach it.",
];

const shelfTicks = [
  "A ready piece that fits the void is bought ready.",
  "A void with an odd width, a turn, or a finish that has to match the joinery is made by Elor.",
  "Custom pieces are usually ready in 3 to 6 weeks. We install custom lights and give installation support for everything else. Warranty is up to 5 years.",
  "Kannur and Kozhikode are Celestial Lights stores. The Elor experience centre in Kochi is opening soon.",
];

const faqs = [
  {
    q: "What does staircase lighting design include?",
    a: "Light on the treads, so each step reads at night without glare, and a decision about the void. The decorative piece, if there is one, hangs from the slab on its own anchor.",
  },
  {
    q: "What is the best lighting for stairs?",
    a: "Low lights in the wall beside the steps, or a small fitting at each tread, on their own circuit and switched from the top and the bottom. Avoid a downlight on the landing aimed down the flight, because it glares at anyone climbing.",
  },
  {
    q: "Can a false ceiling at the top of the stair hold a cascade?",
    a: "No. POP carries no load, and gypsum on a GI frame takes only a light fitting of a few kilograms. The anchor is fixed to the RCC slab while that ceiling is open. The false-ceiling guide sets out the sequence.",
  },
  {
    q: "How high should a staircase chandelier hang?",
    a: "Keep the bottom at least 2.1 m above anywhere people walk, and clear of the handrail. A cascade in a double-height void is sized to the real drop between floors and to where it is seen from, often the landing. Use the size calculator, then draw the stair in section before ordering.",
  },
  {
    q: "How is a chandelier over a staircase cleaned?",
    a: "Not from a household ladder on the steps. Plan a stable platform or a way to lower the piece when the anchor is set. The crystal cleaning guide has the routine.",
  },
  {
    q: "Is a stair piece from the shelf or made?",
    a: "If a ready piece fits the width and the drop, buy it ready from Celestial Lights. If it has to be made for that void, Elor designs and builds it, usually in 3 to 6 weeks. We install custom lights and give installation support for everything else.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: H1,
  description: DESC,
  image: `${site.domain}${HERO_IMAGE}`,
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
    acceptedAnswer: { "@type": "Answer", text: plain(f.a) },
  })),
};

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: PATH },
  openGraph: {
    title: TITLE,
    description: DESC,
    images: [{ url: HERO_IMAGE, width: 992, height: 962, alt: HERO_ALT }],
  },
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
              {H1}
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <ul className="check-list" style={{ marginTop: 28 }}>
              {ticks.map((t) => (
                <li key={t}>
                  <span className="tick">✓</span>
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="lede" style={{ marginTop: 22 }}>
              Staircase lighting design for an Indian home is two separate decisions. First, light the edge of every tread so each step reads at night without a lamp glaring into your eyes. Second, if the stair has a double-height void, hang the decorative piece from the slab, clear of the handrail, with a way to reach it for cleaning.
            </p>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="lede" style={{ marginTop: 16 }}>
              Most stair lighting goes wrong because both jobs are handed to one fitting, usually a downlight or a chandelier. Below: the treads, the main stair types, the void, the landing, and switching.
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
            <Image src={HERO_IMAGE} alt={HERO_ALT} fill priority sizes="(max-width: 760px) 100vw, 760px" />
          </div>
        </div>
      </section>

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="register">
            <Row title="How should stair treads be lit?">
              <Para first text="The job is to show the edge of each step. A low light set into the wall beside the treads, or a small fitting at each tread, puts light where the foot goes. A wall washer along the flight can do the same over a wider stair." />
              <figure style={{ marginTop: 24, marginBottom: 0 }}>
                <div
                  style={{
                    position: "relative",
                    aspectRatio: "4 / 3",
                    borderRadius: 18,
                    overflow: "hidden",
                  }}
                >
                  <Image src={BODY_IMAGE} alt={BODY_ALT} fill sizes="(max-width: 760px) 100vw, 480px" />
                </div>
              </figure>
              <Para text="What fails is a downlight on the landing ceiling aimed down the flight. It lights the steps and glares straight into the eyes of anyone climbing. The fitting is chosen so the lamp stays hidden from someone on the stair. The same idea in a room is [why a downlight glares](/guides/why-downlights-glare), and where downlights should go in the hall beside the stair is in [the downlight placement guide](/guides/downlight-placement)." />
              <Para text="The catch with wall and tread lights is timing. Each one needs a wire in the wall or the tread, so the points have to be marked before the plaster and the stone go on. Adding them later means cutting finished walls." />
            </Row>

            <Row title="How does staircase lighting change by stair type?">
              <Para first text="The rule stays the same on every stair: light the tread edge, hide the lamp, and switch from both ends. Where the light and the switch go depends on the shape of the stair." />
              <Sub
                title="Straight flight against a wall"
                text="This is the simplest stair to light. The tread lights go low in the wall that runs along the flight, one beside each step or every few steps, all on one line. The switch goes at the bottom of the flight and again at the top."
              />
              <Sub
                title="Dog-leg or U stair with a landing"
                text="Here the flight turns, so there are two runs and a landing between them. Each run gets its own tread lights on the wall side, and the landing gets its own light, often a wall light at the turn. The switches go at the bottom and the top, so you never climb in the dark to reach a switch on the landing. The turn is where people slow down, so it should never be the darkest part of the stair."
              />
              <Sub
                title="Open or floating treads"
                text="With open treads there is often no wall on one side, and sometimes no riser behind each step. Light can only come from the wall side, or from a small fitting built into each tread. Either way, the wiring path has to be decided with the joinery or the steel work, before the treads are fixed. This is the hardest stair to add light to later. Switching is the same: bottom and top."
              />
              <Sub
                title="Spiral stair"
                text="A spiral has no long straight wall, and the clear space changes at every step. Tread light usually comes from the outer wall, if there is one, or from small fittings on each tread. Plan the switch at the bottom and at the top landing. A piece hung in the middle has to clear every step and the handrail, so draw it in section first."
              />
            </Row>

            <Row title="What goes in a double-height stair void?">
              <Para first text="Many Kerala houses put the stair in a double-height void, often beside the living room or the entrance. The same layout is common in duplexes and villas across India, and that void is where a cascade or a long chandelier usually goes. It is not a dining drop. The piece is sized to the void, not to a table. It is seen from the floor, from every step of the flight, and from the upper landing, so it has to look right from above as well as below." />
              <Para text="The bottom of the piece stays clear of anyone on the flight and of the handrail. A spiral or a turning stair makes this tighter, because the clear space changes at every step. [The size calculator](/guides/chandelier-size-calculator) is the first check. Then draw the stair in section, with the piece in it, before anything is ordered." />
            </Row>

            <Row title="How should the landing and the stair wall be lit?">
              <Para first text="The landing is where people turn, stop, and sometimes look back down into the void, so it wants its own light rather than borrowed spill from the chandelier. A wall light at the turn, at a height nobody's head will meet, marks the change of direction." />
              <Para text="Staircase wall lights work best when they do one clear job: mark the turn, light a picture, or wash the wall. On a long straight flight, the wall beside the stair is often the best surface in the house for a picture light or a quiet wash. Keep the fittings shallow enough that a shoulder or a bag does not catch them on a narrow stair." />
            </Row>

            <Row title="Where is a staircase chandelier fixed?">
              <Para first text="To the slab at the top of the void, on its own anchor, set while the ceiling there is still open. A false ceiling at the top of the stair is a finish and does not carry the weight. POP carries no load. Gypsum on a GI frame takes only a light fitting of a few kilograms, at a framing intersection. A chandelier is anchored into the RCC slab above." />
              <Para text="Long cascades with many drops can be heavy, and the weight sits on that one point. What each ceiling build-up can and cannot hold is in the [false-ceiling guide](/guides/false-ceiling-chandelier-weight)." />
            </Row>

            <Row title="Can a ceiling fan sit near a stair cascade?">
              <Para first text="Not close to it. Kerala homes run fans for much of the year, and a fan near the void sets the drops swinging and carries dust onto every strand. If the landing or the hall beside the stair needs a fan, keep it well away from the piece and give each its own point. The layouts that work are in [chandelier with a ceiling fan](/guides/chandelier-with-ceiling-fan)." />
            </Row>

            <Row title="How should stair lights be switched for night use?">
              <Para first text="Use three circuits: the tread lights, the landing light, and the piece in the void. Each one should be reachable from both ends of the stair, so two-way switching at the top and the bottom." />
              <Para text="The tread lights are the most important of the three. Late at night they are often the only light anyone needs, and the colour should be warm enough not to wake the house. Choosing the colour of light is covered in the [Kelvin, CRI, and beam guide](/guides/colour-of-light)." />
              <Para text="The decorative piece is then something you switch on for an evening or for guests, not the only way to see the steps. How circuits are grouped across a whole house is set out in [how a lighting plan is built](/guides/how-a-lighting-plan-is-built)." />
            </Row>

            <Row title="How does humidity affect staircase lighting?">
              <Para first text="A stair beside an open courtyard, as in a Kerala nalukettu, or a flight with a window that stays open through the monsoon, sees damp air for months. Fittings near the opening want a rating for that, and metal finishes should be specified for humidity, not chosen from a dry showroom. Untreated brass and iron mark near the coast. The [coastal guide](/guides/coastal-lighting-kerala) sets out what fails first, and [IP rating for outdoor lights](/guides/ip-rating-for-outdoor-lights) explains the numbers." />
            </Row>

            <Row title="How do I clean a chandelier over a staircase?">
              <Para first text="Decide this before the piece is bought. A cascade over a flight cannot be reached from a household ladder on the steps. It needs a stable platform or a fixing that lets the piece be lowered, and a second person. Plan the access with the anchor. This is the real cost of a piece in a void: cleaning it is a planned job, not a quick wipe. The routine itself, with the power off at the breaker, is in [how to clean a crystal chandelier](/guides/how-to-clean-a-crystal-chandelier)." />
            </Row>

            <Row title="Should a stair piece be ready-made or custom?">
              <Para first text="Buy ready if a ready piece fits the width and the drop of the void. Measure the void first and compare its width and height with the piece, not with photographs. Ready fittings are at [Celestial Lights, our sister store](https://www.celestiallights.in), at wholesale best rates, and we can match any quote." />
              <Para text="A stair that turns, a void that does not match a ready piece, or joinery the finish has to match is where a made piece earns its place. Send the section and a picture, and Elor designs it. A made piece takes longer than buying ready, usually 3 to 6 weeks. How custom work runs, and what drives the cost, is on [custom chandeliers](/customisation)." />
              <Para text="If the wiring and the ceiling are still open, start with the section through the stair. [Book a lighting consultation](/consultation) and the stair is planned with the rest of the house. Design services are free*. The [home lighting design guide](/guides/home-lighting-design) covers that whole-house plan, and if the void opens onto the hall, the [living room guide](/guides/chandelier-for-living-room) covers the room beside it. Comparing showrooms first? The [chandelier shop guide](/guides/how-to-choose-a-chandelier-shop) lists what to ask." />
            </Row>
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
              {shelfTicks.map((t) => (
                <li key={t.slice(0, 28)}>
                  <span className="tick">✓</span>
                  {t}
                </li>
              ))}
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
                    <Rich text={f.a} />
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
