import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ServicePageLayout from "@/components/ServicePageLayout";

export default function MaintenancePage() {
  return (
    <>
      <Navigation />
      <ServicePageLayout
        label="Property Care"
        title="Recurring Landscape Maintenance"
        intro="At Urban Elements, our recurring landscape maintenance programs are designed to keep your property clean, healthy, and consistently well-maintained throughout the year."
        sections={[
          {
            heading: "Flat Monthly Maintenance Plans",
            body: "Starting at $185/month. Our maintenance plans are built using a flat monthly pricing structure designed to create simplicity, consistency, and year-round care. Rather than fluctuating invoices depending on the season and job, we calculate your property's annual maintenance needs and distribute that evenly throughout the year.",
            list: [
              "predictable monthly pricing",
              "consistent professional service",
              "proactive seasonal planning",
              "fewer large corrective cleanups",
              "long-term protection for your landscape investment",
            ],
          },
          {
            heading: "Included Maintenance Services",
            body: [
              "Every maintenance plan includes biweekly visits during the active growing season, with adjusted scheduling during the dormant months to match your property's seasonal needs.",
              "Lawn mowing and precision edging are performed at each visit to maintain clean lines and a well-groomed appearance across your entire property.",
              "Blowing and surface cleanup ensure that driveways, walkways, patios, and curb areas remain clear of grass clippings and debris after every service.",
              "Standard shrub trimming is included to keep hedges, foundation plantings, and ornamental shrubs shaped and maintained throughout the year.",
              "Leaf management during fall and seasonal transitions helps prevent turf suffocation, drainage issues, and buildup in landscape beds.",
              "Spot weed control in landscape beds and hardscape areas helps reduce weed pressure between scheduled treatments.",
              "Seasonal plant care adjustments are made throughout the year to address dormancy transitions, plant health, and growth patterns.",
            ],
          },
          {
            heading: "Available Add-On Services",
            body: "The following services can be added to your maintenance plan for complete year-round property care.",
            list: [
              "Fertilizer & Weed Control Programs",
              "Pine Straw & Mulch Installation",
              "Aeration & Overseeding",
              "Advanced Pruning",
              "Offsite Debris Removal",
              "Seasonal Cleanups",
              "Drainage Improvements",
              "Irrigation Monitoring",
              "Landscape Enhancements",
            ],
          },
          {
            heading: "Why Homeowners Choose Our Program",
            body: "Our maintenance clients benefit from reliable, consistent care that protects their landscape investment and eliminates the need for constant coordination.",
            list: [
              "consistent curb appeal",
              "healthier turf and plant material",
              "fewer expensive corrective projects",
              "reliable service without constant follow-up",
              "long-term landscape value",
              "peace of mind year-round",
            ],
          },
        ]}
        cta={{ label: "Ready for Reliable Landscape Maintenance?", href: "/contact" }}
      />
      <Footer />
    </>
  );
}
