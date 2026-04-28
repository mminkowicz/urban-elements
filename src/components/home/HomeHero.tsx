"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function HomeHero() {
  return (
    <section className="bg-dark text-white pt-32 pb-20 lg:pt-44 lg:pb-28">
      <div className="max-w-4xl mx-auto px-6 lg:px-16 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-accent text-[11px] font-bold uppercase tracking-[3px] mb-6"
        >
          Urban Elements Atlanta
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.2] mb-6"
        >
          Professional Landscaping for Atlanta Homeowners
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="text-white/60 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto mb-4"
        >
          Thoughtful design, reliable maintenance, and clean installations — delivered with care, consistency, and attention to detail.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.45 }}
          className="text-white/35 text-[11px] uppercase tracking-[2px] mb-10"
        >
          Licensed &amp; Insured &bull; Owner-Operated &bull; Serving Atlanta &amp; Surrounding Areas
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <Link href="/contact" className="px-7 py-3 bg-accent text-white text-[11px] font-bold uppercase tracking-[2px] rounded hover:bg-accent/85 transition-colors">
            Schedule a Free Consultation
          </Link>
          <Link href="#services" className="px-7 py-3 text-white/60 text-[11px] font-bold uppercase tracking-[2px] border border-white/15 rounded hover:text-white hover:border-white/30 transition-colors">
            View Our Services
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
