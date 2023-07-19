/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{js,jsx,ts,tsx}"];
export const theme = {
  colors: {
    primary_dark: "#0D1B2A",
    secondary_dark: "#415A77",
    bg_dark: "#1C1D21",
    paragraph_dark_low: "#EEE1EDAA",
    paragraph_dark: "#EEE1ED",
    heading_dark: "#7D5BA6",
    subheading_dark: "#129490",
    link_dark: ""
  },
  extend: {
    animation: {
      'spin-slow': 'spin 3s linear infinite',
    }
  },
};
export const plugins = [];
