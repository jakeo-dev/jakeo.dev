/** @type {import('tailwindcss').Config} */
/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */

module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'lightBlueGray': '#def3ff',
        'blueGray': '#83b5d3',
        'darkBlueGray': '#3f5461',
        'ytRed': '#ff0000',
        'twBlue': '#1b9beb',
        'dsBlurple': '#5865f2',
        'stGray': '#2a475e',
        'gtBlack': '#333333',
        'bnOrange': '#f18c3f',
        'emYellow': '#d4b30c',
        'trGreen': '#209151',
        'crRed': '#d63e3e',
        'flGray': '#878787',

        'bnOrangeBg': '#ffddc1',
        'emYellowBg': '#fffab8',
        'trGreenBg': '#afedc1',
        'twBlueBg': '#bfe6ff',
        'crRedBg': '#ffc4c4',
        'flGrayBg': '#ebebeb'
      },

      fontFamily: {
        'LexendDeca': ['Lexend Deca', 'sans-serif']
      }
    },
  },
  plugins: [],
}