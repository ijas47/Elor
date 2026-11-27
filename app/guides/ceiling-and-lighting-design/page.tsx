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

const TITLE = "False Ceiling and POP Lighting Design in India";
const H1 = "False ceiling and POP lighting design: plan the ceiling around the light";
const CRUMB = "Ceiling and Lighting Design";
const DESC =
  "False ceiling and POP lighting design for Indian homes: draw the furniture first, then plan cove, spots and the chandelier on separate circuits.";
const PATH = "/guides/ceiling-and-lighting-design";
const CELESTIAL = "https://www.celestiallights.in";
const { updated: UPDATED, modified: MODIFIED } = guideDates(PATH);
const HERO_IMAGE = "/images/guides/ceiling-and-lighting-design/lobby-false-ceiling-lighting.webp";
const HERO_ALT =
  "A lobby with a crystal chandelier in a wooden tray ceiling, linear coves, and wall lights on either side of the lifts";
const BODY_IMAGE = "/images/guides/ceiling-and-lighting-design/cove-and-ceiling-layers.webp";
const BODY_ALT =
  "A lounge with recessed coves and linear ceiling lights running above a brass and glass partition";

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

function Bold({ text }: { text: string }) {
  const m = text.match(/^\*\*([^*]+)\*\*\s*(.*)$/);
  if (!m) return <Rich text={text} />;
  return (
    <>
      <strong>{m[1]}</strong> <Rich text={m[2]} />
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
      <Bold text={text} />
    </p>
  );
}

const ticks = [
  "Draw the furniture first, then the ceiling.",
  "Cove, spots, and the decorative piece are three jobs, on three circuits.",
  "The chandelier is fixed to the slab, not the gypsum or POP.",
];

const layerTicks = [
  "**Cove or profile light.** An LED strip hidden in a lip or a channel at the edge of the ceiling. It washes the ceiling and walls with soft light. The [cove guide](/guides/cove-lighting-kerala) covers the lip and the profile.",
  "**Recessed spots.** Downlights set into the board, also sold as recessed lighting or concealed lights. They light a task, a path, or a wall. Place them where the furniture needs them, not in a regular grid across the room. Where each one goes is in [the downlight placement guide](/guides/downlight-placement), and why some of them hurt your eyes is in [why a downlight glares](/guides/why-downlights-glare).",
  "**A hanging piece.** The chandelier or pendant over the seating or the table. It hangs from the slab through the false ceiling.",
];

const shelfTicks = [
  "Ready fittings are shelf pieces at [Celestial Lights](https://www.celestiallights.in).",
  "A piece made for this ceiling, or a plan for the whole room, is Elor's work.",
  "Custom pieces are usually ready in 3 to 6 weeks. We install custom lights and give installation support for everything else. Warranty is up to 5 years.",
  "Kannur and Kozhikode are Celestial Lights stores. The Elor experience centre in Kochi is opening soon.",
];

const faqs = [
  {
    q: "What lights go in a false ceiling?",
    a: "Usually three: a cove or profile light at the edge, recessed spots for tasks and paths, and a hanging piece over the seating or table. Each goes on its own circuit, and the spots follow the furniture, not a grid.",
  },
  {
    q: "Which lights are best for a POP ceiling?",
    a: "The same three as any false ceiling: a cove strip behind a POP lip on its own dimmer, recessed spots deep enough to hide the lamp, and a hanging piece fixed to the slab. Mark them all on the drawing before the POP is built.",
  },
  {
    q: "Can POP hold a chandelier?",
    a: "No. Treat a POP ceiling as zero load, even for a light pendant. The anchor goes into the RCC slab and the rod comes down through the POP. The [false ceiling chandelier weight guide](/guides/false-ceiling-chandelier-weight) shows what each ceiling can carry.",
  },
  {
    q: "What is ceiling and lighting design?",
    a: "A marked ceiling that says where the cove, the spots, and the decorative piece go, which circuit each is on, and what the anchor is fixed to. It is drawn before the false ceiling closes.",
  },
  {
    q: "Should the chandelier be the only light?",
    a: "No. A single fitting in the middle leaves the walls dark and gives the room one level. Cove, spots, and task light stay in the plan. The chandelier sits on top of them.",
  },
  {
    q: "Can a false ceiling hold a chandelier?",
    a: "No. Gypsum and POP do not carry it. The anchor goes into the slab while the ceiling is open, and the false ceiling is built around it. The [false-ceiling guide](/guides/false-ceiling-chandelier-weight) sets out the sequence.",
  },
  {
    q: "Can I add lights after the POP is finished?",
    a: "Yes, but it means cutting the finished ceiling, then patching and painting it again. A spot needs enough depth and a way to run the wire. A chandelier still needs a slab anchor, so the opening gets bigger. Marking every point before the POP closes is cheaper.",
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
    a: "Ready fittings are at [Celestial Lights](https://www.celestiallights.in). Anything the ceiling still needs, and that the collection does not have, is designed and made by Elor, usually in 3 to 6 weeks. We install custom lights and give installation support for everything else.",
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
    images: [{ url: HERO_IMAGE, width: 1600, height: 900, alt: HERO_ALT }],
  },
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
              False ceiling lights are not one fitting. A POP or gypsum false ceiling usually needs three: a hidden cove or profile for a soft wash, spots that do not glare, and a decorative piece on its own circuit. Draw the furniture first, and fix the chandelier anchor to the slab, not the board.
            </p>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="lede" style={{ marginTop: 16 }}>
              Design a false ceiling and its lighting together, before the POP or gypsum closes. Place the three layers over the furniture, give each its own circuit, and leave the fan its own point.
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <p className="lede" style={{ marginTop: 16 }}>
              Elor Lighting writes that plan. Design services are free*.
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
            <Row title="What false ceiling lights go into a home ceiling?">
              <p>Three kinds, and you will hear them by their shop names.</p>
              <ul className="check-list" style={{ marginTop: 16 }}>
                {layerTicks.map((t) => (
                  <li key={t.slice(0, 24)}>
                    <span className="tick">✓</span>
                    <span>
                      <Bold text={t} />
                    </span>
                  </li>
                ))}
              </ul>
              <Para text="The names are the same for a gypsum board ceiling and a POP (plaster of Paris) ceiling. What changes the result is not the shop name but the order you plan them in. That order is the rest of this page." />
            </Row>

            <Row title="What is ceiling and lighting design?">
              <Para first text="It is the order of the work, not a folder of photographs. A false ceiling in most Indian homes, Kerala included, is gypsum or POP hung below the RCC slab, and the lighting decides how deep it needs to be, where it steps, and where the openings go. If the ceiling is drawn first and the lights are fitted into whatever space is left, the result is spots in the wrong places, a cove that shows its LED strip, and a chandelier with nothing solid above it." />
              <Para text="The drawing that settles this is a reflected ceiling plan: the ceiling seen from below, with every light, every fan, every anchor, and every circuit marked. The method behind it is [how a lighting plan is built](/guides/how-a-lighting-plan-is-built)." />
            </Row>

            <Row title="Why should the furniture be drawn before the ceiling?">
              <Para first text="Because the light is for the furniture, not for the middle of the room. The sofa, the dining table, the bed, and the kitchen counter decide where the decorative piece hangs and where task light falls. A tray ceiling centred on the room but not on the seating puts the chandelier over the walkway. Fix the furniture layout, even roughly, and centre the ceiling features on it. Where a living and dining area share one long hall, as in many Kerala homes, each end gets its own ceiling feature and its own decorative light, rather than one tray stretched across both. If the furniture is likely to move, keep the decorative points flexible by marking two anchor positions while the ceiling is still open." />
            </Row>

            <Row title="What do cove, spots, and the chandelier each do?">
              <Para first text="A cove washes the edge of the ceiling and makes the room feel taller and calmer; it is the light for a quiet evening. Spots mark a task or a path, or pick out a wall, a picture, or a shelf. The chandelier or pendant is the object in the room, the piece people notice. Put all three on one switch and the room has one scene, brighter or darker. On three circuits it has several, and that is most of what makes a room feel designed." />
              <Para text="If you want to aim light along an art wall or a kitchen run, or the room will be rearranged later, a track can do the job of a row of spots. Its feed and driver also go in before the ceiling closes. See [track and magnetic track lighting](/guides/track-lighting)." />
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
              <Para text="Agree the colour of the lamps once for the room, so the cove, the spots, and the chandelier match. The numbers are in [Kelvin, CRI, and beam](/guides/colour-of-light)." />
            </Row>

            <Row title="POP lighting design: what changes with a POP ceiling?">
              <Para first text="Less than you might think. The plan is the same three layers on three circuits. What changes is what the ceiling can carry, and what a late change costs." />
              <Para text="**POP carries nothing.** Treat a POP ceiling as zero load. It is a finish, not a structure, and it is brittle, so it can fail without warning. A gypsum board ceiling on a GI frame can take a light fitting of a few kilograms, and only at a framing intersection. Anything heavier, in either ceiling, goes into the slab. The numbers and the anchor rules are in the [false ceiling chandelier weight guide](/guides/false-ceiling-chandelier-weight)." />
              <Para text="**Spot openings belong on the drawing.** Mark every spot on the ceiling plan, so each opening is made to match its fitting while the ceiling is still open. Check the depth each fitting needs above the board before the POP is built. Cutting into a finished, painted POP ceiling later means patching and painting it again." />
              <Para text="**The cove lip is part of the ceiling.** In a POP ceiling the lip that hides the strip is built with the ceiling itself. Draw its height, the depth of the recess, the corners, and where the driver sits before the POP closes. If the lip is too shallow, you will see the dots from the sofa. Put the cove on its own dimmer. The detail is in the [cove guide](/guides/cove-lighting-kerala)." />
              <Para text="**Damp rooms need care either way.** Near a bathroom or a leaking terrace, choose fittings for damp air and leave an access panel near the drivers (see the Kerala section below)." />
              <Para text="The honest drawback of POP: it does not forgive late changes. Decide the lights before it closes." />
            </Row>

            <Row title="How deep should a false ceiling be for lighting?">
              <Para first text="Deep enough for the fittings you choose, which is why the fittings are chosen first. A downlight with a deep baffle, which hides the lamp from the sofa, needs more depth than a flat panel. A trimless fitting needs room behind the gypsum. A cove needs a lip high enough that the strip is not seen from across the room. If the lamp is visible from where people sit, the fitting was too shallow for the job. That is [why a downlight glares](/guides/why-downlights-glare). Ask for the depth each fitting needs from its data sheet before the ceiling height is fixed." />
            </Row>

            <Row title="Can a false ceiling hold a chandelier?">
              <Para first text="No. POP carries no load, and gypsum takes only a light fitting of a few kilograms at a framing intersection. The chandelier anchor goes into the slab, at a point marked while the ceiling is open, and the false ceiling is built around it. The same applies to a heavy pendant. Leave it until after the ceiling closes and the choice is between cutting the ceiling and hanging something lighter than you wanted. The full sequence, and what each build-up can carry, is in the [false-ceiling guide](/guides/false-ceiling-chandelier-weight)." />
            </Row>

            <Row title="Where does the ceiling fan go?">
              <Para first text="On its own point, marked on the same drawing. Most Kerala rooms need a fan for much of the year, and the fan competes with the chandelier for the centre of the ceiling. Decide which one takes the centre, then place the other far enough away that the blades never reach it. A fan below downlights also flickers the light as the blades pass, so keep spots out of the circle the blades sweep. The usual layouts are in [chandelier with a ceiling fan](/guides/chandelier-with-ceiling-fan)." />
            </Row>

            <Row title="How does Kerala's humidity affect a false ceiling with lights?">
              <Para first text="Gypsum near a bathroom, under a leaking terrace, or beside a nalukettu courtyard open to the rain sees damp for months. Fittings in those ceilings should be chosen for damp air, and drivers placed where they can be reached without breaking the ceiling. Leave a way in: an access panel near the drivers and the junctions saves a lot of damage later. What fails first near the coast is in the [coastal guide](/guides/coastal-lighting-kerala), and the ratings are explained in [IP rating for outdoor lights](/guides/ip-rating-for-outdoor-lights)." />
            </Row>

            <Row title="How does false ceiling light design change for a living room, bedroom and kitchen?">
              <Para first text="The three layers stay the same. What moves is where each one sits, because each room has different furniture." />
              <Para text="**Living room.** Centre the decorative piece on the seating, not on the room. If the fan wants the centre too, give the other its own point. See [chandelier for a living room](/guides/chandelier-for-living-room)." />
              <Para text="**Bedroom.** Keep spots away from the pillow, so nobody lying in bed looks straight into a lamp. See [bedroom lighting](/guides/bedroom-lighting-design)." />
              <Para text="**Kitchen.** Put task light in front of the cook, not behind, so your body does not shade the worktop. The worktop gets its own light, and a pendant over an island is a second circuit, not the task light. See [kitchen lighting](/guides/kitchen-lighting-design)." />
              <Para text="A double-height void hangs from the top slab; see [staircase lighting](/guides/staircase-lighting-design). Whatever hangs from the ceiling has to be reachable for cleaning; the routine is in [how to clean a crystal chandelier](/guides/how-to-clean-a-crystal-chandelier). For the whole house at once, see [home lighting design](/guides/home-lighting-design)." />
            </Row>

            <Row title="Who draws the ceiling, and where do the fittings come from?">
              <Para first text="Elor writes the lighting plan, in DIALux where the room needs a calculation, and marks the anchors before the ceiling closes. [Book a lighting consultation](/consultation) and start with a floor plan and a photo. Ready fittings are at [Celestial Lights, our sister store](https://www.celestiallights.in), at wholesale best rates, and we can match any quote. A piece made for this ceiling is on [custom chandeliers](/customisation), and the [chandelier shop guide](/guides/how-to-choose-a-chandelier-shop) lists what to ask anyone else." />
            </Row>
          </div>
        </div>
      </section>

      <section className="sec glow-top">
        <div className="wrap-tight">
          <Reveal>
            <h2 className="h-lg">Shelf, or made for the room?</h2>
          </Reveal>
          <Reveal delay={0.06}>
            <ul className="check-list" style={{ marginTop: 28 }}>
              {shelfTicks.map((t) => (
                <li key={t.slice(0, 28)}>
                  <span className="tick">✓</span>
                  <span>
                    <Rich text={t} />
                  </span>
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
                <details className="faq-item" name="ceiling-design-faq">
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

      <RelatedGuides currentSlug="ceiling-and-lighting-design" />
    </>
  );
}
