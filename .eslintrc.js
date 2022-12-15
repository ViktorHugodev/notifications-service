module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir : __dirname, 
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin',"prettier","eslint-plugin-import-helpers"],
  extends: [
    'plugin:@typescript-eslint/recommended',
    "prettier",
    'plugin:prettier/recommended',

  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    "import-helpers/order-imports": [
      "warn",
      {
        "newlinesBetween": "always",
        "groups": ["module", "/^@/", ["parent", "sibling", "index"]],
        "alphabetize": { "order": "asc", "ignoreCase": true }
      }
    ],
    "lines-between-class-members": "off",
    "prettier/prettier": "warn",
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'eslint-disable-next-line': 'off',

    "no-useless-constructor": "off",
    "no-empty-function": "off",
    "@typescript-eslint/no-unused-vars": "warn",
  
  },
};
