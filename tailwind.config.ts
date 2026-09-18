import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        carbon: "#18181B",
        anthracite: "#27272A",
        borderDark: "#3F3F46",
        gold: {
          DEFAULT: "#E5C158",
          light: "#FDE047",
          dark: "#B8860B",
          glow: "rgba(229, 193, 88, 0.25)",
        },
        luxury: {
          bg: "#18181B",
          surface: "#27272A",
          surfaceHover: "#3F3F46",
          surfaceElevated: "#52525B",
          border: "#3F3F46",
          borderLight: "#52525B",
          gold: "#E5C158",
          goldLight: "#FDE047",
          title: "#FAFAFA",
          body: "#E4E4E7",
          muted: "#A1A1AA",
        },
      },
      fontFamily: {
        syne: ["var(--font-syne)", "sans-serif"],
        sans: ["var(--font-inter)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
      },
      boxShadow: {
        "gold-glow": "0 0 25px -5px rgba(212, 175, 55, 0.25)",
        "gold-glow-sm": "0 0 15px -3px rgba(212, 175, 55, 0.2)",
        "luxury-card": "0 8px 30px rgba(0, 0, 0, 0.7)",
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #D4AF37 0%, #F5E7A3 50%, #AA8010 100%)",
        "gold-shimmer": "linear-gradient(90deg, transparent 0%, rgba(212,175,55,0.15) 50%, transparent 100%)",
        "dark-radial": "radial-gradient(circle at 50% 0%, rgba(212, 175, 55, 0.08) 0%, rgba(13, 13, 13, 0) 70%)",
      },
    },
  },
  plugins: [],
};

export default config;
