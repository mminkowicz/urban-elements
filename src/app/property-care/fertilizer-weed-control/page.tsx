import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ServicePageLayout from "@/components/ServicePageLayout";

export default function FertilizerWeedControlPage() {
  return (
    <>
      <Navigation />
      <ServicePageLayout
        label="Property Care"
        title="Fertilizer & Weed Control"
        intro="A healthy lawn requires more than regular mowing. Proper fertilization, weed prevention, and turf management are essential for building strong root systems, improving density, and maintaining long-term lawn health."
        sections={[
          {
            heading: "Our Lawn Treatment Programs",
            body: [
              "Our programs are built to support both warm-season and cool-season turf throughout the year with properly timed applications that improve performance and reduce long-term lawn problems.",
              "Pre-Emergent Weed Prevention — Timed applications that create a barrier to prevent weeds from establishing before they become visible. Proper timing is critical to effectiveness.",
              "Post-Emergent Weed Control — Targeted treatments for active weeds that have broken through, applied carefully to reduce turf stress while eliminating problem areas.",
              "Seasonal Fertilization — Balanced nutrient applications matched to your turf type and the current growing season to promote strong color, density, and root development.",
              "Soil Health Support — Monitoring soil conditions and adjusting treatment plans to address compaction, pH imbalance, and nutrient deficiencies over time.",
              "Spot Treatment Monitoring — Ongoing observation of problem areas between scheduled applications, with corrective treatments applied as needed.",
            ],
          },
          {
            heading: "Why Professional Lawn Treatment Matters",
            body: "Improper timing, incorrect product use, and inconsistent applications often create more problems than they solve.",
            list: [
              "heavy weed pressure",
              "weak turf density",
              "disease vulnerability",
              "poor root development",
              "patchy lawn appearance",
              "expensive lawn restoration later",
            ],
          },
          {
            heading: "Fertilizer + Maintenance = Better Results",
            body: "Our fertilizer and weed control programs work best when paired with recurring landscape maintenance. Proper mowing, seasonal care, irrigation awareness, and turf treatment all work together to create stronger long-term results.",
          },
        ]}
        cta={{ label: "Request a Lawn Evaluation", href: "/contact" }}
      />
      <Footer />
    </>
  );
}
