import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ServicePageLayout from "@/components/ServicePageLayout";

export default function DesignPage() {
  return (
    <>
      <Navigation />
      <ServicePageLayout
        label="Landscape"
        title="Design Services"
        intro="Strong outdoor projects begin with strong design. Our design services help homeowners create outdoor spaces that feel intentional, functional, and built for long-term enjoyment."
        sections={[
          {
            heading: "Consultation & Vision Development",
            body: "Every design project starts with a conversation. We meet with you on-site to understand how you use your outdoor space, what you want to change, and what matters most to your household. From there, we develop a clear direction that reflects your goals and fits your property.",
            list: [
              "How the property is currently used",
              "Areas that are underperforming or underutilized",
              "Aesthetic preferences and style goals",
              "Budget range and project priorities",
              "Long-term plans for the property",
            ],
          },
          {
            heading: "Site Planning & Layout",
            body: "Good design starts with understanding the land. We evaluate your property's conditions and develop a layout that works with the existing terrain, structures, and environmental factors rather than against them.",
            list: [
              "Property dimensions and topography",
              "Drainage patterns and water flow",
              "Sun and shade exposure throughout the day",
              "Soil conditions and existing plant material",
              "Proximity to structures, utilities, and property lines",
            ],
          },
          {
            heading: "Design for Long-Term Success",
            body: "We design landscapes that are meant to perform well not just in year one but five and ten years down the road. Every design decision is made with durability, growth, and maintenance in mind.",
            list: [
              "Mature plant sizing and spacing",
              "Seasonal interest and year-round structure",
              "Low-maintenance material selections",
              "Water management and irrigation planning",
              "Realistic maintenance expectations",
            ],
          },
          {
            heading: "Why Design First Matters",
            body: "Skipping the design process is one of the most common and costly mistakes homeowners make. Without a plan, projects tend to grow in scope, exceed budgets, and produce results that don't hold up over time.",
            list: [
              "Plants installed in the wrong locations",
              "Drainage issues that worsen after construction",
              "Inconsistent layout and visual clutter",
              "Wasted budget on materials that don't last",
              "Projects that need to be redone within a few years",
            ],
          },
        ]}
        cta={{ label: "Ready to Start Planning?", href: "/contact" }}
      />
      <Footer />
    </>
  );
}
