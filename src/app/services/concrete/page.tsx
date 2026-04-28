import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Concrete Services | Urban Elements Atlanta",
  description:
    "Clean, durable concrete work built for long-term use. Patios, walkways, equipment pads, and functional outdoor surfaces by Urban Elements in Atlanta.",
};

export default function ConcretePage() {
  return (
    <>
      <Navigation />
      <ServicePageTemplate
        badge="Outdoor Living"
        title="Concrete Services"
        intro="Clean, durable concrete work built for long-term use — from patios and walkways to functional outdoor surfaces."
        sections={[
          {
            heading: "Services May Include",
            bullets: [
              "Patios",
              "Walkways",
              "Equipment pads",
              "Driveway extensions",
              "Side-yard access paths",
              "Slab preparation",
              "Backyard seating areas",
              "Utility access improvements",
              "Functional surface upgrades",
            ],
          },
          {
            heading: "Built for Performance",
            bullets: [
              "Grade preparation",
              "Water flow and drainage",
              "Structural base support",
              "Finish quality",
              "Clean transitions",
              "Practical long-term use",
            ],
          },
          {
            heading: "Functional Improvements That Last",
            content:
              "Concrete projects solve everyday usability problems while improving curb appeal and property value. Whether it's a new patio, a wider walkway, or a pad for equipment, the goal is the same — build it right so it holds up and works the way it should.",
          },
        ]}
        ctaHeading="Need Concrete Work Done Right?"
        ctaText="From small pads to full patio installations, we handle concrete projects with the preparation and care they require. Let's talk about what you need."
        ctaButton="Request a Quote"
      />
      <Footer />
    </>
  );
}
