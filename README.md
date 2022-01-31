# Installing the package

First, create a personal auth token on Github; give access to read:packages:
https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token

Depending on if your project uses Yarn or Npm, follow the below and replace GITHUB_TOKEN with the token you generated:

## NPM

You can edit the .npmrc file in your HOME directory (will work for all future projects) or create/edit the .npmrc file in your projects directory. Copy below and insert your replace ${TOKEN_FOR_GITHUB} with your token that you created above.

```sh
@mdsol:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=GITHUB_TOKEN
```

You can now add the package to your repo:

```sh
npm add @mdsol/onex-design
```

## Yarn

You will need to make sure you are using the latest Yarn:

```sh
yarn set version berry
```

Then add the following to the .yarnrc.yml in your projects root folder:

```sh
npmScopes:
  "mdsol":
    npmAlwaysAuth: true
    npmRegistryServer: "https://npm.pkg.github.com"
    npmAuthToken: "GITHUB_TOKEN"
```

You can now add the package to your repo:

```sh
yarn add @mdsol/onex-design
```

# Product infrastructure

https://mdsol.github.io/onex-design/

- Source code: [Medidata/onex-design](https://github.com/GreenJimmy/onex-design)
- UX and Visual Design: [Figma UI/UX mockups components](https://design.medidata.com)

# Contributing Quick Start

    $ git clone https://github.com/GreenJimmy/onex-design.git
    $ cd onex-design
    $ git config user.name "YOUR_NAME"
    $ git config user.email YOUR_EMAIL
    $ nvm use - if this command doesn't work -> nvm use --delete-prefix (v16.13.0 version from .nvmrc)
    $ yarn set version latest
    $ yarn install

## Available Commands

Start the app:

    $ yarn dev

    http://localhost:8080/

Bundle production build:

    $ yarn build

Story book

    $yarn build:theme
    $yarn deploy:storybook
    $yarn storybook

    http://localhost:6006/

```

```
