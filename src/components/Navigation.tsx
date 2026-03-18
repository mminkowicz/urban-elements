"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "Philosophy", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Leadership", href: "#leadership" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        className={[
          "fixed z-50 flex items-center justify-between backdrop-blur-xl",
          "transition-all duration-500",
          scrolled
            ? "top-0 left-0 w-full rounded-none px-8 lg:px-16 py-4 bg-white/95 shadow-sm border-b border-black/5"
            : "top-5 left-[3%] w-[94%] rounded-full px-8 lg:px-12 py-4 bg-white/80 shadow-lg border border-white/40",
        ].join(" ")}
      >
        <a href="#" className="font-serif text-xl font-black tracking-wider text-primary">
          URBAN <span className="italic font-normal text-accent">ELEMENTS</span>
        </a>

        <ul className="hidden lg:flex items-center gap-10 list-none m-0 p-0">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-xs font-bold uppercase tracking-[2px] text-primary hover:text-accent transition-colors">
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#contact" className="inline-block px-5 py-2 bg-primary text-white text-[11px] font-bold uppercase tracking-[2px] hover:bg-accent transition-colors rounded-sm">
              Get Started
            </a>
          </li>
        </ul>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden flex flex-col gap-1.5 p-2 bg-transparent border-none cursor-pointer relative z-[60]"
          aria-label="Menu"
        >
          <span className={`block w-6 h-0.5 bg-primary transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-primary transition-all duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-primary transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-cream flex flex-col items-center justify-center gap-10"
          >
            {links.map((l, i) => (
              <motion.a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="font-serif text-3xl font-bold text-primary"
              >
                {l.label}
              </motion.a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-4 px-10 py-4 bg-primary text-white text-sm font-bold uppercase tracking-[3px]"
            >
              Get Started
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
