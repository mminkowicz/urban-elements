"use client";

import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

export default function HomeCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-24 lg:py-36 bg-accent">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-8">
            Ready to Improve Your Outdoor Space?
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-white/80 mb-12">
            Urban Elements is a professional landscaping company serving Atlanta
            and surrounding neighborhoods. Whether you need routine maintenance,
            a new landscape design, or a full installation — we&apos;re here to
            help.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-block px-10 py-5 bg-white text-primary text-xs font-bold uppercase tracking-[3px] hover:bg-primary hover:text-white transition-all duration-500"
            >
              Schedule a Free Consultation
            </Link>
            <Link
              href="/contact"
              className="inline-block px-10 py-5 bg-transparent text-white text-xs font-bold uppercase tracking-[3px] border-2 border-white/60 hover:bg-white hover:text-primary transition-all duration-500"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
