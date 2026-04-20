import React, { useEffect, useRef } from "react";
import { animate, inView, stagger } from "motion";

export function GithubActivity({ lang }: { lang: "id" | "en" }) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      inView(sectionRef.current, () => {
        const elements = sectionRef.current?.querySelectorAll(".animate-item");
        if (elements && elements.length > 0) {
          animate(
            elements,
            { opacity: [0, 1], y: [20, 0] },
            { delay: stagger(0.15), duration: 0.8, ease: [0.22, 1, 0.36, 1] },
          );
        }
      });
    }
  }, []);

  return (
    <section ref={sectionRef} className="scroll-mt-28 lg:scroll-mt-64 block">
      {/* Header Section dengan Tombol Github di Kanan */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-5 sm:mb-8 gap-4">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="material-icons text-2xl text-[#b026ff] dark:text-[#00f0ff]">
              data_object
            </span>
            <h2 className="text-2xl md:text-4xl font-display font-bold tracking-tight text-gray-900 dark:text-white">
              {lang === "id" ? "Aktivitas GitHub" : "GitHub Activity"}
            </h2>
          </div>
          <p className="text-gray-500 dark:text-gray-400 text-sm font-light transition-colors duration-500 sm:ml-10">
            {lang === "id"
              ? "Kontribusi kode sumber terbuka saya."
              : "My open source code contributions."}
          </p>
        </div>

        {/* Tombol Profil Github */}
        <a
          href="https://github.com/fachriramdhan"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-white dark:bg-[#111111] border border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-300 hover:text-[#b026ff] dark:hover:text-[#00f0ff] hover:border-[#b026ff]/30 dark:hover:border-[#00f0ff]/30 transition-all duration-300 hover:shadow-md w-max shadow-sm"
        >
          <span className="material-icons text-[18px]">open_in_new</span>
          <span className="text-xs sm:text-sm font-bold tracking-wider">
            @fachriramdhan
          </span>
        </a>
      </div>

      {/* Card Container Glassmorphism */}
      <div className="animate-item opacity-0 relative p-4 sm:p-8 rounded-3xl bg-white/70 dark:bg-[#111111]/70 backdrop-blur-md border border-gray-200/80 dark:border-white/10 hover:border-[#b026ff]/50 dark:hover:border-[#00f0ff]/50 transition-all duration-500 group overflow-hidden shadow-sm hover:shadow-[0_8px_30px_-5px_rgba(176,38,255,0.1)] dark:hover:shadow-[0_8px_30px_-5px_rgba(0,240,255,0.1)]">
        {/* Ambient Hover Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#b026ff]/5 via-transparent to-[#00f0ff]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

        <div className="relative z-10 w-full h-[120px] sm:h-auto overflow-hidden bg-white/50 dark:bg-black/20 rounded-xl p-2 sm:p-4 border border-gray-100 dark:border-white/5">
          <img
            src="https://ghchart.rshah.org/b026ff/fachriramdhan"
            alt="Fachri's Github Chart"
            className="
              /* Di mobile: paksa tinggi, potong sisi kiri dengan object-right */
              w-full h-full object-cover object-right 
              /* Di layar tablet ke atas: kembali normal */
              sm:object-contain sm:h-auto
              dark:opacity-90 dark:invert-[0.8] dark:hue-rotate-180 transition-all duration-500
            "
            referrerPolicy="no-referrer"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = "none";
              if (target.nextElementSibling) {
                (target.nextElementSibling as HTMLElement).style.display =
                  "block";
              }
            }}
          />
          <div className="hidden text-center py-4 text-sm text-gray-500 dark:text-gray-400">
            {lang === "id"
              ? "Gagal memuat grafik GitHub."
              : "Failed to load GitHub chart."}
          </div>
        </div>
      </div>
    </section>
  );
}
