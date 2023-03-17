/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6357b1",
        secondary: "#00ff86",
      },
    },
    fontFamily: {
      Poppins: ["Open+sans, sans-serif"],
    },
  },
  plugins: [],
};
