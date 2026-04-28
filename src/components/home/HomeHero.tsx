"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const locations = [
  "Druid Hills",
  "Morningside",
  "Virginia Highlands",
  "Poncey-Highland",
  "Brookhaven",
  "Tucker",
  "Chamblee",
  "Avondale Estates",
  "Decatur",
];

function Marquee() {
  const items = [...locations, ...locations, ...locations, ...locations];

  return (
    <div className="absolute bottom-0 left-0 w-full z-20 bg-[#1a1f1c]/70 backdrop-blur-sm border-t border-white/10 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap py-3.5">
        {items.map((loc, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-2.5 mx-5 text-[10px] font-semibold uppercase tracking-[2.5px] text-white/60"
          >
            <span className="w-1 h-1 rounded-full bg-gold shrink-0" />
            {loc}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function HomeHero() {
  return (
    <header className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=2000"
        alt="Professional landscaping by Urban Elements Atlanta"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/55" />

      <div className="relative z-10 text-center text-white px-6 max-w-3xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[11px] uppercase tracking-[4px] mb-5 text-gold font-semibold"
        >
          Urban Elements Atlanta
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.2] mb-6"
        >
          Professional Landscaping for Atlanta Homeowners
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-sm sm:text-base leading-relaxed text-white/75 max-w-xl mx-auto mb-5"
        >
          Thoughtful design, reliable maintenance, and clean installations — delivered with care, consistency, and attention to detail.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-[10px] uppercase tracking-[2.5px] text-white/45 mb-10"
        >
          Licensed &amp; Insured &bull; Owner-Operated &bull; Serving Atlanta &amp; Surrounding Areas
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <Link
            href="/contact"
            className="px-8 py-3.5 bg-white text-primary text-[11px] font-bold uppercase tracking-[2px] border border-transparent hover:bg-transparent hover:text-white hover:border-white/70 transition-all duration-400"
          >
            Free Consultation
          </Link>
          <Link
            href="/about"
            className="px-8 py-3.5 text-white text-[11px] font-bold uppercase tracking-[2px] border border-white/40 hover:bg-white hover:text-primary transition-all duration-400"
          >
            Learn More
          </Link>
        </motion.div>
      </div>

      <Marquee />
    </header>
  );
}
