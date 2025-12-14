import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./common/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: { "mac-yellow": "#ffc523", "mac-red": "#dd2f1e" },

      fontSize: {},

      // backgroundColor: {},
      // textColor: {},

      // 폰트 패밀리 추가
      fontFamily: {
        pretendard: ["var(--font-pretendard)"],
      },
    },
  },
  plugins: [tailwindcssAnimate],
};

export default config;
