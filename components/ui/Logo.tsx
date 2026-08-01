/**
 * Elor emblem, "The Celestial Drop".
 * A fine suspension descends to a glowing orb held in a thin halo ring:
 * a hanging luminaire and a celestial body at once. Ring/suspension use
 * currentColor so the mark adapts to dark or pearl contexts; the orb and its
 * glow stay champagne gold.
 */
export function Logo({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 72"
      fill="none"
      role="img"
      aria-label="Elor"
    >
      <defs>
        <radialGradient id="elorOrb" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#f7ead0" />
          <stop offset="55%" stopColor="#e3c489" />
          <stop offset="100%" stopColor="#b8935a" />
        </radialGradient>
        <radialGradient id="elorHalo" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#e3c489" stopOpacity="0.5" />
          <stop offset="70%" stopColor="#e3c489" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#e3c489" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* soft glow behind the orb */}
      <circle cx="32" cy="44" r="26" fill="url(#elorHalo)" />

      {/* suspension */}
      <line x1="32" y1="4" x2="32" y2="24" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" opacity="0.85" />
      <circle cx="32" cy="4" r="1.9" fill="currentColor" />

      {/* halo ring */}
      <circle cx="32" cy="44" r="18" stroke="currentColor" strokeWidth="1.6" opacity="0.9" />
      {/* inner thread ring */}
      <circle cx="32" cy="44" r="11.5" stroke="var(--gold-deep, #b8935a)" strokeWidth="1" opacity="0.6" />

      {/* the light */}
      <circle cx="32" cy="44" r="6" fill="url(#elorOrb)" />
    </svg>
  );
}
