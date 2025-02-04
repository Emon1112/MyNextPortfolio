/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'media',

  theme: {
    extend: {
      colors: {
        ...colors,
        primary: colors.purple,
        secondary: colors.pink,
      },
    },
  },
  plugins: [],
};
