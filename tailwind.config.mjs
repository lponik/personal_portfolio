/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        accent: 'var(--accent)',
        muted: '#9ea9c8',
      },
      backgroundImage: {
        headerGradient:
          'linear-gradient(120deg, rgba(3, 7, 14, 0.95), rgba(7, 16, 31, 0.92), rgba(2, 4, 9, 0.96))',
        cardGradient:
          'linear-gradient(160deg, rgba(8, 12, 22, 0.96), rgba(10, 18, 34, 0.96), rgba(4, 8, 16, 0.98))',
        skillGradient:
          'linear-gradient(155deg, rgba(9, 15, 29, 0.93), rgba(13, 24, 48, 0.92), rgba(6, 14, 27, 0.94))',
        LinkBtnGradient:
          'linear-gradient(95deg, var(--accent), var(--primary))',
      },
      boxShadow: {
        soft: '0 16px 40px rgba(0, 0, 0, 0.35)',
        neon: '0 0 26px color-mix(in srgb, var(--primary) 36%, transparent)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
