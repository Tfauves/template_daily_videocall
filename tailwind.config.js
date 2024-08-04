/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        nav: "#063970",
        page: "#E5E5E5",
        card: "#F6EFD0",
        "card-hover": "#4f5e74",
        "default-text": "#FDF4DC",
        "blue-accent": "#002966",
        "blue-accent-hover": "#002966",
        "header-text": "#002966",
        "sub-text": "#5D5C61",
        "primary-btn-bg": "#2596be",
      },
      spacing: {
        3: "0.75rem",
        8: "2rem",
      },
      borderRadius: {
        md: "0.375rem",
      },
      fontSize: {
        lg: "1.125rem",
      },
    },
  },
  plugins: [],
};
