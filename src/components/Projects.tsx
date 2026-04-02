import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { animate, inView, stagger } from "motion";
import { AnimatePresence, motion } from "framer-motion";

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
  github?: string;
  role?: string;
  duration?: string;
  challenge?: string;
  solution?: string;
  outcome?: string;
}

export function Projects({ id, lang }: { id?: string; lang: "id" | "en" }) {
  const sectionRef = useRef<HTMLElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: "p1",
      title:
        lang === "id"
          ? "Dasbor Analitik Rantai Pasokan"
          : "Supply Chain Analytics Dashboard",
      description:
        lang === "id"
          ? "Dasbor visualisasi data interaktif yang memberikan wawasan tentang logistik rantai pasokan global, membantu mengidentifikasi kemacetan dan mengoptimalkan rute."
          : "Interactive data visualization dashboard providing insights into global supply chain logistics, helping identify bottlenecks and optimize routes.",
      image: "https://picsum.photos/seed/analytics/800/600?blur=2",
      tags: ["Angular", "D3.js", "Python", "FastAPI"],
      role: lang === "id" ? "Pengembang Full Stack" : "Full Stack Developer",
      duration: lang === "id" ? "4 Bulan" : "4 Months",
    },
    {
      id: "p2",
      title:
        lang === "id"
          ? "Sistem Manajemen Inventaris"
          : "Inventory Management System",
      description:
        lang === "id"
          ? "Sistem berbasis cloud untuk melacak tingkat inventaris, pesanan, penjualan, dan pengiriman. Termasuk pemindaian barcode dan peringatan stok rendah otomatis."
          : "Cloud-based system for tracking inventory levels, orders, sales, and deliveries. Includes barcode scanning and automated low-stock alerts.",
      image: "https://picsum.photos/seed/inventory/800/600?blur=2",
      tags: ["React", "TailwindCSS", "Express", "MongoDB"],
      github: "#",
    },
    {
      id: "p3",
      title:
        lang === "id"
          ? "SIM-SAPI (Manajemen Ternak)"
          : "SIM-SAPI (Cattle Management)",
      description:
        lang === "id"
          ? "Sistem informasi manajemen untuk peternakan sapi, mencakup pendataan hewan, pelacakan kesehatan, dan efisiensi operasional peternakan."
          : "Management information system for cattle farming, covering animal data collection, health tracking, and farm operational efficiency.",
      image: "https://picsum.photos/seed/sapi/800/600?blur=2",
      tags: ["ASP.NET Core", "C#", "SQL Server", "Bootstrap"],
      role: lang === "id" ? "Pengembang Backend" : "Backend Developer",
    },
    {
      id: "p4",
      title:
        lang === "id"
          ? "RELA-ESTAFET Logistik Bencana"
          : "RELA-ESTAFET Relief Logistics",
      description:
        lang === "id"
          ? "Aplikasi web untuk manajemen logistik dan distribusi bantuan bencana alam, memudahkan koordinasi antara relawan dan posko pusat."
          : "Web application for disaster relief logistics and distribution management, facilitating coordination between volunteers and central command.",
      image: "https://picsum.photos/seed/disaster/800/600?blur=2",
      tags: ["Laravel", "React", "PostgreSQL", "Maps API"],
      duration: lang === "id" ? "3 Bulan" : "3 Months",
    },
    {
      id: "p5",
      title:
        lang === "id"
          ? "Sistem Pemantauan Banjir IoT 1"
          : "IoT Flood Monitoring System 1",
      description:
        lang === "id"
          ? "Sistem peringatan dini untuk memantau ketinggian debit air secara real-time."
          : "Early warning system for real-time monitoring of water levels.",
      image: "https://picsum.photos/seed/flood1/800/600?blur=2",
      tags: ["Python", "HTML", "Raspberry Pi", "IoT"],
    },
    {
      id: "p6",
      title:
        lang === "id"
          ? "Sistem Pemantauan Banjir IoT 2"
          : "IoT Flood Monitoring System 2",
      description:
        lang === "id"
          ? "Sensor tambahan untuk perluasan wilayah monitoring di titik rawan."
          : "Additional sensors for monitoring expansion in prone areas.",
      image: "https://picsum.photos/seed/flood2/800/600?blur=2",
      tags: ["Python", "HTML", "Raspberry Pi", "IoT"],
    },
    {
      id: "p7",
      title:
        lang === "id"
          ? "Sistem Pemantauan Banjir IoT 3"
          : "IoT Flood Monitoring System 3",
      description:
        lang === "id"
          ? "Integrasi dengan webhook WhatsApp untuk notifikasi otomatis ke warga."
          : "Integration with WhatsApp webhook for automated notifications to citizens.",
      image: "https://picsum.photos/seed/flood3/800/600?blur=2",
      tags: ["Python", "Node.js", "API", "IoT"],
    },
    {
      id: "p8",
      title:
        lang === "id"
          ? "Sistem Pemantauan Banjir IoT 4"
          : "IoT Flood Monitoring System 4",
      description:
        lang === "id"
          ? "Dashboard data historis untuk analisa tren curah hujan tahunan."
          : "Historical data dashboard for analyzing annual rainfall trends.",
      image: "https://picsum.photos/seed/flood4/800/600?blur=2",
      tags: ["React", "Charts.js", "Python", "IoT"],
    },
  ];

  useEffect(() => {
    if (sectionRef.current) {
      inView(sectionRef.current, () => {
        const elements = sectionRef.current?.querySelectorAll(".project-card");
        if (elements && elements.length > 0) {
          animate(
            elements,
            { opacity: [0, 1], y: [20, 0] },
            { delay: stagger(0.1), duration: 0.8, ease: [0.22, 1, 0.36, 1] },
          );
        }
      });
    }

    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedProject]);

  const scroll = (direction: "left" | "right") => {
    if (sliderRef.current) {
      const scrollAmount = sliderRef.current.clientWidth / 3;
      sliderRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const modalContent = (
    <AnimatePresence>
      {selectedProject && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 sm:p-6 lg:p-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-gray-900/70 dark:bg-black/80 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative bg-white dark:bg-[#0a0a0a] w-full max-w-3xl max-h-[85vh] overflow-y-auto rounded-2xl sm:rounded-3xl shadow-2xl border border-gray-200 dark:border-white/10 flex flex-col [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-thumb]:bg-gray-700 [&::-webkit-scrollbar-thumb]:rounded-full"
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-50 p-1.5 rounded-full bg-white/70 dark:bg-black/50 text-gray-900 dark:text-white backdrop-blur-md hover:bg-white dark:hover:bg-black hover:scale-110 transition-all shadow-sm border border-gray-200 dark:border-white/10"
            >
              <span className="material-icons text-lg">close</span>
            </button>

            <div className="relative h-40 sm:h-52 w-full shrink-0">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent dark:from-[#0a0a0a] dark:via-[#0a0a0a]/20"></div>
            </div>

            <div className="p-5 sm:p-8 -mt-8 relative z-10 flex-grow">
              <div className="flex flex-wrap gap-2 mb-3">
                {selectedProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] sm:text-xs font-bold px-2.5 py-1 rounded-full bg-white dark:bg-[#1a1a1a] text-[#b026ff] dark:text-[#00f0ff] border border-[#b026ff]/20 dark:border-[#00f0ff]/20 shadow-sm uppercase tracking-wider"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h2 className="text-xl sm:text-2xl font-display font-bold mb-5 tracking-tight text-gray-900 dark:text-white leading-tight">
                {selectedProject.title}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2 space-y-5">
                  {[
                    {
                      icon: "info",
                      title: lang === "id" ? "Ikhtisar" : "Overview",
                      content: selectedProject.description,
                    },
                    {
                      icon: "warning",
                      title: lang === "id" ? "Tantangan" : "Challenge",
                      content: selectedProject.challenge,
                    },
                    {
                      icon: "lightbulb",
                      title: lang === "id" ? "Solusi" : "Solution",
                      content: selectedProject.solution,
                    },
                    {
                      icon: "emoji_events",
                      title: lang === "id" ? "Hasil" : "Outcome",
                      content: selectedProject.outcome,
                    },
                  ].map(
                    (section, idx) =>
                      section.content && (
                        <div key={idx} className="group">
                          <h3 className="text-sm font-bold mb-2 flex items-center gap-2 text-gray-900 dark:text-white">
                            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-[#b026ff]/10 dark:bg-[#00f0ff]/10 text-[#b026ff] dark:text-[#00f0ff]">
                              <span className="material-icons text-[14px]">
                                {section.icon}
                              </span>
                            </span>
                            {section.title}
                          </h3>
                          <p className="text-justify text-gray-600 dark:text-gray-400 leading-relaxed font-light text-xs sm:text-sm pl-8">
                            {section.content}
                          </p>
                        </div>
                      ),
                  )}
                </div>

                <div className="space-y-4">
                  <div className="bg-gray-50 dark:bg-[#111] rounded-xl p-4 border border-gray-100 dark:border-white/5 shadow-sm">
                    <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                      <span className="material-icons text-[12px]">
                        assignment
                      </span>
                      {lang === "id" ? "Detail Proyek" : "Project Details"}
                    </h3>
                    <ul className="space-y-3">
                      {selectedProject.role && (
                        <li className="flex flex-col">
                          <span className="text-[10px] text-gray-500 mb-0.5 uppercase tracking-wider">
                            {lang === "id" ? "Peran" : "Role"}
                          </span>
                          <span className="font-semibold text-xs text-gray-900 dark:text-white">
                            {selectedProject.role}
                          </span>
                        </li>
                      )}
                      {selectedProject.duration && (
                        <li className="flex flex-col">
                          <span className="text-[10px] text-gray-500 mb-0.5 uppercase tracking-wider">
                            {lang === "id" ? "Durasi" : "Duration"}
                          </span>
                          <span className="font-semibold text-xs text-gray-900 dark:text-white">
                            {selectedProject.duration}
                          </span>
                        </li>
                      )}
                    </ul>
                  </div>

                  {(selectedProject.link || selectedProject.github) && (
                    <div className="flex flex-col gap-2">
                      {selectedProject.link && (
                        <a
                          href={selectedProject.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-gradient-to-r from-[#b026ff] to-[#8000ff] dark:from-[#00f0ff] dark:to-[#0080ff] text-white font-bold text-xs transition-all hover:shadow-[0_0_15px_rgba(176,38,255,0.4)] dark:hover:shadow-[0_0_15px_rgba(0,240,255,0.4)] hover:-translate-y-0.5"
                        >
                          <span className="material-icons text-[14px] transition-transform group-hover:scale-110">
                            open_in_new
                          </span>
                          {lang === "id" ? "Kunjungi Situs" : "Visit Site"}
                        </a>
                      )}
                      {selectedProject.github && (
                        <a
                          href={selectedProject.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-white dark:bg-[#111] text-gray-900 dark:text-white font-bold text-xs transition-all hover:shadow-sm border border-gray-200 dark:border-white/10 hover:border-gray-300 dark:hover:border-white/20 hover:-translate-y-0.5"
                        >
                          <span className="material-icons text-[14px] transition-transform group-hover:scale-110">
                            code
                          </span>
                          {lang === "id" ? "Lihat Kode" : "View Code"}
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );

  return (
    <section
      id={id}
      ref={sectionRef}
      className="scroll-mt-28 lg:scroll-mt-64 block"
    >
      {/* Bagian Header & Tombol Navigasi Slide */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-4">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <span className="material-icons text-2xl text-[#b026ff] dark:text-[#00f0ff]">
              rocket_launch
            </span>
            <h2 className="text-2xl md:text-4xl font-display font-bold tracking-tight text-gray-900 dark:text-white">
              {lang === "id" ? "Proyek" : "Projects"}
            </h2>
          </div>
          
        </div>

        {/* Tombol Slide dan Teks Petunjuk (Ditampilkan jika lebih dari 6 proyek) */}
        {projects.length > 6 && (
          <div className="flex flex-col items-center sm:items-end gap-1.5 hidden sm:flex">
            <div className="flex items-center gap-2">
              <button
                onClick={() => scroll("left")}
                className="w-10 h-10 flex items-center justify-center rounded-xl bg-white dark:bg-[#111] border border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-400 hover:bg-[#b026ff] hover:text-white dark:hover:bg-[#00f0ff] dark:hover:text-gray-900 hover:border-transparent transition-all duration-300 shadow-sm"
                aria-label="Previous"
              >
                <span className="material-icons text-[18px]">chevron_left</span>
              </button>
              <button
                onClick={() => scroll("right")}
                className="w-10 h-10 flex items-center justify-center rounded-xl bg-white dark:bg-[#111] border border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-400 hover:bg-[#b026ff] hover:text-white dark:hover:bg-[#00f0ff] dark:hover:text-gray-900 hover:border-transparent transition-all duration-300 shadow-sm"
                aria-label="Next"
              >
                <span className="material-icons text-[18px]">
                  chevron_right
                </span>
              </button>
            </div>
            {/* Teks Petunjuk Geser */}
            <span className="text-[10px] text-gray-400 dark:text-gray-500 uppercase tracking-widest font-semibold">
              {lang === "id" ? "Geser" : "Slide"}
            </span>
          </div>
        )}
      </div>

      {/* Grid */}
      <div
        ref={sliderRef}
        className="grid grid-rows-2 grid-flow-col auto-cols-[85vw] sm:auto-cols-[calc(50%-10px)] lg:auto-cols-[calc(33.333%-16px)] gap-5 sm:gap-6 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-6 -mx-4 px-4 sm:mx-0 sm:px-0"
      >
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => setSelectedProject(project)}
            /* Dihapus: hover:-translate-y-1.5 */
            className="project-card opacity-0 group relative rounded-2xl overflow-hidden bg-white/70 dark:bg-white/5 backdrop-blur-md border border-gray-200/80 dark:border-white/10 cursor-pointer hover:border-[#b026ff]/50 dark:hover:border-[#00f0ff]/50 hover:shadow-xl dark:hover:shadow-[0_8px_30px_rgba(0,240,255,0.1)] transition-all duration-500 flex flex-col h-[320px] snap-start"
          >
            {/* Ambient Background Glow pada Hover */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#b026ff]/5 dark:to-[#00f0ff]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

            {/* Bagian Gambar */}
            <div className="w-full h-36 overflow-hidden relative shrink-0">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500 z-10"></div>
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Bagian Teks */}
            <div className="p-4 flex flex-col flex-grow relative z-10">
              <h3 className="text-base font-bold mb-1.5 group-hover:text-[#b026ff] dark:group-hover:text-[#00f0ff] transition-colors duration-300 line-clamp-1">
                {project.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-400 text-xs line-clamp-2 font-light flex-grow leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-gray-200/60 dark:border-white/5">
                {project.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="text-[9px] font-semibold px-2 py-1 rounded border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 text-gray-600 dark:text-gray-300 group-hover:border-[#b026ff]/30 dark:group-hover:border-[#00f0ff]/30 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
                {project.tags.length > 3 && (
                  <span className="text-[9px] font-semibold px-2 py-1 rounded border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 text-gray-600 dark:text-gray-300">
                    +{project.tags.length - 3}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {typeof document !== "undefined" &&
        createPortal(modalContent, document.body)}
    </section>
  );
}
