import { guides, type Guide } from "@/lib/guides";
import { GuideCard } from "@/components/ui/GuideCard";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";

/**
 * Same-tag guides first, then whatever else fills the row, self excluded.
 * Exists because the audit found some guides (how-to-choose-a-custom-
 * chandelier) had zero contextual inbound links, reachable only from the
 * /guides hub. Query fan-out rewards a linked cluster over isolated pages,
 * so every guide should point at its neighbours, not just the index.
 */
function pickRelated(currentSlug: string, count: number): Guide[] {
  const current = guides.find((g) => g.slug === currentSlug);
  const rest = guides.filter((g) => g.slug !== currentSlug);
  if (!current) return rest.slice(0, count);

  // Hand-picked slugs from lib/guides.ts lead, then same-tag, then the rest.
  const picked = (current.related ?? [])
    .map((slug) => rest.find((g) => g.slug === slug))
    .filter((g): g is Guide => Boolean(g));
  const remaining = rest.filter((g) => !picked.includes(g));
  const sameTag = remaining.filter((g) => g.tag === current.tag);
  const others = remaining.filter((g) => g.tag !== current.tag);
  return [...picked, ...sameTag, ...others].slice(0, count);
}

export function RelatedGuides({ currentSlug, count = 3 }: { currentSlug: string; count?: number }) {
  const related = pickRelated(currentSlug, count);
  if (related.length === 0) return null;

  return (
    <section className="sec">
      <div className="wrap">
        <Reveal><h2 className="h-lg" style={{ marginBottom: 40 }}>Related guides</h2></Reveal>
        <Stagger className="collection-grid">
          {related.map((g) => (
            <StaggerItem key={g.slug}>
              <GuideCard guide={g} />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
