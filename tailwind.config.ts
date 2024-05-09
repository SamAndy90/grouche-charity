import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--montserrat)", ...fontFamily.sans],
      },
      colors: {
        astra: {
          100: "#E2D3FF",
          400: "#9F90BE",
          800: "#4E4A55",
          900: "#222026",
          950: "#121114",
        },
        a_sky: {
          500: "#0097EC",
          600: "#007FC7",
        },
        a_red: {
          500: "#FF4646",
          600: "#E81F1F",
        },
        turquoise: {
          400: "#04FFA5",
          700: "#155773",
        },
      },
    },
  },
  plugins: [],
};
export default config;
