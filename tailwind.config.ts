/* eslint-disable @typescript-eslint/no-unsafe-return */
import type { Config } from "tailwindcss";

const config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        "bebas-neue": ['"Bebas Neue"', "sans-serif"],
        title: ["Rowdies", "sans-serif"],
        "sub-heading": ["Rowdies", "sans-serif"],
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        marquee: "marquee var(--duration) linear infinite",
        "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
        orbit: "orbit calc(var(--duration)*1s) linear infinite",
        "spin-around": "spin-around calc(var(--speed) * 2) infinite linear",
        slide: "slide var(--speed) ease-in-out infinite alternate",
        shimmer: "shimmer 5s infinite",
      },
      backgroundImage: {
        "glassy-gradient":
          "linear-gradient(135deg, rgba(0, 0, 0, 0.8), rgba(48, 25, 52, 0.8), rgba(20, 20, 20, 0.8))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        "toggle-moon": `
          3em 2.5em 0 0em #d9fbff inset,
          rgba(255, 255, 255, 0.1) 0em -7em 0 -4.5em,
          rgba(255, 255, 255, 0.1) 3em 7em 0 -4.5em,
          rgba(255, 255, 255, 0.1) 2em 13em 0 -4em,
          rgba(255, 255, 255, 0.1) 6em 2em 0 -4.1em,
          rgba(255, 255, 255, 0.1) 8em 8em 0 -4.5em,
          rgba(255, 255, 255, 0.1) 6em 13em 0 -4.5em,
          rgba(255, 255, 255, 0.1) -4em 7em 0 -4.5em,
          rgba(255, 255, 255, 0.1) -1em 10em 0 -4.5em`,
        "toggle-sun": `
          3em 3em 0 5em #fff inset,
          0 -5em 0 -2.7em #fff,
          3.5em -3.5em 0 -3em #fff,
          5em 0 0 -2.7em #fff,
          3.5em 3.5em 0 -3em #fff,
          0 5em 0 -2.7em #fff,
          -3.5em 3.5em 0 -3em #fff,
          -5em 0 0 -2.7em #fff,
          -3.5em -3.5em 0 -3em #fff`,
      },
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
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - var(--gap)))" },
        },
        "marquee-vertical": {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(calc(-100% - var(--gap)))" },
        },
        orbit: {
          "0%": {
            transform:
              "rotate(0deg) translateY(calc(var(--radius) * 1px)) rotate(0deg)",
          },
          "100%": {
            transform:
              "rotate(360deg) translateY(calc(var(--radius) * 1px)) rotate(-360deg)",
          },
        },
        "spin-around": {
          "0%": {
            transform: "translateZ(0) rotate(0)",
          },
          "15%, 35%": {
            transform: "translateZ(0) rotate(90deg)",
          },
          "65%, 85%": {
            transform: "translateZ(0) rotate(270deg)",
          },
          "100%": {
            transform: "translateZ(0) rotate(360deg)",
          },
        },
        shimmer: {
          "0%, 90%, 100%": {
            "background-position": "calc(-100% - var(--shimmer-width)) 0",
          },
          "30%, 60%": {
            "background-position": "calc(100% + var(--shimmer-width)) 0",
          },
        },
        slide: {
          to: {
            transform: "translate(calc(100cqw - 100%), 0)",
          },
        },
      },
      rotate: {
        75: "75deg",
      },
      transitionDuration: {
        400: "400ms",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
