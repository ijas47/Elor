# Elor Lighting - Brand Assets

Master logo kit for **Elor Lighting**. SVG is the source of truth; PNGs are
provided for convenience (email, docs, social, app icons). Keep this folder as
the canonical reference.

## The mark - "The Crystal Cluster"

The O of ELOR is not drawn, it is suspended. A scatter of 28 crystal drops holds
the shape of the letter the way a chandelier holds the shape of a circle. E, L
and R are classical capitals; the one that matters is made of light.

## Regenerating

The artwork is **generated, not hand-drawn**. Do not edit the SVGs directly:

```bash
pip install fonttools
python3 brand-assets/logo-src/build-logo.py
```

The script writes every SVG in `svg/`, the runtime assets in `public/brand/`,
and the inline React components `components/ui/Wordmark.tsx` and
`components/ui/Logo.tsx`. It runs off a fixed random seed, so the cluster is
identical on every rebuild. `logo-src/` ships the two font subsets it needs
(both SIL Open Font License), so no network access is required.

To re-render the PNGs from the SVGs, any headless browser works; ImageMagick
rasterises these fine too, since the artwork is flat fills with no gradients.

## Files

### `svg/` (vector master, use these wherever possible)
| File | Use |
|---|---|
| `elor-logo-horizontal-on-dark.svg` | Wordmark, pearl, for dark backgrounds |
| `elor-logo-horizontal-on-light.svg` | Wordmark, ink, for light backgrounds |
| `elor-logo-horizontal-gold.svg` | Wordmark, champagne. The primary presentation |
| `elor-logo-stacked-on-dark.svg` | Wordmark + LIGHTING descriptor, dark bg |
| `elor-logo-stacked-on-light.svg` | Wordmark + LIGHTING descriptor, light bg |
| `elor-emblem-on-dark.svg` | Cluster alone, pearl |
| `elor-emblem-on-light.svg` | Cluster alone, ink |
| `elor-emblem-gold.svg` | Cluster alone, champagne (foil, emboss, watermark) |
| `elor-app-icon.svg` | Rounded-square app icon (obsidian bg baked in) |

### `png/` (raster exports)
- Wordmarks: `-1600` in horizontal on-dark / on-light / gold, stacked on-dark / on-light
- Emblems: `-256 / -512 / -1024` in on-dark, on-light, gold
- Icons: `elor-app-icon-1024`, `elor-icon-512`, `elor-apple-touch-180`,
  `elor-favicon-32`, `elor-favicon-16`

## Typography

- **Wordmark:** Cormorant Garamond Light, converted to outlines, tracked at 8.5%
  of cap height. It is deliberately a different face from the site's display
  type: never rebuild the wordmark in Playfair, and never set it as live text.
- **Descriptor:** Inter Medium, uppercase, `letter-spacing ~0.42em`.

## Colour - "Nocturne" palette

| Token | Hex | Use |
|---|---|---|
| Obsidian | `#0B0906` | Primary canvas (warm near-black) |
| Champagne (hi) | `#F4E4BC` | Icon drops |
| Gold | `#E3C489` | Primary wordmark colour, accents, CTAs |
| Brass | `#B8935A` to `#9A7743` | Hairlines, "LIGHTING" descriptor |
| Pearl | `#ECE5D6` | Wordmark on dark |
| Ink text | `#1E1912` | Wordmark on light |

## Usage rules

- **One colour throughout.** Letters and cluster always share a colour. Never
  split the cluster out in a second colour: it is a letter, not an ornament.
- **Clear space:** keep at least the diameter of the cluster clear on all sides.
- **Minimum size:** the cluster overshoots the cap band, so cap height is only
  65% of the artwork box. Set the wordmark by its box and never below 24px tall
  on screen, or 16mm wide in print. Below that, use the emblem.
- **Favicons** use a separate drawing (eight drops on an even ring). The
  scattered cluster turns to mush in a 16px browser tab, and thinning it does not
  rescue it: filtering by size breaks the ring open, and a size floor fuses
  neighbouring drops. Use `elor-app-icon.svg` / the favicon PNGs at icon sizes
  and the real emblem everywhere else.
- **Do not:** stretch, rotate, outline, add shadows or glows, recolour individual
  drops, or place the on-dark wordmark on light (and vice versa). The product
  glows; the mark does not.
