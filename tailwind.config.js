/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
    colors: {
      'darkblue': '#2B2D42',
      'mediumblue': '#1B263B',
      'lightblue': '#8D99AE',
      'light': '#EDF2F4',
      'danger': '#D90429',
      'lightgray': '#F1FAEE',
      'darkgray': '#ADB5BD',
    },
  },
},
  plugins: [],
}

