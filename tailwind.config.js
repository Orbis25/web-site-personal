/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary100: "#6366f1", // Indigo 500
        primary200: "#818cf8", // Indigo 400
        primary300: "#a5b4fc", // Indigo 300
        accent100: "#06b6d4", // Cyan 500
        accent200: "#22d3ee", // Cyan 400
        text100: "#f8fafc", // Slate 50
        text200: "#cbd5e1", // Slate 300
        bg100: "#0f172a", // Slate 900
        bg200: "#1e293b", // Slate 800
        bg300: "#334155", // Slate 700
      },
      fontFamily: {
        sans: ["Outfit", "sans-serif"],
      },
      animation: {
        "wiggle-scale": "wiggleScale 1s linear infinite",
        float: "float 6s ease-in-out infinite",
        "pulse-soft": "pulseSoft 4s ease-in-out infinite",
      },
      keyframes: {
        wiggleScale: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.1)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0.8 },
        },
      },
    },
  },
  plugins: [],
};
