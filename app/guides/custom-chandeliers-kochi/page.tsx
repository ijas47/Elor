import type { Metadata } from "next";
import { CityGuidePage } from "@/components/sections/CityGuidePage";
import { cityGuides } from "@/lib/cityGuides";

const copy = cityGuides.Kochi;

export const metadata: Metadata = {
  title: copy.metaTitle,
  description: copy.metaDescription,
  alternates: { canonical: "/guides/custom-chandeliers-kochi" },
};

export default function Page() {
  return <CityGuidePage city="Kochi" />;
}
