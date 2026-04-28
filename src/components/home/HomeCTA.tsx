"use client";

import { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function HomeCTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        contentRef.current,
        { autoAlpha: 0, y: 30 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="py-20 lg:py-28 bg-gradient-to-br from-accent to-green-dark text-white"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div
          ref={contentRef}
          className="invisible max-w-3xl mx-auto text-center"
        >
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold mb-5">
            Ready to Improve Your Outdoor Space?
          </h2>
          <p className="text-sm text-white/60 leading-relaxed mb-10 max-w-xl mx-auto">
            If you&apos;re looking for a professional landscaping company that
            values quality, reliability, and clear communication, we would be
            glad to learn more about your property and goals.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/contact"
              className="px-7 py-3.5 bg-white text-accent text-[11px] font-bold uppercase tracking-[2px] rounded hover:bg-white/90 transition-colors"
            >
              Schedule a Free Consultation
            </Link>
            <Link
              href="/contact"
              className="px-7 py-3.5 text-white/60 text-[11px] font-bold uppercase tracking-[2px] border border-white/25 rounded hover:text-white hover:border-white/50 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
