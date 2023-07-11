module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
  },
  plugins: [
    'jest',
  ],
  rules: {
    "linebreak-style": 0,
    "no-plusplus": ["error", { allowForLoopAfterthoughts: true }],
    "operator-assignment": ["error", "never"],
    "prefer-template": "off",
    quotes: "off",
    "no-param-reassign": ["error", { props: false }],
  },
};
