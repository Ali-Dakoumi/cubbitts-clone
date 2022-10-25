/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        height: "height",
      },
      keyframes: {
        opacity: {
          "0%, 100%": {
            opacity: "0.5",
          },
          "50%": {
            opacity: "1",
          },
        },
      },
      animation: {
        opacity: "opacity 2s ease-in-out infinite",
      },
      height: {
        40: "40vh",
        70: "70vh",
        80: "80vh",
        90: "90vh",
      },
      colors: {
        "primary-color": "var(--primary-color)",
        "footer-color": "var(--footer-color)",
        "button-light": "var(--button-light)",
        "button-dark": "var(--button-dark)",
        "dark-hover": "var(--dark-hover)",
        "color-border": "var(--color-border)",
        "color-brand": "var(--color-brand)",
        "body-light": "var(--body-light)",
        "light-hover": "var(--light-hover)",
      },
    },
  },
  plugins: [],
};
