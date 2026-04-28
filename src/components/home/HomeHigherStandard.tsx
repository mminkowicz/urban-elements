"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const bullets = [
  { label: "Owner-Operated", desc: "Every project is personally overseen to ensure the highest quality and accountability." },
  { label: "Referral-Driven", desc: "Our business is built on trust — most clients come from word-of-mouth recommendations." },
  { label: "Licensed & Insured", desc: "Fully licensed and insured for your peace of mind on every job we take on." },
];

export default function HomeHigherStandard() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
          >
            <span className="block text-gold text-[11px] font-bold uppercase tracking-[3px] mb-4">Why Choose Us?</span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-forest mb-4">
              Landscaping That&apos;s Built to Last
            </h2>
            <p className="font-serif text-xl text-forest/70 italic mb-8">Not Just Look Good on Day One</p>

            <div className="space-y-6 mb-10 text-charcoal/70 leading-relaxed text-[15px]">
              <p>
                We understand homeowners have many options when choosing a landscaping company. Urban Elements Atlanta is built on professionalism, accountability, and long-term relationships.
              </p>
              <p>
                As an owner-operated company, every property receives personal attention and consistent oversight. We don&apos;t cut corners. Every service we provide is executed with premium materials and a commitment to long-term results.
              </p>
            </div>

            <div className="space-y-8">
              {bullets.map((b) => (
                <div key={b.label} className="flex gap-5">
                  <div className="w-12 h-12 rounded-full bg-sand flex items-center justify-center shrink-0 border border-forest/10">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-forest">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-forest mb-2">{b.label}</h3>
                    <p className="text-sm text-charcoal/60 leading-relaxed">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Images (Overlapping style for premium feel) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[500px] lg:h-[700px] hidden md:block"
          >
            <div className="absolute top-0 right-0 w-[80%] h-[80%] rounded-2xl overflow-hidden shadow-2xl">
              <Image 
                src="https://images.unsplash.com/photo-1598902108854-d1446c06fe1a?q=80&w=1200&auto=format&fit=crop" 
                alt="Luxury outdoor living" 
                fill 
                className="object-cover"
              />
            </div>
            <div className="absolute bottom-0 left-0 w-[60%] h-[50%] rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
              <Image 
                src="https://images.unsplash.com/photo-1558905619-1714249d975c?q=80&w=800&auto=format&fit=crop" 
                alt="Professional landscaping installation" 
                fill 
                className="object-cover"
              />
            </div>
            {/* Gold accent dot pattern or shape could go here */}
            <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gold/10 rounded-full blur-2xl -z-10" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
