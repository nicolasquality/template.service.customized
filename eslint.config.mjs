import globals from 'globals'
import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'
import prettierPluginRecommended from 'eslint-plugin-prettier/recommended'

export default [
  { ignores: ['coverage'] },
  {
    languageOptions: {
      globals: { ...globals.node, ...globals.es2021 },
      parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
    },
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  prettierPluginRecommended,
  {
    rules: {
      'prettier/prettier': ['error', { endOfLine: 'auto' }],
      'no-console': ['error', { allow: ['warn', 'error'] }],
    },
  },
]
