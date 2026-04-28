"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const areas = [
  "Druid Hills",
  "Morningside",
  "Poncey-Highland",
  "Virginia Highlands",
  "Brookhaven",
  "Tucker",
  "Chamblee",
  "Avondale Estates",
  "Decatur",
];

export default function HomeAreas() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-24 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16 lg:mb-20"
        >
          <span className="block text-accent text-xs font-bold uppercase tracking-[4px] mb-5">
            Service Areas
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold">
            Proudly Serving the Atlanta Area
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-6 max-w-3xl mx-auto"
        >
          {areas.map((area) => (
            <div key={area} className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-gold shrink-0" />
              <span className="text-base font-medium text-primary/80">
                {area}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
