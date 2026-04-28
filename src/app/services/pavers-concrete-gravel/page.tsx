import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Pavers, Concrete & Gravel | Urban Elements Atlanta",
  description:
    "Durable outdoor surfaces that improve function and curb appeal. Paver patios, concrete pads, gravel installations, and more by Urban Elements in Atlanta.",
};

export default function PaversConcreteGravelPage() {
  return (
    <>
      <Navigation />
      <ServicePageTemplate
        badge="Outdoor Living"
        title="Pavers, Concrete & Gravel"
        intro="Durable outdoor surfaces that improve function and curb appeal — not quick cosmetic work."
        sections={[
          {
            heading: "Services May Include",
            bullets: [
              "Paver patios and walkways",
              "Concrete patios and pads",
              "Gravel installations",
              "Stepping paths and garden access",
              "Decorative borders and edging",
            ],
          },
          {
            heading: "Preparation Matters",
            bullets: [
              "Base preparation",
              "Grading and drainage",
              "Compaction and leveling",
              "Clean edge transitions",
              "Proper slope management",
              "Functional layout planning",
            ],
          },
          {
            heading: "Better Outdoor Flow",
            content:
              "Hardscape improves how your property works — better walkways, defined gathering areas, smoother transitions between zones, and more usable space overall. It's not just about the surface. It's about how everything connects.",
          },
        ]}
        ctaHeading="Ready to Improve Your Outdoor Space?"
        ctaText="Whether you need a new patio, better walkways, or a full hardscape plan, we'll help you build surfaces that last and actually improve your property."
        ctaButton="Request a Consultation"
      />
      <Footer />
    </>
  );
}
