"use client";

import { motion } from "framer-motion";

const steps = [
  { num: "01", title: "Consultation", desc: "We begin with a consultation to understand your property, goals, and priorities." },
  { num: "02", title: "Clear Plan", desc: "You receive a clear plan and straightforward pricing with full transparency." },
  { num: "03", title: "Professional Execution", desc: "Work is completed professionally, efficiently, and with careful attention to detail." },
  { num: "04", title: "Ongoing Care", desc: "We remain available for ongoing maintenance, improvements, and long-term care." },
];

export default function HomeProcess() {
  return (
    <section className="py-24 lg:py-32 bg-forest text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="block text-gold text-[11px] font-bold uppercase tracking-[4px] mb-4">Our Process</span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6">How It Works</h2>
          <p className="text-white/60 text-base leading-relaxed">
            From the first conversation to ongoing care, we make the process easy and transparent every step of the way.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-[28px] left-[10%] right-[10%] h-[1px] bg-white/10" />

          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative text-center"
            >
              <div className="w-14 h-14 mx-auto bg-forest-light border border-white/10 rounded-full flex items-center justify-center text-gold font-serif text-xl font-bold mb-8 relative z-10">
                {s.num}
              </div>
              <h3 className="text-lg font-bold mb-4">{s.title}</h3>
              <p className="text-sm text-white/50 leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
