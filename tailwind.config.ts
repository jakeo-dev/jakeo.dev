import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'LexendDeca': ['Lexend Deca', 'sans-serif'],
      'RammettoOne': ['Rammetto One', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}
export default config
