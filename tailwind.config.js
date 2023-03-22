/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
    boxShadow: {
      elevate: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
      card: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
    },
    extend: {
      boxShadow: {
        'dark-ring':
          '0px 4px 4px 2px rgba(40, 208, 126, 0.05), 0px 4px 3px 1px rgba(3, 52, 28, 0.89), 2px 4px 2px 2px rgba(40, 208, 126, 0.2)',
      },
      colors: {
        solid: '#5053BC',
        accent: '#EFEFFA',
        primary: '#464FA3',
        secondary: '#C7CAE9',
        'solid-dark': '#17824E',
        'accent-dark': '#061F13',
        'primary-dark': '#28D07E',
        'secondary-dark': '#092E1C',
        gray: {
          100: '#f7fafc',
          200: '#edf2f7',
          300: '#e2e8f0',
          400: '#cbd5e0',
          500: '#a0aec0',
          600: '#718096',
          700: '#4a5568',
          800: '#2d3748',
          900: '#1a202c',
        },
        blue: {
          100: '#ebf8ff',
          200: '#bee3f8',
          300: '#90cdf4',
          400: '#63b3ed',
          500: '#4299e1',
          600: '#3182ce',
          700: '#2b6cb0',
          800: '#2c5282',
          900: '#2a4365',
        },
      },
    },
  },
  darkMode: 'class',
  plugins: [],
};
