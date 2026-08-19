# Elor Lighting — GEO/SEO Audit Action Items

Source: GEO/SEO audit run 2026-08-19 (composite score 45/100). Full report:
https://claude.ai/code/artifact/94884b43-f3f8-4b63-9232-b05634390527

Branch: `claude/geo-seo-fixes` (off `origin/main`, which is what's actually deployed —
the old `claude/elor-lighting-website-lc2dxy` checkout was stale and unrelated).

Note: the shared phone number across all 3 stores is **intentional** (confirmed by
Ijas, and by `main`'s own commit "Use one contact number across the site and all
three stores") — not a bug, removed from the list.

## Batch 1 — done (2026-08-19, branch `claude/geo-seo-fixes`)

- [x] 1. Privacy Policy + Terms of Service pages, linked in footer + consultation form
- [x] 2. Fix canonical/domain mismatch (`elorlighting.com` → `www.elorlighting.com`) sitewide — single source of truth in `lib/site.ts`, cascades to layout metadataBase, robots.ts, sitemap.ts, Organization schema
- [x] 3. Add `Service` schema to `/customisation` and `/consultation`
- [x] 4. Add `FAQPage` schema to existing Q&A content on those two pages (reused the existing `faqs` arrays, no new content)
- [x] 5. Content: added one factual, query-matching sentence to the homepage stores-section lede ("Custom chandelier design, fabrication and installation, in person in Kannur, Kochi and Kozhikode") — deliberately did NOT touch the Hero copy, which is explicitly art-directed (see code comments citing April Dunford's Sales Pitch structure); a fuller content/city-page expansion is a separate, bigger project
- [x] 6. Security headers via `next.config.js` `headers()` — CSP, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy. CSP uses `'unsafe-inline'` for script-src/style-src (codebase relies on inline `style={{}}` props + Next.js App Router's RSC hydration script); a stricter nonce-based CSP via middleware is possible as a follow-up but is a separate, bigger change

Verified: `npm run build` clean, all pages statically generated, canonical/schema/sitemap confirmed in build output, pages hydrate with no console errors (checked via `next start` + Lightpanda). Not yet pushed/merged — branch only.

## Backlog — Critical/High (not started)

- [ ] 7. No named people / About page (founder, designer, team)
- [ ] 8. Testimonials — **correction**: they already have real names and locations (Anjali & Rahul Menon, Kochi; Sameer K., Kozhikode; Ar. Divya Nair, Kannur), contrary to the original audit note. What's still actually missing: no date on each testimonial, and no link to an independently verifiable source (e.g. Google Reviews) — narrower fix than originally scoped

## Backlog — Medium

- [ ] 9. Kochi missing PIN code in schema. **Correction**: the "inconsistent store naming" part of this item is not a bug — Kochi trades as a different legal brand ("Elor Lighting" vs "Celestial Lights" for Kannur/Kozhikode) per explicit code comment in `lib/site.ts`; do not rename it to match the other two
- [ ] 10. Products missing `offers`/price/availability/`sku`
- [ ] 11. No `aggregateRating`/`Review` schema anywhere
- [x] 12. `robots.txt` `Host:` directive — fixed for free by item 2, both `sitemap` and `host` in `app/robots.ts` read the same `site.domain` constant
- [x] 13. Sitemap `lastmod` is a build timestamp, not real freshness — done in Batch 2
- [x] 14. Fabrication process not marked up as `HowTo`/ordered list — done in Batch 4 on `/customisation`, derived from the same `processSteps` array the page already renders (extracted from inline JSX so schema and visible content can't drift apart)
- [~] 15. No freshness/"last updated" indicator on pages — addressed where it actually fits editorially: all 4 Guides pages show "Updated [date]" (Batch 3), Privacy/Terms already had it (Batch 1). Judgment call: not forcing a date stamp onto evergreen service pages (customisation/consultation/stores) where "freshness" isn't a meaningful signal — revisit if that judgment seems wrong
- [x] 16. No `geo` coordinates on stores — done in Batch 4, geocoded from the address text via OpenStreetMap Nominatim (locality-level, not GPS-surveyed — noted in a code comment). Kozhikode's is doubly approximate since its address is itself still a placeholder
- [ ] 17. Case studies lack client name/city/measurable outcome
- [ ] 18. No press/media mentions or industry listings

## Backlog — Low

- [x] 19. No `WebSite`+`SearchAction` schema — done in Batch 2 (as `WebSite` only, no `SearchAction`: the site has no on-site search, so a sitelinks-search-box schema would be invalid structured data)
- [x] 20. No `BreadcrumbList` schema — done in Batch 2, all 6 subpages
- [x] 21. No IndexNow key file — done in Batch 2 (key file only; submitting URLs on publish is a separate follow-up)
- [ ] 22. Showroom video not linked to YouTube
- [~] 23. Poetic copy needs an adjacent factual sentence for citability — the Hero already carries one ("3 experience stores in Kerala · Kannur · Kochi · Kozhikode", always in the DOM per its own code comments), and the stores-section lede got one in Batch 1. Not touching the Hero's art-directed scene copy itself (explicitly protected, see `components/sections/Hero.tsx`'s own comments on the April Dunford structure) — checked whether other sections need the same treatment and didn't find an urgent gap, but flagging as a judgment call rather than fully closing it
- [x] 26. `llms.txt` — not in the original audit, added in Batch 2 since the gap was real (no llms.txt existed at all)

## Off-site (not code — tracked here for visibility)

- [ ] 24. Claim Google Business Profile ×3, get first reviews, LinkedIn company page
- [x] 25a. GSC — confirmed connected 2026-08-19 (property verified, API returning live data). All-zero traffic so far, expected since the domain only went live today; re-check in a week or two.
- [ ] 25b. Bing Webmaster Tools, GA4 — still not confirmed

## Review Log

### Batch 4 — 2026-08-19: quick technical wins (no Ijas input needed)

`geo` coordinates on all 3 `LightingStore` schema entries (`lib/site.ts`, `app/stores/page.tsx`)
— geocoded from the existing address text via OpenStreetMap Nominatim, locality-level
accuracy, documented as such in a code comment (not GPS-surveyed). `HowTo` schema on
`/customisation` (Measure → Design → Fabricate → Install), derived from the same
`processSteps` array the page already renders in JSX so schema and visible content
share one source. Reviewed #15 and #23 and made judgment calls rather than forcing
changes that didn't fit — see inline notes above.

`npm run build` clean, spot-checked via `next start` + curl. Committed and pushed to
`main` 2026-08-19.

### Batch 3 — 2026-08-19: Guides section (pricing guide + 3 city pages)

New "Guides" section at `/guides`, driven by the competitor research from this
session (JagMag Lights wins AEO citations via a direct buying guide, Samrattraders
owns the pricing query via a dense price-table page, White Teak wins local Kerala
queries via city pages — Elor had none of this content).

Ships:
- `/guides` — index/hub, card grid
- `/guides/chandelier-pricing-guide` — real ready-collection price bands
  (₹3,000–₹70,000+, sourced from the live `celestial-lights-storefront.vercel.app`
  catalog fetch, not invented) + a clearly separate bespoke-pricing section with
  no fabricated custom-fabrication number (quoted per design, per Ijas)
- `/guides/custom-chandeliers-kannur`, `.../kochi`, `.../kozhikode` — one shared
  template (`components/sections/CityGuidePage.tsx`), real per-city copy in
  `lib/cityGuides.ts`, real store data reused from `lib/site.ts`'s `stores`,
  matching testimonial reused from the new `lib/testimonials.ts`

Files: `lib/schema.ts` (breadcrumbSchema refactored to a crumb array for 3-level
breadcrumbs — updated all 6 prior call sites), `lib/guides.ts` (new, index
metadata), `lib/cityGuides.ts` (new, per-city copy), `lib/testimonials.ts` (new,
extracted from `app/page.tsx` so city pages can reuse the same quotes instead of
duplicating them), `lib/site.ts` (nav entry), `components/Footer.tsx` (Guides
link + linked city names), `components/ui/GuideCard.tsx` (new), `app/sitemap.ts`,
`app/llms.txt/route.ts`.

Deliberately did not add a second `LightingStore`/`LocalBusiness` schema on the
city pages — that stays canonical on `/stores` only. Deliberately did not link
to the `celestial-lights-storefront.vercel.app` preview URL anywhere public —
it's unfinished/staging; the real figures are used as plain-text references
only, until `celestiallights.in` is live and `site.shopUrl`/`shopLive` are
updated (separate follow-up).

`npm run build` clean, all 5 new routes statically generated. Verified via
`next start` + curl: BreadcrumbList/Article/FAQPage schema present on every new
page, all 5 URLs in `/sitemap.xml`, Guides listed in `/llms.txt`, nav + footer
links present, city store data (address/hours/phone) matches `lib/site.ts`
exactly, all three price bands render correctly. Committed with Batch 2 and
pushed to `main` (`ce9b67e`) 2026-08-19 — Vercel auto-deploys.

### Batch 2 — 2026-08-19

Files changed: `app/sitemap.ts` (real per-page `lastModified` dates from git
history instead of build timestamp), `app/layout.tsx` (added `WebSite` schema,
no `SearchAction` — no on-site search exists), `lib/schema.ts` (new,
`breadcrumbSchema` helper), `lib/site.ts` (added `indexNowKey`), new:
`app/llms.txt/route.ts`, `public/47d1e184a9472a8ef2421ef36e117c5f.txt`
(IndexNow key file). `BreadcrumbList` schema added to all 6 subpages
(collections, customisation, consultation, stores, privacy, terms).

`npm run build` clean, spot-checked `/llms.txt`, `/sitemap.xml` lastmod
values, the IndexNow key file, and breadcrumb schema presence via `next
start` + curl. Committed with Batch 3 and pushed to `main` (`ce9b67e`)
2026-08-19 — Vercel auto-deploys.

### Batch 1 — 2026-08-19

Files changed: `lib/site.ts`, `next.config.js`, `app/customisation/page.tsx`,
`app/consultation/page.tsx`, `app/page.tsx`, `app/sitemap.ts`, `components/Footer.tsx`,
`components/Footer.module.css`, `components/sections/ConsultForm.tsx`, `app/globals.css`,
new: `app/privacy/page.tsx`, `app/terms/page.tsx`.

Two corrections surfaced while reading the actual code (not just the live site) that changed
scope from the original audit:
- The "duplicate phone number" finding was wrong — it's one deliberate contact line for the
  whole business (confirmed by Ijas, and by `main`'s own commit history).
- The "inconsistent store naming" finding was wrong — Kochi is legitimately a different legal
  brand ("Elor Lighting" vs "Celestial Lights"), stated explicitly in a code comment.

Not yet done: legal review of Privacy Policy / Terms wording (drafted in good faith, reflects
how the site actually handles data today, but neither of us is a lawyer — get it checked before
treating it as final, especially the DPDP Act section).

Merged to `main` and pushed 2026-08-19 (`c347352..2a8eac2`) — Vercel will auto-deploy.
