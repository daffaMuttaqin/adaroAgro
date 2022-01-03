module.exports = {
  content: [],
  purge: {
    enabled: true,
    content: [
      './public/index.html',
      './src/**/*.{html,js}',
    ],
    safelist : [
      'rotate-45',
      '-rotate-45'
    ]
    // content: ['./src/app/app.component.html', './src/app/landing-page/landing-page.component.html', './src/app/about-us/about-us.component.html', 
    // './src/app/gallery/gallery.component.html', './src/app/products/products.component.html', './src/app/terms-and-condition/terms-and-condition.component.html', 
    // './src/app/layout/footer/footer.component.html', './src/app/layout/menu/menu.component.html']
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
  plugins: [],
}
