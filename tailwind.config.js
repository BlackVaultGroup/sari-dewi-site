/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'cormorant': ['Cormorant Garamond', 'serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
      },
      colors: {
        'warm-white': '#EFEDE6',
        'light-beige': '#F5EBDD',
        'linen': '#E6DED2',
        'muted-wood': '#7A5C43',
        'earth-plaster': '#5A493A',
        // Legacy colors for backward compatibility
        sand: '#F5EBDD', // Updated to light-beige
        clay: '#7A5C43', // Updated to muted-wood
        charcoal: '#5A493A', // Updated to earth-plaster
        'clay-light': '#E6DED2', // Updated to linen
        'clay-dark': '#5A493A', // Updated to earth-plaster
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
        'fade-in-up': 'fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
        'fade-in-up-delay': 'fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.2s both',
        'fade-in-up-delay-2': 'fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.4s both',
        'scale-in': 'scaleIn 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
};