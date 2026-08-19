# SEO / GEO / AEO Action Plan — Elor + Celestial Lights

Full strategy: `tasks/seo-geo-strategy.html` (published as an Artifact).
Audit backlog it supersedes in part: `tasks/todo.md`.

Written 2026-08-19. Horizon: 6 months.

## Core decisions this plan rests on

1. **Two domains, zero query overlap.** Elor owns service/consideration/local
   queries. Celestial owns product/transactional queries. Elor never publishes
   product detail pages; Celestial never publishes city pages or design guides.
2. **Service-area pages are not doorway pages.** Cities with a store get
   `LightingStore` schema and a real address. Cities without one get `Service` +
   `areaServed` and honest "delivered and installed from [nearest store]"
   framing. No fake NAP, ever.
3. **Hub-linked, not orphaned.** The `/lighting` hub is footer-linked and out of
   the main nav — which is what "buried" should mean. Orphan pages don't rank.
4. **Phases are gated on GSC data**, not on calendar dates. Each phase ships only
   when the previous one proves indexation.

---

## Phase 0 — Foundations (weeks 1-2, no new city pages)

- [ ] Claim Google Business Profile ×3 (Kannur/Kozhikode as Celestial Lights,
      Kochi as Elor Lighting). **Start first — verification is the long pole.**
- [ ] About page + `/about/{person}` with `Person` schema *(blocked: names, roles,
      years of experience, photos)*
- [ ] Bylines with credentials on all existing guides *(blocked: same)*
- [ ] Bing Webmaster Tools + GA4 connected
- [ ] IndexNow: submit URLs on publish (key file already live)
- [ ] Directory listings: IndiaMART, Justdial, Houzz India, Sulekha
- [ ] Kozhikode real address + Kochi PIN in `lib/site.ts` *(blocked: data)*
- [ ] Restructure:
  - [ ] `app/stores/[city]/page.tsx` — absorbs the 3 city guides
  - [ ] `app/lighting/page.tsx` — service-area hub, footer-linked
  - [ ] `app/lighting/[city]/page.tsx` + `generateStaticParams`
  - [ ] `lib/serviceAreas.ts` — per-city data model
  - [ ] `app/sitemap.ts` — generate from data, not the hardcoded array
  - [ ] `next.config.js` — 301s from `/guides/custom-chandeliers-{city}`
  - [ ] Footer: link `/lighting` hub

## Phase 1 — Content wedges (weeks 3-5)

Queries no Indian competitor covers properly. Ship before city pages so the
location pages land on a domain Google already reads as knowledgeable.

- [ ] `/guides/chandelier-size-calculator` — client-side, room dims → diameter,
      ceiling height → drop, plus fan clearance + ceiling-load check
- [ ] `/guides/chandelier-with-ceiling-fan` — the biggest uncontested gap
- [ ] `/guides/false-ceiling-chandelier-weight` — gypsum/POP vs RCC slab anchoring
- [ ] `/guides/crystal-vs-glass-chandelier` — comparison format (~33% of AI citations)
- [ ] `/guides/coastal-lighting-kerala` — salt/humidity material guidance
- [ ] `/guides/building-in-kerala-from-abroad` — NRI/Gulf remote-build wedge
- [ ] `/guides/lighting-traditional-kerala-homes` — nalukettu, courtyards, rafters
- [ ] `/pricing.md` — machine-readable price bands for AI agents

**Gate → ≥1 guide showing GSC impressions before Phase 2.**

## Phase 2 — Kerala districts (weeks 6-9)

11 district HQs: Thiruvananthapuram, Kollam, Pathanamthitta, Alappuzha,
Kottayam, Idukki, Thrissur, Palakkad, Malappuram, Wayanad, Kasaragod.

- [ ] Per-city data records (nearest store + drive time, coastal flag, typology,
      localities, projects, FAQs) — target 600-900 unique words/page
- [ ] Alias handling: Trivandrum, Alleppey, Quilon, Trichur, Palghat — as content
      variants and redirects, **not** duplicate pages

**Gate → ≥70% indexed and ≥50% with impressions within 21 days. If
"Crawled — currently not indexed" dominates, the template is thin. Fix, don't scale.**

## Phase 3 — Kerala towns (weeks 10-16)

~25 secondary towns: Thalassery, Payyannur, Vadakara, Kalpetta, Manjeri,
Perinthalmanna, Tirur, Guruvayur, Chalakudy, Aluva, Angamaly, Muvattupuzha,
Thodupuzha, Changanassery, Thiruvalla, Cherthala, Kayamkulam, Attingal,
Kanhangad, Ottapalam, Shoranur, Irinjalakuda, Kunnamkulam, Munnar, Kumarakom.

**Gate → Phase 2 pages generating clicks, not just impressions.**

## Phase 4 — Pan-India metros (month 4+)

~15 cities, different framing (no site visits — lead on remote consultation,
shipping, installation partners): Bengaluru, Chennai, Hyderabad, Mumbai, Pune,
Delhi NCR, Ahmedabad, Coimbatore, Mysuru, Mangaluru, Kolkata, Jaipur,
Chandigarh, Goa, Visakhapatnam.

**Gate → Kerala pages converting.** White Teak has physical stores in most of
these; fight there last, from authority.

---

## Celestial Lights pre-launch (cheap now, expensive after)

- [ ] Canonicalise `/collections/y/products/x` → `/products/x` (Shopify default
      creates catalogue-wide duplicates)
- [ ] Pick `www` or apex, enforce with redirects
- [ ] `Product` schema: `offers`, `price`, `priceCurrency: INR`, `availability`, `sku`
- [ ] Google Merchant Center feed from day one
- [ ] Review collection from the first order (never fabricate `AggregateRating`)
- [ ] Cross-domain wiring: mutual `sameAs`, `parentOrganization` /
      `subOrganization`, editorial cross-links both directions
- [ ] Flip `site.shopLive: true` + real `site.shopUrl` in `lib/site.ts`
- [ ] `noindex` the Vercel preview; don't link staging publicly

## Off-site presence (6.5× more AI citations come via third parties)

- [ ] GBP ×3 — highest-value single action in this plan
- [ ] IndiaMART / Justdial / Dial4Trade / Sulekha listings
- [ ] Houzz India profile (where architects search)
- [ ] YouTube: upload the showroom video, embed it
- [ ] Reddit: genuine participation in r/Kerala, r/india, r/InteriorDesign
- [ ] Architect / builder project credits — the durable backlinks in this industry

## Measurement cadence

| Signal | Where | Cadence |
|---|---|---|
| Indexation by page type | GSC Coverage, split sitemaps | Weekly |
| Impressions per city page | GSC Performance | Weekly |
| Local pack presence | Manual, per store city | Monthly |
| AI citations (20 queries × 3 engines) | Manual | Monthly |
| Consultation submissions | GA4 | Weekly |
| Cross-domain referrals | GA4, both domains | Monthly |

---

## Blocked on Ijas

1. Founder + team: names, roles, years, background, photos — **biggest AEO lever**
2. Kozhikode real address (currently a placeholder in `lib/site.ts`)
3. Kochi PIN code
4. GBP access or confirmation he'll claim all three
5. Projects by city — turns service-area pages from templated to evidenced
6. Celestial Lights domain + launch date
7. Real testimonial dates
8. Showroom video → YouTube
9. Warranty terms in writing (a citable statistic)
10. Legal review of Privacy / Terms, especially the DPDP Act section
