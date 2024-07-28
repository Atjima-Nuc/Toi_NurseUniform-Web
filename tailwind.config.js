/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        elephant: "#0e273a",
        vallartaBlue: "#316993",
        freezingVapor: "#d6e8f5",
        pictionBlue: "#5ba1d7",
      },
    },
  },
  plugins: [],
};
