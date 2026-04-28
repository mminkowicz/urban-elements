"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const stats = [
  { label: "Owner-Operated", desc: "Every project is personally overseen to ensure the highest quality and accountability." },
  { label: "Referral-Driven", desc: "Our business is built on trust — most clients come from word-of-mouth recommendations." },
  { label: "Licensed & Insured", desc: "Fully licensed and insured for your peace of mind on every job we take on." },
];

export default function HomeHigherStandard() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="relative py-24 lg:py-36 overflow-hidden">
      {/* Background image */}
      <Image
        src="https://images.unsplash.com/photo-1564429238961-bf8f8be8a3a2?auto=format&fit=crop&q=80&w=2000"
        alt="Landscaped property"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-green-dark/90" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block bg-accent/20 text-accent text-[11px] font-bold uppercase tracking-[3px] px-4 py-1.5 rounded-full mb-5">
              Why Urban Elements
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 leading-tight">
              Landscaping That&apos;s Built to Last
            </h2>
            <p className="text-gold font-serif text-lg italic mb-8">Not Just Look Good on Day One</p>
            <p className="text-sm leading-[1.8] text-white/60 mb-5">
              We don&apos;t cut corners. Every service we provide — from routine maintenance to full-scale installations — is executed with premium materials, proper techniques, and a commitment to long-term results. Your property deserves more than a quick fix.
            </p>
            <p className="text-sm leading-[1.8] text-white/60">
              As an owner-operated company, we bring a level of care and accountability that larger outfits simply can&apos;t match. You won&apos;t deal with revolving crews or inconsistent quality. When you work with Urban Elements, you work with someone who is personally invested in every detail.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="space-y-5"
          >
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center text-accent shrink-0 mt-0.5">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-sm mb-1">{s.label}</h3>
                    <p className="text-white/45 text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
