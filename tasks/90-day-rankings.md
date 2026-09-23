# 90-day ranking list — Elor Lighting

**Window:** 23 September 2026 → 23 December 2026
**Tracker:** check a box here when the thing is live, not when it is drafted. Older notes stay in `tasks/seo-strategy-actions.md` and `tasks/seo-geo-aeo-audit-2026-09-23.md`. This file is the one we work from.

## What “top of Google” means in 90 days

The site is a month old in Search Console: 3 clicks and 97 impressions in the last 28 days, one real query (“celestial lights kannur”, position 6.3, no clicks). National terms such as “buy chandelier” and “chandelier manufacturer India” are held by White Teak, IndiaMART, and JagMag. Those are not 90-day wins.

By 23 December the target is:

| Result | Target |
|---|---|
| Celestial Lights Kannur | Top 3, and at least one click a week |
| Celestial Lights Calicut / Kozhikode | Impressions, then clicks |
| Every current guide | Indexed, and at least half of them showing impressions |
| Non-brand queries | 5 with impressions, 3 with clicks |
| AI answers | Cited on 4 of the 20 queries listed in the September audit, in at least one engine |
| Off-site | 3 Google Business Profiles live, or a written reason they are still blocked. Four directory listings pointing at the matching store URL |

A query with no page, no profile, and no mention will not reach the top because we asked it to.

## Already live (do not redo)

- [x] `https://www.elorlighting.com/robots.txt` allows every crawler, including GPTBot, PerplexityBot, ClaudeBot, and Google-Extended, and points at the sitemap
- [x] `https://www.elorlighting.com/sitemap.xml` lists the pages, including the two new guides, and is registered in Search Console
- [x] `https://www.elorlighting.com/llms.txt` and `https://www.elorlighting.com/pricing.md`
- [x] IndexNow key file at `public/47d1e184a9472a8ef2421ef36e117c5f.txt`
- [x] Canonical host is `www`. Organization, WebSite, Breadcrumb, FAQ, HowTo, LightingStore, and collection ImageObject schema are in the server HTML
- [x] GA4 `G-QXWSL80NYJ`. Search Console property connected
- [x] Guide set: custom chandelier, lighting plan, Kelvin/CRI/beam, size calculator, ceiling fan, false ceiling, crystal vs glass, coastal, how to choose a shop, pricing
- [x] Related-guides block on every guide. New guides link to each other

## Month 1 — to 23 October

Code, this week:

- [x] `llms.txt` lists each guide as its own link, with the dek, instead of one long sentence
- [x] Customisation and each store page link to the lighting-plan guide and the Kelvin guide
- [x] Kannur title is `Celestial Lights Kannur`. Kozhikode title is `Celestial Lights Calicut`. Kochi stays Elor
- [x] IndexNow ping for the two new guides, and the sitemap resubmitted in Search Console, after those titles are on production. IndexNow returned 202 on 23 Sep 2026. Sitemap resubmit succeeded.
- [ ] Confirm both new guides return 200 on the live domain and are “URL is on Google” in URL Inspection within 14 days

You, this month. These move local pack and AI recommendations more than another page will:

- [ ] Google Business Profile ×3. Kannur and Kozhikode as Celestial Lights. Kochi as Elor Lighting. Website field is `/stores/{city}`
- [ ] Kozhikode street address and Kochi PIN, then update `lib/site.ts`. Do not file directories on the Mavoor Road placeholder
- [ ] Justdial, IndiaMART, Sulekha, Houzz. Paste-ready copy is in `tasks/off-page-seo-plan.md`. Each one needs the OTP on +91 99956 19470
- [ ] Founder name, role, years, and a photo, so the guides can carry a byline. This is the biggest AEO gap that is not a page

## Month 2 — to 23 November

Ship only if month 1 guides are indexed. If Search Console says “Crawled — currently not indexed” on the new guides, fix those pages. Do not add cities.

- [ ] `/guides/building-in-kerala-from-abroad` from the brief in the September audit
- [ ] `/guides/lighting-traditional-kerala-homes` from the same brief
- [ ] One sourced weight table on the false-ceiling guide, with the source named. No pasted forum numbers
- [ ] Showroom film on YouTube, titled as a sentence (“Custom chandelier showroom in Kannur — Celestial Lights”), embedded on the homepage and the Kannur page
- [ ] Weekly Search Console note in `tasks/seo-pulse/` (the 7-day job writes this)

Still held: 11 district pages, town pages, metro pages, a “best chandelier shop” list, any review stars in schema.

## Month 3 — to 23 December

- [ ] One press pitch from `/press` to Design Detail or Veedum Planum
- [ ] First real Google reviews on the Kannur profile, asked after a finished install
- [ ] Read the 20-query AI sheet. Keep the four queries where Elor is cited. Rewrite the title of any guide that has impressions and zero clicks
- [ ] Drop OpenSEO exports in `tasks/openseo/` if the login is ready. The 14-day job reads them. Until then, volumes stay blank
- [ ] Decide the December cut: any guide with zero impressions after 60 days gets a tighter title or is left alone. It does not get a twin page

## The 20 queries we are actually chasing

1. celestial lights kannur
2. celestial lights calicut
3. celestial lights kozhikode
4. elor lighting
5. chandelier shop kannur
6. chandelier shop kochi
7. chandelier shop kozhikode
8. lighting shop kannur
9. custom chandelier kerala
10. custom chandelier manufacturer india
11. hotel chandelier kerala
12. chandelier size calculator
13. chandelier with ceiling fan
14. can a false ceiling hold a chandelier
15. crystal vs glass chandelier
16. custom chandelier cost india
17. lighting design for architects kerala
18. coastal lighting kerala
19. nalukettu lighting
20. building a house in kerala from abroad lighting

1–4 and 12–18 are the ones a new domain can touch in 90 days. 5–8 need the Business Profiles. 10 and 11 are JagMag’s, and we do not publish a hotel case study until a real project can be named. 19 and 20 wait for the month-2 guides.
