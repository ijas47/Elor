# Your task list — Elor SEO

Everything blocked on you, in the order that unblocks the most work.
Last updated 2026-08-24. Code-side work is tracked separately in
`tasks/seo-strategy-actions.md`.

---

## This week — nothing else moves until these do

### 1. Google Business Profile — Kannur
Unblocked, do it today. Full pre-filled data in `tasks/gbp-setup.md`.
Verification takes days to weeks, so the clock starts when you start.
**Unblocks:** local pack for "chandelier shop Kannur" and similar. Nothing
on the website substitutes for this.

### 2. Kozhikode's real street address
`lib/site.ts` still has `Mavoor Road, Kozhikode, Kerala 673004` as a
placeholder, so its schema and geo coordinates are both wrong, and its
GBP cannot be created (editing an address post-verification restarts
verification).
**Unblocks:** GBP #3, correct store schema, the Kozhikode store page.

### 3. Kochi PIN code
Missing from the address entirely.
**Unblocks:** GBP #2, complete `PostalAddress` schema.

### 4. Founder and team details
Names, roles, years in lighting, one line of background each, photos.
**Unblocks:** the About page, `Person` schema, and bylines — which are
three of the four highest-impact AI-citation levers. No named human
appears anywhere on the site right now, and that is the single biggest
AEO gap.

---

## Next two weeks

### 5. Confirm the sitemap registered
Search Console → Sitemaps. I submitted it on 2026-08-24 and the API
returned success, but the read scope errored immediately after so I
could not verify it landed.

### 6. Ask five customers for Google reviews
Only possible once a GBP is verified.
**Unblocks:** `AggregateRating` / `Review` schema, which cannot be added
honestly until real reviews exist. Never fabricate these.

### 7. Real testimonial dates
The four testimonials are real and named but undated, which weakens them
as trust signals.

### 8. Showroom video → YouTube
Already shot, currently linked nowhere. YouTube is frequently cited by
AI Overviews.

### 9. Bing Webmaster Tools + GA4
Neither is confirmed connected.

### 10. Warranty terms in writing
"Up to 5 years" appears across the site. The specifics are a citable
statistic and currently undefined.

---

## When convenient

### 11. Projects by city
Even a rough list of towns you have installed in. Turns the Phase 2
service-area pages from templated to evidenced — this is the difference
between pages that rank and pages that get filed as thin content.

### 12. Celestial Lights domain + launch date
So the cross-domain schema and links can be built in rather than
retrofitted.

### 13. Legal review of Privacy and Terms
Drafted in good faith, never reviewed by a lawyer, especially the DPDP
Act section.

### 14. Directory listings
IndiaMART, Justdial, Houzz India, Sulekha. They already rank for your
city queries. Use the exact NAP strings from `tasks/gbp-setup.md`.
