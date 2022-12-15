/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
        Karla: ["Karla", "sans-serif"],
      },
      colors: {
        bgOne: "#672280",
        bgTwo: "#A626D3",
        btnLeft: "#711F8D",
        btnRight: "#A818DA",
        textColors: "#FFFFFF",
        borderColor: "rgb(30, 41,59)",
      },
    },
  },
  plugins: [],
};
