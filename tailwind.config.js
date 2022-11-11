/** @type {import('tailwindcss').Config} */
/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */

module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'dsBlurple': '#5865f2',
        'crRed': '#bd3737',

      },

      fontFamily: {
        'LexendDeca': ['Lexend Deca', 'sans-serif']
      }
    },
  },
  plugins: [],
}