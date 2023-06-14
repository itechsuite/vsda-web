/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      md: "877px",
    },
    extend: {
      backgroundImage: {},
    },
  },
  plugins: [require("daisyui")],
};
