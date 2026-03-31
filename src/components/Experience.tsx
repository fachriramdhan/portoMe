import React, { useEffect, useRef } from 'react';
import { animate, inView, stagger } from 'motion';

export function Experience({ id, lang }: { id?: string, lang: 'id' | 'en' }) {
  const sectionRef = useRef<HTMLElement>(null);

  const experiences = [
    {
      id: 'exp1',
      title: lang === 'id' ? 'IoT Engineering' : 'IoT Engineering',
      company: 'PT. Mattel Indonesia',
      period: '2024 - 2025',
      description: 'Memimpin tim yang terdiri dari 5 pengembang dalam membangun aplikasi web tingkat perusahaan. Mengimplementasikan arsitektur microservices dan mengurangi waktu muat halaman sebesar 40%.',
      skills: ['Angular', 'Node.js', 'AWS', 'Docker']
    },
    {
      id: 'exp2',
      title: lang === 'id' ? 'Staff IT & Admin Operasional' : 'Staff IT & Admin Operasional',
      company: 'PT. Brothersindo Saudara Sejati',
      period: 'Feb 2023 - Nov 2023',
      description: 'Mengembangkan dan memelihara berbagai aplikasi klien menggunakan React dan Node.js. Mengintegrasikan gateway pembayaran pihak ketiga dan mengoptimalkan kueri basis data.',
      skills: ['React', 'Express', 'PostgreSQL', 'Stripe']
    }
  ];

  useEffect(() => {
    if (sectionRef.current) {
      inView(sectionRef.current, () => {
        const elements = sectionRef.current?.querySelectorAll('.exp-item');
        if (elements && elements.length > 0) {
          animate(
            elements,
            { opacity: [0, 1], x: [-20, 0] },
            { delay: stagger(0.15), duration: 0.8, ease: [0.22, 1, 0.36, 1] }
          );
        }
      });
    }
  }, []);

  return (
    <section id={id} ref={sectionRef} className="scroll-mt-28 lg:scroll-mt-64 block">
      <div className="mb-8 sm:mb-12">
        <h2 className="text-2xl md:text-4xl font-display font-bold mb-3 md:mb-4 tracking-tight">
          {lang === 'id' ? 'Pengalaman' : 'Experience'}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-xl text-sm md:text-base font-light transition-colors duration-500">
          {'Perjalanan profesional saya dalam rekayasa perangkat lunak.'}
        </p>
      </div>

      <div className="relative border-l border-gray-200 dark:border-white/10 ml-3 sm:ml-4 space-y-8 sm:space-y-12">
        {experiences.map((exp) => (
          <div key={exp.id} className="exp-item opacity-0 relative pl-6 sm:pl-8 group">
            <div className="absolute w-3 h-3 bg-gray-200 dark:bg-white/20 rounded-full -left-[6.5px] top-2 group-hover:bg-[#b026ff] dark:group-hover:bg-[#00f0ff] group-hover:scale-150 transition-all duration-300 shadow-[0_0_0_4px_#f9fafb] dark:shadow-[0_0_0_4px_#050505]"></div>
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-1 sm:gap-4">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white group-hover:text-[#b026ff] dark:group-hover:text-[#00f0ff] transition-colors duration-300">
                {exp.title}
              </h3>
              <span className="text-xs sm:text-sm font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-white/5 px-3 py-1 rounded-full w-max">
                {exp.period}
              </span>
            </div>
            
            <h4 className="text-sm sm:text-base font-semibold text-gray-700 dark:text-gray-300 mb-3 sm:mb-4">
              {exp.company}
            </h4>
            
            <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed font-light mb-4 sm:mb-6">
              {exp.description}
            </p>
            
            <div className="flex flex-wrap gap-2">
              {exp.skills.map((skill) => (
                <span key={skill} className="text-[10px] sm:text-xs font-medium px-2.5 py-1 rounded-md bg-white dark:bg-white/5 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-white/10">
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
