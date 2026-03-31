import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom"; // <-- IMPORT BARU INI WAJIB DITAMBAHKAN
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
  featured?: boolean;
  role?: string;
  duration?: string;
  challenge?: string;
  solution?: string;
  outcome?: string;
  metrics?: { label: string; value: number; suffix: string }[];
}

export function Projects({ id, lang }: { id?: string; lang: "id" | "en" }) {
  const sectionRef = useRef<HTMLElement>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: "p1",
      title:
        lang === "id"
          ? "Sistem SCADA Manufaktur Cerdas"
          : "Smart Manufacturing SCADA",
      description:
        lang === "id"
          ? "Sistem pemantauan dan kontrol real-time komprehensif untuk fasilitas manufaktur otomotif skala besar, mengintegrasikan data IoT dengan dasbor web."
          : "Comprehensive real-time monitoring and control system for large-scale automotive manufacturing facilities, integrating IoT data with web dashboards.",
      image: "https://picsum.photos/seed/scada/800/600?blur=2",
      tags: ["Angular", "Node.js", "AVEVA Edge", "SQL Server", "Real-time"],
      featured: true,
      role:
        lang === "id"
          ? "Insinyur Full Stack Utama"
          : "Lead Full Stack Engineer",
      duration: lang === "id" ? "8 Bulan" : "8 Months",
      challenge:
        lang === "id"
          ? "Mengintegrasikan mesin lama dengan tumpukan web modern sambil mempertahankan latensi di bawah 100ms untuk pemantauan data kritis."
          : "Integrating legacy machinery with a modern web stack while maintaining sub-100ms latency for critical data monitoring.",
      solution:
        lang === "id"
          ? "Mengembangkan gateway kustom menggunakan Node.js untuk menerjemahkan protokol industri (Modbus/OPC UA) ke WebSockets, yang disajikan melalui frontend Angular yang sangat optimal."
          : "Developed a custom gateway using Node.js to translate industrial protocols (Modbus/OPC UA) to WebSockets, served via a highly optimized Angular frontend.",
      outcome:
        lang === "id"
          ? "Meningkatkan efisiensi produksi sebesar 15% dan mengurangi waktu henti peralatan sebesar 22% melalui pemeliharaan prediktif."
          : "Increased production efficiency by 15% and reduced equipment downtime by 22% through predictive maintenance.",
    },
    {
      id: "p2",
      title:
        lang === "id" ? "Platform E-Commerce B2B" : "B2B E-Commerce Platform",
      description:
        lang === "id"
          ? "Aplikasi e-commerce berkinerja tinggi yang disesuaikan untuk transaksi B2B, menampilkan penetapan harga kompleks, manajemen inventaris, dan pemrosesan pesanan otomatis."
          : "High-performance e-commerce application tailored for B2B transactions, featuring complex pricing, inventory management, and automated order processing.",
      image: "https://picsum.photos/seed/ecommerce/800/600?blur=2",
      tags: ["React", "Next.js", "C#", "ASP.NET Core", "PostgreSQL", "Stripe"],
      featured: true,
      link: "#",
      github: "#",
      role:
        lang === "id"
          ? "Pengembang Frontend Senior"
          : "Senior Frontend Developer",
      duration: lang === "id" ? "6 Bulan" : "6 Months",
      challenge:
        lang === "id"
          ? "Menangani katalog produk yang sangat besar (100k+ item) dengan aturan penetapan harga dinamis per pelanggan tanpa mengorbankan waktu muat halaman."
          : "Handling a massive product catalog (100k+ items) with dynamic pricing rules per customer without sacrificing page load times.",
      solution:
        lang === "id"
          ? "Menerapkan arsitektur hybrid rendering dengan Next.js, melakukan cache data statis di edge, dan mengambil harga khusus pengguna secara asinkron."
          : "Implemented a hybrid rendering architecture with Next.js, caching static data at the edge, and fetching user-specific pricing asynchronously.",
      outcome:
        lang === "id"
          ? "Mencapai skor Lighthouse 98, menghasilkan peningkatan 30% dalam tingkat konversi B2B."
          : "Achieved a Lighthouse score of 98, resulting in a 30% increase in B2B conversion rates.",
    },
    {
      id: "p3",
      title:
        lang === "id"
          ? "Dasbor Analitik Rantai Pasokan"
          : "Supply Chain Analytics Dashboard",
      description:
        lang === "id"
          ? "Dasbor visualisasi data interaktif yang memberikan wawasan tentang logistik rantai pasokan global, membantu mengidentifikasi kemacetan dan mengoptimalkan rute."
          : "Interactive data visualization dashboard providing insights into global supply chain logistics, helping identify bottlenecks and optimize routes.",
      image: "https://picsum.photos/seed/analytics/800/600?blur=2",
      tags: ["Angular", "D3.js", "Python", "FastAPI", "Google Maps API"],
      link: "#",
      role: lang === "id" ? "Pengembang Full Stack" : "Full Stack Developer",
      duration: lang === "id" ? "4 Bulan" : "4 Months",
    },
    {
      id: "p4",
      title:
        lang === "id"
          ? "Sistem Manajemen Inventaris"
          : "Inventory Management System",
      description:
        lang === "id"
          ? "Sistem berbasis cloud untuk melacak tingkat inventaris, pesanan, penjualan, dan pengiriman. Termasuk pemindaian barcode dan peringatan stok rendah otomatis."
          : "Cloud-based system for tracking inventory levels, orders, sales, and deliveries. Includes barcode scanning and automated low-stock alerts.",
      image: "https://picsum.photos/seed/inventory/800/600?blur=2",
      tags: ["React", "TailwindCSS", "Express", "MongoDB", "Firebase"],
      github: "#",
    },
  ];

  const featuredProjects = projects.filter((p) => p.featured);
  const regularProjects = projects.filter((p) => !p.featured);
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % featuredProjects.length);
  const prevSlide = () =>
    setCurrentSlide(
      (prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length,
    );

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

  // Ini adalah blok konten Modal yang akan di-"Portal"-kan ke Root HTML
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
            /* PERBAIKAN: 
               1. max-w-5xl dikecilkan jadi max-w-4xl 
               2. Scrollbar tebal di-custom menjadi tipis & transparan
            */
            className="relative bg-white dark:bg-[#0a0a0a] w-full max-w-4xl max-h-[85vh] overflow-y-auto rounded-2xl sm:rounded-3xl shadow-2xl border border-gray-200 dark:border-white/10 flex flex-col [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-thumb]:bg-gray-700 [&::-webkit-scrollbar-thumb]:rounded-full"
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 sm:top-5 sm:right-5 z-50 p-1.5 sm:p-2 rounded-full bg-white/70 dark:bg-black/50 text-gray-900 dark:text-white backdrop-blur-md hover:bg-white dark:hover:bg-black hover:scale-110 transition-all shadow-sm border border-gray-200 dark:border-white/10"
            >
              <span className="material-icons text-lg sm:text-xl">close</span>
            </button>

            {/* PERBAIKAN: Tinggi gambar diturunkan drastis agar tidak memenuhi layar */}
            <div className="relative h-40 sm:h-56 md:h-64 w-full shrink-0">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent dark:from-[#0a0a0a] dark:via-[#0a0a0a]/20"></div>
            </div>

            {/* Area Konten: Padding sedikit dikurangi agar lebih proporsional */}
            <div className="p-5 sm:p-8 md:p-10 -mt-12 sm:-mt-16 relative z-10 flex-grow">
              <div className="flex flex-wrap gap-2 mb-4">
                {selectedProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] sm:text-xs font-bold px-3 py-1 rounded-full bg-white dark:bg-[#1a1a1a] text-[#b026ff] dark:text-[#00f0ff] border border-[#b026ff]/20 dark:border-[#00f0ff]/20 shadow-sm uppercase tracking-wider"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* PERBAIKAN: Ukuran font judul dikecilkan agar lebih rapi */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-6 sm:mb-8 tracking-tight text-gray-900 dark:text-white leading-tight">
                {selectedProject.title}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2 space-y-6">
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
                          <h3 className="text-lg font-bold mb-2 flex items-center gap-2 text-gray-900 dark:text-white">
                            <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-[#b026ff]/10 dark:bg-[#00f0ff]/10 text-[#b026ff] dark:text-[#00f0ff]">
                              <span className="material-icons text-base">
                                {section.icon}
                              </span>
                            </span>
                            {section.title}
                          </h3>
                          <p className="text-justify text-gray-600 dark:text-gray-400 leading-relaxed font-light text-sm sm:text-base pl-9">
                            {section.content}
                          </p>
                        </div>
                      ),
                  )}
                </div>

                <div className="space-y-6">
                  <div className="bg-gray-50 dark:bg-[#111] rounded-2xl p-5 border border-gray-100 dark:border-white/5 shadow-sm">
                    <h3 className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                      <span className="material-icons text-sm">assignment</span>
                      {lang === "id" ? "Detail Proyek" : "Project Details"}
                    </h3>
                    <ul className="space-y-4">
                      {selectedProject.role && (
                        <li className="flex flex-col">
                          <span className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400 mb-1 uppercase tracking-wider">
                            {lang === "id" ? "Peran" : "Role"}
                          </span>
                          <span className="font-semibold text-sm text-gray-900 dark:text-white">
                            {selectedProject.role}
                          </span>
                        </li>
                      )}
                      {selectedProject.duration && (
                        <li className="flex flex-col">
                          <span className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400 mb-1 uppercase tracking-wider">
                            {lang === "id" ? "Durasi" : "Duration"}
                          </span>
                          <span className="font-semibold text-sm text-gray-900 dark:text-white">
                            {selectedProject.duration}
                          </span>
                        </li>
                      )}
                    </ul>
                  </div>

                  {(selectedProject.link || selectedProject.github) && (
                    <div className="flex flex-col gap-3">
                      {selectedProject.link && (
                        <a
                          href={selectedProject.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gradient-to-r from-[#b026ff] to-[#8000ff] dark:from-[#00f0ff] dark:to-[#0080ff] text-white font-bold text-sm transition-all hover:shadow-[0_0_20px_rgba(176,38,255,0.4)] dark:hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] hover:-translate-y-1"
                        >
                          <span className="material-icons text-sm transition-transform group-hover:scale-110">
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
                          className="group flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-white dark:bg-[#111] text-gray-900 dark:text-white font-bold text-sm transition-all hover:shadow-md border border-gray-200 dark:border-white/10 hover:border-gray-300 dark:hover:border-white/20 hover:-translate-y-1"
                        >
                          <span className="material-icons text-sm transition-transform group-hover:scale-110">
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
      <div className="mb-8 sm:mb-12">
        <h2 className="text-2xl md:text-4xl font-display font-bold mb-3 md:mb-4 tracking-tight">
          {lang === "id" ? "Proyek" : "Projects"}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-xl text-sm md:text-base font-light transition-colors duration-500">
          {lang === "id"
            ? "Pilihan proyek terbaru saya di bidang pengembangan web dan otomasi industri."
            : "A selection of my recent projects in web development and industrial automation."}
        </p>
      </div>

      {/* Featured Projects Carousel (Tidak Diubah) */}
      {featuredProjects.length > 0 && (
        <div className="mb-12 sm:mb-16 relative rounded-2xl sm:rounded-3xl overflow-hidden bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 shadow-sm dark:shadow-none group">
          <div className="relative h-[70vh] min-h-[500px] sm:min-h-[400px] max-h-[600px] w-full overflow-hidden">
            <AnimatePresence initial={false} mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="absolute inset-0 flex flex-col lg:flex-row"
              >
                <div
                  className="w-full lg:w-1/2 h-[45%] lg:h-full relative overflow-hidden cursor-pointer shrink-0"
                  onClick={() =>
                    setSelectedProject(featuredProjects[currentSlide])
                  }
                >
                  <div className="absolute inset-0 bg-black/20 dark:bg-black/40 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                  <img
                    src={featuredProjects[currentSlide].image}
                    alt={featuredProjects[currentSlide].title}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 z-20 bg-[#b026ff] text-white text-[10px] sm:text-xs font-bold px-2.5 sm:px-3 py-1 rounded-full uppercase tracking-wider shadow-lg flex items-center gap-1">
                    <span className="material-icons text-[12px] sm:text-[14px]">
                      star
                    </span>
                    {lang === "id" ? "Unggulan" : "Featured"}
                  </div>
                </div>

                <div className="w-full lg:w-1/2 h-[55%] lg:h-full p-5 sm:p-8 lg:p-12 flex flex-col justify-center bg-white dark:bg-transparent relative">
                  <h3
                    className="text-xl sm:text-3xl lg:text-4xl font-display font-bold mb-2 sm:mb-4 text-gray-900 dark:text-white cursor-pointer hover:text-[#b026ff] dark:hover:text-[#00f0ff] transition-colors"
                    onClick={() =>
                      setSelectedProject(featuredProjects[currentSlide])
                    }
                  >
                    {featuredProjects[currentSlide].title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-base mb-4 sm:mb-6 line-clamp-3 lg:line-clamp-4 font-light">
                    {featuredProjects[currentSlide].description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-8">
                    {featuredProjects[currentSlide].tags
                      .slice(0, 4)
                      .map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] sm:text-xs font-medium px-2.5 py-1 sm:py-1.5 rounded-md bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-white/5"
                        >
                          {tag}
                        </span>
                      ))}
                  </div>
                  <button
                    onClick={() =>
                      setSelectedProject(featuredProjects[currentSlide])
                    }
                    className="mt-auto self-start flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-bold uppercase tracking-widest text-[#b026ff] dark:text-[#00f0ff] hover:gap-4 transition-all duration-300"
                  >
                    {lang === "id" ? "Lihat Detail" : "View Details"}
                    <span className="material-icons text-sm">
                      arrow_forward
                    </span>
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>

            {featuredProjects.length > 1 && (
              <>
                <button
                  onClick={prevSlide}
                  className="absolute left-2 lg:left-4 top-[22%] lg:top-1/2 -translate-y-1/2 z-30 p-1.5 sm:p-2 rounded-full bg-white/80 dark:bg-black/50 text-gray-900 dark:text-white backdrop-blur-sm hover:bg-white dark:hover:bg-black hover:scale-110 transition-all shadow-lg"
                >
                  <span className="material-icons text-sm sm:text-base">
                    chevron_left
                  </span>
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-2 lg:right-4 top-[22%] lg:top-1/2 -translate-y-1/2 z-30 p-1.5 sm:p-2 rounded-full bg-white/80 dark:bg-black/50 text-gray-900 dark:text-white backdrop-blur-sm hover:bg-white dark:hover:bg-black hover:scale-110 transition-all shadow-lg"
                >
                  <span className="material-icons text-sm sm:text-base">
                    chevron_right
                  </span>
                </button>
                <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 z-30 flex gap-1.5 sm:gap-2">
                  {featuredProjects.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentSlide(idx)}
                      className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-300 ${currentSlide === idx ? "w-4 sm:w-6 bg-[#b026ff] dark:bg-[#00f0ff]" : "bg-gray-300 dark:bg-white/30 hover:bg-gray-400 dark:hover:bg-white/50"}`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* Regular Projects Grid (Tidak Diubah) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
        {regularProjects.map((project) => (
          <div
            key={project.id}
            onClick={() => setSelectedProject(project)}
            className="project-card opacity-0 group relative rounded-xl sm:rounded-2xl overflow-hidden bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 cursor-pointer hover:border-gray-300 dark:hover:border-white/20 hover:shadow-xl dark:hover:shadow-[0_8px_30px_rgba(0,240,255,0.15)] hover:-translate-y-1.5 hover:scale-[1.02] transition-all duration-500 shadow-sm dark:shadow-none flex flex-col h-full"
          >
            <div className="w-full h-44 sm:h-56 md:h-64 lg:h-56 xl:h-64 overflow-hidden relative shrink-0">
              <div className="absolute inset-0 bg-black/10 dark:bg-black/40 group-hover:bg-transparent dark:group-hover:bg-black/10 transition-colors duration-500 z-10"></div>
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-4 sm:p-6 lg:p-8 flex flex-col flex-grow relative bg-white dark:bg-transparent">
              <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-white/20 to-transparent transform -translate-y-1/2"></div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-1.5 sm:mb-3 group-hover:text-[#b026ff] dark:group-hover:text-[#00f0ff] transition-colors duration-300 line-clamp-2">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-base mb-4 sm:mb-6 line-clamp-3 font-light flex-grow">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5 mt-auto">
                {project.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] sm:text-xs font-medium px-2.5 py-1 rounded-md bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
                {project.tags.length > 3 && (
                  <span className="text-[10px] sm:text-xs font-medium px-2.5 py-1 rounded-md bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-gray-300">
                    +{project.tags.length - 3}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Render Modal menggunakan CreatePortal agar selalu tampil penuh di layar teratas */}
      {typeof document !== "undefined" &&
        createPortal(modalContent, document.body)}
    </section>
  );
}
