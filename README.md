# Installing the package

First, [Set up artifactory](https://learn.mdsol.com/display/CA/Artifactory+Strategy). Specifically, you need an artifactory account via okta, and your project needs an artifactory service account. You may already have those.

## Add the package

Go to artifactory, and select "Set me up" from the top right corner. Select package type "NPM" and repo "npm-prod-virtual". Artifactory will give you instructions on how to set up your local access.

You can now add the package to your repo:

```sh
npm add @mdsol/onex-design
```

or

```sh
yarn add @mdsol/onex-design
```

## CI

To access artifactory in CI, you will need a service account, which has a username like `project-preprod-robot`, and a token. Add the username and token as secrets to CI. I'm using the names `ARTIFACTORY_USERNAME` and `ARTIFACTORY_PASSWORD` for the variables, respectively. Now add a line in your CI that does the following before trying to install yarn/npm packages:

```sh
curl -u${ARTIFACTORY_USERNAME}:${ARTIFACTORY_PASSWORD} "https://mdsol.jfrog.io/mdsol/api/npm/npm-prod-virtual/auth/mdsol" > ./.npmrc
```

Now you can `yarn` or `npm ci` as usual.

## On medistrano

Medistrano has it's own artifactory credentials, that you can use as part of the install. Add

```
# syntax=docker/dockerfile:experimental
```

to the top of your Dockerfile, and before you try to install packages, you need a line like

```dockerfile
RUN --mount=type=secret,id=artifactory,uid=9999,gid=9999 \
    source /run/secrets/artifactory \
    curl -u${ARTIFACTORY_USERNAME}:${ARTIFACTORY_PASSWORD} "https://mdsol.jfrog.io/mdsol/api/npm/npm-prod-virtual/auth/mdsol" > ./.npmrc
```

which will allow you to install packages normally.

# Product infrastructure

<https://mdsol.github.io/onex-design/>

- Source code: [Medidata/onex-design](https://github.com/GreenJimmy/onex-design)
- UX and Visual Design: [Figma UI/UX mockups components](https://design.medidata.com)

# Contributing Quick Start

    git clone https://github.com/GreenJimmy/onex-design.git
    cd onex-design
    git config user.name "YOUR_NAME"
    git config user.email YOUR_EMAIL
    nvm use - if this command doesn't work -> nvm use --delete-prefix (v16.13.0 version from .nvmrc)
    yarn set version latest
    yarn install

## Available Commands

Start the app:

    $ yarn dev

    http://localhost:8080/

Bundle production build:

    yarn build

Story book

    $yarn build:theme
    $yarn deploy:storybook
    $yarn storybook

    http://localhost:6006/

Before run tests please run dev environment

Update test snapshots

    $yarn test -u

Test

    $yarn test

Test Styled Component

    $yarn test:styled

```

```
