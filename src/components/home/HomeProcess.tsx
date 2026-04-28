"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

const steps = [
  { num: "1", title: "Consultation", desc: "We begin with a consultation to understand your property, goals, and priorities." },
  { num: "2", title: "Clear Plan", desc: "You receive a clear plan and straightforward pricing with full transparency." },
  { num: "3", title: "Professional Execution", desc: "Work is completed professionally, efficiently, and with careful attention to detail." },
  { num: "4", title: "Ongoing Care", desc: "We remain available for ongoing maintenance, improvements, and long-term care." },
];

export default function HomeProcess() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-white">
      <div className="max-w-5xl mx-auto px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="text-accent text-[11px] font-bold uppercase tracking-[3px] mb-3">Our Process</p>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold">How It Works</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <span className="block text-accent font-serif text-4xl font-bold mb-4">{s.num}</span>
              <h3 className="text-sm font-bold mb-2">{s.title}</h3>
              <p className="text-sm text-primary/50 leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="mt-12"
        >
          <Link href="/contact" className="inline-block px-7 py-3 bg-accent text-white text-[11px] font-bold uppercase tracking-[2px] rounded hover:bg-accent/85 transition-colors">
            Get Started Today
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
