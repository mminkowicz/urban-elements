"use client";

import Link from "next/link";

const steps = [
  { num: "1", title: "Consultation", desc: "We begin with a consultation to understand your property, goals, and priorities." },
  { num: "2", title: "Clear Plan", desc: "You receive a clear plan and straightforward pricing with full transparency." },
  { num: "3", title: "Professional Execution", desc: "Work is completed professionally, efficiently, and with careful attention to detail." },
  { num: "4", title: "Ongoing Care", desc: "We remain available for ongoing maintenance, improvements, and long-term care." },
];

export default function HomeProcess() {
  return (
    <section className="py-20 lg:py-28 bg-[#eaf2ec]">
      <div className="max-w-6xl mx-auto px-6 lg:px-16">
        <p className="text-[#3d7a4f] text-[11px] font-bold uppercase tracking-[4px] mb-4">Our Process</p>
        <h2 className="font-serif text-2xl sm:text-3xl font-bold mb-4">How It Works</h2>
        <p className="text-sm text-[#1b1f1c]/50 mb-14 max-w-lg">From the first conversation to ongoing care, we make the process easy and transparent every step of the way.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((s) => (
            <div key={s.num}>
              <div className="w-10 h-10 rounded-full bg-[#3d7a4f] text-white flex items-center justify-center text-sm font-bold mb-5">
                {s.num}
              </div>
              <h3 className="text-[15px] font-bold mb-2">{s.title}</h3>
              <p className="text-sm text-[#1b1f1c]/50 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-14">
          <Link href="/contact" className="inline-block px-7 py-3.5 bg-[#3d7a4f] text-white text-[11px] font-bold uppercase tracking-[2px] rounded hover:bg-[#356e45] transition-colors">
            Get Started Today
          </Link>
        </div>
      </div>
    </section>
  );
}
