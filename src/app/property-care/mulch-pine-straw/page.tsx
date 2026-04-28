import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ServicePageLayout from "@/components/ServicePageLayout";

export default function MulchPineStrawPage() {
  return (
    <>
      <Navigation />
      <ServicePageLayout
        label="Property Care"
        title="Mulch & Pine Straw Installation"
        intro="Fresh mulch and pine straw installation improves appearance, moisture retention, weed suppression, and overall landscape presentation."
        sections={[
          {
            heading: "Why Mulch & Pine Straw Matter",
            body: "Properly applied mulch or pine straw creates cleaner landscape beds, healthier soil conditions, and a more polished finished look for your property.",
            list: [
              "improved moisture retention",
              "weed suppression",
              "temperature regulation for root systems",
              "cleaner bed presentation",
              "reduced soil erosion",
            ],
          },
          {
            heading: "Our Installation Approach",
            body: "We focus on proper depth, clean edges, and even coverage that looks professional and performs well throughout the season.",
          },
        ]}
        cta={{ label: "Request Mulch or Pine Straw Service", href: "/contact" }}
      />
      <Footer />
    </>
  );
}
