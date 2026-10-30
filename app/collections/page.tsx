import type { Metadata } from "next";
import Image from "next/image";
import { site } from "@/lib/site";
import { breadcrumbSchema } from "@/lib/schema";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Reveal } from "@/components/motion/Reveal";
import { MagneticButton } from "@/components/motion/MagneticButton";

export const metadata: Metadata = {
  title: "Chandeliers, Pendants & Outdoor Lighting",
  description:
    "Photographs of the Elor range are coming. Until then, send a picture and we build the light, or ask Celestial Lights on WhatsApp.",
  alternates: { canonical: "/collections" },
};

// Catalogue photos stay in lib/collections.ts and public/collections/.
// They stay off this page until the Celestial range or new custom-light
// images replace them. Restore the gallery from that data when they do.

export default function Collections() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema([{ name: "Collections", path: "/collections" }])),
        }}
      />

      <section className="page-hero">
        <div className="wrap">
          <Breadcrumbs crumbs={[{ name: "Collections", path: "/collections" }]} />
          <div className="split" style={{ alignItems: "center" }}>
            <div>
              <Reveal as="span"><span className="eyebrow">The collection</span></Reveal>
              <Reveal delay={0.06}>
                <h1 className="h-xl" style={{ marginTop: 18, maxWidth: "16ch" }}>
                  The new lights are <span className="serif-i">being photographed.</span>
                </h1>
              </Reveal>
              <Reveal delay={0.12}>
                <p className="lede" style={{ marginTop: 22 }}>
                  New photographs of the range are not on this page yet.
                  The cascade here is the one piece we are showing. To have
                  something made, send a picture. To ask what is in stock,
                  WhatsApp {site.shopLabel}.
                </p>
              </Reveal>
              <Reveal delay={0.18}>
                <div className="cta-ctas" style={{ justifyContent: "flex-start", marginTop: 32 }}>
                  <MagneticButton href="/customisation" variant="gold">
                    Create a Custom Piece <span className="arr">→</span>
                  </MagneticButton>
                  <MagneticButton href={site.shopUrl} variant="ghost" external>
                    {site.shopCta}
                  </MagneticButton>
                </div>
              </Reveal>
            </div>
            <Reveal delay={0.1} className="split-media frame">
              <Image src="/collections/staircase-cascade.jpg" alt="A red crystal cascade built to fall the height of a spiral stair" fill sizes="(max-width: 1020px) 100vw, 50vw" priority style={{ objectFit: "cover" }} />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
