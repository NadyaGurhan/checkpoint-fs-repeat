module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es2021: true,
        node: true,
        jest: true,
    },
    extends: ["airbnb-base"],
    parserOptions: {
        ecmaVersion: 12,
    },
    plugins: ["jest"],
    rules: {
        "linebreak-style": ["error", "windows"],
        quotes: ["error", "double"],
        indent: ["error", 4],
        "prefer-destructuring": 0,
    },
};
