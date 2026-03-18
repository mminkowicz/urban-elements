"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const badges = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Licensed & Insured",
    text: "Fully licensed and insured — peace of mind for every property.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a10 10 0 1 0 10 10" /><path d="M12 12l7-7" /><path d="M12 12V2" />
      </svg>
    ),
    title: "Owner-Operated",
    text: "Work directly with a professional personally invested in the outcome.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7S2 12 2 12z" /><circle cx="12" cy="12" r="3" />
      </svg>
    ),
    title: "Environmental Care",
    text: "Responsible practices that promote long-term plant health and sustainability.",
  },
];

export default function Philosophy() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" ref={ref} className="py-28 lg:py-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        {/* Two-column intro */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-24 lg:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="order-2 lg:order-1"
          >
            <span className="block text-accent text-xs font-bold uppercase tracking-[4px] mb-5">
              About Urban Elements
            </span>
            <h2 className="font-serif text-4xl lg:text-5xl font-bold leading-[1.15] mb-8">
              A higher standard in landscape design, installation, and maintenance.
            </h2>
            <p className="text-lg font-light leading-relaxed text-primary/65 mb-6">
              Urban Elements Atlanta was founded on a simple principle: do
              exceptional work, operate with integrity, and build lasting
              relationships through consistency and trust.
            </p>
            <p className="text-base leading-relaxed text-primary/55 mb-6">
              As a small, owner-operated company, we focus on doing fewer
              jobs — but doing them exceptionally well. We grow primarily through
              referrals and long-term customer relationships, dedicating more
              time, attention, and care to each property.
            </p>
            <p className="text-base leading-relaxed text-primary/55">
              Our mission is to provide exceptional landscaping services rooted
              in accountability, integrity, and clear communication. We take full
              ownership of our work and stand behind everything we do.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative order-1 lg:order-2"
          >
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=1200"
                alt="Beautifully landscaped garden path by Urban Elements Atlanta"
                width={1200}
                height={800}
                className="w-full h-auto object-cover hover:scale-[1.03] transition-transform duration-[1.5s]"
              />
            </div>
            <div className="absolute -bottom-5 left-6 bg-gold text-white px-7 py-5 rounded-xl shadow-xl z-10">
              <p className="font-serif text-3xl font-bold leading-none">2021</p>
              <p className="text-[10px] uppercase tracking-[2px] mt-1 opacity-90 font-semibold">
                Established In Atlanta
              </p>
            </div>
          </motion.div>
        </div>

        {/* Three badge row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {badges.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              className="flex gap-5"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent shrink-0 mt-1">
                {b.icon}
              </div>
              <div>
                <h4 className="text-sm font-bold mb-1">{b.title}</h4>
                <p className="text-sm leading-relaxed text-primary/50">{b.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
