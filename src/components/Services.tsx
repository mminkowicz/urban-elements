"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    title: "Landscape Maintenance",
    desc: "Consistent, detail-focused maintenance that keeps your property clean, healthy, and looking its best year-round.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a10 10 0 1 0 10 10" /><path d="M12 12V2" /><path d="M12 12l7-7" />
      </svg>
    ),
  },
  {
    title: "Landscape Design",
    desc: "Thoughtful designs tailored to your property, goals, and long-term vision.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7S2 12 2 12z" /><circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    title: "Landscape Installation",
    desc: "Professional installation of plants, sod, mulch, and landscape improvements using proper techniques and quality materials.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22V8" /><path d="M5 12H2a10 10 0 0 0 20 0h-3" /><path d="M8 5.2C9.2 3.7 10.5 3 12 3c1.5 0 2.8.7 4 2.2" />
      </svg>
    ),
  },
  {
    title: "Seasonal Enhancements",
    desc: "Seasonal cleanups, mulch and pine straw installation, and landscape enhancements to keep your property looking its best.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3v1m0 16v1m8.66-13.5l-.87.5M4.21 16l-.87.5M20.66 16l-.87-.5M4.21 8l-.87-.5M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0z" />
      </svg>
    ),
  },
];

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" ref={ref} className="py-28 lg:py-40 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16 lg:mb-20"
        >
          <span className="block text-accent text-xs font-bold uppercase tracking-[4px] mb-5">
            Our Services
          </span>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold mb-6">
            Professional Landscaping Solutions
          </h2>
          <p className="text-base leading-relaxed text-primary/55">
            From routine maintenance to full landscape transformations, we
            deliver premium results with a hands-on approach.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative bg-cream rounded-2xl p-8 lg:p-10 border border-transparent hover:border-accent/20 hover:shadow-lg transition-all duration-500"
            >
              <div className="absolute top-0 left-8 w-12 h-1 bg-accent rounded-b-full" />

              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-8 group-hover:bg-accent group-hover:text-white transition-colors duration-500">
                {s.icon}
              </div>

              <h3 className="font-serif text-xl font-bold mb-4">{s.title}</h3>
              <p className="text-sm leading-[1.8] text-primary/55 mb-6">{s.desc}</p>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-accent font-bold text-xs uppercase tracking-[1.5px] group-hover:gap-3 transition-all duration-300"
              >
                Learn More <span className="text-lg leading-none">→</span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
