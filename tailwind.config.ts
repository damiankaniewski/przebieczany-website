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
        grey: "#DAD7CD",
        green1: "#A3B18A",
        green2: "#588157",
        green3: "#3A5A40",
        green4: "#344E41",
        signature: "#555",
        signature_text: "#aaa",
      },
      backgroundImage: {
        render1: "url('/render1.jpg')",
        render1_mobile: "url('/render1_mobile.jpg')",
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
