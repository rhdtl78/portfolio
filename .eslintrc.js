module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['plugin:@typescript-eslint/recommended', 'prettier/@typescript-eslint', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    "no-use-before-define": "off",
    "@typescript-eslint/no-unused-vars": ["warning", { "vars": "all", "args": "after-used", "ignoreRestSiblings": false }],
    "@typescript-eslint/explicit-function-return-type": "off"
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
