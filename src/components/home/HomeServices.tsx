"use client";

import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

const services = [
  {
    title: "Landscape Maintenance",
    desc: "Consistent, detail-focused maintenance that keeps your property clean, healthy, and looking its best year-round.",
  },
  {
    title: "Landscape Design",
    desc: "Thoughtful designs tailored to your property, goals, and long-term vision.",
  },
  {
    title: "Landscape Installation",
    desc: "Professional installation of plants, sod, mulch, and landscape improvements using proper techniques and quality materials.",
  },
  {
    title: "Seasonal Enhancements",
    desc: "Seasonal cleanups, mulch and pine straw installation, and landscape enhancements to keep your property looking its best.",
  },
];

export default function HomeServices() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-24 lg:py-36 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16 lg:mb-20"
        >
          <span className="block text-accent text-xs font-bold uppercase tracking-[4px] mb-5">
            Our Services
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">
            Professional Landscaping Solutions
          </h2>
          <p className="text-base leading-relaxed text-primary/55">
            From routine maintenance to full landscape transformations, we
            deliver premium results with a hands-on approach.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative bg-white rounded-2xl p-8 border border-primary/10 hover:border-accent/20 hover:shadow-lg transition-all duration-500"
            >
              <div className="absolute top-0 left-8 w-12 h-1 bg-accent rounded-b-full" />

              <h3 className="font-serif text-xl font-bold mb-4 mt-4">
                {s.title}
              </h3>
              <p className="text-sm leading-[1.8] text-primary/55 mb-6">
                {s.desc}
              </p>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-accent font-bold text-xs uppercase tracking-[1.5px] group-hover:gap-3 transition-all duration-300"
              >
                Learn More <span className="text-lg leading-none">→</span>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16"
        >
          <Link
            href="/services/recurring-maintenance"
            className="inline-flex items-center gap-2 text-accent font-bold text-sm uppercase tracking-[2px] hover:gap-3 transition-all duration-300"
          >
            View All Services <span className="text-lg leading-none">→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
