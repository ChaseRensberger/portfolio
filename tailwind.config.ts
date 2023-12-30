import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        slideIn: {
          "0%": { transform: "translateY(-25%)", opacity: "0" },
          "100%": { transform: "translateY(0%)", opacity: "1" }
        },
      },
      animation: {
        slideIn: "slideIn 0.5s ease-in"
      }
    },
  },
  plugins: [],
}
export default config
