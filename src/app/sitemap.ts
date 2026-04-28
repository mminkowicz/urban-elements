import { MetadataRoute } from "next";

const services = [
  "recurring-maintenance",
  "fertilizer-weed-control",
  "seasonal-cleanups",
  "aeration-overseeding",
  "landscape-design",
  "landscape-installation",
  "complete-transformations",
  "sod-grading",
  "drainage-solutions",
  "planting-trees-shrubs",
  "artificial-turf",
  "outdoor-living",
  "pavers-concrete-gravel",
  "concrete",
  "fire-pits",
  "water-features",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://urbanelementsatlanta.com";

  return [
    { url: base, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${base}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    ...services.map((slug) => ({
      url: `${base}/services/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
