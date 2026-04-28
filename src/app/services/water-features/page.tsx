import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Water Features | Urban Elements Atlanta",
  description:
    "Decorative fountains, pond features, and focal point water elements designed to elevate your landscape. Built by Urban Elements in Atlanta.",
};

export default function WaterFeaturesPage() {
  return (
    <>
      <Navigation />
      <ServicePageTemplate
        badge="Outdoor Living"
        title="Water Features"
        intro="Movement, sound, and elevated landscape design — water features bring a different kind of experience to a landscape."
        sections={[
          {
            heading: "Options May Include",
            bullets: [
              "Decorative fountains",
              "Pond features",
              "Focal point water elements",
              "Courtyard features",
              "Patio-adjacent water design",
              "Entry statement features",
              "Landscape integration",
              "Supporting planting and hardscape coordination",
            ],
          },
          {
            heading: "Designed to Fit the Space",
            content:
              "Every water feature needs to work with the space around it. We consider scale and proportion, visibility from the home, sound placement, maintenance expectations, drainage interaction, hardscape integration, and planting balance before recommending an approach.",
          },
          {
            heading: "More Than Decoration",
            content:
              "Water features add atmosphere — calm, privacy, visual movement, and stronger focal points that improve the overall outdoor experience. When designed well, they transform a landscape from something you look at into something you feel.",
          },
        ]}
        ctaHeading="Interested in Adding a Water Feature?"
        ctaText="From simple fountains to integrated landscape features, we'll help you find the right fit for your property and design goals."
        ctaButton="Request a Consultation"
      />
      <Footer />
    </>
  );
}
