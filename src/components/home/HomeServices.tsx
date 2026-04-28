"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Landscape Maintenance",
    desc: "Consistent, detail-focused maintenance that keeps your property clean, healthy, and looking its best year-round.",
    href: "/services/recurring-maintenance",
    image: "/images/service-maintenance.jpg",
  },
  {
    title: "Landscape Design",
    desc: "Thoughtful designs tailored to your property, goals, and long-term vision.",
    href: "/services/landscape-design",
    image: "/images/service-design.jpg",
  },
  {
    title: "Landscape Installation",
    desc: "Professional installation of plants, sod, mulch, and landscape improvements using proper techniques and quality materials.",
    href: "/services/landscape-installation",
    image: "/images/service-installation.jpg",
  },
  {
    title: "Seasonal Enhancements",
    desc: "Seasonal cleanups, mulch and pine straw installation, and landscape enhancements to keep your property looking its best.",
    href: "/services/seasonal-cleanups",
    image: "/images/service-seasonal.jpg",
  },
];

export default function HomeServices() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

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

      const cards = cardsRef.current?.children;
      if (cards) {
        gsap.fromTo(
          cards,
          { autoAlpha: 0, y: 50 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: cardsRef.current,
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
    <section id="services" ref={sectionRef} className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div ref={headerRef} className="invisible mb-14">
          <p className="text-accent text-[11px] font-bold uppercase tracking-[3px] mb-3">
            Our Services
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold">
            What We Do
          </h2>
        </div>

        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((s) => (
            <Link
              key={s.title}
              href={s.href}
              className="invisible group block rounded overflow-hidden border border-primary/5 hover:border-accent/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="relative h-[220px] overflow-hidden rounded-t">
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-base font-bold mb-2 group-hover:text-accent transition-colors">
                  {s.title}
                </h3>
                <p className="text-sm text-primary/50 leading-relaxed mb-4">
                  {s.desc}
                </p>
                <span className="text-accent text-[12px] font-bold uppercase tracking-[2px]">
                  Learn More →
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10">
          <Link
            href="/services/recurring-maintenance"
            className="text-accent text-[12px] font-bold uppercase tracking-[2px] hover:underline"
          >
            View All Services →
          </Link>
        </div>
      </div>
    </section>
  );
}
