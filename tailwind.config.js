
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'transparent': 'transparent',
      'black': '#2B2B2B',
      'black-secondary': '#3B3B3B',
      'gray': '#858584',
      'white': '#FFF',
      'purple': '#A259FF'
    },
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif',],
      'roboto': ['Roboto', 'sans-serif',],
      'spaceMono': ['Space Mono', 'monospace',],
      'workSans': ['Work Sans', 'sans-serif',],
    },
    backgroundImage: {
      'none': 'none',
      'gradien-1': "linear-gradient(101deg, #A259FF 13.57%, #FF6250 97.65%))",
      'gradien-2': "linear-gradient(128deg, #A259FF 49.75%, #377DF7 136.56%))",
    },
    extend: {},
  },
  plugins: [],
}