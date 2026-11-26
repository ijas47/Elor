import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/site";
import { elorContact } from "@/lib/brands";
import { breadcrumbSchema } from "@/lib/schema";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Reveal } from "@/components/motion/Reveal";
import { MagneticButton } from "@/components/motion/MagneticButton";

const TITLE = "Lighting Designer for Homes Across India";
const H1 = "Lighting designer for homes, hotels and shops across India";
const DESC =
  "Lighting designer for any site in India. Elor plans each light before the ceiling closes, on video or in Kannur and Calicut. Design services are free*.";
const PATH = "/lighting-designer";
const CELESTIAL = "https://www.celestiallights.in";
const HERO_IMAGE = "/photos/living-room.jpg";
const HERO_ALT = "A living room at night with lit display shelves and warm seating";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: PATH },
  openGraph: { title: TITLE, description: DESC },
};

const faqs = [
  {
    q: "What does a lighting designer cost?",
    a: "The first session is free and carries no obligation. A firm estimate comes with the plan, so you know the cost before you agree to anything.",
  },
  {
    q: "Do I need a lighting designer for a small flat?",
    a: "Not always. If you are changing one or two lights, you may not need a full plan. But if the ceiling is about to close, a plan saves you from points in the wrong place. We take single rooms as well as full houses, and a residential lighting designer can tell you quickly if a plan is worth it.",
  },
  {
    q: "Can you work with my architect?",
    a: "Yes. We read the drawings, suggest changes where they help, and work with your site team so the scheme is built as drawn.",
  },
  {
    q: "Do you work outside Kerala?",
    a: "Yes. As a lighting designer in India, we design for any site in the country and supply our own fittings. The design can be done without a visit. Installation needs the site: we install custom lights and give installation support for everything else.",
  },
  {
    q: "What should I send to start?",
    a: "The ceiling height, a floor plan or a marked photo, your city, and how the room is used. A picture of a light you like helps us size a custom piece.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${site.domain}${PATH}#service`,
  name: H1,
  serviceType: "Lighting design",
  url: `${site.domain}${PATH}`,
  description:
    "Elor is a lighting design studio that writes the lighting plan for homes, hotels and shops anywhere in India, starting on a video call or at centres in Kannur and Calicut, and makes the custom pieces the plan needs.",
  provider: { "@type": "Organization", name: site.name, url: site.domain },
  areaServed: { "@type": "Country", name: "India" },
};

export default function LightingDesignerPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema([{ name: "Lighting designer", path: PATH }])),
        }}
      />

      <section className="page-hero">
        <div className="wrap-tight">
          <Breadcrumbs crumbs={[{ name: "Lighting designer", path: PATH }]} />
          <Reveal as="span">
            <span className="eyebrow">Lighting design studio · Across India</span>
          </Reveal>
          <Reveal delay={0.06}>
            <h1 className="h-xl" style={{ marginTop: 18 }}>
              {H1}
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="lede" style={{ marginTop: 22 }}>
              Elor is a lighting design studio. As your lighting designer, we write the lighting plan for a home, a hotel or a shop anywhere in India. It can start on a video call or at our centres in Kannur and Calicut (Kochi is opening soon). We also make the custom pieces the plan needs. To start, book a consultation or send us a WhatsApp.
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <div className="cta-ctas" style={{ justifyContent: "flex-start", marginTop: 30 }}>
              <MagneticButton href="/consultation" variant="gold">
                Book a consultation <span className="arr">→</span>
              </MagneticButton>
              <MagneticButton href={elorContact.whatsappHref} variant="ghost" external>
                WhatsApp us
              </MagneticButton>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap-tight">
          <div style={{ position: "relative", aspectRatio: "16 / 9", borderRadius: 18, overflow: "hidden" }}>
            <Image src={HERO_IMAGE} alt={HERO_ALT} fill priority sizes="(max-width: 760px) 100vw, 760px" />
          </div>
        </div>
      </section>

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="register">
            <div className="register-row">
              <h2>What does a lighting designer do before the ceiling closes?</h2>
              <div>
                <p>
                  A lighting designer decides how each room should look at night, then places the light to get there. That work has to be done while the ceiling is still open. After the gypsum goes up, moving a point means cutting the ceiling.
                </p>
                <p style={{ marginTop: 16 }}>Here is what we settle on the plan:</p>
                <ul className="check-list" style={{ marginTop: 12 }}>
                  <li><span className="tick">✓</span><span><strong>Points.</strong> Where each light sits, drawn against the furniture, not a blank ceiling.</span></li>
                  <li><span className="tick">✓</span><span><strong>Circuits.</strong> A separate switch for each layer, so one room can have more than one mood.</span></li>
                  <li><span className="tick">✓</span><span><strong>Anchors.</strong> Heavy pieces are fixed into the slab, planned before the ceiling is built.</span></li>
                  <li><span className="tick">✓</span><span><strong>Colour of light.</strong> One warm or cool tone agreed for the room.</span></li>
                  <li><span className="tick">✓</span><span><strong>Scenes.</strong> The same lights set for a quiet evening, for guests, or for the art.</span></li>
                </ul>
                <p style={{ marginTop: 16 }}>
                  The full order we follow is in{" "}
                  <Link href="/guides/how-a-lighting-plan-is-built" style={{ color: "var(--gold)" }}>how a lighting plan is built</Link>.
                </p>
              </div>
            </div>

            <div className="register-row">
              <h2>What do you get in an Elor lighting plan?</h2>
              <div>
                <p>
                  You get a fixture-by-fixture plan. It shows the position of every light, its colour temperature, the dimming zones, and a transparent estimate.
                </p>
                <p style={{ marginTop: 16 }}>Design services are free*.</p>
              </div>
            </div>

            <div className="register-row">
              <h2>How does it work?</h2>
              <div>
                <p>Our lighting design services follow four steps.</p>
                <ol style={{ marginTop: 12, paddingLeft: 20, display: "grid", gap: 8 }}>
                  <li><strong>Consult.</strong> A free first session at your site, in a store, or on video. We listen before we recommend.</li>
                  <li><strong>Design.</strong> The fixture-by-fixture plan, with positions, colour temperature, dimming zones and a transparent estimate.</li>
                  <li><strong>Supply.</strong> Lights from our own range. You can see them glowing in a store before you commit. Delivered pan-India.</li>
                  <li><strong>Install.</strong> We install custom lights and give installation support for everything else.</li>
                </ol>
                <p style={{ marginTop: 16 }}>You pay only if you ask us to go ahead.</p>
              </div>
            </div>

            <div className="register-row">
              <h2>Can you work with me anywhere in India?</h2>
              <div>
                <p>
                  Yes. Our office and centres are in Kerala. We design for any site in India. Send the floor plan, the ceiling section, and a photo of the site or a light you like. A video call covers the same first consultation you would get in Kannur or Calicut.
                </p>
                <p style={{ marginTop: 16 }}>
                  One honest limit: we do not keep a showroom in other cities. To see the range under real light, you visit Kannur or Calicut, or we walk you through it on video. More on our{" "}
                  <Link href="/india" style={{ color: "var(--gold)" }}>across India page</Link>.
                </p>
              </div>
            </div>

            <div className="register-row">
              <h2>Do you work as a lighting design studio for architects and interior designers?</h2>
              <div>
                <p>
                  Yes. We work from your drawings, a render, a CAD file or a dimensioned sketch. We model the scheme in DIALux and send spec sheets before anything is built. For hotels and multi-unit projects, fixtures can be delivered in phases to match your handover. The details are on our{" "}
                  <Link href="/for/architects-and-designers" style={{ color: "var(--gold)" }}>page for architects and designers</Link>.
                </p>
              </div>
            </div>

            <div className="register-row">
              <h2>What if the light you need does not exist?</h2>
              <div>
                <p>
                  Then we make it. Our factory builds chandeliers, cascades, cluster pendants and statement ceiling pieces, sized to your ceiling. A photo, a render or a sketch is enough to start. See how it works on{" "}
                  <Link href="/customisation" style={{ color: "var(--gold)" }}>customisation</Link>.
                </p>
              </div>
            </div>

            <div className="register-row">
              <h2>Where do the lights come from?</h2>
              <div>
                <p>
                  Most of the plan is filled from Elor&rsquo;s own range, from basic fittings to custom pieces. If a ready light already fits the room, you can buy it from{" "}
                  <a href={CELESTIAL} target="_blank" rel="noopener noreferrer" style={{ color: "var(--gold)" }}>Celestial Lights, our sister store</a>. Celestial offers wholesale best rates, and we can match any quote.
                </p>
              </div>
            </div>

            <div className="register-row">
              <h2>Lighting consultant or lighting designer: is there a difference?</h2>
              <div>
                <p>
                  People often use the two words for the same job. A lighting consultant usually advises and draws the plan. A lighting designer may also pick and supply the fittings. At Elor, the lighting design consultant who writes your plan works with the team that supplies and makes the lights. So the plan you sign off is the plan that gets built.
                </p>
              </div>
            </div>

            <div className="register-row">
              <h2>Where can I visit you?</h2>
              <div>
                <p>Our Celestial Lights centres in Kannur and Calicut are open. Bring your drawings and see the lights lit.</p>
                <ul className="check-list" style={{ marginTop: 12 }}>
                  <li><span className="tick">✓</span><span><strong>Kannur:</strong> Celestial Lights, Philips Building, Kannur, Kerala 670005</span></li>
                  <li><span className="tick">✓</span><span><strong>Kozhikode (Calicut):</strong> Celestial Lights, Kozhikode, Kerala</span></li>
                  <li><span className="tick">✓</span><span><strong>Kochi:</strong> Elor Lighting centre, opening soon</span></li>
                </ul>
                <p style={{ marginTop: 16 }}>
                  Hours: Mon-Sat 9:30 AM to 8:30 PM IST. Full details are on{" "}
                  <Link href="/stores" style={{ color: "var(--gold)" }}>our stores page</Link>.
                </p>
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
                <details className="faq-item" name="lighting-designer-faq">
                  <summary>{f.q}</summary>
                  <p className="faq-a">{f.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
          <p className="form-note" style={{ marginTop: 32, textAlign: "center" }}>
            Planning the house yourself first? Read our{" "}
            <Link href="/guides/home-lighting-design" style={{ color: "var(--gold)" }}>home lighting design guide</Link>.
          </p>
        </div>
      </section>

      <section className="sec glow-top">
        <div className="wrap-tight" style={{ textAlign: "center" }}>
          <Reveal>
            <h2 className="h-lg">Ready to plan your lighting?</h2>
            <p className="lede" style={{ marginTop: 16 }}>Tell us about your space. We reply within one working day.</p>
            <div className="cta-ctas" style={{ marginTop: 28 }}>
              <MagneticButton href="/consultation" variant="gold">
                Book a consultation <span className="arr">→</span>
              </MagneticButton>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
