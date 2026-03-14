# Blog API (Express.js CRUD Project)

A simple **Blog REST API** built using **Node.js and Express.js**.
This project demonstrates backend fundamentals such as **routing, middleware, MVC structure, and CRUD operations** with a minimal frontend for testing.

---

# Features

* Create blog posts
* View all posts
* View single post
* Update a post
* Delete a post
* Request logging middleware
* Error handling middleware
* CORS support
* Simple frontend to test the API
* MVC-style project structure

---

# Tech Stack

* Node.js
* Express.js
* JavaScript (ES6)
* HTML (for frontend testing)

---

# Project Structure

```
blog-api
│
├── server.js
├── package.json
│
├── controllers
│   └── postController.js
│
├── models
│   └── postModel.js
│
├── routes
│   └── postRoutes.js
│
├── middleware
│   ├── logger.js
│   ├── errorHandler.js
│   └── notFound.js
│
└── public
    └── index.html
```

---

# Installation

Clone the repository

```
git clone https://github.com/yourusername/blog-api.git
```

Navigate to the project directory

```
cd blog-api
```

Install dependencies

```
npm install
```

Start the server

```
node server.js
```

Server will run on

```
http://localhost:3000
```

---

# API Endpoints

| Method | Endpoint         | Description     |
| ------ | ---------------- | --------------- |
| GET    | `/api/posts`     | Get all posts   |
| GET    | `/api/posts/:id` | Get single post |
| POST   | `/api/posts`     | Create new post |
| PUT    | `/api/posts/:id` | Update post     |
| DELETE | `/api/posts/:id` | Delete post     |

---

# Example Request

### Create Post

```
POST /api/posts
```

Body

```
{
 "title": "My First Blog",
 "content": "Hello World"
}
```

Response

```
{
 "id": 1710400123456,
 "title": "My First Blog",
 "content": "Hello World"
}
```

---

# Key Concepts Demonstrated

### Node.js Fundamentals

* Event-driven architecture
* Non-blocking I/O
* Asynchronous programming

### Express.js Concepts

* Routing
* Middleware
* Request and Response handling
* Error handling

### Architecture

* MVC (Model View Controller)
* Modular code organization

---

# Middleware Used

### Logger Middleware

Logs every incoming HTTP request.

### JSON Parser

```
express.json()
```

Parses JSON request bodies.

### Error Handling Middleware

Handles server-side errors.

### 404 Middleware

Handles unknown routes.

---

# Frontend

A minimal **HTML frontend** is included to test API functionality.

Features:

* Create new posts
* Display blog posts
* Delete posts
* Update posts

---

# Future Improvements

* Add database (MongoDB)
* Authentication (JWT)
* Input validation
* Pagination
* Production-ready folder structure

---

# Learning Outcome

This project helps understand:

* REST API design
* Express middleware pipeline
* Backend architecture
* CRUD operations
* Client-server communication

---

# License

MIT License
