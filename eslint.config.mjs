import config from '@rocketseat/eslint-config/react.mjs'

export default {
  ...config,
  rules: {
    ...config.rules,
    '@typescript-eslint/no-explicit-any': 'off', 
  }
}
