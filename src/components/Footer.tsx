"use client";

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        {/* Top */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <a href="#" className="font-serif text-2xl font-black tracking-wider text-white">
              URBAN <span className="italic font-normal text-accent">ELEMENTS</span>
            </a>
            <p className="text-white/35 mt-4 text-sm leading-relaxed max-w-xs">
              Licensed and insured professional landscaping, serving the greater
              Atlanta area with precision and care.
            </p>
          </div>

          <div>
            <p className="text-[11px] font-bold uppercase tracking-[2px] mb-5">Connect</p>
            <a href="#" className="block text-white/45 text-sm mb-3 hover:text-gold transition-colors">Instagram</a>
            <a href="#" className="block text-white/45 text-sm hover:text-gold transition-colors">Facebook</a>
          </div>

          <div>
            <p className="text-[11px] font-bold uppercase tracking-[2px] mb-5">Office</p>
            <p className="text-white/45 text-sm">Atlanta, Georgia</p>
          </div>

          <div>
            <p className="text-[11px] font-bold uppercase tracking-[2px] mb-5">Quick Links</p>
            {[
              { label: "Philosophy", href: "#about" },
              { label: "Services", href: "#services" },
              { label: "Contact", href: "#contact" },
            ].map((l) => (
              <a key={l.label} href={l.href} className="block text-white/45 text-sm mb-3 hover:text-white transition-colors">
                {l.label}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-white/20 tracking-[1.5px]">
            &copy; 2026 URBAN ELEMENTS ATLANTA. DESIGNED FOR EXCELLENCE.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="bg-transparent border-none text-white/25 text-[11px] uppercase tracking-[3px] cursor-pointer hover:text-white transition-colors"
          >
            Back to top ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
