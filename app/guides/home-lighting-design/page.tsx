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

const TITLE = "Home Lighting Design: Plan the Whole House";
const H1 = "Home lighting design: one plan for the whole house";
const CRUMB = "Home Lighting Design";
const DESC =
  "Home lighting design for Indian homes: one plan for every room and outside, drawn before ceilings close, with one colour of light and separate circuits.";
const PATH = "/guides/home-lighting-design";
const CELESTIAL = "https://www.celestiallights.in";
const { updated: UPDATED, modified: MODIFIED } = guideDates(PATH);
const HERO_IMAGE = "/images/guides/home-lighting-design/living-room-layered-lighting.webp";
const HERO_ALT =
  "A living room with lit shelves, a pendant over a seating group, downlights in the ceiling, and a ceiling fan";
const BODY_IMAGE = "/images/guides/home-lighting-design/bedroom-pendant-lighting.webp";
const BODY_ALT =
  "A bedroom with a low dome pendant hanging over the bed in warm light";
const others = guideArticles.filter((item) => item.slug !== "home-lighting-design");

// Inline links are written as [text](href). Links to https:// addresses open
// in a new tab. The same string, with the markup stripped, goes into FAQPage
// schema so the visible answer and the schema always agree.
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

const roomLinks = [
  { label: "Living room chandelier", href: "/guides/chandelier-for-living-room" },
  { label: "Dining room", href: "/guides/dining-room-lighting-design" },
  { label: "Kitchen", href: "/guides/kitchen-lighting-design" },
  { label: "Bedroom", href: "/guides/bedroom-lighting-design" },
  { label: "Bathroom", href: "/guides/bathroom-lighting-design" },
  { label: "Staircase", href: "/guides/staircase-lighting-design" },
  { label: "False ceiling", href: "/guides/ceiling-and-lighting-design" },
  { label: "Outdoor and balcony", href: "/guides/outdoor-balcony-lighting-kerala" },
];

const rooms = [
  "**Living room.** Size the chandelier to the seating and keep it clear of the fan. See [chandelier for a living room](/guides/chandelier-for-living-room).",
  "**Dining room.** Centre the light on the table, hang it 75 to 90 cm above the top, and give it its own switch. See [dining room lighting design](/guides/dining-room-lighting-design).",
  "**Kitchen.** Give the worktop its own light on its own circuit, so you do not cook in your own shadow. Switch any island pendant apart. See [kitchen lighting design](/guides/kitchen-lighting-design).",
  "**Bedroom.** Keep the bright lamp out of sight of the pillow, and put the reading light on its own switch. See [bedroom lighting design](/guides/bedroom-lighting-design).",
  "**Bathroom.** Plan it before the tiling, light the mirror from the sides, and use a damp-rated fitting. See [bathroom lighting design](/guides/bathroom-lighting-design).",
  "**Staircase.** Light the treads and the void separately, and light each tread without glare. See [staircase lighting design](/guides/staircase-lighting-design).",
  "**False ceiling.** Put cove, spots and the decorative piece on separate circuits. See [ceiling and lighting design](/guides/ceiling-and-lighting-design).",
  "**Outdoor and balcony.** Light the seat and the steps, and plan the points before the plaster. See [outdoor and balcony lighting](/guides/outdoor-balcony-lighting-kerala).",
];

const faqs = [
  {
    q: "What does home lighting design include?",
    a: "A plan for every room and the outside: where each light goes, its switch and circuit, what it is fixed to, and its colour. Our plans list positions, colour temperature, dimming zones and an estimate.",
  },
  {
    q: "How early should I plan house lighting?",
    a: "While the structure is going up, before conduits are concealed and ceilings close. Start from the architect's floor plans and a furniture layout. Kitchens, bathrooms and the stair come first because they close earliest.",
  },
  {
    q: "Do I need a plan if I only want a chandelier?",
    a: "The chandelier still needs a point, a drop and an anchor. The rest of the room needs its own layers, or the piece becomes the only light. Send the floor plan and a photo either way.",
  },
  {
    q: "Can this be done from outside Kerala?",
    a: "The plan and the quotation can be done from drawings and video. See [lighting design across India](/india).",
  },
  {
    q: "What is made, and what is from the shelf?",
    a: "Shelf fittings are at [Celestial Lights](https://www.celestiallights.in). Elor writes the plan and makes the custom pieces, usually in 3 to 6 weeks.",
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
    images: [{ url: HERO_IMAGE, width: 1600, height: 1066, alt: HERO_ALT }],
  },
};

function Bold({ text }: { text: string }) {
  const m = text.match(/^\*\*([^*]+)\*\*\s*(.*)$/);
  if (!m) return <Rich text={text} />;
  return (
    <>
      <strong>{m[1]}</strong> <Rich text={m[2]} />
    </>
  );
}

function Row({ title, paras, children }: { title: string; paras: string[]; children?: ReactNode }) {
  return (
    <div className="register-row">
      <h2>{title}</h2>
      <div>
        {paras.map((t, i) => (
          <p key={i} style={i ? { marginTop: 16 } : undefined}>
            <Rich text={t} />
          </p>
        ))}
        {children}
      </div>
    </div>
  );
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
              {H1}
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="lede" style={{ marginTop: 22 }}>
              Home lighting design for an Indian house is one drawing for the whole house. It fixes where each light goes, which switch runs it, what it is fixed to and what colour it is. It is made before the wiring is concealed and the false ceiling closes. House lighting design and lighting design for home mean the same job.
            </p>
            <p className="lede" style={{ marginTop: 16 }}>
              The plan covers every room and the outside. It places each light against the furniture, gives every room separate circuits, keeps one colour of light through the house, and sets fans and anchors. In Kerala it also picks outdoor and bathroom fittings that can take the monsoon and the coast.
            </p>
          </Reveal>
          <Reveal delay={0.16}>
            <p style={{ marginTop: 24, fontWeight: 600 }}>Plan by room</p>
            <ul style={{ marginTop: 8, paddingLeft: 20, display: "grid", gap: 4 }}>
              {roomLinks.map((r) => (
                <li key={r.href}>
                  <Link href={r.href} style={{ color: "var(--gold)" }}>
                    {r.label}
                  </Link>
                </li>
              ))}
            </ul>
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
            <Row
              title="What is home lighting design?"
              paras={[
                "It is a drawing for the whole house that says where every light goes, which switch controls it, what it is fixed to, and what colour it is. This holds for a flat in Bengaluru or a villa in Kannur. House lighting design is the same search and the same job.",
                "It is different from picking fittings room by room in a showroom. The plan makes the choices that must be made before the electrician and the ceiling contractor finish: points, circuits, anchors and depths. Once those are buried in a wall or a ceiling, they are hard to change.",
                "The order we draw a plan in is set out in [how a lighting plan is built](/guides/how-a-lighting-plan-is-built).",
              ]}
            />
            <Row
              title="When should a house lighting plan be drawn?"
              paras={[
                "Before the wiring is concealed and before any false ceiling closes. In a typical build the conduits go into the slab and the walls early, so the plan is most useful while the structure is going up. Start from the architect's floor plans and the furniture layout.",
                "If the house is already finished, a plan still helps. The catch is cost and mess: changes then mean chasing walls or opening ceilings. That is the honest drawback of leaving lighting to the end.",
              ]}
            />
            <Row title="Lighting design for home, room by room" paras={["Each room has its own guide. Here is the one thing to get right in each, and where to read more."]}>
              <ul style={{ marginTop: 12, paddingLeft: 20, display: "grid", gap: 10 }}>
                {rooms.map((r) => (
                  <li key={r}>
                    <Bold text={r} />
                  </li>
                ))}
              </ul>
              <p style={{ marginTop: 16 }}>
                <Rich text="Two rules apply in every room. Every decorative piece is fixed to the slab, not the false ceiling, as set out in the [false-ceiling guide](/guides/false-ceiling-chandelier-weight). And it is placed where someone can reach it to clean it; see [how to clean a crystal chandelier](/guides/how-to-clean-a-crystal-chandelier)." />
              </p>
            </Row>
            <div className="register-row">
              <h2>Which rooms should be planned first?</h2>
              <div>
                <p>
                  The ones whose ceilings and walls close earliest: the kitchen, the bathrooms and the stair. Mark those points first. Living, dining and bedrooms follow.
                </p>
                <p style={{ marginTop: 16 }}>
                  The outside goes into the same drawing, not as an afterthought. The gate, the path, the car porch, the sit-out and the facade all need conduits laid before the paving and the plaster.
                </p>
                <figure style={{ marginTop: 24, marginBottom: 0 }}>
                  <div
                    style={{
                      position: "relative",
                      aspectRatio: "4 / 3",
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
            <Row
              title="Why should the whole house use one colour of light?"
              paras={[
                "So the house does not change temperature as you walk through it. A warm living room that opens onto a cold white corridor and a bluish kitchen looks like three different houses.",
                "Agree the colour temperature and colour rendering once. Then make exceptions on purpose, for example a task light over a work counter. The three numbers to agree are in [Kelvin, CRI and beam](/guides/colour-of-light).",
                "Brightness is a separate question. The watts on an LED box tell you power, not how much light you get. For that, read [lumens vs watts](/guides/lumens-vs-watts) before you buy lamps for any room.",
              ]}
            />
            <Row
              title="How should circuits and switches be planned?"
              paras={[
                "Each room gets layers on separate switches: a general light, a task light where work happens, and any decorative piece on its own. Switches go where people enter and where they stop. That includes two-way switching on the stair and beside the bed. The fan has its own regulator and point.",
                "A house planned this way can be lit for a quiet evening, for guests or for a function without every light in the room coming on at once. The trade-off is more switches on the wall. Plan the switch plates with the furniture so they do not end up behind a sofa or a wardrobe.",
              ]}
            />
            <Row
              title="Where do the lights go in the ceiling?"
              paras={[
                "Start from the furniture, not from a grid. [Downlight placement](/guides/downlight-placement) shows how to set each downlight against the seating and the counters, hide the lamp in a deep fitting, and keep clear of the fan, the cove and the chandelier.",
                "[Cove lighting](/guides/cove-lighting-kerala) has to be drawn before the gypsum or POP closes. The strip hides behind a lip or a profile and works best on its own dimmer.",
                "[Track lighting](/guides/track-lighting) suits an art wall or a room whose use will change. It looks more technical than a downlight, so it is not for every room. Plan its feed before the ceiling closes, like everything else up there.",
              ]}
            />
            <Row
              title="How should the outside of the house be lit?"
              paras={[
                "As its own set of circuits, planned with the rooms. The gate and the compound wall tell a visitor where to go. The path needs low light at the edges so nobody trips, without lamps shining into the eyes of someone walking up it.",
                "The car porch and the sit-out are rooms in their own right, used most evenings in many Indian homes. They deserve the same warm colour as the living room inside. The facade can be lit softly from below or from the slab edges, but a little goes a long way.",
                "Put the outside lights on a timer or a sensor if you want them to come on reliably at dusk, and keep the sit-out on a switch by the door. Every outdoor fitting faces rain, so the rating and the finish matter more than the shape. The [outdoor and balcony lighting guide](/guides/outdoor-balcony-lighting-kerala) covers fittings for the monsoon.",
              ]}
            />
            <Row
              title="What changes in a Kerala house?"
              paras={[
                "Fans run for much of the year, so every room's ceiling has to place the fan and the decorative light apart; see [chandelier with a ceiling fan](/guides/chandelier-with-ceiling-fan). Many Kerala houses have a double-height void by the stair or the living room, and the piece in it hangs from the top slab; see [staircase lighting](/guides/staircase-lighting-design).",
                "The monsoon keeps bathrooms, verandas and courtyards damp for months, and the coast adds salt air. A nalukettu or a courtyard open to the sky treats its edges as outdoors, so the fittings there need a weather rating; see [IP rating for outdoor lights](/guides/ip-rating-for-outdoor-lights). Metal finishes near the sea need to be specified, not picked in a dry showroom; see the [coastal guide](/guides/coastal-lighting-kerala).",
                "If you want a material that suits a traditional house, the [wooden chandelier](/guides/wooden-chandelier) and [brass chandelier](/guides/brass-chandelier) guides cover what to ask for.",
                "To see lights in person in Kerala, the Celestial Lights stores in Kannur (Philips Building, 670005) and Kozhikode are open Monday to Saturday, 9:30 AM to 8:30 PM. The Elor experience centre in Kochi is opening soon.",
              ]}
            />
            <Row
              title="Can the plan be done if I am building from abroad or another city?"
              paras={[
                "Yes. The plan can start from drawings and video calls, which suits families building in Kerala while working elsewhere. Elor also designs lighting for sites anywhere in India; see [lighting design across India](/india).",
                "The limit is seeing the lights. Without a visit, you judge the range from photos and video, not under real light in a store.",
              ]}
            />
            <Row
              title="Should I buy ready fittings or have pieces made?"
              paras={[
                "Most of a house is lit with ready fittings. For those, [Celestial Lights, our sister store](https://www.celestiallights.in), sells at wholesale best rates, and we can match any quote.",
                "A piece made for a particular void, ceiling or picture is designed and made by Elor. Custom pieces are usually ready in 3 to 6 weeks, so order early if the house has a moving-in date. The process, timeline and what drives the cost are on [custom chandeliers](/customisation), and budgeting is in the [pricing guide](/guides/chandelier-pricing-guide). Comparing showrooms first? The [chandelier shop guide](/guides/how-to-choose-a-chandelier-shop) lists what to ask.",
                "We install custom lights and give installation support for everything else. Warranty is up to 5 years.",
              ]}
            />
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
                <span>
                  Room by room, a fitting that already exists is a shelf piece from{" "}
                  <a href={CELESTIAL} target="_blank" rel="noopener noreferrer">Celestial Lights</a>.
                </span>
              </li>
              <li>
                <span className="tick">✓</span>
                The plan, and any light the house still needs, is designed and made by Elor.
              </li>
              <li>
                <span className="tick">✓</span>
                Custom pieces are usually ready in 3 to 6 weeks. We install custom lights and give installation support for everything else. Warranty is up to 5 years.
              </li>
              <li>
                <span className="tick">✓</span>
                Kannur and Kozhikode are Celestial Lights stores. The Elor experience centre in Kochi is opening soon.
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
              {" "}with your floor plans, or{" "}
              <Link href="/lighting-designer" style={{ color: "var(--gold)" }}>
                work with a lighting designer
              </Link>
              {" "}on the whole house. The first session is free. Design services are free*.
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

      <RelatedGuides currentSlug="home-lighting-design" />
    </>
  );
}
