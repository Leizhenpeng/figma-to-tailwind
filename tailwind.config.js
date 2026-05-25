/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './components/**/*.html'],
  theme: {
    extend: {
      colors: {
        'figma-ink': '#000000',
        'canvas-soft': '#f8fafc'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
      spacing: {
        'figma-vector-w': '17.697rem',
        'figma-vector-h': '21.466rem'
      }
    }
  },
  plugins: []
};
