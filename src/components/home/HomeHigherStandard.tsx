"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const bullets = [
  { label: "Owner-Operated", desc: "You work with a small, accountable team that knows what was promised and follows through." },
  { label: "Built for Atlanta", desc: "Plant choices, drainage, bed prep, and maintenance plans are matched to local yards and seasons." },
  { label: "Clean Finish", desc: "Edges, beds, walkways, and work areas are left tidy so the project feels complete." },
];

export default function HomeHigherStandard() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      gsap.from(".standard-copy > *", {
        autoAlpha: 0,
        x: reduceMotion ? 0 : -28,
        duration: reduceMotion ? 0.01 : 0.75,
        ease: "power3.out",
        stagger: 0.08,
        scrollTrigger: {
          trigger: ".standard-copy",
          start: "top 76%",
        },
      });

      gsap.from(".standard-bullet", {
        autoAlpha: 0,
        y: reduceMotion ? 0 : 22,
        duration: reduceMotion ? 0.01 : 0.65,
        ease: "power2.out",
        stagger: 0.12,
        scrollTrigger: {
          trigger: ".standard-bullets",
          start: "top 82%",
        },
      });

      gsap.from(".standard-image-primary", {
        autoAlpha: 0,
        y: reduceMotion ? 0 : 56,
        rotate: reduceMotion ? 0 : 1.5,
        duration: reduceMotion ? 0.01 : 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".standard-images",
          start: "top 78%",
        },
      });

      gsap.from(".standard-image-secondary", {
        autoAlpha: 0,
        y: reduceMotion ? 0 : 72,
        rotate: reduceMotion ? 0 : -2,
        duration: reduceMotion ? 0.01 : 1,
        ease: "power3.out",
        delay: reduceMotion ? 0 : 0.12,
        scrollTrigger: {
          trigger: ".standard-images",
          start: "top 78%",
        },
      });

      if (!reduceMotion) {
        gsap.to(".standard-image-primary img", {
          yPercent: -8,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });

        gsap.to(".standard-image-secondary img", {
          yPercent: 10,
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
    <section ref={sectionRef} className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <div className="standard-copy">
            <span className="block text-gold text-[11px] font-bold uppercase tracking-[3px] mb-4">A better standard</span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-forest mb-4">
              Landscaping that holds up after the crew leaves
            </h2>
            <p className="font-serif text-xl text-forest/70 italic mb-8">Not just photos that look good on day one</p>

            <div className="space-y-6 mb-10 text-charcoal/70 leading-relaxed text-[15px]">
              <p>
                Homeowners have plenty of landscaping options. Urban Elements keeps the work grounded in the basics: clear communication, clean execution, and choices that make sense for the property.
              </p>
              <p>
                The goal is a yard that still looks intentional weeks later. That means proper prep, sensible materials, and a maintenance plan that does not depend on guesswork.
              </p>
            </div>

            <div className="standard-bullets space-y-8">
              {bullets.map((b) => (
                <div key={b.label} className="standard-bullet flex gap-5">
                  <div className="w-12 h-12 rounded-full bg-sand flex items-center justify-center shrink-0 border border-forest/10">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-forest">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-forest mb-2">{b.label}</h3>
                    <p className="text-sm text-charcoal/60 leading-relaxed">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="standard-images relative h-[500px] lg:h-[700px] hidden md:block">
            <div className="standard-image-primary absolute top-0 right-0 w-[80%] h-[80%] overflow-hidden rounded-md shadow-2xl">
              <Image 
                src="/images/service-maintenance.jpg" 
                alt="Maintained residential landscape bed and lawn" 
                fill 
                sizes="(min-width: 1024px) 40vw, 80vw"
                className="object-cover"
              />
            </div>
            <div className="standard-image-secondary absolute bottom-0 left-0 w-[60%] h-[50%] overflow-hidden rounded-md border-8 border-white shadow-2xl">
              <Image 
                src="https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?q=80&w=900&auto=format&fit=crop" 
                alt="Fresh planting work in a residential garden bed" 
                fill 
                sizes="(min-width: 1024px) 30vw, 60vw"
                className="object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
