/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './resources/**/*.blade.php',
    './resources/**/*.js',
    './resources/**/*.jsx',
    './resources/**/*.ts',
    './resources/**/*.tsx',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'), 
  ],
};
