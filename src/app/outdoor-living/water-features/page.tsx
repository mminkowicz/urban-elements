import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ServicePageLayout from "@/components/ServicePageLayout";

export default function WaterFeaturesPage() {
  return (
    <>
      <Navigation />
      <ServicePageLayout
        label="Outdoor Living"
        title="Water Features"
        intro="Water features bring a different kind of experience to a landscape. They create movement, soften outdoor spaces with sound, and add a level of visual interest that makes a property feel more refined and intentional."
        sections={[
          {
            heading: "Water Feature Options May Include",
            body: "We work with homeowners to select and install water features that complement the existing landscape and serve a clear design purpose.",
            list: [
              "decorative fountains",
              "pond features",
              "focal point water elements",
              "courtyard features",
              "patio-adjacent water design",
              "entry statement features",
              "landscape integration",
              "supporting planting and hardscape coordination",
            ],
          },
          {
            heading: "Designed to Fit the Space",
            body: "A water feature only works well when it is scaled, placed, and integrated properly. We consider every factor that affects how a feature looks, sounds, and performs over time.",
            list: [
              "scale and proportion",
              "visibility from the home",
              "sound placement",
              "maintenance expectations",
              "drainage interaction",
              "hardscape integration",
              "planting balance",
            ],
          },
          {
            heading: "More Than Decoration",
            body: "Water features are not just decorative additions. When designed well, they become defining elements of a landscape—creating atmosphere, drawing attention to key areas, and making outdoor spaces feel more complete. The goal is always a feature that enhances the property rather than complicating it.",
          },
        ]}
        cta={{ label: "Interested in Adding a Water Feature?", href: "/contact" }}
      />
      <Footer />
    </>
  );
}
