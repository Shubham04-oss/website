import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        void: "#050507",
        "void-light": "#0a0a0f",
        text: "#f4f4f7",
        muted: "#a6a6b8",
        accent: "#b9ff2c",
        "accent-2": "#ff4ecd",
        glass: "rgba(255, 255, 255, 0.07)",
        "glass-border": "rgba(255, 255, 255, 0.13)",
        "glass-dark": "rgba(0, 0, 0, 0.58)",
        "glass-dark-border": "rgba(255, 255, 255, 0.09)",
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      backdropBlur: {
        glass: "18px",
        heavy: "28px",
      },
      animation: {
        float: "float 18s ease-in-out infinite",
        wobble: "wobble 6s ease-in-out infinite",
        bounce: "bounce 2.5s infinite",
        "scroll-dot": "scrollDot 2s infinite",
        pulse: "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(3vw, -4vh) scale(1.08)" },
          "66%": { transform: "translate(-3vw, 3vh) scale(0.95)" },
        },
        wobble: {
          "0%, 100%": { transform: "rotate(12deg) scale(1)" },
          "50%": { transform: "rotate(-8deg) scale(1.1)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
