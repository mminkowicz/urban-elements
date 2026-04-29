"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function HomeHero() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      gsap.set(".hero-kicker, .hero-title, .hero-copy, .hero-actions", {
        autoAlpha: 0,
        y: reduceMotion ? 0 : 28,
      });
      gsap.set(".hero-proof", {
        autoAlpha: 0,
        x: reduceMotion ? 0 : -12,
      });

      const intro = gsap.timeline({ defaults: { ease: "power3.out" } });
      intro
        .fromTo(
          ".hero-image",
          { scale: reduceMotion ? 1 : 1.08 },
          { scale: 1, duration: reduceMotion ? 0.01 : 1.8 }
        )
        .to(".hero-kicker", { autoAlpha: 1, y: 0, duration: 0.7 }, reduceMotion ? 0 : 0.15)
        .to(".hero-title", { autoAlpha: 1, y: 0, duration: 0.9 }, reduceMotion ? 0 : 0.25)
        .to(".hero-copy", { autoAlpha: 1, y: 0, duration: 0.75 }, reduceMotion ? 0 : 0.45)
        .to(".hero-proof", { autoAlpha: 1, x: 0, duration: 0.5, stagger: 0.08 }, reduceMotion ? 0 : 0.58)
        .to(".hero-actions", { autoAlpha: 1, y: 0, duration: 0.7 }, reduceMotion ? 0 : 0.75);

      if (!reduceMotion) {
        gsap.to(".hero-image", {
          yPercent: 10,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });

        gsap.to(".hero-content", {
          y: -44,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="relative w-full min-h-[760px] lg:min-h-[820px] flex items-center overflow-hidden bg-forest">
      <Image
        src="/images/service-maintenance.jpg"
        alt="Maintained Atlanta front yard with fresh mulch beds and shrubs"
        fill
        priority
        sizes="100vw"
        className="hero-image object-cover object-[55%_center]"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-forest/95 via-forest/70 to-forest/10" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-forest/70 to-transparent" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-16 pt-28 pb-14">
        <div className="hero-content max-w-2xl">
          <p className="hero-kicker mb-5 text-gold text-[11px] font-bold uppercase tracking-[3px]">
            Owner-operated landscaping in Atlanta
          </p>
          <h1 className="hero-title font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] mb-6 text-shadow-sm">
            Landscape care that looks lived-in, not staged.
          </h1>

          <p className="hero-copy text-white/85 text-base md:text-lg leading-relaxed mb-8 max-w-xl text-shadow-sm">
            Maintenance, planting, mulch, sod, grading, and outdoor improvements for Atlanta homeowners who want the work done cleanly and consistently.
          </p>

          <div className="mb-10 grid max-w-xl grid-cols-1 gap-3 text-sm text-white/80 sm:grid-cols-3">
            {["Licensed & insured", "Clean job sites", "Residential focus"].map((item) => (
              <span key={item} className="hero-proof border-l border-gold/70 pl-4">
                {item}
              </span>
            ))}
          </div>

          <div className="hero-actions flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex justify-center items-center px-8 py-4 bg-gold hover:bg-white text-forest text-[13px] font-bold uppercase tracking-[2px] transition-colors rounded-sm"
            >
              Request a Quote
            </Link>
            <Link
              href="#services"
              className="inline-flex justify-center items-center px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white text-[13px] font-bold uppercase tracking-[2px] hover:bg-white hover:text-forest transition-colors rounded-sm"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
