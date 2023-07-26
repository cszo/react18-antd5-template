module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended'
  ],
  settings: {
    // https://github.com/jsx-eslint/eslint-plugin-react#configuration
    react: {
      version: 'detect'
    }
  },
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint', 'react'],
  rules: {
    'linebreak-style': ['error', 'unix'], // 换行风格unix
    quotes: ['error', 'single'], // 使用单引号符号
    semi: ['error', 'never'], // 禁止尾部使用分号
    // https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html
    'react/react-in-jsx-scope': 'off',
    'react/jsx-curly-brace-presence': ['error', 'never'] // JSX属性不使用大括号
  }
}
