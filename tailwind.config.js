/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#111111",
      },
      fontFamily: {
        outline: ["Outfit", "sans-serif"],
      },
    },
  },
  plugins: [],
};
