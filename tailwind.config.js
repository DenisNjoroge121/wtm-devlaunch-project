
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#effaf3",
          100: "#d9f3e2",
          500: "#239963",
          600: "#187b4e",
          700: "#16623f",
          900: "#123b2b",
        },
        ink: "#17251f",
        muted: "#65736b",
        canvas: "#f8faf7",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      borderRadius: {
        card: "1.25rem",
      },
      boxShadow: {
        soft: "0 18px 50px rgba(23, 37, 31, 0.08)",
      },
    },
  },
  plugins: [],
};
