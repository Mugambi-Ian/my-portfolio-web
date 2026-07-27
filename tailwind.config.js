/* eslint-disable import/no-extraneous-dependencies */
const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0B0D10',
          raised: '#12151A',
          overlay: '#1A1E24',
        },
        line: {
          DEFAULT: 'rgba(148, 163, 184, 0.14)',
          strong: 'rgba(148, 163, 184, 0.30)',
        },
        fg: {
          DEFAULT: '#E8EAED',
          muted: '#A3ACB8',
          // Lightened from #737D89 so 10-13px faint text clears WCAG AA (4.5:1)
          // on the darkest-contrast surface it lands on, ink-overlay (4.71:1).
          faint: '#7F8995',
        },
        amber: {
          DEFAULT: '#FCA311',
          soft: 'rgba(252, 163, 17, 0.12)',
        },
        term: {
          green: '#4ADE80',
        },
        paper: {
          DEFAULT: '#FAFAF7',
          ink: '#16181D',
          muted: '#4B5563',
          accent: '#92400E',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', ...defaultTheme.fontFamily.sans],
        mono: ['var(--font-mono)', ...defaultTheme.fontFamily.mono],
      },
      maxWidth: {
        wrap: '72rem',
      },
      transitionTimingFunction: {
        crisp: 'cubic-bezier(0.2, 0.8, 0.2, 1)',
      },
      backgroundImage: {
        'grid-hairline':
          'repeating-linear-gradient(to right, rgba(148,163,184,0.07) 0 1px, transparent 1px 64px), repeating-linear-gradient(to bottom, rgba(148,163,184,0.07) 0 1px, transparent 1px 64px)',
      },
      keyframes: {
        caret: {
          '0%, 45%': { opacity: '1' },
          '50%, 100%': { opacity: '0' },
        },
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(12px)' },
          to: { opacity: '1', transform: 'none' },
        },
      },
      animation: {
        caret: 'caret 1.1s step-end infinite',
        'fade-up': 'fade-up 0.5s ease-out both',
      },
    },
  },
  plugins: [],
};
