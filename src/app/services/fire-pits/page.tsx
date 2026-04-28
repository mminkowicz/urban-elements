import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Fire Pit Installation | Urban Elements Atlanta",
  description:
    "Custom fire pit installations that create a destination for year-round gathering and enjoyment. Designed and built by Urban Elements in Atlanta.",
};

export default function FirePitsPage() {
  return (
    <>
      <Navigation />
      <ServicePageTemplate
        badge="Outdoor Living"
        title="Fire Pit Installation"
        intro="A fire pit adds more than a feature — it creates a destination for year-round gathering and enjoyment."
        sections={[
          {
            heading: "Projects May Include",
            bullets: [
              "Standalone fire pit installations",
              "Patio and seating area integration",
              "Gravel or paver gathering spaces",
              "Retaining wall seating concepts",
              "Backyard focal point design",
              "Landscape integration",
              "Lighting coordination",
              "Surrounding planting enhancements",
            ],
          },
          {
            heading: "Designed for Use, Not Just Looks",
            content:
              "Placement matters. A fire pit should work with your existing layout, patio flow, and privacy — not fight against it. We consider how you actually use the space before deciding where and how to build.",
          },
          {
            heading: "A Strong Backyard Focal Point",
            content:
              "A properly designed fire pit creates purpose, visual balance, and a natural gathering zone. It anchors the space and gives your backyard a clear center of activity.",
          },
        ]}
        ctaHeading="Thinking About a Fire Feature?"
        ctaText="Whether you're starting from scratch or adding to an existing patio, we'll design a fire pit setup that fits your space and how you use it."
        ctaButton="Schedule a Consultation"
      />
      <Footer />
    </>
  );
}
