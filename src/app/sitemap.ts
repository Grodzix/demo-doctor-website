import type { MetadataRoute } from "next";
import { services } from "@/data/services";
import { doctors } from "@/data/doctors";

const BASE_URL = "https://medcare.pl";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
  ];

  const servicePages: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${BASE_URL}/uslugi/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const doctorPages: MetadataRoute.Sitemap = doctors.map((d) => ({
    url: `${BASE_URL}/lekarze/${d.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...servicePages, ...doctorPages];
}
