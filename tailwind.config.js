/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f0f3f7',
          100: '#dbe2ec',
          200: '#b7c5d9',
          300: '#8ea3c0',
          400: '#5d7aa0',
          500: '#3d5980',
          600: '#2c4566',
          700: '#233754',
          800: '#1c2b42',
          900: '#16212f',
          950: '#0e1620',
        },
        sage: {
          50: '#f1f7f5',
          100: '#dceee8',
          200: '#b9ddd1',
          300: '#8fc6b5',
          400: '#65ab97',
          500: '#48907c',
          600: '#377363',
          700: '#2e5d51',
          800: '#274b42',
          900: '#213e37',
        },
        charcoal: {
          DEFAULT: '#2A2D34',
          light: '#4A4E58',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 4px 24px rgba(22, 33, 47, 0.06)',
        card: '0 8px 30px rgba(22, 33, 47, 0.08)',
        'card-hover': '0 16px 40px rgba(22, 33, 47, 0.14)',
      },
      maxWidth: {
        '8xl': '1440px',
      },
    },
  },
  plugins: [],
};
