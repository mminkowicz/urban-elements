"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
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
    title: "Built on Integrity & Craftsmanship",
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

      {/* Hero */}
      <section className="relative bg-primary text-white pt-40 pb-24 lg:pt-48 lg:pb-32">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-20" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-16 text-center">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="block text-gold text-xs font-bold uppercase tracking-[4px] mb-6"
          >
            Who We Are
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.15] mb-6"
          >
            About Urban Elements Atlanta
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg lg:text-xl text-white/65 max-w-2xl mx-auto leading-relaxed"
          >
            A higher standard in landscape design, installation, and maintenance
          </motion.p>
        </div>
      </section>

      {/* Founding Story */}
      <section className="py-24 lg:py-32 bg-cream">
        <div className="max-w-4xl mx-auto px-6 lg:px-16">
          <FadeIn>
            <span className="block text-accent text-xs font-bold uppercase tracking-[4px] mb-4">
              Our Story
            </span>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold mb-8">
              Founded on Principle
            </h2>
            <p className="text-base lg:text-lg leading-[1.9] text-primary/60">
              Urban Elements Atlanta was founded on a simple principle: do
              exceptional work, operate with integrity, and build lasting
              relationships through consistency and trust. We are a licensed and
              insured landscaping company proudly serving the Atlanta area,
              specializing in premium landscape maintenance, design, and
              installation services.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* U.R.B.A.N. Values */}
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

      {/* Our Mission */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-16">
          <FadeIn>
            <span className="block text-accent text-xs font-bold uppercase tracking-[4px] mb-4">
              Purpose
            </span>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold mb-8">
              Our Mission
            </h2>
            <div className="space-y-6 text-base lg:text-[17px] leading-[1.9] text-primary/60">
              <p>
                Our mission is to provide exceptional landscaping services
                rooted in accountability, integrity, and clear communication. We
                genuinely love the work we do, and that passion is reflected in
                the care and attention we bring to every property.
              </p>
              <p>
                We believe communication is key. Our clients can expect
                transparency, responsiveness, and professionalism at every
                stage. We take full ownership of our work and stand behind
                everything we do.
              </p>
              <p>
                We are committed to building long-term relationships — not just
                completing one-time projects. Our success is measured by the
                trust we earn and the lasting partnerships we build with our
                clients.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-24 lg:py-32 bg-muted">
        <div className="max-w-4xl mx-auto px-6 lg:px-16">
          <FadeIn>
            <span className="block text-accent text-xs font-bold uppercase tracking-[4px] mb-4">
              The Difference
            </span>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold mb-8">
              What Sets Us Apart
            </h2>
            <div className="space-y-6 text-base lg:text-[17px] leading-[1.9] text-primary/60">
              <p>
                We understand that customers have many options when choosing a
                landscaping company. What sets Urban Elements Atlanta apart is
                our efficient, quality-focused business model and hands-on
                approach.
              </p>
              <p>
                As a small, owner-operated company, we focus on doing fewer
                jobs — but doing them exceptionally well. Rather than
                overspending on advertising and chasing volume, we grow
                primarily through referrals and long-term customer
                relationships. This allows us to dedicate more time, attention,
                and care to each property.
              </p>
              <p>
                Our clients work directly with a knowledgeable professional who
                is personally invested in the outcome. This results in better
                communication, greater accountability, and consistently superior
                results.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Licensed, Insured */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-16">
          <FadeIn>
            <span className="block text-accent text-xs font-bold uppercase tracking-[4px] mb-4">
              Professionalism
            </span>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold mb-8">
              Licensed, Insured, and Professional
            </h2>
            <p className="text-base lg:text-[17px] leading-[1.9] text-primary/60">
              Urban Elements Atlanta is fully licensed and insured, providing
              peace of mind and protection for every property we service. We
              operate with professionalism, respect, and adherence to proper
              horticultural and installation practices.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Care for the Environment */}
      <section className="py-24 lg:py-32 bg-muted">
        <div className="max-w-4xl mx-auto px-6 lg:px-16">
          <FadeIn>
            <span className="block text-accent text-xs font-bold uppercase tracking-[4px] mb-4">
              Sustainability
            </span>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold mb-8">
              Care for the Environment
            </h2>
            <div className="space-y-6 text-base lg:text-[17px] leading-[1.9] text-primary/60">
              <p>
                We believe in responsible landscaping practices that promote
                long-term plant health and environmental sustainability. From
                proper planting techniques to thoughtful maintenance practices,
                we focus on creating landscapes that thrive naturally and remain
                healthy over time.
              </p>
              <p>
                Our goal is not only to improve the appearance of your property,
                but to contribute positively to the environment and the
                community we serve.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-accent text-white text-center">
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
