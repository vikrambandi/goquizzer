const path = require('path');

module.exports = {
    env: {
        node: true,
        browser: true,
        es6: true
    },
    extends: ['eslint:recommended', 'airbnb', 'plugin:prettier/recommended', 'prettier/react', 'react-app'],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly'
    },
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 2020,
        sourceType: 'module'
    },
    settings: {
        react: {
            version: 'detect' // Automatically detect the react version
        },
        'import/resolver': {
            alias: [
                ['Components', path.resolve(__dirname, 'src/components')],
                ['Pages', path.resolve(__dirname, 'src/pages')],
                ['Api', path.resolve(__dirname, 'src/api')],
                ['Actions', path.resolve(__dirname, 'src/ducks/actions')],
                ['Reducers', path.resolve(__dirname, 'src/ducks/reducers')],
                ['Fb', path.resolve(__dirname, 'src/fb')]
            ]
        }
    },
    plugins: ['prettier', 'react'],
    rules: {
        'prettier/prettier': [
            'error',
            {},
            {
                usePrettierrc: true
            }
        ],
        quotes: ['error', 'single'],
        indent: [
            'error',
            4,
            {
                SwitchCase: 1
            }
        ],
        'react/jsx-filename-extension': [
            1,
            {
                extensions: ['.js', '.jsx']
            }
        ]
    }
};
