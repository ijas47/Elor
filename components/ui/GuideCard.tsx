import Image from "next/image";
import Link from "next/link";
import type { Guide } from "@/lib/guides";

// Same visual language as PieceCard (image, tag, hover-reveal), but an
// internal Link to a guide page instead of an external shop handoff.
export function GuideCard({
  guide,
  headingLevel = 3,
}: {
  guide: Guide;
  /** 2 on the guides index, where cards sit directly under the h1. */
  headingLevel?: 2 | 3;
}) {
  const Heading = headingLevel === 2 ? "h2" : "h3";
  return (
    <Link className="piece-card" href={`/guides/${guide.slug}`}>
      <div className="piece-media">
        <Image
          src={guide.image}
          alt={guide.imageAlt ?? guide.title}
          fill
          sizes="(max-width: 620px) 100vw, (max-width: 1020px) 50vw, 25vw"
        />
      </div>
      <span className="piece-tag">{guide.tag}</span>
      <div className="piece-body">
        <p className="piece-cat">Updated {guide.updated}</p>
        <Heading>{guide.title}</Heading>
        <div className="piece-reveal">
          <div>
            <p>{guide.dek}</p>
            <span className="piece-link">
              Read the guide <span aria-hidden>→</span>
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
