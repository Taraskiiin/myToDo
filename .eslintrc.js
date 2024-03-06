module.exports = {
  extends: [
    '@wemake-services/javascript',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['react'],
  rules: {
    'prettier/prettier': [
      'warn',
      {
        endOfLine: 'auto',
      },
    ],
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'unicorn/no-array-reduce': 'off',
  },
}
