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
    <section ref={ref} className="py-20 lg:py-28 bg-muted">
      <div className="max-w-5xl mx-auto px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <p className="text-accent text-[11px] font-bold uppercase tracking-[3px] mb-3">Service Areas</p>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold">Proudly Serving the Atlanta Area</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-3"
        >
          {areas.map((a) => (
            <div key={a} className="flex items-center gap-3 py-2 border-b border-primary/5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
              <span className="text-sm text-primary/70">{a}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
