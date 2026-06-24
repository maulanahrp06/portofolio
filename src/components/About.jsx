import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

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

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-20 md:py-28 bg-grayLight" ref={ref}>
      <div className="container mx-auto px-4 md:px-8">
        {/* Judul */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <p className="text-primary text-sm font-semibold uppercase tracking-widest">Tentang</p>
          <h2 className="text-3xl md:text-4xl font-bold mt-1 text-dark">
            <span className="text-dark">Saya</span> Maulana Iksan
          </h2>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-12"
          variants={container}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* KOLOM KIRI - DESKRIPSI */}
          <motion.div variants={item} className="space-y-4 text-dark/80 leading-relaxed">
            <p className="text-dark text-base">
              <strong className="text-dark">Maulana Iksan</strong>, mahasiswa Informatika di 
              <strong className="text-dark"> Universitas Satya Terra Bhineka</strong> yang adaptif dan antusias mengeksplorasi perkembangan teknologi terbaru.
            </p>
            <p className="text-dark/70">
              Saya meyakini bahwa proses belajar yang berkelanjutan (<em>continuous learning</em>) merupakan kunci utama pertumbuhan profesional. Bagi saya, setiap proyek adalah peluang berharga untuk mengeksplorasi teknologi sekaligus memperdalam pemahaman teknis.
            </p>

            {/* PENGALAMAN */}
            <div className="mt-6">
              <h3 className="text-lg font-bold text-dark/90 mb-2 flex items-center gap-2">
                <i className="fas fa-briefcase text-primary" /> Pengalaman
              </h3>
              <div className="bg-white/60 backdrop-blur-sm p-4 rounded-xl border border-white/20 shadow-sm">
                <p className="font-semibold text-dark/90">Satgas Anti Bully</p>
                <p className="text-dark/60 text-sm font-medium">MAN 2 Deli Serdang</p>
                <p className="text-dark/70 text-sm mt-1">
                  Bertugas sebagai anggota satuan tugas anti perundungan, bertanggung jawab dalam mengedukasi siswa, 
                  melakukan pencegahan, dan menangani kasus bullying di lingkungan madrasah.
                </p>
              </div>
            </div>
          </motion.div>

          {/* KOLOM KANAN - INFO + PENDIDIKAN */}
          <motion.div variants={item} className="space-y-4">
            {/* INFO PRIBADI */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: 'Nama', value: 'Maulana Iksan' },
                { label: 'Jurusan', value: 'Informatika' },
                { label: 'Universitas', value: 'Satya Terra Bhineka' },
                { label: 'Semester', value: '2' },
                { label: 'Status', value: 'Mahasiswa' },
                { label: 'Lokasi', value: 'Indonesia' },
              ].map((info) => (
                <div key={info.label} className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-white/20 shadow-sm">
                  <p className="text-[10px] uppercase tracking-wider text-dark/40 font-semibold">{info.label}</p>
                  <p className="font-medium text-dark/90">{info.value}</p>
                </div>
              ))}
            </div>

            {/* PENDIDIKAN */}
            <div className="mt-4">
              <h3 className="text-lg font-bold text-dark/90 mb-2 flex items-center gap-2">
                <i className="fas fa-school text-primary" /> Pendidikan
              </h3>
              <div className="bg-white/60 backdrop-blur-sm p-4 rounded-xl border border-white/20 shadow-sm space-y-3">
                <div>
                  <p className="font-semibold text-dark/90">MAN 2 Deli Serdang</p>
                  <p className="text-dark/60 text-sm font-medium">IPA · 2021 - 2024</p>
                </div>
                <div className="border-t border-white/20 pt-3">
                  <p className="font-semibold text-dark/90">Universitas Satya Terra Bhineka</p>
                  <p className="text-dark/60 text-sm font-medium">Informatika · 2025 - Sekarang</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}