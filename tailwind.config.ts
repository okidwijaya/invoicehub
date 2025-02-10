import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primaryColor: "#1C2434",
        secondaryColor: "#F4F4F4",
        quinaryColor: "#F1F5F9",
        secondaryTextColor: "#9D9D9D",
        quinaryTextColor: "#64748B",
        tableHeadingTextColor: "#1C2434",
        tableSubHeadingTextColor: "#64748B",
        inputBorderColor: "#E2E8F0",
        buttonPrimaryColor: "#3C50E0"
      },
    },
  },
  plugins: [],
} satisfies Config;
