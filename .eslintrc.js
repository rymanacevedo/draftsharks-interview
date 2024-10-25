// .eslintrc.js
module.exports = {
    env: {
      browser: true,
      es2021: true,
    },
    extends: [
      'eslint:recommended',
      'plugin:vue/essential', // Basic Vue linting rules
      'prettier',             // Turns off ESLint rules conflicting with Prettier
      'plugin:prettier/recommended'
    ],
    parserOptions: {
      ecmaVersion: 12,
      sourceType: 'module',
    },
    plugins: ['vue', 'prettier'],
    rules: {
      'prettier/prettier': ['error'], // Integrates Prettier into ESLint
      'vue/no-unused-vars': 'warn',   // Example rule to warn about unused vars in templates
    },
  };
  