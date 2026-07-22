# Elor Lighting: Website Design Rationale

A high-fidelity marketing + catalog site for **Elor Lighting**: lighting consultation,
own-supply retail, and installation. Physical presence via three **Celestial Lights**
stores (Kannur, Kochi, Kozhikode) with pan-India online service.

## How customers decide on lighting, and how the site answers

| Buying behaviour | Design response |
|---|---|
| People shop by **room/space**, not fixture jargon ("doing up the living room", not "buying a sconce") | "Where are we lighting today?" space grid (Living, Bedroom, Outdoor & Facade, Commercial) is the first section after the hero; space links pre-filter the shop |
| Lighting is bought on **ambience**: buyers need to *see the glow*, not a fixture on white | Dark, moody art direction throughout; every product render shows the fixture **lit**, with its light pool and beam |
| **Anxiety about technical choices** (warmth, size, layering) stalls purchases | Ambient/Task/Accent education section positions Elor as the expert; product cards carry decision-relevant specs (2700K, dimmable, IP54) instead of jargon |
| **Price transparency** builds trust in the Indian market | Every card shows price, compare-at price and % off in ₹ |
| Lighting is **touch-and-see** retail: photos lie about light | Stores page sells the in-store experience ("stand under it"); store info repeated on the homepage |
| Buyers fear **coordination failure** (designer blames electrician blames shop) | "One team, one warranty": the 4-step Consult → Design → Supply → Install journey appears on home and consultation pages |
| **Commercial buyers** (architects, F&B, retail) decide on accountability, schedule, and ROI | Dedicated commercial section framed as "lighting that earns its keep", with project pricing and site-coordination promises |
| Two distinct intents arrive at the site: **browse/buy** vs **plan/consult** | Dual CTAs everywhere: brass = Book Consultation (higher-value funnel), ghost = Shop |

## Brand identity (v2.0)

Full visual guidelines live at `brand.html` on the site. Design system modeled on a
high-end lighting store reference the client selected: light-first gallery surfaces
with rich black feature bands.

- **Logo, "The Luminaire Point"** (unchanged from v1): the O of ELOR is the
  luminaire symbol from architectural lighting plans. Custom-drawn monoline
  capitals as SVG paths: `assets/logo-wordmark.svg` (on dark),
  `assets/logo-wordmark-dark.svg` (on light), `assets/logo-mark.svg`,
  `assets/favicon.svg`.
- **Palette:** Pearl `#F6F3EF` (the page), Black `#0B0A08` (feature bands: hero,
  How-it-works, CTA, footer), Champagne gold `#E5C88F -> #C9A266` (highlighted
  words, CTAs, icons), Caramel `#A9714B` (prices, testimonial cards),
  Charcoal `#232120` (text).
- **Type:** Poppins everywhere. Light 300 body, Regular 400 UI, Medium 500
  headings (sentence case, one champagne-highlighted word max), Semibold 600
  prices.
- **Shape language:** pill buttons, floating dark pill navbar, 16px card
  corners, thin gallery-frame lines inside imagery, soft shadows.
- **Motif:** the circle-and-point recurs as eyebrow markers and nav indicators.
- **Imagery:** real Celestial Lights showroom footage (client-supplied), processed
  with ffmpeg (audio stripped, trimmed, graded, compressed). Hero is a crossfaded
  montage loop (`assets/video/hero.mp4`, ~0.7MB); a homepage "Inside Celestial
  Lights" reel plays three portrait vignettes on scroll (`assets/video/showroom-*.mp4`);
  two featured product cards use real stills (`assets/products/photo-*.jpg`). Original
  SVG renders remain for products without footage yet. All media stays on dark
  backgrounds, warm 2700-3000K feel.
- **Voice:** calm, precise, quietly confident. No exclamation marks, no hype,
  no em dashes.

## Pages

- `index.html`: full buying journey: hero → trust bar → shop-by-space → featured products → lighting education → consultation → commercial → stores → testimonials → CTA.
- `shop.html`: 12-product catalog with category filters (wall / pendant / ceiling / lamp / outdoor); homepage space links deep-link to a matching filter.
- `consultation.html`: the consultation & implementation offer, 4-step method, audience segments, lead form (front-end only; wire `js/main.js` to a backend/form service), FAQ that pre-handles objections.
- `stores.html`: three Celestial Lights stores + "the fourth store is wherever you are" online banner.
- `brand.html`: living brand guidelines (logo, color, type, motif, voice).

## Notes / next steps

- Store addresses and phone numbers are **placeholders**; replace with real details.
- The consultation form currently shows a success message client-side only; connect it to a form endpoint (Formspree/Google Forms/own API) or WhatsApp deep link.
- Products and prices are illustrative catalog entries modeled on typical Kerala lighting retail; replace with the real Elor range.
- Static site, no build step; deploy anywhere (GitHub Pages, Netlify, Vercel).
