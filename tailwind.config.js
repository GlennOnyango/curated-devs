/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,php}"],
  theme: {
    extend: {
      colors: {
        blue_text: "#1F2C8F",
        talk_to_us: "#EEEEEE",
      },
      fontFamily: {
        inter: ["Inter"],
      },
      lineHeight: {
        12: "3.5rem",
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      }
    },
  },
  plugins: [],
};
