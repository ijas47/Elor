# Guides

21 editorial guides listed in `lib/guides.ts`. Ten render through `app/guides/[slug]` from `lib/guide-articles.ts`. Eleven are hand-written pages in `app/guides/<slug>/page.tsx`.

## Sub-features
- `/guides` hub cards with an "Updated <date>" label.
- Each guide page: one h1, eyebrow "Updated <date>", Article and FAQPage JSON-LD, Related guides row, breadcrumbs.
- Chandelier size calculator (`/guides/chandelier-size-calculator`), client-side.

## How to get to it (user POV)
Nav, Guides, pick a card. Or the "Lighting guides" row in the footer.

## Driving it with drive.mjs
```bash
node .cursor/skills/verify-elor/scripts/drive.mjs /guides /guides/brass-chandelier /guides/why-downlights-glare --label guides
```
Pass when each page has `h1` length 1, `headings` never jumps more than one level, `emDashes` is 0, and `description` is at most 160 characters. The visible Updated date must equal `modified` in `lib/guides.ts` formatted as "12 October 2026".

## Gotchas
- Dates come only from `modified` in `lib/guides.ts` through `guideDates()` and the derived `updated`. Do not type a date into a page.
- Changing only links on a guide does not change its `modified` date (Ijas rolled those bumps back in 4ee5fb3).
