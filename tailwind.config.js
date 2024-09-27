/** @type {import('tailwindcss').Config} */

const customColors = {
  brandCharcoalBlack: "#171717",
  brandTextGray: "#aba9a9",
};

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: customColors,
      backgroundColor: customColors,
      textColor: customColors,
    },
  },
  plugins: [],
};
