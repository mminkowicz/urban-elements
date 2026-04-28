"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const areas = [
  {
    name: "Druid Hills",
    desc: "Historic homes and established landscapes deserve expert care and thoughtful design.",
  },
  {
    name: "Morningside",
    desc: "Beautiful tree-lined streets paired with premium landscape maintenance and installation.",
  },
  {
    name: "Virginia Highlands",
    desc: "Vibrant neighborhoods with unique outdoor spaces that reflect character and style.",
  },
  {
    name: "Poncey-Highland",
    desc: "Creative and eclectic properties maintained to the highest professional standards.",
  },
  {
    name: "Brookhaven",
    desc: "Modern residences and classic estates with landscapes built to impress.",
  },
  {
    name: "Tucker",
    desc: "Growing communities served with reliable, consistent landscape care.",
  },
  {
    name: "Chamblee",
    desc: "Diverse properties enhanced through quality design and dependable maintenance.",
  },
  {
    name: "Avondale Estates",
    desc: "Charming neighborhoods with outdoor spaces that deserve precision and attention.",
  },
  {
    name: "Decatur",
    desc: "A community we're proud to serve with integrity-driven landscaping services.",
  },
];

function AreaCard({
  area,
  index,
}: {
  area: (typeof areas)[number];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="bg-white rounded-xl p-8 shadow-sm border border-primary/5 hover:shadow-md hover:border-accent/20 transition-all duration-300"
    >
      <div className="flex items-center gap-3 mb-4">
        <span className="w-2 h-2 rounded-full bg-accent shrink-0" />
        <h3 className="font-serif text-xl font-bold">{area.name}</h3>
      </div>
      <p className="text-sm leading-relaxed text-primary/55">{area.desc}</p>
    </motion.div>
  );
}

export default function ServiceAreaPage() {
  return (
    <>
      <Navigation />

      {/* Hero */}
      <section className="relative bg-primary text-white pt-40 pb-20 lg:pt-48 lg:pb-28">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-15" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-16 text-center">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="block text-gold text-xs font-bold uppercase tracking-[4px] mb-6"
          >
            Service Coverage
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.15] mb-6"
          >
            Areas We Serve
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg lg:text-xl text-white/65 max-w-2xl mx-auto leading-relaxed"
          >
            Urban Elements Atlanta proudly provides services throughout the
            Atlanta area
          </motion.p>
        </div>
      </section>

      {/* Area grid */}
      <section className="py-24 lg:py-32 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {areas.map((area, i) => (
              <AreaCard key={area.name} area={area} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-accent text-white text-center">
        <div className="max-w-3xl mx-auto px-6 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-3xl lg:text-4xl font-bold mb-6">
              Serving Your Neighborhood
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-10">
              Don&apos;t see your area listed? Contact us — we may still be able
              to serve your property.
            </p>
            <Link
              href="/contact"
              className="inline-block px-10 py-5 bg-white text-primary text-xs font-bold uppercase tracking-[3px] hover:bg-gold hover:text-white transition-all duration-300 rounded-sm"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
