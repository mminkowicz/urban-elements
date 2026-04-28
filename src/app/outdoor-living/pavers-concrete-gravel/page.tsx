import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ServicePageLayout from "@/components/ServicePageLayout";

export default function PaversConcreteGravelPage() {
  return (
    <>
      <Navigation />
      <ServicePageLayout
        label="Outdoor Living"
        title="Paver, Concrete & Gravel"
        intro="Hardscape surfaces create structure. Whether it's a patio for entertaining, a walkway that improves flow, a gravel feature for cleaner access, or concrete work that improves daily function, these elements help define how a property looks and how it is used."
        sections={[
          {
            heading: "Services May Include",
            body: [
              "Paver Patios & Walkways provide durable, attractive surfaces that define outdoor areas and improve access throughout a property.",
              "Concrete Patios & Pads offer solid, low-maintenance surfaces for seating areas, equipment, and daily use.",
              "Gravel Installations create clean, functional surfaces for pathways, gathering areas, and landscape features.",
              "Stepping Paths add structured access through landscape beds, side yards, and garden areas.",
              "Decorative Borders provide clean transitions between hardscape and landscape materials.",
            ],
          },
          {
            heading: "Preparation Matters",
            body: "The quality of any hardscape installation depends on the work that happens before the surface material is placed. Proper preparation prevents shifting, settling, drainage issues, and premature wear.",
            list: [
              "base preparation",
              "grading and drainage",
              "compaction and leveling",
              "clean edge transitions",
              "proper slope management",
              "functional layout planning",
            ],
          },
          {
            heading: "Better Outdoor Flow",
            body: "Hardscape surfaces are not just about adding a patio or a path. They shape how people move through and interact with a property. Thoughtful placement improves daily function, connects spaces, and creates a sense of order that natural ground surfaces alone cannot provide.",
          },
        ]}
        cta={{ label: "Ready to Improve Your Outdoor Space?", href: "/contact" }}
      />
      <Footer />
    </>
  );
}
