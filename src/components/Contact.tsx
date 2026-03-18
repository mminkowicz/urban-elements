"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, type FormEvent } from "react";

const areas = [
  "Druid Hills", "Morningside", "Virginia Highlands", "Poncey-Highland",
  "Brookhaven", "Tucker", "Chamblee", "Avondale Estates", "Decatur",
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const input = "w-full bg-transparent border-0 border-b border-gray-200 py-4 text-sm text-primary placeholder:text-primary/30 focus:border-accent focus:outline-none transition-colors";

  return (
    <section id="contact" ref={ref} className="py-28 lg:py-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="bg-white rounded-3xl overflow-hidden shadow-xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-5">
            {/* Form — 3 cols */}
            <div className="lg:col-span-3 p-10 md:p-16 lg:p-20">
              <h2 className="font-serif text-3xl lg:text-4xl font-bold mb-2">
                Request a Consultation
              </h2>
              <p className="text-sm text-primary/45 mb-12">
                Fill out the form below and we&apos;ll get back to you within 24 hours.
              </p>

              {submitted ? (
                <div className="text-center py-20">
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6 text-accent text-3xl">✓</div>
                  <h3 className="font-serif text-2xl font-bold mb-2">Thank You!</h3>
                  <p className="text-primary/55">We&apos;ll be in touch shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <input type="text" placeholder="First Name*" required className={input} />
                    <input type="text" placeholder="Last Name*" required className={input} />
                  </div>
                  <input type="email" placeholder="Email Address*" required className={input} />
                  <input type="tel" placeholder="Phone Number" className={input} />
                  <select defaultValue="" className={`${input} text-primary/35 cursor-pointer appearance-none`}>
                    <option value="" disabled>Service of Interest</option>
                    <option value="maintenance">Monthly Maintenance</option>
                    <option value="design">Landscape Design</option>
                    <option value="hardscaping">Hardscaping / Pavers</option>
                    <option value="outdoor">Outdoor Living</option>
                  </select>
                  <textarea rows={4} placeholder="How can we help your outdoor space?" className={`${input} resize-none`} />
                  <button
                    type="submit"
                    className="w-full py-5 bg-primary text-white text-xs font-bold uppercase tracking-[3px] hover:bg-accent transition-colors duration-300 flex items-center justify-center gap-2 mt-4"
                  >
                    Submit Inquiry <span className="text-base">→</span>
                  </button>
                </form>
              )}
            </div>

            {/* Sidebar — 2 cols */}
            <div className="lg:col-span-2 bg-accent text-white p-10 md:p-16 lg:p-16 flex flex-col justify-center">
              <h3 className="font-serif text-2xl font-bold mb-3">Our Service Area</h3>
              <p className="text-white/65 text-sm leading-relaxed mb-10">
                We serve Druid Hills, Morningside, Virginia Highlands, Brookhaven,
                and surrounding neighborhoods.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
                {areas.map((a) => (
                  <div key={a} className="flex items-center gap-2.5 text-xs uppercase tracking-[1.5px] font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                    {a}
                  </div>
                ))}
              </div>

              <div className="mt-12 pt-10 border-t border-white/20">
                <p className="text-[10px] uppercase tracking-[3px] font-bold mb-2 text-white/70">Prefer to call?</p>
                <a href="tel:+14045550199" className="font-serif text-2xl font-bold text-white hover:text-gold transition-colors">
                  (404) 555-0199
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
