import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default [
    {
        ignores: ['dist/**', 'coverage/**', 'node_modules/**', '**/*.js'],
    },
    js.configs.recommended,
    ...tseslint.configs.recommended,
    {
        files: ['**/*.ts'],
        languageOptions: {
            ecmaVersion: 2020,
            globals: {
                ...globals.node,
                ...globals.jest,
            }
        },
        rules: {
            '@typescript-eslint/no-unused-vars': ['error', {
                argsIgnorePattern: '^_',
                varsIgnorePattern: '^_',
            }],
            '@typescript-eslint/no-explicit-any': 'off',
            '@typescript-eslint/explicit-function-return-type': 'off',
        },
    },
];
