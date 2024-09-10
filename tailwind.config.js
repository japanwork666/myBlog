/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      screens: {
        mobile: '375px',
        tablet: '640px',
        laptop: '1200px'
      },
      colors: {
        'custom-border': '#6e6666',
        'custom-purple': '#800080'
      },
      borderWidth: {
        1: '1px',
        2: '2px'
      },
      boxShadow: {
        custom: '2px 2px 2px 1px rgba(0, 0, 0, 0.2)'
      }
    }
  },
  plugins: []
};
