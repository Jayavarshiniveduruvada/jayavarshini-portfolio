/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Manrope", "ui-sans-serif", "system-ui", "-apple-system",
          "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "sans-serif",
        ],
      },
      colors: {
        orchid: {
          50: "#FDF5FB", 100: "#FAE8F6", 200: "#F5D0EE",
          300: "#EEB3E2", 400: "#E48FD1",
        },
        eggplant: {
          500: "#6B2D86", 600: "#52206B", 700: "#3E1654",
          800: "#2B0F3A", 900: "#1D0827",
        },
        signal: { 400: "#FF8A3D", 500: "#FF6B1A", 600: "#E85500" },
      },
    },
  },
  plugins: [],
};