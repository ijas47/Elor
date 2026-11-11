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

const TITLE = "Kitchen Lighting for Kerala Homes";
const CRUMB = "Kitchen Lighting Design";
const DESC =
  "Kitchen lighting design for Kerala homes: the worktop on its own circuit, the island pendant switched apart, no overhead shadows, finishes that survive steam.";
const PATH = "/guides/kitchen-lighting-design";
const CELESTIAL = "https://www.celestiallights.in";
const STAIR_ALT = "A red crystal cascade falling beside a dark spiral staircase";
const { updated: UPDATED, modified: MODIFIED } = guideDates(PATH);
const others = guideArticles.filter((item) => item.slug !== "kitchen-lighting-design");

const faqs = [
  {
    q: "What light does a kitchen actually need?",
    a: "A task light on the worktop, on its own switch, a separate pendant or linear piece over the island or the table, and general light for the room. One fitting in the middle of the ceiling does all three badly.",
  },
  {
    q: "Why is my kitchen counter in shadow?",
    a: "The ceiling light is behind you, so your body blocks it. Put light in front of you, under the wall cabinets or close to the wall above the counter.",
  },
  {
    q: "How low should an island pendant hang?",
    a: "High enough that people do not walk into it, and low enough that it lights the top of the island. Measure the ceiling and the island before ordering from a picture.",
  },
  {
    q: "Will brass survive in a Kerala kitchen?",
    a: "Untreated brass marks in salt air and in steam. A sealed finish, specified for the room, is the condition. The coastal guide covers what fails first.",
  },
  {
    q: "Is the kitchen pendant custom?",
    a: "A standard length from the collection is at Celestial Lights. A piece made to the island is designed and built by Elor, usually in 3 to 6 weeks. We install custom lights and give installation support for everything else.",
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

export default function KitchenLightingDesignGuide() {
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
              The worktop gets
              <br />
              <span className="serif-i">its own light.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="lede" style={{ marginTop: 22 }}>
              Light a Kerala kitchen in layers. Put task light directly on the worktop, usually under the wall cabinets, so you never cook in your own shadow. Hang the island or dining pendant on a separate circuit. Then light the room generally, and choose fittings and finishes that can be wiped down and will cope with steam and humidity.
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
              <h2>What lighting does a kitchen need?</h2>
              <div>
                <p>
                  Three jobs. Task light on the worktop, where you chop and cook. A pendant or linear piece over the island or the table, which is as much about how the room looks as what it lights. And general light, so the floor, the cupboards, and the corners are visible. Each goes on its own switch. One fitting in the middle of the ceiling tries to do all three and does none of them well.
                </p>
                <p style={{ marginTop: 16 }}>
                  How the circuits are grouped across a whole house is set out in{" "}
                  <Link href="/guides/how-a-lighting-plan-is-built" style={{ color: "var(--gold)" }}>
                    how a lighting plan is built
                  </Link>
                  .
                </p>
              </div>
            </div>
            <div className="register-row">
              <h2>Why do I cook in my own shadow?</h2>
              <div>
                <p>
                  Because the light is behind you. A ceiling light in the middle of the kitchen sits behind anyone facing the counter, so their head and shoulders throw a shadow onto the board. The fix is light in front of you: a strip or fitting under the wall cabinets, or downlights set close to the wall above the counter and aimed at the worktop. Keep the lamp out of direct view from where people stand. The reasons are in{" "}
                  <Link href="/guides/why-downlights-glare" style={{ color: "var(--gold)" }}>
                    why downlights glare
                  </Link>
                  .
                </p>
                <p style={{ marginTop: 16 }}>
                  For a work surface, colour rendering matters, because you are judging food. The numbers to agree are in{" "}
                  <Link href="/guides/colour-of-light" style={{ color: "var(--gold)" }}>
                    Kelvin, CRI, and beam
                  </Link>
                  .
                </p>
                <p style={{ marginTop: 16 }}>
                  Under-cabinet light needs planning with the carpenter. The wiring has to reach the underside of the wall cabinets before they are fixed, the strip or fitting needs a lip or a channel so it is not seen from the dining table, and the switch should be at the counter, not by the door. If the backsplash is glossy tile or polished stone, ask how the fitting will reflect in it; a bright line reflected in the splashback is a glare of its own.
                </p>
              </div>
            </div>
            <div className="register-row">
              <h2>How should an island pendant be hung?</h2>
              <div>
                <p>
                  High enough that nobody walks into it, and low enough that it lights the top of the island rather than the ceiling. A linear piece follows the length of the island, not a photograph of someone else's kitchen. Measure the island and the ceiling first, and check the drop with the{" "}
                  <Link href="/guides/chandelier-size-calculator" style={{ color: "var(--gold)" }}>
                    size calculator
                  </Link>
                  . Put it on a dimmer, if the fitting supports one, for the hours when nobody is cooking and the kitchen is part of the living space.
                </p>
                <p style={{ marginTop: 16 }}>
                  In many Kerala homes the kitchen opens onto the dining area. If so, the dining light and the kitchen light are planned together so the two ends of the room do not compete. The fixing for a heavier piece goes into the slab, not the false ceiling; the{" "}
                  <Link href="/guides/false-ceiling-chandelier-weight" style={{ color: "var(--gold)" }}>
                    false-ceiling guide
                  </Link>
                  {" "}explains why.
                </p>
              </div>
            </div>
            <div className="register-row">
              <h2>Do I need separate lighting in a work area or second kitchen?</h2>
              <div>
                <p>
                  Many Kerala houses have a work area or a second kitchen behind the main one, where the heavy cooking happens. That space wants plain, bright task light over the stove and the counter, with fittings that can be wiped down. If it is semi-open to the outside, or the wash area is outdoors, treat the fittings as outdoor ones. The{" "}
                  <Link href="/guides/ip-rating-for-outdoor-lights" style={{ color: "var(--gold)" }}>
                    IP rating guide
                  </Link>
                  {" "}sets out which rating to ask for.
                </p>
              </div>
            </div>
            <div className="register-row">
              <h2>Which kitchen light finishes survive steam and humidity?</h2>
              <div>
                <p>
                  A kitchen is wiped down, sees steam and oil, and on the Kerala coast it is humid for months. Untreated brass and bare iron mark, and open fittings collect grease. Choose closed or easily wiped fittings near the stove, and ask for the finish in writing. What fails first near the sea is in the{" "}
                  <Link href="/guides/coastal-lighting-kerala" style={{ color: "var(--gold)" }}>
                    coastal guide
                  </Link>
                  . A brass piece, if that is the finish you want, is specified on the{" "}
                  <Link href="/guides/brass-chandelier" style={{ color: "var(--gold)" }}>
                    brass page
                  </Link>
                  . Glass and acrylic clean differently from crystal; the comparison is in{" "}
                  <Link href="/guides/crystal-vs-glass-chandelier" style={{ color: "var(--gold)" }}>
                    crystal, glass, and acrylic
                  </Link>
                  , and the cleaning routine is in{" "}
                  <Link href="/guides/how-to-clean-a-crystal-chandelier" style={{ color: "var(--gold)" }}>
                    how to clean a crystal chandelier
                  </Link>
                  .
                </p>
              </div>
            </div>
            <div className="register-row">
              <h2>How should the dining area next to the kitchen be lit?</h2>
              <div>
                <p>
                  As its own space. In many Kerala homes the dining table sits between the kitchen and the living room, and it is where the family actually spends the evening. Hang a pendant or a small chandelier over the table, sized to the table rather than the room, on its own switch and ideally a dimmer. When the kitchen is closed for the night, the dining light carries the room; when people are cooking, the worktop light does the work and the dining light can stay low.
                </p>
                <p style={{ marginTop: 16 }}>
                  Keep the colour of light the same in the kitchen and the dining area, so food looks the same on the counter and on the plate. If the dining area also opens to the living room, plan the three together; the{" "}
                  <Link href="/guides/chandelier-for-living-room" style={{ color: "var(--gold)" }}>
                    living room guide
                  </Link>
                  {" "}covers the room beside it.
                </p>
              </div>
            </div>
            <div className="register-row">
              <h2>Can a kitchen have a ceiling fan and pendants?</h2>
              <div>
                <p>
                  Yes, with care. A fan over the stove disturbs a gas flame, and a fan close to a pendant sets it swinging. Give the fan its own point away from both. The layouts are in{" "}
                  <Link href="/guides/chandelier-with-ceiling-fan" style={{ color: "var(--gold)" }}>
                    chandelier with a ceiling fan
                  </Link>
                  .
                </p>
              </div>
            </div>
            <div className="register-row">
              <h2>Should a kitchen pendant be ready-made or custom?</h2>
              <div>
                <p>
                  A pendant made to a standard island length, already in the range, is a shelf fitting from{" "}
                  <a href={CELESTIAL} target="_blank" rel="noopener noreferrer">Celestial Lights</a>
                  . When the island is an unusual length, or the finish has to match the cabinets, send a picture and the measurements and Elor makes the piece. The process, with the timeline and what drives the cost, is on{" "}
                  <Link href="/customisation" style={{ color: "var(--gold)" }}>
                    custom chandeliers
                  </Link>
                  .
                </p>
                <p style={{ marginTop: 16 }}>
                  If the kitchen is still being designed, decide the light with the cabinet drawings, because the strip under the wall cabinets needs wiring before the cabinets go up.{" "}
                  <Link href="/consultation" style={{ color: "var(--gold)" }}>
                    Book a lighting consultation
                  </Link>
                  {" "}and the kitchen is planned with the rest of the house; see{" "}
                  <Link href="/guides/home-lighting-design" style={{ color: "var(--gold)" }}>
                    home lighting design
                  </Link>
                  .
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
                A pendant already made to a standard island length is a shelf fitting at{" "}
                <a href={CELESTIAL} target="_blank" rel="noopener noreferrer">Celestial Lights</a>.
              </li>
              <li>
                <span className="tick">✓</span>
                A linear piece made to your island, or a finish matched to the kitchen, is Elor. Design is free with purchase from Celestial.
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
                <details className="faq-item" name="kitchen-lighting-design">
                  <summary>{f.q}</summary>
                  <p className="faq-a">
                    {f.q === "Is the kitchen pendant custom?" ? (
                      <>
                        A standard length from the collection is at{" "}
                        <a href={CELESTIAL} target="_blank" rel="noopener noreferrer">Celestial Lights</a>
                        . A piece made to the island is designed and built by Elor, usually in 3 to 6 weeks. We install custom lights and give installation support for everything else.
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

      <RelatedGuides currentSlug="kitchen-lighting-design" />
    </>
  );
}
