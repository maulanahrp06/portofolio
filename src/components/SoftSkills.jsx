import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const softSkills = [
  { name: 'Teamwork', icon: 'fa-users', desc: 'Mampu bekerja sama dalam tim untuk mencapai tujuan bersama.' },
  { name: 'Time Management', icon: 'fa-clock', desc: 'Mengatur waktu dengan efektif untuk menyelesaikan tugas tepat waktu.' },
  { name: 'Learning Ability', icon: 'fa-graduation-cap', desc: 'Cepat beradaptasi dan mempelajari teknologi baru.' },
  { name: 'Problem Solving', icon: 'fa-lightbulb', desc: 'Menganalisis masalah dan menemukan solusi kreatif.' },
  { name: 'Communication', icon: 'fa-comments', desc: 'Berkomunikasi dengan jelas dan efektif, baik lisan maupun tulisan.' },
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

export default function SoftSkills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section id="softskills" className="py-20 md:py-28 bg-[#0d140d]" ref={ref}>
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <p className="text-primary text-sm font-semibold uppercase tracking-widest">Kemampuan</p>
          <h2 className="text-3xl md:text-4xl font-bold mt-1 text-light">
            Soft <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-light/50 mt-2 max-w-md">Kemampuan interpersonal yang saya miliki.</p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
          variants={container}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {softSkills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={item}
              className="glass p-5 rounded-2xl hover:shadow-xl transition-shadow duration-300 flex items-start gap-4"
            >
              <i className={`fas ${skill.icon} text-2xl text-secondary mt-1`} />
              <div>
                <h3 className="font-semibold text-light/90">{skill.name}</h3>
                <p className="text-light/50 text-sm leading-relaxed">{skill.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}