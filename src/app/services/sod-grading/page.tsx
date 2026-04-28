import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Sod & Grading | Urban Elements Atlanta",
  description:
    "Professional sod installation and grading services in Atlanta. A new lawn can only perform as well as the groundwork beneath it.",
};

export default function SodGradingPage() {
  return (
    <>
      <Navigation />
      <ServicePageTemplate
        badge="Landscape"
        title="Sod & Grading"
        intro="A new lawn can only perform as well as the groundwork beneath it."
        sections={[
          {
            heading: "Our Services",
            bullets: [
              "Site preparation and clearing",
              "Rough & finish grading",
              "Soil improvement and amendment",
              "Sod installation",
              "Lawn renovation",
            ],
          },
          {
            heading: "Why Grading Matters",
            content:
              "Without proper grading, even new sod will struggle. Common signs of grading issues include:",
            bullets: [
              "Standing water after rain",
              "Soggy areas that never fully dry",
              "Erosion along slopes and edges",
              "Weak turf that thins out over time",
              "Scalping when mowing due to uneven surfaces",
              "Uneven appearance across the lawn",
              "Difficult and frustrating maintenance",
            ],
          },
          {
            heading: "When Sod Makes Sense",
            bullets: [
              "Lawn is beyond repair through overseeding or treatment",
              "Major construction or renovation has disturbed the yard",
              "Large bare areas that won't recover on their own",
              "Drainage improvements that require a full lawn reset",
              "Homeowner wants immediate improvement and a clean start",
            ],
          },
          {
            heading: "Our Goal",
            content:
              "We treat sod as a finished product that depends on careful preparation. The grading, soil work, and drainage planning that happen before a single roll is laid are what determine whether your lawn thrives long-term.",
          },
        ]}
        ctaHeading="Need a Lawn Reset?"
        ctaText="Let's evaluate your lawn and put together a plan for proper grading and sod installation."
        ctaButton="Request a Sod & Grading Quote"
      />
      <Footer />
    </>
  );
}
