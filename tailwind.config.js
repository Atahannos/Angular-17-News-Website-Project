/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
  },
  themes: ["light", "dark"],
  plugins: [require("daisyui")],
}

