module.exports = {
  ignorePatterns: ['.eslintrc.*'],
  env: {
    browser: true,
    es2021: true,
    node: true,
    mocha: true,
  },
  extends: ['airbnb-base'],
  plugins: ['simple-import-sort', 'chai-friendly'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'linebreak-style': ['error', 'unix'],
    'eol-last': ['error', 'always'],
    'no-unused-expressions': 'off',
    'chai-friendly/no-unused-expressions': 'error',
    'object-curly-newline': ['error', {
      ObjectExpression: { consistent: true },
      ObjectPattern: { consistent: true },
      ImportDeclaration: { minProperties: 2, multiline: true, consistent: true },
      ExportDeclaration: { minProperties: 2, multiline: true, consistent: true }
    }],
    'array-element-newline': ['error', { multiline: true, minItems: 2 }],
    'object-property-newline': ['error', { allowAllPropertiesOnSameLine: false }]
  },
};
