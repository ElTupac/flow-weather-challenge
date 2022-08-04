# Index

1. [Flow weather API challenge](#flow-weather-api-challenge)
   1. [Description](#description)
   2. [Tech stack](#tech-stack)
   3. [Other tools](#other-tools)
2. [Architecture](#architecture)
   1. [Entrypoint](#entrypoint)
   2. [Controller](#controller)
   3. [UseCase](#usecase)
   4. [Service](#service)
3. [TODO list](#todo)

# Flow weather API challenge

## Description

This project is done in order to apply for a developer job at Flow. The challenge aims to create an app where the user can ask for the weather of any city. The data to feed this app will be from [Weather API](https://www.weatherapi.com/ "Weather-api site"), that gives us an easy and robust set of endpoints that will help us to develop our service.

## Tech stack

- **Next.js**: The project has to be based in the React library, and Next is a framework based in React, but with a lot of more features that will help us to develop a more powerful final solution. Next.js gives us an easy way to create the routing of our application with ease, also offers Server Side Rendering that will boost the SEO of the site for the search engines indexing, and also when sharing our site links it will generate better previews.
- **Tailwind.css**: This css framework gives the developer an easy way to develop our components just with classes, and then the compiler of Tailwind will take care about the final css file that will only contain the classes used. This makes a lot of difference compared to other css frameworks or components libraries that will import a whole css package but without using all of its content.
- **Typescript**: In order to ensure a better code quality we are going to use Typescript for all the API endpoints and also for the creation of our Models and Interfaces.

## Other tools:

- **Eslint**: To ensure the quality of the code, so this was a must to approach that. Was used the airbnb template but with some modifications of the rules that were making no sense.
- **Prettier**: The proyect has Prettier installed and also a configuration that overrides whatever one you have in your code editor. This way all the devs will format the code the same way without adding useless code modifications to the commits.
- **Husky**: This library helps to automatize tasks, like checking linter and formatting of the code before commiting, this way the devs avoid uploading code that is not approaching the code quality we are looking for.

# Architecture

The project has a backend development in order to centralize all the resources needed for the frontend under the same domain. This is an easy task with Next.js since it offers this as part of the framework. Inside `pages/api/` we are going to develop our endpoints. In this case we are going to separate resources based in the entity that is needed to access(Search, Forecast, etc). This endpoints will return data based in the Interface of the entity. The endpoint resolver has to access the object of the Entity we are looking for, and this will be the only input point for the resolver, example:

- If the resource is `forecast` the input will be through the Forecast object defined in `src/models/Forecast`.

## Entrypoint

The entrypoint of the Object will only contain a Class that will extend a `Controller`. The entrypoint class should has only the definition of the contructor and the parameters needed to instantiate it.

## Controller

The `Controller` class will list every method needed for the resolvers that will use the model. This methods will define the parameters that are needed to use a method. Then, each method has to call the corresponding `UseCase` for the operation needed to be done.

## UseCase

The `Usecase` functions will be the definition of our bussiness logic. In here we are going to develop the needed logic to determine how we have to answer certain request. The idea of the `UseCases` is to isolate our bussiness logic from the `Controllers` and the `Services`, and those MUST have no dependencies, so the code should be only logic. No dependencies means not rely8ing our logic on third party libraries, but since we want to isolate the bussiness logic it could be out of the project itself, for example as an own developed package.
After the `UseCase` logic we will proceed to call the `Service` needed to provide the data.

## Service

The service file of our model will contain every needed resolver for the corresponding resources. In here we will have no logic at all, this will only receive the needed parameters to request the data. Only if needed, because the requested data doesn't match the `Interface` to return, we can define a parser method inside `src/utilities/parsers`. The return type of each of our `Services` will be of the `Interface` requested by the `Controller`.

<br>

## TODO

- **Basics**:
  - ~~.gitignore~~
  - ~~install dependencies~~
  - ~~configure Next, Ts, webpack, tailwind and whatever~~
  - ~~linter rules, use any recent template~~
  - ~~husky for automatize commits with linter and prettier~~
  - ~~write first part of this readme, foundations and why of each thing~~
- **Architecture**:
  - ~~folder structure~~
  - ~~define absolute paths~~
  - ~~create the interfaces based on the API info~~
  - ~~define Objects(User, Climate, City, etc)~~
  - ~~define API routes for each Object~~
  - ~~develop controllers~~
  - ~~define use cases(bussiness logic)~~
  - ~~explain the architecture in the readme~~
- **Frontend**:
  - ~~define basic theme variables.~~
  - SEO basics(~~title~~, description, ~~links~~, ~~alts~~, canonicals, ~~semantics~~, ~~favicon~~)
  - ~~define UX~~
  - ~~develop pages~~
  - ~~implement functionality~~
- **Deployment**:
  - create Dockerfile
  - config heroku app for docker container
  - test deploy
- **Miscelaneous**:
  - SEO share meta tags
  - performance logs
  - testing
  - Geolocalization
