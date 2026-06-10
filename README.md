# Bored API Clone

<p align="center">
  <img src="./assets/amit-logo.png" alt="AMIT Learning Logo" width="220">
</p>

A simple Express.js REST API created by **AMIT Learning**.

This project is a beginner-friendly backend API inspired by the Bored API idea. It provides random activity suggestions, filtering by activity type and participants, and searching for a specific activity by key.

The app also includes Swagger API documentation so developers and students can test the API directly from the browser.

---

## Created By

**[AMIT Learning](https://amit-learning.com/)**

---

## Base API URL

```txt
https://amit-bored-api.bonto.run
```

Example routes:

```txt
https://amit-bored-api.bonto.run/random
https://amit-bored-api.bonto.run/filter?type=education&participants=1
https://amit-bored-api.bonto.run/activity/3943506
https://amit-bored-api.bonto.run/api-docs
```

---

## Purpose of the App

The purpose of this app is to help students understand how to build a real REST API using **Node.js** and **Express.js**.

This app demonstrates:

* Creating an Express.js server
* Building REST API endpoints
* Returning JSON responses
* Using route parameters
* Using query parameters
* Handling invalid routes
* Filtering data
* Creating API documentation using Swagger
* Preparing a backend project for deployment

This project can be used as a beginner-friendly backend practice project for students learning APIs and Express.js.

---

## Features

* Get a random activity
* Filter activities by activity type
* Filter activities by number of participants
* Get a specific activity by key
* Swagger documentation page
* JSON API responses
* Ready for online deployment

---

## Tech Stack

* Node.js
* Express.js
* Swagger UI Express
* CORS
* Dotenv
* Nodemon

---

## Project Structure

```txt
bored-api-clone/
│
├── assets/
│   └── amit-logo.png
│
├── server.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

---

## API Documentation

Swagger documentation is available at:

```txt
https://amit-bored-api.bonto.run/api-docs
```

Swagger allows you to view and test all API endpoints directly from the browser.

---

## API Endpoints

### Welcome Route

```http
GET /
```

Example:

```txt
https://amit-bored-api.bonto.run/
```

Returns a welcome message and available routes.

---

### Get Random Activity

```http
GET /random
```

Example:

```txt
https://amit-bored-api.bonto.run/random
```

Returns one random activity.

---

### Filter Activities

```http
GET /filter
```

Available query parameters:

| Query Parameter | Description                      |
| --------------- | -------------------------------- |
| type            | Filter by activity type          |
| participants    | Filter by number of participants |

Example:

```txt
https://amit-bored-api.bonto.run/filter?type=education
```

Example:

```txt
https://amit-bored-api.bonto.run/filter?type=education&participants=1
```

---

### Get Activity By Key

```http
GET /activity/:key
```

Example:

```txt
https://amit-bored-api.bonto.run/activity/3943506
```

Returns a specific activity using its unique key.

---

## Available Activity Types

```txt
education
recreational
social
charity
cooking
relaxation
busywork
```

---

## Example Response

```json
{
  "activity": "Learn Express.js",
  "availability": 0.25,
  "type": "education",
  "participants": 1,
  "price": 0.1,
  "accessibility": "Few to no challenges",
  "duration": "hours",
  "kidFriendly": true,
  "link": "https://expressjs.com/",
  "key": "3943506"
}
```

---

## Notes

* This app is designed for learning and practice purposes.
* The API returns JSON responses.
* The Swagger documentation can be used to test the endpoints directly from the browser, or in postman in the case of POST endpoints.

---

## Author

Created by **[AMIT Learning](https://amit-learning.com/)**.
