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
        savagevibe: {
          light: "#a6a2c2",
          base: "#5e3760",
          second: "#b1b4c7",
          dark: "#1d0f30",
        },
        fairy: {
          light: "#c2f2ba",
          base: "#177251",
          dark: "#0a292b",
          second: "#f5e6a1",
          secondark: "#c67e24",
        },
        dream: {
          light: "#f8daab",
          base: "#f19272",
          dark: "#6e2723",
          second: "#a2c2ce",
          secondark: "#0d131f",
        },
        blackheart: {
          light: "#c9c9c9",
          base: "#686667",
          dark: "#1a1819",
        },
      },
    },
  },
  plugins: [],
};
