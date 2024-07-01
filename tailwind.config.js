/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class", // Assuming you're toggling dark mode with a class
  theme: {
    container: {
      center: true,
      padding: "20px",
    },
    extend: {
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-1deg)" },
          "50%": { transform: "rotate(1deg)" },
        },
        bounce: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-3px)" },
        },
      },
      animation: {
        wiggle: "wiggle 0.5s ease-in-out infinite",
        bounce: "bounce 0.5s ease-in-out infinite",
      },
      transformOrigin: {
        "top-left": "top left",
      },
      backgroundImage: {
        "gradient-backColor":
          "linear-gradient(-45deg, rgba(23, 37, 84, 0.9) 0%, rgba(23, 37, 84, 0.9) 30%, rgba(255, 255, 255, 0) 30%, rgba(255, 255, 255, 0) 100%)",
      },
    },
  },
  plugins: [],
};
