import React, { useEffect, useRef } from "react";
import { animate, inView, stagger } from "motion";

interface EducationProject {
  type: string;
  title: string;
  description: string;
  links: { label: string; url: string }[];
}

interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  gpa?: string;
  description?: string;
  projects?: EducationProject[];
}

export function Education({ id, lang }: { id?: string; lang: "id" | "en" }) {
  const sectionRef = useRef<HTMLElement>(null);

  const education: EducationItem[] = [
    {
      id: "edu1",
      degree:
        lang === "id"
          ? "S1 Teknologi Informasi"
          : "Bachelor of Information Technology",
      institution: "Universitas Darma Persada",
      period: "2018 — 2022",
      gpa: "3.33",
      projects: [
        {
          type: lang === "id" ? "PROYEK MAGANG" : "INTERNSHIP PROJECT",
          title: "Cattle Management System",
          description:
            lang === "id"
              ? "Sistem pengelolaan data anggota dan aset ternak digital untuk Kelompok Tani Ternak Tanjung Asih, Subang."
              : "A digital management system for livestock assets and member data, developed for the Tanjung Asih Livestock Farmers Group in Subang.",
          links: [
            {
              label: "GITHUB",
              url: "https://github.com/fachriramdhan/cattle-management-system",
            },
          ],
        },
        {
          type: lang === "id" ? "PROYEK SKRIPSI" : "THESIS PROJECT",
          title: "BovineEYE Detection System",
          description:
            lang === "id"
              ? "Sistem deteksi penyakit pada mata sapi (pink-eye) real-time menggunakan Computer Vision YOLOv4 dan IoT."
              : "Real-time bovine pink-eye detection system using YOLOv4 Computer Vision and IoT integration.",
          links: [
            { label: "JOURNAL", url: "http://repository.unsada.ac.id/5030/" },
            {
              label: "GITHUB",
              url: "https://github.com/fachriramdhan/BovineEye-YOLOv4-Flask",
            },
          ],
        },
      ],
    },
    {
      id: "edu2",
      degree:
        lang === "id"
          ? "Teknik Komputer & Jaringan"
          : "Computer & Network Engineering",
      institution: "SMK Dinamika Pembangunan 1",
      period: "2015 — 2018",
      description:
        lang === "id"
          ? "Mempelajari dasar-dasar jaringan komputer, administrasi server, dan perakitan komputer."
          : "Studied the basics of computer networking, server administration, and hardware assembly.",
    },
  ];

  useEffect(() => {
    if (sectionRef.current) {
      inView(sectionRef.current, () => {
        const elements = sectionRef.current?.querySelectorAll(".edu-item");
        if (elements && elements.length > 0) {
          animate(
            elements,
            { opacity: [0, 1], x: [-20, 0] }, // Animasi slide dari kiri agar sama dengan Experience
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
      <div className="mb-5 sm:mb-8">
        <div className="flex items-center gap-3 mb-3">
          <span className="material-icons text-2xl text-[#b026ff] dark:text-[#00f0ff]">
            school
          </span>
          <h2 className="text-2xl md:text-4xl font-display font-bold tracking-tight text-gray-900 dark:text-white">
            {lang === "id" ? "Pendidikan" : "Education"}
          </h2>
        </div>
      </div>

      {/* Timeline Container (Garis Vertikal) */}
      <div className="relative border-l-2 border-gray-200 dark:border-white/10 ml-3 sm:ml-4 space-y-6 sm:space-y-10">
        {education.map((edu) => (
          <div
            key={edu.id}
            className="edu-item opacity-0 relative pl-8 sm:pl-10 group"
          >
            {/* Titik Timeline (Dot) */}
            <div className="absolute w-4 h-4 bg-gray-200 dark:bg-white/20 rounded-full -left-[9px] top-6 group-hover:bg-[#b026ff] dark:group-hover:bg-[#00f0ff] group-hover:scale-125 transition-all duration-300 shadow-[0_0_0_4px_#f9fafb] dark:shadow-[0_0_0_4px_#050505]"></div>

            {/* Card Content */}
            <div className="relative p-5 sm:p-7 rounded-2xl bg-white/70 dark:bg-[#111111]/70 backdrop-blur-md border border-gray-200/80 dark:border-white/10 hover:border-[#b026ff]/50 dark:hover:border-[#00f0ff]/50 transition-all duration-500 hover:shadow-[0_8px_30px_-5px_rgba(176,38,255,0.15)] dark:hover:shadow-[0_8px_30px_-5px_rgba(0,240,255,0.15)] overflow-hidden">
              {/* Ambient Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#b026ff]/5 via-transparent to-[#00f0ff]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

              <div className="relative z-10">
                {/* Header Pendidikan */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white group-hover:text-[#b026ff] dark:group-hover:text-[#00f0ff] transition-colors duration-300">
                      {edu.degree}
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="material-icons text-sm text-gray-400">
                        account_balance
                      </span>
                      <h4 className="text-sm sm:text-base font-semibold text-gray-700 dark:text-gray-300">
                        {edu.institution}
                      </h4>
                    </div>
                  </div>
                  <div className="flex flex-col sm:items-end">
                    <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-white/5 px-3 py-1.5 rounded-full w-max border border-gray-200/50 dark:border-white/5">
                      {edu.period}
                    </span>
                    {edu.gpa && (
                      <span className="text-[10px] font-bold text-[#b026ff] dark:text-[#00f0ff] mt-2 px-2">
                        GPA: {edu.gpa} / 4.00
                      </span>
                    )}
                  </div>
                </div>

                {/* Deskripsi */}
                {edu.description && (
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed font-light">
                    {edu.description}
                  </p>
                )}

                {/* Projects Section */}
                {edu.projects && edu.projects.length > 0 && (
                  <div className="mt-6 space-y-4">
                    <div className="flex items-center gap-2 mb-3 text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">
                      <span className="w-6 h-[1px] bg-gray-200 dark:bg-white/10"></span>
                      {lang === "id" ? "Proyek Utama" : "Key Projects"}
                    </div>

                    <div className="grid grid-cols-1 gap-3">
                      {edu.projects.map((project, idx) => (
                        <div
                          key={idx}
                          className="group/item border border-gray-100 dark:border-white/5 rounded-xl p-4 bg-gray-50/50 dark:bg-white/[0.02] hover:bg-white dark:hover:bg-white/[0.05] transition-all duration-300"
                        >
                          <div className="flex justify-between items-start mb-2">
                            <span className="text-[9px] font-black text-[#b026ff] dark:text-[#00f0ff] uppercase tracking-tighter px-1.5 py-0.5 bg-[#b026ff]/5 dark:bg-[#00f0ff]/5 rounded">
                              {project.type}
                            </span>
                            <div className="flex gap-3">
                              {project.links.map((link, lIdx) => (
                                <a
                                  key={lIdx}
                                  href={link.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-[10px] font-bold text-gray-400 hover:text-[#b026ff] dark:hover:text-[#00f0ff] transition-colors flex items-center gap-1"
                                >
                                  {link.label}{" "}
                                  <span className="material-icons text-[12px]">
                                    open_in_new
                                  </span>
                                </a>
                              ))}
                            </div>
                          </div>
                          <h5 className="text-sm font-bold text-gray-800 dark:text-gray-100 mb-1">
                            {project.title}
                          </h5>
                          <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed italic">
                            "{project.description}"
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
