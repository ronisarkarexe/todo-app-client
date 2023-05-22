# Todo App

## Live Side: https://idyllic-capybara-7dc8de.netlify.app

## Server Side: https://github.com/ronisarkarexe/todo-app-server

### How to Run Client

`Clone` App to your local machine.

```sh
https://github.com/ronisarkarexe/todo-app-client.git
```

### After Installing, Then Open terminal.

- Install the dependencies using `npm install`
- Run the app using `npm start`


### How to Run Server

`Clone`
```sh
https://github.com/ronisarkarexe/todo-app-server
```

- Create Your Own Database And Password (MongoDB), 

```sh
process.env.DB_USER = Database Name
```

```sh
process.env.DB_PASS = Password
```
Like this.

`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.v4fkr.mongodb.net/?retryWrites=true&w=majority`