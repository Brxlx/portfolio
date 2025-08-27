// @ts-check
import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginNext from '@next/eslint-plugin-next';
import tseslint from 'typescript-eslint';

// Importe os plugins
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import pluginImport from 'eslint-plugin-import';
import prettierPlugin from 'eslint-plugin-prettier'
import prettier from 'eslint-config-prettier/flat'

export default tseslint.config(
  {
    ignores: ['node_modules/**', '.next/**', 'out/**', 'build/**', 'next-env.d.ts'],
  },
  {
    files: ['**/*.{ts,tsx,js,jsx}'],
    extends: [
      pluginJs.configs.recommended,
      tseslint.configs.recommended,
      prettier
    ],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      globals: {
        ...globals.browser,
        ...globals.es2021,
      },
    },
    // Adicione os plugins aqui
    plugins: {
      next: pluginNext,
      'simple-import-sort': simpleImportSort,
      'import': pluginImport,
      prettier: prettierPlugin
    },
    rules: {
      // Você pode adicionar suas regras personalizadas aqui
      'prettier/prettier': 'error',
      "indent": ["error", 2],
      "linebreak-style": ["error", "unix"],
      "quotes": ["error", "single"],
      "semi": ["error", "always"],
      "max-len": [
        2,
        125,
        {
          "ignoreStrings": true,
          "ignoreComments": true
        }
      ],
      // Verifique se o plugin 'import' está sendo usado na regra
      "import/newline-after-import": "error",
      "simple-import-sort/imports": "error"
    },
  },
);
