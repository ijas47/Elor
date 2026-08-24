# Off-Page SEO / Directory / PR Plan — Elor Lighting

Built from a survey of 8 Corey Haines marketing skills (directory-submissions,
public-relations, schema, competitors, content-strategy, social, community-
marketing, video) against what's actually usable for a physical fabrication
business — most of those skills are written for SaaS product launches
(Product Hunt, G2 review drives, MCP registries) and don't transfer. This
adapts the parts that do.

Written 2026-08-24. Companion to `tasks/seo-strategy-actions.md` (the phased
plan) and `tasks/gbp-setup.md` (Google Business Profile data).

## The hard constraint on this whole document

Every legitimate business directory verifies ownership before publishing a
listing — an email confirmation link or a phone OTP sent to the business's own
contact details. That's by design, to keep the directory spam-free, and it
means **I cannot complete a directory submission end to end**. I don't have
access to `hello@elorlighting.com` or the ability to receive an SMS at
`+91 99956 19470`.

What I *can* do, and have done below: pick the right directories for this
business (not a generic SaaS list), write the exact copy for each one so
there's zero drafting left to do, and build the tracker. What's left is
genuinely fast — open each link, paste the copy, click the verification link
or enter the OTP Ijas receives. Realistic estimate: 60–90 minutes for the
whole Tier 1 batch below, in one sitting.

---

## Positioning copy (paste this, don't rewrite it per listing)

Per the directory-submissions skill's Rule 3 — never paste the same
description everywhere, AI engines penalize duplicate content, and each
directory audience reads differently. Three variants:

**Short (under 60 characters, for tag lines / listing titles):**
> Custom chandelier design, fabrication & installation — Kerala, pan-India

**Local-directory variant** (leads with location + physical presence — for
Sulekha, IndiaMART, Justdial, Houzz, Hotfrog, Manta):
> Custom chandelier and lighting fabrication with three experience stores in
> Kerala — Kannur, Kochi and Kozhikode. We design, build and install, with
> pan-India delivery and up to 5-year warranty. Ready collection also
> available at Celestial Lights.

**Trade/B2B variant** (leads with capability — for Houzz professional
profile, Design Detail, architecture-press outreach):
> Elor Lighting fabricates custom chandeliers and lighting schemes to
> architects' and designers' specifications — from a drawing, render or
> sketch, through site coordination, to installation. Project pricing and
> phased delivery for hotels, hospitality and multi-unit residential.
> Three Kerala showrooms, pan-India project delivery.

**Category tags** (use whichever 5–6 apply per directory's taxonomy):
`Lighting store` · `Lighting designer` · `Chandelier manufacturer` ·
`Custom fabrication` · `Interior lighting` · `Lighting contractor`

**Assets every listing will ask for** — already exist, gathered at `/press`:
- Logo: `/brand/logo-mark.svg`, `/brand/logo-wordmark.svg` (light/dark/gold variants)
- Description: use the variants above, not `site.description` verbatim (that's
  the long schema/llms.txt version — too long for most directory fields)
- Photography: `/lifestyle/showroom-grand.jpg`, `/lifestyle/store-wall.jpg`,
  `/work/w3-showroom.jpg`, `/collections/asgard.jpg` — same set as the press page
- Press/media kit URL: `https://www.elorlighting.com/press`
- Website: point each store listing at its own page (`/stores/kannur` etc.),
  not the homepage — same NAP-precision logic as the GBP sheet

---

## Tier 1 — the four that matter most (do this week)

| Directory | Why | Verification | Category | Effort |
|---|---|---|---|---|
| [Sulekha — Lighting Stores](https://www.sulekha.com/lighting-stores/) | Ranks for "lighting shop [city]" queries today; confirmed active category | Phone OTP | Lighting store | 15 min |
| [IndiaMART — Lighting Design Service](https://dir.indiamart.com/impcat/lighting-design-service.html) | Already ranks for the exact query cluster this business competes in | Phone/email OTP + seller onboarding | Lighting designer | 20 min |
| [Justdial](https://www.justdial.com/) | Highest-traffic local directory in India; feeds Google local results | Phone OTP | Lighting store, 3 separate city listings | 20 min |
| [Houzz India](https://www.houzz.in/) | Where architects and interior designers actually search — matches the new `/for/architects-and-designers` page's audience exactly | Email verification + profile review | Lighting designer / professional | 15 min |

## Tier 2 — worth doing, less urgent (week 2–3)

| Directory | Notes |
|---|---|
| [Dial4Trade — Kerala Chandeliers](https://www.dial4trade.com/kerala/chandeliers.htm) | Already surfaced in the original competitor SERP check — low effort, real category match |
| Hotfrog India | General local directory, free listing, email verification only (no OTP) |
| Manta | Same — free, email-verify only, lower priority than the OTP-gated ones since it carries less real traffic |
| Google Business Profile ×3 | **Not a directory submission in the same sense — tracked separately in `tasks/gbp-setup.md`, do first, it's higher-value than anything on this list** |

## Not applicable — skipped deliberately

The directory-submissions skill's full catalog (Product Hunt, BetaList, G2,
Capterra, AlternativeTo, MCP/agent registries, no-code directories, SourceForge,
dev.to profile platforms) is written for a SaaS product launch. None of it
fits a physical fabrication business with no software product — including
these would burn the "first submission" advantage the skill itself warns
about, on categories where this business isn't a genuine fit.

---

## PR / earned media

### The owned piece is done
`/press` is live — company facts, logo assets, store details, photography,
one direct email instead of a contact form. This was a hard prerequisite per
the public-relations skill: journalists expect a press kit before they'll
cover a business, and none existed until today.

### Real pitch targets (Kerala/India architecture & design press)

Found via search, not guessed — these are active, real Malayalam and English
publications covering exactly this space:

| Publication | Language | Angle that fits |
|---|---|---|
| [Interior Times](https://www.magzter.com/en/IN/Newsline-Publications/Interior-Times/Home/) | Malayalam | Consumer-facing, Kerala interior/architecture trends |
| [Designer+Builder](https://designerpublications.com/) | Malayalam | First architecture magazine in Malayalam, B2C |
| [Veedum Planum](https://designerpublications.com/) | Malayalam | Residential-only, very close fit to custom home chandeliers |
| [Design Detail](https://designerpublications.com/) | English | National B2B — architects, interior designers, structural engineers. Best fit for the trade page |
| [Interior + Architecture](http://www.spiderkerala.net/resources/11843-Interior-Architecture-A-lovely-magazine-for-a-dazzling-life.aspx) | Malayalam | Kerala-based, design-focused |

### What to pitch, not "we exist"

Per the PR skill's core rule — the story is never the product, it's the
trend, the data, or the human. Three real angles this business already has:

1. **The false-ceiling / ceiling-fan content itself.** `/guides/chandelier-with-ceiling-fan` and `/guides/false-ceiling-chandelier-weight` are genuinely original, practically useful content that a Malayalam interior magazine's audience would want — pitch as a contributed piece or an interview on "the mistakes homeowners make with statement lighting," not as a company profile.
2. **The three-store, dual-brand structure.** Kannur/Kozhikode trading as Celestial Lights, Kochi as Elor Lighting, one fabrication operation behind both — an actual structural story, not a press-release non-event.
3. **Once real project photography accumulates**: a specific before/after on a Kerala home, pitched to Veedum Planum or Design Detail with the homeowner's permission.

### Pitch email template (under 150 words, per the skill's quality bar)

```
Subject: [Specific angle] — [Elor Lighting / Celestial Lights]

Hi [Name],

[One sentence: the specific hook, not "we wanted to introduce ourselves."]

Elor Lighting designs and fabricates custom chandeliers in-house, with three
showrooms across Kerala (Kannur, Kochi, Kozhikode) — most lighting retailers
in the state import and resell rather than build. [One sentence tying this
to the specific pitch angle.]

Happy to send photography, an interview, or a written piece — whatever's
useful. Press kit: elorlighting.com/press

[Name]
[phone]
```

---

## Off-page: social & community

| Channel | Action | Why |
|---|---|---|
| **Pinterest** | Create a business account, pin every collection/lifestyle photo with a keyword-rich description linking back to `/collections` or the relevant guide | Underused in this vertical — pins rank in Google Images, and lighting/interior content performs unusually well there. Free, no directory-style verification friction |
| **Houzz India professional profile** | Separate from the directory listing above — a full portfolio profile with project photos, since this is literally where the `/for/architects-and-designers` audience searches | Already scoped in Tier 1 |
| **LinkedIn company page** | Create one if it doesn't exist, link from `/press` and footer once live | B2B/trade credibility for architects vetting a fabrication partner |
| **Reddit** | r/Kerala, r/india, r/InteriorDesign — genuine participation only, 90% helpful / 10% promotional per the community-marketing skill's explicit ratio. Answer real questions about lighting a Kerala home; mention the guides only when directly relevant | Reddit is heavily indexed by Perplexity and Claude — this is an AEO channel, not just social |
| **Instagram** (`@elorlighting`, already in `sameAs`) | Audit whether it's actually active — I couldn't verify programmatically (Instagram doesn't render for automated tools). If dormant, low priority to revive versus Pinterest/Houzz above | Flagging rather than guessing |

---

## What this doesn't cover

- **G2/Capterra/review-site drives** — not applicable, this isn't software.
- **A full competitor backlink gap analysis** (who links to White Teak/M.K
  Lighting that could realistically also link here) — genuinely valuable,
  not done this pass. Needs either an Ahrefs/Semrush-class tool this
  environment doesn't have API access to, or a slower manual WebSearch sweep.
  Flagging as the next thing worth doing, not skipping silently.
- **Wikidata / Crunchbase entries** — the skill's GEO section calls these out
  as feeding AI training corpora. Crunchbase is venture/startup-oriented and
  a poor fit; a Wikidata entry is legitimate and cheap but not urgent at this
  stage — revisit once the business has third-party press coverage to cite
  in the entry (Wikidata prefers referenced claims).

## Tracker

| Item | Tier | Status | Verification needed |
|---|---|---|---|
| Sulekha | 1 | Not started | Phone OTP |
| IndiaMART | 1 | Not started | Phone/email OTP |
| Justdial ×3 (one per store) | 1 | Not started | Phone OTP |
| Houzz India | 1 | Not started | Email |
| Dial4Trade | 2 | Not started | — |
| Hotfrog | 2 | Not started | Email |
| Manta | 2 | Not started | Email |
| Pinterest business account | Social | Not started | Email |
| Houzz professional profile | Social | Not started | Email |
| LinkedIn company page | Social | Not started | Login as Ijas |
| PR pitch — Interior Times | PR | Not started | — |
| PR pitch — Designer+Builder / Veedum Planum / Design Detail | PR | Not started | — |
