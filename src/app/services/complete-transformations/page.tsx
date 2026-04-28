import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Complete Property Transformations | Urban Elements Atlanta",
  description:
    "Full outdoor renovations designed for lasting impact. Dramatically improve the look, function, and usability of your Atlanta property.",
};

export default function CompleteTransformationsPage() {
  return (
    <>
      <Navigation />
      <ServicePageTemplate
        badge="Landscape"
        title="Complete Property Transformations"
        intro="Full outdoor renovations designed for lasting impact — for homeowners who want to dramatically improve the look, function, and usability of their outdoor space."
        sections={[
          {
            heading: "What a Full Transformation May Include",
            bullets: [
              "Removal of overgrown or outdated landscaping",
              "Regrading & site preparation",
              "New planting design and installation",
              "Sod & lawn renovation",
              "Drainage solutions",
              "Hardscape & outdoor features",
              "Finishing details that complete the look",
            ],
          },
          {
            heading: "Who These Projects Are For",
            bullets: [
              "Homeowners looking for a major curb appeal improvement",
              "Properties that need a cleaner, more organized landscape",
              "Yards that need better usability and function",
              "Homes with drainage or grade issues that need real solutions",
              "Properties ready for a fresh start from overgrowth or neglect",
              "Homeowners who want a more refined, intentional look",
            ],
          },
          {
            heading: "Our Process",
            content:
              "We start by understanding your current property and what you want it to become. From there, we develop a clear plan and manage the installation carefully — coordinating every phase so the result feels cohesive and complete.",
          },
          {
            heading: "A Better Property — Not Just a Better Planting Bed",
            content:
              "The best transformations don't just improve individual areas — they improve the overall flow, function, and maintenance of the entire property.",
          },
        ]}
        ctaHeading="Ready to Reimagine Your Property?"
        ctaText="Let's talk about what your property could look like with a complete transformation."
        ctaButton="Schedule a Consultation"
      />
      <Footer />
    </>
  );
}
