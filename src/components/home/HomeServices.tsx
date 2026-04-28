"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Landscape Maintenance",
    desc: "Consistent, detail-focused maintenance that keeps your property clean, healthy, and looking its best year-round.",
    img: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&q=80&w=600",
    href: "/services/recurring-maintenance",
  },
  {
    title: "Landscape Design",
    desc: "Thoughtful designs tailored to your property, goals, and long-term vision.",
    img: "https://images.unsplash.com/photo-1463936575829-25148e1db1b8?auto=format&fit=crop&q=80&w=600",
    href: "/services/landscape-design",
  },
  {
    title: "Landscape Installation",
    desc: "Professional installation of plants, sod, mulch, and landscape improvements using proper techniques and quality materials.",
    img: "https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&q=80&w=600",
    href: "/services/landscape-installation",
  },
  {
    title: "Seasonal Enhancements",
    desc: "Seasonal cleanups, mulch and pine straw installation, and landscape enhancements to keep your property looking its best.",
    img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=600",
    href: "/services/seasonal-cleanups",
  },
];

export default function HomeServices() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="services" ref={ref} className="py-24 lg:py-36 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="inline-block bg-accent-light text-accent text-[11px] font-bold uppercase tracking-[3px] px-4 py-1.5 rounded-full mb-5">
            Our Services
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
            Professional Landscaping Solutions
          </h2>
          <p className="text-sm leading-relaxed text-primary/50">
            From routine maintenance to full landscape transformations, we deliver premium results with a hands-on approach.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link href={s.href} className="group block relative h-[380px] rounded-2xl overflow-hidden">
                <Image src={s.img} alt={s.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-serif text-xl font-bold text-white mb-2">{s.title}</h3>
                  <p className="text-xs text-white/70 leading-relaxed mb-3 line-clamp-2">{s.desc}</p>
                  <span className="inline-flex items-center gap-1.5 text-gold text-[11px] font-bold uppercase tracking-[1.5px] group-hover:gap-2.5 transition-all duration-300">
                    Learn More <span className="text-sm">→</span>
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
