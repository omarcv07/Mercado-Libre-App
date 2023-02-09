module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es2021: true,
        jest: true
    },
    extends: 'standard',
    overrides: [],
    parserOptions: {
        ecmaVersion: 'latest'
    },
    rules: {
        semi: ['error', 'always'],
        indent: ['error', 4],
        quotes: ['error', 'single'],
        'max-len': ['error', 100],
        'object-curly-spacing': ['error', 'always']
    }
};
