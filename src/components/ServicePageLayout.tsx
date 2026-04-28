"use client";

import { motion } from "framer-motion";
import Link from "next/link";

type Section = {
  heading: string;
  body: string | string[];
  list?: string[];
};

type Props = {
  label: string;
  title: string;
  intro: string;
  sections: Section[];
  cta?: { label: string; href: string };
};

export default function ServicePageLayout({ label, title, intro, sections, cta }: Props) {
  return (
    <main className="pt-32 pb-28 lg:pb-40">
      <div className="max-w-4xl mx-auto px-6 lg:px-16">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-16">
          <span className="block text-accent text-xs font-bold uppercase tracking-[4px] mb-4">{label}</span>
          <h1 className="font-serif text-4xl lg:text-5xl font-bold leading-[1.15] mb-6">{title}</h1>
          <p className="text-lg leading-relaxed text-primary/60">{intro}</p>
        </motion.div>

        {/* Content sections */}
        {sections.map((s, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 + i * 0.05 }} className="mb-14">
            <h2 className="font-serif text-2xl lg:text-3xl font-bold mb-4">{s.heading}</h2>
            {typeof s.body === "string" ? (
              <p className="text-base leading-[1.8] text-primary/60">{s.body}</p>
            ) : (
              s.body.map((p, j) => (
                <p key={j} className="text-base leading-[1.8] text-primary/60 mb-4">{p}</p>
              ))
            )}
            {s.list && (
              <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2">
                {s.list.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-primary/55 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0 mt-2" />
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </motion.div>
        ))}

        {/* CTA */}
        {cta && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} className="mt-16 pt-12 border-t border-primary/10 text-center">
            <h3 className="font-serif text-2xl font-bold mb-4">{cta.label}</h3>
            <Link href={cta.href} className="inline-block px-10 py-4 bg-accent text-white text-xs font-bold uppercase tracking-[3px] hover:bg-primary transition-colors rounded-sm">
              Schedule a Consultation
            </Link>
          </motion.div>
        )}
      </div>
    </main>
  );
}
