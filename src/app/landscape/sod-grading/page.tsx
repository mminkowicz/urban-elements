import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ServicePageLayout from "@/components/ServicePageLayout";

export default function SodGradingPage() {
  return (
    <>
      <Navigation />
      <ServicePageLayout
        label="Landscape"
        title="Sod & Grading"
        intro="A new lawn can only perform as well as the groundwork beneath it. Our sod and grading services are designed to create healthy, clean, functional lawn areas through proper site preparation, grade correction, and professional installation."
        sections={[
          {
            heading: "Our Sod & Grading Services",
            body: [
              "Site Preparation — Removal of existing turf, debris, rocks, and old material to create a clean working surface for grading and installation.",
              "Rough & Finish Grading — Reshaping the terrain to establish proper slope, eliminate low spots, and direct water away from structures and toward appropriate drainage points.",
              "Soil Improvement — Amending and conditioning the soil profile to support strong root development and long-term turf health.",
              "Sod Installation — Professional-grade sod laid on properly prepared soil with tight seams, full coverage, and clean edges for an immediately finished appearance.",
              "Lawn Renovation — Reworking existing lawn areas that have failed due to poor soil, improper grading, drainage issues, or general neglect.",
            ],
          },
          {
            heading: "Why Grading Matters",
            body: "Improper grade is one of the most overlooked issues in residential landscaping. Without correct grading, even the highest quality sod will struggle to establish and perform. Problems caused by poor grading include:",
            list: [
              "Standing water and soggy lawn areas",
              "Water draining toward the foundation",
              "Uneven surfaces that are difficult to mow and maintain",
              "Erosion along slopes and edges",
              "Turf failure due to waterlogged root zones",
              "Increased pest and disease pressure in saturated areas",
            ],
          },
          {
            heading: "When Sod Installation Makes Sense",
            body: "Sod is the fastest and most reliable way to establish a new lawn. It provides immediate coverage, reduces erosion risk, and creates a clean finished look from day one.",
            list: [
              "New construction or post-construction lawn establishment",
              "Full lawn replacement after grading or drainage work",
              "Renovation of thin, patchy, or weed-filled lawns",
              "Repairing areas damaged by construction, equipment, or erosion",
              "Creating new lawn areas in previously unlandscaped spaces",
              "Preparing a property for sale with strong curb appeal",
            ],
          },
        ]}
        cta={{ label: "Need a Lawn Reset?", href: "/contact" }}
      />
      <Footer />
    </>
  );
}
