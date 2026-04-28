"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#111413] text-white py-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-16">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="font-serif text-2xl font-black tracking-wider text-white">
              URBAN <span className="italic font-normal text-gold">ELEMENTS</span>
            </Link>
            <p className="text-white/40 mt-4 text-[14px] leading-[1.8] max-w-[280px]">
              Licensed and insured professional landscaping, serving the greater Atlanta area with precision and care.
            </p>
          </div>

          <div>
            <p className="text-[11px] font-bold uppercase tracking-[2.5px] mb-6 text-gold">Services</p>
            <div className="space-y-3">
              <Link href="/services/recurring-maintenance" className="block text-[14px] text-white/50 hover:text-white transition-colors">Property Care</Link>
              <Link href="/services/landscape-design" className="block text-[14px] text-white/50 hover:text-white transition-colors">Landscape Design</Link>
              <Link href="/services/landscape-installation" className="block text-[14px] text-white/50 hover:text-white transition-colors">Installation</Link>
              <Link href="/services/outdoor-living" className="block text-[14px] text-white/50 hover:text-white transition-colors">Outdoor Living</Link>
            </div>
          </div>

          <div>
            <p className="text-[11px] font-bold uppercase tracking-[2.5px] mb-6 text-gold">Company</p>
            <div className="space-y-3">
              <Link href="/about" className="block text-[14px] text-white/50 hover:text-white transition-colors">About Us</Link>
              <Link href="/contact" className="block text-[14px] text-white/50 hover:text-white transition-colors">Contact</Link>
            </div>
          </div>

          <div>
            <p className="text-[11px] font-bold uppercase tracking-[2.5px] mb-6 text-gold">Contact</p>
            <a href="tel:4045550199" className="block text-[14px] text-white/50 hover:text-white transition-colors mb-3">(404) 555-0199</a>
            <p className="text-[14px] text-white/50">Atlanta, Georgia</p>
          </div>
        </div>

        <div className="border-t border-white/10 pt-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-white/30 tracking-[1.5px]">
            &copy; {new Date().getFullYear()} Urban Elements Atlanta. All Rights Reserved.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-[10px] text-white/30 uppercase tracking-[3px] hover:text-white transition-colors bg-transparent border-none cursor-pointer"
          >
            Back to top ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
