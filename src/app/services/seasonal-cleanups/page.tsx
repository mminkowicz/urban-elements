import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Seasonal Cleanups | Urban Elements Atlanta",
  description:
    "Restore order, improve curb appeal, and prepare your Atlanta landscape for healthy growth throughout the year with professional seasonal cleanup services.",
};

export default function SeasonalCleanupsPage() {
  return (
    <>
      <Navigation />
      <ServicePageTemplate
        badge="Property Care"
        title="Seasonal Cleanups"
        intro="Restore order, improve curb appeal, and prepare your landscape for healthy growth throughout the year."
        sections={[
          {
            heading: "Reset Your Landscape for the Season Ahead",
            content:
              "Accumulated leaves, overgrowth, and dead plant material can make even a well-maintained property look unfinished. Seasonal cleanups restore order and set the stage for healthy growth in the months ahead.",
          },
          {
            heading: "Spring Cleanups",
            content:
              "Prepare your property for the active growing season with a thorough spring reset.",
            bullets: [
              "Leaf removal",
              "Bed cleanup",
              "Plant cutbacks",
              "Ornamental grass trimming",
              "Debris removal",
              "Fresh bed preparation",
              "Mulch and pine straw prep",
            ],
          },
          {
            heading: "Fall Cleanups",
            content:
              "Manage heavy leaf drop and prepare your landscape for winter dormancy.",
            bullets: [
              "Major leaf removal",
              "Shrub cleanup",
              "Final bed maintenance",
              "Turf preparation",
              "Drainage path clearing",
              "Seasonal cutbacks",
            ],
          },
          {
            heading: "Property Refresh Services",
            content:
              "For properties that need a larger corrective cleanup beyond standard seasonal work.",
            bullets: [
              "Overgrowth clearing",
              "Heavy debris removal",
              "Bed restoration",
              "Storm cleanup",
              "Landscape reset work",
            ],
          },
          {
            heading: "Why Seasonal Cleanups Matter",
            bullets: [
              "Turf suffocation from leaves",
              "Plant disease risk",
              "Drainage blockage",
              "Overgrown beds",
              "Weed pressure",
              "Poor curb appeal",
              "Expensive corrective work later",
            ],
          },
        ]}
        ctaHeading="Schedule a Seasonal Cleanup"
        ctaText="Whether your property needs a spring refresh, fall preparation, or a full landscape reset, we can help."
        ctaButton="Request Cleanup Pricing"
      />
      <Footer />
    </>
  );
}
