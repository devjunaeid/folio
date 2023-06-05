/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      screens:{
        "sm": "480px"
      }
    },
    fontFamily:{
      dosis: ['Dosis', 'sans-serif'],
      sara: ['Sarabun', 'sans-serif'],
      arimo: [ 'Arimo', 'sans-serif']
    }
  },
  plugins: [],
}
