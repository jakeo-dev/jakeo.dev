/** @type {import('tailwindcss').Config} */
/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */

module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'LexendDeca': ['Lexend Deca', 'sans-serif']
      }
    },
  },
  plugins: [],
}