import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import prettierConfig from 'eslint-config-prettier/flat';
import prettier from 'eslint-plugin-prettier';

export default [
  js.configs.recommended,

  ...tseslint.configs.recommended,

  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
      }
    }
  },

  {
    files: ['**/*.{jsx,tsx}'],
    plugins: {
      react,
      'react-hooks': reactHooks,
      prettier
    },
    settings: {
      react: { version: 'detect' }
    },
    rules: {
      // ----- Strict React rules -----
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'react/no-array-index-key': 'error',
      'react/display-name': 'off',
      'react/no-unescaped-entities': ['error', { forbid: ['>', '}'] }],
      'react/function-component-definition': 'off',
      // ----- TS Rules -----
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/lines-between-class-members': 'off',
      '@typescript-eslint/no-throw-literal': 'off',
      // ----- Prettier -----
      'prettier/prettier': 'error',
      // ----- Length + format -----
      'max-len': ['error', { code: 120, tabWidth: 2, ignoreUrls: true }],
    }
  },

  prettierConfig
];
