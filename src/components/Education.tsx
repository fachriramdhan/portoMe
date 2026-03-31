import React, { useEffect, useRef } from 'react';
import { animate, inView, stagger } from 'motion';

export function Education({ id, lang }: { id?: string, lang: 'id' | 'en' }) {
  const sectionRef = useRef<HTMLElement>(null);

  const education = [
    {
      id: 'edu1',
      degree: 'S1 Teknologi Informasi',
      institution: 'Universitas Darma Persada',
      period: '2018 - 2022',
      description: 'Lulus dengan predikat Cum Laude. Fokus pada Rekayasa Perangkat Lunak dan Kecerdasan Buatan.',
    },
    {
      id: 'edu2',
      degree: 'Teknik Komputer & Jaringan',
      institution: 'SMK Dinamika Pembangunan 1',
      period: '2015 - 2018',
      description: 'Mempelajari dasar-dasar jaringan komputer, administrasi server, dan perakitan komputer.',
    }
  ];

  useEffect(() => {
    if (sectionRef.current) {
      inView(sectionRef.current, () => {
        const elements = sectionRef.current?.querySelectorAll('.edu-item');
        if (elements && elements.length > 0) {
          animate(
            elements,
            { opacity: [0, 1], y: [20, 0] },
            { delay: stagger(0.1), duration: 0.8, ease: [0.22, 1, 0.36, 1] }
          );
        }
      });
    }
  }, []);

  return (
    <section id={id} ref={sectionRef} className="scroll-mt-28 lg:scroll-mt-64 block">
      <div className="mb-8 sm:mb-12">
        <h2 className="text-2xl md:text-4xl font-display font-bold mb-3 md:mb-4 tracking-tight">
          {lang === 'id' ? 'Pendidikan' : 'Education'}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-xl text-sm md:text-base font-light transition-colors duration-500">
          {'Latar belakang akademis saya.'}
        </p>
      </div>

      <div className="space-y-6">
        {education.map((edu) => (
          <div key={edu.id} className="edu-item opacity-0 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl p-6 sm:p-8 transition-all duration-500 shadow-sm dark:shadow-none hover:shadow-md dark:hover:shadow-[0_0_20px_rgba(0,240,255,0.05)]">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">{edu.degree}</h3>
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-white/5 px-3 py-1 rounded-full w-max">
                {edu.period}
              </span>
            </div>
            <h4 className="text-lg font-semibold text-[#b026ff] dark:text-[#00f0ff] mb-4">{edu.institution}</h4>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed font-light">{edu.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
