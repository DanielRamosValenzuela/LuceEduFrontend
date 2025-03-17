import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          50: '#E6F3FF',
          100: '#CCE7FF',
          200: '#99CFFF',
          300: '#66B7FF',
          400: '#339FFF',
          500: '#0087FF',
          600: '#006CD1',
          700: '#0051A3',
          800: '#003775',
          900: '#001C47',
        },
        'growth': {
          50: '#F0F9EB',
          100: '#E1F3D8',
          200: '#C3E7B1',
          300: '#A5DB8A',
          400: '#87CF63',
          500: '#69C33C',
          600: '#549C30',
          700: '#3F7524',
          800: '#2A4E18',
          900: '#15270C',
        },
        'creative': {
          50: '#FFF9E6',
          100: '#FFF3CC',
          200: '#FFE799',
          300: '#FFDB66',
          400: '#FFCF33',
          500: '#FFC300',
          600: '#CC9C00',
          700: '#997500',
          800: '#664E00',
          900: '#332700',
        },
        'wisdom': {
          50: '#F5E6FF',
          100: '#EBCCFF',
          200: '#D699FF',
          300: '#C266FF',
          400: '#AD33FF',
          500: '#9900FF',
          600: '#7A00CC',
          700: '#5C0099',
          800: '#3D0066',
          900: '#1F0033',
        },
        'neutral': {
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
        },
      },
      fontFamily: {
        sans: ['var(--font-poppins)', 'sans-serif'],
        display: ['var(--font-display)'],
      },
    },
  },
  plugins: [],
} satisfies Config;

export default config; 