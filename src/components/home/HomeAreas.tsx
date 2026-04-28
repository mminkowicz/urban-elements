"use client";

import { motion } from "framer-motion";

const areas = [
  "Druid Hills", "Morningside", "Poncey-Highland",
  "Virginia Highlands", "Brookhaven", "Tucker",
  "Chamblee", "Avondale Estates", "Decatur",
];

export default function HomeAreas() {
  return (
    <section className="py-24 lg:py-32 bg-stone">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="bg-forest rounded-3xl p-12 md:p-20 text-white text-center shadow-xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <span className="block text-gold text-[11px] font-bold uppercase tracking-[4px] mb-5">
              Service Areas
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold">
              Proudly Serving the Atlanta Area
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto"
          >
            {areas.map((a, i) => (
              <motion.span
                key={a}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.2 + i * 0.05 }}
                className="inline-flex items-center gap-2.5 bg-white/5 border border-white/10 rounded-full px-6 py-3 text-[11px] font-bold uppercase tracking-[1.5px] text-white/80 hover:bg-gold/20 hover:text-white hover:border-gold/30 transition-colors cursor-default"
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
