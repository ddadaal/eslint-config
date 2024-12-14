# @ddadaal/eslint-config

My eslint config. 

Since `v2.0`, only eslint v9 is supported. Please stick to `v1` if you cannot upgrade to eslint v9 yet.

# Installation

## Normal TypeScript Project

```bash
npm install -D @ddadaal/eslint-config eslint
```

Then create `eslint.config.js` with the following content:

```js
const base = require("@ddadaal/eslint-config");

module.exports = [
    ...base,
]
```

## React

```js
const base = require("@ddadaal/eslint-config");
// Add
const react = require("@ddadaal/eslint-config/react");

module.exports = [
    ...base,
    // Add
    ...react
]
```

# License

MIT