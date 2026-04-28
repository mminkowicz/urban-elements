"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          <div className="lg:col-span-2">
            <Link href="/" className="font-serif text-2xl font-black tracking-wider text-white">
              URBAN <span className="italic font-normal text-accent">ELEMENTS</span>
            </Link>
            <p className="text-white/35 mt-4 text-sm leading-relaxed max-w-xs">
              Licensed and insured professional landscaping. Serving Atlanta and surrounding communities with precision and care.
            </p>
          </div>

          <div>
            <p className="text-[11px] font-bold uppercase tracking-[2px] mb-5">Property Care</p>
            <Link href="/property-care/maintenance" className="block text-white/45 text-sm mb-2.5 hover:text-white transition-colors">Maintenance</Link>
            <Link href="/property-care/fertilizer-weed-control" className="block text-white/45 text-sm mb-2.5 hover:text-white transition-colors">Fertilizer & Weed</Link>
            <Link href="/property-care/cleanups" className="block text-white/45 text-sm mb-2.5 hover:text-white transition-colors">Seasonal Cleanups</Link>
            <Link href="/property-care/aeration-overseeding" className="block text-white/45 text-sm hover:text-white transition-colors">Aeration</Link>
          </div>

          <div>
            <p className="text-[11px] font-bold uppercase tracking-[2px] mb-5">Landscape</p>
            <Link href="/landscape/design" className="block text-white/45 text-sm mb-2.5 hover:text-white transition-colors">Design</Link>
            <Link href="/landscape/installation" className="block text-white/45 text-sm mb-2.5 hover:text-white transition-colors">Installation</Link>
            <Link href="/landscape/transformations" className="block text-white/45 text-sm mb-2.5 hover:text-white transition-colors">Transformations</Link>
            <Link href="/landscape/sod-grading" className="block text-white/45 text-sm hover:text-white transition-colors">Sod & Grading</Link>
          </div>

          <div>
            <p className="text-[11px] font-bold uppercase tracking-[2px] mb-5">Company</p>
            <Link href="/about" className="block text-white/45 text-sm mb-2.5 hover:text-white transition-colors">About</Link>
            <Link href="/leadership" className="block text-white/45 text-sm mb-2.5 hover:text-white transition-colors">Leadership</Link>
            <Link href="/service-area" className="block text-white/45 text-sm mb-2.5 hover:text-white transition-colors">Service Area</Link>
            <Link href="/contact" className="block text-white/45 text-sm hover:text-white transition-colors">Contact</Link>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-white/20 tracking-[1.5px]">
            &copy; 2026 URBAN ELEMENTS ATLANTA. ALL RIGHTS RESERVED.
          </p>
          <p className="text-[11px] text-white/20 tracking-[1px]">
            Licensed &amp; Insured &bull; Atlanta, GA
          </p>
        </div>
      </div>
    </footer>
  );
}
