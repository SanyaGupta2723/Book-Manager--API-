# 📚 BookVerse API – RESTful Book Management Service

**BookVerse API** is a lightweight and easy-to-use RESTful API designed to manage a list of books. This project provides endpoints to perform basic CRUD operations (Create, Read, Update, Delete) on a book collection — ideal for beginners learning API development or for building backend services for book-related applications.

Live Project :- https://codesandbox.io/p/sandbox/github/SanyaGupta2723/REST-API

## 🔧 Features

- ✅ Get a list of all books
- 🔍 Retrieve a single book by ID
- ➕ Add a new book
- ✏️ Update existing book details
- ❌ Delete a book
- 📦 JSON-based response format

---

## 🚀 Tech Stack

| Layer     | Technologies         |
|-----------|----------------------|
| Language  | JavaScript / TypeScript |
| Runtime   | Node.js              |
| Framework | Express.js           |
| Database  | (Optional) MongoDB / JSON file |
| Tools     | Postman, Nodemon, VS Code |

---

## 📁 API Endpoints

| Method | Endpoint        | Description            |
|--------|------------------|------------------------|
| GET    | `/books`         | Get all books          |
| GET    | `/books/:id`     | Get book by ID         |
| POST   | `/books`         | Add new book           |
| PUT    | `/books/:id`     | Update existing book   |
| DELETE | `/books/:id`     | Delete a book          |

---

## 🛠️ Getting Started

bash
# Clone the repository
git clone https://github.com/your-username/bookverse-api.git

# Navigate to the project
cd bookverse-api

# Install dependencies
npm install

# Start the server
npm run dev
