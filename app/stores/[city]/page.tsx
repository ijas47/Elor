import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { StoreCityPage } from "@/components/sections/StoreCityPage";
import { storeCities, type StoreCity } from "@/lib/storeCities";

// One route for all three store pages. Adding a fourth store means adding a
// record to lib/site.ts's `stores` and lib/storeCities.ts — no new page file.
const slugToCity: Record<string, StoreCity> = {
  kannur: "Kannur",
  kochi: "Kochi",
  kozhikode: "Kozhikode",
};

export function generateStaticParams() {
  return Object.keys(slugToCity).map((city) => ({ city }));
}

// Any slug outside the map 404s rather than rendering an empty shell — stops
// /stores/anything becoming an accidental soft-404 that Google indexes.
export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city: slug } = await params;
  const city = slugToCity[slug];
  if (!city) return {};
  const copy = storeCities[city];
  return {
    title: copy.metaTitle,
    description: copy.metaDescription,
    alternates: { canonical: `/stores/${slug}` },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city: slug } = await params;
  const city = slugToCity[slug];
  if (!city) notFound();
  return <StoreCityPage city={city} />;
}
