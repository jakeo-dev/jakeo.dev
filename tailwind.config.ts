import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        LexendDeca: ["Lexend Deca", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
