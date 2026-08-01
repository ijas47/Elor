import type { Metadata } from "next";
import { site } from "@/lib/site";
import { pieces, categories } from "@/lib/collections";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { PieceCard } from "@/components/ui/PieceCard";

export const metadata: Metadata = {
  title: "Collections · Chandeliers, Pendants & Outdoor Lighting",
  description:
    "Browse the Elor collection of statement chandeliers, pendants, wall lights and facade lighting. Available at Celestial Lights, with pan-India delivery.",
  alternates: { canonical: "/collections" },
};

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Elor Lighting Collection",
  itemListElement: pieces.map((p, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "Product",
      name: p.name,
      category: p.category,
      image: `${site.domain}${p.image}`,
      description: p.blurb,
      brand: { "@type": "Brand", name: site.name },
    },
  })),
};

export default function Collections() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />

      <section className="page-hero">
        <div className="wrap">
          <Reveal as="span"><span className="eyebrow">The collection</span></Reveal>
          <Reveal delay={0.06}>
            <h1 className="h-xl" style={{ marginTop: 18, maxWidth: "14ch" }}>
              Light worth <span className="serif-i">looking up</span> at.
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="lede">
              A curated selection of our statement pieces, from double-height
              crystal chandeliers to facade washers. Every piece is available at{" "}
              {site.shopLabel}. Prefer something that doesn&rsquo;t exist yet?{" "}
              <a href="/customisation" style={{ color: "var(--gold)" }}>We&rsquo;ll build it.</a>
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <div className="cta-ctas" style={{ justifyContent: "flex-start", marginTop: 32 }}>
              <MagneticButton href={site.shopUrl} variant="gold" external>
                Shop {site.shopLabel} <span className="arr">→</span>
              </MagneticButton>
              <MagneticButton href="/customisation" variant="ghost">
                Create a Custom Piece
              </MagneticButton>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Category tiles */}
      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <Stagger className="cat-tiles">
            {categories.map((c) => (
              <StaggerItem key={c.label}>
                <div className="cat-tile">
                  <h3>{c.label}</h3>
                  <p>{c.note}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Gallery */}
      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <Stagger className="collection-grid">
            {pieces.map((p, i) => (
              <StaggerItem key={p.slug}>
                <PieceCard piece={p} priority={i < 4} />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-band">
        <div className="wrap-tight">
          <Reveal as="span"><span className="eyebrow center">Ready when you are</span></Reveal>
          <Reveal delay={0.06}>
            <h2 className="h-lg" style={{ marginTop: 18 }}>
              Found something? <span className="serif-i">Or nearly?</span>
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="lede" style={{ textAlign: "center" }}>
              Shop the full range at {site.shopLabel}, or send us a reference and
              we&rsquo;ll build the piece you actually pictured.
            </p>
          </Reveal>
          <Reveal delay={0.16}>
            <div className="cta-ctas">
              <MagneticButton href={site.shopUrl} variant="gold" external>
                Shop {site.shopLabel} <span className="arr">→</span>
              </MagneticButton>
              <MagneticButton href="/consultation" variant="ghost">
                Book a Consultation
              </MagneticButton>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
