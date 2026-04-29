"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  { num: "01", title: "Walk the property", desc: "We look at the beds, turf, drainage, access, sun, shade, and the work that will make the biggest difference." },
  { num: "02", title: "Scope the work", desc: "You get a clear scope for maintenance, installation, cleanup, or improvements before anything starts." },
  { num: "03", title: "Do it cleanly", desc: "The crew protects the property, keeps lines crisp, and leaves paths, beds, and work areas tidy." },
  { num: "04", title: "Keep it dialed in", desc: "For ongoing care, we adjust with the season instead of treating every visit the same." },
];

export default function HomeProcess() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      gsap.from(".process-heading > *", {
        autoAlpha: 0,
        y: reduceMotion ? 0 : 24,
        duration: reduceMotion ? 0.01 : 0.7,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".process-heading",
          start: "top 78%",
        },
      });

      gsap.fromTo(
        ".process-line",
        { scaleX: 0 },
        {
          scaleX: 1,
          transformOrigin: "left center",
          duration: reduceMotion ? 0.01 : 1.2,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: ".process-grid",
            start: "top 76%",
          },
        }
      );

      gsap.from(".process-step", {
        autoAlpha: 0,
        y: reduceMotion ? 0 : 32,
        duration: reduceMotion ? 0.01 : 0.7,
        ease: "back.out(1.4)",
        stagger: 0.16,
        scrollTrigger: {
          trigger: ".process-grid",
          start: "top 74%",
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-forest text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="process-heading text-center max-w-2xl mx-auto mb-20">
          <span className="block text-gold text-[11px] font-bold uppercase tracking-[4px] mb-4">Our process</span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Simple, specific, and tidy</h2>
          <p className="text-white/60 text-base leading-relaxed">
            The best landscaping experience is not mysterious. It is a clear scope, a clean job site, and work that makes sense for the yard.
          </p>
        </div>

        <div className="process-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 relative">
          <div className="process-line hidden lg:block absolute top-[28px] left-[10%] right-[10%] h-[1px] bg-white/20" />

          {steps.map((s) => (
            <div
              key={s.num}
              className="process-step relative text-center"
            >
              <div className="w-14 h-14 mx-auto bg-forest-light border border-white/10 rounded-full flex items-center justify-center text-gold font-serif text-xl font-bold mb-8 relative z-10">
                {s.num}
              </div>
              <h3 className="text-lg font-bold mb-4">{s.title}</h3>
              <p className="text-sm text-white/50 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
