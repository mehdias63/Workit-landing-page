/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      fraun: ["Fraunces"],
      man: ["Manrope"],
    },
    extend: {
      colors: {
        "dark-purple": "#24053E",
        "light-green": "#44FFA1",
        "dark-gray": "#584D62",
      },
    },
  },
  plugins: [],
};

