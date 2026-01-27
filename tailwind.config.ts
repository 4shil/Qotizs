import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "rgb(250, 250, 252)",
        foreground: "rgb(20, 20, 30)",
        primary: {
          DEFAULT: "rgb(255, 107, 107)",
          light: "rgb(255, 200, 200)",
          dark: "rgb(235, 80, 80)",
        },
        secondary: {
          DEFAULT: "rgb(255, 230, 109)",
          light: "rgb(255, 245, 200)",
          dark: "rgb(240, 210, 80)",
        },
        accent: {
          DEFAULT: "rgb(135, 206, 250)",
          light: "rgb(200, 230, 255)",
          dark: "rgb(100, 180, 230)",
        },
        success: "rgb(144, 238, 144)",
        purple: "rgb(216, 191, 216)",
        peach: "rgb(255, 218, 185)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        'soft-sm': '2px 2px 0px rgba(30, 30, 40, 1)',
        'soft': '4px 4px 0px rgba(30, 30, 40, 1)',
        'soft-lg': '6px 6px 0px rgba(30, 30, 40, 1)',
        'soft-xl': '8px 8px 0px rgba(30, 30, 40, 1)',
      },
      borderWidth: {
        '3': '3px',
      },
      borderRadius: {
        'soft': '0.75rem',
      },
    },
  },
  plugins: [],
} satisfies Config;
