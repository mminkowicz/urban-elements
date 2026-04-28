import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Landscape Design | Urban Elements Atlanta",
  description:
    "Thoughtful landscape design and site planning for Atlanta homeowners. We organize your outdoor space around how you actually live, entertain, and use the property.",
};

export default function LandscapeDesignPage() {
  return (
    <>
      <Navigation />
      <ServicePageTemplate
        badge="Landscape"
        title="Landscape Design"
        intro="Thoughtful planning that helps organize your outdoor space around how you actually live, entertain, and use the property."
        sections={[
          {
            heading: "Design Process",
            content:
              "Every project begins with a consultation to understand your vision, evaluate current conditions, and develop a plan that addresses drainage, flow, curb appeal, planting, and budget.",
          },
          {
            heading: "Site Planning & Layout",
            bullets: [
              "Planting design",
              "Patio layout",
              "Grading & drainage",
              "Retaining walls",
              "Sod strategy",
              "Privacy screening",
              "Fire pit planning",
              "Water features",
              "Artificial turf",
            ],
          },
          {
            heading: "Design for Long-Term Success",
            bullets: [
              "Proper spacing for healthy growth",
              "Functional flow between outdoor areas",
              "Drainage performance across the property",
              "Practical maintenance requirements",
              "Plant maturity and long-term form",
              "Architectural balance with the home",
              "Material durability and longevity",
              "Realistic phasing for larger projects",
            ],
          },
          {
            heading: "Why Design First Matters",
            content:
              "Skipping the design phase often leads to problems that are expensive to fix later.",
            bullets: [
              "Poor layout that doesn't match how you use the space",
              "Drainage problems that worsen over time",
              "Overcrowded planting that requires constant pruning",
              "Disconnected hardscape that feels out of place",
              "Wasted budget on features that don't work together",
              "Expensive rework to correct avoidable mistakes",
            ],
          },
        ]}
        ctaHeading="Ready to Start Planning?"
        ctaText="Let's talk through your property and develop a design that works for how you live."
        ctaButton="Schedule a Design Consultation"
      />
      <Footer />
    </>
  );
}
