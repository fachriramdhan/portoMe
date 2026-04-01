# 🚀 Portofolio Fachri | Software Engineer

[![React](https://img.shields.io/badge/React-18.x-blue?style=flat-square&logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?style=flat-square&logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.x-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT)

Selamat datang di repositori kode sumber untuk situs web portofolio pribadi saya. Aplikasi web premium ini dibangun untuk menampilkan proyek, pengalaman, dan keahlian saya dalam menjembatani kesenjangan antara perangkat lunak berkinerja tinggi dan sistem otomasi industri.

🔗 **[Lihat Demo Langsung] (https://fachriramdhan.vercel.app/)**

---

## ✨ Fitur Utama

- **⚡ Kinerja Tinggi:** Dibangun menggunakan React 18 dan Vite untuk reaktivitas dan waktu muat yang sangat cepat.
- **🌓 Mode Gelap & Terang (Dark/Light Mode):** Dukungan tema yang dapat disesuaikan sepenuhnya dengan preferensi pengguna, tersimpan otomatis di perangkat (`localStorage`), tanpa *flash* saat memuat halaman.
- **🌐 Multibahasa (Bilingual):** Mendukung Bahasa Indonesia dan Bahasa Inggris (EN/ID) dengan transisi instan tanpa memuat ulang halaman.
- **✨ Animasi Interaktif:** Menggunakan pustaka `motion` dan `framer-motion` untuk animasi transisi, *hover*, dan *scroll* yang halus dan dinamis.
- **📱 Navigasi Mobile Khusus:** Desain *mobile-first* yang dioptimalkan dengan **Bottom Navigation Bar** untuk akses cepat ke menu utama, dan **Hamburger Menu** di *Top Bar* untuk menu tambahan, memberikan pengalaman seperti aplikasi *native*.
- **🎠 Carousel Proyek Unggulan:** Menampilkan proyek-proyek terbaik dalam bentuk *slider* interaktif yang elegan.
- **📋 Salin Email Instan:** Fitur *Copy to Clipboard* pada bagian kontak dengan indikator visual (centang) untuk kemudahan komunikasi.
- **⬆️ Scroll to Top:** Tombol melayang cerdas yang muncul saat menggulir ke bawah untuk kembali ke atas halaman dengan cepat.
- **🔗 Integrasi Sosial:** Tautan langsung ke profil GitHub, LinkedIn, Instagram, dan WhatsApp.
- **🖱️ Kursor Kustom:** Efek kursor interaktif yang mengikuti pergerakan *mouse* pengguna untuk meningkatkan pengalaman visual.
- **📊 Aktivitas GitHub:** Menampilkan grafik kontribusi GitHub secara langsung menggunakan API eksternal.

## 🛠️ Teknologi yang Digunakan

- **Framework Utama:** [React](https://react.dev/) (Hooks, Functional Components)
- **Bahasa:** [TypeScript](https://www.typescriptlang.org/) (Strict Mode)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animasi:** [Motion](https://motion.dev/)
- **Ikon:** Material Icons & SVG Kustom

## 📁 Struktur Proyek

```text
src/
├── assets/                 # Aset statis (gambar, PDF CV, dll)
├── components/             # Komponen UI Reusable
│   ├── About.tsx           # Bagian Tentang Saya
│   ├── Certificates.tsx    # Daftar Sertifikat
│   ├── Contact.tsx         # Informasi Kontak & Tautan Sosial
│   ├── CustomCursor.tsx    # Komponen Kursor Kustom
│   ├── Education.tsx       # Riwayat Pendidikan
│   ├── Experience.tsx      # Pengalaman Kerja
│   ├── GithubActivity.tsx  # Integrasi Aktivitas GitHub
│   ├── Projects.tsx        # Etalase Proyek
│   └── Skills.tsx          # Daftar Keahlian (Tech Stack)
├── hooks/                  # Custom React Hooks
│   ├── useLanguage.ts      # Manajemen state Bahasa (ID/EN) tersinkronisasi dengan localStorage
│   └── useTheme.ts         # Manajemen state Tema (Gelap/Terang) tersinkronisasi dengan localStorage
├── App.tsx                 # Komponen Utama (Layout, Sidebar Navigasi, & Routing Internal)
├── index.css               # Gaya Global & Konfigurasi Tailwind v4 (@custom-variant dark)
└── main.tsx                # Titik Masuk Aplikasi (Entry Point)
```

## 🚀 Cara Menjalankan Secara Lokal

### Prasyarat
Pastikan Anda telah menginstal **Node.js** (versi 18 atau lebih baru) dan **npm** (atau yarn/pnpm).

### Langkah-langkah Instalasi

1. **Kloning repositori ini:**
   ```bash
   git clone https://github.com/username-anda/nama-repo-anda.git
   cd nama-repo-anda
   ```

2. **Instal dependensi:**
   ```bash
   npm install
   ```

3. **Jalankan server pengembangan:**
   ```bash
   npm run dev
   ```
   Aplikasi akan berjalan secara lokal (biasanya di `http://localhost:5173` atau `http://localhost:3000`). Buka tautan tersebut di browser Anda.

4. **Build untuk Produksi:**
   ```bash
   npm run build
   ```
   Hasil *build* yang sudah dioptimalkan akan tersedia di dalam direktori `dist/`.

## 🤝 Kontribusi

Jika Anda ingin berkontribusi pada proyek ini, silakan buat *pull request* atau buka *issue* untuk mendiskusikan perubahan yang ingin Anda lakukan.

## 📄 Lisensi

Proyek ini dilisensikan di bawah [MIT License](LICENSE). Hak cipta © Fachri.

## 📬 Kontak

- **Email:** fachriramdhan04@gmail.com
- **LinkedIn:** [Profil LinkedIn Anda](https://linkedin.com/in/fachriramdhan)
- **GitHub:** [Profil GitHub Anda](https://github.com/fachriramdhan)
