"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function HomeHigherStandard() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-muted">
      <div className="max-w-5xl mx-auto px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-12"
        >
          <p className="text-accent text-[11px] font-bold uppercase tracking-[3px] mb-3">Why Urban Elements</p>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold mb-2">Landscaping That&apos;s Built to Last</h2>
          <p className="font-serif text-lg text-gold italic">Not Just Look Good on Day One</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-5"
          >
            <p className="text-sm leading-[1.9] text-primary/60">
              We don&apos;t cut corners. Every service we provide — from routine maintenance to full-scale installations — is executed with premium materials, proper techniques, and a commitment to long-term results. Your property deserves more than a quick fix.
            </p>
            <p className="text-sm leading-[1.9] text-primary/60">
              As an owner-operated company, we bring a level of care and accountability that larger outfits simply can&apos;t match. You won&apos;t deal with revolving crews or inconsistent quality. When you work with Urban Elements, you work with someone who is personally invested in every detail.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-5"
          >
            {[
              { label: "Owner-Operated", desc: "Every project is personally overseen to ensure the highest quality and accountability." },
              { label: "Referral-Driven", desc: "Our business is built on trust — most clients come from word-of-mouth recommendations." },
              { label: "Licensed & Insured", desc: "Fully licensed and insured for your peace of mind on every job we take on." },
            ].map((s, i) => (
              <div key={s.label} className="flex gap-4">
                <span className="w-6 h-6 rounded-full bg-accent text-white flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">✓</span>
                <div>
                  <p className="text-sm font-bold mb-0.5">{s.label}</p>
                  <p className="text-sm text-primary/50 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
