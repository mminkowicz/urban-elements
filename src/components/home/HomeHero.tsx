"use client";

import Link from "next/link";

const locations = [
  "Druid Hills", "Morningside", "Virginia Highlands", "Poncey-Highland",
  "Brookhaven", "Tucker", "Chamblee", "Avondale Estates", "Decatur",
];
const marqueeItems = [...locations, ...locations, ...locations, ...locations];

export default function HomeHero() {
  return (
    <section className="bg-[#111413] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 pt-36 pb-20 lg:pt-48 lg:pb-28">
        <div className="max-w-3xl">
          <p className="text-[#3d7a4f] text-[11px] font-bold uppercase tracking-[4px] mb-5">
            Urban Elements Atlanta
          </p>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-[2.75rem] font-bold leading-[1.25] mb-6">
            Professional Landscaping for Atlanta Homeowners
          </h1>

          <p className="text-white/55 text-[15px] leading-[1.8] mb-4 max-w-xl">
            Thoughtful design, reliable maintenance, and clean installations — delivered with care, consistency, and attention to detail.
          </p>

          <p className="text-white/30 text-[10px] uppercase tracking-[2.5px] mb-10">
            Licensed &amp; Insured &bull; Owner-Operated &bull; Serving Atlanta &amp; Surrounding Areas
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/contact"
              className="inline-block text-center px-7 py-3.5 bg-[#3d7a4f] text-white text-[11px] font-bold uppercase tracking-[2px] rounded hover:bg-[#356e45] transition-colors"
            >
              Schedule a Free Consultation
            </Link>
            <Link
              href="#services"
              className="inline-block text-center px-7 py-3.5 text-white/50 text-[11px] font-bold uppercase tracking-[2px] border border-white/15 rounded hover:text-white hover:border-white/30 transition-colors"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div className="border-t border-white/8 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap py-3.5">
          {marqueeItems.map((loc, i) => (
            <span key={i} className="inline-flex items-center gap-2 mx-5 text-[10px] font-medium uppercase tracking-[2px] text-white/30">
              <span className="w-1 h-1 rounded-full bg-[#3d7a4f] shrink-0" />
              {loc}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
