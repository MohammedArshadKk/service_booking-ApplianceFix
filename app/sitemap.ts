import { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";
import { getAllSeoPages } from "@/lib/seo-pages";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const baseUrl = SITE_URL.toLowerCase().replace(/\/+$/, "");

  const mainPages = ["/"];
  const generatedPages = getAllSeoPages()
    .map((p) => p.slug)
    .filter((slug) => slug !== "/");

  const allSlugs = Array.from(new Set([...mainPages, ...generatedPages]))
    .map((slug) => slug.toLowerCase())
    .map((slug) => (slug.startsWith("/") ? slug : `/${slug}`));

  return allSlugs.map((slug) => ({
    url: slug === "/" ? `${baseUrl}/` : `${baseUrl}${slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: slug === "/" ? 1 : 0.8,
  }));
}
