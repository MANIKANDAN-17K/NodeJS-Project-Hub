# 🚀 Company HTTP Server (Node.js – No Express)

A professional backend project built using **Node.js native `http` module only** — without Express or any external framework.

This project demonstrates how HTTP servers work internally by manually handling:

* Routing
* Request methods
* Body parsing
* Buffers
* Response headers
* Status codes

It helps understand what frameworks like Express abstract away.

---

## 📌 Project Overview

This is a simple company backend API that supports:

* `GET /` → Company landing message
* `GET /about` → Company information (JSON)
* `GET /contact` → Contact details
* `POST /contact` → Accepts contact form submission
* `POST /echo` → Returns request body
* 404 handling for unknown routes

---

## 🏗 Directory Structure

```
company-server/
│
├── src/
│   ├── server.js
│   ├── routes/
│   │   └── router.js
│   ├── controllers/
│   │   └── contactController.js
│   └── utils/
│       └── parseBody.js
│
├── package.json
└── README.md
```

---

## 🧠 Concepts Covered

* `http.createServer()`
* `req.url`
* `req.method`
* `req.on('data')`
* `Buffer.concat()`
* `res.writeHead()`
* `res.end()`
* Manual routing
* Controller separation
* Utility functions
* Basic REST API structure

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```
git clone <your-repo-link>
cd company-server
```

### 2️⃣ Install Dependencies

(No external dependencies required)

```
npm install
```

### 3️⃣ Start Server

```
node src/server.js
```

Server will run on:

```
http://localhost:3000
```

---

## 🧪 API Testing

### ✅ Test Using Browser (GET Routes)

```
http://localhost:3000/
http://localhost:3000/about
http://localhost:3000/contact
```

---

### ✅ Test Using Postman (POST Routes)

**POST /contact**

* Method: `POST`
* URL: `http://localhost:3000/contact`
* Body → `x-www-form-urlencoded`

| KEY     | VALUE      |
| ------- | ---------- |
| name    | Manikandan |
| message | Hello      |

---

**POST /echo**

* Method: `POST`
* URL: `http://localhost:3000/echo`
* Body → raw / form data

---

## 🧩 Why This Project Is Important

This project helps you understand:

* How Node handles raw HTTP requests
* How request body is received in chunks
* How routing works internally
* How frameworks simplify backend development
* How REST APIs are structured

Before using Express, understanding this is critical for strong backend fundamentals.

---

## 🔥 Future Improvements

* JSON body parsing
* Middleware system
* Static file serving
* Logging system
* Database integration (MongoDB / MySQL)
* Authentication system
* Convert into custom mini-framework

---

## 🏆 Learning Outcome

By completing this project, you will understand:

* Core backend architecture
* HTTP protocol fundamentals
* How professional backend systems are structured
* What happens behind Express

---

## 📜 License

This project is for educational purposes.

---

**Built with Node.js Core Modules 💻**
