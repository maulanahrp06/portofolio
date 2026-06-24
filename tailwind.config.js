/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: '#065f46',   // hijau tua (tombol, link aktif)
        secondary: '#059669', // hijau zamrud (highlight, ikon)
        dark: '#0a0f0a',      // hitam kehijauan
        light: '#e8f0e8',     // putih kehijauan
        cream: '#f0f5f0',     // krem kehijauan (untuk hero)
        grayLight: '#e8eee8', // abu-abu terang
      },
    },
  },
  plugins: [],
};