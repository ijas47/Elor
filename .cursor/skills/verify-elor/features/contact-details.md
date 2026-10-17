# Contact details per brand

Elor (Kochi office and experience centre) and Celestial Lights (stores in Kannur and Kozhikode) are separate businesses with separate phones. Elor is +91 88487 08529 for calls and WhatsApp. Celestial is +91 99956 19470. Both come from `lib/brands.ts`.

## Sub-features
- Footer call and WhatsApp links on every page (Elor only).
- Store cards on `/` and `/stores` (each store shows its own brand's phone).
- Store pages `/stores/kannur`, `/stores/kochi`, `/stores/kozhikode` with LightingStore JSON-LD.
- Organization JSON-LD in the layout (Elor).

## How to get to it (user POV)
Scroll to the footer on any page. Open Stores in the nav and pick a city.

## Driving it with drive.mjs
```bash
node .cursor/skills/verify-elor/scripts/drive.mjs /stores/kochi /stores/kannur /stores/kozhikode / /guides/home-lighting-design --label contact
```
Pass when, in `evidence.json`:
- `/stores/kochi` and every guide: `tel` contains only `tel:+918848708529`.
- `/stores/kannur` and `/stores/kozhikode`: `tel` contains `tel:+919995619470` (store) and `tel:+918848708529` (footer).
- Every page: `whatsapp` is only `https://wa.me/918848708529`.
- `jsonldTelephones` pairs Elor entities with 88487 08529 and Celestial entities with 99956 19470.
Then run `npm run verify` for the same rules across all 35 built pages.

## Gotchas
- `site.description` mentions the Celestial stores by city. That is correct copy, not a phone leak.
- The Kozhikode street address and PIN are unknown. The page shows "Kozhikode, Kerala" and the schema omits street, PIN and geo. Do not add a placeholder.
