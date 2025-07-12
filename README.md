# Books REST API

A simple REST API for managing a list of books using Node.js and Express.

Live Project :- https://codesandbox.io/p/sandbox/github/SanyaGupta2723/REST-API

## Setup and Installation

1. Clone the repository
2. Install dependencies: `npm install`
3. Start the server: `npm start`
4. For development with auto-reload: `npm run dev`

## API Endpoints

| Method | Endpoint       | Description                |
|--------|----------------|----------------------------|
| GET    | /api/books     | Get all books              |
| GET    | /api/books/:id | Get a specific book by ID  |
| POST   | /api/books     | Create a new book          |
| PUT    | /api/books/:id | Update a book by ID        |
| DELETE | /api/books/:id | Delete a book by ID        |

## API Usage Examples

### Get all books
```
GET /api/books
```

Response:
```json
{
  "success": true,
  "count": 3,
  "data": [
    {
      "id": 1,
      "title": "To Kill a Mockingbird",
      "author": "Harper Lee",
      "createdAt": "2023-05-29T12:00:00.000Z"
    },
    {
      "id": 2,
      "title": "1984",
      "author": "George Orwell",
      "createdAt": "2023-05-29T12:00:00.000Z"
    },
    {
      "id": 3,
      "title": "The Great Gatsby",
      "author": "F. Scott Fitzgerald",
      "createdAt": "2023-05-29T12:00:00.000Z"
    }
  ]
}
```

### Get a book by ID
```
GET /api/books/1
```

Response:
```json
{
  "success": true,
  "data": {
    "id": 1,
    "title": "To Kill a Mockingbird",
    "author": "Harper Lee",
    "createdAt": "2023-05-29T12:00:00.000Z"
  }
}
```

### Create a new book
```
POST /api/books
Content-Type: application/json

{
  "title": "The Hobbit",
  "author": "J.R.R. Tolkien"
}
```

Response:
```json
{
  "success": true,
  "message": "Book created successfully",
  "data": {
    "id": 4,
    "title": "The Hobbit",
    "author": "J.R.R. Tolkien",
    "createdAt": "2023-05-29T12:05:23.000Z"
  }
}
```

### Update a book
```
PUT /api/books/2
Content-Type: application/json

{
  "title": "1984",
  "author": "George Orwell (Eric Arthur Blair)"
}
```

Response:
```json
{
  "success": true,
  "message": "Book updated successfully",
  "data": {
    "id": 2,
    "title": "1984",
    "author": "George Orwell (Eric Arthur Blair)",
    "createdAt": "2023-05-29T12:00:00.000Z"
  }
}
```

### Delete a book
```
DELETE /api/books/3
```

Response:
```json
{
  "success": true,
  "message": "Book deleted successfully",
  "data": {
    "id": 3,
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "createdAt": "2023-05-29T12:00:00.000Z"
  }
}
```

## Error Handling

The API returns appropriate status codes and error messages:

- 400: Bad Request (validation errors)
- 404: Not Found
- 500: Internal Server Error

## Testing with Postman

You can test all endpoints using Postman:

1. Import the provided collection (if available)
2. Or create a new collection and add requests for each endpoint
3. Test the CRUD operations with different inputs

## Technologies Used

- Node.js
- Express.js
- Morgan (logging)
- CORS (Cross-Origin Resource Sharing)
- Nodemon (development)
