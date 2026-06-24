import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Intro({ onComplete }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      if (onComplete) onComplete();
    }, 3000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-dark"
        >
          <motion.h1
            initial={{ scale: 0.5, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="text-6xl md:text-8xl font-extrabold bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent"
          >
            Maulana Iksan
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-light/40 text-sm md:text-base mt-4 tracking-widest"
          >
            PORTFOLIO
          </motion.p>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '60%' }}
            transition={{ duration: 2, delay: 0.8, ease: 'easeInOut' }}
            className="absolute bottom-20 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}