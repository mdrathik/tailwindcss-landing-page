const colors = require('tailwindcss/colors')
module.exports = {
  content: ['./*.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        //add your own color
        //https://tailwindcss.com/docs/customizing-colors
      },
      fontFamily: {
        poppins: ['Poppins'],
      },
      container: {
        center: true,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
