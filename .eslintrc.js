module.exports = {
  env: {
    browser: true,
    es2021: true,
    // https://www.thinbug.com/q/31629389
    jest: true
  },
  extends: [
    'standard'
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  rules: {
    'no-unused-vars': 1
  }
}
