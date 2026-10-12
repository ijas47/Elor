import Link from "next/link";
import { roomGuideLinks, topicGuideLinks } from "@/lib/guideLinks";

/**
 * Server-rendered list of guide links. No client JS and no motion wrapper, so
 * the links are in the HTML on first byte and never sit above the fold.
 */
export function GuideLinks({ tone = "dark" }: { tone?: "dark" | "pearl" }) {
  return (
    <section className={`sec guide-links${tone === "pearl" ? " on-pearl" : ""}`} aria-labelledby="guide-links-h">
      <div className="wrap">
        <span className="eyebrow">Guides</span>
        <h2 id="guide-links-h" className="h-md" style={{ marginTop: 14 }}>
          Lighting guides by room
        </h2>
        <div className="guide-links-cols">
          <ul>
            {roomGuideLinks.map((g) => (
              <li key={g.href}><Link href={g.href}>{g.label}</Link></li>
            ))}
          </ul>
          <ul>
            {topicGuideLinks.map((g) => (
              <li key={g.href}><Link href={g.href}>{g.label}</Link></li>
            ))}
            <li><Link href="/guides">All lighting guides</Link></li>
          </ul>
        </div>
      </div>
    </section>
  );
}
