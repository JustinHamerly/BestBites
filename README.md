# Best Bites

## Author: Justin Hamerly-Spain

[Server Documentation](./server/README.md)

[Client Documentation](./client/README.md)

[Deployed App](https://best-bites.netlify.app/)

### V.1.0.0

---

### ABOUT

*Best Bites* is a web app for tracking favorite restaurants and meals.  It offers suggestions for similar restaurants and a map of visited restaurants.

---

### PROBLEM DOMAIN

A one stop shop for decision making when unsure of where to eat tonight.  For times when you want something to eat but are unsure of what restaurant to visit, Best Bites offers a personal collection of your favorite places to eat with reminders of what you had.

---

### TECHNOLOGIES

|Type|List|
|:--|:--|
|Language and Libraries|JavaScript, React, Node.js, Express|
|Database and Deployment| MongoDB (NoSQL Database), Netlify (frontend), DigitalOcean (backend)|
|Integrations| YelpAPI |

---

### USER STORIES

#### LOGIN FEATURE

As an account owner, I want to be able to log in easily and ensure my account is safe.

Feature Tasks:

- Login and signup features use encryption through authorization and authentication to manage their accounts.

- The user's password is safe and only an encrypted form is tied to their account, nowhere exposing their information.

Acceptance:

- When user registers.  Their data is encrypted on the front end before it gets sent to the backend, and the backend will pass back a token so the user can access features important to them.

#### ADD A RESTAURANTE FEATURE

As a user, I want to input previous restaurant experiences so I can track what restaurants I’ve been to and what dish was my favorite.

Feature Tasks:

- User clicks a check-in button to track the restaurants they've visited.

- User can add a name of favorite dish at the restaurant.

- User is able to filter and sort their list of previous restaurants based on visits/number of liked meals/price and keywords.

Acceptance:

- When user clicks the check-in button, the tally for visits to that current restaurant increases.

- User is able to add name of their favorite dish which saves to their favorites page.

- A rendered form of all of their saved restaurants is easily visible and the sorting feature works.

<!-- #### ADD A MAP THAT DISPLAYS PREVIOUSLY VISITED RESTAURANTS

As a user, I want to view the restaurants I’ve already visited so I can easily make a selection if I don’t want to eat somewhere new.

Feature Tasks:

- Map will display pins of user’s previously visited restaurants.

- Pin will be a unique color.

- Map is dynamic, allowing user to scroll and see all their pins around the world.

Acceptance:

- When user clicks the map it will show the pins of all the restaurants they have previously visited.

- The pins will display in a unique color for user’s selections.

- The map will be scrollable, zooming in and out. -->

---

### UML

![Version 1 UML](./img/Best-Bites-UML_v1.png)
