import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://appliance-fix-nine.vercel.app";
  const lastModified = new Date();
  const staticSlugs: string[] = [
    "/",
    "/ac-service-malappuram",
    "/ac-service-kozhikode",
    "/fridge-repair-malappuram",
    "/washing-machine-service-kozhikode",
  ];

  const uniqueSlugs = Array.from(new Set(staticSlugs))
    .map((slug) => slug.trim().toLowerCase())
    .map((slug) => (slug.startsWith("/") ? slug : `/${slug}`))
    .filter((slug) => slug.length > 0);

  return uniqueSlugs.map((slug) => ({
    url: slug === "/" ? `${baseUrl}/` : `${baseUrl}${slug}`,
    lastModified,
  }));
}
