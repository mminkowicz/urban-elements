"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function HomeCTA() {
  return (
    <section className="relative py-32 lg:py-48 overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1592424001807-6f81153bc073?q=80&w=2000&auto=format&fit=crop"
        alt="Beautiful Atlanta landscape"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-forest/85" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-16 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-shadow-sm">
            Ready to Improve Your Outdoor Space?
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-white/80 mb-10 max-w-2xl mx-auto text-shadow-sm">
            If you&apos;re looking for a professional landscaping company that values quality, reliability, and clear communication, we would be glad to learn more about your property and goals.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 bg-gold hover:bg-gold-light text-forest text-[12px] font-bold uppercase tracking-[2px] rounded-sm transition-colors shadow-lg"
            >
              Free Consultation
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 text-white text-[12px] font-bold uppercase tracking-[2px] border border-white/40 rounded-sm hover:bg-white hover:text-forest transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
