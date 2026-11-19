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

const TITLE = "Track and Magnetic Track Lighting for a Home";
const CRUMB = "Track and Magnetic Track Lighting for a Home";
const DESC =
  "Track and magnetic track lighting for a home: use it for art walls or rooms that will change, and plan the feed before the ceiling closes.";
const PATH = "/guides/track-lighting";
const CELESTIAL = "https://www.celestiallights.in";
const { updated: UPDATED, modified: MODIFIED } = guideDates(PATH);

const HERO_IMAGE = "/images/guides/track-lighting/ceiling-track-lighting-dining-room.webp";
const HERO_ALT =
  "A slim black ceiling track with adjustable heads aimed at a laterite wall and a teak dining table";
const BODY_IMAGE = "/images/guides/track-lighting/track-lights-aimed-at-laterite-wall.webp";
const BODY_ALT =
  "Track lights aimed at a laterite wall and a painting, lighting the surface without flooding the room";

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
  { q: "Can I add heads later?", a: "Often yes, on the same run of track, if the feed and the load were planned for it. That is one reason people choose track. It is not a reason to undersize the feed and hope." },
  { q: "Does track replace a chandelier?", a: "No. Track is a way to aim light along a line. A chandelier is a hanging piece you see. They can share a room, on separate switches, with the chandelier fixed to the slab." },
  { q: "Can I fit track after the false ceiling is finished?", a: "Surface track can sometimes be added on the finished ceiling, but the feed still has to reach it neatly. Recessed track, and a hidden driver, are much easier to plan while the ceiling is open. Do not count on cutting a clean line later." },
];

const faqBodies = [
  <>Often yes, on the same run of track, if the feed and the load were planned for it. That is one reason people choose track. It is not a reason to undersize the feed and hope.</>,
  <>No. Track is a way to aim light along a line. A chandelier is a hanging piece you see. They can share a room, on separate switches, with the chandelier fixed to the slab.</>,
  <>Surface track can sometimes be added on the finished ceiling, but the feed still has to reach it neatly. Recessed track, and a hidden driver, are much easier to plan while the ceiling is open. Do not count on cutting a clean line later.</>,
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Track and magnetic track lighting for a home",
  description: DESC,
  image: `${site.domain}${HERO_IMAGE}`,
  author: { "@type": "Organization", name: site.name, url: site.domain },
  publisher: {
    "@type": "Organization",
    name: site.name,
    logo: { "@type": "ImageObject", url: `${site.domain}/brand/logo-mark.svg` },
  },
  datePublished: "2026-11-19",
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

export default function TrackLightingGuide() {
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
            <span className="eyebrow">Guide · Updated {UPDATED}</span>
          </Reveal>
          <Reveal delay={0.06}>
            <h1 className="h-xl" style={{ marginTop: 18 }}>
              Track and magnetic track lighting for a home
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="lede" style={{ marginTop: 22 }}>
              Track lighting is for a room that will change, or a wall you want to aim at. The feed and the driver go in before the false ceiling closes. Heads can glare if they aim into the sofa, so aim is part of the plan. Elor plans the ceiling. Design is free with purchase from Celestial.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap-tight">
          <ul className="check-list">
              <li><span className="tick">✓</span>Track is for a wall you want to aim at, or a room that will change.</li>
              <li><span className="tick">✓</span>The feed and the driver go in before the false ceiling closes.</li>
              <li><span className="tick">✓</span>Heads can glare if they aim into the sofa.</li>
          </ul>

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
            <div className="register-row">
              <h2>When a track is the right tool</h2>
              <div>
                <p>Track is a rail with heads you can move or aim. It is useful over a kitchen run, along an art wall, in a shop, or in a room you know will be rearranged. You can shift a head when a picture moves, or add a head later if the feed was planned for it.</p>
                <p style={{ marginTop: 16 }}>Fixed downlights are often simpler when the furniture will stay put and you only need a quiet, hidden lamp in the ceiling. Track is not automatically better, and it is not automatically cheaper. It is the right tool when aim and change matter more than a clean, empty ceiling.</p>
                <p style={{ marginTop: 16 }}>A whole-ceiling plan still comes first. That is in <Link href="/guides/ceiling-and-lighting-design" style={{ color: "var(--gold)" }}>ceiling and lighting design</Link> and <Link href="/guides/how-a-lighting-plan-is-built" style={{ color: "var(--gold)" }}>how a lighting plan is built</Link>.</p>
              </div>
            </div>
            <div className="register-row">
              <h2>Ordinary track and magnetic track</h2>
              <div>
                <p>Ordinary track is a rail you clip or slide heads onto. Magnetic track is a slimmer rail that holds the heads with magnets, so they can be moved along it with less hardware showing.</p>
                <p style={{ marginTop: 16 }}>That is the practical difference for a home. The electrician and the fitting you choose decide those details.</p>
              </div>
            </div>
            <div className="register-row">
              <h2>What has to go into the ceiling</h2>
              <div>
                <p>The feed point, the driver, and a straight run aligned with the furniture have to be decided before the false ceiling closes. A zigzag added after the boards are up looks like an afterthought and is harder to power neatly.</p>
                <p style={{ marginTop: 16 }}>Leave access to the driver. Recessed track needs a clean line in the ceiling, marked on the drawing, not cut by eye later. Surface track can sit below the finished ceiling, but the feed still has to reach it without a messy cable.</p>
              </div>
            </div>
            <div className="register-row">
              <h2>Glare and aim</h2>
              <div>
                <p>Adjustable heads are useful, and they can shine straight into someone&apos;s eyes if they point at the sofa or along a sight line. Aim them at the wall, the worktop, or the object, not at the seated face. The same glare problem with downlights is explained in <Link href="/guides/why-downlights-glare" style={{ color: "var(--gold)" }}>why downlights glare</Link>. How to place fixed spots, when those are the better tool, is in <Link href="/guides/downlight-placement" style={{ color: "var(--gold)" }}>how to place downlights</Link>.</p>
                <p style={{ marginTop: 16 }}>Match the colour of the track heads to the rest of the room. Those numbers are in <Link href="/guides/colour-of-light" style={{ color: "var(--gold)" }}>colour of light</Link>.</p>

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
            <div className="register-row">
              <h2>Ready track, or a plan</h2>
              <div>
                <p>Look for ready track at <a href={CELESTIAL} target="_blank" rel="noopener noreferrer">Celestial Lights</a>, if it is in the range. Elor plans the run, the feed, and the aim. Design is free with purchase from Celestial.</p>
                <p style={{ marginTop: 16 }}>If the ceiling is still open, <Link href="/consultation" style={{ color: "var(--gold)" }}>book a lighting consultation</Link> and draw the track with the rest of the house.</p>
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
                <details className="faq-item" name="track-lighting-faq">
                  <summary>{f.q}</summary>
                  <p className="faq-a">{faqBodies[i]}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap-tight">
          <div className="cta-ctas" style={{ marginTop: 30 }}>
            <MagneticButton href="/consultation" variant="gold">Book a consultation <span className="arr">→</span></MagneticButton>
            <MagneticButton href={CELESTIAL} variant="ghost" external>See the range <span className="arr">→</span></MagneticButton>
          </div>
        </div>
      </section>

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap-tight">
          <h2 className="h-lg">More guides</h2>
          <p className="lede" style={{ marginTop: 16 }}>
            <Link href="/guides/ceiling-and-lighting-design" style={{ color: "var(--gold)" }}>Ceiling and lighting design</Link> ·             <Link href="/guides/downlight-placement" style={{ color: "var(--gold)" }}>How to place downlights</Link> ·             <Link href="/guides/why-downlights-glare" style={{ color: "var(--gold)" }}>Why downlights glare</Link> ·             <Link href="/guides/colour-of-light" style={{ color: "var(--gold)" }}>Colour of light</Link> ·             <Link href="/guides" style={{ color: "var(--gold)" }}>All lighting guides</Link>
          </p>
        </div>
      </section>

      <RelatedGuides currentSlug="track-lighting" />
    </>
  );
}
