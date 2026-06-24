import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      colors: {
        // Azul de marca refinado (índigo-azul, estilo fintech)
        brand: {
          50: "#eef4ff",
          100: "#dbe7fe",
          200: "#bfd3fe",
          300: "#93b4fd",
          400: "#608cfa",
          500: "#3b66f5",
          600: "#2548ea",
          700: "#1d37d7",
          800: "#1e30ae",
          900: "#1e2f89",
        },
        // Neutros con un punto de calidez para un look más premium
        ink: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
        },
      },
      boxShadow: {
        card: "0 1px 2px 0 rgba(15,23,42,0.04), 0 4px 16px -4px rgba(15,23,42,0.08)",
        "card-hover": "0 4px 12px -2px rgba(37,72,234,0.12), 0 12px 32px -8px rgba(37,72,234,0.18)",
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
    },
  },
  plugins: [],
};

export default config;
