"use client";

const bullets = [
  { label: "Owner-Operated", desc: "Every project is personally overseen to ensure the highest quality and accountability." },
  { label: "Referral-Driven", desc: "Our business is built on trust — most clients come from word-of-mouth recommendations." },
  { label: "Licensed & Insured", desc: "Fully licensed and insured for your peace of mind on every job we take on." },
];

export default function HomeHigherStandard() {
  return (
    <section className="bg-[#1e3a2a] text-white py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <p className="text-[#b8963e] text-[11px] font-bold uppercase tracking-[4px] mb-4">Why Urban Elements</p>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold mb-2">Landscaping That&apos;s Built to Last</h2>
            <p className="font-serif text-lg text-[#b8963e] italic mb-8">Not Just Look Good on Day One</p>

            <p className="text-sm leading-[1.9] text-white/55 mb-5">
              We don&apos;t cut corners. Every service we provide — from routine maintenance to full-scale installations — is executed with premium materials, proper techniques, and a commitment to long-term results. Your property deserves more than a quick fix.
            </p>
            <p className="text-sm leading-[1.9] text-white/55">
              As an owner-operated company, we bring a level of care and accountability that larger outfits simply can&apos;t match. You won&apos;t deal with revolving crews or inconsistent quality. When you work with Urban Elements, you work with someone who is personally invested in every detail.
            </p>
          </div>

          <div className="flex flex-col justify-center gap-6">
            {bullets.map((b) => (
              <div key={b.label} className="flex gap-4 bg-white/5 rounded-lg p-5">
                <span className="w-6 h-6 rounded-full bg-[#3d7a4f] text-white flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">✓</span>
                <div>
                  <p className="text-sm font-bold mb-1">{b.label}</p>
                  <p className="text-sm text-white/45 leading-relaxed">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
