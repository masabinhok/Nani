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
     keyframes: {
        'circle-keys': {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.5)', opacity: '0.5' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        'dot-keys': {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(0)' },
          '100%': { transform: 'scale(1)' },
        },
        'outline-keys': {
          '0%': {
            transform: 'scale(0)',
            outline: 'solid 20px hsl(120, 50%, 50%)',
            'outline-offset': '0',
            opacity: '1',
          },
          '100%': {
            transform: 'scale(1)',
            outline: 'solid 0 transparent',
            'outline-offset': '20px',
            opacity: '0',
          },
        },
      },
      animation: {
        'circle-keys': 'circle-keys 2s ease-in-out infinite',
        'dot-keys': 'dot-keys 2s ease-in-out infinite',
        'outline-keys': 'outline-keys 2s ease-in-out infinite',
      },
  },
  plugins: [],
} satisfies Config;

