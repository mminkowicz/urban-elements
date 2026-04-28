import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Planting Trees & Shrubs | Urban Elements Atlanta",
  description:
    "Thoughtful tree and shrub planting in Atlanta. Intentional layouts that improve your property over time — not random plant placement.",
};

export default function PlantingTreesShrubsPage() {
  return (
    <>
      <Navigation />
      <ServicePageTemplate
        badge="Landscape"
        title="Planting Trees & Shrubs"
        intro="Thoughtful planting that improves the property over time — not random plant placement."
        sections={[
          {
            heading: "Our Planting Services",
            bullets: [
              "Shrub installation",
              "Tree installation",
              "Bed layout & plant arrangement",
              "Privacy screening",
              "Accent & seasonal interest planting",
              "Bed renovation & refresh",
            ],
          },
          {
            heading: "What We Focus On",
            bullets: [
              "Spacing and mature size so plants grow without crowding",
              "Sun and shade conditions for each location",
              "Property style and architectural compatibility",
              "Color and texture balance across the landscape",
              "Privacy goals and screening needs",
              "Maintenance expectations and ease of care",
              "Seasonal interest throughout the year",
              "Long-term health and plant performance",
            ],
          },
          {
            heading: 'A Better Result Than "Fill It In"',
            content:
              "Proper spacing and intentional layouts create planting beds that mature gracefully — instead of becoming overgrown, crowded, and expensive to maintain within a few years.",
          },
          {
            heading: "Ideal For",
            bullets: [
              "Front yard curb appeal improvements",
              "Foundation bed updates and refreshes",
              "Privacy upgrades along property lines",
              "Pool and patio surroundings",
              "Backyard refresh and renovation",
              "Full property transformations",
            ],
          },
        ]}
        ctaHeading="Ready to Refresh Your Planting Beds?"
        ctaText="Let's discuss what your beds need and put together a planting plan that works."
        ctaButton="Request a Planting Consultation"
      />
      <Footer />
    </>
  );
}
