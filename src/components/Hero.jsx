import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

export default function Hero() {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  useEffect(() => {
    const handleMove = (e) => {
      setMouseX((e.clientX / window.innerWidth - 0.5) * 10);
      setMouseY((e.clientY / window.innerHeight - 0.5) * 10);
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  return (
    <section className="min-h-screen flex items-center pt-20 pb-12 bg-cream">
      <div className="container mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-12 items-center">
        {/* Avatar - Kiri */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="flex justify-center order-1 md:order-1"
        >
          <div
            className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96"
            style={{
              transform: `rotateX(${mouseY * 2}deg) rotateY(${mouseX * 2}deg)`,
              transition: 'transform 0.15s ease-out',
            }}
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-secondary/10 blur-3xl animate-pulse" />
            <div className="absolute inset-[-8px] rounded-full border border-primary/20" />
            <div className="absolute inset-[-18px] rounded-full border border-secondary/10" />
            <div className="absolute inset-[-28px] rounded-full border border-primary/10" />
            <div className="relative w-full h-full rounded-full border border-white/10 flex items-center justify-center bg-dark/50 backdrop-blur-sm">
              <span className="text-7xl md:text-8xl font-black text-secondary/80 select-none">MI</span>
            </div>
          </div>
        </motion.div>

        {/* Teks - Kanan */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="space-y-4 order-2 md:order-2 text-dark"
        >
         
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-dark">
            Maulana <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Iksan</span>
          </h1>

          <TypeAnimation
            sequence={[
              'Mahasiswa Informatika',
              1500,
              'Web Enthusiast',
              1500,
              'Tech Explorer',
              1500,
            ]}
            wrapper="p"
            repeat={Infinity}
            className="text-lg font-semibold text-primary/80"
            speed={40}
          />

          <p className="text-dark/60 max-w-md leading-relaxed">
            Mahasiswa Informatika yang antusias membangun solusi dan mengeksplorasi perkembangan teknologi terbaru.
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            {['Java', 'Python', 'html', 'MySQL'].map((tag) => (
              <span key={tag} className="bg-primary/10 border border-primary/20 text-primary px-3 py-1 rounded-full text-xs font-medium">
                {tag}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
            <a href="#projects" className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary px-6 py-3 rounded-full font-semibold text-white shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all hover:-translate-y-1">
              <i className="fas fa-rocket" /> Lihat Proyek
            </a>
            <a href="#about" className="inline-flex items-center gap-2 border border-primary/20 px-6 py-3 rounded-full font-medium text-dark/80 hover:bg-primary/5 transition-all hover:-translate-y-1">
              <i className="fas fa-user" /> Tentang Saya
            </a>
          </div>

          <div className="flex gap-8 pt-6 border-t border-primary/10">
            <div>
              <div className="text-2xl font-bold text-primary">5</div>
              <div className="text-xs text-dark/50 font-medium">Proyek</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">7</div>
              <div className="text-xs text-dark/50 font-medium">Tech Stack</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">2</div>
              <div className="text-xs text-dark/50 font-medium">Tahun Coding</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}