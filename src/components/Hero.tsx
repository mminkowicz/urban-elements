"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const locations = [
  "Druid Hills", "Morningside", "Virginia Highlands", "Poncey-Highland",
  "Brookhaven", "Tucker", "Chamblee", "Avondale Estates", "Decatur",
];

function Marquee() {
  const items = [...locations, ...locations, ...locations, ...locations];
  return (
    <div className="absolute bottom-0 left-0 w-full z-20 bg-black/40 backdrop-blur-md border-t border-white/10 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap py-4">
        {items.map((loc, i) => (
          <span key={i} className="inline-flex items-center gap-3 mx-6 text-[11px] sm:text-xs font-bold uppercase tracking-[3px] text-white/70">
            <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
            {loc}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <header className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=2000"
        alt="Professional landscaping by Urban Elements Atlanta"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a1f1c]/60 via-[#1a1f1c]/30 to-[#1a1f1c]/70" />

      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[11px] sm:text-xs uppercase tracking-[5px] mb-6 opacity-90 font-medium"
        >
          Licensed &amp; Insured &bull; Owner-Operated &bull; Serving Atlanta
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.12] mb-6"
        >
          Professional Landscaping for Atlanta Homeowners
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-sm sm:text-base leading-relaxed text-white/75 max-w-2xl mx-auto mb-10"
        >
          Thoughtful design, reliable maintenance, and clean installations — delivered with care, consistency, and attention to detail.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-white text-primary text-xs font-bold uppercase tracking-[3px] border-2 border-transparent hover:bg-transparent hover:text-white hover:border-white/80 transition-all duration-500"
          >
            Schedule a Free Consultation
          </Link>
          <Link
            href="#services"
            className="inline-block px-8 py-4 bg-transparent text-white text-xs font-bold uppercase tracking-[3px] border-2 border-white/40 hover:bg-white hover:text-primary transition-all duration-500"
          >
            View Our Services
          </Link>
        </motion.div>
      </div>

      <Marquee />
    </header>
  );
}
