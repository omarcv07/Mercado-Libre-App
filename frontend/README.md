# Mercado libre front-end application

## Getting Started

1. If you already installed the node_module, go to the next step otherwise please make a npm install.
2. Run the project `npm start` and it will be served in `http://localhost:3000/`

### Requirements

To be able to run the project make sure you have installed the following versions. Higher versions might work as well.

-   Nodejs v14.18.1
-   NPM v8.19.2

### Tools and Dependencies

-   [Create React App](https://github.com/facebook/create-react-app): Bundler
-   [SASS](https://www.npmjs.com/package/node-sass): CSS Pre-processor
-   [Material UI V5](https://mui.com/): Component library

## Design

The architecture chose for this application was a React Hooks pattern and a React Conditional rendering pattern in some cases

### Components

Each react component could be built with it's own SCSS stylesheet and with a test fileS, using [SCSS Modules](https://www.npmjs.com/package/node-sass) as styling strategy or using internal Material UI styling features in some of their components. Each component should be built keeping in mind the SOLID principles

## Enviroment

-   This enviroment is using under prettier and eslint rule code styles
