/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        diazepam: {
          light: "#f5e7e6",
          base: "#b47366",
          dark: "#251113",
        },
        customGreen: {
          light: "#80ed99",
          base: "#38b000",
          dark: "#007f5f",
        },
      },
    },
  },
  plugins: [],
};

module.exports = {
  safelist: [
    "bg-diazepam-light",
    "bg-diazepam-base",
    "bg-diazepam-dark",
    "text-diazepam-light",
    "text-diazepam-light",
    "text-diazepam-base",
    "b-diazepam-base",
    "b-diazepam-base",
    "b-diazepam-dark",
    "shadow-diazepam-dark",
    "shadow-diazepam-dark",
    "shadow-diazepam-dark",
  ],
};

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
};
