import { guides, type Guide } from "@/lib/guides";
import { GuideCard } from "@/components/ui/GuideCard";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";

/**
 * Same-tag guides first, then whatever else fills the row, self excluded.
 * Exists because the audit found some guides (how-to-choose-a-custom-
 * chandelier) had zero contextual inbound links — reachable only from the
 * /guides hub. Query fan-out rewards a linked cluster over isolated pages,
 * so every guide should point at its neighbours, not just the index.
 */
function pickRelated(currentSlug: string, count: number): Guide[] {
  const current = guides.find((g) => g.slug === currentSlug);
  const rest = guides.filter((g) => g.slug !== currentSlug);
  if (!current) return rest.slice(0, count);

  const sameTag = rest.filter((g) => g.tag === current.tag);
  const others = rest.filter((g) => g.tag !== current.tag);
  return [...sameTag, ...others].slice(0, count);
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
