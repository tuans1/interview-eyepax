/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#111827',
          muted: '#4b5563',
          light: '#f6f7fb',
        },
      },
    },
  },
  plugins: [],
}

