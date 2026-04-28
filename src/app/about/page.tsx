"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const urbanValues = [
  {
    letter: "U",
    title: "Understanding Your Vision",
    desc: "Every property and homeowner is different. We take the time to understand your goals, preferences, and the unique characteristics of your outdoor space. From the first conversation to the final walkthrough, our approach is tailored specifically to you.",
  },
  {
    letter: "R",
    title: "Reliable, Consistent Service",
    desc: "Dependability is the foundation of trust. We show up on schedule, communicate clearly, and deliver consistent, high-quality results every single time. Our clients know they can count on us — season after season.",
  },
  {
    letter: "B",
    title: "Built on Integrity",
    desc: "We believe in doing things the right way — never cutting corners, always using proper techniques, and taking full accountability for every project. Our craftsmanship reflects a commitment to excellence that speaks for itself.",
  },
  {
    letter: "A",
    title: "Attention to Every Detail",
    desc: "The small details separate an average landscape from an exceptional one. We take pride in precision, cleanliness, and thoughtful execution — because the details are what make the difference.",
  },
  {
    letter: "N",
    title: "Never Settling for Average",
    desc: "We constantly strive to improve, refine our processes, and exceed expectations on every property we service. Average is not in our vocabulary — we hold ourselves to a higher standard.",
  },
];

const missionCards = [
  {
    icon: "♥",
    title: "Passion",
    desc: "We genuinely love the work we do, and that passion is reflected in the care and attention we bring to every property.",
  },
  {
    icon: "◎",
    title: "Transparency",
    desc: "Our clients can expect clear communication, honest pricing, and professionalism at every stage of the process.",
  },
  {
    icon: "∞",
    title: "Long-Term Partnerships",
    desc: "Our success is measured by the trust we earn and the lasting relationships we build with our clients.",
  },
];

const highlights = [
  {
    title: "Fewer Jobs, Better Results",
    desc: "We focus on doing fewer jobs — but doing them exceptionally well, dedicating more time and care to each property.",
  },
  {
    title: "Direct Access to the Owner",
    desc: "Our clients work directly with a knowledgeable professional who is personally invested in the outcome.",
  },
  {
    title: "Grown Through Trust",
    desc: "Rather than chasing volume, we grow primarily through referrals and long-term customer relationships.",
  },
  {
    title: "Superior Results",
    desc: "Better communication, greater accountability, and consistently superior results on every project.",
  },
];

const serviceAreas = [
  "Druid Hills",
  "Morningside",
  "Virginia Highlands",
  "Poncey-Highland",
  "Brookhaven",
  "Tucker",
  "Chamblee",
  "Avondale Estates",
  "Decatur",
];

const stats = [
  { value: "200+", label: "Projects Completed" },
  { value: "5★", label: "Client Rating" },
  { value: "2021", label: "Founded" },
];

const timeline = [
  {
    year: "Early Years",
    text: "Working alongside his father, Oron developed a strong work ethic, attention to detail, and a deep understanding of outdoor environments.",
  },
  {
    year: "Army Service",
    text: "Oron's military service reinforced discipline, leadership, and the importance of finding practical solutions under pressure.",
  },
  {
    year: "2021",
    text: "Founded Urban Elements Atlanta with a vision to create a landscaping company built on integrity, craftsmanship, and personal accountability.",
  },
  {
    year: "Today",
    text: "Oron continues to work directly on projects, ensuring every property meets the company's high standards of quality and care.",
  },
];

function FadeIn({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function AboutPage() {
  return (
    <>
      <Navigation />

      {/* A) Hero Banner */}
      <section className="relative bg-primary text-white pt-40 pb-24 lg:pt-48 lg:pb-36">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-20" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-16 text-center">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block text-gold text-xs font-bold uppercase tracking-[4px] mb-6 border border-gold/30 px-4 py-1.5 rounded-full"
          >
            About Us
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.15] mb-6"
          >
            A Higher Standard in Landscape Design, Installation, and Maintenance
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg lg:text-xl text-white/65 max-w-2xl mx-auto leading-relaxed"
          >
            Founded on integrity, built on craftsmanship, and driven by a
            genuine passion for transforming outdoor spaces.
          </motion.p>
        </div>
      </section>

      {/* B) About Intro — Two Column */}
      <section className="py-24 lg:py-36 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <FadeIn>
              <span className="block text-accent text-xs font-bold uppercase tracking-[4px] mb-4">
                Our Story
              </span>
              <h2 className="font-serif text-3xl lg:text-4xl font-bold mb-8">
                Founded on Principle
              </h2>
              <div className="space-y-5 text-base lg:text-[17px] leading-[1.9] text-primary/60">
                <p>
                  Urban Elements Atlanta was founded on a simple principle: do
                  exceptional work, operate with integrity, and build lasting
                  relationships through consistency and trust.
                </p>
                <p>
                  We are a licensed and insured landscaping company proudly
                  serving the Atlanta area, specializing in premium landscape
                  maintenance, design, and installation services. Every project
                  we take on reflects our commitment to quality and our genuine
                  love for the work we do.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.15}>
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85f82e?auto=format&fit=crop&q=80&w=1200"
                  alt="Urban Elements Atlanta landscaping work"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-lg px-5 py-3 shadow-lg">
                  <span className="block text-accent text-2xl font-serif font-bold">
                    2021
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-[2px] text-primary/60">
                    Established
                  </span>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* C) U.R.B.A.N. Values */}
      <section className="bg-[#151716] text-white py-28 lg:py-40">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <FadeIn className="text-center max-w-3xl mx-auto mb-20 lg:mb-28">
            <span className="block text-gold text-[11px] font-bold uppercase tracking-[3px] mb-5">
              Our Guiding Principles
            </span>
            <h2 className="font-serif text-4xl lg:text-5xl font-bold mb-6">
              The <span className="text-gold">U.R.B.A.N.</span> Standard
            </h2>
            <p className="text-[15px] leading-relaxed text-white/50 max-w-2xl mx-auto">
              Our work is guided by a set of principles that define everything
              we do — from the first consultation to the final walkthrough.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12 lg:gap-8">
            {urbanValues.map((v, i) => (
              <FadeIn key={v.letter} delay={i * 0.08}>
                <span className="block font-serif text-[4.5rem] md:text-[6rem] lg:text-[7rem] leading-none text-gold/15 mb-6">
                  {v.letter}
                </span>
                <h4 className="text-[13px] font-bold uppercase tracking-[1px] mb-4 leading-relaxed">
                  {v.title}
                </h4>
                <p className="text-[14px] leading-[1.8] text-white/45">
                  {v.desc}
                </p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* D) Mission */}
      <section className="py-24 lg:py-36 bg-muted">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <FadeIn className="text-center max-w-3xl mx-auto mb-16">
            <span className="block text-accent text-xs font-bold uppercase tracking-[4px] mb-4">
              Purpose
            </span>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold mb-8">
              Our Mission
            </h2>
            <p className="text-base lg:text-[17px] leading-[1.9] text-primary/60">
              Our mission is to provide exceptional landscaping services rooted
              in accountability, integrity, and clear communication. We take
              full ownership of our work and stand behind everything we do.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {missionCards.map((card, i) => (
              <FadeIn key={card.title} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-10 shadow-sm border border-primary/5 text-center h-full">
                  <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent/10 text-accent text-2xl mb-6">
                    {card.icon}
                  </span>
                  <h3 className="font-serif text-xl font-bold mb-3">
                    {card.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-primary/55">
                    {card.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* E) What Sets Us Apart */}
      <section className="py-24 lg:py-36 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <FadeIn>
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1200"
                  alt="Exceptional landscaping by Urban Elements Atlanta"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <span className="block text-accent text-xs font-bold uppercase tracking-[4px] mb-4">
                The Difference
              </span>
              <h2 className="font-serif text-3xl lg:text-4xl font-bold mb-6">
                What Sets Us Apart
              </h2>
              <p className="text-base leading-[1.9] text-primary/60 mb-10">
                We understand that customers have many options when choosing a
                landscaping company. What sets Urban Elements Atlanta apart is
                our efficient, quality-focused business model and hands-on
                approach.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {highlights.map((h, i) => (
                  <div key={i}>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="w-2 h-2 rounded-full bg-accent shrink-0" />
                      <h4 className="text-[13px] font-bold uppercase tracking-[1px]">
                        {h.title}
                      </h4>
                    </div>
                    <p className="text-sm leading-relaxed text-primary/55 pl-5">
                      {h.desc}
                    </p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* F) Licensed & Environment */}
      <section className="py-24 lg:py-36 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <FadeIn>
              <div className="bg-white rounded-2xl p-10 lg:p-14 shadow-sm border border-primary/5 h-full">
                <span className="block text-accent text-xs font-bold uppercase tracking-[4px] mb-4">
                  Professionalism
                </span>
                <h3 className="font-serif text-2xl lg:text-3xl font-bold mb-6">
                  Licensed, Insured &amp; Professional
                </h3>
                <p className="text-base leading-[1.9] text-primary/60">
                  Urban Elements Atlanta is fully licensed and insured, providing
                  peace of mind and protection for every property we service. We
                  operate with professionalism, respect, and adherence to proper
                  horticultural and installation practices.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="bg-[#151716] text-white rounded-2xl p-10 lg:p-14 h-full">
                <span className="block text-gold text-xs font-bold uppercase tracking-[4px] mb-4">
                  Sustainability
                </span>
                <h3 className="font-serif text-2xl lg:text-3xl font-bold mb-6">
                  Care for the Environment
                </h3>
                <div className="space-y-4 text-[15px] leading-[1.9] text-white/55">
                  <p>
                    We believe in responsible landscaping practices that promote
                    long-term plant health and environmental sustainability.
                    From proper planting techniques to thoughtful maintenance
                    practices, we focus on creating landscapes that thrive
                    naturally.
                  </p>
                  <p>
                    Our goal is not only to improve the appearance of your
                    property, but to contribute positively to the environment and
                    the community we serve.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* G) Service Areas */}
      <section className="py-24 lg:py-36 bg-muted">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <FadeIn className="text-center mb-14">
            <span className="block text-accent text-xs font-bold uppercase tracking-[4px] mb-4">
              Where We Work
            </span>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold">
              Service Areas
            </h2>
          </FadeIn>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {serviceAreas.map((area, i) => (
              <FadeIn key={area} delay={i * 0.04}>
                <div className="flex items-center gap-3 bg-white rounded-xl px-5 py-4 shadow-sm border border-primary/5">
                  <span className="w-2 h-2 rounded-full bg-gold shrink-0" />
                  <span className="text-sm font-semibold text-primary/80">
                    {area}
                  </span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* H) Leadership — Oron's Bio */}
      <section className="py-24 lg:py-36 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <FadeIn className="text-center mb-16 lg:mb-20">
            <span className="block text-accent text-xs font-bold uppercase tracking-[4px] mb-4">
              Leadership
            </span>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold">
              Meet Oron, Owner &amp; Operator
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <FadeIn>
              <h3 className="font-serif text-2xl lg:text-3xl font-bold mb-6">
                A Passion for the Outdoors
              </h3>
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
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-12 pt-10 border-t border-primary/10">
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
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?auto=format&fit=crop&q=80&w=1200"
                  alt="Oron — Owner and Operator of Urban Elements Atlanta"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
            </FadeIn>
          </div>

          {/* Timeline */}
          <FadeIn className="mt-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {timeline.map((item, i) => (
                <div
                  key={i}
                  className="relative bg-white rounded-xl p-8 shadow-sm border border-primary/5"
                >
                  <span className="block text-accent font-serif text-xl font-bold mb-3">
                    {item.year}
                  </span>
                  <p className="text-sm leading-relaxed text-primary/55">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Beyond the Work */}
          <FadeIn className="mt-12">
            <div className="bg-muted rounded-2xl p-10 lg:p-14">
              <h4 className="font-serif text-xl font-bold mb-4">
                Beyond the Work
              </h4>
              <p className="text-base leading-[1.9] text-primary/60 max-w-3xl">
                Outside of work, Oron enjoys spending time outdoors with his
                wife, daughter, and dog, and staying active through a wide range
                of sports involving anything with a ball, racket, or club. His
                passion for landscaping comes from a genuine appreciation for the
                outdoors and the satisfaction of transforming and maintaining
                beautiful spaces.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-36 bg-accent text-white text-center">
        <div className="max-w-3xl mx-auto px-6 lg:px-16">
          <FadeIn>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-10">
              Schedule a free consultation and discover how Urban Elements
              Atlanta can transform your outdoor space.
            </p>
            <Link
              href="/contact"
              className="inline-block px-10 py-5 bg-white text-primary text-xs font-bold uppercase tracking-[3px] hover:bg-gold hover:text-white transition-all duration-300 rounded-sm"
            >
              Schedule a Consultation
            </Link>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </>
  );
}
