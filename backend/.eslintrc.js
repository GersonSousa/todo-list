module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: ['airbnb-base', 'plugin:prettier/recommended'],
  plugins: ['prettier'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'no-console': 'error',
    semi: ['error', 'always'],
    'no-unused-vars': 'error',
    indent: ['error', 2],
    quotes: ['error', 'single'],
    'no-multiple-empty-lines': ['error', { max: 1 }],
    'no-trailing-spaces': 'error',
    'max-len': ['error', { code: 80 }],
    'comma-dangle': ['error', 'always-multiline'],
    'no-var': 'error',
  },
};
