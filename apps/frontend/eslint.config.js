export default [
  {
    ignores: ['vite.config.js']
  },
  {
    rules: {
      "no-unused-vars": ["error", { argsIgnorePattern: "^_" }]

    }
  }
];
