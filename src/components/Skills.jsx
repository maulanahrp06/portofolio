
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const skillData = [
  { name: 'Java', pct: 75, tools: ['OOP', 'Maven'] },
  { name: 'Python', pct: 80, tools:[] },
  { name: 'Database (SQL)', pct: 75, tools: ['MySQL', 'MongoDB'] },
  { name: 'Data Structures', pct: 75, tools: ['Algorithms', 'Complexity'] },
  { name: 'DevOps & Tools', pct: 70, tools: ['Git'] },
  { name: 'UI/UX Design', pct: 70, tools: ['Figma'] },
  { name: 'HTML', pct: 70, tools: [] },
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

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section id="skills" className="py-20 md:py-28 bg-dark" ref={ref}>
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <p className="text-primary text-sm font-semibold uppercase tracking-widest">Keahlian</p>
          <h2 className="text-3xl md:text-4xl font-bold mt-1 text-light">
            Tech <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-light/50 mt-2 max-w-md">Proficiency level &amp; tools yang saya gunakan sehari-hari.</p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-5"
          variants={container}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {skillData.map((skill, index) => (
            <motion.div
              key={index}
              variants={item}
              className="glass p-5 rounded-2xl hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex justify-between items-center mb-1">
                <span className="font-semibold text-light/90">{skill.name}</span>
                <span className="text-sm font-bold text-secondary">{skill.pct}%</span>
              </div>
              <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${skill.pct}%` } : {}}
                  transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
                />
              </div>
              <div className="flex flex-wrap gap-1.5 mt-3">
                {skill.tools.map((tool, idx) => (
                  <span key={idx} className="text-[10px] bg-white/5 border border-white/5 text-light/40 px-2 py-0.5 rounded-full">
                    {tool}
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