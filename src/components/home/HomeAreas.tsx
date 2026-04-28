"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const areas = [
  "Druid Hills", "Morningside", "Poncey-Highland",
  "Virginia Highlands", "Brookhaven", "Tucker",
  "Chamblee", "Avondale Estates", "Decatur",
];

export default function HomeAreas() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="py-24 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="bg-primary rounded-3xl p-10 md:p-16 lg:p-20 text-white text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <span className="inline-block bg-accent/20 text-accent text-[11px] font-bold uppercase tracking-[3px] px-4 py-1.5 rounded-full mb-5">
              Service Areas
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold">
              Proudly Serving the Atlanta Area
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto"
          >
            {areas.map((a, i) => (
              <motion.span
                key={a}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.2 + i * 0.05 }}
                className="inline-flex items-center gap-2 bg-white/8 border border-white/10 rounded-full px-5 py-2.5 text-xs font-semibold uppercase tracking-[1.5px] text-white/70 hover:bg-accent/20 hover:text-white hover:border-accent/30 transition-colors cursor-default"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                {a}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
