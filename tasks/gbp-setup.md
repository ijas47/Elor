# Google Business Profile setup — exact data to enter

**I cannot open the Google account.** Business Profile edits happen in the
browser where that Google user is signed in. Kochi is already claimed on the
account in the 24 Sep 2026 screenshot. The clicks left on that profile are
listed under Profile 2. Kannur and Kozhikode start once the owners add Ijas
as an owner.

What follows is everything pre-filled so you can work through it in one sitting.
Start at https://business.google.com/create

## Why this matters more than anything else on the list

Local pack results — the map box for "chandelier shop Kannur" — are drawn from
Google Business Profile, not from the website. No amount of `LightingStore`
schema substitutes for it. Verification takes days to weeks, so the clock only
starts once you begin.

## Critical rule: NAP must match the site character-for-character

Name, Address, Phone. Google cross-checks these against the site and against
directory listings. A mismatch ("Ground Floor" vs "GF", "Kerala" vs "KL") splits
the entity signal. Copy the strings below exactly — they are pulled from
`lib/site.ts`, which is what the site and its schema render.

---

## Profile 1 — Kannur

- **Business name:** `Celestial Lights`
- **Address:** `Ground Floor, P O Chovva, Kannothumchal, Kannur, Elayavoor, Kerala 670006`
- **Phone:** `+91 99956 19470`
- **Website:** `https://www.elorlighting.com/stores/kannur`
- **Hours:** Mon–Sat, 9:30 AM – 8:30 PM · Closed Sunday

## Profile 2 — Kochi

Already claimed. The Google account that manages it sees the profile when searching `Elor Lighting PVT LTD` (screenshot, 24 Sep 2026). The public name on the map is `Elor Lighting PVT LTD`. Leave that legal name unless the owners want it shortened to `Elor Lighting`. Changing a verified name can send the profile back through verification.

The address field currently starts with the company name and uses Google’s spellings `Kadavantha` and `Keralam`. Replace the whole address with the string below so it matches the site. Then fill the two gaps the dashboard is asking for: phone and hours.

- **Business name:** `Elor Lighting PVT LTD` (already set)
- **Address:** `63/499, Chalakuzhy, Gandhinagar Road, near the Fire and Rescue Station, Gandhi Nagar, Kadavanthra, Kochi, Kerala 682020`
- **Phone:** `+91 99956 19470`
- **Website:** `https://www.elorlighting.com/stores/kochi`
- **Hours:** Mon–Sat, 9:30 AM – 8:30 PM · Closed Sunday
- **WhatsApp:** the same number, via Add WhatsApp on the dashboard
- **Primary category:** already `Lighting consultant`. Add `Lighting store` if the category list offers it. Do not remove the consultant category.

## Profile 3 — Kozhikode

- **Business name:** `Celestial Lights`
- **Address:** `Mavoor Road, Kozhikode, Kerala 673004`
- **Phone:** `+91 99956 19470`
- **Website:** `https://www.elorlighting.com/stores/kozhikode`
- **Hours:** Mon–Sat, 9:30 AM – 8:30 PM · Closed Sunday
- ⚠️ **This address is a placeholder** in `lib/site.ts`. Do not create this
  profile until you have the real street address — a wrong address is worse
  than no listing, and editing it after verification restarts verification.

---

## Settings for all three

- **Primary category:** `Lighting store`
- **Secondary categories:** `Lighting contractor`, `Interior designer`
- **Service area:** all of Kerala (plus pan-India delivery, noted in the
  description rather than as a service area — Google expects service areas to
  be drivable)
- **Attributes:** in-store shopping, in-store pickup, delivery, wheelchair
  accessible (only if true)

**Description** (same for all three, 750 char limit):

> Custom chandelier design, fabrication and installation, plus the Celestial
> Lights ready collection. We measure your space, design the piece, build it,
> and install it — one team for the whole job, with up to 5-year warranty.
> Free design consultation in store, at your site, or over video. Pan-India
> delivery from our three Kerala experience stores in Kannur, Kochi and
> Kozhikode.

## Note on the shared phone number

All three profiles carry the same number by design (one line for the whole
business, so enquiries can be automated). Google permits this. It occasionally
triggers a duplicate-listing flag during verification — if that happens, the
distinct addresses and distinct trading names resolve it on appeal.

## After verification, in priority order

1. **Photos** — at least 10 per profile: storefront, interior, lit fixtures,
   team. Profiles with photos get materially more engagement.
2. **First reviews** — ask five recent customers. This unblocks item #11 in the
   audit backlog (`AggregateRating` schema), which cannot be added honestly
   until real reviews exist.
3. **Link back** — each profile's website field points at its own store page,
   not the homepage. Already set above.
4. **Google Posts** — one a month is enough to keep the profile active.
