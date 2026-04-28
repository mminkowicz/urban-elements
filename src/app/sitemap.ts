import { MetadataRoute } from "next";

const base = "https://urbanelementsatlanta.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    "",
    "/about",
    "/leadership",
    "/service-area",
    "/contact",
    "/property-care/maintenance",
    "/property-care/fertilizer-weed-control",
    "/property-care/mulch-pine-straw",
    "/property-care/cleanups",
    "/property-care/aeration-overseeding",
    "/landscape/design",
    "/landscape/installation",
    "/landscape/transformations",
    "/landscape/sod-grading",
    "/landscape/drainage",
    "/landscape/planting",
    "/landscape/artificial-turf",
    "/outdoor-living",
    "/outdoor-living/pavers-concrete-gravel",
    "/outdoor-living/concrete",
    "/outdoor-living/fire-pits",
    "/outdoor-living/water-features",
    "/outdoor-living/artificial-turf",
    "/outdoor-living/irrigation",
  ];

  return pages.map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : path.split("/").length <= 2 ? 0.8 : 0.6,
  }));
}
