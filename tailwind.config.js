/** @type {import('tailwindcss').Config} */
/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */

module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    fontFamily: {
      'LexendDeca': ['Lexend Deca', 'sans-serif'],
      'Sen': ['Sen', 'sans-serif'],
      'NotoSerif': ['Noto Serif', 'sans-serif'],
      'Calistoga': ['Calistoga', 'sans-serif']
    },
    extend: {
      width: {
        '1/16': '6.25%',
        '1/20': '5%',
      }
    }
  },
  plugins: [],
}