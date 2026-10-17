# Machine-readable files

## Sub-features
- `/llms.txt` and `/pricing.md` generated from `lib/site.ts`, `lib/guides.ts` and store data.
- `/sitemap.xml` with per-route `lastmod`.
- `/robots.txt`.

## How to get to it (user POV)
AI crawlers and search engines fetch these URLs directly.

## Driving it with drive.mjs
Not needed. After `npm run build`, run `npm run verify`. It reads `.next/server/app/*.body` and checks phones, dashes, placeholders, and that every sitemap URL has a built page with a lastmod that is not in the future.

## Gotchas
- `lastmod` for non-guide routes is typed by hand in `app/sitemap.ts`. Bump it only when that page's content changed.
