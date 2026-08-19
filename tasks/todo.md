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
- [ ] 12. `robots.txt` `Host:` directive still points at apex domain
- [ ] 13. Sitemap `lastmod` is a build timestamp, not real freshness
- [ ] 14. Fabrication process not marked up as `HowTo`/ordered list
- [ ] 15. No freshness/"last updated" indicator on pages
- [ ] 16. No `geo` coordinates on stores
- [ ] 17. Case studies lack client name/city/measurable outcome
- [ ] 18. No press/media mentions or industry listings

## Backlog — Low

- [ ] 19. No `WebSite`+`SearchAction` schema
- [ ] 20. No `BreadcrumbList` schema
- [ ] 21. No IndexNow key file
- [ ] 22. Showroom video not linked to YouTube
- [ ] 23. Poetic copy needs an adjacent factual sentence for citability

## Off-site (not code — tracked here for visibility)

- [ ] 24. Claim Google Business Profile ×3, get first reviews, LinkedIn company page
- [ ] 25. Set up GSC (domain property + DNS verification), Bing Webmaster Tools, GA4

## Review Log

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

Branch `claude/geo-seo-fixes` not merged yet — waiting on go-ahead to open a PR against `main`.
