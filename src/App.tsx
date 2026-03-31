import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "./hooks/useTheme";
import { useLanguage } from "./hooks/useLanguage";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Experience } from "./components/Experience";
import { Education } from "./components/Education";
import { Certificates } from "./components/Certificates";
import { Contact } from "./components/Contact";
import { GithubActivity } from "./components/GithubActivity";
import { CustomCursor } from "./components/CustomCursor";

export default function App() {
  const { isDarkMode, toggleTheme } = useTheme();
  const { lang, toggleLanguage } = useLanguage();
  const currentYear = new Date().getFullYear();
  const [activeSection, setActiveSection] = useState("about");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const scrollContainerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const allLinks = [
    { nameId: "Tentang", nameEn: "About", id: "about", icon: "person" },
    { nameId: "Keahlian", nameEn: "Skills", id: "skills", icon: "code" },
    { nameId: "Proyek", nameEn: "Projects", id: "projects", icon: "work" },
    {
      nameId: "Pengalaman",
      nameEn: "Experience",
      id: "experience",
      icon: "timeline",
    },
    {
      nameId: "Pendidikan",
      nameEn: "Education",
      id: "education",
      icon: "school",
    },
    {
      nameId: "Sertifikasi",
      nameEn: "Certificates",
      id: "certificates",
      icon: "workspace_premium",
    },
    { nameId: "Kontak", nameEn: "Contact", id: "contact", icon: "mail" },
  ];

  const checkScrollPosition = () => {
    let current = "about";
    for (const link of allLinks) {
      const element = document.getElementById(link.id);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2) {
          current = link.id;
        }
      }
    }
    if (activeSection !== current) {
      setActiveSection(current);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth < 1024) {
        checkScrollPosition();
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [allLinks, activeSection]);

  const onScroll = () => {
    if (window.innerWidth >= 1024) {
      checkScrollPosition();
    }
  };

  const scrollTo = (id: string, event: React.MouseEvent) => {
    event.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
  };

  return (
    <>
      <CustomCursor />
      <div className="relative min-h-screen w-full bg-gray-50 dark:bg-[#050505] text-gray-900 dark:text-white selection:bg-[#b026ff]/30 selection:text-gray-900 dark:selection:text-white flex flex-col lg:flex-row font-sans lg:overflow-hidden transition-colors duration-500">
        {/* Performant Tech Grid Background */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#0000000a_1px,transparent_1px),linear-gradient(to_bottom,#0000000a_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] transition-colors duration-500"></div>
          <div
            className="absolute left-[-10%] top-[-10%] -z-10 h-[60%] w-[60%] rounded-full bg-gradient-to-br from-[#b026ff] to-transparent opacity-10 dark:opacity-20 blur-[120px] transition-opacity duration-500 animate-pulse"
            style={{ animationDuration: "8s" }}
          ></div>
          <div
            className="absolute right-[-10%] bottom-[-10%] -z-10 h-[60%] w-[60%] rounded-full bg-gradient-to-tl from-[#00f0ff] to-transparent opacity-10 dark:opacity-20 blur-[120px] transition-opacity duration-500 animate-pulse"
            style={{ animationDuration: "10s", animationDelay: "2s" }}
          ></div>
        </div>

        {/* Left Sidebar */}
        <header className="lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-[45%] xl:w-[40%] lg:flex-col lg:justify-between lg:py-16 lg:pl-24 lg:pr-16 pt-32 pb-12 px-6 sm:px-8 z-10 lg:overflow-hidden no-scrollbar">
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-display font-black tracking-tighter mb-2 lg:mb-4 text-transparent bg-clip-text bg-gradient-to-br from-gray-900 via-gray-800 to-gray-500 dark:from-white dark:via-gray-200 dark:to-gray-500 leading-tight py-2">
              Fachri Ramdhan
            </h1>
            <h2 className="text-base sm:text-lg lg:text-xl xl:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#b026ff] to-[#00f0ff] mb-4 lg:mb-6 tracking-wide">
              Software Engineering
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-md leading-relaxed font-light text-sm sm:text-base lg:text-base xl:text-lg transition-colors duration-500 mb-5">
              {lang === "id"
                ? "Saya membangun aplikasi web premium dan mengintegrasikannya secara mulus dengan otomasi industri. Perangkat lunak berkinerja tinggi bertemu dengan sistem pabrik yang tangguh."
                : "I build premium web applications and seamlessly integrate them with industrial automation. High-performance software meets robust factory systems."}
            </p>

            <div className="flex flex-wrap gap-2 mb-6 lg:mb-8 max-w-md">
              <span className="px-3 py-1.5 text-[10px] sm:text-xs font-medium rounded-full bg-green-100 text-green-700 dark:bg-green-500/10 dark:text-green-400 border border-green-200 dark:border-green-500/20 flex items-center gap-1.5 w-max">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                Open to Work
              </span>
              <span className="px-3 py-1.5 text-[10px] sm:text-xs font-medium rounded-full bg-blue-100 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400 border border-blue-200 dark:border-blue-500/20 flex items-center gap-1.5 w-max">
                🤝 {lang === "id" ? "Kolaborasi" : "Collaboration"}
              </span>
              <span className="px-3 py-1.5 text-[10px] sm:text-xs font-medium rounded-full bg-purple-100 text-purple-700 dark:bg-purple-500/10 dark:text-purple-400 border border-purple-200 dark:border-purple-500/20 flex items-center gap-1.5 w-max">
                🚀 {lang === "id" ? "Proyek Kustom" : "Custom Projects"}
              </span>
            </div>

            <a
              href="/assets/cv-fachri.pdf"
              download="CV_Fachri_SoftwareEngineer.pdf"
              className="group relative inline-flex items-center justify-center gap-3 px-6 py-3 lg:px-6 lg:py-3 xl:px-8 xl:py-4 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-bold text-xs lg:text-xs xl:text-sm tracking-widest uppercase overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(176,38,255,0.3)] dark:hover:shadow-[0_0_40px_rgba(0,240,255,0.3)] w-max"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#b026ff] to-[#00f0ff] opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              <span className="material-icons scale-90 transition-transform duration-300 group-hover:-translate-y-1">
                download
              </span>
              <span className="relative z-10">
                {lang === "id" ? "Unduh CV" : "Download CV"}
              </span>
            </a>
          </div>

          <div className="mt-8 lg:mt-auto flex items-center gap-4 xl:gap-6">
            <a
              href="https://github.com/fachriramdhan"
              target="_blank"
              rel="noreferrer"
              title="GitHub"
              className="text-gray-400 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors hover:scale-110 transform duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com/fachriramdhan"
              target="_blank"
              rel="noreferrer"
              title="LinkedIn"
              className="text-gray-400 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors hover:scale-110 transform duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a
              href="https://instagram.com/fachriramdhano"
              target="_blank"
              rel="noreferrer"
              title="Instagram"
              className="text-gray-400 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors hover:scale-110 transform duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a
              href="https://wa.me/6281775117906"
              target="_blank"
              rel="noreferrer"
              title="WhatsApp"
              className="text-gray-400 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors hover:scale-110 transform duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.347-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.876 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
            </a>
            <a
              href="mailto:fachriramdhan04@gmail.com"
              title="Email"
              className="text-gray-400 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors hover:scale-110 transform duration-300"
            >
              <span className="material-icons">mail</span>
            </a>
            <div className="w-px h-6 bg-gray-200 dark:bg-white/10 mx-1 hidden lg:block"></div>
            <button
              onClick={toggleLanguage}
              className="hidden lg:flex p-2 rounded-full bg-gray-200/50 dark:bg-white/5 text-gray-600 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-white/10 transition-all duration-300 items-center justify-center hover:scale-110 font-bold text-xs w-10 h-10"
              aria-label={
                lang === "id"
                  ? "Ganti ke Bahasa Inggris"
                  : "Switch to Indonesian"
              }
            >
              {lang === "id" ? "EN" : "ID"}
            </button>
            <button
              onClick={toggleTheme}
              className="hidden lg:flex p-2 rounded-full bg-gray-200/50 dark:bg-white/5 text-gray-600 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-white/10 transition-all duration-300 items-center justify-center hover:scale-110 w-10 h-10"
              aria-label={
                lang === "id" ? "Ganti Mode Gelap" : "Toggle Dark Mode"
              }
            >
              <span className="material-icons scale-90">
                {isDarkMode ? "light_mode" : "dark_mode"}
              </span>
            </button>
          </div>
        </header>

        {/* Mobile Top Bar */}
        <nav className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-[#050505]/80 backdrop-blur-xl px-4 sm:px-6 py-3 border-b border-gray-200 dark:border-white/10 flex items-center justify-between transition-colors duration-500 shadow-sm">
          <span className="font-display font-bold text-lg sm:text-xl tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">
            Fachri Ramdhan
          </span>
          <div className="flex items-center gap-1 sm:gap-2">
            <button
              onClick={toggleLanguage}
              className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors flex items-center justify-center font-bold text-xs"
              aria-label={
                lang === "id"
                  ? "Ganti ke Bahasa Inggris"
                  : "Switch to Indonesian"
              }
            >
              {lang === "id" ? "EN" : "ID"}
            </button>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors flex items-center justify-center"
              aria-label={
                lang === "id" ? "Ganti Mode Gelap" : "Toggle Dark Mode"
              }
            >
              <span className="material-icons scale-90">
                {isDarkMode ? "light_mode" : "dark_mode"}
              </span>
            </button>
            <div className="w-px h-6 bg-gray-200 dark:bg-white/10 mx-1"></div>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors flex items-center justify-center"
              aria-label="Menu"
            >
              <span className="material-icons scale-90">
                {isMobileMenuOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </nav>

        {/* Mobile Bottom Bar */}
        <nav
          className={`lg:hidden fixed bottom-4 left-4 right-4 z-40 bg-white/90 dark:bg-[#111]/90 backdrop-blur-xl border border-gray-200/50 dark:border-white/10 rounded-2xl shadow-lg transition-all duration-500 ${isMobileMenuOpen ? "translate-y-24 opacity-0 pointer-events-none" : "translate-y-0 opacity-100"}`}
        >
          <div className="flex items-center justify-around p-2">
            {allLinks
              .filter((link) =>
                ["about", "skills", "projects", "contact"].includes(link.id),
              )
              .map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => scrollTo(link.id, e)}
                  className={`flex flex-col items-center justify-center w-[4.5rem] h-14 rounded-xl transition-all duration-300 relative ${activeSection === link.id ? "text-[#b026ff] dark:text-[#00f0ff]" : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"}`}
                >
                  {activeSection === link.id && (
                    <motion.div
                      layoutId="bottomNavIndicator"
                      className="absolute inset-0 bg-gray-100 dark:bg-white/5 rounded-xl -z-10"
                    />
                  )}
                  <span
                    className={`material-icons text-[22px] mb-1 transition-transform duration-300 ${activeSection === link.id ? "scale-110" : ""}`}
                  >
                    {link.icon}
                  </span>
                  <span className="text-[9px] font-bold uppercase tracking-wider">
                    {lang === "id" ? link.nameId : link.nameEn}
                  </span>
                </a>
              ))}
          </div>
        </nav>

        {/* Mobile Hamburger Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden fixed inset-0 z-40 bg-white/95 dark:bg-[#050505]/95 backdrop-blur-2xl flex flex-col pt-24 px-6 pb-12 transition-colors duration-500 overflow-y-auto"
            >
              <div className="flex-1 flex flex-col">
                <h3 className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-6">
                  {lang === "id" ? "Menu Lainnya" : "More Menu"}
                </h3>
                <ul className="flex flex-col gap-2 mb-8">
                  {allLinks
                    .filter(
                      (link) =>
                        !["about", "skills", "projects", "contact"].includes(
                          link.id,
                        ),
                    )
                    .map((link, index) => (
                      <motion.li
                        key={link.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <a
                          href={`#${link.id}`}
                          onClick={(e) => scrollTo(link.id, e)}
                          className={`group flex items-center gap-4 p-3 rounded-2xl transition-all duration-300 ${activeSection === link.id ? "bg-gray-50 dark:bg-white/5 text-[#b026ff] dark:text-[#00f0ff]" : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-white/5 hover:text-gray-900 dark:hover:text-white"}`}
                        >
                          <span
                            className={`material-icons transition-transform duration-300 group-hover:scale-110 ${activeSection === link.id ? "scale-110" : ""}`}
                          >
                            {link.icon}
                          </span>
                          <span className="font-display font-bold text-lg">
                            {lang === "id" ? link.nameId : link.nameEn}
                          </span>
                        </a>
                      </motion.li>
                    ))}
                </ul>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-auto"
              >
                <h3 className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-6 text-center">
                  {lang === "id" ? "Terhubung" : "Connect"}
                </h3>
                <div className="flex justify-center gap-4 sm:gap-6">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noreferrer"
                    className="p-4 rounded-full bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-white/10 hover:text-gray-900 dark:hover:text-white transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    className="p-4 rounded-full bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-white/10 hover:text-gray-900 dark:hover:text-white transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer"
                    className="p-4 rounded-full bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-white/10 hover:text-gray-900 dark:hover:text-white transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                  <a
                    href="https://wa.me/6281234567890"
                    target="_blank"
                    rel="noreferrer"
                    className="p-4 rounded-full bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-white/10 hover:text-gray-900 dark:hover:text-white transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.347-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.876 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                    </svg>
                  </a>
                  <a
                    href="mailto:fachrirahman2000@gmail.com"
                    className="p-4 rounded-full bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-white/10 hover:text-gray-900 dark:hover:text-white transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                  >
                    <span className="material-icons">mail</span>
                  </a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Right Content Wrapper */}
        <div className="lg:w-[55%] xl:w-[60%] relative lg:h-screen flex flex-col w-full">
          {/* Desktop Floating Nav */}
          <div className="hidden lg:flex absolute top-0 left-0 right-0 z-50 pt-12 pb-8 px-12 justify-start pointer-events-none">
            <nav className="pointer-events-auto flex py-2.5 px-5 rounded-full border border-gray-200/50 dark:border-white/10 shadow-sm w-max bg-white/80 dark:bg-[#111]/80 backdrop-blur-xl">
              <ul className="flex flex-wrap gap-x-1 xl:gap-x-2 items-center">
                {allLinks.map((link) => (
                  <li key={link.id}>
                    <a
                      className={`group relative text-[10px] xl:text-xs font-bold uppercase tracking-widest transition-all duration-300 py-2 px-3 rounded-full ${activeSection === link.id ? "text-[#b026ff] dark:text-[#00f0ff] bg-gray-100 dark:bg-white/10" : "text-gray-500 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-white/5"}`}
                      href={`#${link.id}`}
                      onClick={(e) => scrollTo(link.id, e)}
                    >
                      {lang === "id" ? link.nameId : link.nameEn}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Scrolling Content */}
          <main
            ref={scrollContainerRef}
            className="flex-1 px-6 sm:px-8 pt-28 pb-28 lg:pt-32 lg:pb-24 lg:pr-24 lg:pl-12 lg:overflow-y-auto no-scrollbar relative z-10 scroll-smooth [mask-image:linear-gradient(to_bottom,transparent_0%,black_80px,black_100%)] [-webkit-mask-image:linear-gradient(to_bottom,transparent_0%,black_80px,black_100%)] lg:[mask-image:linear-gradient(to_bottom,transparent_0%,black_120px,black_100%)] lg:[-webkit-mask-image:linear-gradient(to_bottom,transparent_0%,black_120px,black_100%)]"
            onScroll={onScroll}
          >
            <div className="flex flex-col gap-16 lg:gap-28">
              <About id="about" lang={lang} />
              <GithubActivity lang={lang} />
              <Skills id="skills" lang={lang} />
              <Projects id="projects" lang={lang} />
              <Experience id="experience" lang={lang} />
              <Education id="education" lang={lang} />
              <Certificates id="certificates" lang={lang} />
              <Contact id="contact" lang={lang} />

              <footer className="py-8 text-gray-500 text-sm border-t border-gray-200 dark:border-white/5 mt-10 transition-colors duration-500">
                <p>
                  © {currentYear} Fachri.{" "}
                  {lang === "id"
                    ? "Hak cipta dilindungi undang-undang."
                    : "All rights reserved."}
                </p>
                <p className="mt-2 text-gray-400 dark:text-gray-500 transition-colors duration-500">
                  {lang === "id"
                    ? "Membangun sistem cerdas antara perangkat lunak dan mesin."
                    : "Building intelligent systems between software and machines."}
                </p>
              </footer>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
