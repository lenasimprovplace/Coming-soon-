import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        crimson: "#D22A3F",
        cream: "#F4F5D3",
        olive: "#99A012",
        ink: "#2B1A15",
      },
      fontFamily: {
        display: ["var(--font-anton)", "sans-serif"],
        script: ["var(--font-instrument-serif)", "serif"],
        body: ["var(--font-work-sans)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
