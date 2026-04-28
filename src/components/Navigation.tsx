"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";

const propertyCare = [
  { label: "Recurring Maintenance", href: "/services/recurring-maintenance" },
  { label: "Fertilizer & Weed Control", href: "/services/fertilizer-weed-control" },
  { label: "Seasonal Cleanups", href: "/services/seasonal-cleanups" },
  { label: "Aeration & Overseeding", href: "/services/aeration-overseeding" },
];

const landscape = [
  { label: "Landscape Design", href: "/services/landscape-design" },
  { label: "Landscape Installation", href: "/services/landscape-installation" },
  { label: "Complete Transformations", href: "/services/complete-transformations" },
  { label: "Sod & Grading", href: "/services/sod-grading" },
  { label: "Drainage Solutions", href: "/services/drainage-solutions" },
  { label: "Planting Trees & Shrubs", href: "/services/planting-trees-shrubs" },
  { label: "Artificial Turf", href: "/services/artificial-turf" },
];

const outdoorLiving = [
  { label: "Outdoor Living Overview", href: "/services/outdoor-living" },
  { label: "Pavers, Concrete & Gravel", href: "/services/pavers-concrete-gravel" },
  { label: "Concrete Services", href: "/services/concrete" },
  { label: "Fire Pit Installation", href: "/services/fire-pits" },
  { label: "Water Features", href: "/services/water-features" },
];

function Dropdown({ label, items, open, onToggle, onClose }: {
  label: string;
  items: { label: string; href: string }[];
  open: boolean;
  onToggle: () => void;
  onClose: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) onClose();
    };
    if (open) document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open, onClose]);

  return (
    <div ref={ref} className="relative h-full flex items-center">
      <button
        onClick={onToggle}
        className="flex items-center gap-1 text-[13px] font-semibold uppercase tracking-[1px] text-charcoal hover:text-forest transition-colors h-full"
      >
        {label}
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}>
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 mt-0 bg-white shadow-2xl border-t-2 border-forest py-2 min-w-[260px] z-50"
          >
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className="block px-6 py-3 text-[13px] font-medium text-charcoal/80 hover:text-forest hover:bg-sand transition-colors"
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
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDrop, setOpenDrop] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 40);
  });

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const closeMobile = () => {
    setMobileOpen(false);
    setMobileExpanded(null);
  };

  return (
    <>
      {/* Top Bar (Like Infantry) */}
      <div className="hidden md:flex bg-forest text-white text-[11px] font-medium tracking-[1px] uppercase py-2 px-6 lg:px-16 justify-between items-center z-50 relative">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-2">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            Licensed & Insured
          </span>
          <span className="flex items-center gap-2">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
            Satisfaction Guaranteed
          </span>
        </div>
        <div className="flex items-center gap-6">
          <a href="tel:4045550199" className="flex items-center gap-2 hover:text-gold transition-colors">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            (404) 555-0199
          </a>
        </div>
      </div>

      {/* Main Nav */}
      <header className={`fixed w-full z-40 transition-all duration-300 ${isScrolled ? "top-0 glass-nav py-2" : "top-0 md:top-[34px] bg-white py-4"}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-16 flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex flex-col shrink-0">
            <span className="font-serif text-2xl font-black tracking-wide text-forest leading-none">URBAN ELEMENTS</span>
            <span className="text-[9px] uppercase tracking-[4px] text-gold font-bold mt-1">Atlanta</span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden xl:flex items-center gap-8 h-10">
            <Link href="/" className="text-[13px] font-semibold uppercase tracking-[1px] text-charcoal hover:text-forest transition-colors">Home</Link>
            <Link href="/about" className="text-[13px] font-semibold uppercase tracking-[1px] text-charcoal hover:text-forest transition-colors">About</Link>
            <Dropdown label="Property Care" items={propertyCare} open={openDrop === "pc"} onToggle={() => setOpenDrop(openDrop === "pc" ? null : "pc")} onClose={() => setOpenDrop(null)} />
            <Dropdown label="Landscape" items={landscape} open={openDrop === "ls"} onToggle={() => setOpenDrop(openDrop === "ls" ? null : "ls")} onClose={() => setOpenDrop(null)} />
            <Dropdown label="Outdoor Living" items={outdoorLiving} open={openDrop === "ol"} onToggle={() => setOpenDrop(openDrop === "ol" ? null : "ol")} onClose={() => setOpenDrop(null)} />
            <Link href="/contact" className="text-[13px] font-semibold uppercase tracking-[1px] text-charcoal hover:text-forest transition-colors">Contact</Link>
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center">
             <Link href="/contact" className="px-6 py-3 bg-forest text-white text-[12px] font-bold uppercase tracking-[1.5px] hover:bg-forest-light transition-colors rounded-sm">
                Request Quote
             </Link>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="xl:hidden flex flex-col gap-1.5 p-2"
          >
            <span className={`block w-6 h-0.5 transition-all duration-300 ${mobileOpen ? "bg-forest rotate-45 translate-y-2" : "bg-charcoal"}`} />
            <span className={`block w-6 h-0.5 transition-all duration-300 ${mobileOpen ? "bg-forest opacity-0" : "bg-charcoal"}`} />
            <span className={`block w-6 h-0.5 transition-all duration-300 ${mobileOpen ? "bg-forest -rotate-45 -translate-y-2" : "bg-charcoal"}`} />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-30 bg-white overflow-y-auto pt-28 pb-12 px-6"
          >
            <div className="flex flex-col gap-2 max-w-md mx-auto">
              <Link href="/" onClick={closeMobile} className="text-lg font-serif font-bold text-forest py-3 border-b border-sand">Home</Link>
              <Link href="/about" onClick={closeMobile} className="text-lg font-serif font-bold text-forest py-3 border-b border-sand">About</Link>

              {[
                { label: "Property Care", key: "pc", items: propertyCare },
                { label: "Landscape", key: "ls", items: landscape },
                { label: "Outdoor Living", key: "ol", items: outdoorLiving },
              ].map((group) => (
                <div key={group.key} className="border-b border-sand">
                  <button
                    onClick={() => setMobileExpanded(mobileExpanded === group.key ? null : group.key)}
                    className="flex items-center justify-between w-full text-lg font-serif font-bold text-forest py-3 bg-transparent border-none cursor-pointer"
                  >
                    {group.label}
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={`transition-transform duration-200 ${mobileExpanded === group.key ? "rotate-180" : ""}`}>
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </button>
                  <AnimatePresence>
                    {mobileExpanded === group.key && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden pl-4 pb-2"
                      >
                        {group.items.map((item) => (
                          <Link key={item.href} href={item.href} onClick={closeMobile} className="block py-2.5 text-sm font-medium text-charcoal/70 hover:text-forest transition-colors">
                            {item.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              <Link href="/contact" onClick={closeMobile} className="text-lg font-serif font-bold text-forest py-3">Contact Us</Link>

              <Link
                href="/contact"
                onClick={closeMobile}
                className="mt-6 w-full text-center py-4 bg-forest text-white text-sm font-bold uppercase tracking-[2px] rounded-sm"
              >
                Request Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
