import type { Metadata } from "next";
import { site } from "@/lib/site";
import { breadcrumbSchema } from "@/lib/schema";
import { guides } from "@/lib/guides";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { GuideCard } from "@/components/ui/GuideCard";

export const metadata: Metadata = {
  title: "Lighting Guides · Pricing & City Guides",
  description:
    "How much a custom chandelier costs in India, and what Elor and Celestial Lights build in Kannur, Kochi and Kozhikode.",
  alternates: { canonical: "/guides" },
};

export default function Guides() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema([{ name: "Guides", path: "/guides" }])),
        }}
      />

      <section className="page-hero">
        <div className="wrap-tight">
          <Reveal as="span"><span className="eyebrow">Guides</span></Reveal>
          <Reveal delay={0.06}>
            <h1 className="h-xl" style={{ marginTop: 18 }}>
              What to know <span className="serif-i">before you call.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="lede" style={{ marginTop: 22 }}>
              Straight answers on pricing, and what Elor and Celestial Lights
              actually build for homes and spaces in Kannur, Kochi and
              Kozhikode.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <Stagger className="collection-grid">
            {guides.map((g) => (
              <StaggerItem key={g.slug}>
                <GuideCard guide={g} />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>
    </>
  );
}
