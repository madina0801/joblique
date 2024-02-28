/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'darkblue': '#2B2D42',
      'lightblue': '#8D99AE',
      'light': '#EDF2F4',
      'danger': '#D90429',
    },
  },
  plugins: [],
}

