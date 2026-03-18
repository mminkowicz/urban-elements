"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const reviews = [
  {
    quote:
      "Urban Elements transformed our backyard into something we never thought was possible. Oron's attention to detail is unmatched — every edge, every plant, perfectly placed.",
    name: "Sarah & David M.",
    area: "Druid Hills",
  },
  {
    quote:
      "We've used several landscaping companies over the years. Urban Elements is the first one where the owner actually shows up, listens, and delivers exactly what he promises.",
    name: "James T.",
    area: "Morningside",
  },
  {
    quote:
      "Reliable, professional, and genuinely passionate about what they do. Our property has never looked better. We recommend them to everyone in the neighborhood.",
    name: "The Nguyen Family",
    area: "Virginia Highlands",
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-28 lg:py-40 bg-[#f4f7f2]">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16 lg:mb-20"
        >
          <span className="block text-accent text-xs font-bold uppercase tracking-[4px] mb-5">
            Testimonials
          </span>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold">
            What Our Clients Say
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
              className="bg-white rounded-2xl p-10 lg:p-12 shadow-sm flex flex-col"
            >
              <span className="font-serif text-5xl text-accent/20 leading-none mb-4">&ldquo;</span>
              <p className="text-sm leading-[1.8] text-primary/65 flex-1 mb-8">
                {r.quote}
              </p>
              <div>
                <p className="text-sm font-bold">{r.name}</p>
                <p className="text-xs text-primary/40 mt-1">{r.area}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
