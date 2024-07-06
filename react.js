const react = require("eslint-plugin-react");
const globals = require('globals');

module.exports = [{
    files: ['**/*.{js,jsx,mjs,cjs,ts,tsx}'],
    plugins: {
        react,
    },

    languageOptions: {
        parserOptions: {
          ecmaFeatures: {
            jsx: true,
          },
        },
        globals: {
          ...globals.browser,
        },
    },

    rules: {
        "react/display-name": "off",
        "react/prop-types": "off",
        "react/jsx-closing-bracket-location": ["error", "tag-aligned"],
        "react/jsx-equals-spacing": "error",

        "react/jsx-tag-spacing": ["error", {
            beforeClosing: "never",
        }],

        "react/jsx-first-prop-new-line": ["error"],

        "react/jsx-max-props-per-line": ["error", {
            maximum: 1,
            when: "multiline",
        }],

        "react/jsx-wrap-multilines": ["error", {
            declaration: "parens-new-line",
            assignment: "parens-new-line",
            return: "parens-new-line",
            arrow: "parens-new-line",
            condition: "parens-new-line",
            logical: "parens-new-line",
            prop: "parens-new-line",
        }],

        "react/jsx-props-no-multi-spaces": "error",
    },
}];