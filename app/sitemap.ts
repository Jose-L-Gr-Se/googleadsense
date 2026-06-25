import type { MetadataRoute } from "next";
import { calculators, siteConfig } from "@/lib/config";
import { articles } from "@/lib/articles";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticPages = ["", "/privacidad", "/cookies", "/aviso-legal", "/sobre-nosotros"];

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

  entries.push({
    url: `${siteConfig.url}/blog`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.7,
  });

  for (const a of articles.filter((a) => a.published !== false)) {
    entries.push({
      url: `${siteConfig.url}/blog/${a.slug}`,
      lastModified: new Date(a.date),
      changeFrequency: "monthly",
      priority: 0.7,
    });
  }

  return entries;
}
