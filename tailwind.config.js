/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme")

module.exports = {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Manga-inspired dark theme
        mangaPrimary: "#6C63FF", // Vibrant purple
        "mangaPrimary-hover": "#5A52D9",
        mangaSecondary: "#121212", // Very dark gray/black
        "mangaSecondary-lighter": "#1E1E1E",
        "mangaSecondary-darker": "#0A0A0A",
        mangaAccent: "#FF4081", // Vibrant pink
        "mangaAccent-hover": "#E63975",
        mangaBackground: "#121212", // Very dark gray/black
        "mangaBackground-paper": "#1E1E1E", // Slightly lighter dark
        mangaTextPrimary: "#FFFFFF", // White
        mangaTextSecondary: "#B0B0B0", // Light gray
        mangaTextDisabled: "#6C6C6C", // Medium gray
        mangaBorder: "#333333", // Dark gray
        "mangaBorder-light": "#444444", // Slightly lighter gray
        mangaSuccess: "#4CAF50", // Green
        mangaWarning: "#FFC107", // Amber
        mangaError: "#F44336", // Red
        mangaInfo: "#2196F3", // Blue
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        manga: ["'Bangers'", "cursive"],
        sans: ["'Roboto'", "sans-serif", ...fontFamily.sans],
      },
      boxShadow: {
        manga: "5px 5px 0px #000000",
        card: "0 4px 6px rgba(0, 0, 0, 0.3)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
