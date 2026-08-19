import Image from "next/image";
import Link from "next/link";
import type { Guide } from "@/lib/guides";

// Same visual language as PieceCard (image, tag, hover-reveal), but an
// internal Link to a guide page instead of an external shop handoff.
export function GuideCard({ guide }: { guide: Guide }) {
  return (
    <Link className="piece-card" href={`/guides/${guide.slug}`}>
      <div className="piece-media">
        <Image
          src={guide.image}
          alt={guide.title}
          fill
          sizes="(max-width: 620px) 100vw, (max-width: 1020px) 50vw, 25vw"
        />
      </div>
      <span className="piece-tag">{guide.tag}</span>
      <div className="piece-body">
        <p className="piece-cat">Updated {guide.updated}</p>
        <h3>{guide.title}</h3>
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
