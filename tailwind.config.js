const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./index.html', './page/products.html'],
  purge: {
    content : ['./**/*.html', './page/**/*.html'],
    safelist : [
      'rotate-45',
      '-rotate-45'
    ]
  },
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      gray: colors.gray,
      white: colors.white,

      'greenAgro': '#61CE70',
      'hoverGreenAgro': '#54C363',
      'greenContactUs': '#1FC916',
      'greenOurProduct': '#99E369',
      'bgNavbar': '#131313',
      'blackText' : '#111117',
      'blackSeeDetails' : '#121223',
      'supportBy' : '#91979F'
    },
    extend: {
      fontFamily: {
        'montserrat' : 'Montserrat',
        'poppins': 'Poppins',
      },
    },
  },
  variants: {
    extend: {
      padding: ['hover'],
    },
  },
  plugins: [],
}
