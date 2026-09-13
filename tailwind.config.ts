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
        carbon: "#0D0D0D",
        anthracite: "#161616",
        borderDark: "#262626",
        gold: {
          DEFAULT: "#D4AF37",
          light: "#EDD68A",
          dark: "#B8860B",
          glow: "rgba(212, 175, 55, 0.25)",
        },
        luxury: {
          bg: "#0D0D0D",
          surface: "#161616",
          surfaceHover: "#1C1C1C",
          surfaceElevated: "#222222",
          border: "#262626",
          borderLight: "#333333",
          gold: "#D4AF37",
          goldLight: "#F3E5AB",
          title: "#FFFFFF",
          body: "#A1A1AA",
          muted: "#71717A",
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
