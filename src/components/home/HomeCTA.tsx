"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

export default function HomeCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="relative py-24 lg:py-36 overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=2000"
        alt="Beautiful Atlanta landscape"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-accent/90 to-green-dark/90" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-16 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">
            Ready to Improve Your Outdoor Space?
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-white/80 mb-10 max-w-xl mx-auto">
            Whether you need routine maintenance, a new landscape design, or a full installation — we&apos;re here to help create an outdoor space you&apos;ll love.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/contact"
              className="px-8 py-4 bg-white text-accent text-[11px] font-bold uppercase tracking-[2px] rounded-lg hover:bg-white/90 transition-colors shadow-lg"
            >
              Free Consultation
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 text-white text-[11px] font-bold uppercase tracking-[2px] border border-white/40 rounded-lg hover:bg-white/10 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
