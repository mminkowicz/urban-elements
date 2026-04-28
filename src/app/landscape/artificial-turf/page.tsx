import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ServicePageLayout from "@/components/ServicePageLayout";

export default function ArtificialTurfPage() {
  return (
    <>
      <Navigation />
      <ServicePageLayout
        label="Landscape"
        title="Artificial Turf"
        intro="Artificial turf can be a smart solution for homeowners who want a consistently clean appearance without the maintenance demands of natural grass in certain areas."
        sections={[
          {
            heading: "Where Artificial Turf Works Best",
            body: "Artificial turf is not the right fit for every situation, but in the right application it can provide a durable, low-maintenance surface that looks clean year-round.",
            list: [
              "Side yards and narrow strips that are difficult to mow",
              "Dog runs and pet areas that experience heavy use",
              "Rooftop terraces and balcony spaces",
              "Play areas for children",
              "Courtyard and patio surrounds",
              "Shaded areas where natural grass struggles to grow",
              "Small front yard accents or entryway borders",
            ],
          },
          {
            heading: "Our Turf Installation Approach",
            body: [
              "Site Preparation — Removal of existing turf, debris, and organic material to create a clean and stable working surface.",
              "Base Work — Installation of a compacted aggregate base layer to provide proper drainage, stability, and a smooth surface for the turf.",
              "Turf Layout & Installation — Precision cutting and placement of turf panels with tight seams, proper fiber direction, and secure fastening.",
              "Edge Detailing — Clean transitions between turf and adjacent surfaces including landscape beds, hardscape, and natural lawn areas.",
              "Final Grooming — Infill application and brushing to set turf fibers upright for a natural finished appearance.",
            ],
          },
          {
            heading: "Benefits of Artificial Turf",
            body: "When installed correctly and used in the right application, artificial turf offers several practical advantages.",
            list: [
              "No mowing, watering, or fertilizing required",
              "Consistent green appearance year-round",
              "Durable surface for high-traffic areas",
              "Pet-friendly and easy to clean",
              "Reduced water usage in targeted areas",
              "Low long-term maintenance cost",
            ],
          },
          {
            heading: "Best Used Intentionally",
            body: [
              "We recommend artificial turf for specific, targeted applications where it makes practical sense rather than as a wholesale replacement for natural lawn. When used intentionally, turf can solve real problems and add value to a property.",
              "We are happy to evaluate your property and discuss whether artificial turf is the right fit for the areas you have in mind. If natural grass or another solution would perform better, we will tell you that too.",
            ],
          },
        ]}
        cta={{ label: "Considering Artificial Turf?", href: "/contact" }}
      />
      <Footer />
    </>
  );
}
