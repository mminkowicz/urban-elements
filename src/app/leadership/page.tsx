"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const stats = [
  { value: "200+", label: "Projects Completed" },
  { value: "5★", label: "Client Rating" },
  { value: "2021", label: "Founded" },
];

export default function LeadershipPage() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <>
      <Navigation />

      <main className="pt-32 pb-28 lg:pt-40 lg:pb-40">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 lg:mb-24"
          >
            <span className="block text-accent text-xs font-bold uppercase tracking-[4px] mb-4">
              Leadership
            </span>
            <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold">
              Meet Oron, Owner &amp; Operator
            </h1>
          </motion.div>

          {/* Content grid */}
          <div
            ref={ref}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start"
          >
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-xl"
            >
              <Image
                src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?auto=format&fit=crop&q=80&w=1200"
                alt="Oron — Owner and Operator of Urban Elements Atlanta"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </motion.div>

            {/* Bio */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <h2 className="font-serif text-2xl lg:text-3xl font-bold mb-6">
                A Passion for the Outdoors
              </h2>
              <div className="space-y-5 text-base leading-[1.9] text-primary/60">
                <p>
                  Urban Elements Atlanta is led by its founder, Oron, who
                  remains fully hands-on in the day-to-day operations of the
                  company. With a background influenced by agriculture,
                  construction, and design, Oron developed a strong work ethic
                  and deep understanding of outdoor environments from a young
                  age.
                </p>
                <p>
                  Working alongside his father taught him the discipline of hard
                  work, attention to detail, and the importance of finding
                  practical solutions.
                </p>
                <p>
                  After completing his Army service, Oron founded Urban Elements
                  Atlanta in 2021 with a vision to create a landscaping company
                  built on integrity, craftsmanship, and personal
                  accountability. Today, he continues to work directly on
                  projects, ensuring every property meets the company&apos;s
                  high standards.
                </p>
                <p>
                  His passion for landscaping comes from a genuine appreciation
                  for the outdoors and the satisfaction of transforming and
                  maintaining beautiful spaces.
                </p>
                <p>
                  Outside of work, Oron enjoys spending time outdoors with his
                  wife, daughter, and dog, and staying active through a wide
                  range of sports involving anything with a ball, racket, or
                  club.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 pt-10 border-t border-primary/10">
                {stats.map((s) => (
                  <div key={s.label} className="text-center">
                    <span className="block font-serif text-3xl lg:text-4xl font-bold text-accent">
                      {s.value}
                    </span>
                    <span className="block text-[11px] font-bold uppercase tracking-[1.5px] text-primary/45 mt-2">
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-12">
                <Link
                  href="/contact"
                  className="inline-block px-10 py-4 bg-primary text-white text-xs font-bold uppercase tracking-[3px] hover:bg-accent transition-colors rounded-sm"
                >
                  Work With Us
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
