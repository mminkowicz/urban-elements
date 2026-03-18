"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    num: "01",
    title: "Consult",
    desc: "Tell us about your property and vision. We'll visit your space, listen to your goals, and provide a clear, honest assessment.",
  },
  {
    num: "02",
    title: "Design",
    desc: "We create a tailored plan for your landscape — thoughtful, practical, and designed to thrive in Atlanta's climate.",
  },
  {
    num: "03",
    title: "Enjoy",
    desc: "We handle the installation and ongoing care. You relax and enjoy a property that looks its absolute best, year-round.",
  },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-28 lg:py-40 bg-muted">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16 lg:mb-24"
        >
          <span className="block text-accent text-xs font-bold uppercase tracking-[4px] mb-5">
            How It Works
          </span>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold mb-6">
            Getting started is simple.
          </h2>
          <p className="text-base leading-relaxed text-primary/55">
            From the first conversation to ongoing care, we make the process
            easy and transparent every step of the way.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-16">
          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.12 }}
              className="relative bg-white rounded-2xl p-10 lg:p-12 shadow-sm"
            >
              <span className="block font-serif text-6xl lg:text-7xl font-bold text-accent/15 mb-6 leading-none">
                {s.num}
              </span>
              <h3 className="font-serif text-2xl font-bold mb-4">{s.title}</h3>
              <p className="text-sm leading-[1.8] text-primary/55">{s.desc}</p>

              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-6 lg:-right-8 -translate-y-1/2 text-accent/30 text-2xl">
                  →
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <a
            href="#contact"
            className="inline-block px-10 py-5 bg-accent text-white text-xs font-bold uppercase tracking-[3px] hover:bg-primary transition-colors duration-300"
          >
            Get Started Today
          </a>
        </motion.div>
      </div>
    </section>
  );
}
