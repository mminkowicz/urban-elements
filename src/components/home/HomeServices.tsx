"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const services = [
  { 
    title: "Landscape Maintenance", 
    desc: "Consistent, detail-focused maintenance that keeps your property clean, healthy, and looking its best year-round.", 
    href: "/services/recurring-maintenance",
    img: "https://images.unsplash.com/photo-1592424001807-6f81153bc073?q=80&w=800&auto=format&fit=crop"
  },
  { 
    title: "Landscape Design", 
    desc: "Thoughtful designs tailored to your property, goals, and long-term vision.", 
    href: "/services/landscape-design",
    img: "https://images.unsplash.com/photo-1558904541-efa843a96f01?q=80&w=800&auto=format&fit=crop"
  },
  { 
    title: "Landscape Installation", 
    desc: "Professional installation of plants, sod, mulch, and landscape improvements using proper techniques and quality materials.", 
    href: "/services/landscape-installation",
    img: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?q=80&w=800&auto=format&fit=crop"
  },
  { 
    title: "Seasonal Enhancements", 
    desc: "Seasonal cleanups, mulch and pine straw installation, and landscape enhancements to keep your property looking its best.", 
    href: "/services/seasonal-cleanups",
    img: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?q=80&w=800&auto=format&fit=crop"
  },
];

export default function HomeServices() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-stone">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-forest mb-6">
            Atlanta&apos;s Premier Full-Service Landscaping Company
          </h2>
          <p className="text-charcoal/70 text-base leading-relaxed">
            Thoughtful design, reliable maintenance, and clean installations — delivered with care, consistency, and attention to detail.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group"
            >
              <Link href={s.href} className="block relative h-[420px] rounded-xl overflow-hidden shadow-lg">
                <Image 
                  src={s.img} 
                  alt={s.title} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                {/* Gradient overlay that darkens on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-forest/90 via-forest/40 to-transparent group-hover:from-forest group-hover:via-forest/60 transition-colors duration-500" />
                
                <div className="absolute bottom-0 left-0 right-0 p-8 flex flex-col h-full justify-end">
                  <h3 className="font-serif text-2xl font-bold text-white mb-3 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{s.title}</h3>
                  <p className="text-sm text-white/80 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 mb-4 line-clamp-3">
                    {s.desc}
                  </p>
                  <span className="text-gold text-[11px] font-bold uppercase tracking-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    More Information →
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
