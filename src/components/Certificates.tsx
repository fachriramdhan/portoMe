import React, { useEffect, useRef } from "react";
import { animate, inView, stagger } from "motion";

export function Certificates({ id, lang }: { id?: string; lang: "id" | "en" }) {
  const sectionRef = useRef<HTMLElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  // Data sertifikat tanpa tahun (date)
  const certificates = [
    {
      id: "cert1",
      title: "Basics of Cloud and Gen-AI",
      issuer: "AWS BACK-END ACADEMY – BACK-END DEVELOPER (JS)",
      link: "#",
    },
    {
      id: "cert2",
      title: "Fundamentals of JS",
      issuer: "AWS BACK-END ACADEMY – BACK-END DEVELOPER (JS)",
      link: "#",
    },
    {
      id: "cert3",
      title: "Back-End Development",
      issuer: "AWS BACK-END ACADEMY – BACK-END DEVELOPER (JS)",
      link: "#",
    },
    {
      id: "cert4",
      title: "Fundamentals of Front End Development",
      issuer: "CODING CAMP 2026 (DBS FOUNDATION) - FRONT END DEVELOPER",
      link: "#",
    },
    {
      id: "cert5",
      title: "Basics of Web Programming",
      issuer: "CODING CAMP 2026 (DBS FOUNDATION) - FRONT END DEVELOPER",
      link: "#",
    },
    {
      id: "cert6",
      title: "Advanced Back-End Features",
      issuer: "AWS BACK-END ACADEMY – BACK-END DEVELOPER (JS)",
      link: "#",
    },
  ];

  useEffect(() => {
    if (sectionRef.current) {
      inView(sectionRef.current, () => {
        const elements = sectionRef.current?.querySelectorAll(".cert-item");
        if (elements && elements.length > 0) {
          animate(
            elements,
            { opacity: [0, 1], x: [-20, 0] },
            { delay: stagger(0.1), duration: 0.6, ease: [0.22, 1, 0.36, 1] },
          );
        }
      });
    }
  }, []);

  // Fungsi navigasi slide (menggeser selebar container)
  const scroll = (direction: "left" | "right") => {
    if (sliderRef.current) {
      const scrollAmount = sliderRef.current.clientWidth; // Geser sejauh 2 kolom
      sliderRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id={id}
      ref={sectionRef}
      className="scroll-mt-28 lg:scroll-mt-64 block"
    >
      {/* Bagian Header & Tombol Navigasi */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-4">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <span className="material-icons text-2xl text-[#b026ff] dark:text-[#00f0ff]">
              workspace_premium
            </span>
            <h2 className="text-2xl md:text-4xl font-display font-bold tracking-tight text-gray-900 dark:text-white">
              {lang === "id" ? "Sertifikasi" : "Certificates"}
            </h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-xl text-sm font-light transition-colors duration-500">
            {lang === "id"
              ? "Sertifikasi profesional dan pencapaian yang saya peroleh."
              : "Professional certifications and achievements I have earned."}
          </p>
        </div>

        {/* Tombol Slide (Ditampilkan jika lebih dari 4 sertifikat) */}
        {certificates.length > 4 && (
          <div className="flex items-center gap-2 hidden sm:flex">
            <button
              onClick={() => scroll("left")}
              className="w-10 h-10 flex items-center justify-center rounded-xl bg-white dark:bg-[#111] border border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-400 hover:bg-[#b026ff] hover:text-white dark:hover:bg-[#00f0ff] dark:hover:text-gray-900 hover:border-transparent transition-all duration-300 hover:scale-105 shadow-sm"
              aria-label="Previous"
            >
              <span className="material-icons text-[18px]">chevron_left</span>
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-10 h-10 flex items-center justify-center rounded-xl bg-white dark:bg-[#111] border border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-400 hover:bg-[#b026ff] hover:text-white dark:hover:bg-[#00f0ff] dark:hover:text-gray-900 hover:border-transparent transition-all duration-300 hover:scale-105 shadow-sm"
              aria-label="Next"
            >
              <span className="material-icons text-[18px]">chevron_right</span>
            </button>
          </div>
        )}
      </div>

      {/* Container Slider Grid 2x2 
        Kuncinya ada di: grid-rows-2 dan grid-flow-col
        auto-cols mengatur lebarnya agar muat 2 kolom di layar (calc 50% - gap)
      */}
      <div
        ref={sliderRef}
        className="grid grid-rows-2 grid-flow-col auto-cols-[85vw] sm:auto-cols-[calc(50%-12px)] gap-4 sm:gap-6 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-6 -mx-4 px-4 sm:mx-0 sm:px-0"
      >
        {certificates.map((cert) => (
          <a
            key={cert.id}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="cert-item opacity-0 group flex items-center gap-4 p-4 sm:p-5 rounded-2xl bg-white/70 dark:bg-[#111111]/70 backdrop-blur-md border border-gray-200/80 dark:border-white/10 hover:border-[#b026ff]/50 dark:hover:border-[#00f0ff]/50 transition-all duration-300 hover:shadow-[0_8px_30px_-5px_rgba(176,38,255,0.2)] dark:hover:shadow-[0_8px_30px_-5px_rgba(0,240,255,0.2)] hover:-translate-y-1 relative overflow-hidden flex-shrink-0 snap-start h-[100px]"
          >
            {/* Ambient Hover Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#b026ff]/5 to-[#00f0ff]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

            {/* Icon Kiri */}
            <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl bg-gray-100 dark:bg-white/5 text-gray-400 dark:text-gray-500 group-hover:bg-[#b026ff] group-hover:text-white dark:group-hover:bg-[#00f0ff] dark:group-hover:text-gray-900 transition-all duration-300 group-hover:scale-110 relative z-10">
              <span className="material-icons text-[22px]">verified</span>
            </div>

            {/* Teks Kanan */}
            <div className="flex flex-col flex-1 min-w-0 relative z-10">
              <h3 className="text-sm sm:text-base font-bold text-gray-900 dark:text-white group-hover:text-[#b026ff] dark:group-hover:text-[#00f0ff] transition-colors truncate">
                {cert.title}
              </h3>
              <p className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400 font-medium mt-1 line-clamp-2 leading-relaxed">
                {cert.issuer}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
