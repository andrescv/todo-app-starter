module.exports = {
  extends: [
    'next/core-web-vitals',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: ['simple-import-sort'],
  parserOptions: {
    warnOnUnsupportedTypeScriptVersion: false,
  },
  rules: {
    'no-unused-vars': 'off',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    '@next/next/no-html-link-for-pages': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/no-explicit-any': 'off',
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
