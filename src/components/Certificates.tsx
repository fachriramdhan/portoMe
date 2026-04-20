import React, { useEffect, useRef } from "react";
import { animate, inView, stagger } from "motion";

export function Certificates({ id, lang }: { id?: string; lang: "id" | "en" }) {
  const sectionRef = useRef<HTMLElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  // Data sertifikat tanpa tahun (date)
  const certificates = [
    {
      id: "cert1",
      title: "Advanced Back-End Features",
      issuer: "AWS BACK-END ACADEMY – BACK-END DEVELOPER (JS)",
      link: "#",
    },
    {
      id: "cert2",
      title: "Back-End Development",
      issuer: "AWS BACK-END ACADEMY – BACK-END DEVELOPER (JS)",
      link: "#",
    },
    {
      id: "cert3",
      title: "Machine Learning",
      issuer: "CODING CAMP 2025 (DBS) – AI ENGINEER",
      link: "#",
    },
    {
      id: "cert4",
      title: "Basics of Cloud and Gen-AI",
      issuer: "AWS BACK-END ACADEMY – BACK-END DEVELOPER (JS)",
      link: "#",
    },
    {
      id: "cert5",
      title: "PostgreSQL",
      issuer: "ENIGMA CAMP – IT BOOTCAMP",
      link: "#",
    },
    {
      id: "cert6",
      title: "Algorithms & Structures",
      issuer: "ENIGMA CAMP – IT BOOTCAMP",
      link: "#",
    },
    {
      id: "cert7",
      title: "CCNA: Intro to Networks",
      issuer: "CISCO NETWORKING ACADEMY",
      link: "#",
    },
    {
      id: "cert8",
      title: "Generative AI",
      issuer: "IBM SKILLSBUILD X PIJAK – AI ENGINEER PROGRAM",
      link: "#",
    },
    {
      id: "cert9",
      title: "Linux & Git",
      issuer: "ENIGMA CAMP – IT BOOTCAMP",
      link: "#",
    },
    {
      id: "cert10",
      title: "Python Programming",
      issuer: "CODING CAMP 2025 (DBS) – AI ENGINEER",
      link: "#",
    },
    {
      id: "cert11",
      title: "Fundamentals of JS",
      issuer: "AWS BACK-END ACADEMY – BACK-END DEVELOPER (JS)",
      link: "#",
    },
    {
      id: "cert12",
      title: "JS Fundamentals",
      issuer: "ENIGMA CAMP – IT BOOTCAMP",
      link: "#",
    },
    {
      id: "cert13",
      title: "Fundamentals of Front End Development",
      issuer: "CODING CAMP 2026 (DBS FOUNDATION) - FRONT END DEVELOPER",
      link: "#",
    },
    {
      id: "cert14",
      title: "Data Visualization",
      issuer: "CODING CAMP 2025 (DBS) – AI ENGINEER",
      link: "#",
    },
    {
      id: "cert15",
      title: "AI Engineer for Millennial",
      issuer: "DIGITALENT KOMDIGI",
      link: "#",
    },
    {
      id: "cert16",
      title: "Intro to AI",
      issuer: "IBM SKILLSBUILD X PIJAK – AI ENGINEER PROGRAM",
      link: "#",
    },
    {
      id: "cert17",
      title: "IT Essentials",
      issuer: "CISCO NETWORKING ACADEMY",
      link: "#",
    },
    {
      id: "cert18",
      title: "Programming Concepts",
      issuer: "DIGITALENT KOMDIGI",
      link: "#",
    },
    {
      id: "cert19",
      title: "Basics of Web Programming",
      issuer: "CODING CAMP 2026 (DBS FOUNDATION) - FRONT END DEVELOPER",
      link: "#",
    },
    {
      id: "cert20",
      title: "AI Ethics",
      issuer: "IBM SKILLSBUILD X PIJAK – AI ENGINEER PROGRAM",
      link: "#",
    },
    {
      id: "cert21",
      title: "Career Management",
      issuer: "IBM SKILLSBUILD X PIJAK – AI ENGINEER PROGRAM",
      link: "#",
    },
    {
      id: "cert22",
      title: "Google Ads Advertising",
      issuer: "SKILL ACADEMY BY RUANGGURU",
      link: "#",
    },
    {
      id: "cert23",
      title: "Microsoft Word",
      issuer: "SKILL ACADEMY BY RUANGGURU",
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
      const scrollAmount = sliderRef.current.clientWidth; // Geser sejauh lebar container
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
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-5 sm:mb-8 gap-4">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="material-icons text-2xl text-[#b026ff] dark:text-[#00f0ff]">
              workspace_premium
            </span>
            <h2 className="text-2xl md:text-4xl font-display font-bold tracking-tight text-gray-900 dark:text-white">
              {lang === "id" ? "Sertifikasi" : "Certificates"}
            </h2>
          </div>
        </div>

        {/* Tombol Slide (Ditampilkan jika lebih dari 9 sertifikat di desktop, atau 4 di mobile) */}
        {certificates.length > 4 && (
          <div className="flex flex-col items-center sm:items-end gap-1.5 hidden sm:flex">
            <div className="flex items-center gap-2">
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

      {/* Container Slider Grid 2x3 di desktop, 2x2 di tablet, 1x2 di mobile */}
      <div
        ref={sliderRef}
        className="grid grid-rows-2 lg:grid-rows-3 grid-flow-col auto-cols-[85vw] sm:auto-cols-[calc(50%-8px)] gap-3 sm:gap-4 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-6 -mx-4 px-4 sm:mx-0 sm:px-0"
      >
        {certificates.map((cert) => (
          <a
            key={cert.id}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            // hover:-translate-y-1 DIHAPUS DARI SINI
            className="cert-item opacity-0 group flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/70 dark:bg-[#111111]/70 backdrop-blur-md border border-gray-200/80 dark:border-white/10 hover:border-[#b026ff]/50 dark:hover:border-[#00f0ff]/50 transition-all duration-300 hover:shadow-[0_8px_30px_-5px_rgba(176,38,255,0.2)] dark:hover:shadow-[0_8px_30px_-5px_rgba(0,240,255,0.2)] relative overflow-hidden flex-shrink-0 snap-start h-auto min-h-[140px]"
          >
            {/* Ambient Hover Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#b026ff]/5 to-[#00f0ff]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

            {/* Background Image Watermark (Pojok Kanan) */}
            <div
              className="absolute right-0 top-0 bottom-0 w-2/3 sm:w-1/2 opacity-25 dark:opacity-[0.08] group-hover:opacity-50 dark:group-hover:opacity-[0.2] transition-opacity duration-500 pointer-events-none mix-blend-multiply dark:mix-blend-luminosity"
              style={{
                backgroundImage: `url('/images/${cert.id}.jpg')`,
                backgroundSize: "cover",
                backgroundPosition: "right center",
                maskImage:
                  "linear-gradient(to right, transparent 0%, black 100%)",
                WebkitMaskImage:
                  "linear-gradient(to right, transparent 0%, black 100%)",
              }}
            ></div>

            {/* Icon Kiri */}
            <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-xl bg-gray-100 dark:bg-white/5 text-gray-400 dark:text-gray-500 group-hover:bg-[#b026ff] group-hover:text-white dark:group-hover:bg-[#00f0ff] dark:group-hover:text-gray-900 transition-all duration-300 group-hover:scale-110 relative z-10">
              <span className="material-icons text-[20px] sm:text-[22px]">
                verified
              </span>
            </div>

            {/* Teks Kanan */}
            <div className="flex flex-col flex-1 min-w-0 relative z-10 h-full justify-center">
              <div className="h-auto sm:h-[48px] flex items-center">
                <h3 className="text-sm sm:text-base font-bold text-gray-900 dark:text-white group-hover:text-[#b026ff] dark:group-hover:text-[#00f0ff] transition-colors line-clamp-2 leading-tight">
                  {cert.title}
                </h3>
              </div>

              {/* Garis Pemisah */}
              <div className="w-full h-px bg-gray-200 dark:bg-white/10 my-2 sm:my-3 group-hover:bg-[#b026ff]/30 dark:group-hover:bg-[#00f0ff]/30 transition-colors duration-300"></div>

              <p className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400 font-medium line-clamp-3 leading-relaxed">
                {cert.issuer}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
