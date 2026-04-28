import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ServicePageLayout from "@/components/ServicePageLayout";

export default function DrainagePage() {
  return (
    <>
      <Navigation />
      <ServicePageLayout
        label="Landscape"
        title="Drainage Solutions"
        intro="Drainage problems rarely stay small. Standing water, runoff issues, erosion, soggy lawn areas, and water collecting near the home can all create bigger problems over time if they are not addressed correctly."
        sections={[
          {
            heading: "Common Drainage Problems We Address",
            body: "We regularly work with homeowners dealing with water issues that range from minor nuisances to serious property concerns.",
            list: [
              "Standing water in the yard after rain",
              "Water pooling near the foundation or basement",
              "Soggy or unusable lawn areas",
              "Erosion along slopes, beds, or property edges",
              "Downspouts dumping water too close to the home",
              "Runoff from neighboring properties",
              "Failed or undersized existing drainage systems",
            ],
          },
          {
            heading: "Drainage Services May Include",
            body: [
              "Grading Corrections — Reshaping the terrain to direct water away from structures and toward appropriate drainage points.",
              "Downspout Extensions & Routing — Extending and redirecting downspout discharge away from the foundation to reduce water accumulation near the home.",
              "Catch Basins & Inlet Drains — Installing surface drains in low areas to collect standing water and route it underground to a discharge point.",
              "French Drains — Subsurface drainage lines designed to intercept and redirect groundwater before it reaches problem areas.",
              "Swales & Surface Channels — Shallow graded channels that move water across the surface naturally without the need for underground piping.",
              "Erosion Control — Stabilizing slopes and edges with proper grading, ground cover plantings, retaining structures, or riprap where needed.",
              "Drainage Integration with Landscape Projects — Incorporating drainage solutions into larger landscape installations, renovations, and property transformations.",
            ],
          },
          {
            heading: "Why Drainage Should Be Handled Early",
            body: "Ignoring drainage issues almost always leads to larger and more expensive problems down the road. Unaddressed water problems can result in:",
            list: [
              "Foundation damage and structural concerns",
              "Turf failure and plant loss in waterlogged areas",
              "Soil erosion that worsens with every storm",
              "Mosquito breeding in standing water",
              "Unusable outdoor areas during and after wet weather",
              "Damage to hardscape features like patios, walkways, and retaining walls",
            ],
          },
          {
            heading: "Practical Solutions — Not Guesswork",
            body: [
              "We evaluate every drainage problem on-site before recommending a solution. Rather than applying a one-size-fits-all approach, we look at the specific conditions of your property including the slope, soil type, water source, existing infrastructure, and how the issue interacts with the rest of the landscape.",
              "The result is a targeted solution designed to solve the actual problem rather than mask the symptoms. We focus on doing it right the first time so that the issue does not come back.",
            ],
          },
        ]}
        cta={{ label: "Need Help with a Drainage Problem?", href: "/contact" }}
      />
      <Footer />
    </>
  );
}
