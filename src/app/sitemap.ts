import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";

const baseUrl = "https://portfolio.domainjin.io.vn";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: baseUrl, priority: 1 },
    ...projects.map((p) => ({ url: `${baseUrl}/projects/${p.slug}`, priority: 0.8 })),
  ];
}
