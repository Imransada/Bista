// tailwind.config.js
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./features/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#000",    
        secondary: "#0f172a",
        accent: "#dc2626",    
        orange: {
          50: "#fff7ed",
          300: "#fed7aa",
          500: "#f97316",
          600: "#ea580c",
        },
        red: {
          600: "#dc2626",
        },
        slate: {
          50: "#f8fafc",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
        },
      },
    },
  },
  plugins: [],
};
