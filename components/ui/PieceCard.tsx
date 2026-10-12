import Image from "next/image";
import { site } from "@/lib/site";
import type { Piece } from "@/lib/collections";

/**
 * A collection piece. No price, links out to the Celestial Lights handoff
 * (site.shopUrl). Real photography, hover reveals the blurb + shop link.
 */
export function PieceCard({
  piece,
  priority = false,
  headingLevel = 3,
}: {
  piece: Piece;
  priority?: boolean;
  /** 2 when the card sits directly under the page h1, so the outline does not skip. */
  headingLevel?: 2 | 3;
}) {
  const Heading = headingLevel === 2 ? "h2" : "h3";
  return (
    <a
      className="piece-card"
      href={site.shopUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${piece.name}, available at ${site.shopLabel}`}
    >
      <div className="piece-media">
        <Image
          src={piece.image}
          alt={`${piece.name}, ${piece.blurb}`}
          fill
          sizes="(max-width: 620px) 100vw, (max-width: 1020px) 50vw, 25vw"
          priority={priority}
        />
      </div>
      {piece.tag && <span className="piece-tag">{piece.tag}</span>}
      <div className="piece-body">
        <p className="piece-cat">{piece.category}</p>
        <Heading>{piece.name}</Heading>
        <div className="piece-reveal">
          <div>
            <p>{piece.blurb}</p>
            <span className="piece-link">
              Available at {site.shopLabel} <span aria-hidden>→</span>
            </span>
          </div>
        </div>
      </div>
    </a>
  );
}
