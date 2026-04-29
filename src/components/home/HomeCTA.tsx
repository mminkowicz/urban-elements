"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function HomeCTA() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      gsap.from(".cta-content > *", {
        autoAlpha: 0,
        y: reduceMotion ? 0 : 28,
        duration: reduceMotion ? 0.01 : 0.75,
        ease: "power3.out",
        stagger: 0.12,
        scrollTrigger: {
          trigger: ".cta-content",
          start: "top 78%",
        },
      });

      if (!reduceMotion) {
        gsap.to(".cta-image", {
          scale: 1.08,
          yPercent: 8,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      }
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="relative py-32 lg:py-48 overflow-hidden">
      <Image
        src="/images/service-maintenance.jpg"
        alt="Residential Atlanta lawn and maintained planting beds"
        fill
        sizes="100vw"
        className="cta-image object-cover"
      />
      <div className="absolute inset-0 bg-forest/85" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-16 text-center text-white">
        <div className="cta-content">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-shadow-sm">
            Want the yard to feel handled?
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-white/80 mb-10 max-w-2xl mx-auto text-shadow-sm">
            Tell us what is bothering you about the property: overgrown beds, tired turf, weak curb appeal, drainage trouble, or a project that needs a clean finish.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 bg-gold hover:bg-white text-forest text-[12px] font-bold uppercase tracking-[2px] rounded-sm transition-colors shadow-lg"
            >
              Free Consultation
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 text-white text-[12px] font-bold uppercase tracking-[2px] border border-white/40 rounded-sm hover:bg-white hover:text-forest transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
