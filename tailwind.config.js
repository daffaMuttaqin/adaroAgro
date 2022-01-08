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

      'white1':'#ffffff',
      'greenAgro': '#61CE70',
      'greenContactUs': '#1FC916',
      'bgNavbar': '#131313'
    },
    extend: {},
  },
  variants: {
    extend: {
      padding: ['hover'],
    },
  },
  plugins: [],
}
