/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary100: "#6A00FF",
        primary200: "#a64aff",
        primary300: "#ffb1ff",
        accent100: "#00E5FF",
        accent200: "#00829b",
        text100: "#FFFFFF",
        text200: "#e0e0e0",
        bg100: "#1A1A1A",
        bg200: "#292929",
        bg300: "#404040",
      },
      fontFamily: {
        sans: ["Outfit", "sans-serif"],
      },
      animation: {
        "wiggle-scale": "wiggleScale 1s linear infinite",
      },
      keyframes: {
        wiggleScale: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.1)" },
        },
      },
    },
  },
  plugins: [],
};
