"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 mt-4 bg-white rounded-xl shadow-xl border border-black/5 py-3 min-w-[240px] z-50"
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

  const closeMobile = () => {
    setMobileOpen(false);
    setMobileExpanded(null);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        className="fixed z-50 top-0 left-0 w-full flex items-center justify-between px-6 lg:px-12 py-4 bg-white border-b border-black/5 transition-all duration-300"
      >
        <Link href="/" className="font-serif text-lg font-black tracking-wider text-primary shrink-0">
          URBAN <span className="italic font-normal text-accent">ELEMENTS</span>
        </Link>

        {/* Desktop */}
        <div className="hidden xl:flex items-center gap-8">
          <Link href="/" className="text-[11px] font-bold uppercase tracking-[2px] text-primary hover:text-accent transition-colors">Home</Link>
          <Link href="/about" className="text-[11px] font-bold uppercase tracking-[2px] text-primary hover:text-accent transition-colors">About</Link>
          <Dropdown label="Property Care" items={propertyCare} open={openDrop === "pc"} onToggle={() => setOpenDrop(openDrop === "pc" ? null : "pc")} onClose={() => setOpenDrop(null)} />
          <Dropdown label="Landscape" items={landscape} open={openDrop === "ls"} onToggle={() => setOpenDrop(openDrop === "ls" ? null : "ls")} onClose={() => setOpenDrop(null)} />
          <Dropdown label="Outdoor Living" items={outdoorLiving} open={openDrop === "ol"} onToggle={() => setOpenDrop(openDrop === "ol" ? null : "ol")} onClose={() => setOpenDrop(null)} />
          <Link href="/contact" className="text-[11px] font-bold uppercase tracking-[2px] text-primary hover:text-accent transition-colors">Contact</Link>
          <Link href="/contact" className="inline-block px-5 py-2 bg-accent text-white text-[11px] font-bold uppercase tracking-[2px] hover:bg-accent/85 transition-colors rounded">
            Free Consultation
          </Link>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="xl:hidden flex flex-col gap-1.5 p-2 bg-transparent border-none cursor-pointer relative z-[60]"
          aria-label="Menu"
        >
          <span className={`block w-6 h-0.5 bg-primary transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-primary transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-primary transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-cream overflow-y-auto pt-24 pb-12 px-8"
          >
            <div className="flex flex-col gap-4 max-w-md mx-auto">
              <Link href="/" onClick={closeMobile} className="text-lg font-bold text-primary py-2">Home</Link>
              <Link href="/about" onClick={closeMobile} className="text-lg font-bold text-primary py-2">About</Link>

              {[
                { label: "Property Care", key: "pc", items: propertyCare },
                { label: "Landscape", key: "ls", items: landscape },
                { label: "Outdoor Living", key: "ol", items: outdoorLiving },
              ].map((group) => (
                <div key={group.key}>
                  <button
                    onClick={() => setMobileExpanded(mobileExpanded === group.key ? null : group.key)}
                    className="flex items-center justify-between w-full text-lg font-bold text-primary py-2 bg-transparent border-none cursor-pointer"
                  >
                    {group.label}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={`transition-transform duration-200 ${mobileExpanded === group.key ? "rotate-180" : ""}`}>
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </button>
                  <AnimatePresence>
                    {mobileExpanded === group.key && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden pl-4"
                      >
                        {group.items.map((item) => (
                          <Link key={item.href} href={item.href} onClick={closeMobile} className="block py-2 text-sm text-primary/60 hover:text-accent transition-colors">
                            {item.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              <Link href="/contact" onClick={closeMobile} className="text-lg font-bold text-primary py-2">Contact Us</Link>

              <Link
                href="/contact"
                onClick={closeMobile}
                className="mt-4 w-full text-center py-4 bg-primary text-white text-sm font-bold uppercase tracking-[3px] rounded-sm"
              >
                Free Consultation
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
