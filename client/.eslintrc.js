module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb', 'prettier'],
  plugins: ['prettier', 'react', 'react-hooks'],
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
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'react/jsx-filename-extension': 'off',
    'prettier/prettier': 'error',
    'import/no-extraneous-dependencies': 'off',
    'react/prop-types': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'react/jsx-props-no-spreading': 'off',
    'global-require': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    camelcase: 'off',
    'import/no-unresolved': 'off',
    'no-nested-ternary': 'off',
    'no-shadow': 'off',
    'react-hooks/exhaustive-deps': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'default-param-last': 'off',
    'react/jsx-no-bind': 'off',
  },
};
