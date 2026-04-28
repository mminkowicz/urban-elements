"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

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

const highlights = [
  {
    title: "Fewer Jobs, Better Results",
    text: "Rather than chasing volume, we focus on doing fewer jobs — but doing them exceptionally well. More time, attention, and care for each property.",
  },
  {
    title: "Direct Access to the Owner",
    text: "Our clients work directly with a knowledgeable professional who is personally invested in the outcome. Better communication, greater accountability.",
  },
  {
    title: "Grown Through Trust",
    text: "We grow primarily through referrals and long-term customer relationships — not overspending on advertising. Our reputation speaks for itself.",
  },
  {
    title: "Consistently Superior Results",
    text: "With a reputation for professionalism and excellence, you can have full confidence in the quality of our services and our commitment to your interests.",
  },
];

const pillars = [
  {
    icon: "★",
    title: "Passion in Every Detail",
    text: "We genuinely love the work we do, and that passion is reflected in the care and attention we bring to every property.",
  },
  {
    icon: "◆",
    title: "Transparency & Communication",
    text: "Our clients can expect transparency, responsiveness, and professionalism at every stage. Communication is key.",
  },
  {
    icon: "●",
    title: "Long-Term Partnerships",
    text: "Our success is measured by the trust we earn and the lasting partnerships we build — not just one-time projects.",
  },
];

const timeline = [
  { year: "Early Years", text: "Grew up working alongside his father, learning discipline, attention to detail, and practical problem-solving in agriculture and construction." },
  { year: "Army Service", text: "Completed military service, strengthening his work ethic and leadership skills." },
  { year: "2021", text: "Founded Urban Elements Atlanta with a vision built on integrity, craftsmanship, and personal accountability." },
  { year: "Today", text: "Continues to work directly on projects, ensuring every property meets the company's high standards." },
];

const areas = [
  "Druid Hills", "Morningside", "Poncey-Highland",
  "Virginia Highlands", "Brookhaven", "Tucker",
  "Chamblee", "Avondale Estates", "Decatur",
];

function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay }} className={className}>
      {children}
    </motion.div>
  );
}

export default function AboutPage() {
  return (
    <main className="bg-sand text-charcoal">
      <Navigation />
      
      {/* 1. Hero */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <Image src="https://images.unsplash.com/photo-1598902108854-d1446c06fe1a?q=80&w=2000&auto=format&fit=crop" alt="About Urban Elements" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-20">
          <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="block text-gold text-[11px] font-bold uppercase tracking-[4px] mb-5">
            About Us
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.15] mb-6">
            A Higher Standard in Landscape Design, Installation, and Maintenance
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-white/80 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            Founded on a simple principle: do exceptional work, operate with integrity, and build lasting relationships through consistency and trust.
          </motion.p>
        </div>
      </section>

      {/* 2. Intro */}
      <section className="py-24 lg:py-32 max-w-7xl mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <FadeIn>
            <span className="block text-gold text-[11px] font-bold uppercase tracking-[3px] mb-4">About Urban Elements</span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-forest mb-6">Built on Professionalism and Trust</h2>
            <div className="space-y-5 text-charcoal/70 leading-relaxed text-[15px]">
              <p>Urban Elements Atlanta was founded on a simple principle: do exceptional work, operate with integrity, and build lasting relationships through consistency and trust.</p>
              <p>We are a licensed and insured landscaping company proudly serving the Atlanta area, specializing in premium landscape maintenance, design, and installation services.</p>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="relative h-[400px] sm:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image src="https://images.unsplash.com/photo-1558904541-efa843a96f01?q=80&w=1200&auto=format&fit=crop" alt="Premium landscaping" fill className="object-cover" />
              <div className="absolute -bottom-1 -left-1 bg-gold text-forest p-6 sm:p-8 rounded-tr-2xl">
                <p className="font-serif text-3xl sm:text-4xl font-bold leading-none mb-1">2021</p>
                <p className="text-[10px] uppercase tracking-[2px] font-bold">Established In Atlanta</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 3. U.R.B.A.N. Values */}
      <section className="bg-forest text-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-20 lg:mb-24">
              <span className="block text-gold text-[11px] font-bold uppercase tracking-[3px] mb-5">Our Guiding Principles</span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6">The <span className="text-gold">U.R.B.A.N.</span> Standard</h2>
              <p className="text-[15px] leading-relaxed text-white/60">Our work is guided by a set of principles that define everything we do — from the first consultation to the final walkthrough.</p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12 lg:gap-8">
            {values.map((v, i) => (
              <FadeIn key={v.letter} delay={i * 0.1}>
                <span className="block font-serif text-[5rem] lg:text-[6rem] leading-none text-gold/15 mb-6">{v.letter}</span>
                <h4 className="text-[13px] font-bold uppercase tracking-[1px] mb-3">{v.title}</h4>
                <p className="text-[14px] leading-[1.8] text-white/50">{v.desc}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Mission */}
      <section className="bg-stone py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="block text-gold text-[11px] font-bold uppercase tracking-[3px] mb-5">Our Mission</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-forest mb-6">Exceptional work. Full accountability. <span className="text-gold">Lasting relationships.</span></h2>
              <p className="text-[15px] text-charcoal/70 leading-relaxed">Our mission is to provide exceptional landscaping services rooted in accountability, integrity, and clear communication. We take full ownership of our work and stand behind everything we do.</p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((p, i) => (
              <FadeIn key={p.title} delay={0.1 * i}>
                <div className="bg-white rounded-xl p-8 shadow-sm h-full border border-forest/5">
                  <span className="flex items-center justify-center w-12 h-12 rounded-full bg-forest/5 text-forest text-xl mb-6">{p.icon}</span>
                  <h3 className="font-serif text-xl font-bold mb-3 text-forest">{p.title}</h3>
                  <p className="text-sm leading-[1.8] text-charcoal/60">{p.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 5. What Sets Us Apart */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <div className="relative h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-xl">
                <Image src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?q=80&w=1200&auto=format&fit=crop" alt="Precision work" fill className="object-cover" />
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <span className="block text-gold text-[11px] font-bold uppercase tracking-[3px] mb-4">What Sets Us Apart</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-forest mb-6">An efficient, quality-focused approach.</h2>
              <p className="text-[15px] text-charcoal/70 leading-relaxed mb-10">
                We understand that customers have many options when choosing a landscaping company. What sets Urban Elements Atlanta apart is our efficient, quality-focused business model and hands-on approach.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {highlights.map((h, i) => (
                  <div key={i}>
                    <div className="w-8 h-[2px] bg-gold mb-4" />
                    <h4 className="text-[14px] font-bold mb-2 text-forest">{h.title}</h4>
                    <p className="text-[13px] leading-[1.7] text-charcoal/60">{h.text}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 6. Licensed & Environment */}
      <section className="bg-forest text-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <FadeIn>
            <div className="bg-forest-light p-10 lg:p-14 rounded-2xl h-full border border-white/5">
              <span className="text-gold text-[10px] font-bold uppercase tracking-[3px] mb-4 block">Peace of Mind</span>
              <h3 className="font-serif text-2xl md:text-3xl font-bold mb-4">Licensed, Insured, and Professional</h3>
              <p className="text-[15px] leading-relaxed text-white/70">
                Urban Elements Atlanta is fully licensed and insured, providing peace of mind and protection for every property we service. We operate with professionalism, respect, and adherence to proper horticultural and installation practices.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="bg-forest-light p-10 lg:p-14 rounded-2xl h-full border border-white/5">
              <span className="text-gold text-[10px] font-bold uppercase tracking-[3px] mb-4 block">Sustainability</span>
              <h3 className="font-serif text-2xl md:text-3xl font-bold mb-4">Care for the Environment</h3>
              <p className="text-[15px] leading-relaxed text-white/70">
                We believe in responsible landscaping practices that promote long-term plant health and environmental sustainability. From proper planting techniques to thoughtful maintenance practices, we focus on creating landscapes that thrive naturally and remain healthy over time.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 7. Service Areas */}
      <section className="py-24 lg:py-32">
        <div className="max-w-5xl mx-auto px-6 lg:px-16 text-center">
          <FadeIn>
            <span className="block text-gold text-[11px] font-bold uppercase tracking-[3px] mb-4">Service Areas</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-forest mb-10">Proudly Serving the Atlanta Area</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {areas.map((a, i) => (
                <span key={a} className="inline-flex items-center gap-2 bg-white border border-forest/10 rounded-full px-5 py-2.5 text-[11px] font-bold uppercase tracking-[1.5px] text-forest">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                  {a}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 8. Leadership */}
      <section className="bg-stone py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center mb-20">
            <FadeIn className="lg:col-span-5 order-2 lg:order-1">
              <span className="block text-gold text-[11px] font-bold uppercase tracking-[3px] mb-4">Leadership</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-forest mb-2">Meet Oron</h2>
              <p className="font-serif text-lg text-gold italic mb-6">Owner &amp; Operator</p>
              <div className="space-y-4 text-[15px] text-charcoal/70 leading-relaxed mb-8">
                <p>Urban Elements Atlanta is led by its founder, Oron, who remains fully hands-on in the day-to-day operations of the company.</p>
                <p>With a background influenced by agriculture, construction, and design, Oron developed a strong work ethic and deep understanding of outdoor environments from a young age.</p>
                <p>His passion for landscaping comes from a genuine appreciation for the outdoors and the satisfaction of transforming and maintaining beautiful spaces.</p>
              </div>
              <div className="flex gap-10">
                <div>
                  <p className="font-serif text-3xl font-bold text-forest mb-1">200+</p>
                  <p className="text-[10px] uppercase tracking-[2px] text-charcoal/50 font-bold">Projects</p>
                </div>
                <div>
                  <p className="font-serif text-3xl font-bold text-forest mb-1">5★</p>
                  <p className="text-[10px] uppercase tracking-[2px] text-charcoal/50 font-bold">Rating</p>
                </div>
                <div>
                  <p className="font-serif text-3xl font-bold text-forest mb-1">2021</p>
                  <p className="text-[10px] uppercase tracking-[2px] text-charcoal/50 font-bold">Founded</p>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.2} className="lg:col-span-7 order-1 lg:order-2">
              <div className="relative h-[400px] sm:h-[500px] rounded-2xl overflow-hidden shadow-xl">
                <Image src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?q=80&w=1200&auto=format&fit=crop" alt="Oron" fill className="object-cover sepia-[0.1]" />
              </div>
            </FadeIn>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <FadeIn>
              <h3 className="font-serif text-2xl font-bold text-forest mb-8">The Journey</h3>
              <div className="space-y-6">
                {timeline.map((t, i) => (
                  <div key={i} className="flex gap-5">
                    <div className="flex flex-col items-center">
                      <div className="w-2 h-2 rounded-full bg-gold mt-1.5" />
                      {i < timeline.length - 1 && <div className="w-px flex-1 bg-gold/30 mt-2" />}
                    </div>
                    <div className="pb-2">
                      <p className="text-[11px] font-bold uppercase tracking-[2px] text-forest mb-1">{t.year}</p>
                      <p className="text-[14px] text-charcoal/70 leading-[1.7]">{t.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="bg-white rounded-xl p-10 shadow-sm border border-forest/5">
                <h3 className="font-serif text-2xl font-bold text-forest mb-4">Beyond the Work</h3>
                <p className="text-[15px] text-charcoal/70 leading-[1.8] mb-4">
                  After completing his Army service, Oron founded Urban Elements Atlanta in 2021 with a vision to create a landscaping company built on integrity, craftsmanship, and personal accountability.
                </p>
                <p className="text-[15px] text-charcoal/70 leading-[1.8]">
                  Outside of work, Oron enjoys spending time outdoors with his wife, daughter, and dog, and staying active through a wide range of sports involving anything with a ball, racket, or club.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
