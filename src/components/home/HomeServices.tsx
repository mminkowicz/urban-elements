"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

const services = [
  { title: "Landscape Maintenance", desc: "Consistent, detail-focused maintenance that keeps your property clean, healthy, and looking its best year-round.", href: "/services/recurring-maintenance" },
  { title: "Landscape Design", desc: "Thoughtful designs tailored to your property, goals, and long-term vision.", href: "/services/landscape-design" },
  { title: "Landscape Installation", desc: "Professional installation of plants, sod, mulch, and landscape improvements using proper techniques and quality materials.", href: "/services/landscape-installation" },
  { title: "Seasonal Enhancements", desc: "Seasonal cleanups, mulch and pine straw installation, and landscape enhancements to keep your property looking its best.", href: "/services/seasonal-cleanups" },
];

export default function HomeServices() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="services" ref={ref} className="py-20 lg:py-28 bg-white">
      <div className="max-w-5xl mx-auto px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="text-accent text-[11px] font-bold uppercase tracking-[3px] mb-3">Our Services</p>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold">What We Do</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <Link href={s.href} className="block border border-gray-100 rounded-lg p-7 hover:border-accent/30 hover:bg-accent-light/50 transition-all duration-300 group">
                <h3 className="text-base font-bold mb-2 group-hover:text-accent transition-colors">{s.title}</h3>
                <p className="text-sm text-primary/50 leading-relaxed">{s.desc}</p>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="mt-8"
        >
          <Link href="/services/recurring-maintenance" className="text-accent text-[12px] font-bold uppercase tracking-[2px] hover:underline">
            View All Services →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
