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

const TITLE = "Lumens vs Watts: How Bright Should a Room Be?";
const CRUMB = "Lumens vs Watts";
const DESC =
  "LED lighting wattage is power, not brightness. Lumens vs watts in plain words for Indian homes, and what to ask for before you buy a lamp.";
const PATH = "/guides/lumens-vs-watts";
const CELESTIAL = "https://www.celestiallights.in";
const { updated: UPDATED, modified: MODIFIED } = guideDates(PATH);

const HERO_IMAGE = "/images/guides/colour-of-light/warm-living-dining-light.webp";
const HERO_ALT =
  "A city-apartment living and dining room at night in warm light, with a brass pendant, a glowing cove, and a city view beyond the windows";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: PATH },
  openGraph: {
    title: TITLE,
    description: DESC,
    images: [{ url: HERO_IMAGE, width: 1600, height: 893, alt: HERO_ALT }],
  },
};

const faqs = [
  {
    q: "Is a higher watt LED always brighter?",
    a: "No. Watts are power, not light. Two LEDs with the same watts can give different lumens. Compare the lumen number, and remember that a deep fitting or a shade holds some light back.",
  },
  {
    q: "Can I use the old 60 watt number?",
    a: "Not on its own. On an old bulb, 60 watts told you how much power it drew. An LED gives the same light for fewer watts, so copying the number tells you little. If the box has a \"60 W equivalent\" line, treat it as a rough hint and compare lumens instead.",
  },
  {
    q: "Where do lumens and colour temperature both appear on a pack?",
    a: "Look for two numbers. Lumens have \"lm\" after them. Colour temperature has \"K\" after it, such as 2700K or 3000K. Where they sit on the box varies by brand. If either is missing, ask for the data sheet.",
  },
  {
    q: "How many lumens does a room need?",
    a: "There is no honest single number. It depends on the room's size, the colour of the walls and ceiling, where the furniture is, and how many layers of light you use. A lighting plan works it out for the real room.",
  },
  {
    q: "Does cool white look brighter?",
    a: "It looks bluer, not brighter. Brightness is lumens. Kelvin is the colour of the white, and a warm white lamp with more lumens gives more light than a cool white lamp with fewer.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Lumens vs watts: how bright a room should feel",
  description: DESC,
  image: `${site.domain}${HERO_IMAGE}`,
  author: { "@type": "Organization", name: site.name, url: site.domain },
  publisher: {
    "@type": "Organization",
    name: site.name,
    logo: { "@type": "ImageObject", url: `${site.domain}/brand/logo-mark.svg` },
  },
  datePublished: "2026-11-20",
  dateModified: MODIFIED,
  mainEntityOfPage: `${site.domain}${PATH}`,
};

const link = { color: "var(--gold)" } as const;

export default function LumensVsWattsGuide() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
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
              Lumens vs watts: how bright a room should feel
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="lede" style={{ marginTop: 22 }}>
              Watts tell you how much power a lamp uses. Lumens tell you how much light it gives. So LED lighting wattage is not a measure of brightness, and an old &quot;60 watt&quot; habit does not carry over to an LED. Compare lumens first. Colour, warm white or cool white, is a separate question.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap-tight">
          <ul className="check-list">
            <li><span className="tick">✓</span>Watts are power. They tell you how much electricity the lamp uses.</li>
            <li><span className="tick">✓</span>Lumens are light. They tell you how much light comes out.</li>
            <li><span className="tick">✓</span>Do not copy an old watt number onto an LED and call it done.</li>
          </ul>
        </div>
      </section>

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap-tight">
          <div style={{ position: "relative", aspectRatio: "16 / 10", borderRadius: 18, overflow: "hidden" }}>
            <Image src={HERO_IMAGE} alt={HERO_ALT} fill priority sizes="(max-width: 760px) 100vw, 760px" />
          </div>
        </div>
      </section>

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap-tight">
          <p className="lede">
            Most of us learned brightness from old bulbs, where a bigger watt number did mean more light. With LEDs that habit breaks. This page explains the two words, why the old numbers mislead, what to ask for, and why the room still decides how bright it feels. There is no room-by-room lumen chart here, and the reason is further down.
          </p>
        </div>
      </section>

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="register">
            <div className="register-row">
              <h2>What is the difference between lumens and watts?</h2>
              <div>
                <p>Watts measure power. Lumens measure light. A watt figure tells you what the lamp draws from the supply, which is what you pay for. A lumen figure tells you how much light leaves the lamp, which is what you see.</p>
                <div className="spec-wrap" style={{ marginTop: 16 }}>
                  <table className="spec-table">
                    <thead>
                      <tr>
                        <th>On the box</th>
                        <th>What it measures</th>
                        <th>What it helps you decide</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Watts (W)</td>
                        <td>Power the lamp uses</td>
                        <td>Running cost, and what the driver or circuit must carry</td>
                      </tr>
                      <tr>
                        <td>Lumens (lm)</td>
                        <td>Light the lamp gives out</td>
                        <td>How much light you get</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="register-row">
              <h2>Why do old watt habits mislead on LEDs?</h2>
              <div>
                <p>Because the watt number used to stand in for brightness, and on an LED it does not. Old filament lamps used a lot of power for the light they gave, so a bigger watt number meant a brighter room. LEDs give far more light for each watt. Two LEDs with the same watt number can also give different amounts of light, depending on the chip, the driver and the fitting.</p>
                <p style={{ marginTop: 16 }}>Some boxes print a line such as &quot;60 W equivalent&quot;. Treat it as a hint, not a spec. The lumen number is the one to compare.</p>
                <p style={{ marginTop: 16 }}>Lumens have a limit too. The figure on the box is what the lamp gives out. A deep fitting, a frosted diffuser or a shade keeps some of that light back, so less reaches the table. That is why the same lamp can look bright in one fitting and dull in another.</p>
              </div>
            </div>
            <div className="register-row">
              <h2>What should you ask for on a lighting specification?</h2>
              <div>
                <p>Ask for lumens first, then the colour and quality of the light. Watts come last.</p>
                <ol style={{ marginTop: 16, paddingLeft: 22, lineHeight: 1.7 }}>
                  <li><strong>Lumens.</strong> For each fitting, ask for its light output from the data sheet, not only the lamp&apos;s.</li>
                  <li><strong>Colour, as a K number.</strong> Warm white is about 2700K to 3000K, the colour Elor uses for the rooms you live in. The <Link href="/guides/colour-of-light" style={link}>colour of light guide</Link> explains Kelvin, warm white and cool white.</li>
                  <li><strong>CRI.</strong> Ask for CRI 90 where people, food, fabric or timber are looked at. The same guide explains why.</li>
                  <li><strong>Beam angle, for spots.</strong> A narrow beam and a wide beam with the same lumens light very different areas.</li>
                  <li><strong>Dimming.</strong> If the light should go low in the evening, check that the fitting dims, and that the dimmer matches its LED driver.</li>
                  <li><strong>Watts.</strong> For running cost and for the circuit. Not for brightness.</li>
                </ol>
              </div>
            </div>
            <div className="register-row">
              <h2>Why does a room need a plan, not a lumen chart?</h2>
              <div>
                <p>Because the same lumens feel different in different rooms. Many pages online give a lumen or watt figure per room or per square foot. We do not, because the number leaves out what changes the result:</p>
                <ul className="check-list" style={{ marginTop: 16 }}>
                  <li><span className="tick">✓</span><span><strong>Where the light lands.</strong> Light over the sofa and the table feels brighter than the same light in the middle of an empty ceiling.</span></li>
                  <li><span className="tick">✓</span><span><strong>Glare.</strong> A bright point in your eye makes a room feel harsh, not well lit. <Link href="/guides/why-downlights-glare" style={link}>Why a downlight glares</Link> covers this.</span></li>
                  <li><span className="tick">✓</span><span><strong>The walls.</strong> The eye reads light on walls. A room with lit walls feels brighter than one with a bright ceiling and dark walls.</span></li>
                  <li><span className="tick">✓</span><span><strong>Surfaces.</strong> Dark surfaces take in light that a white wall would bounce back. In many Kerala homes the ceilings, doors and panels are dark timber, so the same lamps can feel dimmer there than in a flat with white walls.</span></li>
                  <li><span className="tick">✓</span><span><strong>Switches.</strong> One switch gives one level. Separate circuits and a dimmer let a room be bright for guests and soft at night.</span></li>
                </ul>
                <p style={{ marginTop: 16 }}>A plan works this out room by room, from the furniture and the finishes. <Link href="/guides/how-a-lighting-plan-is-built" style={link}>How a lighting plan is built</Link> shows the method, and <Link href="/guides/downlight-placement" style={link}>downlight placement</Link> shows it on the ceiling.</p>
              </div>
            </div>
            <div className="register-row">
              <h2>Ready fittings, or a plan?</h2>
              <div>
                <p>If you know what you want, <a href={CELESTIAL} target="_blank" rel="noopener noreferrer" style={link}>Celestial Lights</a> carries ready fittings for every room, at wholesale best rates, and can match any quote. Check the lumens and the K number before you buy.</p>
                <p style={{ marginTop: 16 }}>If the room needs working out first, Elor can write the plan for one room or the whole house. Design services are free*. <Link href="/consultation" style={link}>Book a consultation</Link> and start with a floor plan and a few photos.</p>
              </div>
            </div>
          </div>
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
                <details className="faq-item" name="lumens-vs-watts-faq">
                  <summary>{f.q}</summary>
                  <p className="faq-a">{f.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <RelatedGuides currentSlug="lumens-vs-watts" />
    </>
  );
}
