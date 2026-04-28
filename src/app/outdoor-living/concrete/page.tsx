import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ServicePageLayout from "@/components/ServicePageLayout";

export default function ConcretePage() {
  return (
    <>
      <Navigation />
      <ServicePageLayout
        label="Outdoor Living"
        title="Concrete Services"
        intro="Concrete is one of the most practical improvements a property can have when it is installed correctly. From patios and walkways to pads, extensions, and functional outdoor surfaces, quality concrete work improves usability, appearance, and long-term durability."
        sections={[
          {
            heading: "Concrete Services May Include",
            body: "We provide a range of concrete services designed to improve the function and structure of outdoor spaces.",
            list: [
              "patios",
              "walkways",
              "equipment pads",
              "driveway extensions",
              "side-yard access paths",
              "slab preparation",
              "backyard seating areas",
              "utility access improvements",
              "functional outdoor surface upgrades",
            ],
          },
          {
            heading: "Built for Performance",
            body: "Concrete that is poured without proper preparation will crack, settle, and fail. Our approach prioritizes the foundational work that ensures every pour performs over time.",
            list: [
              "grade preparation",
              "water flow and drainage",
              "structural base support",
              "finish quality",
              "clean transitions",
              "practical long-term use",
            ],
          },
          {
            heading: "Functional Improvements That Last",
            body: "Concrete work is a long-term investment. When done right, it eliminates recurring problems, improves daily access, and adds lasting structure to a property. Whether it is a small pad or a large patio, the goal is always a clean, durable result that serves its purpose for years.",
          },
        ]}
        cta={{ label: "Need Concrete Work Done Right?", href: "/contact" }}
      />
      <Footer />
    </>
  );
}
