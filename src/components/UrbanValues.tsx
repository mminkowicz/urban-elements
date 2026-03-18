"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const values = [
  {
    letter: "U",
    title: "Understanding Your Vision",
    desc: "Every property and homeowner is different. We take the time to understand your goals and create solutions tailored specifically to your space.",
  },
  {
    letter: "R",
    title: "Reliable, Consistent Service",
    desc: "Dependability is the foundation of trust. We show up on schedule, communicate clearly, and deliver consistent, high-quality results.",
  },
  {
    letter: "B",
    title: "Built on Integrity",
    desc: "We believe in doing things the right way, never cutting corners, and taking full accountability for our work.",
  },
  {
    letter: "A",
    title: "Attention to Every Detail",
    desc: "The small details separate an average landscape from an exceptional one. We take pride in precision, cleanliness, and thoughtful execution.",
  },
  {
    letter: "N",
    title: "Never Settling for Average",
    desc: "We constantly strive to improve, refine our process, and exceed expectations on every property we service.",
  },
];

export default function UrbanValues() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-[#151716] text-white py-28 lg:py-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-20 lg:mb-32"
        >
          <span className="block text-[#c5a059] text-[11px] font-bold uppercase tracking-[3px] mb-5">
            Our Guiding Principles
          </span>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold mb-6">
            The <span className="text-[#c5a059]">U.R.B.A.N.</span> Standard
          </h2>
          <p className="text-[15px] leading-relaxed text-white/50 max-w-2xl mx-auto">
            Our work is guided by a set of principles that define everything we
            do — from the first consultation to the final walkthrough.
          </p>
        </motion.div>

        {/* Values grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12 lg:gap-8">
          {values.map((v, i) => (
            <motion.div
              key={v.letter}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col"
            >
              <span className="block font-serif text-[6rem] lg:text-[7rem] leading-none text-[#c5a059]/15 mb-6">
                {v.letter}
              </span>
              <h4 className="text-[13px] font-bold uppercase tracking-[1px] mb-4 leading-relaxed">
                {v.title}
              </h4>
              <p className="text-[14px] leading-[1.8] text-white/45">
                {v.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
