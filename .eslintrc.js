module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: [
    'plugin:react/recommended',
    'standard',
    'prettier',
    'prettier/react',
    'eslint:recommended',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: [
    'react',
    'prettier'
  ],
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': ['warn', {extensions: ['.jsx', '.js']}],
    'import/prefer-default-export': 'off',
    'quotes': ['error', 'single'],
    'object-curly-spacing': [2, 'always'],
    'semi': [2, 'never'],
  }
}
