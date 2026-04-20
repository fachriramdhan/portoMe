import React, { useEffect, useRef, useState } from "react";
import { animate, inView, stagger } from "motion";

export function About({ id, lang }: { id?: string; lang: "id" | "en" }) {
  // Ref untuk mendeteksi section saat di-scroll
  const sectionRef = useRef<HTMLElement>(null);
  
  // State untuk fungsi copy email dari Contact
  const [isCopied, setIsCopied] = useState(false);

  // Fungsi copy email
  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText("fachriramdhan04@gmail.com");
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  // Data Social Links
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/fachriramdhan",
      color: "text-gray-900 dark:text-white",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/fachriramdhan",
      color: "text-[#0A66C2]",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      url: "https://instagram.com/fachriramdhan",
      color: "text-[#E4405F]",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
    },
    {
      name: "WhatsApp",
      url: "https://wa.me/6281775117906",
      color: "text-[#25D366]",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.347-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.876 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
        </svg>
      ),
    },
  ];

  // Logic Animasi: Menggabungkan elemen dari About dan Contact
  useEffect(() => {
    if (sectionRef.current) {
      inView(sectionRef.current, () => {
        const elements = sectionRef.current?.querySelectorAll(".animate-item");
        if (elements && elements.length > 0) {
          animate(
            elements,
            { opacity: [0, 1], y: [20, 0] },
            // Menggunakan stagger agar animasi muncul bergantian secara rapi
            { delay: stagger(0.15), duration: 0.8, ease: [0.22, 1, 0.36, 1] }
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
      {/* =========================================
          BAGIAN ABOUT
          ========================================= */}
      <div className="mb-8 sm:mb-12">
        <h2 className="text-2xl md:text-4xl font-display font-bold mb-3 md:mb-4 tracking-tight">
          {lang === "id" ? "Tentang Saya" : "About Me"}
        </h2>
        <div className="h-1 w-12 sm:w-20 bg-gradient-to-r from-[#b026ff] to-[#00f0ff] rounded-full"></div>
      </div>

      {/* Menambahkan mb-16 agar ada jarak antara teks About dengan bagian Contact */}
      <div className="prose prose-sm sm:prose-base dark:prose-invert max-w-none mb-10">
        <p className="animate-item opacity-0 text-gray-600 dark:text-gray-400 leading-relaxed font-light text-justify transition-colors duration-500 mb-3">
          {lang === "id"
            ? "Saya adalah seorang Software Engineer yang berfokus pada pengembangan aplikasi web berkinerja tinggi dan integrasi sistem otomasi industri. Dengan latar belakang yang kuat dalam teknologi frontend modern dan pemahaman mendalam tentang proses manufaktur, saya menjembatani kesenjangan antara perangkat lunak dan perangkat keras."
            : "I am a Software Engineer focused on developing high-performance web applications and integrating industrial automation systems. With a strong background in modern frontend technologies and a deep understanding of manufacturing processes, I bridge the gap between software and hardware."}
        </p>
        <p className="animate-item opacity-0 text-gray-600 dark:text-gray-400 leading-relaxed font-light text-justify transition-colors duration-500">
          {lang === "id"
            ? "Saat ini saya terbuka untuk peluang pekerjaan penuh waktu, kolaborasi proyek, atau pengembangan perangkat lunak kustom yang membutuhkan keahlian teknis mendalam dan pemecahan masalah yang kreatif."
            : "I am currently open to full-time opportunities, project collaborations, or custom software development requiring deep technical expertise and creative problem-solving."}
        </p>
      </div>

      {/* =========================================
          BAGIAN CONTACT
          ========================================= */}
      {/* Header Contact */}
      {/* Main Contact Card */}
      <div className="animate-item opacity-0 relative bg-white/70 dark:bg-[#111111]/70 backdrop-blur-md border border-gray-200/80 dark:border-white/10 rounded-3xl p-8 sm:p-14 text-center overflow-hidden shadow-sm hover:shadow-[0_20px_50px_rgba(176,38,255,0.1)] dark:hover:shadow-[0_20px_50px_rgba(0,240,255,0.1)] transition-all duration-700 group">
        {/* Ambient Glows */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#b026ff]/10 rounded-full blur-3xl group-hover:bg-[#b026ff]/20 transition-colors duration-700"></div>
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[#00f0ff]/10 rounded-full blur-3xl group-hover:bg-[#00f0ff]/20 transition-colors duration-700"></div>

        <div className="relative z-10">
          <h3 className="text-xl sm:text-2xl font-display font-bold mb-2 text-gray-900 dark:text-white tracking-tight">
            {lang === "id" ? "Mari Berkolaborasi" : "Let's Collaborate"}
          </h3>
          <p className="text-sm sm:text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto mb-2 font-light leading-relaxed">
            {lang === "id"
              ? "Saya selalu terbuka untuk mendiskusikan proyek baru, ide kreatif, atau peluang untuk menjadi bagian dari visi Anda."
              : "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision."}
          </p>

          <div className="flex flex-col items-center gap-8">
            {/* Email Button */}
            <button
              onClick={handleCopyEmail}
              className="group relative overflow-hidden flex items-center gap-3 px-6 sm:px-10 py-4 rounded-xl bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-bold transition-all duration-500 hover:scale-105 active:scale-95"
            >
              <span className="material-icons text-[18px]">
                {isCopied ? "check" : "content_copy"}
              </span>
              <span className="text-xs sm:text-sm tracking-widest uppercase">
                {isCopied
                  ? lang === "id"
                    ? "Tersalin!"
                    : "Copied!"
                  : "fachriramdhan04@gmail.com"}
              </span>
              {/* Button Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </button>

          </div>
        </div>
      </div>
    </section>
  );
}