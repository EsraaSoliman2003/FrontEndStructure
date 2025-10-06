/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        lightBg: "#f8fafc",
        lightText: "#1e293b",
        darkBg: "#111827",
        darkText: "#e5e7eb",
        primary: "#3b82f6",
        primaryHover: "#1d4ed8",
        accentColor: "#10b981",
        accentColorHover: "#059669",
      },
      boxShadow: {
        navbar: "0 2px 4px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.1)",
        navbarDark:
          "0 2px 4px rgba(0, 0, 0, 0.3), 0 1px 2px rgba(0, 0, 0, 0.4)",
      },
      transitionProperty: {
        "navbar-opacity": "opacity, transform",
      },
      transitionDuration: {
        navbar: "300ms",
      },
    },
  },
  plugins: [],
};
