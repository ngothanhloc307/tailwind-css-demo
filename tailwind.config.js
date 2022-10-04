/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary_bg: "rgba(255,255,255,0.4)",
      },
    },
  },
  plugins: [],
};
