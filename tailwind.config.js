/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,php}"],
  theme: {
    extend: {
      colors: {
        blue_text: "#1F2C8F",
      },
      fontFamily: {
        inter: ["Inter"],
      },
      lineHeight: {
        12: "3.5rem",
      },
      animation: {
        rotate_quad: "rotate 100s linear infinite",
      },
    },
  },
  plugins: [],
};
