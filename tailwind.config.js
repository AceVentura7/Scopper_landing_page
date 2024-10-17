/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        background: 'var(--color-background)',
        accent: 'var(--color-accent)',
        text: 'var(--color-text)',
        'gray-dark': 'var(--color-gray-dark)',
        'gray-light': 'var(--color-gray-light)',
        'hover-primary': 'var(--color-hover-primary)',
      },
      fontFamily: {
        sans: ['var(--font-family)'],
      },
      fontSize: {
        'base': 'var(--font-size-base)',
        'small': 'var(--font-size-small)',
        'h1': 'var(--font-size-h1)',
        'h2': 'var(--font-size-h2)',
        'h3': 'var(--font-size-h3)',
        'h4': 'var(--font-size-h4)',
        'h5': 'var(--font-size-h5)',
        'h6': 'var(--font-size-h6)',
      },
      spacing: {
        'base': 'var(--spacing-base)',
      },
    },
  },
  plugins: [],
};