module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
        serif: ['Roboto', 'serif'],
        mono: ['Poppins', 'monospace'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'base', // This is the default strategy
    }),
  ],
  google: {
    config: require('./google-fonts.config.js'),
  },
};
