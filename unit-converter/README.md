# ⚖️ Unit Converter

A simple Unit Converter web application built with **Node.js** and **Express**.  
Convert Length, Weight, and Temperature units right from your browser.

---

## 🚀 Features

- Convert Length → km, miles, cm, inches
- Convert Weight → kg, pounds, grams, ounces
- Convert Temperature → Celsius, Fahrenheit, Kelvin
- Clean and simple UI
- REST API backend with Express
- No frontend framework — pure HTML, CSS, JS

---

## 🗂️ Project Structure
```
unit-converter/
├── src/
│   ├── converters/
│   │   ├── length.js
│   │   ├── weight.js
│   │   └── temperature.js
│   └── app.js
├── public/
│   ├── index.html
│   └── style.css
├── .gitignore
├── package.json
└── README.md
```

---

## 🛠️ Tech Stack

| Purpose    | Tool          |
|------------|---------------|
| Runtime    | Node.js       |
| Server     | Express.js    |
| Frontend   | HTML, CSS, JS |
| API        | REST (POST)   |

---

## ⚙️ Installation & Setup

**1. Clone the repository**
```bash
git clone https://github.com/your-username/unit-converter.git
cd unit-converter
```

**2. Install dependencies**
```bash
npm install
```

**3. Run the server**
```bash
node src/app.js
```

**4. Open in browser**
```
http://localhost:3000
```

---

## 📡 API Reference

**Endpoint:** `POST /api/convert`

**Request Body:**
```json
{
  "category": "length",
  "unit": "km_to_miles",
  "value": 10
}
```

**Response:**
```json
{
  "result": "6.21"
}
```

**Available Categories & Units:**

| Category    | Unit Key          | Description              |
|-------------|-------------------|--------------------------|
| length      | km_to_miles       | Kilometres to Miles      |
| length      | miles_to_km       | Miles to Kilometres      |
| length      | cm_to_inches      | Centimetres to Inches    |
| length      | inches_to_cm      | Inches to Centimetres    |
| weight      | kg_to_pounds      | Kilograms to Pounds      |
| weight      | pounds_to_kg      | Pounds to Kilograms      |
| weight      | grams_to_ounces   | Grams to Ounces          |
| weight      | ounces_to_grams   | Ounces to Grams          |
| temperature | c_to_f            | Celsius to Fahrenheit    |
| temperature | f_to_c            | Fahrenheit to Celsius    |
| temperature | c_to_k            | Celsius to Kelvin        |
| temperature | k_to_c            | Kelvin to Celsius        |

---

## 📸 Preview
```
┌─────────────────────────────────┐
│        ⚖️ Unit Converter         │
├─────────────────────────────────┤
│  Category:  [Length        ▼]   │
│  Convert:   [km to miles   ▼]   │
│  Value:     [_______________]   │
│                                 │
│         [ Convert ]             │
│                                 │
│  ✅ 10 km → miles = 6.21        │
└─────────────────────────────────┘
```

---

## 📚 Learning Goals

This project is built for learning purposes to understand:

- How to set up a Node.js + Express server
- How to create and use REST API endpoints
- How to serve static files with Express
- How to connect a frontend UI to a backend API using `fetch`
- How to structure a simple Node.js project

---

## 🙌 Author

Built with ❤️ for learning Node.js

---

## 📝 License

This project is open source and free to use for learning purposes.