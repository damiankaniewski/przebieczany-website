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
        grey:   "#D8D3CE",
        green1: "#A28C80",
        green2: "#7B6153",
        green3: "#543C2F",
        green4: "#37241B",
        signature: "#555",
        signature_text: "#aaa",
      },
      backgroundImage: {
        render1: "url('/przebieczany_front.jpg')",
        render1_mobile: "url('/przebieczany_front_mobile.jpg')",
      },
      width: {
        "3/10": "30%",
        "160": "40rem",
      },
      height: {
        "80vh": "80vh",
        "112": "28rem",
      },
    },
  },
  plugins: [],
} satisfies Config;
