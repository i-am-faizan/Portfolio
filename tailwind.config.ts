import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        void: "#07060d",
        surface: {
          DEFAULT: "#faf9f7",
          dim: "#f0eeeb",
        },
        graphite: "#15131f",
        violet: {
          50: "#f1edff",
          100: "#e2d9ff",
          200: "#c3b3ff",
          300: "#9f86f2",
          400: "#8265e0",
          500: "#6a4bd6",
          600: "#5636bd",
          700: "#432a94",
          800: "#2e1d68",
          900: "#1c1140",
        },
        signal: "#ff6a3d",
        ink: {
          DEFAULT: "#0c0a18",
          soft: "#39364a",
          faint: "#8b869e",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      borderRadius: {
        frame: "28px",
        card: "18px",
      },
      backgroundImage: {
        "violet-fade":
          "linear-gradient(180deg, #0c0a18 0%, #241a4d 55%, #3a2a72 100%)",
        "violet-fade-rev":
          "linear-gradient(0deg, #0c0a18 0%, #241a4d 55%, #3a2a72 100%)",
      },
      boxShadow: {
        card: "0 1px 0 rgba(255,255,255,0.6) inset, 0 20px 40px -24px rgba(20,10,50,0.25)",
        frame: "0 40px 120px -40px rgba(0,0,0,0.6)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 28s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
