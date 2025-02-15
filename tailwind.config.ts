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
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary700: '#4A24A1',
        primary50: "#F0EBFC",
        gray700: '#344054',
        primary600: '#5F2ECF',
        primary500: '#6832E3'
      },
    },
  },
  plugins: [],
} satisfies Config;
