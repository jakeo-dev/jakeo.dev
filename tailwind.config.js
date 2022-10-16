/** @type {import('tailwindcss').Config} */
/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */

module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'lightBlueGray': '#d6efff',
        'blueGray': '#83b5d3',
        'darkBlueGray': '#3f5461',
        'ytRed': '#ff0000',
        'twBlue': '#1b9beb',
        'dsBlurple': '#5865f2',
        'stGray': '#2a475e',
        'gtBlack': '#333333',

        'defaultGray': '#4f4f4f',
        'bnOrange': '#b05919',
        'trGreen': '#17693a',
        'twBlueProj': '#0e69a1',
        'crRed': '#bd3737',

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