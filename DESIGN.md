# Elor Lighting — Website Design Rationale

A high-fidelity marketing + catalog site for **Elor Lighting**: lighting consultation,
own-supply retail, and installation. Physical presence via three **Celestial Lights**
stores (Kannur, Kochi, Kozhikode) with pan-India online service.

## How customers decide on lighting — and how the site answers

| Buying behaviour | Design response |
|---|---|
| People shop by **room/space**, not fixture jargon ("doing up the living room", not "buying a sconce") | "Where are we lighting today?" space grid (Living, Bedroom, Outdoor & Facade, Commercial) is the first section after the hero; space links pre-filter the shop |
| Lighting is bought on **ambience** — buyers need to *see the glow*, not a fixture on white | Dark, moody art direction throughout; every product render shows the fixture **lit**, with its light pool and beam |
| **Anxiety about technical choices** (warmth, size, layering) stalls purchases | Ambient/Task/Accent education section positions Elor as the expert; product cards carry decision-relevant specs (2700K, dimmable, IP54) instead of jargon |
| **Price transparency** builds trust in the Indian market | Every card shows price, compare-at price and % off in ₹ |
| Lighting is **touch-and-see** retail — photos lie about light | Stores page sells the in-store experience ("stand under it"); store info repeated on the homepage |
| Buyers fear **coordination failure** (designer blames electrician blames shop) | "One team, one warranty" — the 4-step Consult → Design → Supply → Install journey appears on home and consultation pages |
| **Commercial buyers** (architects, F&B, retail) decide on accountability, schedule, and ROI | Dedicated commercial section framed as "lighting that earns its keep", with project pricing and site-coordination promises |
| Two distinct intents arrive at the site: **browse/buy** vs **plan/consult** | Dual CTAs everywhere: gold = Book Consultation (higher-value funnel), ghost = Shop |

## Brand starter (no prior guidelines existed)

- **Wordmark:** ELOR set in Fraunces, letter-spaced; the "O" glows amber — the logo carries the product.
- **Palette:** warm ink `#0d0b08`, candle amber `#d9a24a` / `#f0bd6b`, bone cream `#f4eee1`. Dark sections showcase glow; cream sections give reading rhythm.
- **Type:** Fraunces (display serif, editorial warmth) + Outfit (UI sans).
- **Imagery:** original hand-crafted SVG renders (products, room scenes, lighting-plan art) — no third-party photography, so the site is fully self-contained and rights-clean. Swap for real photography as it becomes available; keep the "always lit, always warm" rule.

## Pages

- `index.html` — full buying journey: hero → trust bar → shop-by-space → featured products → lighting education → consultation → commercial → stores → testimonials → CTA.
- `shop.html` — 12-product catalog with category filters (wall / pendant / ceiling / lamp / outdoor); homepage space links deep-link to a matching filter.
- `consultation.html` — the consultation & implementation offer, 4-step method, audience segments, lead form (front-end only — wire `js/main.js` to a backend/form service), FAQ that pre-handles objections.
- `stores.html` — three Celestial Lights stores + "the fourth store is wherever you are" online banner.

## Notes / next steps

- Store addresses and phone numbers are **placeholders** — replace with real details.
- The consultation form currently shows a success message client-side only; connect it to a form endpoint (Formspree/Google Forms/own API) or WhatsApp deep link.
- Products and prices are illustrative catalog entries modeled on typical Kerala lighting retail; replace with the real Elor range.
- Static site, no build step — deploy anywhere (GitHub Pages, Netlify, Vercel).
