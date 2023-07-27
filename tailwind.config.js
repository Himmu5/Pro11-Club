/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      color: {
        primary: "#32313B",
      },
      fontFamily: {
        outline: ["Outfit", "sans-serif"],
      },
    },
  },
  plugins: [],
};
