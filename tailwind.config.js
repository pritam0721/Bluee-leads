/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Plus Jakarta Sans', 'sans-serif'],
        secondary: ['Inter', 'sans-serif'],
      },
      colors: {
        'blue-primary': '#0057ff',
        'blue-dark': '#003cbf',
        'blue-deeper': '#001f7a',
        'blue-light': '#e8f0ff',
        'accent-cyan': '#00d4ff',
        'accent-gold': '#f5a623',
        'dark-bg': '#050d1f',
        'dark-card': '#0a1628',
        'off-white': '#f8faff',
      },
      spacing: {
        'section-py': '6rem',
        'container-max': '1280px',
      },
      borderRadius: {
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '32px',
        full: '9999px',
      },
      boxShadow: {
        sm: '0 2px 8px rgba(0, 87, 255, 0.08)',
        md: '0 8px 32px rgba(0, 87, 255, 0.15)',
        lg: '0 20px 60px rgba(0, 87, 255, 0.2)',
        card: '0 4px 24px rgba(0, 0, 0, 0.12)',
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
      },
    },
  },
  plugins: [],
};
