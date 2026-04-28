"use client";

import { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    num: "01",
    title: "Consultation",
    desc: "We begin with a consultation to understand your property, goals, and priorities.",
  },
  {
    num: "02",
    title: "Clear Plan",
    desc: "You receive a clear plan and straightforward pricing with full transparency.",
  },
  {
    num: "03",
    title: "Professional Execution",
    desc: "Work is completed professionally, efficiently, and with careful attention to detail.",
  },
  {
    num: "04",
    title: "Ongoing Care",
    desc: "We remain available for ongoing maintenance, improvements, and long-term care.",
  },
];

export default function HomeProcess() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        headerRef.current,
        { autoAlpha: 0, y: 30 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );

      const cards = stepsRef.current?.querySelectorAll(".process-step");
      if (cards) {
        gsap.fromTo(
          cards,
          { autoAlpha: 0, y: 40 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: stepsRef.current,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="py-20 lg:py-28 bg-accent-light">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div ref={headerRef} className="invisible mb-14">
          <p className="text-accent text-[11px] font-bold uppercase tracking-[3px] mb-3">
            Our Process
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold">
            How It Works
          </h2>
        </div>

        <div ref={stepsRef} className="relative">
          <div className="hidden lg:block absolute top-8 left-[calc(12.5%+24px)] right-[calc(12.5%+24px)] h-0.5 bg-accent/20" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
            {steps.map((s) => (
              <div key={s.num} className="process-step invisible text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start mb-5">
                  <span className="relative z-10 w-16 h-16 rounded-full bg-accent text-white flex items-center justify-center font-serif text-xl font-bold">
                    {s.num}
                  </span>
                </div>
                <h3 className="text-base font-bold mb-2">{s.title}</h3>
                <p className="text-sm text-primary/50 leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 text-center lg:text-left">
          <Link
            href="/contact"
            className="inline-block px-7 py-3.5 bg-accent text-white text-[11px] font-bold uppercase tracking-[2px] rounded hover:bg-accent/85 transition-colors"
          >
            Get Started Today
          </Link>
        </div>
      </div>
    </section>
  );
}
