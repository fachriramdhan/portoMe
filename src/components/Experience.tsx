import React, { useEffect, useRef } from "react";
import { animate, inView, stagger } from "motion";

// Opsional: Interface untuk TypeScript agar lebih rapi
interface ExperienceItem {
  id: string;
  title: string;
  company: string;
  location?: string;
  period: string;
  descriptions: string[]; // Diubah menjadi array agar bisa jadi list/bullet points
  skills: string[];
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
      descriptions: [
        "Mengembangkan Web-Based Production & Monitoring Dashboard menggunakan Python Django untuk menggantikan sistem legacy, meningkatkan aksesibilitas data dan efisiensi monitoring produksi.",
        "Mengelola Work Order System dan pelacakan stok bahan baku yang terintegrasi langsung dengan monitoring mesin.",
        "Mengembangkan Stock & Tools Management System berbasis ASP.NET Core untuk Tim Digital Transformation 4.0 dalam mengelola stok otomasi, IoT devices, dan tools kerja.",
        "Mengintegrasikan data mesin dan produksi secara real-time ke sistem monitoring dan platform Rootcloud IoT.",
        "Terlibat dalam pengembangan MES (Manufacturing Execution System), khususnya dashboard monitoring OEE real-time untuk membantu analisis performa mesin dan pengambilan keputusan operasional.",
        "Melakukan troubleshooting sistem produksi, perbaikan bug, serta memastikan reliability sistem untuk meminimalkan downtime.",
      ],
      skills: [
        "Python",
        "Django",
        "ASP.NET Core",
        "IoT",
        "Rootcloud",
        "MES",
        "OEE",
        "Troubleshooting",
      ],
    },
    {
      id: "exp2",
      title: "Staff IT & Admin Operasional",
      company: "PT Delta Tekno Perkasa",
      period: "Feb 2023 — Nov 2023",
      descriptions: [
        "Mengembangkan dan memelihara berbagai aplikasi klien menggunakan React dan Node.js.",
        "Mengintegrasikan gateway pembayaran pihak ketiga dan mengoptimalkan kueri basis data.",
      ],
      skills: ["React", "Express", "PostgreSQL", "Stripe"],
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
      <div className="mb-8 sm:mb-12">
        <h2 className="text-2xl md:text-4xl font-display font-bold mb-3 md:mb-4 tracking-tight">
          {lang === "id" ? "Pengalaman" : "Experience"}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-xl text-sm md:text-base font-light transition-colors duration-500">
          {lang === "id"
            ? "Perjalanan profesional saya dalam rekayasa perangkat lunak dan IoT."
            : "My professional journey in software engineering and IoT."}
        </p>
      </div>

      <div className="relative border-l border-gray-200 dark:border-white/10 ml-3 sm:ml-4 space-y-8 sm:space-y-12">
        {experiences.map((exp) => (
          <div
            key={exp.id}
            className="exp-item opacity-0 relative pl-6 sm:pl-8 group"
          >
            {/* Titik Timeline */}
            <div className="absolute w-3 h-3 bg-gray-200 dark:bg-white/20 rounded-full -left-[6.5px] top-2 group-hover:bg-[#b026ff] dark:group-hover:bg-[#00f0ff] group-hover:scale-150 transition-all duration-300 shadow-[0_0_0_4px_#f9fafb] dark:shadow-[0_0_0_4px_#050505]"></div>

            {/* Header Pengalaman */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-1 gap-2 sm:gap-4">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white group-hover:text-[#b026ff] dark:group-hover:text-[#00f0ff] transition-colors duration-300">
                {exp.title}
              </h3>
              <span className="text-xs sm:text-sm font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-white/5 px-3 py-1 rounded-full w-max">
                {exp.period}
              </span>
            </div>

            {/* Info Perusahaan & Lokasi */}
            <h4 className="text-sm sm:text-base font-semibold text-gray-700 dark:text-gray-300 mb-4 flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
              <span>{exp.company}</span>
              {exp.location && (
                <>
                  <span className="hidden sm:inline text-gray-400 dark:text-gray-600">
                    •
                  </span>
                  <span className="text-xs sm:text-sm font-normal text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    {exp.location}
                  </span>
                </>
              )}
            </h4>

            {/* Deskripsi (Diubah menjadi Bullet Points Custom & Justify) */}
            <ul className="space-y-3 mb-6">
              {exp.descriptions.map((desc, idx) => (
                <li key={idx} className="flex items-start gap-3 group/item">
                  <span className="material-icons text-[16px] text-gray-400 dark:text-gray-600 group-hover/item:text-[#b026ff] dark:group-hover/item:text-[#00f0ff] transition-colors mt-1 shrink-0">
                    arrow_right
                  </span>
                  {/* Tambahkan text-justify di baris bawah ini */}
                  <p className="text-justify text-gray-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed font-light group-hover/item:text-gray-900 dark:group-hover/item:text-gray-200 transition-colors">
                    {desc}
                  </p>
                </li>
              ))}
            </ul>

            {/* Skills / Tech Stack */}
            <div className="flex flex-wrap gap-2 mt-4">
              {exp.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-[10px] sm:text-xs font-medium px-2.5 py-1 rounded-md bg-gray-50 dark:bg-white/5 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-white/10 hover:border-[#b026ff]/50 dark:hover:border-[#00f0ff]/50 transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
