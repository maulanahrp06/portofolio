import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const projects = [
  {
    icon: 'fa-calculator',
    title: 'Konversi Berat & Panjang',
    desc: 'Aplikasi konversi satuan berat (kg, gram, pon) dan panjang (meter, cm, km) berbasis Python dengan antarmuka GUI.',
    tags: ['Python'],
  },
  {
    icon: 'fa-book',
    title: 'Aplikasi Perpustakaan',
    desc: 'Sistem manajemen perpustakaan dengan fitur peminjaman buku secara online dan offline, serta notifikasi real-time.',
    tags: ['UI/UX', 'Figma', 'Mobile', 'Web'],
  },
  {
    icon: 'fa-paw',
    title: 'Monitoring Pakan Orang Utan',
    desc: 'Sistem monitoring ketersediaan pakan dan jadwal pemberian makan orang utan .',
    tags: ['Java'],
  },
  {
    icon: 'fa-address-book',
    title: 'Buku Tamu Digital',
    desc: 'Aplikasi buku tamu berbasis web dengan fitur input pengunjung, waktu kunjungan, dan laporan harian.',
    tags: ['Html', 'JavaScript', 'css'],
  },
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section id="projects" className="py-20 md:py-28 bg-[#0d140d]" ref={ref}>
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <p className="text-primary text-sm font-semibold uppercase tracking-widest">Portofolio</p>
          <h2 className="text-3xl md:text-4xl font-bold mt-1 text-light">
            Proyek <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">Terbaru</span>
          </h2>
          <p className="text-light/50 mt-2 max-w-md">Proyek yang saya kerjakan selama kuliah maupun bersama tim.</p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-2 gap-6"
          variants={container}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {projects.map((proj, idx) => (
            <motion.div
              key={idx}
              variants={item}
              className="glass p-6 rounded-2xl flex flex-col hover:-translate-y-1 transition-transform duration-300"
            >
              <i className={`fas ${proj.icon} text-3xl text-secondary mb-3`} />
              <h3 className="text-xl font-bold text-light/90">{proj.title}</h3>
              <p className="text-light/50 text-sm leading-relaxed mt-1 flex-1">{proj.desc}</p>
              <div className="flex flex-wrap gap-1.5 mt-4">
                {proj.tags.map((tag) => (
                  <span key={tag} className="text-[10px] bg-primary/10 border border-primary/20 text-secondary px-2 py-0.5 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}