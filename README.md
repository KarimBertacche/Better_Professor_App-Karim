# Anywhere Fitness Back-End

This repository will hold source codes for the back end script. Alternatively deployed to Heroku

Some notes:
  - If you want to spin up the server locally,
      [ ] clone this project and open it in VS Code,
      [ ] `npm i` to get dependenies,
      [ ] `npm run migrate`,
      [ ] `npm run seed`,
      [ ] create a top-level .env file and add the following code
          ```
            PORT=5000;
            DB_ENV='development';
            JWT_SECRET='vasjdnvaj&T&*%&*39r2309bcH8LONGassPASSWORDvasjdv79y294y^*R&9u(08y88)(';
          ```
      [ ] then type in the command line `npm run server`

## DEPLOYED API link

https://better-professor-api-karim.herokuapp.com/

## Scripts

`npm server:` spins up the server using nodemon

`npm test:` runs the tests

## POST data types and format

| data variable  | data type                                  |
| -------------- | ------------------------------------------ |
| first_name      | string                                     |
| last_name       | string                                     |
| email          | string (&& valid email format)             |
| password       | string                                     |


#### Register new User

- Make a POST request to `/api/auth/register`
- Required fields in the `req.body`:

```
first_name
last_name
email
password
```

#### Login existing User

- Make a POST request to `/api/auth/login`
- Required fields in the `req.body`:

```
email
password
```