"use client";

import Image from 'next/image';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-gray-50">
      <section className="max-w-6xl mx-auto mt-16 px-4 md:px-8 flex flex-col md:flex-row items-center md:items-start text-left space-y-10 md:space-y-0 md:space-x-12 mb-10">
        
        {/* Gambar Profil */}
        <div className="relative w-64 aspect-square md:w-80 md:aspect-square rounded-full border-4 border-teal-500 shadow-xl hover:shadow-2xl transition-transform duration-300 hover:scale-105 overflow-hidden">
          <Image
            src="/images/sukma.jpg"
            alt="Foto Sukma Bagus Wahasdwika"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            priority
          />
        </div>

        {/* Konten Teks */}
        <div className="text-center md:text-left w-full">
          <h2 className="font-semibold text-lg text-zinc-700">Tentang Saya</h2>
          <h1 className="mt-2 font-extrabold text-4xl text-transparent bg-clip-text bg-gradient-to-r from-teal-500 via-blue-500 to-purple-500">
            Sukma Bagus Wahasdwika
          </h1>
          <p className="text-zinc-600 mt-4 max-w-2xl leading-relaxed">
            Saya adalah mahasiswa Politeknik Negeri Malang Semester 6 yang sedang belajar membangun website pribadi dengan Next.js, React, dan Tailwind CSS.
            Pada semester 6 ini saya mempelajari pemrograman berbasis framework untuk menambah ilmu,wawasan, dan pengalaman dalam membuat maupun mengembangkan website.
            Harapan saya setelah mendalami materi ini dapat diterapkan ketika membangun sebuah website.
          </p>

          {/* Kontak */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
            <ContactItem
              icon={<FaPhone />}
              label="082132164561"
              href="https://wa.me/6282132164561"
            />
            <ContactItem
              icon={<FaEnvelope />}
              label="sukmabaguswahasdwika10@gmail.com"
              href="mailto:sukmabaguswahasdwika10@gmail.com"
            />
            <ContactItem
              icon={<FaLinkedin />}
              label="sukma bagus wahasdwika"
              href="https://www.linkedin.com/in/sukma-bagus-wahasdwika"
            />
            <ContactItem
              icon={<FaGithub />}
              label="bagusswahasdwikaa"
              href="https://github.com/bagusswahasdwikaa"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

// Komponen Kontak
function ContactItem({
  icon,
  label,
  href,
}: {
  icon: React.ReactElement;
  label: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-full flex items-center gap-4 p-4 min-h-[72px] rounded-xl bg-white border-2 border-zinc-200 hover:border-teal-500 shadow-md hover:shadow-lg transition"
    >
      <div className="p-3 bg-gradient-to-r from-teal-400 to-blue-500 text-white rounded-full text-xl">
        {icon}
      </div>
      <span className="text-zinc-800 font-medium break-words">{label}</span>
    </a>
  );
}
