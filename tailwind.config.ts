import type { Config } from "tailwindcss";

const config: Config = {
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
        brand: "#d2b277",
        cream: "#f6f0e4",
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'Arial', 'Helvetica', 'sans-serif'],
        cursive: ['var(--font-dancing-script)', 'cursive'],
      },
    },
  },
  plugins: [],
};
export default config;
