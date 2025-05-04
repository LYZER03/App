module.exports = {
  // Run ESLint on JS, JSX, TS, and TSX files
  '**/*.{js,jsx,ts,tsx}': ['eslint --fix'],
  // Run Prettier on all supported files
  '**/*.{js,jsx,ts,tsx,json,css,scss,md}': ['prettier --write'],
};
