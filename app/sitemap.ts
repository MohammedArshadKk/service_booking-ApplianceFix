import { MetadataRoute } from "next";
import { getAllSeoPages } from "@/lib/seo-pages";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const baseUrl = "https://appliance-fix-nine.vercel.app".toLowerCase().replace(/\/+$/, "");

  // Always include a static baseline so sitemap remains valid
  // even if dynamic generation fails.
  const staticSlugs = [
    "/",
    "/ac-service-malappuram",
    "/ac-service-kozhikode",
    "/fridge-repair-malappuram",
    "/washing-machine-service-kozhikode",
  ];

  let dynamicSlugs: string[] = [];
  try {
    dynamicSlugs = getAllSeoPages()
      .map((page) => page?.slug)
      .filter((slug): slug is string => typeof slug === "string" && slug.trim().length > 0);
  } catch (error) {
    console.error("sitemap dynamic page generation failed:", error);
    dynamicSlugs = [];
  }

  const uniqueSlugs = Array.from(new Set([...staticSlugs, ...dynamicSlugs]))
    .map((slug) => slug.trim().toLowerCase())
    .map((slug) => (slug.startsWith("/") ? slug : `/${slug}`));

  const entries: MetadataRoute.Sitemap = uniqueSlugs.map((slug) => ({
    url: slug === "/" ? `${baseUrl}/` : `${baseUrl}${slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: slug === "/" ? 1 : 0.8,
  }));

  // Final guard to guarantee an array is always returned.
  return Array.isArray(entries) && entries.length > 0
    ? entries
    : [
      {
        url: `${baseUrl}/`,
        lastModified: now,
        changeFrequency: "weekly",
        priority: 1,
      },
    ];
}
