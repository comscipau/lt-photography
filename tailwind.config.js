/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        alcubierre: ["Alcubierre", "sans-serif"],
        spaceGrotesk: ["SpaceGrotesk", "sans-serif"],
      },
    },
  },
  plugins: [],
};
