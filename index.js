const simpleImportSort = require("eslint-plugin-simple-import-sort");
const js = require("@eslint/js");
const tseslint = require("typescript-eslint");
const stylistic = require("@stylistic/eslint-plugin");
const globals = require("globals");

module.exports = [
    js.configs.recommended,
    ...tseslint.configs.strictTypeChecked,
    ...tseslint.configs.stylisticTypeChecked,
    {
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
            },
        }
    },
    {
        languageOptions: {
            parser: tseslint.parser,
            parserOptions: {
                projectService: true,
                tsconfigRootDir: process.cwd(),
            },
        },
    },
    {
        files: ['**/*.js'],
        ...tseslint.configs.disableTypeChecked,
        rules: {
            ...tseslint.configs.disableTypeChecked.rules,
            "@typescript-eslint/no-require-imports": "off",
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
            ...stylistic.configs["recommended-flat"].rules,

            "no-empty-function": "off",
            "@typescript-eslint/no-empty-function": "off",

            "@stylistic/semi": ["error", "always"],
            "@stylistic/quotes": ["error", "double"],
            "@stylistic/arrow-parens": ["error", "always"],
            "@stylistic/member-delimiter-style": "error",
        },
    }
];