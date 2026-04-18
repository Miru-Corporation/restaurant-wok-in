import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary:  '#1A0A00',
        accent:   '#8B1A1A',
        gold:     '#C9A84C',
        warm:     '#F5E6D3',
        textDark: '#2D1B0E',
      },
      fontFamily: {
        display: ['var(--font-playfair)', 'Georgia', 'serif'],
        body:    ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'hero-overlay':
          'linear-gradient(to bottom, rgba(26,10,0,0.5) 0%, rgba(26,10,0,0.72) 60%, rgba(26,10,0,0.92) 100%)',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':      { transform: 'translateY(8px)' },
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease forwards',
        'bounce-slow': 'bounce 1.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

export default config
