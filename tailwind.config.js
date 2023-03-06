/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1185px",
    },
    fontFamily: {
      man: ["Manrope", "sans-serif"],
    },
    backgroundColor: {
      primery: "#3734A9",
    },
    extend: {},
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
};
