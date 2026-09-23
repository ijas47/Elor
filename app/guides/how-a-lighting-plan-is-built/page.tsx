import type { Metadata } from "next";
import { site } from "@/lib/site";
import { breadcrumbSchema } from "@/lib/schema";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { RelatedGuides } from "@/components/ui/RelatedGuides";

const TITLE = "How a Lighting Plan Is Built — Layers, Walls and Scenes";
const META_TITLE = "How a Lighting Plan Is Built";
const DESC =
  "A lighting plan starts with the furniture and the walls, then the layers, the wall wash, and the scenes. How Elor marks a Kerala ceiling before it closes.";
const PATH = "/guides/how-a-lighting-plan-is-built";
const UPDATED = "23 September 2026";

export const metadata: Metadata = {
  title: META_TITLE,
  description: DESC,
  alternates: { canonical: PATH },
};

const steps = [
  {
    h: "1. Name what should be seen",
    p: "A wall, a painting, a worktop, a path, a courtyard, a place to sit. The plan is a list of those things and the light each one needs. A ceiling full of identical downlights is what you get when that list was never written.",
  },
  {
    h: "2. Draw the furniture first",
    p: "The sofa, the table, the bed, and the art decide the points. A downlight centred on an empty ceiling drawing lands on nobody once the dining table moves. We ask for the furniture plan, or a marked-up photo, before a single point is fixed.",
  },
  {
    h: "3. Give each job its own layer",
    p: "Ambient light lets you cross the room. Vertical light puts brightness on the wall and the art. Task light sits where hands work. Concealed light, in a cove or a pelmet, gives the ceiling and the joinery depth. The chandelier or pendant is the object in the room, and it is specified on top of those layers, not instead of them. Each layer gets its own switch.",
  },
  {
    h: "4. Treat the wall as a surface",
    p: "A calm wall is a wash: fittings set off the wall, spaced so the bright arcs overlap, with an optic made for vertical light. A downlight aimed at a wall from too close paints a row of scallops. On a ceiling around 3 m, the setback often lands between 600 mm and 900 mm, and the spacing follows the setback. The optic and the ceiling build-up change that. We check it on the section, not from a number applied to every room.",
  },
  {
    h: "5. Resolve the ceiling before choosing the fitting",
    p: "Gypsum depth, a deep baffle, where the driver sits, and whether a trimless fitting has room to recess. Glare is settled here. A pretty fitting with the lamp in your eye at the sofa fails, whatever the finish. Heavy pieces anchor into the slab. That sequence is the false-ceiling guide.",
  },
  {
    h: "6. Write the scenes",
    p: "The same installation should do three evenings. Quiet: ambient and the decorative piece low, a little vertical light left on so the room keeps its depth. Guests: ambient up, the piece on, task light off. Looking at the art or the courtyard: vertical light up, ambient down. If every layer is on one dimmer, you only have one scene, brighter or darker.",
  },
];

const faqs = [
  {
    q: "What is a lighting plan?",
    a: "A drawing, or a marked ceiling, that says where each light goes, which circuit it is on, what colour it is, and what it is meant to light. It is made before the false ceiling closes. The chandelier is one line on that plan, not the whole plan.",
  },
  {
    q: "Why not fill the ceiling with downlights?",
    a: "A grid lights the floor evenly and leaves the walls dark. Rooms feel flat because the eye reads vertical brightness, not a bright ceiling. Downlights stay in the plan where a task or a path needs them. They stop being the only idea.",
  },
  {
    q: "What is a wall wash?",
    a: "A row of fittings set back from a wall so the light covers it from top to bottom without a row of bright arcs. The setback, the spacing, and the optic have to agree. On a typical home ceiling the setback is often 600 mm to 900 mm, then checked against the real section.",
  },
  {
    q: "What are lighting scenes?",
    a: "The same fittings at different levels for different uses of the room. Evening, guests, and looking at art are three useful ones in a home. They need the layers on separate circuits, or on a dimmer that can recall those levels.",
  },
  {
    q: "What do I need to send Elor?",
    a: "A floor plan if you have one, ceiling height, a photo of the room or the site, and a note on how the room is used. A picture of a light you like is welcome. The picture sizes the piece. The plan places everything else.",
  },
  {
    q: "Can this be done if I am not in Kerala?",
    a: "The plan and the quotation can be done from drawings and video. The slab anchor and the installation need someone on site, from the Kannur, Kochi, or Kozhikode centre, depending on where the house is.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: TITLE,
  description: DESC,
  image: `${site.domain}/spaces/living.jpg`,
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

export default function LightingPlanGuide() {
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
              { name: "How a Lighting Plan Is Built", path: PATH },
            ])
          ),
        }}
      />

      <section className="page-hero">
        <div className="wrap-tight">
          <Breadcrumbs crumbs={[{ name: "Guides", path: "/guides" }, { name: "How a Lighting Plan Is Built", path: PATH }]} />
          <Reveal as="span"><span className="eyebrow">Technical · Updated {UPDATED}</span></Reveal>
          <Reveal delay={0.06}>
            <h1 className="h-xl" style={{ marginTop: 18 }}>
              The ceiling is the last<br /><span className="serif-i">thing we draw.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="lede" style={{ marginTop: 22 }}>
              A lighting plan names what should be seen, then gives each of
              those things its own light. The fittings hide in the ceiling.
              They are not the design. This is the order we use for a house,
              a hotel, or a shop, before the gypsum goes up.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <Stagger className="register">
            {steps.map((step) => (
              <StaggerItem key={step.h} className="register-row">
                <h3>{step.h}</h3>
                <p>{step.p}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="sec glow-top">
        <div className="wrap-tight">
          <Reveal><h2 className="h-lg">What the plan has to settle</h2></Reveal>
          <Reveal delay={0.06}>
            <p className="lede" style={{ marginTop: 16 }}>
              Colour, truth of colour, and beam are the three numbers on each
              fitting. They have their own guide:{" "}
              <a href="/guides/colour-of-light">Kelvin, CRI and beam angle</a>.
              The plan is where those numbers get a place in the room.
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <ul className="check-list" style={{ marginTop: 28 }}>
              <li><span className="tick">✓</span>A point for every layer, drawn against the furniture, not against a blank ceiling.</li>
              <li><span className="tick">✓</span>A separate circuit for ambient, vertical, task, concealed, and the decorative piece.</li>
              <li><span className="tick">✓</span>Kelvin agreed once for the room, with 4000K only on the work surface.</li>
              <li><span className="tick">✓</span>The chandelier’s anchor in the slab, and its size taken from the room. The size calculator does that part.</li>
              <li><span className="tick">✓</span>Outside, and on the coast, a fitting that can live in salt air. That is a materials choice, covered in the coastal guide.</li>
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="sec">
        <div className="wrap-tight">
          <Reveal><h2 className="h-lg">Three scenes, one installation</h2></Reveal>
          <Reveal delay={0.06}>
            <div className="spec-wrap">
              <table className="spec-table">
                <thead>
                  <tr>
                    <th>Layer</th>
                    <th>Quiet evening</th>
                    <th>Guests</th>
                    <th>Art or courtyard</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Ambient</td>
                    <td>Low</td>
                    <td>Up</td>
                    <td>Down</td>
                  </tr>
                  <tr>
                    <td>Wall and art</td>
                    <td>A little on</td>
                    <td>On</td>
                    <td>Full</td>
                  </tr>
                  <tr>
                    <td>Task</td>
                    <td>Off</td>
                    <td>Off</td>
                    <td>Off</td>
                  </tr>
                  <tr>
                    <td>Concealed</td>
                    <td>Low</td>
                    <td>On</td>
                    <td>Low</td>
                  </tr>
                  <tr>
                    <td>Chandelier</td>
                    <td>Low</td>
                    <td>On</td>
                    <td>Low, so the wall leads</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="form-note" style={{ marginTop: 12 }}>
              Levels are set in the room, on the dimmers, once the furniture
              is in. The plan’s job is to make those five rows possible.
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
                <details className="faq-item" name="lighting-plan-faq">
                  <summary>{f.q}</summary>
                  <p className="faq-a">{f.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <RelatedGuides currentSlug="how-a-lighting-plan-is-built" />

      <section className="sec glow-top">
        <div className="wrap-tight" style={{ textAlign: "center" }}>
          <Reveal><h2 className="h-lg">Send the plan of the room.</h2></Reveal>
          <Reveal delay={0.06}>
            <p className="lede" style={{ margin: "16px auto 0" }}>
              A floor plan, the ceiling height, and a photo are enough to
              start. You can see the layers switched separately in Kannur,
              Kochi, and Kozhikode.
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="cta-ctas" style={{ marginTop: 30 }}>
              <MagneticButton href="/consultation" variant="gold">Book a Consultation <span className="arr">→</span></MagneticButton>
              <MagneticButton href="/guides/colour-of-light" variant="ghost">Kelvin, CRI, beam</MagneticButton>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
