import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GuideArticleView } from "@/components/guides/GuideArticle";
import { getGuideArticle, guideArticles } from "@/lib/guide-articles";

// Room and material guides only. Older guides keep their own folders, which
// win over this dynamic segment.
export function generateStaticParams() {
  return guideArticles.map((article) => ({ slug: article.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getGuideArticle(slug);
  if (!article) return {};
  return {
    title: article.metaTitle,
    description: article.description,
    alternates: { canonical: `/guides/${article.slug}` },
    openGraph: {
      url: `/guides/${article.slug}`,
      images: [{ url: article.image, alt: article.imageAlt }],
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getGuideArticle(slug);
  if (!article) notFound();
  return <GuideArticleView article={article} />;
}
