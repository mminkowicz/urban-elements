"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

export default function HomeCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-dark text-white">
      <div className="max-w-3xl mx-auto px-6 lg:px-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-serif text-2xl sm:text-3xl font-bold mb-5">
            Ready to Improve Your Outdoor Space?
          </h2>
          <p className="text-sm text-white/50 leading-relaxed mb-10 max-w-xl mx-auto">
            If you&apos;re looking for a professional landscaping company that values quality, reliability, and clear communication, we would be glad to learn more about your property and goals.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href="/contact" className="px-7 py-3 bg-accent text-white text-[11px] font-bold uppercase tracking-[2px] rounded hover:bg-accent/85 transition-colors">
              Schedule a Free Consultation
            </Link>
            <Link href="/contact" className="px-7 py-3 text-white/50 text-[11px] font-bold uppercase tracking-[2px] border border-white/15 rounded hover:text-white hover:border-white/30 transition-colors">
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
