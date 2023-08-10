/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{js,jsx,ts,tsx}"];
export const theme = {
  colors: {
    primary_dark: "#0D1B2A",
    primary_dark_low: "#0D1B2A88",
    secondary_dark: "#415A77",
    bg_dark: "#1C1D21",
    paragraph_dark: "#EEE1ED",
    paragraph_dark_low: "#EEE1EDAA",
    heading_dark: "#7D5BA6",
    subheading_dark: "#129490",
    subheading_dark_low: "#12949033"
  },
  extend: {
    animation: {
      'scroll-into-view': 'scroll-into-view 2s ease-in forwards'
    },
    keyframes: {
      'scroll-into-view': {
        '0%': { opacity: 0 },
        '100%': {opacity: 1}
      }
    },
    transitionTimingFunction: {
      'in-out-quart': 'cubic-bezier(0.39, 0.575, 0.565, 1)'
    }
  },
};
export const plugins = [];
