module.exports = {
  extends: [
    '@rafterjs/eslint-config/typescript',
    'eslint:recommended',
    'plugin:react/recommended',
  ],
  env: {
    browser: true,
  },
  rules: {
    'import/extensions': 0,
  },
  settings: {
    react: { version: 'detect' },
  },
  plugins: ['react'],
};
