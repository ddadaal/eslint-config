# @ddadaal/eslint-config

My eslint config.

# Installation

## Normal TypeScript Project

```bash
npm install -D @ddadaal/eslint-config eslint @typescript-eslint/eslint-plugin
```

Then create `.eslintrc` with the following content:

```json
{
    "extends": "@ddadaal"
}
```

## React

```bash
npm install -D @ddadaal/eslint-config eslint @typescript-eslint/eslint-plugin eslint-plugin-react
```

```json
{
    "extends": "@ddadaal/eslint-config/react"
}
```

# License

MIT