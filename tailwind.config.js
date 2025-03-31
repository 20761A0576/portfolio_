/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#64ffda',
        'primary-dark': '#00e6e6',
        'text-primary': '#ccd6f6',
        'text-secondary': '#8892b0',
        'bg-primary': '#0a192f',
        'bg-secondary': '#112240',
        'bg-tertiary': '#1d3461',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        'custom-sm': '0 2px 8px rgba(0, 230, 230, 0.1)',
        'custom-md': '0 4px 20px rgba(0, 230, 230, 0.15)',
        'custom-lg': '0 8px 30px rgba(0, 230, 230, 0.2)',
      },
      transitionDuration: {
        'fast': '0.2s',
        'normal': '0.3s',
        'slow': '0.5s',
      },
    },
  },
  plugins: [],
} 