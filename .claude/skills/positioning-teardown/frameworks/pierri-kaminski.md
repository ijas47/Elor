# Pierri / Kaminski (Fletch PMM): Primary spine

This is the rubric. Anchor every teardown call here first. Pull from `dunford.md`, `laja.md`, `ellis.md` only when the issue clearly belongs to that lens.

## Hero archetypes (Fletch's five)

The hero section job is **single archetype, executed cleanly**. Most failed B2B homepages mix two or pick the wrong one for the buyer's awareness level.

1. **Painful Problem**. Name a specific, expensive pain. Best when buyers feel the pain daily but haven't named the category. Example: "Your sales team is spending 4 hours a day on data entry."
2. **New Opportunity**. Frame a shift the buyer hasn't acted on yet. Best for category creation, when the buyer doesn't know the problem exists. Example: "Stop hiring SDRs. Hire one AI rep that books 30 meetings a month."
3. **Specific Use Case**. Lead with the exact job. Best for early-stage when ICP is narrow. Example: "Send personalized cold emails to 1,000 prospects in under 30 minutes."
4. **Common Enemy**. Name the alternative everyone hates. Best when there's a dominant incumbent the buyer resents. Example: "The Salesforce alternative built for product-led teams."
5. **Visionary**. Paint the future state. Reserved for late-stage with proof, or category-defining bets with funding. Almost always wrong for pre-Series-A.

**Rule of thumb at <$5M ARR:** Specific Use Case or Painful Problem. Anything else is a Founder Vision Mode trap.

## The five forced answers

A good homepage hero answers all five within 5 seconds of scroll. List each from the page being torn down. If you can't fill one in from the live copy, that's the failure.

1. **Who is this for?** (named ICP, not "modern teams")
2. **What does it do?** (the actual mechanism, not the outcome)
3. **What problem does it solve?** (the buyer's words, not yours)
4. **Why is it better than the alternative?** (named alternative, not "legacy tools")
5. **What do I do next?** (CTA matched to buyer awareness)

## Capability vs. Outcome lead

- **Lead with capability** when the buyer is **product-aware**: they know what category of tool they want and are comparing features. ("Two-way Salesforce sync.")
- **Lead with outcome** when the buyer is **problem-aware** but not solution-aware: they don't know your category exists. ("Cut your CAC in half.")
- **Hybrid (capability + outcome) only works** when both are specific. "AI cold email writer that gets 4x reply rates" works. "AI-powered platform that drives results" does not.

Most early-stage sites lead with **outcome only** when their buyer is **product-aware**, and the hero feels like marketing fluff. Or they lead with **capability** when their buyer is **problem-aware**, and the hero feels like an instruction manual nobody asked for.

## Buyer awareness level (Schwartz, adapted by Kaminski)

Five levels. Hero copy must match where the buyer actually is, not where the founder wishes they were.

1. **Unaware**. Doesn't know they have the problem. Hero must educate. (Almost no early-stage company should target this.)
2. **Problem aware**. Feels the pain, hasn't named a solution category. Hero leads with the pain in their words.
3. **Solution aware**. Knows there's a category of tool that solves it, comparing options. Hero leads with the differentiator vs. category norm.
4. **Product aware**. Knows your product exists, comparing you to 2–3 named alternatives. Hero leads with proof + concrete differentiator.
5. **Most aware**. Ready to buy, looking for the trial / pricing / demo CTA. Hero shouldn't waste real estate.

**Common mismatch to flag:** The site is written like the buyer is **most aware** ("Get started free. No credit card.") when they're actually **problem aware** ("I have a pain, never heard of you, why should I care?").

## ICP-led vs. Use-case-led vs. Category-led positioning

- **ICP-led** ("for HR teams at 200–1,000-person companies") wins when the ICP is small, named, and the buyer self-identifies. Almost always right under $5M ARR if the wedge is industry- or role-specific.
- **Use-case-led** ("send personalized outbound at scale") wins when the buyer's pain is the same across industries. Right when the wedge is functional.
- **Category-led** ("the modern CRM") wins only with a real category + real budget. Wrong for pre-PMF unless the founder is explicitly category-creating with capital to back it.

If the homepage tries to be all three at once, it's a **Founder Vision Mode** trap. Pick one.

## Founder Vision Mode (the most common failure)

The founder is selling the future state. The platform vision, the multi-product roadmap, the eventual category. The buyer is here today with a specific painful problem the founder shipped a single feature to solve. The homepage talks about the vision; the buyer can't tell if the product solves their actual job.

**Symptoms:**
- Hero says "platform" or "operating system" or "all-in-one"
- Three or more value props above the fold
- The actual product feature is on page 3 of the navigation
- "AI-powered" doing the work that a specific use case should be doing
- ICP is "modern teams" / "ambitious companies" / "growth-stage"

**Fix:** narrow the hero to the single use case that drove the last 10 customers. Put the platform vision on a `/vision` page or in a separate "where we're going" subhead.

## The Specificity Test (Kaminski)

For every line of hero copy, ask: **would a reasonable competitor disagree with this?** If a competitor would happily put the same line on their site, it's a platitude. Kill it.

- "Built for modern teams". Competitor would agree. Kill.
- "Two-way HubSpot sync, no Zapier required". Competitor would push back. Keep.
- "AI-powered automation". Competitor would agree. Kill.
- "Replaces your $1,200/mo Outreach seat with a $99/mo workflow". Competitor would push back. Keep.

Run this on every hero, subhead, and section header in the teardown. Tag the platitudes.

## CTA fit by awareness level

| Buyer awareness | Right CTA pattern |
|---|---|
| Problem aware | "See how it works" / "Watch the 2-min demo" |
| Solution aware | "Compare to [Category]" / "Read the buyer's guide" |
| Product aware | "Book a demo" / "Talk to sales" |
| Most aware | "Start free" / "Get started" / Pricing link |

CTA mismatch is the easiest leak to spot. Buyer is problem aware, the page yells "Book a demo". They bounce.

## Page hierarchy (above-the-fold-first principle)

Right order for a typical B2B SaaS homepage:

1. **Hero**. Single archetype, answers the five forced questions
2. **Sub-hero / value strip**. Three benefits, each one specific and proof-able
3. **Logo bar**. Only if the logos match the ICP. Wrong logos hurt more than no logos.
4. **The one screenshot that answers "what does it actually do"**
5. **Use cases / personas**. Segmented if multi-ICP
6. **Proof**. Case studies, quantified outcomes, integration logos
7. **Pricing or CTA**. Depending on awareness level

Common failure: jamming sections 2–7 above the fold. Visual hierarchy collapses; nothing reads.

## Sentence-starter audit (Kaminski)

Run this on the live page. Every section header, hero, sub-hero, and CTA should pass:

- Does the hero start with **the buyer or the buyer's problem**, not the company?
- Does the sub-hero **add information**, or repeat the hero with synonyms?
- Does each H2 **answer a different question**, or are three H2s saying the same thing?
- Does the CTA say **what happens next**, or just "Get Started" with no context?

If three or more answers are weak, the site is structurally broken, not just copy-broken.

## The Logo-list problem

Social proof without context. Big logos at the top, but the buyer can't tell:
- which logos use which feature
- which logos are at their company size
- whether the case study is for their use case

Either tag the logos by use case / segment, or move them down-page to a real case study section with quantified outcomes.

## "What does it do" failure mode

If a buyer cannot describe what the product does in one sentence after 30 seconds on the homepage, the site has failed. Test this in the teardown by writing the one-sentence description **only from the hero + sub-hero**. If you can't, that's the headline finding.
