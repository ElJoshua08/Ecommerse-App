/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-light': '#ffb4f7',
        primary: '#ffa1f5',
        'primary-dark': '#cc81c4',
        'secondary-light': '#c995fa',
        secondary: '#bc7af9',
        'secondary-dark': '#9662c7',
        'accent-light': '#f9ffaa',
        accent: '#F8FF95',
        'accent-dark': '#c6cc77',
      },
      fontFamily: {
        sans: ['Nunito', 'sans-serif'],
      },
      dropShadow: {
        card: '0px 0px 10px #bc7af9',
      },
      animation: {
        wave: 'wave 2.5s ease-out infinite',
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
      },
      keyframes: {
        wave: {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        },

        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
      },
    },
  },

  plugins: [],
}
