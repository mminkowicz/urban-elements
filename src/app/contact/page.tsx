"use client";

import { motion } from "framer-motion";
import { useState, type FormEvent } from "react";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const services = [
  "Recurring Maintenance",
  "Fertilizer & Weed Control",
  "Seasonal Cleanups",
  "Aeration & Overseeding",
  "Landscape Design",
  "Landscape Installation",
  "Complete Transformations",
  "Sod & Grading",
  "Drainage Solutions",
  "Planting Trees & Shrubs",
  "Artificial Turf",
  "Pavers, Concrete & Gravel",
  "Concrete Services",
  "Fire Pit Installation",
  "Water Features",
  "Outdoor Living",
  "Other",
];

const serviceAreas = [
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

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClass =
    "w-full bg-transparent border-0 border-b border-gray-200 py-4 text-sm text-primary placeholder:text-primary/30 focus:border-accent focus:outline-none transition-colors";

  return (
    <>
      <Navigation />

      {/* A) Hero Banner */}
      <section className="relative bg-primary text-white pt-40 pb-24 lg:pt-48 lg:pb-36">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-15" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-16 text-center">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block text-gold text-xs font-bold uppercase tracking-[4px] mb-6 border border-gold/30 px-4 py-1.5 rounded-full"
          >
            Contact Us
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.15] mb-6"
          >
            Let&apos;s Talk About Your Property
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg lg:text-xl text-white/65 max-w-2xl mx-auto leading-relaxed"
          >
            Schedule a free consultation and discover how we can transform your
            outdoor space.
          </motion.p>
        </div>
      </section>

      {/* B) Form + Sidebar */}
      <section className="py-24 lg:py-36 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="bg-white rounded-3xl overflow-hidden shadow-xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr]">
              {/* Form */}
              <div className="p-10 md:p-16 lg:p-20">
                <h2 className="font-serif text-2xl lg:text-3xl font-bold mb-2">
                  Request a Consultation
                </h2>
                <p className="text-sm text-primary/45 mb-12">
                  Fill out the form below and we&apos;ll get back to you within
                  24 hours.
                </p>

                {submitted ? (
                  <div className="text-center py-20">
                    <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6 text-accent text-3xl">
                      ✓
                    </div>
                    <h3 className="font-serif text-2xl font-bold mb-2">
                      Thank You!
                    </h3>
                    <p className="text-primary/55">
                      We&apos;ll be in touch shortly to discuss your project.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <input
                        type="text"
                        placeholder="First Name*"
                        required
                        className={inputClass}
                      />
                      <input
                        type="text"
                        placeholder="Last Name*"
                        required
                        className={inputClass}
                      />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <input
                        type="email"
                        placeholder="Email Address*"
                        required
                        className={inputClass}
                      />
                      <input
                        type="tel"
                        placeholder="Phone Number"
                        className={inputClass}
                      />
                    </div>
                    <input
                      type="text"
                      placeholder="Property Address"
                      className={inputClass}
                    />
                    <select
                      defaultValue=""
                      className={`${inputClass} text-primary/35 cursor-pointer appearance-none`}
                    >
                      <option value="" disabled>
                        Service of Interest
                      </option>
                      {services.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                    <textarea
                      rows={4}
                      placeholder="Tell us about your project or how we can help..."
                      className={`${inputClass} resize-none`}
                    />
                    <button
                      type="submit"
                      className="w-full py-5 bg-primary text-white text-xs font-bold uppercase tracking-[3px] hover:bg-accent transition-colors duration-300 flex items-center justify-center gap-2 mt-4"
                    >
                      Submit Inquiry <span className="text-base">→</span>
                    </button>
                  </form>
                )}
              </div>

              {/* Sidebar */}
              <div className="bg-accent text-white p-10 md:p-16 lg:p-16 flex flex-col justify-center">
                <h3 className="font-serif text-2xl font-bold mb-3">
                  Get in Touch
                </h3>
                <p className="text-white/65 text-sm leading-relaxed mb-10">
                  We proudly serve the greater Atlanta area. Reach out and
                  let&apos;s discuss how we can help with your property.
                </p>

                <div className="space-y-6 mb-10">
                  <div>
                    <p className="text-[10px] uppercase tracking-[3px] font-bold mb-2 text-white/70">
                      Phone
                    </p>
                    <a
                      href="tel:+14045550199"
                      className="font-serif text-xl font-bold text-white hover:text-gold transition-colors"
                    >
                      (404) 555-0199
                    </a>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[3px] font-bold mb-2 text-white/70">
                      Hours
                    </p>
                    <p className="text-sm text-white/65">
                      Monday – Friday: 7:00 AM – 6:00 PM
                    </p>
                  </div>
                </div>

                <div className="pt-8 border-t border-white/20 mb-10">
                  <p className="text-[10px] uppercase tracking-[3px] font-bold mb-4 text-white/70">
                    Service Areas
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {serviceAreas.map((area) => (
                      <span
                        key={area}
                        className="text-xs bg-white/10 text-white/80 px-3 py-1.5 rounded-full"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-8 border-t border-white/20">
                  <p className="text-xs text-white/50 leading-relaxed">
                    Licensed &amp; insured. Owner-operated with a commitment to
                    quality and clear communication.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bottom link */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <p className="text-sm text-primary/40">
              Want to learn more about us?{" "}
              <Link
                href="/about"
                className="text-accent font-semibold hover:underline"
              >
                Visit our About page
              </Link>
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
