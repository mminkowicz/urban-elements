"use client";

const areas = [
  "Druid Hills", "Morningside", "Poncey-Highland",
  "Virginia Highlands", "Brookhaven", "Tucker",
  "Chamblee", "Avondale Estates", "Decatur",
];

export default function HomeAreas() {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-6 lg:px-16">
        <div className="bg-[#111413] rounded-2xl p-10 md:p-14">
          <p className="text-[#3d7a4f] text-[11px] font-bold uppercase tracking-[4px] mb-4">Service Areas</p>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-10">Proudly Serving the Atlanta Area</h2>

          <div className="flex flex-wrap gap-2.5">
            {areas.map((a) => (
              <span key={a} className="inline-flex items-center gap-2 bg-white/6 border border-white/8 rounded-full px-4 py-2 text-[11px] font-medium uppercase tracking-[1.5px] text-white/60">
                <span className="w-1.5 h-1.5 rounded-full bg-[#3d7a4f] shrink-0" />
                {a}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
