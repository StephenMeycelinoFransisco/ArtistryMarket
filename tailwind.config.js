/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'transparent': 'transparent',
      'black': '#2B2B2B',
      'black-secondary': '#3B3B3B',
      'gray': '#858584',
      'white': '#FFF',
      'purple': '#A259FF',
      'green': '#00AC4F',
      'red': '#C70039',
    },
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif',],
      'roboto': ['Roboto', 'sans-serif',],
      'spaceMono': ['Space Mono', 'monospace',],
      'workSans': ['Work Sans', 'sans-serif',],
    },
  },
  plugins: [],
}