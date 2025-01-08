import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          pri: "var(--brand-primary)",
          sec: "var(--brand-secondary)",
        },
        pri: "var(--primary)",
        sec: "var(--secondary)",
        tert: "var(--tertiary)",
      },
    },
  },
  plugins: [],
} satisfies Config;
