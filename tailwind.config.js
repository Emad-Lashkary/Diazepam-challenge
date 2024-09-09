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
