import { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/ac-service-malappuram",
    "/ac-service-kozhikode",
    "/fridge-repair-malappuram",
    "/fridge-repair-kozhikode",
    "/washing-machine-service-kozhikode",
    "/washing-machine-service-malappuram",
  ].map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  return routes;
}
