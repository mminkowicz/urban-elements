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
    <div className="absolute bottom-0 left-0 w-full z-20 bg-green-dark/80 backdrop-blur-sm overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap py-3">
        {items.map((loc, i) => (
          <span key={i} className="inline-flex items-center gap-2 mx-5 text-[10px] font-semibold uppercase tracking-[2px] text-white/50">
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
    <header className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=2000"
        alt="Professional landscaping by Urban Elements Atlanta"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-green-dark/80 via-primary/50 to-green-dark/70" />

      <div className="relative z-10 text-white px-6 max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20 py-32">
        {/* Left text */}
        <div className="flex-1 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full px-4 py-1.5 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-[2px] text-white/80">Licensed &amp; Insured</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.4rem] font-bold leading-[1.15] mb-6"
          >
            Professional Landscaping for{" "}
            <span className="text-gold">Atlanta</span> Homeowners
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="text-sm sm:text-base leading-relaxed text-white/70 max-w-lg mb-8 mx-auto lg:mx-0"
          >
            Thoughtful design, reliable maintenance, and clean installations — delivered with care, consistency, and attention to detail.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center gap-3 justify-center lg:justify-start"
          >
            <Link
              href="/contact"
              className="px-7 py-3.5 bg-accent text-white text-[11px] font-bold uppercase tracking-[2px] rounded-lg hover:bg-accent/90 transition-colors shadow-lg shadow-accent/25"
            >
              Free Consultation
            </Link>
            <Link
              href="/about"
              className="px-7 py-3.5 text-white text-[11px] font-bold uppercase tracking-[2px] border border-white/30 rounded-lg hover:bg-white/10 transition-colors"
            >
              Learn More
            </Link>
          </motion.div>
        </div>

        {/* Right stats card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="hidden lg:block w-[300px] shrink-0"
        >
          <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-8 space-y-6">
            {[
              { num: "200+", label: "Projects Completed" },
              { num: "5.0★", label: "Average Rating" },
              { num: "2021", label: "Established" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <p className="font-serif text-3xl font-bold text-gold mb-1">{s.num}</p>
                <p className="text-[10px] uppercase tracking-[2px] text-white/50">{s.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <Marquee />
    </header>
  );
}
