/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        Lightcyan: "hsl(193, 38%, 86%)",
        NeonGreen: "hsl(150, 100%, 66%)",
        GrayishBlue: "hsl(217, 19%, 38%)",
        DarkGrayishBlue: "hsl(217, 19%, 24%)",
        DarkBlue: "hsl(218, 23%, 16%)",
      },
      screens: {
        medium: "375px",
        large: "768px",
      },
      boxShadow: {
        custom: " 15px 15px 10px hsl(0deg 0% 0% / 11%)",
      },
    },
  },
  plugins: [],
};
