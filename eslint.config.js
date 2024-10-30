// eslint.config.js
import vue from 'eslint-plugin-vue';
import prettier from 'eslint-plugin-prettier';

export default [
  {
    files: ['**/*.js', '**/*.vue'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
    },
    plugins: {
      vue,
      prettier,
    },
    rules: {
      ...vue.configs.essential.rules, // Use Vue's essential rules
      'prettier/prettier': 'error', // Prettier formatting issues show as errors
      'vue/no-unused-vars': 'warn', // Warn about unused vars in templates
    },
  },
];
