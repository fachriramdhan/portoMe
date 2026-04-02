import React, { useEffect, useRef } from "react";
import { animate, inView, stagger } from "motion";

export function Skills({ id, lang }: { id?: string; lang: "id" | "en" }) {
  const sectionRef = useRef<HTMLElement>(null);

  // Data diperbarui dengan objek skill yang memuat nama dan icon FontAwesome
  const skillCategories = [
    {
      id: "web",
      title: lang === "id" ? "Web Development" : "Web Development",
      icon: "fas fa-laptop-code",
      skills: [
        { name: "ASP.NET Core", icon: "fab fa-microsoft" },
        { name: "C#", icon: "fas fa-hashtag" },
        { name: "Laravel", icon: "fab fa-laravel" },
        { name: "React.js", icon: "fab fa-react" },
        { name: "Python", icon: "fab fa-python" },
        { name: "Tailwind", icon: "fab fa-css3-alt" },
      ],
    },
    {
      id: "database",
      title: lang === "id" ? "Database" : "Database",
      icon: "fas fa-database",
      skills: [
        { name: "MySQL", icon: "fas fa-server" },
        { name: "PostgreSQL", icon: "fas fa-server" },
        { name: "SQL Server", icon: "fab fa-microsoft" },
      ],
    },
    {
      id: "iot",
      title: "IoT & Automation",
      icon: "fas fa-microchip",
      skills: [
        { name: "Node-RED", icon: "fab fa-node-js" },
        { name: "Raspberry Pi", icon: "fab fa-raspberry-pi" },
        { name: "ESP32", icon: "fas fa-wifi" },
        { name: "Arduino", icon: "fas fa-robot" },
        { name: "LAN", icon: "fas fa-network-wired" },
      ],
    },
  ];

  useEffect(() => {
    if (sectionRef.current) {
      inView(sectionRef.current, () => {
        const elements = sectionRef.current?.querySelectorAll(".skill-card");
        if (elements && elements.length > 0) {
          animate(
            elements,
            { opacity: [0, 1], y: [20, 0] },
            { delay: stagger(0.1), duration: 0.6, ease: [0.22, 1, 0.36, 1] },
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
      <div className="mb-8 sm:mb-12">
        <div className="flex items-center gap-3 mb-3">
          <i className="fas fa-terminal text-2xl text-[#b026ff] dark:text-[#00f0ff]"></i>
          <h2 className="text-2xl md:text-4xl font-display font-bold tracking-tight text-gray-900 dark:text-white">
            {lang === "id" ? "Gudang Teknis" : "Technical Arsenal"}
          </h2>
        </div>
        
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 items-stretch">
        {skillCategories.map((category) => (
          <div
            key={category.id}
            className="skill-card opacity-0 group relative flex flex-col h-full p-5 sm:p-6 rounded-3xl bg-white/70 dark:bg-[#111111]/70 backdrop-blur-md border border-gray-200/80 dark:border-white/10 hover:border-[#b026ff]/50 dark:hover:border-[#00f0ff]/50 transition-all duration-500 hover:shadow-[0_8px_40px_-10px_rgba(176,38,255,0.3)] dark:hover:shadow-[0_8px_40px_-10px_rgba(0,240,255,0.3)] hover:-translate-y-1.5 overflow-hidden"
          >
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#b026ff]/5 via-transparent to-[#00f0ff]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
            <div className="absolute -top-10 -right-10 w-28 h-28 bg-[#b026ff]/10 dark:bg-[#00f0ff]/10 rounded-full blur-3xl group-hover:bg-[#b026ff]/20 dark:group-hover:bg-[#00f0ff]/20 transition-all duration-500 pointer-events-none"></div>

            {/* Header Card dengan Tinggi Tetap (Fix Alignment) */}
            <div className="flex flex-col h-[110px] mb-4 relative z-10">
              <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-xl bg-gray-50 dark:bg-white/5 text-[#b026ff] dark:text-[#00f0ff] shadow-sm border border-gray-100 dark:border-white/5 group-hover:bg-[#b026ff] group-hover:text-white dark:group-hover:bg-[#00f0ff] dark:group-hover:text-gray-900 transition-all duration-500 group-hover:scale-110 group-hover:-rotate-6">
                <i className={`${category.icon} text-xl`}></i>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white tracking-tight leading-snug group-hover:text-[#b026ff] dark:group-hover:text-[#00f0ff] transition-colors duration-300 line-clamp-2">
                {category.title}
              </h3>
            </div>

            {/* Area Tags - Divider pasti sejajar karena header tingginya fix */}
            <div className="pt-5 border-t border-gray-200/60 dark:border-white/10 relative z-10 flex-1 flex flex-col">
              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill, index) => (
                  <div
                    key={skill.name}
                    style={{ transitionDelay: `${index * 40}ms` }}
                    className="group/tag flex items-center gap-1.5 px-3 py-1.5 text-[11px] sm:text-xs font-semibold rounded-lg bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400 border border-transparent hover:!border-gray-300 dark:hover:!border-white/20 hover:!bg-white dark:hover:!bg-[#1a1a1a] hover:!text-[#b026ff] dark:hover:!text-[#00f0ff] transition-all duration-300 cursor-default shadow-sm hover:shadow-md"
                  >
                    <i
                      className={`${skill.icon} text-sm opacity-70 group-hover/tag:opacity-100 transition-opacity`}
                    ></i>
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
