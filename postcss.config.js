module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss/nesting'), // Make sure this comes before Tailwind. It enables @apply and friends.
    require('tailwindcss'),
    require('autoprefixer')
  ]
}
