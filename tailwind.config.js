import { fontFamily } from "tailwindcss/defaultTheme";
import { colors } from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
export const darkMode = ["class"];
export const content = [
  "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
];
export const theme = {
  extend: {
    fontFamily: {
      sans: ["var(--font-inter)", ...fontFamily.sans],
    },
    colors: {
      ...colors,
      "light-gold": "#F5bc51",
      "light-gold-2": "#fae0ae",
      "dark-gold": "#533519",
    },
    backgroundImage: {
      "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      "gradient-conic":
        "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
    },
    keyframes: {
      "accordion-down": {
        from: { height: 0 },
        to: { height: "var(--radix-accordion-content-height)" },
      },
      "accordion-up": {
        from: { height: "var(--radix-accordion-content-height)" },
        to: { height: 0 },
      },
    },
    animation: {
      "accordion-down": "accordion-down 0.2s ease-out",
      "accordion-up": "accordion-up 0.2s ease-out",
    },
  },
};
export const plugins = [
  require("@tailwindcss/forms"),
  require("@tailwindcss/typography"),
  require("tailwindcss-animate"),
];
