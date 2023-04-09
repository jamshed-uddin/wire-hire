/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "regal-blue": "#243c5a",
        beige: "#DDD0C8",
        "white-smoke": "#F0F0F0",
        "light-beige": "#FDF8F0",
        "red-violet": "#C53678",
        "dark-grey": "#323232",
        whitex: "#F5F5F5",
      },
    },
  },
  plugins: [],
};
