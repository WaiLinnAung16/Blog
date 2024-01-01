/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1D7948",
        secondary: "#DDEA90",
        darkGray: "#243236",
        lightGray: "#424242",
        lightWhite:'#E0E0E0',
        white: "#F8F8F8",
      },
      fontFamily: {
        sans: ['"K2D",sans-serif'],
      },
    },
  },
  plugins: [],
};
