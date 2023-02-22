# storybook-addon-github-button

A storybook addon that allows you to link github repo to toolbar

## Installation

Run the following command to install the most recent version of chess-engine-ts from NPM:

```sh
npm i storybook-addon-github-button
```

or using yarn

```sh
yarn add storybook-addon-github-button
```

## Getting started

within `.storybook/main.js`:

```ts
//.storybook/main.js

module.exports = {
  addons: ["storybook-addon-github-button"],
};
```

Then you should have a github button in your toolbar

## Setting up link

within `.storybook/preview.js`:

```ts
//.storybook/preview.js

export const globalTypes = {
  githubURL: {
    name: "githubURL",
    description: "Global url",
    defaultValue: "your-github-repo",
  },
};
```
