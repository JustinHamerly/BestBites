# Best Bites Client

## Author: Justin Hamerly-Spain

[<< HOME](../README.md)

---

## About

- The *Best Bites* client is the frontend RESTful web application implementing React for it's component structure, and Redux/Redux Toolkit for state management.

- User's can create accounts to track their favorite restaurants and the meals they enjoyed to make it easy to recall the best places to eat.  

- *NPM Packages*: Auth0 React, axios, react-bootstrap, mongoose, react-router-dom, react-dom

---

## Installation

1. `npm i` (installs NPM packages listed above, and all other dependencies)
2. create **.env** file with the following

    > **REACT_APP_SERVER** - a url for connecting to the server code.
    <!-- >
    > **YELP_API_KEY** - an API key Procured from [Yelp Developers](https://www.yelp.com/developers/) -->

3. `npm run dev` - starts the development application.

---

## File Structure

```text
.
├── LICENSE
├── README.md
├── package-lock.json
├── package.json
├── public
│   ├── images
│   │   └── background.jpg
│   ├── index.html
│   └── meal-favicon.png
└── src
    ├── App.css
    ├── App.jsx
    ├── auth
    │   ├── Auth.jsx
    │   ├── Login.jsx
    │   ├── LoginForm.jsx
    │   ├── LoginProvider.jsx
    │   └── SignUpForm.jsx
    ├── components
    │   ├── Interface.jsx
    │   ├── SearchBar.jsx
    │   └── SearchResultsModal.jsx
    ├── index.css
    ├── index.js
```

---

## Components

### Authentication/Authorization

|Component|Description|Functions|React Hooks|
|:--|:--|:--|:--|
|Auth|A wrapper for other components that checks the logged in state.  Renders children if a user is logged in.|n/a|useEffect, useState, useContext|
|Login|Renders the LoginForm if not logged in, and the logout button if logged in.  Also, houses the SignUpForm modal.|handleLogin|useState, useContect|
|LoginForm|A form with inputs for email and password, as well as a register button|n/a|n/a|
|LoginProvider|A wrapper providing context to the entire App for loggedIn state, user email and authentication token.  Also passes down the logout and login functions.|login, handleLogin, logout, validate|createContext, useState, useEffect|
|SignUpForm|A form accepting a username and two passwords that need to match|handleRegister|useState|

### App Interface

|Component|Description|Functions|
|:--|:--|:--|
|Interface|
|SearchBar|
|SearchResultsModal|

---

## Functions

### Authentication/Authorization Functions

|Function Name|Description|
|:--|:--|
|handleLogin|passes username and password from a user object to the login function handled by the LoginProvider.|
|login|a post request to the server using username and password.  validates the token from the response with the validate function.|
|handleLogin|saves the token using react-cookies and a state setter for logged in state, user email and token.|
|logout|clears the loggedIn state, username and token.|
|validate|decodes the token.  If it is valid the user will be logged in, otherwise the state is cleared with the logout function.|
|handleRegister|accepts a username and password as an argument.  Makes a post request to the server which creates a user object if the email is not already in the database.  Proceeds to log in that user with the login function.|

