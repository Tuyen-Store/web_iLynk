import tsParser from "@typescript-eslint/parser";
import tsPlugin from "@typescript-eslint/eslint-plugin";

/**
 * ESLint v9 flat config.
 * - Cảnh báo biến/import không dùng tới (TS/TSX + JS/JSX).
 * - Cho phép prefix "_" để intentionally-unused.
 */
const unusedVarsOptions = {
  argsIgnorePattern: "^_",
  varsIgnorePattern: "^_",
  caughtErrorsIgnorePattern: "^_",
  ignoreRestSiblings: true,
};

export default [
  { ignores: ["node_modules/**", ".next/**", "out/**"] },

  // TS/TSX
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: { jsx: true },
      },
    },
    plugins: {
      "@typescript-eslint": tsPlugin,
    },
    rules: {
      "@typescript-eslint/no-unused-vars": ["warn", unusedVarsOptions],
    },
  },

  // JS/JSX (config files, scripts...)
  {
    files: ["**/*.{js,jsx,mjs,cjs}"],
    rules: {
      "no-unused-vars": ["warn", unusedVarsOptions],
    },
  },
];


