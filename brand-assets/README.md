# Elor Lighting — Brand Assets

Master logo kit for **Elor Lighting**. SVG is the source of truth (infinitely
scalable, editable); PNGs are provided for convenience (email, docs, social,
app icons). Keep this folder as the canonical reference.

## The mark — "The Celestial Drop"

A fine suspension descends to a glowing orb held in a thin halo ring: a hanging
luminaire and a celestial body at once. It ties Elor to the *Celestial Lights*
retail brand and reads clearly from a 16px favicon to a building sign.

## Files

### `svg/` (vector master — use these wherever possible)
| File | Use |
|---|---|
| `elor-emblem-on-dark.svg` | Emblem only, for dark backgrounds (pearl + gold) |
| `elor-emblem-on-light.svg` | Emblem only, for light backgrounds (ink + gold) |
| `elor-emblem-gold.svg` | Single-colour gold emblem (foil, emboss, watermark) |
| `elor-logo-horizontal-on-dark.svg` | Full lockup (emblem + ELOR + LIGHTING), dark bg |
| `elor-logo-horizontal-on-light.svg` | Full lockup, light bg |
| `elor-logo-stacked-on-dark.svg` | Stacked lockup (avatars, hero, packaging) |
| `elor-app-icon.svg` | Rounded-square app/favicon master (dark bg baked in) |

### `png/` (raster exports)
- Emblems: `-256 / -512 / -1024` in on-dark, on-light, gold
- Lockups: `-1600` in horizontal on-dark, horizontal on-light, stacked on-dark
- Icons: `elor-app-icon-1024`, `elor-icon-512`, `elor-apple-touch-180`,
  `elor-favicon-32`, `elor-favicon-16`

> PNG lockups were rendered with the real Playfair Display font. To regenerate
> PNGs from the SVGs on macOS: `qlmanage -t -s 2048 -o out file.svg` (WebKit,
> renders gradients + fonts correctly — ImageMagick does not handle the radial
> gradients).

## Colour — "Nocturne" palette

| Token | Hex | Use |
|---|---|---|
| Obsidian | `#0B0906` | Primary canvas (warm near-black) |
| Ink | `#100C07` | Raised dark surface |
| Champagne (hi) | `#F4E4BC` | Highlight / orb core |
| Gold | `#E3C489` | Primary accent, CTAs |
| Brass | `#B8935A` → `#9A7743` | Metal, hairlines, "LIGHTING" descriptor |
| Pearl / Bone | `#ECE5D6` | Wordmark on dark, warm neutral (2700K feel) |
| Ink text | `#1E1912` | Wordmark on light |

## Typography

- **Display / wordmark:** Playfair Display (500), uppercase, `letter-spacing ~0.2em`.
- **Descriptor / UI / body:** Inter (300–600). "LIGHTING" descriptor at `~0.42em`.

## Usage rules

- **Clear space:** keep at least the height of the emblem's orb clear on all sides.
- **Minimum size:** emblem no smaller than 20px; horizontal lockup no smaller
  than 110px wide.
- **Do not:** recolour the orb away from gold, stretch, add shadows/outlines,
  place the on-dark lockup on light (and vice-versa), or rebuild the wordmark in
  a different typeface.
