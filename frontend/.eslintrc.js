module.exports = {
    settings: {
        react: {
            version: 'detect'
        }
    },
    env: {
        browser: true,
        es2021: true,
        jest: true
    },
    extends: ['plugin:react/recommended', 'standard'],
    overrides: [],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    plugins: ['react'],
    rules: {
        semi: ['error', 'always'],
        indent: ['error', 4],
        quotes: ['error', 'single'],
        'max-len': ['error', 100],
        'object-curly-spacing': ['error', 'always']
    }
};
