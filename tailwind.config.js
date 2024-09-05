/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'burnt-orange': '#d68100',
        'medium-blue': '#00679a',
      },
    },
    plugins: [],
  }
}