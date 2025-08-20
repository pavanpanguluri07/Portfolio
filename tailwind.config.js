/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: { DEFAULT: '#070a10', card: '#0d121a' },
        text: { DEFAULT: '#e6eef8', muted: '#9fb0c3' },
        brand: { DEFAULT: '#60a5fa', soft: '#93c5fd' }
      },
      boxShadow: { soft: '0 10px 30px rgba(0,0,0,0.25)' },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(60% 60% at 50% 40%, rgba(96,165,250,0.12) 0%, rgba(0,0,0,0) 60%)'
      }
    },
  },
  plugins: [],
}
