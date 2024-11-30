export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-bg': '#1d1d1d',
        'tile-bg': '#4c5f7a',
        'win-bg': '#ffc987',
        'highlight-color': '#ec9050',
        'text-light': '#f9f6f2',
        '2-bg': '#eee4da',
        '4-bg': '#ede0c8',
        '8-bg': '#f2b179',
        '16-bg': '#f59563',
        '32-bg': '#f67c5f',
        '64-bg': '#f65e3b',
        '128-bg': '#edcf72',
        '256-bg': '#edcc61',
        '512-bg': '#edc850',
        '1024-bg': '#edc53f',
        '2048-bg': '#edc22e',
      },
      borderRadius: {
        tile: '4px',
        button: '15px',
      },
      fontSize: {
        '2xl': '30px',
        '3xl': '50px',
      },
      boxShadow: {
        'win-glow': '0 0 10px rgb(255, 201, 135)',
      },
    },
  },
  plugins: [],
};
