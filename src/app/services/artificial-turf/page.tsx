import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Artificial Turf | Urban Elements Atlanta",
  description:
    "Clean, low-maintenance artificial turf installation in Atlanta. Consistent appearance without the demands of natural grass.",
};

export default function ArtificialTurfPage() {
  return (
    <>
      <Navigation />
      <ServicePageTemplate
        badge="Landscape"
        title="Artificial Turf"
        intro="Clean, low-maintenance green space for homeowners who want consistent appearance without the demands of natural grass."
        sections={[
          {
            heading: "Where Turf Works Best",
            bullets: [
              "Pet areas and dog runs",
              "Shaded zones where natural grass struggles",
              "Side yards with limited access",
              "Play spaces for children",
              "Courtyards and enclosed areas",
              "Rooftop areas and terraces",
              "High-traffic sections of the yard",
              "Spaces where mowing is impractical",
            ],
          },
          {
            heading: "Our Installation Approach",
            bullets: [
              "Site preparation and clearing",
              "Base work & grading for proper drainage",
              "Turf layout & installation",
              "Edge detailing for a clean finish",
              "Final grooming and inspection",
            ],
          },
          {
            heading: "Benefits",
            bullets: [
              "Year-round green appearance",
              "Reduced mowing and maintenance",
              "Cleaner pet and play areas",
              "Improved performance in difficult growing zones",
              "Lower mud and wear in high-traffic spots",
              "Polished, finished look",
            ],
          },
          {
            heading: "Best Used Intentionally",
            content:
              "Artificial turf is a targeted solution — not a blanket replacement for your entire lawn. It works best where it makes both practical and visual sense, solving specific problems like shade, traffic, or maintenance access.",
          },
        ]}
        ctaHeading="Considering Artificial Turf?"
        ctaText="Let's discuss where turf makes sense on your property and what the installation would look like."
        ctaButton="Schedule a Turf Consultation"
      />
      <Footer />
    </>
  );
}
