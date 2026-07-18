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

## Brand identity (v1.0)

Full visual guidelines live at `brand.html` on the site.

- **Idea:** considered light. Elor plans light; the fixtures follow.
- **Logo, "The Luminaire Point":** on an architect's lighting plan a luminaire is drawn
  as a circle with a point at its center. The O of ELOR is that symbol. Custom-drawn
  monoline capitals (SVG paths, not a typeface): `assets/logo-wordmark.svg` (on dark),
  `assets/logo-wordmark-dark.svg` (on light), `assets/logo-mark.svg` (standalone),
  `assets/favicon.svg`. One color per surface; the point is always Brass. No glows or
  gradients on the mark itself.
- **Palette:** Ink `#0C0A07` (canvas), Brass `#C89B4B` (the light), Candle `#E6BC72`
  (highlight), Bone `#F5F1E8` (the page), Stone `#B0A691` (quiet text). Brass is
  reserved for emphasis: the mark's point, CTAs, prices, accents.
- **Type:** Marcellus (inscriptional Roman, display, single weight, sentence case)
  + Jost (geometric sans, body/UI, letterspaced caps for labels and buttons).
- **Shape language:** architectural restraint. Near-square corners (3 to 6px),
  hairline rules, generous whitespace.
- **Motif:** the circle-and-point recurs as section markers (eyebrow bullets),
  and can extend to map pins, packaging stamps, social avatars.
- **Imagery:** original hand-crafted SVG renders (products, room scenes,
  lighting-plan art); every fixture shown lit, in darkness, warm (2700 to 3000K).
  Swap for real photography as it becomes available; keep the "always lit,
  always warm" rule.
- **Voice:** calm, precise, quietly confident. Short sentences. No exclamation
  marks, no hype, no em dashes.

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
