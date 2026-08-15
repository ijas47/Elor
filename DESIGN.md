# Elor Lighting — Brand & Design System (v3)

A premium marketing site for **Elor Lighting**: custom chandelier fabrication,
lighting consultation, and installation. Three **Celestial Lights** experience
stores in Kerala (Kannur, Kochi, Kozhikode) with pan-India delivery.

Built with **Next.js (App Router) + TypeScript + Framer Motion**. Static-generated
(SSG) and SEO/AEO-first: every page ships as server-rendered HTML with metadata,
`sitemap.xml`, `robots.txt`, and JSON-LD schema.

---

## Positioning

Customisation carries the margin, so the site routes traffic into it.

- **The promise, everywhere:** "Send us a picture. We build the light." Any
  reference — a photo, a render, a magazine page, a sketch — is a complete brief.
- **Two audiences:** homeowners are sold uniqueness and fit; architects are sold
  *rescue* (the specified fixture nobody stocks, built to drawing, one accountable
  supplier).
- **Shop = handoff.** The Celestial Lights Shopify store is separate. This site
  hosts a curated **Collections** gallery (no cart) that hands off to Celestial
  Lights via `lib/site.ts → shopUrl`. Until Shopify is live, that link points to
  WhatsApp. Flip `shopLive` and swap `shopUrl` when the store launches.

---

## Identity — "The Crystal Cluster"

The O of ELOR is not drawn, it is suspended: a scatter of 28 crystal drops holds
the shape of the letter the way a chandelier holds the shape of a circle. Full
kit (SVG masters + PNG exports, on-dark / on-light / gold, lockups, app icon,
favicons) lives in [`brand-assets/`](brand-assets/README.md).

- **Wordmark:** artwork, not live type. Cormorant Garamond Light capitals
  converted to outlines, tracked at 8.5% of cap height, with a "LIGHTING"
  descriptor in Inter at ~0.42em. It is deliberately a different face from the
  site's Playfair display type; never rebuild it in Playfair.
- **Generated, not hand-drawn.** `brand-assets/logo-src/build-logo.py` emits
  every SVG, the runtime assets in `public/brand/`, and the inline components
  `components/ui/Wordmark.tsx` and `Logo.tsx`. Fixed seed, so rebuilds are
  identical. Rerun the script rather than editing the SVGs or the components.
- **Favicon is a separate drawing** (eight drops on an even ring): the scattered
  cluster is illegible in a 16px browser tab.

## Palette — "Nocturne"

Warm espresso-black canvas, graduated champagne→antique-brass, bone neutral tuned
to 2700K glow. Disciplined two-tone + neutral; richness comes from material
treatments (grain, glass, gold hairlines, radial glows), not more hues. Tokens
live in `app/globals.css`.

| Token | Hex | Role |
|---|---|---|
| `--obsidian` | `#0B0906` | Primary canvas |
| `--ink` / `--ink-2` / `--ink-3` | `#100C07` … `#201810` | Raised surfaces |
| `--gold-hi` | `#F4E4BC` | Highlight / orb core |
| `--gold` | `#E3C489` | Primary accent, CTAs, italic display words |
| `--gold-deep` / `--brass` | `#B8935A` / `#9A7743` | Metal, hairlines, eyebrows |
| `--pearl` | `#ECE5D6` | Light sections, wordmark on dark |
| `--text` / `--text-dim` / `--text-faint` | `#F0E9DB` … `#7D7362` | Text on dark |

## Typography

- **Display:** Playfair Display (400/500, + italic for the one gold accent word).
- **Body / UI:** Inter (300–600). Body is Light 300.
- Loaded via `next/font/google` (self-hosted, no layout shift).

## Shape & motion

- Pill buttons, floating glass nav, 18px card radii, thin gold "frame" lines
  inside imagery, soft radial glows behind dark bands.
- Motion via Framer Motion, all SEO-safe (content is server-rendered; only its
  presentation animates): hero line-mask reveal + slow zoom, scroll reveals
  (`components/motion/Reveal.tsx`), staggered grids, magnetic buttons, running
  marquee, on-scroll showroom video, CSS route entrance. All respect
  `prefers-reduced-motion` (content renders fully visible when motion is off).

## Voice

Calm, precise, quietly confident. No exclamation marks, no hype, no em dashes.

---

## Pages

- `/` — full journey: hero → trust → shop-by-space → featured collection →
  customisation → for architects → showroom reel → layered-light education →
  consultation → how it works → commercial → stores → testimonials → CTA.
- `/collections` — curated gallery + category tiles, handoff to Celestial Lights.
- `/customisation` — the primary margin page (reference intake, process, FAQ).
- `/consultation` — method, audiences, lead form (WhatsApp handoff), FAQ.
- `/stores` — three Celestial Lights stores with `LocalBusiness` schema.

## SEO / AEO

- SSG HTML on every route; `app/sitemap.ts`, `app/robots.ts` (AI crawlers
  allowed); JSON-LD: `Organization` (layout), `ItemList`/`Product` (collections),
  `LightingStore` per store (stores). Per-page metadata via the Metadata API.

## Notes / next steps

- Store addresses and phone numbers are **placeholders** — replace in `lib/site.ts`.
- Set `site.shopUrl` + `shopLive: true` when the Celestial Lights Shopify store
  is published; every handoff link updates from that one place.
- Consultation and custom-brief forms compose a WhatsApp message client-side.
  Wire to a form endpoint/CRM when available (`components/sections/ConsultForm.tsx`).
- Product copy and selection in `lib/collections.ts` are curated samples — extend
  with the live range as needed.
- Deploy on Vercel (`next build`).
