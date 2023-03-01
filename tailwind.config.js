/** @type {import('tailwindcss').Config} */
/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */

module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    fontFamily: {
      'LexendDeca': ['Lexend Deca', 'sans-serif'],
      'Aclonica': ['Aclonica', 'sans-serif'],
      'BalsamiqSans': ['Balsamiq Sans', 'sans-serif'],
      'Calistoga': ['Calistoga', 'sans-serif'],
      'Righteous': ['Righteous', 'sans-serif'],
      'RubikMonoOne': ['Rubik Mono One', 'sans-serif'],
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