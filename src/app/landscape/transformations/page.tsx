import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ServicePageLayout from "@/components/ServicePageLayout";

export default function TransformationsPage() {
  return (
    <>
      <Navigation />
      <ServicePageLayout
        label="Landscape"
        title="Complete Property Transformations"
        intro="Some projects need more than simple updates. They need a full reworking of the property. We specialize in complete property transformations for homeowners who want to dramatically improve the look, function, and usability of their outdoor space."
        sections={[
          {
            heading: "What a Full Transformation May Include",
            body: [
              "Removal of Existing Landscape — Clearing out overgrown, damaged, or outdated plant material, old mulch, debris, and failing hardscape elements.",
              "Regrading & Earthwork — Correcting slopes, leveling areas, and reshaping the terrain to improve drainage, usability, and overall flow.",
              "New Planting Design & Installation — Thoughtful selection and placement of trees, shrubs, ornamental grasses, perennials, and groundcovers designed for the property's specific conditions.",
              "Sod & Lawn Establishment — Professional sod installation on properly graded and amended soil for clean, healthy lawn areas.",
              "Drainage Improvements — French drains, catch basins, swales, downspout routing, and grading corrections to manage water effectively.",
              "Hardscape Features — Retaining walls, walkways, patios, steps, dry creek beds, and other structural elements that add function and character.",
              "Finishing Details — Mulch, pine straw, edging, landscape lighting, and other elements that complete the project and create a polished result.",
            ],
          },
          {
            heading: "Who These Projects Are For",
            body: "Full property transformations are ideal for homeowners who are ready to invest in a significant improvement to their outdoor space rather than making incremental changes over time.",
            list: [
              "New homeowners who want to start fresh",
              "Properties with neglected or overgrown landscapes",
              "Homes with persistent drainage or grading issues",
              "Homeowners planning to sell and wanting maximum curb appeal",
              "Properties where past landscaping was poorly designed or installed",
              "Households that want a cohesive, professionally designed outdoor environment",
            ],
          },
          {
            heading: "Our Process",
            body: [
              "Every transformation project begins with a thorough property evaluation. We walk the property with you, discuss your goals, assess existing conditions, and identify the key issues that need to be addressed.",
              "From there, we develop a scope of work that outlines exactly what will be done, what materials will be used, and how the project will be sequenced. We communicate clearly throughout the process and keep the job site clean and organized from start to finish.",
              "Our goal is to deliver a finished product that looks and functions the way it should from day one and continues to improve as the landscape matures.",
            ],
          },
          {
            heading: "A Better Property — Not Just a Better Planting Bed",
            body: [
              "The difference between a standard landscaping project and a full transformation is scope and intent. We are not just adding plants or fixing one area. We are rethinking the entire outdoor space as a whole.",
              "The result is a property that feels cohesive, intentional, and well-built. Every element works together, from the grading to the plantings to the hardscape to the finishing details.",
            ],
          },
        ]}
        cta={{ label: "Ready to Reimagine Your Property?", href: "/contact" }}
      />
      <Footer />
    </>
  );
}
