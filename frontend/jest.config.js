module.exports = {
    transform: {
        '^.+\\.jsx?$': 'babel-jest'
    },
    moduleNameMapper: {
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
            '<rootDir>/__mocks__/fileMock.js',
        '\\.(css|scss)$': 'identity-obj-proxy',
        axios: 'axios/dist/node/axios.cjs'
    },
    transformIgnorePatterns: ['^.+\\.module\\.{css,sass,scss}$', 'node_modules/(?!variables/.*)'],
    testEnvironment: 'jest-environment-jsdom'
};
