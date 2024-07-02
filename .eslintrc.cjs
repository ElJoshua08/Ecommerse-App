module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh', 'import'],
  rules: {
    'react/jsx-no-target-blank': 'off',
    'react/prop-types': 'off',

    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],

    'import/order': [
      'error',
      {
        groups: [
          ['builtin', 'external'],
          ['parent', 'sibling', 'index'],
          'internal',
        ],
        'newlines-between': 'always',
        alphabetize: { order: 'asc', caseInsensitive: true },
      },
    ],

    'import/resolver': {
      alias: {
        map: [
          ['@', './src'], // Adjust the path as per your project structure
        ],
        extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'], // Include the file extensions you use
      },
    },
  },
};
