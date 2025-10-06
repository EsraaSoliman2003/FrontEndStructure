/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        lightBg: "#ffffff",
        lightText: "#213547",
        darkBg: "#1f2937",
        darkText: "#f9fafb",
        primary: "#3b82f6",
        primaryHover: "#2563eb",
      },
    },
  },
  plugins: [],
};
