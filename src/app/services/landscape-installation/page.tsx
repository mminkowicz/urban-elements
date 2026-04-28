import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Landscape Installation | Urban Elements Atlanta",
  description:
    "Professional landscape installation in Atlanta. Clean execution, quality materials, and results that hold up over time.",
};

export default function LandscapeInstallationPage() {
  return (
    <>
      <Navigation />
      <ServicePageTemplate
        badge="Landscape"
        title="Landscape Installation"
        intro="Professional installation that brings the plan to life with clean execution, quality materials, and results that hold up over time."
        sections={[
          {
            heading: "What Installation May Include",
            bullets: [
              "Plant & shrub installation",
              "Tree installation",
              "Sod installation",
              "Mulch & pine straw",
              "Bed creation & renovation",
              "Grading & drainage",
              "Hardscape & feature installation",
            ],
          },
          {
            heading: "Our Installation Approach",
            bullets: [
              "Clear communication from start to finish",
              "Organized scheduling to minimize disruption",
              "Thoughtful material placement and handling",
              "Respect for your property throughout the process",
              "Clean job sites maintained daily",
              "Final walkthrough to confirm every detail",
            ],
          },
          {
            heading: "Already Have a Design?",
            content:
              "We can review and install from existing plans — including landscape plans, planting plans, grading layouts, material lists, and renovation scopes.",
          },
          {
            heading: "Why Proper Installation Matters",
            content:
              "Correct layout, spacing, grade prep, drainage planning, and planting technique all matter. Cutting corners during installation leads to problems that surface months or years later.",
          },
        ]}
        ctaHeading="Ready to Move Forward?"
        ctaText="Tell us about your project and we'll put together a clear installation plan."
        ctaButton="Request an Installation Quote"
      />
      <Footer />
    </>
  );
}
