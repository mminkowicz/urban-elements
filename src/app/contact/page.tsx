"use client";

import { motion } from "framer-motion";
import { useState, type FormEvent } from "react";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const services = [
  "Landscape Maintenance",
  "Landscape Design",
  "Landscape Installation",
  "Outdoor Living",
  "Other",
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

      <main className="pt-32 pb-28 lg:pt-40 lg:pb-40 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 lg:mb-20"
          >
            <span className="block text-accent text-xs font-bold uppercase tracking-[4px] mb-4">
              Get in Touch
            </span>
            <h1 className="font-serif text-4xl lg:text-5xl font-bold mb-4">
              Contact Us
            </h1>
            <p className="text-lg text-primary/55 max-w-2xl mx-auto leading-relaxed">
              Ready to improve your outdoor space? Schedule a free consultation.
            </p>
          </motion.div>

          {/* Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="bg-white rounded-3xl overflow-hidden shadow-xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-5">
              {/* Form */}
              <div className="lg:col-span-3 p-10 md:p-16 lg:p-20">
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
                      We&apos;ll be in touch shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <input
                      type="text"
                      placeholder="Full Name*"
                      required
                      className={inputClass}
                    />
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
              <div className="lg:col-span-2 bg-accent text-white p-10 md:p-16 lg:p-16 flex flex-col justify-center">
                <h3 className="font-serif text-2xl font-bold mb-3">
                  Get in Touch
                </h3>
                <p className="text-white/65 text-sm leading-relaxed mb-10">
                  We proudly serve the greater Atlanta area including Druid
                  Hills, Morningside, Virginia Highlands, Brookhaven, Decatur,
                  and surrounding neighborhoods.
                </p>

                <div className="space-y-6 mb-12">
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
                      Service Area
                    </p>
                    <p className="text-sm text-white/65">
                      Atlanta, Georgia &amp; Surrounding Communities
                    </p>
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
      </main>

      <Footer />
    </>
  );
}
