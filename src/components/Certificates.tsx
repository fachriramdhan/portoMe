import React, { useEffect, useRef } from 'react';
import { animate, inView, stagger } from 'motion';

export function Certificates({ id, lang }: { id?: string, lang: 'id' | 'en' }) {
  const sectionRef = useRef<HTMLElement>(null);

  const certificates = [
    {
      id: 'cert1',
      title: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      date: '2023',
      link: '#'
    },
    {
      id: 'cert2',
      title: 'Google Cloud Professional Cloud Architect',
      issuer: 'Google Cloud',
      date: '2022',
      link: '#'
    }
  ];

  useEffect(() => {
    if (sectionRef.current) {
      inView(sectionRef.current, () => {
        const elements = sectionRef.current?.querySelectorAll('.cert-item');
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
          {lang === 'id' ? 'Sertifikasi' : 'Certificates'}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-xl text-sm md:text-base font-light transition-colors duration-500">
          {'Sertifikasi profesional yang saya peroleh.'}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        {certificates.map((cert) => (
          <a key={cert.id} href={cert.link} target="_blank" rel="noopener noreferrer" className="cert-item opacity-0 group flex flex-col p-6 rounded-2xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:border-[#b026ff]/50 dark:hover:border-[#00f0ff]/50 transition-all duration-300 hover:shadow-md dark:hover:shadow-[0_0_20px_rgba(0,240,255,0.05)]">
            <div className="flex items-center justify-between mb-4">
              <span className="material-icons text-gray-400 dark:text-gray-500 group-hover:text-[#b026ff] dark:group-hover:text-[#00f0ff] transition-colors">workspace_premium</span>
              <span className="text-xs font-medium text-gray-500 dark:text-gray-400">{cert.date}</span>
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-[#b026ff] dark:group-hover:text-[#00f0ff] transition-colors">{cert.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 font-light mt-auto">{cert.issuer}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
