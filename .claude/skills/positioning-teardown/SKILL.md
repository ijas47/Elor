---
name: positioning-teardown
description: Tear down a B2B company's positioning and homepage messaging from a URL, then rewrite it stage-appropriately and produce a LinkedIn version of the teardown for thought leadership / acquisition wedge. Use when the user says "positioning teardown," "tear down [URL]'s positioning," "audit positioning," "rewrite positioning for [company]," "Fletch-style teardown," "homepage messaging audit," or pastes a URL with intent to critique its hero/messaging. Anchored on Anthony Pierri / Rob Kaminski (Fletch PMM) frameworks, with April Dunford / Peep Laja / Sean Ellis lenses pulled in by exception. Outputs three files per company: teardown.md, rewrite.md, linkedin.md.
---

# Positioning Teardown

A stage-aware positioning + messaging audit, anchored on Pierri/Kaminski (Fletch PMM), with Dunford/Laja/Ellis as supplementary lenses. Three deliverables per run, all written for the user to ship: a teardown, a rewrite, a LinkedIn post.

## Inputs

- **URL** (required): the company's homepage. Subpages (pricing, product, about) crawled if linked from the homepage.
- **Stage** (optional): if the user gives it, use it. Otherwise, infer from signals on the site (funding mentions, team size, customer logos, review counts, careers page, founding year).
- **ICP / category context** (optional): if the user gives it, use it. Otherwise, infer.

If the user runs the skill with just a URL, **infer everything**, do the teardown, and **flag your inferences at the top of the teardown** so the user can correct them in one pass before publishing.

## Output location

`<cwd>/teardowns/<company-slug>/`

- `teardown.md`. The audit
- `rewrite.md`. The new positioning + messaging
- `linkedin.md`. The LinkedIn post
- `raw-hero.txt`. Verbatim hero/sub-hero/CTA text scraped, for reference

If `<cwd>/teardowns/` doesn't exist, create it. Use `mkdir -p`. Slug = lowercased company name with hyphens.

## Execution flow

### Step 1. Fetch the homepage

Use `WebFetch` to get the homepage. Pull out:
- Hero copy (verbatim)
- Sub-hero copy (verbatim)
- Primary CTA text + URL
- Secondary CTA if present
- All H1/H2 headings on the page
- Logo bar / customer mentions
- Section headings (use cases, features, pricing, etc.)
- Footer signals (funding, "© 2024 X Inc.")

Save the verbatim hero/sub-hero/CTA to `raw-hero.txt`. The teardown depends on quoting these accurately. Do not paraphrase.

### Step 2. Infer stage and ICP

Quick signals:

| Signal | What it suggests |
|---|---|
| "Series A" / "YC W22" / "backed by [VC]" mentioned | Pre-Series-A to Series A |
| Single product, no platform pages | Pre-PMF or early PMF |
| 3+ product pages, "platform" language | Series B+ |
| Logo bar with 10+ enterprise logos | Series B+ |
| Pricing starts at <$50/mo | SMB / PLG |
| "Contact sales" only | Mid-market / enterprise |
| Team page with 100+ people on LinkedIn | Series C+ |
| "Founded 2023/2024" | Early stage regardless of other signals |

Map to ARR band:
- **Pre-PMF / Early ($0–1M):** narrow ICP, single use case. Painful Problem or Specific Use Case hero.
- **Finding PMF ($1–5M):** repeatable wedge. Use-case hero with named ICP.
- **Scaling ($5–20M):** can broaden, but with strong wedge story.
- **Late / Platform ($20M+):** category-level positioning acceptable.

When in doubt, position **earlier than the signals suggest**. Most early-stage sites are written like Series B; the rewrite almost always pulls them back.

### Step 3. Read the frameworks before scoring

Read the Pierri/Kaminski spine in full before writing the teardown:
- `frameworks/pierri-kaminski.md`

Reference (only when their issue applies):
- `frameworks/supplementary.md`

The teardown must cite **which principle is being violated**, not just "this is vague." Specificity in the teardown itself is the product.

### Step 4. Run the teardown

Open `templates/teardown.md`. Fill it in fully. Specifically:

- Score the **five forced answers** (who / what / problem / better / next). Quote the line that does or fails the job.
- Write the **one-sentence product description from the hero alone**. If you can't, that's the headline.
- Score the **specificity test** on at least 5 lines. Tag platitudes.
- Identify the **buyer awareness mismatch** between site copy and arriving traffic.
- Identify the **archetype mismatch** if any.
- Surface **Founder Vision Mode** signals (count "platform" / "OS" / "AI-powered" / "modern teams" / etc.).
- List the **top 3 leaks**, each with location, cost, and one-line fix.
- List **what's working**, so the rewrite preserves it.

Length target: 800–1,500 words. Dense, not padded.

### Step 5. Write the rewrite

Open `templates/rewrite.md`. Fill it in. Specifically:

- Pick **one** recommended hero archetype with stage justification.
- Write **three** hero options (Conservative / Sharper / Aggressive). The user picks.
- Write a sub-hero that does **different work** from the hero (answers a different question).
- Outline the page hierarchy (5–7 H2s, each answering a different question).
- Three value props with proof, each passing the Specificity Test.
- CTA pattern matched to buyer awareness level.
- A "what to NOT say" list. Phrases to drop, with reasons.
- The "founder vision vs. ship today" framing. To surface the conversation the user will have with the founder.
- Messaging hierarchy: one-liner / tagline / elevator / demo opener.
- A test plan if there's enough traffic.

### Step 6. Draft the LinkedIn post

**Before drafting**, invoke the `ijas-content-engine:ijas-voice` skill (Skill tool) to load voice rules. Without it the post will violate Ijas's voice.

Then open `templates/linkedin.md` and draft the post per its structure. Cross-check against the voice rules. Strip em dashes, kill platitudes, enforce specific numbers. One idea per post.

Default to **named company** mode unless the user flags otherwise. The wedge play depends on naming.

### Step 7. Report back

Tell the user:
1. The three files written (with paths).
2. The one-sentence verdict from the teardown.
3. The recommended hero option (A / B / C) and one-line reason.
4. The LinkedIn post mode used (named or anonymized).
5. Anything you inferred that they should sanity-check (stage, ICP, category) before publishing.

Don't paste the full files into the chat. Point to them. The user reads in their editor.

## Project independence (hard rule)

Every company teardown is a standalone project. Inside the four deliverable files (`teardown.md`, `rewrite.md`, `linkedin.md`, `raw-hero.txt`) **never** reference, name, score against, or pattern-match to any previous teardown. No "same score as [other company]." No "the inverse of [other company]." No "third teardown this month." No "trio reveal." No "series framing." No "compounding wedge" prose linking one company to another.

The only valid comparisons inside a deliverable are:
- The company's current copy vs the proposed copy.
- The company's own named market alternatives (e.g., 6sense, Lindy, n8n, building it yourself).
- The framework anchors (Pierri, Kaminski, Dunford, Laja, Ellis) cited as the principle being violated.

This rule applies to the LinkedIn post draft as well. If the user wants series-style framing later, they will ask for it as a separate output. Default behavior is total independence per company.

Apply this on every run regardless of conversation history.

## Voice and tone for the deliverables

- **teardown.md** and **rewrite.md** are operator docs. Direct, specific, no fluff. Quote the live page. Show your work.
- **linkedin.md** must pass the `ijas-voice` rules. No em dashes. Numbers over adjectives. No "thoughts?" / "comment for the link." First person past tense for the build ("I tore down").

## What this skill does not do

- Does not write the full new homepage. The rewrite gives hero + sub-hero + section H2s + value props + CTA. Long-form section copy is a separate engagement (`/copywriting`).
- Does not run conversion experiments. Recommends a test plan.
- Does not do customer research. Inferences are from the live site only. If the user has interview transcripts or call recordings, the rewrite will be sharper, but the skill works without them.
- Does not generate page designs or wireframes. Hierarchy recommendations only.

## When to push back on the user

- If the user wants to position a $0–1M ARR company as a "platform". Push back. Recommend Specific Use Case archetype.
- If the user asks for a teardown of a Fortune 500 site. Note that the rubric is calibrated for early-to-mid B2B SaaS. The findings will be less actionable for enterprise sites built by committee.
- If the user wants the LinkedIn post to be soft / diplomatic. Note that soft = no engagement on LinkedIn for teardowns. Offer the anonymized version instead.

## Companion commands

- `/copywriting`. For full-page section copy after the rewrite is approved.
- `/page-cro`. For conversion testing the rewrite.
- `/customer-research`. To sharpen the ICP language before rewriting.
- `ijas-content-engine:ijas-voice`. Invoked automatically for the LinkedIn draft.
