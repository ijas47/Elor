import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";
import { guides } from "@/lib/guides";
import { breadcrumbSchema } from "@/lib/schema";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Reveal } from "@/components/motion/Reveal";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { RelatedGuides } from "@/components/ui/RelatedGuides";
import {
  guideArticles,
  type GuideArticle,
  type GuideRun,
} from "@/lib/guide-articles";

function Runs({ runs }: { runs: GuideRun[] }) {
  return (
    <>
      {runs.map((run, i) =>
        run.href ? (
          <Link key={i} href={run.href} style={{ color: "var(--gold)" }}>
            {run.text}
          </Link>
        ) : (
          <span key={i}>{run.text}</span>
        ),
      )}
    </>
  );
}

export function GuideArticleView({ article }: { article: GuideArticle }) {
  const path = `/guides/${article.slug}`;
  const others = guideArticles.filter((item) => item.slug !== article.slug);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.crumb,
    description: article.description,
    image: `${site.domain}${article.image}`,
    author: { "@type": "Organization", name: site.name, url: site.domain },
    publisher: {
      "@type": "Organization",
      name: site.name,
      logo: { "@type": "ImageObject", url: `${site.domain}/brand/logo-mark.svg` },
    },
    datePublished: "2026-10-05",
    dateModified: guides.find((g) => g.slug === article.slug)?.modified ?? "2026-10-05",
    mainEntityOfPage: `${site.domain}${path}`,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: article.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Guides", path: "/guides" },
              { name: article.crumb, path },
            ]),
          ),
        }}
      />

      <section className="page-hero">
        <div className="wrap-tight">
          <Breadcrumbs
            crumbs={[
              { name: "Guides", path: "/guides" },
              { name: article.crumb, path },
            ]}
          />
          <Reveal as="span">
            <span className="eyebrow">{article.eyebrow}</span>
          </Reveal>
          <Reveal delay={0.06}>
            <h1 className="h-xl" style={{ marginTop: 18 }}>
              {article.h1}
              <br />
              <span className="serif-i">{article.h1Em}</span>
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="lede" style={{ marginTop: 22 }}>
              <Runs runs={article.lede} />
            </p>
          </Reveal>
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
              src={article.image}
              alt={article.imageAlt}
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
            {article.sections.map((section) => (
              <div key={section.h} className="register-row">
                <h3>{section.h}</h3>
                <div>
                  {section.paragraphs.map((paragraph, i) => (
                    <p key={i} style={i > 0 ? { marginTop: 16 } : undefined}>
                      <Runs runs={paragraph} />
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec glow-top">
        <div className="wrap-tight">
          <Reveal>
            <h2 className="h-lg">Shelf, or made for the room</h2>
          </Reveal>
          <Reveal delay={0.06}>
            <ul className="check-list" style={{ marginTop: 28 }}>
              <li>
                <span className="tick">✓</span>
                {article.shelf}
              </li>
              <li>
                <span className="tick">✓</span>
                {article.custom}
              </li>
              <li>
                <span className="tick">✓</span>
                Custom-designed lights include free installation, and are usually ready in 3 to 6 weeks. A ready fitting comes with installation support. Warranty is up to 5 years.
              </li>
              <li>
                <span className="tick">✓</span>
                Kannur and Kozhikode are Celestial Lights stores. Kochi is the Elor experience centre.
              </li>
            </ul>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="cta-ctas" style={{ marginTop: 30 }}>
              <MagneticButton href="/customisation" variant="gold">
                Send a picture <span className="arr">→</span>
              </MagneticButton>
              <MagneticButton href={site.shopUrl} variant="ghost" external>
                {site.shopCta} <span className="arr">→</span>
              </MagneticButton>
            </div>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="form-note" style={{ marginTop: 18 }}>
              Want the plan before the piece?{" "}
              <Link href="/consultation" style={{ color: "var(--gold)" }}>
                Book a consultation
              </Link>
              . What a custom piece costs is in the{" "}
              <Link href="/guides/chandelier-pricing-guide" style={{ color: "var(--gold)" }}>
                pricing guide
              </Link>
              .
            </p>
          </Reveal>
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
            {article.faqs.map((faq, i) => (
              <Reveal key={faq.q} delay={i * 0.04}>
                <details className="faq-item" name={article.slug}>
                  <summary>{faq.q}</summary>
                  <p className="faq-a">{faq.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap-tight">
          <h2 className="h-lg">Rooms and materials</h2>
          <p className="lede" style={{ marginTop: 16 }}>
            {others.map((item, i) => (
              <span key={item.slug}>
                {i > 0 ? " · " : ""}
                <Link href={`/guides/${item.slug}`} style={{ color: "var(--gold)" }}>
                  {item.crumb}
                </Link>
              </span>
            ))}
          </p>
        </div>
      </section>

      <RelatedGuides currentSlug={article.slug} />
    </>
  );
}
