/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bagel: ['"Bagel Fat One"', ...defaultTheme.fontFamily.sans],
        space: ['"Space Mono"', ...defaultTheme.fontFamily.mono],
        barcode: ['"Libre Barcode 39"', ...defaultTheme.fontFamily.mono],
        darumadrop: ['"Darumadrop One"', ...defaultTheme.fontFamily.sans],
        xanh: [`"Xanh Mono"`, ...defaultTheme.fontFamily.mono]
      }
    }
  },
  plugins: [],
}

