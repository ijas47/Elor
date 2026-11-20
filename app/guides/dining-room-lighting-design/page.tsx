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

const TITLE = "Dining Room Lighting Design: Start With the Table";
const CRUMB = "Dining Room Lighting Design";
const DESC =
  "Dining room lighting design: centre the light on the table, hang it 75 to 90 cm above the top, give it its own switch, and keep it clear of the fan.";
const PATH = "/guides/dining-room-lighting-design";
const CELESTIAL = "https://www.celestiallights.in";
const { updated: UPDATED, modified: MODIFIED } = guideDates(PATH);

const HERO_IMAGE = "/images/guides/chandelier-size-calculator/dining-chandelier-scale.webp";
const HERO_ALT =
  "A brass chandelier hanging over a dining table in a modern apartment, sized to the table rather than the whole room";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: PATH },
  openGraph: {
    title: TITLE,
    description: DESC,
    images: [{ url: HERO_IMAGE, width: 1200, height: 670, alt: HERO_ALT }],
  },
};

const faqs = [
  {
    q: "Can one chandelier light a living-dining hall?",
    a: "Usually not well. Sized to the whole hall, it is too big for the table. Hung in the middle, it lights the walkway between the two areas. Give the dining table its own light, and the seating its own.",
  },
  {
    q: "How high above the table should a chandelier hang?",
    a: "75 to 90 cm above the tabletop. That keeps faces in view across the table and the light on the food. If people walk under it, the 2.1 m head clearance applies instead.",
  },
  {
    q: "What size light goes over a dining table?",
    a: "Half to two-thirds of the table's short side. A 1 m wide table takes a 50 to 65 cm fixture. The size calculator does the sum for your table.",
  },
  {
    q: "What if the table will move later?",
    a: "Mark two anchor points in the slab while the ceiling is still open, so the light can follow the table. A downlight centred on an empty drawing lands on nobody once the table moves, so plan from the furniture.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Dining room lighting design: start with the table",
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

export default function DiningRoomLightingDesignGuide() {
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
              Dining room lighting design: start with the table
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="lede" style={{ marginTop: 22 }}>
              Good dining room lighting design starts with the table. Size the light to the table, centre it over the table, and hang it 75 to 90 cm above the top so faces stay in view. Put it on its own switch, keep it clear of the fan, and add a soft fill so the room never goes dark.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap-tight">
          <ul className="check-list">
            <li><span className="tick">✓</span>Centre the light on the table and size it to the table, not the room.</li>
            <li><span className="tick">✓</span>Hang it 75 to 90 cm above the tabletop.</li>
            <li><span className="tick">✓</span>Give it its own switch, and keep it clear of the ceiling fan.</li>
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
            Most dining tables in Indian homes do not sit in a room of their own. They share a long hall with the sofas, or sit between the living room and the kitchen. That is why a light picked for the whole room so often ends up too big, too high, or over the wrong spot. This guide is the dining plan. The{" "}
            <Link href="/guides/chandelier-size-calculator" style={link}>chandelier size calculator</Link> does the maths.
          </p>
        </div>
      </section>

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="register">
            <div className="register-row">
              <h2>Why does the table, not the room, set the size?</h2>
              <div>
                <p>Because the light is there for the table. Over a dining table, size the piece to half to two-thirds of the table&apos;s short side. A 1 m wide table takes a 50 to 65 cm fixture. Sized to the whole room instead, it overhangs the edges, and people knock their heads reaching across.</p>
                <p style={{ marginTop: 16 }}>This matters most in combined living-dining halls. Take the diameter from the full length of the hall and it lands far too large for the table. Treat the dining end as its own space, with its own light, centred on the table, not on the room or the ceiling. In many Kerala homes the dining table sits between the kitchen and the living room, and it is where the family spends the evening, so that end of the hall earns its own plan.</p>
                <p style={{ marginTop: 16 }}>A long table can take a linear piece that follows its length, or more than one pendant, each sized to the table. The <Link href="/guides/chandelier-size-calculator" style={link}>calculator</Link> has a &quot;Hanging over a dining table?&quot; setting that switches to the table rule.</p>
              </div>
            </div>
            <div className="register-row">
              <h2>How high should a light hang over a dining table?</h2>
              <div>
                <p>75 to 90 cm above the tabletop. That keeps sightlines across the table open, and keeps the light close enough to pool on the table rather than wash the whole room.</p>
                <p style={{ marginTop: 16 }}>The drawback is that this height only works because people sit at a table. If the light hangs where people walk, the walking rule wins: 2.1 m is the minimum head clearance anywhere people walk, and more in a thoroughfare. So if the table may be pushed to one side for a party, or the light is off-centre over a walkway, plan for that before you pick the drop.</p>
              </div>
            </div>
            <div className="register-row">
              <h2>What other light does a dining area need?</h2>
              <div>
                <p>More than the piece over the table. When the chandelier is dimmed for dinner, the rest of the room should not go dark.</p>
                <ul className="check-list" style={{ marginTop: 16 }}>
                  <li><span className="tick">✓</span><strong>The piece over the table.</strong> It lights the food and the faces, and it is the one people look at. Put it on its own switch, and on a dimmer if the fitting and its driver support one.</li>
                  <li><span className="tick">✓</span><strong>A soft fill.</strong> A cove or a few downlights on a separate dimmer, so the room is not a cave when the table light is low. Keep downlights away from the seated eye. <Link href="/guides/downlight-placement" style={link}>Downlight placement</Link> covers where they go.</li>
                  <li><span className="tick">✓</span><strong>One colour.</strong> A room that hosts dinner can sit at 3000K, and the dining and kitchen lights should match so food looks the same on the counter and on the plate. If you add spots on the table, a 24° to 36° beam suits it. The numbers are in <Link href="/guides/colour-of-light" style={link}>Kelvin, CRI and beam angle</Link>.</li>
                </ul>
                <p style={{ marginTop: 16 }}>In a combined hall, plan the living, dining and kitchen lights together so the ends of the room do not compete. The <Link href="/guides/chandelier-for-living-room" style={link}>living room guide</Link> covers the seating side.</p>
              </div>
            </div>
            <div className="register-row">
              <h2>How do ceiling fans and false ceilings change the plan?</h2>
              <div>
                <p>They decide where the light can go, so settle them first.</p>
                <p style={{ marginTop: 16 }}><strong>Ceiling fans.</strong> The fan and the chandelier should not share a point or a circuit. Measure centre to centre: the fan&apos;s blade radius, plus 600 mm of clear air, plus the fixture&apos;s own radius. A 1200 mm fan and a 60 cm fixture need about 1.50 m. A common layout keeps the fan over the seating and puts the light over the table. The <Link href="/guides/chandelier-with-ceiling-fan" style={link}>chandelier with a ceiling fan guide</Link> has the other layouts.</p>
                <p style={{ marginTop: 16 }}><strong>False ceilings.</strong> Gypsum and POP are finishes, not structure. The anchor for the dining light goes into the slab, marked while the ceiling is open, and the ceiling is built around it. The <Link href="/guides/false-ceiling-chandelier-weight" style={link}>false-ceiling guide</Link> sets out what each build-up can carry.</p>
              </div>
            </div>
            <div className="register-row">
              <h2>Ready from Celestial, or made by Elor?</h2>
              <div>
                <p>If a ready piece fits your table, <a href={CELESTIAL} target="_blank" rel="noopener noreferrer" style={link}>Celestial Lights</a> carries ready fittings for every room, at wholesale best rates, and can match any quote. Take the table&apos;s size and the ceiling height with you.</p>
                <p style={{ marginTop: 16 }}>If nothing ready fits the table, the ceiling or the finish you want, Elor makes one. Most custom pieces are designed, made and installed within 3 to 6 weeks, depending on size and finish, with a warranty of up to 5 years. <Link href="/customisation" style={link}>Send a picture</Link> of the room to start.</p>
                <p style={{ marginTop: 16 }}>If you want the whole hall planned first, <Link href="/consultation" style={link}>book a consultation</Link>. Design services are free*.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap-tight">
          <div className="cta-ctas" style={{ marginTop: 30 }}>
            <MagneticButton href="/consultation" variant="gold">Book a consultation <span className="arr">→</span></MagneticButton>
            <MagneticButton href="/customisation" variant="ghost">Custom lights <span className="arr">→</span></MagneticButton>
            <MagneticButton href={CELESTIAL} variant="ghost" external>See the range <span className="arr">→</span></MagneticButton>
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
                <details className="faq-item" name="dining-room-lighting-design-faq">
                  <summary>{f.q}</summary>
                  <p className="faq-a">{f.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <RelatedGuides currentSlug="dining-room-lighting-design" />
    </>
  );
}
