import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ServicePageLayout from "@/components/ServicePageLayout";

export default function ArtificialTurfPage() {
  return (
    <>
      <Navigation />
      <ServicePageLayout
        label="Outdoor Living"
        title="Artificial Turf"
        intro="Artificial turf can be a smart solution for homeowners who want a consistently clean appearance without the maintenance demands of natural grass in certain areas of the property."
        sections={[
          {
            heading: "Best Uses for Artificial Turf",
            body: "Artificial turf works best in targeted areas where natural grass struggles or where low-maintenance ground cover makes the most sense.",
            list: [
              "pet areas",
              "play spaces",
              "side yards",
              "shaded lawn problem areas",
              "courtyards",
              "small gathering spaces",
              "pool surroundings",
              "high-traffic sections",
            ],
          },
          {
            heading: "Installation Approach",
            body: "A quality turf installation depends on proper site work. Without the right base preparation, turf can shift, drain poorly, or develop an uneven surface over time.",
            list: [
              "site preparation",
              "grading and drainage",
              "stable base work",
              "clean seam planning",
              "edge detailing",
              "surrounding landscape integration",
            ],
          },
          {
            heading: "When Turf Makes Sense",
            body: "Artificial turf is not the right solution for every lawn, but in the right application it can eliminate recurring maintenance problems and provide a consistently clean, usable surface. We help homeowners evaluate where turf makes sense and ensure the installation is done properly from the ground up.",
          },
        ]}
        cta={{ label: "Considering Artificial Turf?", href: "/contact" }}
      />
      <Footer />
    </>
  );
}
