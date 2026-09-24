import type { Metadata } from "next";
import { site } from "@/lib/site";
import { breadcrumbSchema } from "@/lib/schema";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { MagneticButton } from "@/components/motion/MagneticButton";

const TITLE = "Lighting Design and Installation Across India";
const META_TITLE = "Lighting Design Across India";
const DESC =
  "Elor designs lighting for any site in India and installs it with our own fittings and crew. Experience centres and the office are in Kannur, Calicut and Kochi.";
const PATH = "/india";

export const metadata: Metadata = {
  title: META_TITLE,
  description: DESC,
  alternates: { canonical: PATH },
};

const steps = [
  {
    h: "The plan starts wherever the drawings are",
    p: "Send the floor plan, the ceiling section, and a photo of the site or a reference light. A video call covers the same first consultation you would have in Kannur, Kochi, or Kozhikode. The scheme is modelled before the ceiling closes, including positions, circuits, colour, and the custom piece if the room needs one.",
  },
  {
    h: "The fittings are ours",
    p: "Supply comes from Elor’s own line, from basic fittings to the custom chandeliers made in our factory. There is no third-party catalogue in the middle of the specification. What is drawn is what arrives.",
  },
  {
    h: "Our crew installs",
    p: "Installation is not handed to a local shop we have never met. Our crew hangs, aims, and sets the scenes on site, then the warranty sits with us. The experience centres stay in Kerala. The project does not have to.",
  },
];

const faqs = [
  {
    q: "Do you have an office in my city?",
    a: "The office and the three experience centres are in Kerala: Celestial Lights in Kannur and Calicut, and Elor Lighting in Kochi. We do not keep a showroom in other cities. We design for the site wherever it is, and we travel to install.",
  },
  {
    q: "Can the whole project be done without a visit to Kerala?",
    a: "The design can. Drawings, a video call, and a reference photo are enough to quote and to draw the plan. Installation needs the site. Seeing the range in person means a visit to one of the three centres, or a video walk-through of the same floor.",
  },
  {
    q: "Who supplies the lights?",
    a: "We do. The ready fittings and the made-to-order pieces are Elor’s own line. A custom chandelier is built in our factory, not bought in and rebadged.",
  },
  {
    q: "Who installs outside Kerala?",
    a: "Our crew. The same team that installs in Kerala travels to the project. We do not appoint an unknown local installer and call it done.",
  },
  {
    q: "What should I send to start?",
    a: "Ceiling height, a floor plan or a marked photo, the city, and how the room is used. A picture of a light you like sizes the custom piece. The plan places everything else.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Lighting design and installation across India",
  serviceType: "Architectural lighting design and installation",
  provider: { "@type": "Organization", name: site.name, url: site.domain },
  areaServed: { "@type": "Country", name: "India" },
  description: DESC,
  url: `${site.domain}${PATH}`,
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

export default function IndiaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema([{ name: "Across India", path: PATH }])),
        }}
      />

      <section className="page-hero">
        <div className="wrap-tight">
          <Breadcrumbs crumbs={[{ name: "Across India", path: PATH }]} />
          <Reveal as="span"><span className="eyebrow">Design anywhere · Install with our own line</span></Reveal>
          <Reveal delay={0.06}>
            <h1 className="h-xl" style={{ marginTop: 18 }}>
              The centres are in Kerala.<br /><span className="serif-i">The work is not.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="lede" style={{ marginTop: 22 }}>
              Elor writes the lighting plan for a house, a hotel, or a shop
              anywhere in India, supplies the fittings we make, and sends our
              own crew to install them. Kannur and Calicut are Celestial Lights
              experience centres. Kochi is Elor’s. There is no fourth showroom
              pretending to be local.
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <div className="cta-ctas" style={{ justifyContent: "flex-start", marginTop: 30 }}>
              <MagneticButton href="/consultation" variant="gold">Start with the drawings <span className="arr">→</span></MagneticButton>
              <MagneticButton href="/stores" variant="ghost">The three centres</MagneticButton>
            </div>
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
          <Reveal><h2 className="h-lg">What travels, and what stays</h2></Reveal>
          <Reveal delay={0.08}>
            <ul className="check-list" style={{ marginTop: 28 }}>
              <li><span className="tick">✓</span>The plan, the quotation, and the factory piece can be settled from anywhere.</li>
              <li><span className="tick">✓</span>Installation is our crew, on your site, with our fittings.</li>
              <li><span className="tick">✓</span>Seeing the range under real light means Kannur, Calicut, or Kochi, or a video from that floor.</li>
              <li><span className="tick">✓</span>Architects specifying from another city use the same trade path as a Kerala studio. The notes are on the <a href="/for/architects-and-designers">architect page</a>.</li>
              <li><span className="tick">✓</span>How the plan is drawn, including layers and scenes, is the <a href="/guides/how-a-lighting-plan-is-built">lighting-plan guide</a>.</li>
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <Reveal><h2 className="h-lg" style={{ textAlign: "center", marginBottom: 56 }}>Questions, answered</h2></Reveal>
          <div className="faq">
            {faqs.map((f, i) => (
              <Reveal key={f.q} delay={i * 0.04}>
                <details className="faq-item" name="india-faq">
                  <summary>{f.q}</summary>
                  <p className="faq-a">{f.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
