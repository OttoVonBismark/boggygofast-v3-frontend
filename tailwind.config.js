module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  // I love me some Dark Mode, so this is set to media. If a user's OS is in dark mode, we'll use dark mode CSS
  // using the dark: state (not unlike hover:)
  // darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
