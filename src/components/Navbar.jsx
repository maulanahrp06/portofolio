import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const navItems = [
  { label: 'Tentang', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Soft Skills', href: '#softskills' },
  { label: 'Sertifikat', href: '#certificates' },
  { label: 'Proyek', href: '#projects' },
  { label: 'Kontak', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-dark/80 backdrop-blur-xl shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between h-16">
        {/* LOGO */}
        <a href="#" className="text-2xl font-extrabold bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
          Maulana<span className="text-light/40">.</span>
        </a>

        {/* DESKTOP MENU - TANPA HIRE ME */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-light/70">
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="hover:text-light transition-colors relative group">
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        {/* HAMBURGER BUTTON (MOBILE) */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
        >
          <span className={`block w-6 h-0.5 bg-light transition-all ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
          <span className={`block w-6 h-0.5 bg-light transition-all ${isOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-light transition-all ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
        </button>
      </div>

      {/* MOBILE MENU - TANPA HIRE ME */}
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden bg-dark/95 backdrop-blur-xl border-b border-white/5"
      >
        <ul className="flex flex-col items-center gap-4 py-6 text-sm font-medium text-light/70">
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} onClick={() => setIsOpen(false)} className="hover:text-light transition-colors">
                {item.label}
              </a>
            </li>
          ))}
          {/* HIRE ME DI MOBILE SUDAH DIHAPUS */}
        </ul>
      </motion.div>
    </motion.nav>
  );
}