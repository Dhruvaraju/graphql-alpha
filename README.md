- [graphql-alpha](#graphql-alpha)
- [What is Graphql](#what-is-graphql)
- [Initial Setup](#initial-setup)

## graphql-alpha

Learning Graph QL

## What is Graphql

It is a query language which is used for extracting multiple data sources. Ideally deployed when there is heavy nesting involved. Developed by facebook.

Get many resources in a single request

GraphQL queries access not just the properties of one resource but also smoothly follow references between them. While typical REST APIs require loading from multiple URLs, GraphQL APIs get all the data your app needs in a single request. Apps using GraphQL can be quick even on slow mobile network connections.

> Depending upon the way they are developed.

## Initial Setup

- IDE of choice
- Node.js Installed
- Go to folder of your choice and initiate it as npm project by running 
  ```
  npm init
  ```
- Install the below mentioned packages:
  ```
    npm install express express-graphql graphql nodemon
  ```

- Optionally you can install babel packages, if you are going to use es6 specific syntax #optional
  ```
  npm install --save-dev babel-cli babel-preset-env babel-preset-stage-0
  ```