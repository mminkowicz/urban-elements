"use client";

import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

const steps = [
  {
    num: "01",
    title: "Consultation",
    desc: "We begin with a consultation to understand your property, goals, and priorities.",
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

export default function HomeProcess() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-24 lg:py-36 bg-muted">
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
            How It Works
          </h2>
          <p className="text-base leading-relaxed text-primary/55">
            From the first conversation to ongoing care, we make the process
            easy and transparent every step of the way.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 mb-16">
          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.12 }}
              className="relative bg-white rounded-2xl p-10 shadow-sm"
            >
              <span className="block font-serif text-6xl lg:text-7xl font-bold text-accent/15 mb-6 leading-none">
                {s.num}
              </span>
              <h3 className="font-serif text-2xl font-bold mb-4">{s.title}</h3>
              <p className="text-sm leading-[1.8] text-primary/55">{s.desc}</p>

              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 -translate-y-1/2 text-accent/30 text-2xl">
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
          <Link
            href="/contact"
            className="inline-block px-10 py-5 bg-accent text-white text-xs font-bold uppercase tracking-[3px] hover:bg-primary transition-colors duration-300"
          >
            Get Started Today
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
