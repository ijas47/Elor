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

const TITLE = "Bedroom Lighting for Kerala Homes";
const CRUMB = "Bedroom Lighting Design";
const DESC =
  "Bedroom lighting design for Kerala homes: no bright lamp in sight of the pillow, reading light on its own switch, and the fan kept clear of the ceiling piece.";
const PATH = "/guides/bedroom-lighting-design";
const CELESTIAL = "https://www.celestiallights.in";
const { updated: UPDATED, modified: MODIFIED } = guideDates(PATH);
const others = guideArticles.filter((item) => item.slug !== "bedroom-lighting-design");

const faqs = [
  {
    q: "Where should a bedroom chandelier hang?",
    a: "Clear of the pillow line, and clear of a ceiling fan if the room has one. Over the foot of the bed or the open floor is the usual place. The size calculator checks the drop against the ceiling height.",
  },
  {
    q: "Why not a downlight above the bed?",
    a: "Someone lying in bed looks straight up at it, so it glares. Put ceiling lights over the walkway instead, and keep reading light at the side on its own switch.",
  },
  {
    q: "Can a bedroom have both a fan and a chandelier?",
    a: "Yes, on separate points with their own anchors. The fan usually takes the centre, and the decorative piece goes over the foot of the bed or the open floor, clear of the blades.",
  },
  {
    q: "What colour of light belongs in a bedroom?",
    a: "Warm, and the same family as the rest of the house. Kelvin, CRI, and beam are the three numbers to agree before a fitting is ordered.",
  },
  {
    q: "Can the bedroom light be made for the room?",
    a: "Yes. A stock fitting comes from Celestial Lights. A piece made for the ceiling or the headboard is Elor, usually in 3 to 6 weeks. We install custom lights and give installation support for everything else.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: TITLE,
  description: DESC,
  image: `${site.domain}/photos/bedroom-dome.jpg`,
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

export default function BedroomLightingDesignGuide() {
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
              Keep the lamp
              <br />
              <span className="serif-i">out of the eyes.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="lede" style={{ marginTop: 22 }}>
              Plan bedroom lighting in a Kerala home from the pillow outwards. Keep any bright lamp out of sight of someone lying in bed, put reading light at the bedside on its own switch, and keep the ceiling piece dimmable and well apart from the fan. Use warm light, and choose finishes that will cope with the humidity.
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
              src="/photos/bedroom-dome.jpg"
              alt="A bedroom with a black ribbed dome pendant lighting the desk beside the bed"
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
              <h2>What lighting does a bedroom need?</h2>
              <div>
                <p>
                  Three layers, each on its own switch. A low general light lets you move around the room and can be turned right down. A bedside light is for reading, and switches without anything else, so one person can read while the other sleeps. A soft wash on a wall or the headboard gives the room depth without putting a lamp in anyone's eyes. A decorative piece, if there is one, sits on top of these, not instead of them.
                </p>
                <p style={{ marginTop: 16 }}>
                  Keep the colour warm and consistent with the rest of the house, so the corridor and the bedroom do not clash at night. The numbers to agree before ordering anything are in{" "}
                  <Link href="/guides/colour-of-light" style={{ color: "var(--gold)" }}>
                    Kelvin, CRI, and beam
                  </Link>
                  .
                </p>
              </div>
            </div>
            <div className="register-row">
              <h2>Why should there be no downlight over the bed?</h2>
              <div>
                <p>
                  Because the bed is where people lie on their backs and look straight up. A downlight above the pillow is the one fitting in the house that is guaranteed to be seen directly. Put the ceiling lights over the walkway and the wardrobe instead, and choose fittings with the lamp set back so it stays hidden from most angles. Why some downlights glare and others do not is explained in{" "}
                  <Link href="/guides/why-downlights-glare" style={{ color: "var(--gold)" }}>
                    why downlights glare
                  </Link>
                  .
                </p>
              </div>
            </div>
            <div className="register-row">
              <h2>Can a bedroom have a chandelier and a ceiling fan?</h2>
              <div>
                <p>
                  Yes, if each has its own point. In Kerala the bedroom fan often runs all night for much of the year, so it usually takes the centre of the room. The chandelier or pendant goes elsewhere, often over the foot of the bed or the open floor, far enough away that the blades never reach it and the moving air does not set it swaying. The usual layouts are in{" "}
                  <Link href="/guides/chandelier-with-ceiling-fan" style={{ color: "var(--gold)" }}>
                    chandelier with a ceiling fan
                  </Link>
                  .
                </p>
                <p style={{ marginTop: 16 }}>
                  A low ceiling wants a short drop or a piece that sits close to the ceiling. Check the drop against the ceiling height with the{" "}
                  <Link href="/guides/chandelier-size-calculator" style={{ color: "var(--gold)" }}>
                    size calculator
                  </Link>
                  {" "}before choosing from a photograph.
                </p>
              </div>
            </div>
            <div className="register-row">
              <h2>Where should reading lights and switches go?</h2>
              <div>
                <p>
                  At the bed. A wall light or a pendant on each side, positioned so the light falls on the page rather than on the pillow next to it, is the usual answer. Each side gets its own switch within reach of the bed, and it helps to be able to switch off the main room light from the bed as well. Decide this while the walls are open, because moving a point after the plaster and paint is done is a much bigger job.
                </p>
              </div>
            </div>
            <div className="register-row">
              <h2>How does Kerala's humidity affect bedroom lighting?</h2>
              <div>
                <p>
                  Bedrooms often have an attached bathroom, and in a Kerala monsoon that bathroom stays damp for months. Fittings near the bathroom door, or in a bedroom that opens onto a balcony or a nalukettu courtyard, should be chosen for damp air. Metal finishes matter too: untreated brass and iron mark near the coast. The{" "}
                  <Link href="/guides/coastal-lighting-kerala" style={{ color: "var(--gold)" }}>
                    coastal guide
                  </Link>
                  {" "}sets out what fails first, and{" "}
                  <Link href="/guides/ip-rating-for-outdoor-lights" style={{ color: "var(--gold)" }}>
                    IP ratings
                  </Link>
                  {" "}explains what the numbers on a bathroom fitting mean.
                </p>
                <p style={{ marginTop: 16 }}>
                  If you want a material that feels calmer than crystal in a bedroom, the{" "}
                  <Link href="/guides/wooden-chandelier" style={{ color: "var(--gold)" }}>
                    wooden chandelier guide
                  </Link>
                  {" "}and the{" "}
                  <Link href="/guides/brass-chandelier" style={{ color: "var(--gold)" }}>
                    brass guide
                  </Link>
                  {" "}cover what to ask for.
                </p>
              </div>
            </div>
            <div className="register-row">
              <h2>How should the way to the bathroom be lit at night?</h2>
              <div>
                <p>
                  With a low light, not the main one. A small fitting near the floor along the path from the bed to the bathroom door, or a dim light just inside the bathroom, lets someone get up at night without waking the room or their own eyes. This matters most in a bedroom for an elderly parent, where a missed step in the dark is the real risk. Put it on a switch by the bed, or on a sensor if you prefer, and keep it warm and dim.
                </p>
                <p style={{ marginTop: 16 }}>
                  A child's room follows the same rule with one addition: a dimmable general light, so the room can be bright for play and homework and almost dark at bedtime. Keep any fitting a child might reach or swing at out of the way, and fix it to the slab, not the false ceiling.
                </p>
              </div>
            </div>
            <div className="register-row">
              <h2>How do I light a wardrobe and a dressing area?</h2>
              <div>
                <p>
                  From the front, not from above. A light over the middle of the room leaves the inside of a wardrobe in shadow, and a mirror lit from above puts shadows under the eyes. A light inside the wardrobe that comes on with the door, and light on either side of the dressing mirror, show colours as they are. Choose a good colour rendering for the mirror; the numbers are in the{" "}
                  <Link href="/guides/colour-of-light" style={{ color: "var(--gold)" }}>
                    colour-of-light guide
                  </Link>
                  {" "}linked above.
                </p>
              </div>
            </div>
            <div className="register-row">
              <h2>Can a false ceiling hold a bedroom chandelier?</h2>
              <div>
                <p>
                  No. A bedroom piece can be lighter than a stair cascade and still too heavy for gypsum or POP. The fixing goes into the slab while the false ceiling is still open, and the cove and the spots are wired at the same time. That sequence is in the{" "}
                  <Link href="/guides/false-ceiling-chandelier-weight" style={{ color: "var(--gold)" }}>
                    false-ceiling guide
                  </Link>
                  , and how the ceiling and its circuits are laid out is in{" "}
                  <Link href="/guides/ceiling-and-lighting-design" style={{ color: "var(--gold)" }}>
                    ceiling and lighting design
                  </Link>
                  .
                </p>
              </div>
            </div>
            <div className="register-row">
              <h2>How do I keep a bedroom chandelier clean?</h2>
              <div>
                <p>
                  A fan running every night carries dust onto the piece, and crystal shows it most. Before buying, check that someone can reach the piece from a stable platform without leaning over the bed. The routine, with the power off at the breaker, is in{" "}
                  <Link href="/guides/how-to-clean-a-crystal-chandelier" style={{ color: "var(--gold)" }}>
                    how to clean a crystal chandelier
                  </Link>
                  .
                </p>
              </div>
            </div>
            <div className="register-row">
              <h2>Should a bedroom light be ready-made or custom?</h2>
              <div>
                <p>
                  Bedside lights, sconces, and bedroom pendants that already exist in the range come from{" "}
                  <a href={CELESTIAL} target="_blank" rel="noopener noreferrer">Celestial Lights</a>
                  . When the room has a low ceiling, a vaulted roof, or a headboard the light should be built around, send a picture and the measurements and Elor makes the piece. The process, with the timeline and what drives the cost, is on{" "}
                  <Link href="/customisation" style={{ color: "var(--gold)" }}>
                    custom chandeliers
                  </Link>
                  .
                </p>
                <p style={{ marginTop: 16 }}>
                  If the wiring is still open, start with the bed wall and the switch positions.{" "}
                  <Link href="/consultation" style={{ color: "var(--gold)" }}>
                    Book a lighting consultation
                  </Link>
                  {" "}and the bedroom is planned with the rest of the house; the whole-house approach is in{" "}
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
                A bedside light, a sconce, or a bedroom pendant from the collection is at{" "}
                <a href={CELESTIAL} target="_blank" rel="noopener noreferrer">Celestial Lights</a>.
              </li>
              <li>
                <span className="tick">✓</span>
                A piece matched to a low ceiling, a vault, or the headboard is designed and made by Elor. Design is free with purchase from Celestial.
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
                <details className="faq-item" name="bedroom-lighting-design">
                  <summary>{f.q}</summary>
                  <p className="faq-a">
                    {f.q === "Can the bedroom light be made for the room?" ? (
                      <>
                        Yes. A stock fitting comes from{" "}
                        <a href={CELESTIAL} target="_blank" rel="noopener noreferrer">Celestial Lights</a>
                        . A piece made for the ceiling or the headboard is Elor, usually in 3 to 6 weeks. We install custom lights and give installation support for everything else.
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

      <RelatedGuides currentSlug="bedroom-lighting-design" />
    </>
  );
}
