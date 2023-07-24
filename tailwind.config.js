/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    screens:{
      'sm': '460px',
      'md': '760px',
      'lg': '1200px',
      'xl': '1900px'
    },
    extend: {
      screens:{
        "sm": "480px"
      },
    },
    fontFamily:{
      dosis: ['Dosis', 'sans-serif'],
      sara: ['Sarabun', 'sans-serif'],
      arimo: [ 'Arimo', 'sans-serif'],
      nunito: ['Nunito Sans', 'sans-serif'],
      lato: ['Lato', 'sans-serif']
    }
  },
  plugins: [],
}
