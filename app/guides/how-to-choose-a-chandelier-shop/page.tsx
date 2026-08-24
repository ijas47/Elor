import type { Metadata } from "next";
import { site } from "@/lib/site";
import { breadcrumbSchema } from "@/lib/schema";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { RelatedGuides } from "@/components/ui/RelatedGuides";

const TITLE = "How to Choose a Chandelier Shop or Fabricator in India";
const META_TITLE = "How to Choose a Chandelier Shop in India";
const DESC =
  "Seven questions that separate a shop that fabricates chandeliers from one that only resells them, so you know what you're buying before you commit.";
const PATH = "/guides/how-to-choose-a-chandelier-shop";
const UPDATED = "24 August 2026";

export const metadata: Metadata = {
  title: META_TITLE,
  description: DESC,
  alternates: { canonical: PATH },
};

const criteria = [
  {
    h: "Do they fabricate, or only import and resell?",
    p: "Many lighting showrooms sell an imported or wholesale catalogue with no in-house fabrication. That is a legitimate business, but it means “custom” usually stops at picking a finish from what already exists. Ask directly: “if I bring you a size or shape you don't stock, can you actually build it, and who builds it?” A shop with its own workshop can answer with a process, not a shrug.",
  },
  {
    h: "Is there a showroom you can stand in?",
    p: "Photographs and renders do not show how a fixture actually throws light, and colour temperature especially never translates through a phone screen. A shop with a real showroom lets you compare warm against cool, and see how crystal, glass and metal differ in person before you commit to a piece that will hang in your home for a decade.",
  },
  {
    h: "Is installation included, or a separate hire?",
    p: "A fixture that ships without installation puts the site coordination, the electrician, and the liability if it is hung wrong onto you. Ask whether installation is quoted with the piece or arranged separately — and if separate, who is responsible if the ceiling anchor or wiring is done incorrectly.",
  },
  {
    h: "What is the actual warranty, in writing?",
    p: "“Warranty included” without a number is not a warranty. Ask for the term in years, what it covers (LED driver failure, finish, structural fatigue), and what voids it. A shop that fabricates its own pieces can usually stand behind them longer, because they know exactly how the piece was built.",
  },
  {
    h: "Can they handle a ceiling or site condition that isn't standard?",
    p: "A false ceiling with limited load capacity, a fan sharing the same point, a sloped or double-height ceiling — these come up constantly in Indian homes and not every shop is equipped to plan around them. Ask what happens if your ceiling can't take the anchor the piece needs. A vague answer here usually means it hasn't come up before, which is itself useful information.",
  },
  {
    h: "How firm is the quote, and when do you pay?",
    p: "A custom piece should get you a firm price after measurement and design, not a range that moves once fabrication starts. Ask when payment is due relative to design approval — paying in full before you have approved a design leaves you with no leverage if the final piece doesn't match the brief.",
  },
  {
    h: "What do their own customers say, and can you verify it?",
    p: "Testimonials on a shop's own website are worth something, but a Google Business Profile with real reviews and dates is easier to verify — you can see when the review was left, cross-check the reviewer's other activity, and read the shop's replies to complaints. If a shop that has been operating for years has no third-party reviews anywhere, ask why.",
  },
];

const faqs = [
  {
    q: "What's the difference between a custom chandelier shop and one that just sells ready-made fixtures?",
    a: "A custom shop has its own design and fabrication capability — it can build a fixture to a size, shape or material you specify, not just sell what's already in stock. A ready-made shop imports or wholesales a catalogue and offers finish or size variants within it. Both are legitimate, but they answer different needs: ask directly whether fabrication happens in-house.",
  },
  {
    q: "Should I buy a chandelier online without seeing it in person first?",
    a: "For a small, inexpensive accent piece, often fine. For a statement chandelier that will be the focal point of a room, seeing it lit in person matters — colour temperature, sparkle and scale rarely translate accurately through photography. If there's no showroom near you, ask for a video call under real lighting conditions before committing.",
  },
  {
    q: "Is installation usually included when you buy a chandelier?",
    a: "It varies by shop, and this is one of the most important questions to ask upfront. Some quote the piece and installation together; others sell the fixture only and leave you to arrange an electrician. Get this confirmed in writing before ordering, since a badly installed fixture is a safety issue, not just a cosmetic one.",
  },
  {
    q: "How do I know if a chandelier warranty is actually worth anything?",
    a: "Ask for the term in years and exactly what it covers — LED driver, finish, structural joints — in writing, not verbally. A shop that fabricates its own pieces can usually offer a longer, more specific warranty than one reselling an imported catalogue, because they know the piece's construction firsthand.",
  },
  {
    q: "What should I ask before ordering a chandelier for an unusual ceiling?",
    a: "Ask specifically how they handle your ceiling type — false ceiling load limits, a shared point with a ceiling fan, sloped or double-height ceilings all change what's possible. A shop that fabricates in-house can usually adapt the fixture's mounting to the site; one that only resells often can't.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: TITLE,
  description: DESC,
  image: `${site.domain}/lifestyle/store-wall.jpg`,
  author: { "@type": "Organization", name: site.name, url: site.domain },
  publisher: {
    "@type": "Organization",
    name: site.name,
    logo: { "@type": "ImageObject", url: `${site.domain}/brand/logo-mark.svg` },
  },
  datePublished: "2026-08-24",
  dateModified: "2026-08-24",
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

export default function ChooseAShopGuide() {
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
              { name: "How to Choose a Chandelier Shop", path: PATH },
            ])
          ),
        }}
      />

      <section className="page-hero">
        <div className="wrap-tight">
          <Breadcrumbs crumbs={[{ name: "Guides", path: "/guides" }, { name: "How to Choose a Chandelier Shop", path: PATH }]} />
          <Reveal as="span"><span className="eyebrow">Buying Guide · Updated {UPDATED}</span></Reveal>
          <Reveal delay={0.06}>
            <h1 className="h-xl" style={{ marginTop: 18 }}>
              What separates a real fabricator<br /><span className="serif-i">from a reseller.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="lede" style={{ marginTop: 22 }}>
              India has no shortage of lighting shops. It has far fewer that
              actually design and build what they sell. Seven questions to ask
              any shop before you commit — including us — so you know
              exactly what you&rsquo;re buying.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap-tight">
          <Reveal>
            <p className="lede">
              This isn&rsquo;t a ranked list of shops — we can&rsquo;t
              honestly evaluate businesses we don&rsquo;t run, and a
              self-scored comparison would be worth exactly as much as you&rsquo;d
              expect. What we can do is tell you what actually matters when
              you&rsquo;re standing in a showroom or reading a quote, because
              these are the questions our own customers ask us before they buy.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="sec glow-top">
        <div className="wrap-tight">
          <Reveal><h2 className="h-lg">Seven questions to ask</h2></Reveal>
        </div>
        <div className="wrap">
          <Stagger className="register">
            {criteria.map((c) => (
              <StaggerItem key={c.h} className="register-row">
                <h3>{c.h}</h3>
                <p>{c.p}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="sec">
        <div className="wrap-tight">
          <Reveal><h2 className="h-lg">Where we stand on each</h2></Reveal>
          <Reveal delay={0.06}>
            <p className="lede" style={{ marginTop: 16 }}>
              In the interest of the same transparency this guide is asking
              other shops for:
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <ul className="check-list" style={{ marginTop: 28 }}>
              <li><span className="tick">✓</span>We fabricate in-house — custom pieces are designed and built to your ceiling, not selected from a fixed catalogue.</li>
              <li><span className="tick">✓</span>Three physical showrooms in Kerala, plus video consultation if you&rsquo;re elsewhere.</li>
              <li><span className="tick">✓</span>Installation is quoted with the piece, not arranged separately.</li>
              <li><span className="tick">✓</span>Up to 5-year warranty, confirmed in writing at consultation.</li>
              <li><span className="tick">✓</span>We plan around false ceilings, shared fan points and non-standard ceilings as a normal part of the process — see the <a href="/guides/false-ceiling-chandelier-weight">false ceiling guide</a> and <a href="/guides/chandelier-with-ceiling-fan">ceiling fan guide</a>.</li>
              <li><span className="tick">✓</span>Firm pricing after design approval, before fabrication starts.</li>
            </ul>
          </Reveal>
        </div>
      </section>

      <RelatedGuides currentSlug="how-to-choose-a-chandelier-shop" />

      <section className="sec glow-top">
        <div className="wrap-tight" style={{ textAlign: "center" }}>
          <Reveal><h2 className="h-lg">Ask us the same questions.</h2></Reveal>
          <Reveal delay={0.06}>
            <p className="lede" style={{ margin: "16px auto 0" }}>
              A free consultation is the fastest way to see how we answer
              them, with your actual room and ceiling in front of us.
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="cta-ctas" style={{ marginTop: 30 }}>
              <MagneticButton href="/consultation" variant="gold">Book a Consultation <span className="arr">→</span></MagneticButton>
              <MagneticButton href="/stores" variant="ghost">Visit a Store</MagneticButton>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
