"use client";

import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

const propertyCare = [
  { label: "Recurring Maintenance", href: "/property-care/maintenance" },
  { label: "Fertilizer & Weed Control", href: "/property-care/fertilizer-weed-control" },
  { label: "Mulch & Pine Straw", href: "/property-care/mulch-pine-straw" },
  { label: "Seasonal Cleanups", href: "/property-care/cleanups" },
  { label: "Aeration & Overseeding", href: "/property-care/aeration-overseeding" },
];

const landscapeLinks = [
  { label: "Design Services", href: "/landscape/design" },
  { label: "Landscape Installation", href: "/landscape/installation" },
  { label: "Complete Transformations", href: "/landscape/transformations" },
  { label: "Sod & Grading", href: "/landscape/sod-grading" },
  { label: "Drainage Solutions", href: "/landscape/drainage" },
  { label: "Planting Trees & Shrubs", href: "/landscape/planting" },
  { label: "Artificial Turf", href: "/landscape/artificial-turf" },
];

const outdoorLiving = [
  { label: "Pavers, Concrete & Gravel", href: "/outdoor-living/pavers-concrete-gravel" },
  { label: "Concrete Services", href: "/outdoor-living/concrete" },
  { label: "Fire Pits", href: "/outdoor-living/fire-pits" },
  { label: "Water Features", href: "/outdoor-living/water-features" },
  { label: "Artificial Turf", href: "/outdoor-living/artificial-turf" },
  { label: "Irrigation", href: "/outdoor-living/irrigation" },
];

type DropdownItem = { label: string; href: string };

function Dropdown({ label, items, open, onToggle, onClose }: { label: string; items: DropdownItem[]; open: boolean; onToggle: () => void; onClose: () => void }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) onClose();
    }
    if (open) document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open, onClose]);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={onToggle}
        className="flex items-center gap-1 text-[11px] font-bold uppercase tracking-[2px] text-primary hover:text-accent transition-colors bg-transparent border-none cursor-pointer"
      >
        {label}
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}>
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full left-0 mt-4 w-64 bg-white rounded-xl shadow-xl border border-black/5 py-3 z-50"
          >
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className="block px-5 py-2.5 text-[12px] font-medium text-primary/70 hover:text-accent hover:bg-accent/5 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDrop, setOpenDrop] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const closeMobile = () => { setMobileOpen(false); setMobileExpanded(null); };

  return (
    <>
      <nav
        className={[
          "fixed z-50 flex items-center justify-between backdrop-blur-xl transition-all duration-500",
          scrolled
            ? "top-0 left-0 w-full rounded-none px-6 lg:px-12 py-3 bg-white/95 shadow-sm border-b border-black/5"
            : "top-4 left-[2%] w-[96%] lg:left-[3%] lg:w-[94%] rounded-full px-6 lg:px-10 py-3.5 bg-white/85 shadow-lg border border-white/40",
        ].join(" ")}
      >
        <Link href="/" className="font-serif text-lg lg:text-xl font-black tracking-wider text-primary shrink-0">
          URBAN <span className="italic font-normal text-accent">ELEMENTS</span>
        </Link>

        {/* Desktop */}
        <div className="hidden xl:flex items-center gap-8">
          <Link href="/about" className="text-[11px] font-bold uppercase tracking-[2px] text-primary hover:text-accent transition-colors">About</Link>
          <Dropdown label="Property Care" items={propertyCare} open={openDrop === "pc"} onToggle={() => setOpenDrop(openDrop === "pc" ? null : "pc")} onClose={() => setOpenDrop(null)} />
          <Dropdown label="Landscape" items={landscapeLinks} open={openDrop === "ls"} onToggle={() => setOpenDrop(openDrop === "ls" ? null : "ls")} onClose={() => setOpenDrop(null)} />
          <Dropdown label="Outdoor Living" items={outdoorLiving} open={openDrop === "ol"} onToggle={() => setOpenDrop(openDrop === "ol" ? null : "ol")} onClose={() => setOpenDrop(null)} />
          <Link href="/leadership" className="text-[11px] font-bold uppercase tracking-[2px] text-primary hover:text-accent transition-colors">Leadership</Link>
          <Link href="/service-area" className="text-[11px] font-bold uppercase tracking-[2px] text-primary hover:text-accent transition-colors">Service Area</Link>
          <Link href="/contact" className="inline-block px-5 py-2 bg-primary text-white text-[11px] font-bold uppercase tracking-[2px] hover:bg-accent transition-colors rounded-sm">Contact Us</Link>
        </div>

        {/* Hamburger */}
        <button onClick={() => setMobileOpen(!mobileOpen)} className="xl:hidden flex flex-col gap-1.5 p-2 bg-transparent border-none cursor-pointer relative z-[60]" aria-label="Menu">
          <span className={`block w-6 h-0.5 bg-primary transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-primary transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-primary transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-40 bg-cream overflow-y-auto pt-24 pb-12 px-8">
            <div className="flex flex-col gap-4 max-w-md mx-auto">
              <Link href="/" onClick={closeMobile} className="text-lg font-bold text-primary py-2">Home</Link>
              <Link href="/about" onClick={closeMobile} className="text-lg font-bold text-primary py-2">About</Link>

              {[
                { label: "Property Care", key: "pc", items: propertyCare },
                { label: "Landscape", key: "ls", items: landscapeLinks },
                { label: "Outdoor Living", key: "ol", items: outdoorLiving },
              ].map((group) => (
                <div key={group.key}>
                  <button
                    onClick={() => setMobileExpanded(mobileExpanded === group.key ? null : group.key)}
                    className="flex items-center justify-between w-full text-lg font-bold text-primary py-2 bg-transparent border-none cursor-pointer"
                  >
                    {group.label}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={`transition-transform ${mobileExpanded === group.key ? "rotate-180" : ""}`}>
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </button>
                  {mobileExpanded === group.key && (
                    <div className="pl-4 flex flex-col gap-1 mt-1 mb-2">
                      {group.items.map((item) => (
                        <Link key={item.href} href={item.href} onClick={closeMobile} className="text-sm text-primary/60 py-2 hover:text-accent transition-colors">
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <Link href="/leadership" onClick={closeMobile} className="text-lg font-bold text-primary py-2">Leadership</Link>
              <Link href="/service-area" onClick={closeMobile} className="text-lg font-bold text-primary py-2">Service Area</Link>
              <Link href="/contact" onClick={closeMobile} className="block text-center mt-4 py-4 bg-primary text-white text-sm font-bold uppercase tracking-[3px] rounded-sm">Contact Us</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
