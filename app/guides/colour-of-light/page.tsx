import type { Metadata } from "next";
import { site } from "@/lib/site";
import { breadcrumbSchema } from "@/lib/schema";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { RelatedGuides } from "@/components/ui/RelatedGuides";

const TITLE = "Kelvin, CRI and Beam Angle — How to Read a Light";
const META_TITLE = "Kelvin, CRI and Beam Angle";
const DESC =
  "2700K for living rooms, 4000K where you work, CRI 90 where colour matters, and a beam that fits the wall. How to specify light for a Kerala home.";
const PATH = "/guides/colour-of-light";
const UPDATED = "23 September 2026";

export const metadata: Metadata = {
  title: META_TITLE,
  description: DESC,
  alternates: { canonical: PATH },
};

const rooms = [
  {
    h: "Living, dining, bedroom — 2700K to 3000K",
    p: "This is the evening colour of the house. Skin, timber, and brass read as themselves. A living room that also hosts dinner can sit at 3000K so the table is clear without the room going cold. Bedrooms stay at 2700K.",
  },
  {
    h: "Kitchen worktop and study — 4000K, on its own switch",
    p: "Chopping, reading a plan, and matching fabric need a clearer white than a sofa does. Put 4000K on the task layer only: under-cabinet strips, a desk lamp, a mirror light. Leave the room’s decorative light at 3000K so the kitchen does not look like an office after eight.",
  },
  {
    h: "Bathroom mirror — 3000K to 4000K, from the sides",
    p: "A single downlight above the mirror puts the eyes in shadow. Two lights at face height, 3000K if the bath is meant to be calm, 4000K if makeup and shaving are the job. Match the two fittings. A 2700K sconce beside a 4000K mirror is the mistake people notice and cannot name.",
  },
  {
    h: "Facade and garden — 2700K to 3000K, aimed down",
    p: "Warm light on laterite, timber, and planting. Cool white on a house front reads as a compound light, not architecture. Keep the beam on the wall and the path. A coastal site also needs a fitting that can live in salt air. That choice is in the coastal guide.",
  },
];

const faqs = [
  {
    q: "What is Kelvin on a light?",
    a: "Kelvin (K) is the colour of the white, not its brightness. 2700K is the warm white of an old filament lamp. 3000K is a clean warm white. 4000K is a neutral white. 6500K is daylight white. A brighter lamp is more lumens, not a higher Kelvin.",
  },
  {
    q: "Should a Kerala home use cool white?",
    a: "Use 2700K to 3000K in the rooms you sit in. Use 4000K only on the work surface, the study, and sometimes the mirror. 5000K and 6500K belong in a workshop, a clinic, and a security floodlight. In a living room they make timber and skin look grey.",
  },
  {
    q: "What CRI should I ask for?",
    a: "CRI 90 or above wherever people, food, fabric, timber, or art are looked at. CRI 80 is acceptable in a store room, a service corridor, and some outdoor floods. A low CRI is why a silk sari or a teak door looks dull under a cheap LED and right under the showroom light.",
  },
  {
    q: "What beam angle do I need?",
    a: "About 10 to 15 degrees to pick out a painting or a column. About 24 to 36 degrees for a table or a general accent. About 45 to 60 degrees to wash a wall evenly. A wide beam on a small painting spills onto the wall around it. A narrow beam used as the only light in a room leaves the corners dark.",
  },
  {
    q: "Can one fitting do every job?",
    a: "No. A room needs layers on separate switches: a soft ambient light, a task light where hands work, an accent on what you want seen, and the decorative piece, which is often the chandelier. One downlight grid on one switch gives you a bright ceiling and a flat room.",
  },
  {
    q: "When do these decisions have to be made?",
    a: "Before the false ceiling closes. Beam position, the separate circuits, and the anchor for a chandelier are all in the slab or the conduit. Changing Kelvin later is a driver or a lamp. Changing where the light lands means opening the ceiling.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: TITLE,
  description: DESC,
  image: `${site.domain}/lifestyle/showroom-grand.jpg`,
  author: { "@type": "Organization", name: site.name, url: site.domain },
  publisher: {
    "@type": "Organization",
    name: site.name,
    logo: { "@type": "ImageObject", url: `${site.domain}/brand/logo-mark.svg` },
  },
  datePublished: "2026-09-23",
  dateModified: "2026-09-23",
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

export default function ColourOfLightGuide() {
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
              { name: "Kelvin, CRI and Beam Angle", path: PATH },
            ])
          ),
        }}
      />

      <section className="page-hero">
        <div className="wrap-tight">
          <Breadcrumbs crumbs={[{ name: "Guides", path: "/guides" }, { name: "Kelvin, CRI and Beam Angle", path: PATH }]} />
          <Reveal as="span"><span className="eyebrow">Technical · Updated {UPDATED}</span></Reveal>
          <Reveal delay={0.06}>
            <h1 className="h-xl" style={{ marginTop: 18 }}>
              Three numbers that decide<br /><span className="serif-i">how a room feels.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="lede" style={{ marginTop: 22 }}>
              A fitting is not specified by its shape alone. Kelvin is the
              colour of the white. CRI is how truly colours appear under it.
              Beam angle is where that light falls. Get those three right and
              a simple room reads as considered. Get them wrong and an
              expensive chandelier still looks harsh.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap-tight">
          <Reveal><h2 className="h-lg">Kelvin is colour, not brightness</h2></Reveal>
          <Reveal delay={0.06}>
            <p className="lede" style={{ marginTop: 16 }}>
              People say “cool white is brighter.” It is only bluer. Brightness
              is lumens. In a Kerala house the rooms you live in want a warm
              white, close to the filament lamps the eye still treats as
              evening light.
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="spec-wrap">
              <table className="spec-table">
                <thead>
                  <tr>
                    <th>Kelvin</th>
                    <th>What it looks like</th>
                    <th>Use it for</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>2700K</td>
                    <td>Warm, slightly amber</td>
                    <td>Bedrooms, lounges, hospitality</td>
                  </tr>
                  <tr>
                    <td>3000K</td>
                    <td>Warm white, cleaner</td>
                    <td>Living, dining, most of the house</td>
                  </tr>
                  <tr>
                    <td>4000K</td>
                    <td>Neutral white</td>
                    <td>Kitchen worktops, study, some mirrors</td>
                  </tr>
                  <tr>
                    <td>6500K</td>
                    <td>Daylight, blue-white</td>
                    <td>Workshops and security floods</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="form-note" style={{ marginTop: 12 }}>
              Mix two Kelvins in one view and the warmer one looks dirty and
              the cooler one looks blue. Pick one colour for the room, and a
              second only on a task that has its own switch.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="sec glow-top">
        <div className="wrap-tight">
          <Reveal><h2 className="h-lg">Where each colour belongs</h2></Reveal>
        </div>
        <div className="wrap">
          <Stagger className="register">
            {rooms.map((room) => (
              <StaggerItem key={room.h} className="register-row">
                <h3>{room.h}</h3>
                <p>{room.p}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="sec">
        <div className="wrap-tight">
          <Reveal><h2 className="h-lg">CRI is whether the colour is true</h2></Reveal>
          <Reveal delay={0.06}>
            <p className="lede" style={{ marginTop: 16 }}>
              Colour Rendering Index runs from 0 to 100. Sunlight is the
              reference. A CRI 80 downlight can be bright and still turn teak
              grey and a tomato dull. Ask for CRI 90, and R9 above 50 if the
              sheet lists it, in every room where material is part of the
              design: living, dining, bedroom, retail, a hotel lobby.
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="lede" style={{ marginTop: 16 }}>
              The showroom is the test. Look at a wood sample and a fabric
              under the fitting you intend to buy, then under the site’s
              existing light. If they disagree, the specification is wrong,
              whatever the brochure says.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="sec glow-top">
        <div className="wrap-tight">
          <Reveal><h2 className="h-lg">Beam angle is where the light stops</h2></Reveal>
          <Reveal delay={0.06}>
            <p className="lede" style={{ marginTop: 16 }}>
              The number in degrees is the cone. A narrow cone is a spotlight.
              A wide cone is a wash. The decorative chandelier is a separate
              decision. Its size comes from the room, which the{" "}
              <a href="/guides/chandelier-size-calculator">size calculator</a>{" "}
              covers.
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="spec-wrap">
              <table className="spec-table">
                <thead>
                  <tr>
                    <th>Beam</th>
                    <th>Typical angle</th>
                    <th>What it is for</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Narrow spot</td>
                    <td>8° to 15°</td>
                    <td>A painting, a niche, a column</td>
                  </tr>
                  <tr>
                    <td>Medium</td>
                    <td>24° to 36°</td>
                    <td>A dining table, a seating group, retail</td>
                  </tr>
                  <tr>
                    <td>Wide flood</td>
                    <td>45° to 60°</td>
                    <td>An even wash down a wall</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="sec">
        <div className="wrap-tight">
          <Reveal><h2 className="h-lg">Four layers, four switches</h2></Reveal>
          <Reveal delay={0.06}>
            <ul className="check-list" style={{ marginTop: 28 }}>
              <li><span className="tick">✓</span>Ambient. Cove or a quiet downlight grid, so you can cross the room. Dimmed low in the evening.</li>
              <li><span className="tick">✓</span>Task. Under the cabinet, over the desk, beside the bed. Brighter than the ambient layer, and able to go off when the work stops.</li>
              <li><span className="tick">✓</span>Accent. A narrow beam on the thing the room is about: a wall, a courtyard, a stair.</li>
              <li><span className="tick">✓</span>Decorative. The chandelier or pendant, which is seen as an object and also throws light. It is not a substitute for the other three.</li>
            </ul>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="lede" style={{ marginTop: 22 }}>
              The circuits for those layers, and the anchor for anything heavy,
              go in before the ceiling boards. The{" "}
              <a href="/guides/false-ceiling-chandelier-weight">false-ceiling guide</a>{" "}
              is the sequence. Salt air changes which metal you can use outside
              and in a coastal room. That is the{" "}
              <a href="/guides/coastal-lighting-kerala">coastal guide</a>.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <Reveal><h2 className="h-lg" style={{ textAlign: "center", marginBottom: 56 }}>Questions, answered</h2></Reveal>
          <div className="faq">
            {faqs.map((f, i) => (
              <Reveal key={f.q} delay={i * 0.04}>
                <details className="faq-item" name="colour-of-light-faq">
                  <summary>{f.q}</summary>
                  <p className="faq-a">{f.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <RelatedGuides currentSlug="colour-of-light" />

      <section className="sec glow-top">
        <div className="wrap-tight" style={{ textAlign: "center" }}>
          <Reveal><h2 className="h-lg">Bring the sample. We&rsquo;ll put it under the light.</h2></Reveal>
          <Reveal delay={0.06}>
            <p className="lede" style={{ margin: "16px auto 0" }}>
              Wood, fabric, or a photo of the room is enough. The Kannur,
              Kochi, and Kozhikode centres have the range lit, so the Kelvin
              is something you see rather than take on trust.
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="cta-ctas" style={{ marginTop: 30 }}>
              <MagneticButton href="/consultation" variant="gold">Book a Consultation <span className="arr">→</span></MagneticButton>
              <MagneticButton href="/stores" variant="ghost">Visit a store</MagneticButton>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
