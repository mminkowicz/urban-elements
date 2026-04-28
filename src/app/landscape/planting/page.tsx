import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ServicePageLayout from "@/components/ServicePageLayout";

export default function PlantingPage() {
  return (
    <>
      <Navigation />
      <ServicePageLayout
        label="Landscape"
        title="Planting Trees & Shrubs"
        intro="The right plantings can completely change how a property feels. We focus on thoughtful selection, proper spacing, clean layout, and long-term landscape performance."
        sections={[
          {
            heading: "Our Planting Services",
            body: [
              "Shrub Installation — Foundation plantings, hedge rows, accent shrubs, and ornamental varieties selected and installed for the specific conditions of your property.",
              "Tree Installation — Small ornamental trees to large shade and canopy trees, properly planted with correct root flare depth, staking when necessary, and post-planting care guidance.",
              "Bed Layout & Design — Thoughtful arrangement of plant material within beds for clean lines, proper spacing, and visual balance from all angles.",
              "Privacy Screening — Strategic planting of evergreen trees and shrubs to create natural privacy barriers, windbreaks, and property line buffers.",
              "Accent & Seasonal Plantings — Perennials, ornamental grasses, and seasonal color used to add texture, movement, and year-round interest to the landscape.",
              "Bed Renovation — Reworking existing beds by removing overgrown or underperforming material and replanting with a refreshed design and healthier stock.",
            ],
          },
          {
            heading: "What We Focus On",
            body: "Every planting project is approached with the same attention to detail. We consider the full picture before putting anything in the ground.",
            list: [
              "Proper spacing for mature growth",
              "Sun and shade exposure for each planting zone",
              "Soil conditions and drainage at the planting site",
              "Compatibility with existing plant material",
              "Property style and architectural character",
              "Seasonal interest across all four seasons",
              "Long-term maintenance requirements",
              "Root zone health and planting depth",
            ],
          },
          {
            heading: "A Better Result Than \"Fill It In\"",
            body: [
              "One of the most common mistakes in residential landscaping is treating planting as a task to finish rather than a design decision. Plants installed without a plan tend to crowd each other, block views, outgrow their space, and create maintenance problems within a few years.",
              "We take a different approach. Every plant has a purpose, a reason for its location, and a role in the overall design. The result is a landscape that looks good from the start and continues to improve as it matures.",
            ],
          },
          {
            heading: "Ideal for Front Yards, Backyards, and Full Renovations",
            body: "Whether you need a single bed refreshed or an entire property replanted, our planting services are scaled to fit the project.",
            list: [
              "Front yard curb appeal improvements",
              "Backyard privacy and screening projects",
              "Foundation planting upgrades",
              "Full property planting plans",
              "New construction landscape planting",
              "Post-renovation bed restoration",
            ],
          },
        ]}
        cta={{ label: "Ready to Refresh Your Planting Beds?", href: "/contact" }}
      />
      <Footer />
    </>
  );
}
