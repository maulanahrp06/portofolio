
import React, { useRef, useState } from 'react';
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

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [status, setStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => {
      setStatus('sent');
      setTimeout(() => setStatus('idle'), 2500);
    }, 1200);
  };

  const socials = [
    { icon: 'fa-linkedin', label: 'LinkedIn' },
    { icon: 'fa-github', label: 'GitHub' },
    { icon: 'fa-instagram', label: 'Instagram' },
    { icon: 'fa-envelope', label: 'Email' },
  ];

  return (
    <section id="contact" className="py-20 md:py-28 bg-dark" ref={ref}>
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <p className="text-primary text-sm font-semibold uppercase tracking-widest">Hubungi Saya</p>
          <h2 className="text-3xl md:text-4xl font-bold mt-1 text-light">
            Let's work <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">together</span>
          </h2>
          <p className="text-light/50 mt-2 max-w-md">Saya terbuka untuk kolaborasi, magang, atau proyek riset!</p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-12"
          variants={container}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.div variants={item} className="space-y-6">
            <p className="text-light/60 leading-relaxed">
              Punya ide atau ingin berdiskusi? Jangan ragu untuk menghubungi saya melalui social media di bawah ini, atau kirim pesan langsung melalui formulir.
            </p>
            <div className="flex flex-wrap gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href="#"
                  className="flex items-center gap-2 glass-light px-4 py-2 rounded-full text-sm font-medium text-light/70 hover:text-light hover:bg-white/10 transition-all"
                >
                  <i className={`fab ${social.icon}`} />
                  {social.label}
                </a>
              ))}
            </div>
            <div className="glass-light p-4 rounded-xl border border-white/5 flex items-center gap-3 text-light/40 text-sm">
              <i className="fas fa-map-pin text-secondary" />
              Indonesia · 2026
            </div>
          </motion.div>

          <motion.form
            variants={item}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <input
              type="text"
              placeholder="Nama lengkap"
              required
              className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3 text-light placeholder:text-light/30 focus:outline-none focus:border-primary/50 transition"
            />
            <input
              type="email"
              placeholder="Alamat email"
              required
              className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3 text-light placeholder:text-light/30 focus:outline-none focus:border-primary/50 transition"
            />
            <textarea
              rows={4}
              placeholder="Tulis pesan Anda…"
              required
              className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3 text-light placeholder:text-light/30 focus:outline-none focus:border-primary/50 transition resize-none"
            />
            <button
              type="submit"
              disabled={status !== 'idle'}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary px-8 py-3 rounded-full font-semibold text-white shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {status === 'idle' && <><i className="fas fa-paper-plane" /> Kirim Pesan</>}
              {status === 'sending' && <><i className="fas fa-spinner fa-spin" /> Mengirim...</>}
              {status === 'sent' && <><i className="fas fa-check" /> Terkirim!</>}
            </button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}