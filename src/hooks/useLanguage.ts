import { useState, useEffect } from 'react';

export function useLanguage() {
  const [lang, setLang] = useState<'id' | 'en'>(() => {
    if (typeof window !== 'undefined') {
      const savedLang = localStorage.getItem('lang');
      if (savedLang === 'id' || savedLang === 'en') {
        return savedLang;
      }
    }
    return 'id';
  });

  const toggleLanguage = () => {
    setLang((prev) => {
      const newLang = prev === 'id' ? 'en' : 'id';
      localStorage.setItem('lang', newLang);
      return newLang;
    });
  };

  return { lang, toggleLanguage };
}
