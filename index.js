module.exports = {
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "extends": [
    "plugin:@typescript-eslint/recommended"
  ],
  "plugins": [
    "@typescript-eslint"
  ],
  "rules": {
    "@typescript-eslint/camelcase": "off",
    "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/ban-types": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-inferrable-types": "off",
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        "varsIgnorePattern": "^_",
        "argsIgnorePattern": "^_",
        "ignoreRestSiblings": true
      }
    ],
    "arrow-parens": [
      "error",
      "always"
    ],
    "quotes": [
      "error",
      "double"
    ],
    "comma-dangle": [
      "error",
      "always-multiline"
    ],
    "object-curly-spacing": [
      "error",
      "always",
      {
        "arraysInObjects": false
      }
    ],
    "semi": [
      "error",
      "always"
    ],
    "indent": [
      "error",
      2
    ],
    "max-len": [
      "error",
      {
        "code": 120
      }
    ]
  }
}
