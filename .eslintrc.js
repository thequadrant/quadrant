module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: "airbnb",
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    'object-curly-newline': 'off',
    "quotes": [2, "double", { "avoidEscape": true }],
    "react/prop-types": "off",
    "react/jsx-no-constructed-context-values": "off",
    "react/jsx-one-expression-per-line": "off"
  },
};
