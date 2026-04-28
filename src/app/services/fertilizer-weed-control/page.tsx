import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Fertilizer & Weed Control | Urban Elements Atlanta",
  description:
    "Targeted lawn treatment programs designed to strengthen your Atlanta lawn season after season — not just create short-term green color.",
};

export default function FertilizerWeedControlPage() {
  return (
    <>
      <Navigation />
      <ServicePageTemplate
        badge="Property Care"
        title="Fertilizer & Weed Control"
        intro="Targeted lawn treatment programs designed to strengthen your lawn season after season — not just create short-term green color."
        sections={[
          {
            heading: "Stronger Lawns Start Below the Surface",
            content:
              "A healthy lawn requires more than regular mowing. Proper fertilization, weed prevention, and turf management are essential to building a lawn that looks great and performs well through every season.",
          },
          {
            heading: "Our Lawn Treatment Programs",
            content:
              "Our programs are built for both warm-season and cool-season turf types common across the Atlanta area.",
            bullets: [
              "Pre-emergent weed prevention",
              "Post-emergent weed control",
              "Seasonal fertilization",
              "Soil health support",
              "Spot treatment monitoring",
            ],
          },
          {
            heading: "Why Professional Lawn Treatment Matters",
            content:
              "Improper timing, incorrect products, and inconsistent applications create more problems than they solve. Without a proper program, you risk:",
            bullets: [
              "Heavy weed pressure",
              "Weak turf density",
              "Disease vulnerability",
              "Poor root development",
              "Patchy lawn appearance",
              "Expensive lawn restoration later",
            ],
          },
          {
            heading: "Fertilizer + Maintenance = Better Results",
            content:
              "Our fertilizer and weed control programs work best when paired with recurring maintenance. Proper mowing height, seasonal care adjustments, irrigation awareness, and consistent turf treatment together create stronger, healthier long-term results.",
          },
        ]}
        ctaHeading="Request a Lawn Evaluation"
        ctaText="We'll help determine what your lawn needs, when it needs it, and how to build a healthier, stronger lawn long-term."
        ctaButton="Schedule a Consultation"
      />
      <Footer />
    </>
  );
}
