import React, { useEffect, useRef } from 'react';
import { animate, inView, stagger } from 'motion';

export function Skills({ id, lang }: { id?: string, lang: 'id' | 'en' }) {
  const sectionRef = useRef<HTMLElement>(null);

  const skillCategories = [
    {
      id: 'frontend',
      title: lang === 'id' ? 'Pengembangan Frontend' : 'Frontend Development',
      skills: ['Angular', 'React', 'TypeScript', 'Tailwind CSS', 'RxJS', 'NgRx', 'Framer Motion'],
      icon: 'code'
    },
    {
      id: 'backend',
      title: lang === 'id' ? 'Pengembangan Backend' : 'Backend Development',
      skills: ['Node.js', 'Express', 'NestJS', 'C#', 'ASP.NET Core', 'Python', 'RESTful APIs', 'GraphQL'],
      icon: 'dns'
    },
    {
      id: 'database',
      title: lang === 'id' ? 'Basis Data & Cloud' : 'Database & Cloud',
      skills: ['PostgreSQL', 'SQL Server', 'MongoDB', 'Firebase', 'Redis', 'Docker', 'AWS', 'GCP'],
      icon: 'storage'
    },
    {
      id: 'automation',
      title: lang === 'id' ? 'Otomasi Industri' : 'Industrial Automation',
      skills: ['SCADA', 'AVEVA Edge', 'PLC Programming', 'Modbus', 'OPC UA', 'IoT Integration'],
      icon: 'precision_manufacturing'
    }
  ];

  useEffect(() => {
    if (sectionRef.current) {
      inView(sectionRef.current, () => {
        const elements = sectionRef.current?.querySelectorAll('.skill-card');
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
          {lang === 'id' ? 'Gudang Teknis' : 'Technical Arsenal'}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-xl text-sm md:text-base font-light transition-colors duration-500">
          {lang === 'id' ? 'Kumpulan teknologi dan alat yang saya gunakan untuk membangun solusi digital yang tangguh dan terukur.' : 'A collection of technologies and tools I use to build robust and scalable digital solutions.'}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {skillCategories.map((category) => (
          <div
            key={category.id}
            className="skill-card opacity-0 group p-6 sm:p-8 rounded-2xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:border-[#b026ff]/50 dark:hover:border-[#00f0ff]/50 transition-all duration-500 hover:shadow-xl dark:hover:shadow-[0_0_30px_rgba(0,240,255,0.1)] shadow-sm dark:shadow-none relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#b026ff]/10 to-transparent dark:from-[#00f0ff]/10 rounded-bl-full -z-10 group-hover:scale-150 transition-transform duration-700"></div>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-xl bg-gray-50 dark:bg-white/10 text-gray-700 dark:text-white group-hover:bg-[#b026ff] dark:group-hover:bg-[#00f0ff] group-hover:text-white dark:group-hover:text-gray-900 transition-colors duration-300">
                <span className="material-icons">{category.icon}</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold tracking-tight">{category.title}</h3>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 text-xs sm:text-sm font-medium rounded-lg bg-gray-100 dark:bg-white/5 text-gray-700 dark:text-gray-300 border border-transparent group-hover:border-gray-200 dark:group-hover:border-white/10 transition-colors duration-300"
                >
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
