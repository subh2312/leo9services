/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    screens: {
      xs: "320px",
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
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
