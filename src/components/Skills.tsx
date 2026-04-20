import React, { useEffect, useRef } from "react";
import { animate, inView, stagger } from "motion";

export function Skills({ id, lang }: { id?: string; lang: "id" | "en" }) {
  const sectionRef = useRef<HTMLElement>(null);

  // Data diperbarui dengan objek skill yang memuat nama, icon FontAwesome, dan warna brand
  const skillCategories = [
    {
      id: "web",
      title: lang === "id" ? "Web Development" : "Web Development",
      icon: "fas fa-laptop-code",
      skills: [
        {
          name: "ASP.NET Core",
          svg: (
            <img
              src="https://cdn.simpleicons.org/dotnet/512BD4"
              alt="ASP.NET Core"
              className="w-3.5 h-3.5"
            />
          ),
          color: "text-[#512BD4]",
        },
        {
          name: "C#",
          svg: (
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-3.5 h-3.5 text-[#239120]"
            >
              <path d="M2 10.375h3.417L4.667 14H1.25l-.833 3.625H3.83l-.75 3.125h3.417l.75-3.125h3.666l-.75 3.125h3.417l.75-3.125h3.417L18.583 14h-3.417l.75-3.625h3.417l.833-3.625h-3.417l.75-3.125h-3.417l-.75 3.125H9.667l.75-3.125H7l-.75 3.125H2.833L2 10.375zm6.583 3.625l.75-3.625h3.667l-.75 3.625H8.583zM22.5 12c0 5.799-4.701 10.5-10.5 10.5S1.5 17.799 1.5 12 6.201 1.5 12 1.5 22.5 6.201 22.5 12z" />
            </svg>
          ),
          color: "text-[#239120]",
        },
        {
          name: "Laravel",
          svg: (
            <img
              src="https://cdn.simpleicons.org/laravel/FF2D20"
              alt="Laravel"
              className="w-3.5 h-3.5"
            />
          ),
          color: "text-[#FF2D20]",
        },
        {
          name: "React.js",
          svg: (
            <img
              src="https://cdn.simpleicons.org/react/61DAFB"
              alt="React"
              className="w-3.5 h-3.5"
            />
          ),
          color: "text-[#61DAFB]",
        },
        {
          name: "Python",
          svg: (
            <img
              src="https://cdn.simpleicons.org/python/3776AB"
              alt="Python"
              className="w-3.5 h-3.5"
            />
          ),
          color: "text-[#3776AB]",
        },
        {
          name: "Tailwind",
          svg: (
            <img
              src="https://cdn.simpleicons.org/tailwindcss/06B6D4"
              alt="Tailwind"
              className="w-3.5 h-3.5"
            />
          ),
          color: "text-[#06B6D4]",
        },
      ],
    },
    {
      id: "database",
      title: lang === "id" ? "Database" : "Database",
      icon: "fas fa-database",
      skills: [
        {
          name: "MySQL",
          svg: (
            <img
              src="https://cdn.simpleicons.org/mysql/4479A1"
              alt="MySQL"
              className="w-3.5 h-3.5"
            />
          ),
          color: "text-[#4479A1]",
        },
        {
          name: "PostgreSQL",
          svg: (
            <img
              src="https://cdn.simpleicons.org/postgresql/4169E1"
              alt="PostgreSQL"
              className="w-3.5 h-3.5"
            />
          ),
          color: "text-[#4169E1]",
        },
        {
          name: "SQL Server",
          svg: (
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-3.5 h-3.5 text-[#CC292B]"
            >
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2.4c5.302 0 9.6 4.298 9.6 9.6s-4.298 9.6-9.6 9.6S2.4 17.302 2.4 12 6.698 2.4 12 2.4zm-1.2 3.6v12h2.4V6h-2.4z" />
            </svg>
          ),
          color: "text-[#CC292B]",
        },
      ],
    },
    {
      id: "iot",
      title: "IoT & Automation",
      icon: "fas fa-microchip",
      skills: [
        {
          name: "Node-RED",
          svg: (
            <img
              src="https://cdn.simpleicons.org/nodered/8F0000"
              alt="Node-RED"
              className="w-3.5 h-3.5"
            />
          ),
          color: "text-[#8F0000]",
        },
        {
          name: "Raspberry Pi",
          svg: (
            <img
              src="https://cdn.simpleicons.org/raspberrypi/C51A4A"
              alt="Raspberry Pi"
              className="w-3.5 h-3.5"
            />
          ),
          color: "text-[#C51A4A]",
        },
        {
          name: "ESP32",
          svg: (
            <img
              src="https://cdn.simpleicons.org/espressif/E7352C"
              alt="ESP32"
              className="w-3.5 h-3.5"
            />
          ),
          color: "text-[#E7352C]",
        },
        {
          name: "Arduino",
          svg: (
            <img
              src="https://cdn.simpleicons.org/arduino/00979D"
              alt="Arduino"
              className="w-3.5 h-3.5"
            />
          ),
          color: "text-[#00979D]",
        },
        {
          name: "LAN",
          svg: (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-3.5 h-3.5 text-[#10B981]"
            >
              <rect x="16" y="16" width="6" height="6" rx="1" />
              <rect x="2" y="16" width="6" height="6" rx="1" />
              <rect x="9" y="2" width="6" height="6" rx="1" />
              <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3" />
              <path d="M12 12V8" />
            </svg>
          ),
          color: "text-[#10B981]",
        },
      ],
    },
    {
      id: "tools",
      title: lang === "id" ? "Tools & Productivity" : "Tools & Productivity",
      icon: "fas fa-toolbox",
      skills: [
        {
          name: "Canva",
          svg: (
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-3.5 h-3.5 text-[#00C4CC]"
            >
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zM6.962 7.68c.754 0 1.337.549 1.405 1.2.069.583-.171 1.097-.822 1.406-.343.171-.48.172-.549.069-.034-.069 0-.137.069-.206.617-.514.617-.926.548-1.508-.034-.378-.308-.618-.583-.618-1.2 0-2.914 2.674-2.674 4.629.103.754.549 1.646 1.509 1.646.308 0 .65-.103.96-.24.5-.264.799-.47 1.097-.8-.073-.885.704-2.046 1.851-2.046.515 0 .926.205.96.583.068.514-.377.582-.514.582s-.378-.034-.378-.17c-.034-.138.309-.07.275-.378-.035-.206-.24-.274-.446-.274-.72 0-1.131.994-1.029 1.611.035.275.172.549.447.549.205 0 .514-.31.617-.755.068-.308.343-.514.583-.514.102 0 .17.034.205.171v.138c-.034.137-.137.548-.102.651 0 .069.034.171.17.171.092 0 .436-.18.777-.459.117-.59.253-1.298.253-1.357.034-.24.137-.48.617-.48.103 0 .171.034.205.171v.138l-.136.617c.445-.583 1.097-.994 1.508-.994.172 0 .309.102.309.274 0 .103 0 .274-.069.446-.137.377-.309.96-.412 1.474 0 .137.035.274.207.274.171 0 .685-.206 1.096-.754l.007-.004c-.002-.068-.007-.134-.007-.202 0-.411.035-.754.104-.994.068-.274.411-.514.617-.514.103 0 .205.069.205.171 0 .035 0 .103-.034.137-.137.446-.24.857-.24 1.269 0 .24.034.582.102.788 0 .034.035.069.07.069.068 0 .548-.445.89-1.028-.308-.206-.48-.549-.48-.96 0-.72.446-1.097.858-1.097.343 0 .617.24.617.72 0 .308-.103.65-.274.96h.102a.77.77 0 0 0 .584-.24.293.293 0 0 1 .134-.117c.335-.425.83-.74 1.41-.74.48 0 .924.205.959.582.068.515-.378.618-.515.618l-.002-.002c-.138 0-.377-.035-.377-.172 0-.137.309-.068.274-.376-.034-.206-.24-.275-.446-.275-.686 0-1.13.891-1.028 1.611.034.275.171.583.445.583.206 0 .515-.308.652-.754.068-.274.343-.514.583-.514.103 0 .17.034.205.171 0 .069 0 .206-.137.652-.17.308-.171.48-.137.617.034.274.171.48.309.583.034.034.068.102.068.102 0 .069-.034.138-.137.138-.034 0-.068 0-.103-.035-.514-.205-.72-.548-.789-.891-.205.24-.445.377-.72.377-.445 0-.89-.411-.96-.926a1.609 1.609 0 0 1 .075-.649c-.203.13-.422.203-.623.203h-.17c-.447.652-.927 1.098-1.27 1.303a.896.896 0 0 1-.377.104c-.068 0-.171-.035-.205-.104-.095-.152-.156-.392-.193-.667-.481.527-1.145.805-1.453.805-.343 0-.548-.206-.582-.55v-.376c.102-.754.377-1.2.377-1.337a.074.074 0 0 0-.069-.07c-.24 0-1.028.824-1.166 1.373l-.103.445c-.068.309-.377.515-.582.515-.103 0-.172-.035-.206-.172v-.137l.046-.233c-.435.31-.87.508-1.075.508-.308 0-.48-.172-.514-.412-.206.274-.445.412-.754.412-.352 0-.696-.24-.862-.593-.244.275-.523.553-.852.764-.48.309-1.028.549-1.68.549-.582 0-1.097-.309-1.371-.583-.412-.377-.651-.96-.686-1.509-.205-1.68.823-3.84 2.4-4.8.378-.205.755-.343 1.132-.343zm9.77 3.291c-.104 0-.172.172-.172.343 0 .274.137.583.309.755a1.74 1.74 0 0 0 .102-.583c0-.343-.137-.515-.24-.515z" />
            </svg>
          ),
          color: "text-[#00C4CC]",
        },
        {
          name: "Word",
          svg: (
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-3.5 h-3.5 text-[#2B579A]"
            >
              <path d="M23.004 1.5q.41 0 .703.293t.293.703v19.008q0 .41-.293.703t-.703.293H6.996q-.41 0-.703-.293T6 21.504V18H.996q-.41 0-.703-.293T0 17.004V6.996q0-.41.293-.703T.996 6H6V2.496q0-.41.293-.703t.703-.293zM6.035 11.203l1.442 4.735h1.64l1.57-7.876H9.036l-.937 4.653-1.325-4.5H5.38l-1.406 4.523-.938-4.675H1.312l1.57 7.874h1.641zM22.5 21v-3h-15v3zm0-4.5v-3.75H12v3.75zm0-5.25V7.5H12v3.75zm0-5.25V3h-15v3Z" />
            </svg>
          ),
          color: "text-[#2B579A]",
        },
        {
          name: "Excel",
          svg: (
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-3.5 h-3.5 text-[#217346]"
            >
              <path d="M23 1.5q.41 0 .7.3.3.29.3.7v19q0 .41-.3.7-.29.3-.7.3H7q-.41 0-.7-.3-.3-.29-.3-.7V18H1q-.41 0-.7-.3-.3-.29-.3-.7V7q0-.41.3-.7Q.58 6 1 6h5V2.5q0-.41.3-.7.29-.3.7-.3zM6 13.28l1.42 2.66h2.14l-2.38-3.87 2.34-3.8H7.46l-1.3 2.4-.05.08-.04.09-.64-1.28-.66-1.29H2.59l2.27 3.82-2.48 3.85h2.16zM14.25 21v-3H7.5v3zm0-4.5v-3.75H12v3.75zm0-5.25V7.5H12v3.75zm0-5.25V3H7.5v3zm8.25 15v-3h-6.75v3zm0-4.5v-3.75h-6.75v3.75zm0-5.25V7.5h-6.75v3.75zm0-5.25V3h-6.75v3Z" />
            </svg>
          ),
          color: "text-[#217346]",
        },
        {
          name: "PowerPoint",
          svg: (
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-3.5 h-3.5 text-[#B7472A]"
            >
              <path d="M13.5 1.5q1.453 0 2.795.375 1.342.375 2.508 1.06 1.166.686 2.12 1.641.956.955 1.641 2.121.686 1.166 1.061 2.508Q24 10.547 24 12q0 1.453-.375 2.795-.375 1.342-1.06 2.508-.686 1.166-1.641 2.12-.955.956-2.121 1.641-1.166.686-2.508 1.061-1.342.375-2.795.375-1.29 0-2.52-.305-1.23-.304-2.337-.884-1.108-.58-2.063-1.418-.955-.838-1.693-1.893H.997q-.411 0-.704-.293T0 17.004V6.996q0-.41.293-.703T.996 6h3.89q.739-1.055 1.694-1.893.955-.837 2.063-1.418 1.107-.58 2.337-.884Q12.21 1.5 13.5 1.5zm.75 1.535v8.215h8.215q-.14-1.64-.826-3.076-.686-1.436-1.782-2.531-1.095-1.096-2.537-1.782-1.441-.685-3.07-.826zm-5.262 7.57q0-.68-.228-1.166-.229-.486-.627-.79-.399-.305-.938-.446-.539-.14-1.172-.14H2.848v7.863h1.84v-2.742H5.93q.574 0 1.119-.17t.978-.493q.434-.322.698-.802.263-.48.263-1.114zM13.5 21q1.172 0 2.262-.287t2.056-.82q.967-.534 1.776-1.278.808-.744 1.418-1.664.61-.92.984-1.986.375-1.067.469-2.227h-9.703V3.035q-1.735.14-3.27.908T6.797 6h4.207q.41 0 .703.293t.293.703v10.008q0 .41-.293.703t-.703.293H6.797q.644.715 1.412 1.271.768.557 1.623.944.855.387 1.781.586Q12.54 21 13.5 21zM5.812 9.598q.575 0 .915.228.34.229.34.838 0 .27-.124.44-.123.17-.31.275-.188.105-.422.146-.234.041-.445.041H4.687V9.598Z" />
            </svg>
          ),
          color: "text-[#B7472A]",
        },
        {
          name: "Photoshop",
          svg: (
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-3.5 h-3.5 text-[#31A8FF]"
            >
              <path d="M9.85 8.42c-.37-.15-.77-.21-1.18-.2-.26 0-.49 0-.68.01-.2-.01-.34 0-.41.01v3.36c.14.01.27.02.39.02h.53c.39 0 .78-.06 1.15-.18.32-.09.6-.28.82-.53.21-.25.31-.59.31-1.03.01-.31-.07-.62-.23-.89-.17-.26-.41-.46-.7-.57zM19.75.3H4.25C1.9.3 0 2.2 0 4.55v14.899c0 2.35 1.9 4.25 4.25 4.25h15.5c2.35 0 4.25-1.9 4.25-4.25V4.55C24 2.2 22.1.3 19.75.3zm-7.391 11.65c-.399.56-.959.98-1.609 1.22-.68.25-1.43.34-2.25.34-.24 0-.4 0-.5-.01s-.24-.01-.43-.01v3.209c.01.07-.04.131-.11.141H5.52c-.08 0-.12-.041-.12-.131V6.42c0-.07.03-.11.1-.11.17 0 .33 0 .56-.01.24-.01.49-.01.76-.02s.56-.01.87-.02c.31-.01.61-.01.91-.01.82 0 1.5.1 2.06.31.5.17.96.45 1.34.82.32.32.57.71.73 1.14.149.42.229.85.229 1.3.001.86-.199 1.57-.6 2.13zm7.091 3.89c-.28.4-.671.709-1.12.891-.49.209-1.09.318-1.811.318-.459 0-.91-.039-1.359-.129-.35-.061-.7-.17-1.02-.32-.07-.039-.121-.109-.111-.189v-1.74c0-.029.011-.07.041-.09.029-.02.06-.01.09.01.39.23.8.391 1.24.49.379.1.779.15 1.18.15.38 0 .65-.051.83-.141.16-.07.27-.24.27-.42 0-.141-.08-.27-.24-.4-.16-.129-.489-.279-.979-.471-.51-.18-.979-.42-1.42-.719-.31-.221-.569-.51-.761-.85-.159-.32-.239-.67-.229-1.021 0-.43.12-.84.341-1.21.25-.4.619-.72 1.049-.92.469-.239 1.059-.349 1.769-.349.41 0 .83.03 1.24.09.3.04.59.12.86.23.039.01.08.05.1.09.01.04.02.08.02.12v1.63c0 .04-.02.08-.05.1-.09.02-.14.02-.18 0-.3-.16-.62-.27-.96-.34-.37-.08-.74-.13-1.12-.13-.2-.01-.41.02-.601.07-.129.03-.24.1-.31.2-.05.08-.08.18-.08.27s.04.18.101.26c.09.11.209.2.34.27.229.12.47.23.709.33.541.18 1.061.43 1.541.73.33.209.6.49.789.83.16.318.24.67.23 1.029.011.471-.129.94-.389 1.331z" />
            </svg>
          ),
          color: "text-[#31A8FF]",
        },
        {
          name: "Postman",
          svg: (
            <img
              src="https://cdn.simpleicons.org/postman/FF6C37"
              alt="Postman"
              className="w-3.5 h-3.5"
            />
          ),
          color: "text-[#FF6C37]",
        },
        {
          name: "Jira",
          svg: (
            <img
              src="https://cdn.simpleicons.org/jira/0052CC"
              alt="Jira"
              className="w-3.5 h-3.5"
            />
          ),
          color: "text-[#0052CC]",
        },
        {
          name: "Teams",
          svg: (
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-3.5 h-3.5 text-[#6264A7]"
            >
              <path d="M20.625 8.127q-.55 0-1.025-.205-.475-.205-.832-.563-.358-.357-.563-.832Q18 6.053 18 5.502q0-.54.205-1.02t.563-.837q.357-.358.832-.563.474-.205 1.025-.205.54 0 1.02.205t.837.563q.358.357.563.837.205.48.205 1.02 0 .55-.205 1.025-.205.475-.563.832-.357.358-.837.563-.48.205-1.02.205zm0-3.75q-.469 0-.797.328-.328.328-.328.797 0 .469.328.797.328.328.797.328.469 0 .797-.328.328-.328.328-.797 0-.469-.328-.797-.328-.328-.797-.328zM24 10.002v5.578q0 .774-.293 1.46-.293.685-.803 1.194-.51.51-1.195.803-.686.293-1.459.293-.445 0-.908-.105-.463-.106-.85-.329-.293.95-.855 1.729-.563.78-1.319 1.336-.756.557-1.67.861-.914.305-1.898.305-1.148 0-2.162-.398-1.014-.399-1.805-1.102-.79-.703-1.312-1.664t-.674-2.086h-5.8q-.411 0-.704-.293T0 16.881V6.873q0-.41.293-.703t.703-.293h8.59q-.34-.715-.34-1.5 0-.727.275-1.365.276-.639.75-1.114.475-.474 1.114-.75.638-.275 1.365-.275t1.365.275q.639.276 1.114.75.474.475.75 1.114.275.638.275 1.365t-.275 1.365q-.276.639-.75 1.113-.475.475-1.114.75-.638.276-1.365.276-.188 0-.375-.024-.188-.023-.375-.058v1.078h10.875q.469 0 .797.328.328.328.328.797zM12.75 2.373q-.41 0-.78.158-.368.158-.638.434-.27.275-.428.639-.158.363-.158.773 0 .41.158.78.159.368.428.638.27.27.639.428.369.158.779.158.41 0 .773-.158.364-.159.64-.428.274-.27.433-.639.158-.369.158-.779 0-.41-.158-.773-.159-.364-.434-.64-.275-.275-.639-.433-.363-.158-.773-.158zM6.937 9.814h2.25V7.94H2.814v1.875h2.25v6h1.875zm10.313 7.313v-6.75H12v6.504q0 .41-.293.703t-.703.293H8.309q.152.809.556 1.5.405.691.985 1.19.58.497 1.318.779.738.281 1.582.281.926 0 1.746-.352.82-.351 1.436-.966.615-.616.966-1.43.352-.815.352-1.752zm5.25-1.547v-5.203h-3.75v6.855q.305.305.691.452.387.146.809.146.469 0 .879-.176.41-.175.715-.48.304-.305.48-.715t.176-.879Z" />
            </svg>
          ),
          color: "text-[#6264A7]",
        },
      ],
    },
  ];

  useEffect(() => {
    if (sectionRef.current) {
      inView(sectionRef.current, () => {
        const elements = sectionRef.current?.querySelectorAll(".skill-card");
        if (elements && elements.length > 0) {
          animate(
            elements,
            { opacity: [0, 1], y: [20, 0] },
            { delay: stagger(0.1), duration: 0.6, ease: [0.22, 1, 0.36, 1] },
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
        <div className="flex items-center gap-3 mb-3">
          <i className="fas fa-terminal text-2xl text-[#b026ff] dark:text-[#00f0ff]"></i>
          <h2 className="text-2xl md:text-4xl font-display font-bold tracking-tight text-gray-900 dark:text-white">
            {lang === "id" ? "Gudang Teknis" : "Technical Arsenal"}
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-5 sm:gap-6 items-stretch">
        {skillCategories.map((category) => (
          <div
            key={category.id}
            className="skill-card opacity-0 group relative flex flex-col h-full p-5 sm:p-6 rounded-3xl bg-white/70 dark:bg-[#111111]/70 backdrop-blur-md border border-gray-200/80 dark:border-white/10 hover:border-[#b026ff]/50 dark:hover:border-[#00f0ff]/50 transition-all duration-500 hover:shadow-[0_8px_40px_-10px_rgba(176,38,255,0.3)] dark:hover:shadow-[0_8px_40px_-10px_rgba(0,240,255,0.3)] hover:-translate-y-1.5 overflow-hidden"
          >
            {/* Background Effects */}
            <div className="absolute inset-0 bg-linear-to-br from-[#b026ff]/5 via-transparent to-[#00f0ff]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
            <div className="absolute -top-10 -right-10 w-28 h-28 bg-[#b026ff]/10 dark:bg-[#00f0ff]/10 rounded-full blur-3xl group-hover:bg-[#b026ff]/20 dark:group-hover:bg-[#00f0ff]/20 transition-all duration-500 pointer-events-none"></div>

            {/* Header Card dengan Tinggi Tetap (Fix Alignment) */}
            <div className="flex flex-col h-[110px] mb-4 relative z-10">
              <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-xl bg-gray-50 dark:bg-white/5 text-[#b026ff] dark:text-[#00f0ff] shadow-sm border border-gray-100 dark:border-white/5 group-hover:bg-[#b026ff] group-hover:text-white dark:group-hover:bg-[#00f0ff] dark:group-hover:text-gray-900 transition-all duration-500 group-hover:scale-110 group-hover:-rotate-6">
                <i className={`${category.icon} text-xl`}></i>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white tracking-tight leading-snug group-hover:text-[#b026ff] dark:group-hover:text-[#00f0ff] transition-colors duration-300 line-clamp-2">
                {category.title}
              </h3>
            </div>

            {/* Area Tags - Divider pasti sejajar karena header tingginya fix */}
            <div className="pt-5 border-t border-gray-200/60 dark:border-white/10 relative z-10 flex-1 flex flex-col">
              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill, index) => (
                  <div
                    key={skill.name}
                    style={{ transitionDelay: `${index * 40}ms` }}
                    className="group/tag flex items-center gap-1.5 px-3 py-1.5 text-[11px] sm:text-xs font-semibold rounded-lg bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400 border border-transparent hover:!border-gray-300 dark:hover:!border-white/20 hover:!bg-white dark:hover:!bg-[#1a1a1a] hover:text-gray-900 dark:hover:text-white transition-all duration-300 cursor-default shadow-sm hover:shadow-md"
                  >
                    {skill.svg ? (
                      skill.svg
                    ) : (
                      <i
                        className={`${skill.icon} text-sm transition-colors duration-300 ${skill.color}`}
                      ></i>
                    )}
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
