# Elor site: rules for agents

Production is `main`, deployed by Vercel to https://www.elorlighting.com. Change it only through a pull request that Ijas reviews. Never push to `main`, never merge, never force-push.

Before you open a PR, run `npm run ci` (typecheck, source check, build, built-site check). CI runs the same command on the merge result of every PR. To see a change in a browser, use `.cursor/skills/verify-elor/SKILL.md`.

## Rules and what enforces them

| Rule | Enforced by |
|---|---|
| Elor uses +91 88487 08529 for calls and WhatsApp. Celestial uses +91 99956 19470, only on the Kannur and Kozhikode stores. | `lib/brands.ts` is the only place a number exists. Stores take `brandId` and cannot carry their own phone (type error). `npm run check` rejects phone, `tel:` and `wa.me` literals elsewhere. `npm run verify` checks every built page and its JSON-LD. |
| No em dashes. En dashes only in number ranges. | `npm run verify` (`no-em-dash`, `no-en-dash-as-dash`) on all built HTML, llms.txt and pricing.md. `npm run check` (`em-dash`) on source in app, components and lib, comments included. |
| No AI-tell wording (delve, elevate, seamless, unlock, tapestry, testament, "in today's world", "not just", "whether you're"). | `npm run verify` (`no-ai-tell`). Rule-of-three filler and "not X but Y" need judgment. See below. |
| No placeholder business data. Leave a field empty. | `npm run verify` (`no-placeholder`). |
| Meta description at most 160 characters. Title at most 65 including " \| Elor Lighting". | `npm run verify` (`meta-description`, `title-length`). |
| One h1 per page and no skipped heading levels. | `npm run verify` (`one-h1`, `heading-order`). |
| Internal links and sitemap URLs point at pages that exist. | `npm run verify` (`internal-link-resolves`, `sitemap-url-builds`). |
| A guide's date lives only in `modified` in `lib/guides.ts`. | `guideDates()` and the derived `updated` field. `npm run check` rejects typed dates in guide pages. |

## Judgment calls nothing can check

- Business claims. Installation wording is exactly: "We install custom lights and give installation support for everything else." Do not promise a service, stock line, price or timeline that is not already on the site or confirmed by Ijas. Example of what got removed: "Replacement drops can be asked for in the same chat" (PR #1, no such service).
- Celestial stock stays general ("a range of ready fittings") until Ijas confirms categories and brands. The Celestial website is not live. Do not link or mention an online catalogue.
- Rhythm tells: three-item lists after a colon, "not X but Y" constructions, slogan headings. Rewrite as plain statements.
- Bump `modified` only when a guide's body changed, not when it only gained links.
- One keyword, one page. Check the team keyword map (keyword-map.csv in the Elor SEO notes) before retargeting a title.
- Branch from a fresh `main`. Two open PRs that touch the same component (footer, `lib/site.ts`, `lib/guides.ts`) must be rebased and rechecked after the first merges.
