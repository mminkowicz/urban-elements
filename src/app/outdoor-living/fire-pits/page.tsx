import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ServicePageLayout from "@/components/ServicePageLayout";

export default function FirePitsPage() {
  return (
    <>
      <Navigation />
      <ServicePageLayout
        label="Outdoor Living"
        title="Fire Pit Installation"
        intro="A fire pit adds more than a feature—it creates a destination. Whether used for entertaining, relaxing, or simply creating a stronger backyard focal point, a well-designed fire pit helps turn unused outdoor space into a place people naturally gather."
        sections={[
          {
            heading: "Fire Pit Projects May Include",
            body: "Every fire pit project is different. We work with homeowners to design and install fire features that fit the space, match the property's style, and serve a real purpose in the landscape.",
            list: [
              "standalone fire pit installations",
              "patio and seating area integration",
              "gravel or paver gathering spaces",
              "retaining wall seating concepts",
              "backyard focal point design",
              "landscape integration",
              "lighting coordination",
              "surrounding planting enhancements",
            ],
          },
          {
            heading: "Designed for Use Not Just Looks",
            body: "A fire pit should be more than a visual accent. It should be placed where people will actually use it, built with materials that hold up over time, and designed with enough surrounding space for comfortable seating and safe use. We focus on creating fire features that homeowners use regularly—not ones that sit untouched in a corner of the yard.",
          },
          {
            heading: "A Strong Backyard Focal Point",
            body: "Fire pits naturally anchor a space. They give a backyard a center of gravity and create a reason to spend time outside after dark. When paired with the right hardscape, seating, lighting, and planting, a fire feature becomes the foundation of a complete outdoor living area.",
          },
        ]}
        cta={{ label: "Thinking About a Fire Feature?", href: "/contact" }}
      />
      <Footer />
    </>
  );
}
