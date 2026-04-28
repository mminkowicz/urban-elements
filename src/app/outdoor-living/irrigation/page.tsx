import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ServicePageLayout from "@/components/ServicePageLayout";

export default function IrrigationPage() {
  return (
    <>
      <Navigation />
      <ServicePageLayout
        label="Outdoor Living"
        title="Irrigation Services"
        intro="Proper irrigation is essential for maintaining a healthy landscape. We help homeowners ensure their watering systems support long-term plant health and efficient water use."
        sections={[
          {
            heading: "Our Irrigation Services",
            body: "We provide irrigation monitoring, system evaluation, and coordination with landscape maintenance to ensure your property receives proper watering throughout the year.",
          },
          {
            heading: "Why Irrigation Matters",
            body: "A well-managed irrigation system protects your landscape investment and keeps your property looking its best with minimal waste.",
            list: [
              "prevents overwatering",
              "reduces water waste",
              "supports root development",
              "protects landscape investment",
              "improves turf performance",
            ],
          },
        ]}
        cta={{ label: "Need Irrigation Help?", href: "/contact" }}
      />
      <Footer />
    </>
  );
}
