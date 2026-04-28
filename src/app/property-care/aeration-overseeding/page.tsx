import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ServicePageLayout from "@/components/ServicePageLayout";

export default function AerationOverseedingPage() {
  return (
    <>
      <Navigation />
      <ServicePageLayout
        label="Property Care"
        title="Aeration & Overseeding"
        intro="Aeration and overseeding are some of the most valuable services for improving lawn density, root development, and long-term turf health."
        sections={[
          {
            heading: "Core Aeration",
            body: "Core aeration removes small plugs of soil throughout the lawn to improve soil health and root development.",
            list: [
              "oxygen flow",
              "water absorption",
              "nutrient penetration",
              "root development",
              "microbial soil activity",
              "turf recovery",
            ],
          },
          {
            heading: "Overseeding",
            body: "Overseeding helps strengthen weak turf areas, improve density, and establish healthier long-term lawn coverage.",
            list: [
              "thinning lawns",
              "high traffic areas",
              "drought stress recovery",
              "weak seasonal transitions",
              "improving winter lawn appearance",
            ],
          },
          {
            heading: "Best Timing for Service",
            body: "Warm-season turf like Bermuda and Zoysia often benefits most from spring aeration. Cool-season overseeding is often most effective during fall seasonal transitions. We help determine the proper timing based on your turf type and property conditions.",
          },
          {
            heading: "Long-Term Lawn Performance",
            body: "Aeration and overseeding work best when paired with fertilizer programs, proper mowing practices, irrigation management, recurring maintenance, and proactive seasonal care.",
          },
        ]}
        cta={{ label: "Schedule Your Lawn Evaluation", href: "/contact" }}
      />
      <Footer />
    </>
  );
}
