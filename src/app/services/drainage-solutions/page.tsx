import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Drainage Solutions | Urban Elements Atlanta",
  description:
    "Practical drainage solutions for Atlanta properties. We improve water movement and protect your property from standing water, erosion, and runoff damage.",
};

export default function DrainageSolutionsPage() {
  return (
    <>
      <Navigation />
      <ServicePageTemplate
        badge="Landscape"
        title="Drainage Solutions"
        intro="Drainage problems rarely stay small. We provide practical solutions to improve water movement and protect your property."
        sections={[
          {
            heading: "Common Problems We Address",
            bullets: [
              "Standing water in the yard after rain",
              "Runoff flowing through planting beds",
              "Soggy turf that won't firm up",
              "Low spots that collect water",
              "Erosion along slopes, edges, and hillsides",
              "Downspout discharge problems",
              "Water flowing toward the home or foundation",
              "Poor grading directing water to the wrong areas",
            ],
          },
          {
            heading: "Services May Include",
            bullets: [
              "Grading corrections and resloping",
              "Downspout extensions and rerouting",
              "Catch basins & drainage systems",
              "Swales & surface flow management",
              "Erosion control measures",
              "Drainage integration with landscape renovation",
            ],
          },
          {
            heading: "Why Handle Drainage Early",
            content:
              "Ignoring drainage issues leads to compounding problems that become harder and more expensive to fix.",
            bullets: [
              "Turf decline and thinning grass",
              "Plant stress and root rot",
              "Muddy, unusable conditions",
              "Erosion that worsens with every storm",
              "Damaged mulch and washed-out beds",
              "Difficult mowing and maintenance",
              "Water accumulation near structures and foundations",
            ],
          },
          {
            heading: "Practical Solutions — Not Guesswork",
            content:
              "We evaluate actual conditions on your property before recommending a solution. Every drainage plan is based on how water moves through your specific site — not assumptions or one-size-fits-all approaches.",
          },
        ]}
        ctaHeading="Need Help with a Drainage Problem?"
        ctaText="Let's take a look at your property and develop a drainage plan that actually works."
        ctaButton="Schedule a Drainage Consultation"
      />
      <Footer />
    </>
  );
}
