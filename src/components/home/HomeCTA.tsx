"use client";

import Link from "next/link";

export default function HomeCTA() {
  return (
    <section className="py-20 lg:py-28 bg-[#3d7a4f]">
      <div className="max-w-3xl mx-auto px-6 lg:px-16 text-center text-white">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold mb-5">
          Ready to Improve Your Outdoor Space?
        </h2>
        <p className="text-sm text-white/70 leading-relaxed mb-10 max-w-xl mx-auto">
          If you&apos;re looking for a professional landscaping company that values quality, reliability, and clear communication, we would be glad to learn more about your property and goals.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link href="/contact" className="px-7 py-3.5 bg-white text-[#3d7a4f] text-[11px] font-bold uppercase tracking-[2px] rounded hover:bg-white/90 transition-colors">
            Schedule a Free Consultation
          </Link>
          <Link href="/contact" className="px-7 py-3.5 text-white text-[11px] font-bold uppercase tracking-[2px] border border-white/30 rounded hover:bg-white/10 transition-colors">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
