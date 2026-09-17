/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0B0F1A',
          soft: '#121826',
          softer: '#1A2233',
          line: '#232C40',
        },
        paper: '#E9E6DE',
        muted: '#8890A6',
        signal: {
          DEFAULT: '#E8A33D',
          dim: '#C98A2E',
        },
        ion: {
          DEFAULT: '#7C6FF0',
          dim: '#5B4FCF',
        },
      },
      fontFamily: {
        display: ['"Fraunces"', 'serif'],
        body: ['"IBM Plex Sans"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      maxWidth: {
        prose: '72ch',
      },
      keyframes: {
        cursor: {
          '0%, 49%': { opacity: 1 },
          '50%, 100%': { opacity: 0 },
        },
      },
      animation: {
        cursor: 'cursor 1s steps(1) infinite',
      },
    },
  },
  plugins: [],
}
