"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-16 border-t border-white/5">
      <div className="max-w-5xl mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="font-serif text-lg font-black tracking-wider text-white">
              URBAN <span className="italic font-normal text-accent">ELEMENTS</span>
            </Link>
            <p className="text-white/30 mt-3 text-sm leading-relaxed max-w-xs">
              Licensed and insured professional landscaping, serving the greater Atlanta area.
            </p>
          </div>

          <div>
            <p className="text-[11px] font-bold uppercase tracking-[2px] mb-4 text-white/60">Services</p>
            <div className="space-y-2">
              <Link href="/services/recurring-maintenance" className="block text-sm text-white/35 hover:text-white transition-colors">Maintenance</Link>
              <Link href="/services/landscape-design" className="block text-sm text-white/35 hover:text-white transition-colors">Design</Link>
              <Link href="/services/landscape-installation" className="block text-sm text-white/35 hover:text-white transition-colors">Installation</Link>
              <Link href="/services/outdoor-living" className="block text-sm text-white/35 hover:text-white transition-colors">Outdoor Living</Link>
            </div>
          </div>

          <div>
            <p className="text-[11px] font-bold uppercase tracking-[2px] mb-4 text-white/60">Company</p>
            <div className="space-y-2">
              <Link href="/about" className="block text-sm text-white/35 hover:text-white transition-colors">About</Link>
              <Link href="/contact" className="block text-sm text-white/35 hover:text-white transition-colors">Contact</Link>
            </div>
          </div>

          <div>
            <p className="text-[11px] font-bold uppercase tracking-[2px] mb-4 text-white/60">Contact</p>
            <p className="text-sm text-white/35">Atlanta, Georgia</p>
          </div>
        </div>

        <div className="border-t border-white/8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[11px] text-white/20 tracking-[1px]">
            &copy; {new Date().getFullYear()} Urban Elements Atlanta
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-[11px] text-white/20 uppercase tracking-[2px] hover:text-white/50 transition-colors bg-transparent border-none cursor-pointer"
          >
            Back to top ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
