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
    },
  },
  plugins: [],
};
