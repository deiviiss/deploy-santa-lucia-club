import type { Config } from "tailwindcss";
const {nextui} = require("@nextui-org/react");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      screens:{
        'mobile': '376px',
        'desktop':'1441px',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'raleway': ['Raleway', 'sans-serif'],
        poppins: ['var(--font-poppins)'],
      },
      colors: {
        'custom-gray': '#E4E4E4',
        'light-gray': ' #423E3E',
        'lightest-gray': '#838181',
        'slight-gray':'#848199',
        'custom-blue': ' #2A4AF4',
        primary:{
          300: '#1F7F95'
        },
        secondary:{
          50: '#ffcc99',
          100: '#ffb266',
          300: '#FF7F00',
          400: '#CC6600',
        }
        
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        'custom-gradient': 'linear-gradient(180deg, #FFFFFF 0%, #F9FDFE 18.62%, #F3FBFC 24.12%, #E6F6FA 35.12%, #DAF2F7 45.12%, #CDEDF5 57.12%, #C7EBF4 71.62%, #C1E9F2 85.12%)',
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;