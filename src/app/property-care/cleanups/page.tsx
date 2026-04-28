import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ServicePageLayout from "@/components/ServicePageLayout";

export default function CleanupsPage() {
  return (
    <>
      <Navigation />
      <ServicePageLayout
        label="Property Care"
        title="Seasonal Cleanups"
        intro="Seasonal cleanups help restore order, improve curb appeal, and prepare your landscape for healthy growth throughout the year."
        sections={[
          {
            heading: "Spring Cleanups",
            body: "Preparing the landscape for active growing season by removing winter buildup and refreshing overall property presentation.",
            list: [
              "leaf removal",
              "bed cleanup",
              "plant cutbacks",
              "ornamental grass trimming",
              "debris removal",
              "fresh bed preparation",
              "mulch and pine straw prep",
            ],
          },
          {
            heading: "Fall Cleanups",
            body: "Managing heavy leaf drop, seasonal transitions, and winter preparation to protect lawn and plant health.",
            list: [
              "major leaf removal",
              "shrub cleanup",
              "final bed maintenance",
              "turf preparation",
              "drainage path clearing",
              "seasonal cutbacks",
            ],
          },
          {
            heading: "Property Refresh Services",
            body: "For properties that need larger corrective cleanup due to neglect, overgrowth, storm debris, or project preparation.",
            list: [
              "overgrowth clearing",
              "heavy debris removal",
              "bed restoration",
              "storm cleanup",
              "landscape reset work",
            ],
          },
          {
            heading: "Why Seasonal Cleanups Matter",
            body: "Without consistent seasonal attention, landscape issues compound quickly. Leaves smother turf, debris blocks drainage, and overgrowth creates conditions for disease, pest pressure, and expensive corrective work down the road.",
            list: [
              "turf suffocation from leaves",
              "plant disease risk",
              "drainage blockage",
              "overgrown beds",
              "weed pressure",
              "poor curb appeal",
              "expensive corrective work later",
            ],
          },
        ]}
        cta={{ label: "Schedule a Seasonal Cleanup", href: "/contact" }}
      />
      <Footer />
    </>
  );
}
