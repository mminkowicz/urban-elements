"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function HomeHero() {
  return (
    <section className="relative w-full h-[90vh] min-h-[600px] flex items-center overflow-hidden">
      {/* High-end background image */}
      <Image
        src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2000&auto=format&fit=crop"
        alt="Luxury landscaping by Urban Elements Atlanta"
        fill
        priority
        className="object-cover"
      />
      
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-16 pt-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6 text-shadow-sm">
              Top-Rated Landscaping <br/><span className="text-gold">Atlanta, GA</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-white/90 text-base md:text-lg leading-relaxed mb-10 max-w-2xl text-shadow-sm"
          >
            Urban Elements Atlanta provides premium landscape maintenance, design, and installation services for homeowners who value professionalism, reliability, and long-term quality.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="/contact"
              className="inline-flex justify-center items-center px-8 py-4 bg-forest hover:bg-forest-light text-white text-[13px] font-bold uppercase tracking-[2px] transition-colors rounded-sm"
            >
              Request a Quote
            </Link>
            <Link
              href="#services"
              className="inline-flex justify-center items-center px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white text-[13px] font-bold uppercase tracking-[2px] hover:bg-white hover:text-forest transition-colors rounded-sm"
            >
              Explore Services
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
