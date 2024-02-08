module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb-base',"some-other-config-you-use",
  "prettier"],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [
        '.eslintrc.{js,cjs}',
      ],
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
    'no-console': 'off',
    "quotes": [
      "error",
      "double"
  ]
  },
};
