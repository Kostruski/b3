// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  root: true,
  ignorePatterns: ['**/src/__generated__/**'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:import/electron',
    'plugin:import/typescript',
    'airbnb',
    'airbnb-typescript',
    'prettier',
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
    {
      files: ['__tests__/**'],
      env: {
        jest: true, // now **/*.test.js files' env has both es6 *and* jest
      },
      plugins: ['jest'],
      rules: {
        'jest/no-disabled-tests': 'warn',
        'jest/no-focused-tests': 'error',
        'jest/no-identical-title': 'error',
        'jest/prefer-to-have-length': 'warn',
        'jest/valid-expect': 'error',
      },
    },
    {
      files: ['src/index.ts'],
      rules: {
        'global-require': 0,
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['tsconfig.json'],
  },
  plugins: ['react', 'prettier'],
  parser: '@typescript-eslint/parser',
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
  },
  rules: {
    'prettier/prettier': ['error'],
    'react/function-component-definition': [
      2,
      { namedComponents: 'arrow-function' },
    ],
    'import/extensions': [2, 'never'],
    'import/no-extraneous-dependencies': [
      // Test dependencies must not be part of the project's dependencies but may be a devDependency instead
      'error',
      {
        packageDir: path.join(__dirname),
      },
    ],
    'no-void': ['error', { allowAsStatement: true }],
  },
};
