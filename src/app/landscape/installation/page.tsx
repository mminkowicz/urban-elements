import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ServicePageLayout from "@/components/ServicePageLayout";

export default function InstallationPage() {
  return (
    <>
      <Navigation />
      <ServicePageLayout
        label="Landscape"
        title="Landscape Installation"
        intro="A strong landscape design only matters if it is installed correctly. We provide professional landscape installation services for homeowners who want clean execution, quality materials, and results that hold up over time."
        sections={[
          {
            heading: "What Our Installation Services May Include",
            body: [
              "Plant & Shrub Installation — Proper placement, spacing, and planting depth for trees, shrubs, ornamental grasses, perennials, and groundcovers.",
              "Tree Installation — Small to large-caliper tree planting with correct root flare exposure, staking when necessary, and post-planting care guidance.",
              "Sod Installation — Professional-grade sod laid on properly prepared and graded soil for clean, even lawn areas.",
              "Mulch & Pine Straw — Bed top-dressing with quality mulch or pine straw to protect plant roots, retain moisture, and create a clean finished appearance.",
              "Bed Creation & Renovation — New bed construction or reworking of existing beds including edging, soil amendment, and layout adjustments.",
              "Grading & Drainage — Surface grading corrections, swale construction, French drains, catch basins, and downspout routing to manage water properly.",
              "Hardscape Elements — Retaining walls, walkways, stepping stone paths, dry creek beds, and other structural landscape features.",
            ],
          },
          {
            heading: "Our Installation Approach",
            body: "We approach every installation with a focus on doing the job correctly the first time. Our clients can expect clear communication, professional crews, and attention to the details that separate quality work from average work.",
            list: [
              "Pre-installation site review and planning",
              "Proper material sourcing and quality control",
              "Clean and organized job sites",
              "Attention to grading, drainage, and soil preparation",
              "Post-installation walkthrough and care instructions",
            ],
          },
          {
            heading: "Already Have a Design?",
            body: "If you already have a landscape plan from another designer or architect, we are happy to review it and provide an installation estimate. We regularly work from landscape plans, planting plans, grading layouts, material lists, and renovation scopes provided by homeowners, designers, or architects.",
          },
          {
            heading: "Why Proper Installation Matters",
            body: [
              "Even the best plant material and hardscape products will fail if they are not installed correctly. Improper planting depth, poor soil preparation, bad grading, and careless material handling are some of the most common reasons landscapes underperform or fail within the first few years.",
              "We take installation seriously because we know it is the foundation for everything that follows. When a landscape is installed correctly from the start, it establishes faster, requires less corrective work, and delivers the long-term results homeowners are looking for.",
            ],
          },
        ]}
        cta={{ label: "Request an Installation Quote", href: "/contact" }}
      />
      <Footer />
    </>
  );
}
