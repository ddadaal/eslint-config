module.exports = {
  "extends": [
    "plugin:react/recommended",
    "./index.js",
    "plugin:react/jsx-runtime"
  ],
  "plugins": [
    "react"
  ],
  "rules": {
    "react/display-name": "off",
    "react/prop-types": "off",
    "react/jsx-closing-bracket-location": [
      "error",
      "tag-aligned"
    ]
  }
}
