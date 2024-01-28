import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      primaryColor: "#E1E8E6",
      secondaryColor: "#A3C3B8",
      tertiary: "#B0C5CA",
      textPrimary: "#333333",
      light: {
        primary: "#B0B0B0",
        secondary: "#89A89D",
        grey: "#F5F5F5",
        cream: "#F1ECE9",
      },
      black: "#000000",
      inStock: "#38761d",
      outOfStock: "#990000",
      googleIcon: "#DB4437"
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      padding: {
        sectionV: "4rem",
        sectionH: "1rem",
        sectionHSm: "1.5rem",
        sectionHXl: "5rem",
      },
      height: {
        help: "32rem",
      },
      boxShadow: {
        input: "box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.2);",
        dropdown: "box-shadow: 2px 2px 10px 5px rgba(0,0,0,0.7);",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
