"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const areas = [
  "Druid Hills",
  "Morningside",
  "Poncey-Highland",
  "Virginia Highlands",
  "Brookhaven",
  "Tucker",
  "Chamblee",
  "Avondale Estates",
  "Decatur",
];

export default function HomeAreas() {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const pillsRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        containerRef.current,
        { autoAlpha: 0, y: 40 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );

      const pills = pillsRef.current?.children;
      if (pills) {
        gsap.fromTo(
          pills,
          { autoAlpha: 0, scale: 0.85, y: 15 },
          {
            autoAlpha: 1,
            scale: 1,
            y: 0,
            duration: 0.4,
            stagger: 0.06,
            ease: "back.out(1.4)",
            scrollTrigger: {
              trigger: pillsRef.current,
              start: "top 90%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div
          ref={containerRef}
          className="invisible bg-dark rounded-2xl py-16 lg:py-20 px-6 lg:px-16 text-center"
        >
          <p className="text-gold text-[11px] font-bold uppercase tracking-[3px] mb-3">
            Service Areas
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-10">
            Proudly Serving the Atlanta Area
          </h2>

          <div
            ref={pillsRef}
            className="flex flex-wrap items-center justify-center gap-3"
          >
            {areas.map((area) => (
              <span
                key={area}
                className="invisible inline-flex items-center gap-2 px-5 py-2.5 bg-white/5 border border-white/10 rounded text-sm text-white/70"
              >
                <span className="w-2 h-2 rounded-full bg-accent shrink-0" />
                {area}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
