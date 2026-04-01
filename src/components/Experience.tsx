import React, { useEffect, useRef } from "react";
import { animate, inView, stagger } from "motion";

interface ExperienceItem {
  id: string;
  title: string;
  company: string;
  location?: string;
  period: string;
}

export function Experience({ id, lang }: { id?: string; lang: "id" | "en" }) {
  const sectionRef = useRef<HTMLElement>(null);

  const experiences: ExperienceItem[] = [
    {
      id: "exp1",
      title: "IoT Engineer",
      company: "PT Mattel Indonesia",
      location: "West Java, Indonesia",
      period: "Oct 2024 — Oct 2025",
    },
    {
      id: "exp2",
      title: "Staff IT & Admin Operasional",
      company: "PT Delta Tekno Perkasa",
      period: "Feb 2023 — Nov 2023",
    },
  ];

  useEffect(() => {
    if (sectionRef.current) {
      inView(sectionRef.current, () => {
        const elements = sectionRef.current?.querySelectorAll(".exp-item");
        if (elements && elements.length > 0) {
          animate(
            elements,
            { opacity: [0, 1], x: [-20, 0] },
            { delay: stagger(0.15), duration: 0.8, ease: [0.22, 1, 0.36, 1] },
          );
        }
      });
    }
  }, []);

  return (
    <section
      id={id}
      ref={sectionRef}
      className="scroll-mt-28 lg:scroll-mt-64 block"
    >
      {/* Header Section */}
      <div className="mb-8 sm:mb-12">
        <div className="flex items-center gap-3 mb-3">
          <span className="material-icons text-2xl text-[#b026ff] dark:text-[#00f0ff]">
            work_history
          </span>
          <h2 className="text-2xl md:text-4xl font-display font-bold tracking-tight text-gray-900 dark:text-white">
            {lang === "id" ? "Pengalaman" : "Experience"}
          </h2>
        </div>
        <p className="text-gray-600 dark:text-gray-400 max-w-xl text-sm md:text-base font-light transition-colors duration-500">
          {lang === "id"
            ? "Perjalanan profesional saya dalam rekayasa perangkat lunak dan IoT."
            : "My professional journey in software engineering and IoT."}
        </p>
      </div>

      {/* Timeline Container */}
      <div className="relative border-l-2 border-gray-200 dark:border-white/10 ml-3 sm:ml-4 space-y-6 sm:space-y-8">
        {experiences.map((exp) => (
          <div
            key={exp.id}
            className="exp-item opacity-0 relative pl-8 sm:pl-10 group"
          >
            {/* Titik Timeline (Dot) */}
            <div className="absolute w-4 h-4 bg-gray-200 dark:bg-white/20 rounded-full -left-[9px] top-6 group-hover:bg-[#b026ff] dark:group-hover:bg-[#00f0ff] group-hover:scale-125 transition-all duration-300 shadow-[0_0_0_4px_#f9fafb] dark:shadow-[0_0_0_4px_#050505]"></div>

            {/* Card Content Ber-border */}
            <div className="relative p-5 sm:p-6 rounded-2xl bg-white/70 dark:bg-[#111111]/70 backdrop-blur-md border border-gray-200/80 dark:border-white/10 hover:border-[#b026ff]/50 dark:hover:border-[#00f0ff]/50 transition-all duration-500 hover:shadow-[0_8px_30px_-5px_rgba(176,38,255,0.2)] dark:hover:shadow-[0_8px_30px_-5px_rgba(0,240,255,0.2)] hover:-translate-y-1 overflow-hidden">
              {/* Ambient Hover Glow Effect di dalam Card */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#b026ff]/5 via-transparent to-[#00f0ff]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

              {/* Header Card: Judul Posisi & Periode */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-2 sm:gap-4 relative z-10">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white group-hover:text-[#b026ff] dark:group-hover:text-[#00f0ff] transition-colors duration-300">
                  {exp.title}
                </h3>
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-white/5 px-3 py-1.5 rounded-full w-max border border-gray-200/50 dark:border-white/5">
                  {exp.period}
                </span>
              </div>

              {/* Info Perusahaan & Lokasi */}
              <div className="flex items-center gap-2 relative z-10 mt-2">
                <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-gray-50 dark:bg-white/5 text-gray-400 dark:text-gray-500 group-hover:bg-[#b026ff] group-hover:text-white dark:group-hover:bg-[#00f0ff] dark:group-hover:text-gray-900 transition-all duration-300">
                  <span className="material-icons text-[18px]">business</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                  <h4 className="text-sm sm:text-base font-semibold text-gray-700 dark:text-gray-300">
                    {exp.company}
                  </h4>
                  {exp.location && (
                    <>
                      <span className="hidden sm:inline text-gray-400 dark:text-gray-600">
                        •
                      </span>
                      <span className="text-xs sm:text-sm font-normal text-gray-500 dark:text-gray-400 tracking-wide">
                        {exp.location}
                      </span>
                    </>
                  )}
                </div>
              </div>
            </div>
            {/* Akhir Card Ber-border */}
          </div>
        ))}
      </div>
    </section>
  );
}
