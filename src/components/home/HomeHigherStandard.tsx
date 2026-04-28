"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const bulletItems = [
  {
    label: "Owner-Operated",
    desc: "Every project is personally overseen to ensure the highest quality and accountability.",
  },
  {
    label: "Referral-Driven",
    desc: "Our business is built on trust — most clients come from word-of-mouth recommendations.",
  },
  {
    label: "Licensed & Insured",
    desc: "Fully licensed and insured for your peace of mind on every job we take on.",
  },
];

export default function HomeHigherStandard() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        imageRef.current,
        { autoAlpha: 0, x: -80 },
        {
          autoAlpha: 1,
          x: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        contentRef.current,
        { autoAlpha: 0, x: 80 },
        {
          autoAlpha: 1,
          x: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none none",
          },
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div ref={imageRef} className="invisible relative min-h-[400px] lg:min-h-[640px]">
          <Image
            src="/images/higher-standard.jpg"
            alt="Urban Elements crew working"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        <div
          ref={contentRef}
          className="invisible bg-green-dark text-white py-20 lg:py-28 px-6 lg:px-16 flex items-center"
        >
          <div className="max-w-lg mx-auto lg:mx-0">
            <p className="text-gold text-[11px] font-bold uppercase tracking-[3px] mb-4">
              Why Urban Elements
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">
              Landscaping That&apos;s Built to Last
            </h2>
            <p className="font-serif text-lg text-gold italic mb-8">
              Not Just Look Good on Day One
            </p>

            <div className="space-y-5 mb-10">
              <p className="text-sm leading-[1.9] text-white/60">
                We don&apos;t cut corners. Every service we provide — from
                routine maintenance to full-scale installations — is executed
                with premium materials, proper techniques, and a commitment to
                long-term results. Your property deserves more than a quick fix.
              </p>
              <p className="text-sm leading-[1.9] text-white/60">
                As an owner-operated company, we bring a level of care and
                accountability that larger outfits simply can&apos;t match. You
                won&apos;t deal with revolving crews or inconsistent quality.
                When you work with Urban Elements, you work with someone who is
                personally invested in every detail.
              </p>
            </div>

            <div className="space-y-5">
              {bulletItems.map((item) => (
                <div key={item.label} className="flex gap-4">
                  <span className="w-6 h-6 rounded-full bg-accent text-white flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                    ✓
                  </span>
                  <div>
                    <p className="text-sm font-bold mb-0.5">{item.label}</p>
                    <p className="text-sm text-white/50 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
