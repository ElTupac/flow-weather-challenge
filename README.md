# Index

1. [Flow weather API challenge](#flow-weather-api-challenge)
   1. [Description](#description)
   2. [Demo](#demo)
   3. [Tech stack](#tech-stack)
   4. [Other tools](#other-tools)
2. [How to start](#how-to-start)
   1. [Requirements](#requirements)
      1. [Environment variables](#environment-variables)
   2. [Installing dependencies](#installing-dependencies)
   3. [Running local environment](#running-local-environment)
   4. [Production build](#production-build)
3. [Frontend](#frontend)
   1. [Develop](#develop)
   2. [Wrappers](#wrappers)
   3. [General Components](#general-components)
   4. [Layouts](#layouts)
4. [Architecture](#architecture)
   1. [Entrypoint](#entrypoint)
   2. [Controller](#controller)
   3. [UseCase](#usecase)
   4. [Service](#service)
5. [Endpoints](#endpoints)
6. [Deploy](#deploy)
7. [TODO list](#todo)

# Flow weather API challenge

## Description

This project is done in order to apply for a developer job at Flow. The challenge aims to create an app where the user can ask for the weather of any city. The data to feed this app will be from [Weather API](https://www.weatherapi.com/ "Weather-api site"), that gives us an easy and robust set of endpoints that will help us to develop our service.

## Demo

You can see a live demo of this project in my [heroku app](https://flow-weather.herokuapp.com/ "Flow weather demo").

## Tech stack

- **Next.js**: The project has to be based in the React library, and Next is a framework based in React, but with a lot of more features that will help us to develop a more powerful final solution. Next.js gives us an easy way to create the routing of our application with ease, also offers Server Side Rendering that will boost the SEO of the site for the search engines indexing, and also when sharing our site links it will generate better previews.
- **Tailwind.css**: This css framework gives the developer an easy way to develop our components just with classes, and then the compiler of Tailwind will take care about the final css file that will only contain the classes used. This makes a lot of difference compared to other css frameworks or components libraries that will import a whole css package but without using all of its content.
- **Typescript**: In order to ensure a better code quality we are going to use Typescript for all the API endpoints and also for the creation of our Models and Interfaces.

## Other tools:

- **Eslint**: To ensure the quality of the code, so this was a must to approach that. Was used the airbnb template but with some modifications of the rules that were making no sense.
- **Prettier**: The proyect has Prettier installed and also a configuration that overrides whatever one you have in your code editor. This way all the devs will format the code the same way without adding useless code modifications to the commits.
- **Husky**: This library helps to automatize tasks, like checking linter and formatting of the code before commiting, this way the devs avoid uploading code that is not approaching the code quality we are looking for.

# How to start

## Requirements

Since this is a Node application as part of the requirements is needed to have Node.js installed, and any package manager tool, could be `npm`, `yarn`, etc. This section will be oriented to use `npm`, but the commands used could be also used in the other managers with their corresponding syntax. For **running** the project in local is also needed to define some local variables, if you need some of them(like api keys) you could ask to my [mail](mailto:nehuencovelo@gmail.com) or in my [linkedin](https://www.linkedin.com/in/el-tupac/).

### Environment variables

There is a total of 5 environment variables but just 2 of them are criticals, the other are just configurations that already has a default fallback in the code.

| Key                    | Description                                                                                                                                      |
| :--------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------- |
| `WEATHER_API_KEY`      | **Required**. This is the API key used to access the API that provides the forecast information                                                  |
| `WEATHER_API_URL`      | **Required**. This is the URL used to access the API that provides the forecast information                                                      |
| `TOTAL_FORECAST_DAYS`  | **Optional**. This would define the total days of forecast to show the user.                                                                     |
| `TOTAL_SEARCH_RESULTS` | **Optional**. This would define the total of cities to show the user in a search.                                                                |
| `DEFAULT_LOCATIONS`    | **Optional**. In case is not possible to ask for the IP or location of the user we can define the default locations to show him in the selector. |

## Installing dependencies

Before doing anything is needed to install the project dependencies, for this you need to run, in the root folder of the project, the command:

```
npm i
```

**OR**

```
npm install
```

## Running local environment

For running the project you need to execute, inside the root folder of the project, the command:

```
npm run dev
```

This will start a local server in the port `3000`. Now you can access the application going to [localhost:3000](http://localhost:3000/). In case the port already used, Next will try to start it in the next port.

## Production build

Building the project locally is important because:

- We can test if any dependency, or part of code, is breaking at build time.
- We can test locally how the performance is when we are at production, since this build is optimized and changes a lot the metrics against the `development` server.
  If you want to create a build for production you can use the command `npm run build` and this will create a ready to production build, that you can run locally with the command `npm start` or `npm run start`. Important to notice that the last script, `start`, will only execute if before have been done the `build`, this is because the `dev` and the `production` build share the same folder(**.next**), and running either of those will overwrite the previous build; so if you try to run `npm start` after having a `dev` server running, will crash saying that `Next` couldn't find a production build.

# Frontend

The `frontend` of the application is really basics, it has no complexity at all since there is just 2 pages, both with few components to display. The challenge asks for a site where the user can see it's city forecast, current weather and next 5 days, and has a selector with 5 other cities that he could switch between.

## Develop

In this case, our project is based in Next.js, so a part of our frontend starts at server side. Next.js provides the folder `pages` where each file will be a route, and inside of it we can define also the logic to fetch/provide ar server side level. For developers, that has few experience with the framework, is a temptation to start coding the frontend itself inside of those files, but that just helps to confuse, since we could find backend logic and frontend code inside the same file. To avoid this, the files inside `pages` would only contain code that is meant to contribute to the logic, SEO, or tags that are meant to be in the `<head>`, and configurations that the page could have, like first data or Layout configuration. And as the frontend part of these files we will only export a `Wrapper` of the page.

## Wrappers

The `Wrappers` are MacroComponents that would most contain other own components, contexts, etc., that will define our page. These wrappers will also be responsible of receiving the first data provided at server side level, if provided any, and distributing it among the different components that make up our page. In this challenge was created a folder dedicated to those wrappers(`page-wrappers`), although they are components indeed, they have a total different philosophy and destiny.

## General components

The general components are stored inside the `UI` folder. This folder contains components that could be implemented in the wrappers needed, and in possible they has to be as reusable as possible to avoid duplicating components, what leads to style mismatch and maintenability issues in the long term. This folder now is defined really basic, without further subdivisions in it, but it could(**SHOULD**) be defined subdivisions inside of it, in order to categorize better the components, their uses, and help in the search of them.

## Layouts

The `Layouts` folder is created to not only separate the files of this kind of component, but also to easy mapping them to implement a really easy configuration at every page. So, this lead to help the developer forget about importing the layout at every page, and just pass the name of it inside the page definition(inside `pages`). This could be done adding the property `.layout` to the exported default component of the page, with the name of the `Layout` required. Example:

```
const Home = (props) => {
  ...
}
Home.layout = "CustomLayout";
export default Home;
```

If the `Layout` **CustomLayout** exists it will be applied to the page, else it would apply the default if defined.

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

# Endpoints

### Get City Forecast

This will return infos about the location and an array with the weather of the current day and the next five, or the number of days defined in the environment variable **TOTAL_FORECAST_DAYS**

```http
  GET /api/forecast/${city}
```

| Parameter | Type     | Description   |
| :-------- | :------- | :------------ |
| `city`    | `string` | **Required**. |

### Get Search of locations

This will return an array of 5 locations that match the `query` parameter requested. The number of locations is defined in the environment variable **TOTAL_SEARCH_RESULTS**.

```http
  GET /api/search/${query}
```

| Parameter | Type     | Description   |
| :-------- | :------- | :------------ |
| `query`   | `string` | **Required**. |

# Deploy

The application is being deployed with help of Docker, since we need a more robust solution to host a whole Next.js app with SSR. The `Dockerfile` is the template given in this [official example](https://github.com/vercel/next.js/tree/canary/examples/with-docker). Also the demo is being hosted in a free app of `Heroku`, that gives a really good support for Docker containers, and also a really easy way to implement it. For `Heroku` was created the file `heroku.yml` that is the config that will use Heroku at the moment of deploying our app. The current file created is a simple one just with the instructions to use the `Dockerfile` as the builder of the image of our container, so the whole process is relying in whatever is defined inside the `Dockerfile`.

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

Total(aprox.) spent hours: 15
