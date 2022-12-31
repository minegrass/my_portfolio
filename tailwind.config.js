/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "main-dark": "#171717",
        "main-grey": "#444444",
        "main-pink": "#DA0037",
        "main-white": "#EDEDED",
      },
    },
  },
  plugins: [],
};
