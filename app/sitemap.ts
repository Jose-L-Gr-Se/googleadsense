import type { MetadataRoute } from "next";
import { calculators, siteConfig } from "@/lib/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticPages = ["", "/privacidad", "/aviso-legal", "/sobre-nosotros"];

  const entries: MetadataRoute.Sitemap = staticPages.map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.5,
  }));

  for (const c of calculators) {
    entries.push({
      url: `${siteConfig.url}/calculadora-${c.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    });
  }

  return entries;
}
