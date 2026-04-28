"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const locations = [
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
const marqueeItems = [...locations, ...locations, ...locations, ...locations];

export default function HomeHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const labelRef = useRef<HTMLParagraphElement>(null);
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const badgeRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        labelRef.current,
        { autoAlpha: 0, x: -40 },
        { autoAlpha: 1, x: 0, duration: 0.6 }
      )
        .fromTo(
          h1Ref.current,
          { autoAlpha: 0, x: -50 },
          { autoAlpha: 1, x: 0, duration: 0.7 },
          "-=0.35"
        )
        .fromTo(
          subtitleRef.current,
          { autoAlpha: 0, x: -30 },
          { autoAlpha: 1, x: 0, duration: 0.6 },
          "-=0.35"
        )
        .fromTo(
          badgeRef.current,
          { autoAlpha: 0, x: -20 },
          { autoAlpha: 1, x: 0, duration: 0.5 },
          "-=0.3"
        )
        .fromTo(
          ctaRef.current,
          { autoAlpha: 0, x: -30 },
          { autoAlpha: 1, x: 0, duration: 0.6 },
          "-=0.25"
        );
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="relative min-h-screen flex flex-col">
      <Image
        src="/images/hero.jpg"
        alt="Atlanta landscape"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-green-dark/95 via-green-dark/80 to-green-dark/40" />

      <div className="relative z-10 flex-1 flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 w-full py-32 lg:py-44">
          <div className="max-w-2xl text-center lg:text-left mx-auto lg:mx-0">
            <p
              ref={labelRef}
              className="invisible text-gold text-[11px] font-bold uppercase tracking-[3px] mb-6"
            >
              Urban Elements Atlanta
            </p>

            <h1
              ref={h1Ref}
              className="invisible font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-[1.2] mb-6"
            >
              Professional Landscaping for Atlanta Homeowners
            </h1>

            <p
              ref={subtitleRef}
              className="invisible text-white/60 text-sm sm:text-base leading-relaxed mb-4"
            >
              Thoughtful design, reliable maintenance, and clean installations
              — delivered with care, consistency, and attention to detail.
            </p>

            <p
              ref={badgeRef}
              className="invisible text-white/35 text-[11px] uppercase tracking-[2px] mb-10"
            >
              Licensed &amp; Insured &bull; Owner-Operated &bull; Serving
              Atlanta &amp; Surrounding Areas
            </p>

            <div
              ref={ctaRef}
              className="invisible flex flex-col sm:flex-row items-center lg:items-start gap-3"
            >
              <Link
                href="/contact"
                className="px-7 py-3.5 bg-accent text-white text-[11px] font-bold uppercase tracking-[2px] rounded hover:bg-accent/85 transition-colors"
              >
                Schedule a Free Consultation
              </Link>
              <Link
                href="#services"
                className="px-7 py-3.5 text-white/60 text-[11px] font-bold uppercase tracking-[2px] border border-white/15 rounded hover:text-white hover:border-white/30 transition-colors"
              >
                View Our Services
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 border-t border-white/10 bg-dark/60 backdrop-blur-sm overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap py-4">
          {marqueeItems.map((loc, i) => (
            <span
              key={`${loc}-${i}`}
              className="mx-6 text-[11px] text-white/40 uppercase tracking-[2px] shrink-0"
            >
              {loc}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
