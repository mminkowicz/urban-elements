"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

const steps = [
  { num: "01", title: "Consultation", desc: "We begin with a consultation to understand your property, goals, and priorities." },
  { num: "02", title: "Clear Plan", desc: "You receive a clear plan and straightforward pricing with full transparency." },
  { num: "03", title: "Professional Execution", desc: "Work is completed professionally, efficiently, and with careful attention to detail." },
  { num: "04", title: "Ongoing Care", desc: "We remain available for ongoing maintenance, improvements, and long-term care." },
];

export default function HomeProcess() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="py-24 lg:py-36 bg-accent-light">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="inline-block bg-accent/10 text-accent text-[11px] font-bold uppercase tracking-[3px] px-4 py-1.5 rounded-full mb-5">
            Our Process
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
            How It Works
          </h2>
          <p className="text-sm leading-relaxed text-primary/50">
            From the first conversation to ongoing care, we make the process easy and transparent every step of the way.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting line — desktop only */}
          <div className="hidden lg:block absolute top-[52px] left-[calc(12.5%+20px)] right-[calc(12.5%+20px)] h-[2px] bg-accent/20" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <motion.div
                key={s.num}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                className="relative text-center"
              >
                {/* Number circle */}
                <div className="w-[44px] h-[44px] rounded-full bg-accent text-white text-sm font-bold flex items-center justify-center mx-auto mb-6 relative z-10 shadow-lg shadow-accent/20">
                  {s.num}
                </div>
                <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm">
                  <h3 className="font-serif text-lg font-bold mb-3">{s.title}</h3>
                  <p className="text-sm leading-relaxed text-primary/50">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-accent text-white text-[11px] font-bold uppercase tracking-[2.5px] rounded-lg hover:bg-accent/90 transition-colors shadow-lg shadow-accent/20"
          >
            Get Started Today
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
