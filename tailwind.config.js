export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-bg': '#1d1d1d',
        'tile-bg': '#4c5f7a',
        'high-light': '#ec9050',
        'win-bg': '#edc22e',
        'light-color': '#f9f6f2',
        orange: {
          50: '#fff7ed',
          100: '#ffedd5',
          500: '#f97316',
        },
      },
      borderRadius: {
        tile: '4px',
        button: '15px',
      },
      fontSize: {
        '2xl': '50px',
        '3xl': '60px',
      },
      boxShadow: {
        'win-glow': '0 0 10px rgb(255, 201, 135)',
      },
    },
  },
  plugins: [],
};
