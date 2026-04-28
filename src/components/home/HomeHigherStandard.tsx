"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  {
    label: "Owner-Operated",
    desc: "Every project is personally overseen to ensure the highest quality and accountability.",
  },
  {
    label: "Referral-Driven",
    desc: "Our business is built on trust — most clients come from word-of-mouth recommendations.",
  },
  {
    label: "Licensed & Insured",
    desc: "Fully licensed and insured for your peace of mind on every job we take on.",
  },
];

export default function HomeHigherStandard() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-24 lg:py-36 bg-[#151716]">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center mb-16 lg:mb-20"
        >
          <span className="block text-accent text-xs font-bold uppercase tracking-[4px] mb-5">
            Why Urban Elements
          </span>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-white mb-4">
            Landscaping That&apos;s Built to Last
          </h2>
          <p className="text-lg text-white/50 mb-8">
            Not Just Look Good on Day One
          </p>
          <p className="text-base leading-relaxed text-white/60 mb-6">
            We don&apos;t cut corners. Every service we provide — from routine
            maintenance to full-scale installations — is executed with premium
            materials, proper techniques, and a commitment to long-term results.
            Your landscape should look better with time, not worse.
          </p>
          <p className="text-base leading-relaxed text-white/60">
            As an owner-operated company, we bring a level of care and
            accountability that larger outfits simply can&apos;t match. You
            won&apos;t deal with revolving crews or inconsistent quality. When
            you work with Urban Elements, you work directly with the person who
            stands behind every detail.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.12 }}
              className="text-center px-6 py-10"
            >
              <div className="w-12 h-1 bg-accent mx-auto mb-6 rounded-full" />
              <h3 className="font-serif text-xl font-bold text-white mb-3">
                {s.label}
              </h3>
              <p className="text-sm leading-[1.8] text-white/50">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
