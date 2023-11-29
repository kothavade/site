import antfu from '@antfu/eslint-config'
import { FlatCompat } from '@eslint/eslintrc'
import js from '@eslint/js'

process.env.ESLINT_TSCONFIG = 'tsconfig.json'

const compat = new FlatCompat({
  recommendedConfig: js.configs.recommended, // optional
})
export default antfu(
  {
    ignores: [],
    stylistic: {
      quotes: 'double',
    },
  },
  // Legacy config
  ...compat.config({
    extends: [
      'eslint:recommended',
      'plugin:astro/recommended',
      // Other extends...
    ],
    overrides: [
      {
        files: ['*.astro'],
        parser: 'astro-eslint-parser',
        parserOptions: {
          parser: '@typescript-eslint/parser',
          extraFileExtensions: ['.astro'],
        },
      },
    ],
  }),

)
