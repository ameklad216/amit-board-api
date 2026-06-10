<p align="center">
  <img src="./assets/amit-logo.png" alt="AMIT Learning Logo" width="220">
</p>

# Bored API Clone

A simple Express.js REST API created by **AMIT Learning**.

This project is a beginner-friendly backend API inspired by the Bored API idea. It provides random activity suggestions, filtering by activity type and participants, and searching for a specific activity by key.

The app also includes Swagger API documentation so developers and students can test the API directly from the browser.

---

## Created By

**AMIT Learning**

---

## Live API URL

Replace this URL with your real Render deployment URL after publishing:

```txt
https://YOUR-RENDER-SERVICE-NAME.onrender.com
```

Example routes after deployment:

```txt
https://YOUR-RENDER-SERVICE-NAME.onrender.com/random
https://YOUR-RENDER-SERVICE-NAME.onrender.com/filter?type=education&participants=1
https://YOUR-RENDER-SERVICE-NAME.onrender.com/activity/3943506
https://YOUR-RENDER-SERVICE-NAME.onrender.com/api-docs
```

---

## Purpose of the App

The purpose of this app is to help students understand how to build a real REST API using **Node.js** and **Express.js**.

This app demonstrates:

- Creating an Express.js server
- Building REST API endpoints
- Returning JSON responses
- Using route parameters
- Using query parameters
- Handling invalid routes
- Filtering data
- Creating API documentation using Swagger
- Preparing a backend project for deployment

This project can be used as a beginner-friendly backend practice project for students learning APIs and Express.js.

---

## Features

- Get a random activity
- Filter activities by activity type
- Filter activities by number of participants
- Get a specific activity by key
- Swagger documentation page
- JSON API responses
- Ready for deployment on Render

---

## Tech Stack

- Node.js
- Express.js
- Swagger UI Express
- CORS
- Dotenv
- Nodemon

---

## Project Structure

```txt
bored-api-clone/
│
├── server.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

---

## Installation Steps

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY-NAME.git
```

### 2. Open the Project Folder

```bash
cd YOUR-REPOSITORY-NAME
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Run the App in Development Mode

```bash
npm run dev
```

### 5. Run the App in Production Mode

```bash
npm start
```

---

## Local Development URL

After running the app locally, open:

```txt
http://localhost:3000
```

Swagger documentation:

```txt
http://localhost:3000/api-docs
```

---

## API Endpoints

### Welcome Route

```http
GET /
```

Returns a welcome message and available routes.

---

### Get Random Activity

```http
GET /random
```

Example:

```txt
http://localhost:3000/random
```

Returns one random activity.

---

### Filter Activities

```http
GET /filter
```

Available query parameters:

| Query Parameter | Description |
|---|---|
| type | Filter by activity type |
| participants | Filter by number of participants |

Example:

```txt
http://localhost:3000/filter?type=education
```

Example:

```txt
http://localhost:3000/filter?type=education&participants=1
```

---

### Get Activity By Key

```http
GET /activity/:key
```

Example:

```txt
http://localhost:3000/activity/3943506
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

## Swagger Documentation

The API documentation is available locally at:

```txt
http://localhost:3000/api-docs
```

After deployment:

```txt
https://YOUR-RENDER-SERVICE-NAME.onrender.com/api-docs
```

Swagger allows you to view and test all API endpoints from the browser.

---

## Deployment on Render

This app can be deployed using Render as a Web Service.

### Render Settings

Use the following settings when creating a new Web Service:

```txt
Service Type: Web Service
Runtime: Node
Build Command: npm install
Start Command: npm start
Instance Type: Free
```

After deployment, Render will give you a live URL similar to:

```txt
https://your-app-name.onrender.com
```

Use that URL to access your API and Swagger documentation.

---

## Notes

- This project uses local in-memory data.
- Data will reset if the server restarts.
- This app is designed for learning and practice purposes.
- For a real production project, you can connect it to a database such as MongoDB or PostgreSQL.

---

## Author

Created by **[AMIT Learning](https://amit-learning.com/)**.
