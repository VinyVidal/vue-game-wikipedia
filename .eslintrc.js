module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'spaced-comment': 0,
    'camelcase': 0,
    'indent' : 0,
    'space-infix-ops' : 0,
    'no-trailing-spaces': 0,
    'no-useless-return': 0,
    "eol-last": 0,
    'space-before-function-paren': 0,
    'keyword-spacing': 0,
    'semi': 0,
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  }
}
