/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        blue: 'hsl(246, 80%, 60%)',
        lightRedWork: 'hsl(15, 100%, 70%)',
        softBluePlay: 'hsl(195, 74%, 62%)',
        lightRedStudy: 'hsl(348, 100%, 68%)',
        limeGreenExercise: 'hsl(145, 58%, 55%)',
        violetSocial: 'hsl(264, 64%, 52%)',
        softOrangeSelfCare: 'hsl(43, 84%, 65%)',
        veryDarkBlue: 'hsl(226, 43%, 10%)',
        darkBlue: 'hsl(235, 46%, 20%)',
        desaturatedBlue: 'hsl(235, 45%, 61%)',
        paleBlue: 'hsl(236, 100%, 87%)',
      },
    },
  },
  plugins: [],
}

