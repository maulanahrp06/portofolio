
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const certificates = [
  {
    title: 'Sertifikat python',
    issuer: 'SoloLearn',
    date: '2025',
    image: '/images/sertifikat-python.jpeg',
    link: '#',
  },
  {
    title: 'Sertifikat SDG',
    date: '2026',
    image: '/images/sertifikat-sdg-1.png',
    link: '#',
  },
  {
    title: 'Sertifikat SDG',
    date: '2026',
    image: '/images/seertifikat-sdg-2.png',
    link: '#',
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

export default function Certificates() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section id="certificates" className="py-20 md:py-28 bg-dark" ref={ref}>
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <p className="text-primary text-sm font-semibold uppercase tracking-widest">Prestasi</p>
          <h2 className="text-3xl md:text-4xl font-bold mt-1 text-light">
            Sertifikat <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">Saya</span>
          </h2>
          <p className="text-light/50 mt-2 max-w-md">Beberapa sertifikat yang telah saya peroleh.</p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {certificates.map((cert, idx) => (
            <motion.a
              key={idx}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              variants={item}
              className="glass rounded-2xl overflow-hidden hover:-translate-y-1 transition-transform duration-300 group"
            >
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-4">
                <h3 className="font-bold text-light/90">{cert.title}</h3>
                <p className="text-light/40 text-sm">{cert.issuer}</p>
                <p className="text-light/30 text-xs mt-1">{cert.date}</p>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}