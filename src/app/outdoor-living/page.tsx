import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ServicePageLayout from "@/components/ServicePageLayout";

export default function OutdoorLivingPage() {
  return (
    <>
      <Navigation />
      <ServicePageLayout
        label="Outdoor Living"
        title="Functional Outdoor Spaces Designed for Everyday Living"
        intro="Outdoor living spaces should do more than look good—they should improve the way you use your property. Our outdoor living services are designed to create spaces that feel intentional, functional, and built to last."
        sections={[
          {
            heading: "Outdoor Living Services",
            body: [
              "Our outdoor living work covers a range of services designed to improve the function and feel of your property's exterior spaces.",
              "Design Services help shape the layout, flow, and overall vision for outdoor areas based on how the space will actually be used.",
              "Paver, Concrete & Gravel Installations create clean, durable surfaces for patios, walkways, gathering areas, and access paths.",
              "Concrete Services include patios, pads, extensions, and functional outdoor surfaces built for daily use and long-term performance.",
              "Fire Pit Installation creates a natural gathering point and adds year-round value to backyard spaces.",
              "Water Features bring movement, sound, and refined visual interest to a landscape.",
              "Artificial Turf provides a low-maintenance, consistently clean alternative for areas where natural grass struggles or requires too much upkeep.",
            ],
          },
          {
            heading: "Why Outdoor Living Matters",
            body: "Investing in outdoor living improvements goes beyond aesthetics. These spaces directly impact how a property functions and how much value it provides day to day.",
            list: [
              "property value",
              "daily usability",
              "entertainment space",
              "backyard enjoyment",
              "curb appeal",
              "long-term functionality",
            ],
          },
          {
            heading: "Built Around How You Use Your Home",
            body: "Every property is different, and every homeowner uses their outdoor space in a different way. Our approach starts with understanding how you want to use the space—then designing and building around that. Whether it is a patio for weekend gatherings, a quiet side yard retreat, or a full backyard transformation, the goal is always the same: a space that works for you, not just one that looks finished.",
          },
        ]}
        cta={{ label: "Ready to Improve Your Outdoor Space?", href: "/contact" }}
      />
      <Footer />
    </>
  );
}
