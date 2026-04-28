import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Aeration & Overseeding | Urban Elements Atlanta",
  description:
    "Improve lawn density, root development, and long-term turf health with professional aeration and overseeding services in Atlanta.",
};

export default function AerationOverseedingPage() {
  return (
    <>
      <Navigation />
      <ServicePageTemplate
        badge="Property Care"
        title="Aeration & Overseeding"
        intro="Some of the most valuable services for improving lawn density, root development, and long-term turf health."
        sections={[
          {
            heading: "Stronger Turf Starts at the Root Level",
            content:
              "Over time, soil becomes compacted, root growth weakens, and turf struggles to absorb water, oxygen, and nutrients. Aeration and overseeding address these issues directly, restoring the foundation your lawn needs to thrive.",
          },
          {
            heading: "Core Aeration",
            content:
              "Core aeration removes small plugs of soil from your lawn, opening channels that improve:",
            bullets: [
              "Oxygen flow",
              "Water absorption",
              "Nutrient penetration",
              "Root development",
              "Microbial soil activity",
              "Turf recovery",
            ],
          },
          {
            heading: "Overseeding",
            content:
              "Overseeding introduces new seed into existing turf to strengthen weak areas and improve overall lawn density. It's especially effective for:",
            bullets: [
              "Thinning lawns",
              "High traffic areas",
              "Drought stress recovery",
              "Weak seasonal transitions",
              "Improving winter lawn appearance",
            ],
          },
          {
            heading: "Best Timing for Service",
            content:
              "Warm-season turf types benefit most from spring aeration when active growth begins. Cool-season overseeding is most effective during fall when soil temperatures support strong germination and establishment.",
          },
          {
            heading: "Long-Term Lawn Performance",
            content:
              "Aeration and overseeding deliver the best results when paired with a complete lawn care approach:",
            bullets: [
              "Fertilizer programs",
              "Proper mowing practices",
              "Irrigation management",
              "Recurring maintenance",
              "Proactive seasonal care",
            ],
          },
        ]}
        ctaHeading="Schedule Your Lawn Evaluation"
        ctaText="We'll help determine whether your lawn would benefit from aeration, overseeding, or a full improvement plan."
        ctaButton="Request Service Pricing"
      />
      <Footer />
    </>
  );
}
