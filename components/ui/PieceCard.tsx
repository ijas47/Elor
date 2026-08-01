import Image from "next/image";
import { site } from "@/lib/site";
import type { Piece } from "@/lib/collections";

/**
 * A collection piece. No price — links out to the Celestial Lights handoff
 * (site.shopUrl). Real photography, hover reveals the blurb + shop link.
 */
export function PieceCard({ piece, priority = false }: { piece: Piece; priority?: boolean }) {
  return (
    <a
      className="piece-card"
      href={site.shopUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${piece.name} — available at ${site.shopLabel}`}
    >
      <div className="piece-media">
        <Image
          src={piece.image}
          alt={`${piece.name} — ${piece.blurb}`}
          fill
          sizes="(max-width: 620px) 100vw, (max-width: 1020px) 50vw, 25vw"
          priority={priority}
        />
      </div>
      {piece.tag && <span className="piece-tag">{piece.tag}</span>}
      <div className="piece-body">
        <p className="piece-cat">{piece.category}</p>
        <h3>{piece.name}</h3>
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
