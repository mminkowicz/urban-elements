"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, type FormEvent } from "react";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const serviceAreas = [
  "Decatur", "Tucker", "Chamblee", "Avondale Estates",
  "Druid Hills", "Morningside", "Virginia Highlands", "Brookhaven", "Poncey-Highland"
];

function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay }} className={className}>
      {children}
    </motion.div>
  );
}

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const form = e.currentTarget;
    const data = {
      firstName: (form.elements.namedItem("firstName") as HTMLInputElement).value,
      lastName: (form.elements.namedItem("lastName") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      service: (form.elements.namedItem("service") as HTMLSelectElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Submission failed");
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again or call us directly.");
    } finally {
      setLoading(false);
    }
  };

  const inputClasses = "w-full bg-transparent border-0 border-b border-charcoal/20 py-4 text-[14px] font-sans text-charcoal placeholder:text-charcoal/30 focus:border-forest transition-colors outline-none focus:ring-0 rounded-none";

  return (
    <main className="bg-sand text-charcoal min-h-screen">
      <Navigation />
      
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <Image src="https://images.unsplash.com/photo-1558905619-1714249d975c?q=80&w=2000&auto=format&fit=crop" alt="Contact Urban Elements" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-20">
          <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="block text-gold text-[11px] font-bold uppercase tracking-[4px] mb-5">
            Contact Us
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-[1.15] mb-6">
            Let&apos;s Talk About Your Property
          </motion.h1>
        </div>
      </section>

      {/* Form & Sidebar */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="bg-white rounded-2xl overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-[1.5fr_1fr]">
            
            {/* Form */}
            <div className="p-8 sm:p-12 lg:p-16">
              <h2 className="font-serif text-3xl lg:text-4xl font-bold mb-3 text-forest">Request a Consultation</h2>
              <p className="text-[15px] text-charcoal/60 mb-10">Fill out the form below and we&apos;ll get back to you within 24 hours.</p>

              {submitted ? (
                <div className="py-20 text-center">
                  <div className="w-16 h-16 rounded-full bg-forest/5 flex items-center justify-center mx-auto mb-6 text-forest text-2xl font-bold">✓</div>
                  <h3 className="font-serif text-2xl font-bold text-forest mb-2">Thank You!</h3>
                  <p className="text-charcoal/60 text-[15px]">We&apos;ll be in touch shortly to discuss your project.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5">
                    <input name="firstName" type="text" placeholder="First Name*" required className={inputClasses} />
                    <input name="lastName" type="text" placeholder="Last Name*" required className={inputClasses} />
                  </div>
                  <input name="email" type="email" placeholder="Email Address*" required className={inputClasses} />
                  <input name="phone" type="tel" placeholder="Phone Number" className={inputClasses} />
                  <select name="service" defaultValue="" required className={`${inputClasses} text-charcoal/40 cursor-pointer appearance-none`}>
                    <option value="" disabled>Service of Interest*</option>
                    <option value="maintenance">Recurring Maintenance</option>
                    <option value="fertilizer">Fertilizer & Weed Control</option>
                    <option value="cleanups">Seasonal Cleanups</option>
                    <option value="aeration">Aeration & Overseeding</option>
                    <option value="design">Landscape Design</option>
                    <option value="installation">Landscape Installation</option>
                    <option value="transformations">Complete Transformations</option>
                    <option value="sod">Sod & Grading</option>
                    <option value="drainage">Drainage Solutions</option>
                    <option value="planting">Planting Trees & Shrubs</option>
                    <option value="turf">Artificial Turf</option>
                    <option value="pavers">Pavers, Concrete & Gravel</option>
                    <option value="concrete">Concrete Services</option>
                    <option value="firepits">Fire Pit Installation</option>
                    <option value="waterfeatures">Water Features</option>
                  </select>
                  <textarea name="message" rows={4} placeholder="How can we help your outdoor space?" className={`${inputClasses} resize-none mt-2`} />
                  
                  {error && <p className="text-red-600 text-sm">{error}</p>}
                  
                  <button type="submit" disabled={loading} className="mt-8 px-8 py-5 bg-forest hover:bg-forest-light text-white text-[11px] font-bold uppercase tracking-[2.5px] rounded-sm transition-colors disabled:opacity-70 flex justify-center items-center gap-3">
                    {loading ? "Sending..." : <>Submit Inquiry <span>→</span></>}
                  </button>
                </form>
              )}
            </div>

            {/* Sidebar */}
            <div className="bg-forest text-white p-8 sm:p-12 lg:p-16 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-white/5">
              <h3 className="font-serif text-2xl font-bold mb-4 text-gold">Our Service Area</h3>
              <p className="text-[14px] leading-relaxed text-white/60 mb-10">We serve Druid Hills, Morningside, Virginia Highlands, Brookhaven, and surrounding neighborhoods.</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 mb-12">
                {serviceAreas.map((area) => (
                  <div key={area} className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[1.5px] text-white/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                    {area}
                  </div>
                ))}
              </div>

              <div className="pt-10 border-t border-white/10">
                <p className="text-[10px] font-bold uppercase tracking-[3px] text-gold mb-3">Prefer to call?</p>
                <a href="tel:4045550199" className="font-serif text-3xl font-bold text-white hover:text-gold transition-colors block mb-6">(404) 555-0199</a>
                <p className="text-[14px] text-white/60">Atlanta, Georgia</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
