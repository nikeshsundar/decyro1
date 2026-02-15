import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                bg: "#F5F5F0",
                fg: "#0A0A0A",
                accent: "#6C3BF5",
                "accent-light": "#8B6CF7",
                muted: "#6B6B6B",
                "muted-light": "#9A9A9A",
                border: "#E0E0DA",
                "card-bg": "#EDEDEA",
            },
            fontFamily: {
                heading: ["var(--font-space-grotesk)", "sans-serif"],
                body: ["var(--font-inter)", "sans-serif"],
            },
            fontSize: {
                "hero": "clamp(3rem, 8vw, 7rem)",
                "display": "clamp(2.5rem, 5vw, 4.5rem)",
                "section": "clamp(2rem, 4vw, 3.5rem)",
            },
            letterSpacing: {
                "label": "0.15em",
            },
            animation: {
                "marquee": "marquee 30s linear infinite",
                "float": "float 6s ease-in-out infinite",
                "pulse-slow": "pulse 4s ease-in-out infinite",
            },
            keyframes: {
                marquee: {
                    "0%": { transform: "translateX(0)" },
                    "100%": { transform: "translateX(-50%)" },
                },
                float: {
                    "0%, 100%": { transform: "translateY(0px)" },
                    "50%": { transform: "translateY(-20px)" },
                },
            },
        },
    },
    plugins: [],
};

export default config;
