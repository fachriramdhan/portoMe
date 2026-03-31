import React, { useEffect, useRef } from "react";
import { animate, inView, stagger } from "motion";

// Definisi tipe data agar lebih rapi (Opsional tapi disarankan untuk TypeScript)
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
      degree: "S1 Teknologi Informasi", // Gelar tetap dipertahankan
      institution: "Universitas Darma Persada",
      period: " 2018 — 2022",
      gpa: "3.33",
      projects: [
        {
          type: "PROJECT INTERNSHIP",
          title: "Cattle Management System",
          description:
            "Sistem pengelolaan data anggota dan aset ternak digital untuk Kelompok Tani Ternak Tanjung Asih, Subang.",
          links: [{ label: "GITHUB", url: "https://github.com/fachriramdhan/cattle-management-system" }, ],
        },
        {
          type: "THESIS PROJECT",
          title: "BovineEYE Detection System",
          description:
            "Sistem deteksi penyakit pada mata sapi (pink-eye) real-time menggunakan Computer Vision YOLOv4 dan IoT.",
          links: [
            { label: "JOURNAL", url: "https://github.com/fachriramdhan/BovineEye-YOLOv4-Flask" },
            { label: "GITHUB", url: "http://repository.unsada.ac.id/5030/" },
          ],
        },
      ],
    },
    {
      id: "edu2",
      degree: "Teknik Komputer & Jaringan",
      institution: "SMK Dinamika Pembangunan 1",
      period: "2015 — 2018",
      description:
        "Mempelajari dasar-dasar jaringan komputer, administrasi server, dan perakitan komputer.",
    },
  ];

  useEffect(() => {
    if (sectionRef.current) {
      inView(sectionRef.current, () => {
        const elements = sectionRef.current?.querySelectorAll(".edu-item");
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
    <section
      id={id}
      ref={sectionRef}
      className="scroll-mt-28 lg:scroll-mt-64 block"
    >
      <div className="mb-8 sm:mb-12">
        <h2 className="text-2xl md:text-4xl font-display font-bold mb-3 md:mb-4 tracking-tight">
          {lang === "id" ? "Pendidikan" : "Education"}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-xl text-sm md:text-base font-light transition-colors duration-500">
          {lang === "id"
            ? "Latar belakang akademis dan proyek terkait."
            : "My academic background and related projects."}
        </p>
      </div>

      <div className="space-y-6">
        {education.map((edu) => (
          <div
            key={edu.id}
            className="edu-item opacity-0 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl p-6 sm:p-8 transition-all duration-500 shadow-sm dark:shadow-none hover:shadow-md dark:hover:shadow-[0_0_20px_rgba(0,240,255,0.05)]"
          >
            {/* Header Pendidikan */}
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                  {edu.degree}
                </h3>
                <h4 className="text-lg font-semibold text-[#b026ff] dark:text-[#00f0ff]">
                  {edu.institution}
                </h4>
              </div>
              <div className="flex flex-col sm:items-end text-sm font-medium text-gray-500 dark:text-gray-400">
                <span className="bg-gray-100 dark:bg-white/5 px-3 py-1 rounded-full w-max mb-1">
                  {edu.period}
                </span>
                {edu.gpa && <span className="px-3 italic">GPA: {edu.gpa}</span>}
              </div>
            </div>

            {/* Deskripsi (Jika ada) */}
            {edu.description && (
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed font-light mt-4">
                {edu.description}
              </p>
            )}

            {/* Sub-proyek (Internship / Thesis) */}
            {edu.projects && edu.projects.length > 0 && (
              <div className="mt-6 space-y-4">
                {edu.projects.map((project, idx) => (
                  <div
                    key={idx}
                    className="border border-gray-100 dark:border-white/10 rounded-xl p-4 sm:p-5 bg-gray-50/50 dark:bg-white/5 transition-colors"
                  >
                    {/* Project Header (Type & Links) */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                      <span className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">
                        {project.type}
                      </span>
                      <div className="flex items-center gap-3">
                        {project.links.map((link, linkIdx) => (
                          <a
                            key={linkIdx}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs font-bold text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 flex items-center gap-1 transition-colors uppercase"
                          >
                            {link.label} ↗
                          </a>
                        ))}
                      </div>
                    </div>

                    {/* Project Title & Description */}
                    <h5 className="text-base sm:text-lg font-bold italic text-gray-900 dark:text-white mb-2">
                      {project.title}
                    </h5>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed font-light">
                      {project.description}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
