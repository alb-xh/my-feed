module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    quotes: [2, 'single', 'avoid-escape'],
    'jsx-quotes': ['error', 'prefer-single'],
    'import/prefer-default-export': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': 'off',
    'consistent-return': 'off',
    'react/prop-types': 'off', // Enable this in future
    'import/export': 'off', // Investigate this in future
    'no-alert': 'off',
  },
};
