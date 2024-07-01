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
          "linear-gradient(-45deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0.5) 38%, rgba(23, 37, 84, 0.9) 38%, rgba(23, 37, 84, 0.9) 100%)",
        "gradient-backColor_two":
          "linear-gradient(-45deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0) 38%, rgba(23, 37, 84, 0.9) 38%, rgba(23, 37, 84, 0.9) 100%)",
        "gradient-backColors":
          "linear-gradient(-45deg, rgba(23, 37, 84, 1) 0%, rgba(23, 37, 84, 1) 38%, rgba(255, 255, 255, 0) 38%, rgba(255, 255, 255, 0) 100%)",
        "gradient-backColor_contact":
          "linear-gradient(45deg, rgba(23, 37, 84, 1) 0%, rgba(23, 37, 84, 1) 50%, rgba(255, 255, 255, 1) 50%, rgba(255, 255, 255, 1) 100%)",
        "gradient-backColor_contact_dark":
          "linear-gradient(45deg, rgba(23, 37, 84, 1) 0%, rgba(23, 37, 84, 1) 50%, rgba(23, 37, 84, .3) 50%, rgba(23, 37, 84, .3) 100%)",
      },
      backgroundColor: {
        dark_bg: "rgba(255, 255, 255, 0.4)",
      },
      boxShadow: {
        "gradient-shadow":
          "0 2px 8px -1px rgba(23, 37, 84, 0.9), 0 2px 8px -1px rgba(255, 255, 255, 0.9)",
      },
    },
  },
  plugins: [],
};
