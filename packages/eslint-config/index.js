module.exports = {
  extends: ['next/core-web-vitals', 'prettier'],
  plugins: ['simple-import-sort'],
  rules: {
    'no-unused-vars': 'off',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    '@next/next/no-html-link-for-pages': 'off',
  },
  overrides: [
    {
      files: ['**/*.jsx', '**/*.js', '**/*.tsx', '**/*.ts'],
      rules: {
        'simple-import-sort/imports': [
          'error',
          {
            groups: [
              ['^\\u0000'],
              ['^'],
              ['^@?\\w'],
              ['^@todo'],
              ['^@/'],
              ['^\\.'],
            ],
          },
        ],
      },
    },
  ],
};
