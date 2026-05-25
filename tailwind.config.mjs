/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0d2137',
          2: '#142d4c',
          3: '#1a3a60',
          4: '#1f4880',
        },
        green: {
          brand: '#1fa84b',
          2: '#178a3c',
          3: '#0f6a2e',
          soft: '#e8f8ee',
        },
        ink: {
          DEFAULT: '#0a1628',
          2: '#2a3f5a',
          mute: '#4e647d',
          faint: '#8599b0',
        },
        paper: {
          DEFAULT: '#f3f6fb',
          2: '#e8edf6',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['Outfit', 'system-ui', 'sans-serif'],
        mono: ['"Space Mono"', 'monospace'],
      },
      borderRadius: {
        brand: '10px',
        'brand-lg': '16px',
        'brand-xl': '24px',
      },
      boxShadow: {
        'brand-sm': '0 2px 12px rgba(13,33,55,.09)',
        'brand-md': '0 8px 32px rgba(13,33,55,.13)',
        'brand-lg': '0 24px 64px rgba(13,33,55,.18)',
        'brand-xl': '0 40px 100px rgba(13,33,55,.24)',
        'green': '0 6px 20px rgba(31,168,75,.3)',
      },
      animation: {
        'sweep': 'sweep 4s linear infinite',
        'ring-expand': 'ringExpand 3.5s ease-out infinite',
        'ticker': 'tickerMove 30s linear infinite',
        'chip-float': 'chipFloat 5s ease-in-out infinite',
        'pin-ping': 'pinPing 2.2s ease-out infinite',
        'dot-pulse': 'dotPulse 2s ease infinite',
        'fade-up': 'fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) both',
      },
      keyframes: {
        sweep: { to: { transform: 'rotate(360deg)' } },
        ringExpand: {
          '0%': { width: '100px', height: '100px', opacity: '0.7' },
          '100%': { width: '520px', height: '520px', opacity: '0' },
        },
        tickerMove: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        chipFloat: {
          '0%, 100%': { transform: 'translateY(0) rotate(-0.4deg)' },
          '50%': { transform: 'translateY(-9px) rotate(0.4deg)' },
        },
        pinPing: {
          '0%': { transform: 'scale(0)', opacity: '0.9' },
          '100%': { transform: 'scale(3.2)', opacity: '0' },
        },
        dotPulse: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.35', transform: 'scale(0.65)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(26px)' },
          to: { opacity: '1', transform: 'none' },
        },
      },
    },
  },
  plugins: [],
};
