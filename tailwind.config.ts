import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        eudoxus: ['var(--font-eudoxus)'],
      },
      colors: {
        ywhite: '#EFEFEF',
        ygrey: '#6C6C6C',
        yblack: '#2C2C2C',
        yred: '#FF6347',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
} satisfies Config;
