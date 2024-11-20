/**
 * ESLint configuration
 *
 * Generate base configuration:
 *
 *   1. Make the `eslint.config.mjs` file:
 *     pnpm create @eslint/config@latest
 *   2. Install packages:
 *     pnpm add --save-dev eslint globals @eslint/js typescript-eslint eslint-plugin-react
 *   3. Resolve the dependence eslint-plugin-flowtype:
 *     pnpm add --save-dev eslint-plugin-flowtype
 */
import pluginJs from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import pluginReact from "eslint-plugin-react";
import globals from "globals";
import tseslint from "typescript-eslint";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  // https://github.com/prettier/eslint-config-prettier
  eslintPluginPrettierRecommended,
  // https://github.com/prettier/eslint-plugin-prettier
  eslintConfigPrettier,
];
