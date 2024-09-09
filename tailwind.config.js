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
        shadyplaylist: {
          light: "#bcb8d3",
          base: "#9d80b0",
          dark: "#261f41",
        },
        zehnemariz: {
          light: "#9db3b0",
          base: "#345f6a",
          second: "#948c7c",
          dark: "#111d21",
        },
      },
    },
  },
  plugins: [],
};
