const simpleImportSort = require("eslint-plugin-simple-import-sort");
const js = require("@eslint/js");
const tseslint = require("typescript-eslint");
const stylistic = require("@stylistic/eslint-plugin");
const globals = require("globals");

const mapToTsFilesOnly = (configArray) => configArray.map((config) => ({
    ...config,
    files: ["**/*.ts", "**/*.tsx"]
}));

module.exports = [
    js.configs.recommended,
    ...mapToTsFilesOnly(tseslint.configs.recommendedTypeChecked),
    ...mapToTsFilesOnly(tseslint.configs.stylisticTypeChecked),
    {
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
            },
        }
    },
    {
        files: ["**/*.ts", "**/*.tsx"],
        name: "languageOptions",
        languageOptions: {
            parser: tseslint.parser,
            parserOptions: {
                projectService: true,
                tsconfigRootDir: process.cwd(),
            },
        }
    },
    {
        name: "simple-import-sort",
        plugins: {
          "simple-import-sort": simpleImportSort,
        },
        rules: {
          "simple-import-sort/imports": "error",
          "simple-import-sort/exports": "error",
        },
    },


    {
        files: ["**/*.ts", "**/*.tsx"],

        name: "stylistic",

        plugins: {
            "@stylistic": stylistic,
        },

        rules: {
            "@typescript-eslint/camelcase": "off",
            "@typescript-eslint/no-empty-interface": "off",
            "@typescript-eslint/explicit-function-return-type": "off",
            "@typescript-eslint/explicit-module-boundary-types": "off",
            "@typescript-eslint/ban-ts-comment": "off",
            "@typescript-eslint/ban-types": "off",
            "@typescript-eslint/no-explicit-any": "off",

            "@typescript-eslint/no-unused-vars": ["warn", {
                varsIgnorePattern: "^_",
                argsIgnorePattern: "^_",
                ignoreRestSiblings: true,
            }],

            "@stylistic/arrow-parens": ["error", "always"],
            "@stylistic/quotes": ["error", "double"],
            "@stylistic/comma-dangle": ["error", "always-multiline"],

            "@stylistic/object-curly-spacing": ["error", "always", {
                arraysInObjects: false,
            }],

            "@stylistic/semi": ["error", "always"],
            "@stylistic/indent": ["error", 2],

            "@stylistic/max-len": ["error", {
                code: 120,
            }],

            "@stylistic/space-infix-ops": "error",

            "@stylistic/type-annotation-spacing": "error",

            "@stylistic/keyword-spacing": "error",
            "@stylistic/space-in-parens": ["error", "never"],

            "@stylistic/space-before-function-paren": ["error", {
                anonymous: "never",
                named: "never",
                asyncArrow: "always",
            }],

            "@stylistic/semi-spacing": ["error", {
                before: false,
                after: true,
            }],

            "@stylistic/space-unary-ops": ["error", {
                words: true,
                nonwords: false,
            }],

            "@stylistic/spaced-comment": ["error", "always"],
            "@stylistic/block-spacing": "error",
            "@stylistic/no-multi-spaces": "error",
            "@stylistic/space-before-blocks": ["error", "always"],

            "no-empty-function": "off",
            "@typescript-eslint/no-empty-function": "off",

            "@stylistic/no-whitespace-before-property": "error",
            "@stylistic/arrow-spacing": "error",
        },
    }
]