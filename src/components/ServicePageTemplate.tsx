"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

interface ServiceSection {
  heading: string;
  content?: string;
  bullets?: string[];
}

interface ServicePageProps {
  badge: string;
  title: string;
  intro: string;
  sections: ServiceSection[];
  ctaHeading: string;
  ctaText: string;
  ctaButton: string;
}

export default function ServicePageTemplate({
  badge,
  title,
  intro,
  sections,
  ctaHeading,
  ctaText,
  ctaButton,
}: ServicePageProps) {
  return (
    <main className="pt-28">
      {/* Hero banner */}
      <section className="relative text-white py-32 lg:py-48 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1621944190310-e3cca1564bd7?q=80&w=2000&auto=format&fit=crop"
            alt={title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-16 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="block text-gold text-xs font-bold uppercase tracking-[4px] mb-5"
          >
            {badge}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.15] mb-6"
          >
            {title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-sans text-base lg:text-lg leading-relaxed text-white/80 max-w-2xl mx-auto"
          >
            {intro}
          </motion.p>
        </div>
      </section>

      {/* Content sections */}
      <div className="bg-sand text-charcoal py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-6 lg:px-16 space-y-16">
          {sections.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-serif text-2xl lg:text-3xl font-bold mb-5">{s.heading}</h2>
              {s.content && (
                <p className="font-sans text-base leading-[1.8] text-charcoal/80 mb-4">{s.content}</p>
              )}
              {s.bullets && s.bullets.length > 0 && (
                <ul className="space-y-3 mt-4">
                  {s.bullets.map((b, j) => (
                    <li key={j} className="flex items-start gap-3 font-sans text-sm leading-[1.7] text-charcoal/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <section className="bg-forest text-white py-20 lg:py-28 relative overflow-hidden">
        {/* Subtle background gradient or pattern could go here if desired, using deep green for now as requested */}
        <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-16 text-center">
          <h2 className="font-serif text-gold text-2xl sm:text-3xl lg:text-4xl font-bold mb-5">{ctaHeading}</h2>
          <p className="font-sans text-base leading-relaxed text-white/80 mb-10">{ctaText}</p>
          <Link
            href="/contact"
            className="inline-block px-10 py-5 bg-gold hover:bg-[#b8963e] text-forest font-bold uppercase tracking-[2px] rounded-sm transition-colors duration-300"
          >
            {ctaButton}
          </Link>
        </div>
      </section>
    </main>
  );
}
