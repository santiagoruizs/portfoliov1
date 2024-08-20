/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      'background': '#09090B',
      'card': '#27272A',
      'skill': '#27272A'

        },
        
    extend: {
      fontFamily: {
          roboto: ['"Roboto"']
      }
    },
  },
  plugins: [],
}