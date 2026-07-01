import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#F5EFE4",
        espresso: "#2C1A0E",
        brown: "#8B5E3C",
        sand: "#E8DDD0",
        gold: "#C9A882",
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-dm-sans)", "Helvetica Neue", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;