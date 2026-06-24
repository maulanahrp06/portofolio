import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8 text-center text-light/30 text-sm bg-dark">
      <div className="container mx-auto px-4">
        &copy; 2026 <span className="text-secondary font-medium">Maulana Iksan</span> · Dibuat dengan{' '}
        <i className="fas fa-heart text-primary" /> dan semangat 
      </div>
    </footer>
  );
}