/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ["Satoshi", "sans-serif"],
      },
      fontWeight: {
        black: 900,
        medium: 500,
      },
      colors: {
        black: "#000",
        white: "#fff",
      },
      spacing: {
        52: "13rem",
      },
    },
  },
  plugins: [],
};
