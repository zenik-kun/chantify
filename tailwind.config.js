/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#161622",
        secondary: {
          DEFAULT: "#FF9C01",
          100: "#FF9001",
          200: "#FF8E01",
        },
        black: {
          DEFAULT: "#000",
          100: "#1E1E2D",
          200: "#232533",
        },
        gray: {
          100: "#CDCDE0",
        },
      },
      fontFamily: {
        maharlika: ["Maharlika-Regular", "sans-serif"],
        lthin: ["Lexend-Thin", "sans-serif"],
        lextralight: ["Lexend-ExtraLight", "sans-serif"],
        llight: ["Lexend-Light", "sans-serif"],
        lregular: ["Lexend-Regular", "sans-serif"],
        lmedium: ["Lexend-Medium", "sans-serif"],
        lsemibold: ["Lexend-SemiBold", "sans-serif"],
        lbold: ["Lexend-Bold", "sans-serif"],
        lextrabold: ["Lexend-ExtraBold", "sans-serif"],
        lblack: ["Lexend-Black", "sans-serif"],
      },
    },
  },
  plugins: [],
};