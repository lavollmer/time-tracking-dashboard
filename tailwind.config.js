/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "hsl(246, 80%, 60%)",
        lightOrange: "hsl(15, 100%, 70%)",
        softBluePlay: "hsl(195, 74%, 62%)",
        lightRedStudy: "hsl(348, 100%, 68%)",
        limeGreenExercise: "hsl(145, 58%, 55%)",
        violetSocial: "hsl(264, 64%, 52%)",
        softOrangeSelfCare: "hsl(43, 84%, 65%)",
        veryDarkBlue: "hsl(226, 43%, 10%)",
        darkBlue: "hsl(235, 46%, 20%)",
        desaturatedBlue: "hsl(235, 45%, 61%)",
        paleBlue: "hsl(236, 100%, 87%)",
      },
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
      },
      fontWeight: {
        light: 300,
        regular: 400,
        medium: 500,
      },
      fontSize: {
        18: "18px",
      },
    },
  },
  plugins: [],
};
