# Best Bites Server

## Author: Justin Hamerly-Spain

[<< HOME](../README.md)

---

## About

- The *Best Bites* server is for making requests for signing up users for restaurants, fetching data from the Yelp API and shaping it for the front end, and REST routes for user's favorite Restaurant information.

- Database is hosted with MongoDB (NoSQL).

- *NPM Packages*: axios, cors, dotenv, express, mongoose

---

## Installation

1. `npm i` (installs NPM packages listed above, and all other dependencies)
2. create **.env** file with the following

    > **PORT** - a local port to run the server 
    >
    > **dbURI** - a mongoDB URI procured from [MongoDB](https://www.mongodb.com/)
    >
    > **YELP_API_KEY** - an API key Procured from [Yelp Developers](https://www.yelp.com/developers/)

3. `npm run dev` - starts the server.

---

## File Structure

```text
.
├── LICENSE
├── README.md
├── index.js
├── package-lock.json
├── package.json
└── src
    ├── auth
    │   ├── handlers.js
    │   ├── index.js
    │   └── middleware
    │       ├── basic.js
    │       └── bearer.js
    ├── controllers
    │   ├── rest.js
    │   └── restSearch.js
    ├── error-handlers
    │   ├── 404.js
    │   └── 500.js
    ├── middleware
    │   └── logger.js
    └── models
        ├── RestSchema.js
        └── userSchema.js
```

---

## Endpoints

### **/restSearch**

- **GET**

- *description* - searches for restaurants and returns the top 10 results.

- Query Parameters

  - *location* - a city, address, zip code etc... for searching a restaurant.
  - *search* - the name of the restaurant.

### **/rest**

- ### CREATE

  - *description* - Creates new restaurant from request body.

  - Body Properties

    - name: String - name of the restaurant
    - img: String - an image url
    - url: String - a link to Yelp page
    - yelpId: String - Yelp's identification
    - categories: Array - an array of searchable categories
    - geo: Array - geographic coordinates (lat, lon)
    - price: String - a rating based on price (1-4)
    - location: Array - an array of different address formats
    - email: String - the user's email

- ### READ

  - *description* - Fetches user's saved restaurant data.

  - Route Params

    - */email* - the email associated with the user account.

- ### UPDATE

  - *description* - A put request to overwrite old data.

  - Route Params

    - */id* - the mongo ID for the database resource to be updated.
  
  - Body Properties

    - see CREATE method above.

- ### DELETE

  - *description* - removes a restaurant resource from the database.

  - Route Params

    - */id* - the mongo ID for the database resource to be deleted.
