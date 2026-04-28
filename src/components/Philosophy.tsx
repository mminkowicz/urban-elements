"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

export default function Philosophy() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" ref={ref} className="py-28 lg:py-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="block text-accent text-xs font-bold uppercase tracking-[4px] mb-5">
              About Us
            </span>
            <h2 className="font-serif text-4xl lg:text-5xl font-bold leading-[1.15] mb-8">
              Landscaping That&apos;s Built to Last
            </h2>
            <p className="text-base leading-relaxed text-primary/65 mb-5">
              Urban Elements Atlanta provides premium landscape maintenance, design,
              and installation services for homeowners who value professionalism,
              reliability, and long-term quality.
            </p>
            <p className="text-base leading-relaxed text-primary/55 mb-5">
              We help clients improve and maintain their outdoor spaces with a
              thoughtful approach that balances design, function, and long-term care.
              As a licensed and insured, owner-operated company, we provide clear
              communication, consistent service, and full accountability from start
              to finish.
            </p>
            <p className="text-base leading-relaxed text-primary/55 mb-8">
              Our business is built primarily through referrals and long-term clients,
              allowing us to focus on quality rather than volume.
            </p>
            <Link href="/about" className="inline-flex items-center gap-2 text-accent font-bold text-xs uppercase tracking-[2px] hover:gap-3 transition-all duration-300">
              Learn More About Us <span className="text-lg">→</span>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {[
              { title: "Owner-Operated", desc: "Every property receives personal attention and consistent oversight from the owner." },
              { title: "Licensed & Insured", desc: "Full protection and peace of mind for every property we service." },
              { title: "Referral-Driven", desc: "We grow through trust — most of our work comes from client referrals." },
              { title: "Long-Term Focus", desc: "We build lasting relationships, not just complete one-time projects." },
            ].map((item, i) => (
              <div key={item.title} className="bg-white rounded-xl p-7 shadow-sm">
                <div className="w-8 h-1 bg-accent rounded-full mb-5" />
                <h3 className="text-sm font-bold mb-2">{item.title}</h3>
                <p className="text-sm leading-relaxed text-primary/50">{item.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
