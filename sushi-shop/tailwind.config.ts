import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        // Sushi shop color palette
        primary: {
          DEFAULT: '#E94560', // vibrant red
          50: '#FEE9ED',
          100: '#FDD3DB',
          200: '#F9A7B7',
          300: '#F57B93',
          400: '#F04F6F',
          500: '#E94560', // base
          600: '#D03050',
          700: '#B02040',
          800: '#901030',
          900: '#700020',
          950: '#500010',
        },
        secondary: {
          DEFAULT: '#0F3460', // deep blue
          50: '#E6EEF7',
          100: '#CCDDF0',
          200: '#99BBE0',
          300: '#6699D0',
          400: '#3377C0',
          500: '#0F3460', // base
          600: '#0D2E56',
          700: '#0B284C',
          800: '#092242',
          900: '#071C38',
          950: '#05162E',
        },
        accent: {
          DEFAULT: '#16213E', // dark navy
          50: '#E7E9EF',
          100: '#CFD3DF',
          200: '#9FA7BF',
          300: '#6F7B9F',
          400: '#3F4F7F',
          500: '#16213E', // base
          600: '#141D38',
          700: '#121932',
          800: '#10152C',
          900: '#0E1126',
          950: '#0C0D20',
        },
        background: '#FFFFFF', // white
        text: '#1A1A2E', // near-black
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        foreground: 'hsl(var(--foreground))',
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
      },
      fontFamily: {
        // Typography using specified fonts
        sans: ['var(--font-inter)', ...defaultTheme.fontFamily.sans],
        heading: ['var(--font-poppins)', ...defaultTheme.fontFamily.sans],
        japanese: ['var(--font-noto-sans-jp)', ...defaultTheme.fontFamily.sans],
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};

export default config;
