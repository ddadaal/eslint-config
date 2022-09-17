module.exports = {
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "extends": [
    "plugin:@typescript-eslint/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
  ],
  "plugins": [
    "@typescript-eslint",
    "simple-import-sort",
    "import"
  ],
  "settings": {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"]
    },
  },
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
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "import/no-unresolved": "off",
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
    ],

    "space-infix-ops": "off",
    "@typescript-eslint/space-infix-ops": "error",

    "keyword-spacing": "error",
    "space-in-parens": [
      "error",
      "never"
    ],

    "space-before-function-paren": "off",
    "@typescript-eslint/space-before-function-paren": [
      "error",
      {
        "anonymous": "never",
        "named": "never",
        "asyncArrow": "always"
      }
    ],

    "comma-spacing": "off",
    "@typescript-eslint/comma-spacing": ["error"],

    "semi-spacing": [
      "error",
      {
        "before": false,
        "after": true
      }
    ],
    "space-unary-ops": [
      "error",
      {
        "words": true,
        "nonwords": false
      }
    ],
    "spaced-comment": [
      "error",
      "always"
    ],
    "block-spacing": "error",
    "no-multi-spaces": "error",
    "space-before-blocks": "off",
    "@typescript-eslint/space-before-blocks": [
      "error",
      "always"
    ],

    "no-empty-function": "off",
    "@typescript-eslint/no-empty-function": "off",

    "no-whitespace-before-property": "error",
    "arrow-body-style": ["error", "as-needed"],
    "arrow-spacing": "error"
  }
}
