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
            { delay: stagger(0.2), duration: 0.8, ease: [0.22, 1, 0.36, 1] }
          );
        }
      });
    }
  }, []);

  return (
    <section
      id={id}
      ref={sectionRef}
      className="scroll-mt-28 lg:scroll-mt-64 block overflow-hidden"
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
      <div className="relative mt-10 max-w-6xl mx-auto px-4 md:px-6">
        {/* Neon Line */}
        <div className="absolute left-[19px] md:left-1/2 top-8 bottom-8 w-[2px] bg-gradient-to-b from-[#b026ff] to-[#00f0ff] md:-translate-x-1/2 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#b026ff] to-[#00f0ff] blur-[4px] opacity-60"></div>
        </div>

        <div className="space-y-8 md:space-y-16">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className={`relative flex flex-col md:flex-row items-center ${
                index % 2 === 0 ? "md:justify-start" : "md:justify-end"
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-[11px] md:left-1/2 top-1/2 transform md:-translate-x-1/2 -translate-y-1/2 w-[18px] h-[18px] rounded-full bg-white dark:bg-[#111111] border-[4px] border-[#b026ff] dark:border-[#00f0ff] z-20 shadow-[0_0_15px_rgba(176,38,255,0.6)] dark:shadow-[0_0_15px_rgba(0,240,255,0.6)]"></div>

              {/* Card Wrapper */}
              <div
                className={`w-full pl-12 md:pl-0 md:w-[45%] ${
                  index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
                }`}
              >
                <div>
                  
                  {/* Content Layout */}
                  <div className="relative z-10">
                    {/* Position Title */}
                    <h3 className="text-sm sm:text-base lg:text-lg font-bold text-gray-900 dark:text-white group-hover:text-[#b026ff] dark:group-hover:text-[#00f0ff] transition-colors duration-300 mb-2 whitespace-nowrap overflow-hidden">
                      {exp.title}
                    </h3>

                    {/* Company Info Row */}
                    <div className="flex items-center gap-3">
                      {/* Company Icon */}
                      <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-xl bg-gray-100 dark:bg-white/5 text-gray-400 dark:text-gray-500 group-hover:bg-[#b026ff] group-hover:text-white dark:group-hover:bg-[#00f0ff] dark:group-hover:text-gray-900 transition-all duration-300 shadow-sm">
                        <span className="material-icons text-[20px]">business</span>
                      </div>

                      {/* Company & Location Text */}
                      <div className="flex flex-col min-w-0">
                        <h4 className="text-xs sm:text-sm lg:text-base font-semibold text-gray-700 dark:text-gray-300 whitespace-nowrap">
                          {exp.company}
                        </h4>
                        {exp.location && (
                          <span className="text-[10px] sm:text-xs font-medium text-gray-500 dark:text-gray-400 tracking-wide mt-0.5 whitespace-nowrap opacity-80">
                            {exp.location}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Subtle Background Decoration */}
                  <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                     <span className="material-icons text-4xl">trending_up</span>
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