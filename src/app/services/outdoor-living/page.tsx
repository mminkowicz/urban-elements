import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Outdoor Living Spaces | Urban Elements Atlanta",
  description:
    "Functional outdoor living spaces designed for everyday use. Patios, fire pits, water features, artificial turf, and more — built by Urban Elements in Atlanta.",
};

export default function OutdoorLivingPage() {
  return (
    <>
      <Navigation />
      <ServicePageTemplate
        badge="Outdoor Living"
        title="Functional Outdoor Spaces Designed for Everyday Living"
        intro="Outdoor living spaces should do more than look good—they should improve the way you use your property."
        sections={[
          {
            heading: "Our Services",
            bullets: [
              "Design services",
              "Paver, concrete, and gravel installations",
              "Concrete services",
              "Fire pit installation",
              "Water features",
              "Artificial turf",
            ],
          },
          {
            heading: "Why Outdoor Living Matters",
            bullets: [
              "Increases property value",
              "Improves daily usability",
              "Creates dedicated entertainment space",
              "Makes your backyard more enjoyable year-round",
              "Strengthens curb appeal",
              "Supports long-term functionality",
            ],
          },
          {
            heading: "Built Around How You Use Your Home",
            content:
              "Some clients want a quiet retreat. Others want a space built for entertaining. We start by understanding how you actually use your outdoor areas — then design around that function. The result is a space that works the way you need it to, not just one that looks good on paper.",
          },
        ]}
        ctaHeading="Ready to Improve Your Outdoor Space?"
        ctaText="Let's talk about how your outdoor areas can work harder for you. Whether it's a full redesign or a single improvement, we'll help you figure out the right approach."
        ctaButton="Schedule a Consultation"
      />
      <Footer />
    </>
  );
}
