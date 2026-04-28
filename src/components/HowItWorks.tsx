"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

const steps = [
  {
    num: "01",
    title: "Consultation",
    desc: "We begin by understanding your property, goals, and priorities.",
  },
  {
    num: "02",
    title: "Clear Plan",
    desc: "You receive a clear plan and straightforward pricing with full transparency.",
  },
  {
    num: "03",
    title: "Professional Execution",
    desc: "Work is completed professionally, efficiently, and with careful attention to detail.",
  },
  {
    num: "04",
    title: "Ongoing Care",
    desc: "We remain available for ongoing maintenance, improvements, and long-term care.",
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
            Our Process
          </span>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold mb-6">
            How We Work
          </h2>
          <p className="text-base leading-relaxed text-primary/55">
            From the first conversation to ongoing care, we make the process
            easy and transparent every step of the way.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
              className="relative bg-white rounded-2xl p-8 lg:p-10 shadow-sm"
            >
              <span className="block font-serif text-5xl lg:text-6xl font-bold text-accent/15 mb-5 leading-none">
                {s.num}
              </span>
              <h3 className="font-serif text-xl font-bold mb-3">{s.title}</h3>
              <p className="text-sm leading-[1.8] text-primary/55">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <Link href="/contact" className="inline-block px-10 py-5 bg-accent text-white text-xs font-bold uppercase tracking-[3px] hover:bg-primary transition-colors duration-300">
            Get Started Today
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
