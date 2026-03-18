"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const timeline = [
  { year: "Early Years", text: "Grew up working alongside his father, learning discipline, attention to detail, and practical problem-solving in agriculture and construction." },
  { year: "Army Service", text: "Completed military service, strengthening his work ethic and leadership skills." },
  { year: "2021", text: "Founded Urban Elements Atlanta with a vision built on integrity, craftsmanship, and personal accountability." },
  { year: "Today", text: "Continues to work directly on projects, ensuring every property meets the company's high standards." },
];

export default function Leadership() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="leadership" ref={ref} className="bg-muted py-28 lg:py-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        {/* Top: Photo + Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center mb-24 lg:mb-32">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 order-2 lg:order-1"
          >
            <span className="block text-accent text-xs font-bold uppercase tracking-[4px] mb-5">
              Leadership
            </span>
            <h2 className="font-serif text-4xl lg:text-5xl font-bold leading-[1.15] mb-2">
              Meet Oron
            </h2>
            <p className="italic text-accent text-lg mb-8">Owner &amp; Operator</p>

            <p className="text-primary/65 leading-[1.8] text-base mb-5">
              Urban Elements Atlanta is led by its founder, Oron, who remains
              fully hands-on in the day-to-day operations of the company.
            </p>
            <p className="text-primary/55 leading-[1.8] text-base mb-5">
              With a background influenced by agriculture, construction, and
              design, Oron developed a strong work ethic and deep understanding
              of outdoor environments from a young age. Working alongside his
              father taught him the discipline of hard work, attention to detail,
              and the importance of finding practical solutions.
            </p>
            <p className="text-primary/55 leading-[1.8] text-base">
              His passion for landscaping comes from a genuine appreciation for
              the outdoors and the satisfaction of transforming and maintaining
              beautiful spaces.
            </p>

            <div className="flex gap-12 mt-10">
              <div>
                <p className="font-serif text-4xl font-bold leading-none mb-2">200+</p>
                <p className="text-[11px] uppercase tracking-[2px] text-primary/45 font-semibold">Projects Completed</p>
              </div>
              <div>
                <p className="font-serif text-4xl font-bold leading-none mb-2">5★</p>
                <p className="text-[11px] uppercase tracking-[2px] text-primary/45 font-semibold">Average Rating</p>
              </div>
              <div>
                <p className="font-serif text-4xl font-bold leading-none mb-2">2021</p>
                <p className="text-[11px] uppercase tracking-[2px] text-primary/45 font-semibold">Founded</p>
              </div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-7 order-1 lg:order-2"
          >
            <div className="rounded-2xl overflow-hidden shadow-xl relative">
              <Image
                src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?auto=format&fit=crop&q=80&w=1200"
                alt="Oron, Founder and Owner of Urban Elements Atlanta Landscaping"
                width={1200}
                height={800}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </motion.div>
        </div>

        {/* Bottom: Timeline + Personal */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25 }}
          >
            <h3 className="font-serif text-2xl font-bold mb-10">The Journey</h3>
            <div className="space-y-8">
              {timeline.map((t, i) => (
                <div key={i} className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full bg-gold shrink-0 mt-1" />
                    {i < timeline.length - 1 && <div className="w-px flex-1 bg-gold/20 mt-2" />}
                  </div>
                  <div className="pb-2">
                    <p className="text-xs font-bold uppercase tracking-[2px] text-gold mb-2">{t.year}</p>
                    <p className="text-sm leading-[1.7] text-primary/60">{t.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Personal side */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="bg-white rounded-2xl p-10 lg:p-14 shadow-sm h-fit"
          >
            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-6 text-lg">
              🏡
            </div>
            <h3 className="font-serif text-2xl font-bold mb-4">Beyond the Work</h3>
            <p className="text-base leading-[1.8] text-primary/55 mb-5">
              After completing his Army service, Oron founded Urban Elements
              Atlanta in 2021 with a vision to create a landscaping company built
              on integrity, craftsmanship, and personal accountability.
            </p>
            <p className="text-base leading-[1.8] text-primary/55">
              Outside of work, Oron enjoys spending time outdoors with his wife,
              daughter, and dog, and staying active through a wide range of sports
              involving anything with a ball, racket, or club.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
