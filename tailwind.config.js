/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        parchment: {
          50: '#faf6ec',
          100: '#f3ead6',
          200: '#e6d5ae',
          300: '#d5b87e',
          400: '#c29a55',
          500: '#a97e3d',
          600: '#8a6430',
          700: '#6b4c26',
          800: '#4f381e',
          900: '#3a2917',
          950: '#24180d'
        },
        ink: {
          50: '#f4f5f7',
          100: '#dfe2e8',
          200: '#c0c5d1',
          300: '#9aa2b5',
          400: '#6f7891',
          500: '#525b75',
          600: '#40485e',
          700: '#333a4b',
          800: '#272c39',
          900: '#1b1f28',
          950: '#101218'
        },
        dig: {
          50: '#f0fbf7',
          100: '#d9f4ea',
          200: '#b6e8d6',
          300: '#86d5bd',
          400: '#52bda0',
          500: '#31a488',
          600: '#25846e',
          700: '#216858',
          800: '#1e5347',
          900: '#1a443b',
          950: '#0a2a22'
        },
        artifact: {
          50: '#fff8ed',
          100: '#ffefd4',
          200: '#ffdba8',
          300: '#ffc071',
          400: '#ff9a3d',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
          950: '#431407'
        }
      },
      fontFamily: {
        display: ['"IBM Plex Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
        body: ['Inter', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'sans-serif']
      },
      backgroundImage: {
        'dig-grid':
          'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
        'artifact-scan':
          'repeating-linear-gradient(0deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 4px)'
      },
      boxShadow: {
        artifact: '0 18px 40px -18px rgba(0,0,0,0.55)',
        'artifact-inset': 'inset 0 0 0 1px rgba(255,255,255,0.08)'
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.72' }
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' }
        }
      },
      animation: {
        'fade-up': 'fade-up 0.35s ease-out both',
        'pulse-soft': 'pulse-soft 2.4s ease-in-out infinite',
        scan: 'scan 3s linear infinite'
      },
      maxWidth: {
        artifact: '28rem'
      }
    }
  },
  plugins: []
};