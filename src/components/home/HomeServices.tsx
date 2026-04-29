"use client";

import { MouseEvent, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const services = [
  { 
    title: "Landscape Maintenance", 
    desc: "Mowing, edging, pruning, bed care, and cleanup work that keeps the property looking cared for between seasons.", 
    href: "/services/recurring-maintenance",
    img: "/images/service-maintenance.jpg"
  },
  { 
    title: "Landscape Design", 
    desc: "Practical planting and layout recommendations that fit the home, the light, and the way the yard is actually used.", 
    href: "/services/landscape-design",
    img: "https://images.unsplash.com/photo-1589923188900-85dae523342b?q=80&w=900&auto=format&fit=crop"
  },
  { 
    title: "Landscape Installation", 
    desc: "Planting, sod, mulch, pine straw, grading, and hardscape details installed with clean lines and sound prep work.", 
    href: "/services/landscape-installation",
    img: "https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?q=80&w=900&auto=format&fit=crop"
  },
  { 
    title: "Seasonal Enhancements", 
    desc: "Fresh mulch, pine straw, leaf cleanup, pruning, and small improvements timed around the Atlanta growing season.", 
    href: "/services/seasonal-cleanups",
    img: "/images/service-seasonal.jpg"
  },
];

export default function HomeServices() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      gsap.from(".services-heading > *", {
        autoAlpha: 0,
        y: reduceMotion ? 0 : 24,
        duration: reduceMotion ? 0.01 : 0.75,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".services-heading",
          start: "top 78%",
        },
      });

      gsap.from(".service-card", {
        autoAlpha: 0,
        y: reduceMotion ? 0 : 42,
        clipPath: reduceMotion ? "inset(0% 0% 0% 0%)" : "inset(12% 0% 0% 0%)",
        duration: reduceMotion ? 0.01 : 0.85,
        ease: "power3.out",
        stagger: 0.12,
        scrollTrigger: {
          trigger: ".services-grid",
          start: "top 78%",
        },
      });
    },
    { scope: sectionRef }
  );

  const handleCardMove = (event: MouseEvent<HTMLAnchorElement>) => {
    const card = event.currentTarget;
    const bounds = card.getBoundingClientRect();
    const x = event.clientX - bounds.left;
    const y = event.clientY - bounds.top;
    const rotateY = ((x / bounds.width) - 0.5) * 7;
    const rotateX = -((y / bounds.height) - 0.5) * 7;

    gsap.to(card, {
      rotateX,
      rotateY,
      y: -8,
      transformPerspective: 900,
      transformOrigin: "center",
      duration: 0.35,
      ease: "power2.out",
    });
  };

  const handleCardLeave = (event: MouseEvent<HTMLAnchorElement>) => {
    gsap.to(event.currentTarget, {
      rotateX: 0,
      rotateY: 0,
      y: 0,
      duration: 0.55,
      ease: "elastic.out(1, 0.55)",
    });
  };

  return (
    <section ref={sectionRef} id="services" className="py-24 lg:py-32 bg-stone">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="services-heading max-w-3xl mb-16">
          <span className="block text-gold text-[11px] font-bold uppercase tracking-[3px] mb-4">
            What we handle
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-forest mb-6">
            The yard work homeowners notice when it is done right
          </h2>
          <p className="text-charcoal/70 text-base leading-relaxed">
            Urban Elements focuses on the visible details: crisp edges, healthy beds, smart plant choices, level surfaces, and work areas that are cleaned up before we leave.
          </p>
        </div>

        <div className="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 [perspective:1000px]">
          {services.map((s) => (
            <div key={s.title} className="service-card group">
              <Link
                href={s.href}
                onMouseMove={handleCardMove}
                onMouseLeave={handleCardLeave}
                className="block relative h-[420px] overflow-hidden rounded-md shadow-lg will-change-transform"
              >
                <Image 
                  src={s.img} 
                  alt={s.title} 
                  fill 
                  sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest/90 via-forest/40 to-transparent group-hover:from-forest group-hover:via-forest/60 transition-colors duration-500" />
                
                <div className="absolute bottom-0 left-0 right-0 p-8 flex flex-col h-full justify-end">
                  <h3 className="font-serif text-2xl font-bold text-white mb-3 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{s.title}</h3>
                  <p className="text-sm text-white/80 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 mb-4 line-clamp-3">
                    {s.desc}
                  </p>
                  <span className="text-gold text-[11px] font-bold uppercase tracking-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    More Information →
                  </span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
