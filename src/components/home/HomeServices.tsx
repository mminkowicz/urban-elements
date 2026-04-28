"use client";

import Link from "next/link";

const services = [
  { title: "Landscape Maintenance", desc: "Consistent, detail-focused maintenance that keeps your property clean, healthy, and looking its best year-round.", href: "/services/recurring-maintenance" },
  { title: "Landscape Design", desc: "Thoughtful designs tailored to your property, goals, and long-term vision.", href: "/services/landscape-design" },
  { title: "Landscape Installation", desc: "Professional installation of plants, sod, mulch, and landscape improvements using proper techniques and quality materials.", href: "/services/landscape-installation" },
  { title: "Seasonal Enhancements", desc: "Seasonal cleanups, mulch and pine straw installation, and landscape enhancements to keep your property looking its best.", href: "/services/seasonal-cleanups" },
];

export default function HomeServices() {
  return (
    <section id="services" className="py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-6 lg:px-16">
        <p className="text-[#3d7a4f] text-[11px] font-bold uppercase tracking-[4px] mb-4">Our Services</p>
        <h2 className="font-serif text-2xl sm:text-3xl font-bold mb-4">What We Do</h2>
        <p className="text-sm text-[#1b1f1c]/50 mb-12 max-w-lg">From routine maintenance to full landscape transformations, we deliver premium results with a hands-on approach.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {services.map((s) => (
            <Link key={s.title} href={s.href} className="group block border border-[#1b1f1c]/8 rounded-lg p-7 hover:border-[#3d7a4f]/30 hover:bg-[#eaf2ec]/50 transition-all duration-300">
              <h3 className="text-[15px] font-bold mb-2 group-hover:text-[#3d7a4f] transition-colors">{s.title}</h3>
              <p className="text-sm text-[#1b1f1c]/50 leading-[1.7] mb-4">{s.desc}</p>
              <span className="text-[#3d7a4f] text-[11px] font-bold uppercase tracking-[1.5px] group-hover:tracking-[2.5px] transition-all duration-300">
                Learn More →
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-8">
          <Link href="/services/recurring-maintenance" className="text-[#3d7a4f] text-[12px] font-bold uppercase tracking-[2px] hover:underline">
            View All Services →
          </Link>
        </div>
      </div>
    </section>
  );
}
