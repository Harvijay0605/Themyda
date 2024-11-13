import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
        "accordion-active": {
          DEFAULT: "hsl(var(--purple-550))",
        },
        gray: {
          350: "hsl(var(--gray-350))",
          650: "hsl(var(--gray-650))",
        },
        blue: {
          750: "hsl(var(--blue-750))",
        },
        teal: {
          350: "hsl(var(--teal-350))",
        },
        purple: {
          550: "hsl(var(--purple-550))",
          250: "hsl(var(--purple-250))",
        },
        indigo: {
          950: "hsl(var(--indigo-950))",
          550: "hsl(var(--indigo-550))",
        },
        cyan: {
          350: "hsl(var(--cyan-350))",
        },
        red: {
          450: "hsl(var(--red-450))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      backgroundImage: {
        "text-gradient":
          "linear-gradient(156.64deg, #311B92 -32.52%, #006064 62.47%, #F8BBD0 109.55%)",
      },
      screens: {
        "max-display": { max: "1750px" },
        "max-display-1650": { max: "1650px" },
        "max-display-1600": { max: "1600px" },
        "max-display-1550": { max: "1550px" },
        "max-desktop": { max: "1450px" },
        "max-laptop": { max: "1278px" },
        "max-laptop-1280": { max: "1280px" },
        "max-laptop-1200": { max: "1200px" },
        "max-laptop-1100": { max: "1100px" },
        "max-laptop-1050": { max: "1050px" },
        "max-tablet": { max: "960px" },
        "max-tablet-900": { max: "900px" },
        "max-tablet-860": { max: "860px" },
        "max-tablet-800": { max: "800px" },
        "max-tablet-725": { max: "725px" },
        "max-tablet-700": { max: "700px" },
        "max-phablet": { max: "600px" },
        "max-phablet-500": { max: "500px" },
        "max-mobile": { max: "450px" },
        "max-mobile-376": { max: "376px" },
        "max-mobile-340": { max: "340px" },
        "max-mobile-325": { max: "325px" },
        display: "1751px",
        "display-1650": "1651px",
        "display-1600": "1601px",
        "display-1550": "1551px",
        desktop: "1451px",
        laptop: "1279px",
        "laptop-1200": "1201px",
        "laptop-1100": "1101px",
        "laptop-1050": "1051px",
        tablet: "961px",
        "tablet-900": "901px",
        "tablet-860": "861px",
        "tablet-800": "801px",
        "tablet-725": "726px",
        "tablet-700": "701px",
        phablet: "601px",
        "phablet-500": "501px",
        mobile: "451px",
        "mobile-376": "377px",
        "mobile-340": "341px",
        "mobile-325": "326px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
