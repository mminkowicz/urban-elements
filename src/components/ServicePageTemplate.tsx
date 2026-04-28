"use client";

import { motion } from "framer-motion";
import Link from "next/link";

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
      <section className="bg-primary text-white py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-6 lg:px-16 text-center">
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
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.15] mb-6"
          >
            {title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base lg:text-lg leading-relaxed text-white/60 max-w-2xl mx-auto"
          >
            {intro}
          </motion.p>
        </div>
      </section>

      {/* Content sections */}
      <div className="max-w-4xl mx-auto px-6 lg:px-16 py-20 lg:py-28 space-y-16">
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
              <p className="text-base leading-[1.8] text-primary/65 mb-4">{s.content}</p>
            )}
            {s.bullets && s.bullets.length > 0 && (
              <ul className="space-y-2 mt-4">
                {s.bullets.map((b, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm leading-[1.7] text-primary/60">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
            )}
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <section className="bg-muted py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-6 lg:px-16 text-center">
          <h2 className="font-serif text-3xl lg:text-4xl font-bold mb-5">{ctaHeading}</h2>
          <p className="text-base leading-relaxed text-primary/55 mb-10">{ctaText}</p>
          <Link
            href="/contact"
            className="inline-block px-10 py-5 bg-accent text-white text-xs font-bold uppercase tracking-[3px] hover:bg-primary transition-colors duration-300"
          >
            {ctaButton}
          </Link>
        </div>
      </section>
    </main>
  );
}
