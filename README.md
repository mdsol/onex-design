

# Storybook

### Product infrastructure

https://mdsol.github.io/onex-design/

* Source code: [Medidata/onex-design](https://github.com/GreenJimmy/onex-design)
* UX and Visual Design components: [Figma UI/UX mockups components](https://www.figma.com/files/870024785163030272/project/38419065/Medidata-Assets?fuid=1024243918964754665)
* UX and Visual Design concepts: [Figma UI/UX mockups](https://www.figma.com/files/870024785163030272/project/35533837/1x-Design-Concepts?fuid=1024243918964754665)

## Quick Start

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
    
