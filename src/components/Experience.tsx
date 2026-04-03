import React, { useEffect, useRef } from "react";
import { animate, inView, stagger } from "motion";

interface ExperienceItem {
  id: string;
  title: string;
  company: string;
  location?: string;
}

export function Experience({ id, lang }: { id?: string; lang: "id" | "en" }) {
  const sectionRef = useRef<HTMLElement>(null);

  const experiences: ExperienceItem[] = [
    {
      id: "exp1",
      title: "IoT Engineer",
      company: "PT Mattel Indonesia",
      location: "West Java, Indonesia",
    },
    {
      id: "exp2",
      title: "IT & Admin Operational",
      company: "PT Delta Tekno Perkasa",
      location: "Jakarta, Indonesia",
    },
  ];

  useEffect(() => {
    if (sectionRef.current) {
      inView(sectionRef.current, () => {
        const elements = sectionRef.current?.querySelectorAll(".exp-item");
        if (elements && elements.length > 0) {
          animate(
            elements,
            { opacity: [0, 1], y: [30, 0] },
            { delay: stagger(0.2), duration: 0.8, ease: [0.22, 1, 0.36, 1] },
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
      <div className="mb-5 sm:mb-8">
        <div className="flex items-center gap-3 mb-3">
          <span className="material-icons text-2xl text-[#b026ff] dark:text-[#00f0ff]">
            work_history
          </span>
          <h2 className="text-2xl md:text-4xl font-display font-bold tracking-tight text-gray-900 dark:text-white">
            {lang === "id" ? "Pengalaman Saya" : "My Experience"}
          </h2>
        </div>
      </div>

      {/* Creative Timeline Container */}
      <div className="relative mt-10 max-w-5xl mx-auto">
        {/* Neon Line */}
        <div className="absolute left-[19px] md:left-1/2 top-8 bottom-8 w-[2px] bg-gradient-to-b from-[#b026ff] to-[#00f0ff] md:-translate-x-1/2 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#b026ff] to-[#00f0ff] blur-[4px] opacity-60"></div>
        </div>

        <div className="space-y-4 md:space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className={`relative flex flex-col md:flex-row items-center ${
                index % 2 === 0 ? "md:justify-start" : "md:justify-end"
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-[11px] md:left-1/2 top-1/2 transform md:-translate-x-1/2 -translate-y-1/2 w-[18px] h-[18px] rounded-full bg-white dark:bg-[#111111] border-[4px] border-[#b026ff] dark:border-[#00f0ff] z-10 shadow-[0_0_15px_rgba(176,38,255,0.6)] dark:shadow-[0_0_15px_rgba(0,240,255,0.6)]"></div>

              {/* Card Wrapper */}
              <div
                className={`w-full pl-14 md:pl-0 md:w-[48%] ${
                  index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                }`}
              >
                <div className="exp-item opacity-0 relative p-5 sm:p-6 rounded-3xl bg-white/70 dark:bg-[#111111]/70 backdrop-blur-md border border-gray-200/80 dark:border-white/10 hover:border-[#b026ff]/50 dark:hover:border-[#00f0ff]/50 transition-all duration-500 hover:shadow-[0_8px_30px_-5px_rgba(176,38,255,0.2)] dark:hover:shadow-[0_8px_30px_-5px_rgba(0,240,255,0.2)] hover:-translate-y-2 overflow-hidden group">
                  {/* Ambient Hover Glow Effect di dalam Card */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#b026ff]/5 via-transparent to-[#00f0ff]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                  {/* Header Card: Judul Posisi */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 gap-2 sm:gap-4 relative z-10">
                    <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 dark:text-white group-hover:text-[#b026ff] dark:group-hover:text-[#00f0ff] transition-colors duration-300">
                      {exp.title}
                    </h3>
                  </div>

                  {/* Info Perusahaan & Lokasi */}
                  <div className="flex items-center gap-3 sm:gap-4 relative z-10">
                    <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-2xl bg-gray-50 dark:bg-white/5 text-gray-400 dark:text-gray-500 group-hover:bg-[#b026ff] group-hover:text-white dark:group-hover:bg-[#00f0ff] dark:group-hover:text-gray-900 transition-all duration-300 shadow-sm">
                      <span className="material-icons text-[24px]">
                        business
                      </span>
                    </div>
                    <div className="flex flex-col min-w-0">
                      <h4 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-700 dark:text-gray-300 truncate">
                        {exp.company}
                      </h4>
                      {exp.location && (
                        <span className="text-xs sm:text-sm font-medium text-gray-500 dark:text-gray-400 tracking-wide mt-0.5 truncate">
                          {exp.location}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
