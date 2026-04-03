import React, { useEffect, useRef } from "react";
import { animate, inView } from "motion";

export function About({ id, lang }: { id?: string; lang: "id" | "en" }) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      inView(sectionRef.current, () => {
        const elements = sectionRef.current?.querySelectorAll(".animate-item");
        if (elements && elements.length > 0) {
          animate(
            elements,
            { opacity: [0, 1], y: [20, 0] },
            { delay: 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] },
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
          {lang === "id" ? "Tentang Saya" : "About Me"}
        </h2>
        <div className="h-1 w-12 sm:w-20 bg-gradient-to-r from-[#b026ff] to-[#00f0ff] rounded-full"></div>
      </div>

      <div className="prose prose-sm sm:prose-base dark:prose-invert max-w-none">
        <p className="animate-item opacity-0 text-gray-600 dark:text-gray-400 leading-relaxed font-light text-justify transition-colors duration-500 mb-6">
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
    </section>
  );
}
