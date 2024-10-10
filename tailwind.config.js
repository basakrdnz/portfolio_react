/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Shantell Sans', 'sans-serif'], // Shantell Sans'ı varsayılan sans-serif ailesine ekledik
      },
    },
  },
  plugins: [],
}
