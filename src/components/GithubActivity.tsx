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
            { delay: stagger(0.1), duration: 0.8, ease: [0.22, 1, 0.36, 1] },
          );
        }
      });
    }
  }, []);

  return (
    <section ref={sectionRef} className="scroll-mt-28 lg:scroll-mt-64 block">
      <div className="mb-6 sm:mb-8">
        <h3 className="text-xl md:text-2xl font-display font-bold mb-2 tracking-tight">
          {lang === "id" ? "Aktivitas GitHub" : "GitHub Activity"}
        </h3>
        <p className="text-gray-500 dark:text-gray-400 text-sm font-light transition-colors duration-500">
          {lang === "id"
            ? "Kontribusi kode sumber terbuka saya."
            : "My open source code contributions."}
        </p>
      </div>

      <div className="animate-item opacity-0 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl p-4 sm:p-6 transition-colors duration-500 shadow-sm dark:shadow-none">
        {/* Kontainer Utama: Menghilangkan scroll, posisi fix */}
        <div className="relative w-full h-[120px] sm:h-auto overflow-hidden">
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
