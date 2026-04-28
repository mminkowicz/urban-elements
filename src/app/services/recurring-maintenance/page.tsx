import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Recurring Landscape Maintenance | Urban Elements Atlanta",
  description:
    "Professional landscape maintenance programs designed to keep your Atlanta property clean, healthy, and consistently well-maintained throughout the year.",
};

export default function RecurringMaintenancePage() {
  return (
    <>
      <Navigation />
      <ServicePageTemplate
        badge="Property Care"
        title="Recurring Landscape Maintenance"
        intro="Professional maintenance programs designed to keep your property clean, healthy, and consistently well-maintained throughout the year."
        sections={[
          {
            heading: "Professional Landscape Maintenance",
            content:
              "Great landscapes aren't built on occasional cleanups — they're built on consistent care. Our recurring maintenance programs provide proactive attention and reliable service so your property always looks its best, season after season.",
          },
          {
            heading: "Flat Monthly Maintenance Plans",
            content:
              "Our maintenance plans start at $185/month with a flat pricing structure — no surprise charges, no seasonal spikes. You get the same professional care every visit, every month.",
            bullets: [
              "Predictable monthly pricing",
              "Consistent professional service",
              "Proactive seasonal planning",
              "Fewer large corrective cleanups",
              "Long-term protection for your landscape investment",
            ],
          },
          {
            heading: "Included Maintenance Services",
            content:
              "Every maintenance plan includes the core services your property needs to stay clean, healthy, and well-presented throughout the year.",
            bullets: [
              "Biweekly property visits",
              "Lawn mowing & precision edging",
              "Blowing & surface cleanup",
              "Standard shrub trimming & ornamental pruning",
              "Leaf management",
              "Spot weed control",
              "Seasonal plant care",
            ],
          },
          {
            heading: "Available Add-On Services",
            bullets: [
              "Fertilizer & weed control programs",
              "Pine straw & mulch installation",
              "Aeration & overseeding",
              "Advanced pruning",
              "Offsite debris removal",
              "Seasonal cleanups",
              "Drainage improvements",
              "Irrigation monitoring",
              "Landscape enhancements",
            ],
          },
          {
            heading: "Why Homeowners Choose Our Program",
            bullets: [
              "Consistent curb appeal",
              "Healthier turf and plant material",
              "Fewer expensive corrective projects",
              "Reliable service without constant follow-up",
              "Long-term landscape value",
              "Peace of mind year-round",
            ],
          },
        ]}
        ctaHeading="Ready for Reliable Landscape Maintenance?"
        ctaText="If you're looking for a landscaping company that values professionalism, communication, and long-term quality, we'd be glad to create a maintenance plan that fits your property."
        ctaButton="Schedule a Consultation"
      />
      <Footer />
    </>
  );
}
