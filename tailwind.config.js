const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      Lato: ["Lato", "sans-serif", ...defaultTheme.fontFamily.sans],
      YesevaOne: ["yeseva one", "cursive", "sans-serif"],
      Raleway: ["Raleway", "sans-serif"],
    },
    extend: {
      colors: {
        ramppblue: "rgba(52, 72, 135, 1)",
        ramppdeepblue: "rgba(52, 72, 155, 1)",
        rampppink: "rgba(205, 150, 150, 1)",
        ramppgold: "rgba(233, 192, 92, 1)",
        rampporange: "rgba(209, 89, 70, 1)",
        darkgray: "rgba(105, 105, 105, 1)",
        frosted: "hsla(0,0%,100%,.9)",
        greylight: "#e9e9ea",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
