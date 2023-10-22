module.exports = {
  extends: [
    'airbnb-base', 
    'airbnb-typescript/base',
    'prettier/prettier',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    project: './tsconfig.json',
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  root: true,
  rules: {
    quotes: ['error', 'single'],
  }

  
};
