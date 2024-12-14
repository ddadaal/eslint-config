const react = require("eslint-plugin-react");

module.exports = [
    react.configs.flat.recommended, // This is not a plugin object, but a shareable config object
    react.configs.flat['jsx-runtime'], // Add this if you are using React 17+
];