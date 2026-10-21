import type { Config } from "tailwindcss";

// Charte CARZONE relevée sur topcarzone.com (fond blanc, or, Montserrat + Roboto).
const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cz: {
          gold: "#CC9000",
          yellow: "#FFB400",
          "gold-dark": "#996C00",
          ink: "#222222",
          mute: "#666666",
          line: "#E3E1DC",
          soft: "#F5F4F1",
          dark: "#1F1D1A",
          wa: "#1A9E4B",
        },
      },
      fontFamily: {
        display: ["var(--font-montserrat)", "Segoe UI", "system-ui", "sans-serif"],
        sans: ["var(--font-roboto)", "Segoe UI", "system-ui", "sans-serif"],
        mono: ["var(--font-plex-mono)", "ui-monospace", "Consolas", "monospace"],
      },
      maxWidth: {
        site: "1240px",
      },
    },
  },
  plugins: [],
};

export default config;
