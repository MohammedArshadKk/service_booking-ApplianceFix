import { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";
import { getAllSeoPages } from "@/lib/seo-pages";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages = getAllSeoPages()
    .map((p) => p.slug)
    .filter((slug) => slug !== "/");

  const urls: string[] = [SITE_URL, ...pages.map((slug) => `${SITE_URL}${slug}`)];

  return urls.map((url) => ({
    url,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: url === SITE_URL ? 1 : 0.8,
  }));
}
