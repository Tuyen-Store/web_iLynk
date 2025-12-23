import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tailwindcss from 'eslint-plugin-tailwindcss';

/**
 * ESLint v9 flat config.
 * - Cảnh báo biến/import không dùng
 * - Cho phép prefix "_" cho intentionally-unused
 * - Tự động sắp xếp class Tailwind
 */
const unusedVarsOptions = {
  argsIgnorePattern: '^_',
  varsIgnorePattern: '^_',
  caughtErrorsIgnorePattern: '^_',
  ignoreRestSiblings: true,
};

export default [
  {
    ignores: ['node_modules/**', '.next/**', 'out/**'],
  },

  // TS / TSX
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      tailwindcss,
    },
    rules: {
      '@typescript-eslint/no-unused-vars': ['warn', unusedVarsOptions],

      // 🔥 Tailwind class sorting
      'tailwindcss/classnames-order': 'warn',
      'tailwindcss/no-custom-classname': 'off', // cho phép class custom
    },
  },

  // JS / JSX
  {
    files: ['**/*.{js,jsx,mjs,cjs}'],
    plugins: {
      tailwindcss,
    },
    rules: {
      'no-unused-vars': ['warn', unusedVarsOptions],

      // 🔥 Tailwind class sorting
      'tailwindcss/classnames-order': 'warn',
      'tailwindcss/no-custom-classname': 'off',
    },
  },
];
