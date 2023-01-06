/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'russo-one': ['RussoOne', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [require("daisyui")],
}
