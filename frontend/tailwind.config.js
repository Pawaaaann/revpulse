/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Syne', 'system-ui', 'sans-serif'],
        sans: ['DM Sans', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      colors: {
        brand: {
          50:  '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7',
          600: '#9333ea',
          700: '#7e22ce',
          800: '#6b21a8',
          900: '#581c87',
          950: '#3b0764',
        },
        pulse: {
          50:  '#fdf4ff',
          100: '#fae8ff',
          200: '#f5d0fe',
          300: '#f0abfc',
          400: '#e879f9',
          500: '#d946ef',
          600: '#c026d3',
          700: '#a21caf',
          800: '#86198f',
          900: '#701a75',
          950: '#4a044e',
        },
        accent: {
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
        }
      },
      boxShadow: {
        'glow-brand': '0 0 24px -4px rgba(168, 85, 247, 0.45)',
        'glow-pulse': '0 0 24px -4px rgba(217, 70, 239, 0.45)',
        'glow-sm':    '0 0 12px -2px rgba(168, 85, 247, 0.30)',
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, #7e22ce 0%, #a855f7 50%, #d946ef 100%)',
        'gradient-dark':  'linear-gradient(180deg, #0f0a1e 0%, #150d27 100%)',
      },
    },
  },
  plugins: [],
}
