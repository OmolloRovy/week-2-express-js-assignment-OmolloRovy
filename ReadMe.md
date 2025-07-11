# Product API

A simple RESTful API for managing products.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed

### Installation

1. Clone the repository or download the code.
2. Navigate to the project directory.
3. Install dependencies:

   ```
   npm install
   ```

4. Copy `.env.example` to `.env` and set your environment variables if needed.

### Running the Server

```
node server.js
```

The server will run on `http://localhost:3000` by default.

---

## API Endpoints

### Authentication

All endpoints (except `/`) require an `Authorization` header:

```
Authorization: Bearer mysecrettoken
```

---

### GET `/api/products`

**Description:** Get all products.

**Response:**
```json
[
  {
    "id": "1",
    "name": "Laptop",
    "description": "High-performance laptop with 16GB RAM",
    "price": 1200,
    "category": "electronics",
    "inStock": true
  },
  ...
]
```

---

### GET `/api/products/:id`

**Description:** Get a specific product by ID.

**Response:**
```json
{
  "id": "1",
  "name": "Laptop",
  "description": "High-performance laptop with 16GB RAM",
  "price": 1200,
  "category": "electronics",
  "inStock": true
}
```

---

### POST `/api/products`

**Description:** Create a new product.

**Request Body:**
```json
{
  "name": "Tablet",
  "description": "10-inch Android tablet",
  "price": 300,
  "category": "electronics",
  "inStock": true
}
```

**Response:**
```json
{
  "id": "generated-id",
  "name": "Tablet",
  "description": "10-inch Android tablet",
  "price": 300,
  "category": "electronics",
  "inStock": true
}
```

---

### PUT `/api/products/:id`

**Description:** Update an existing product.

**Request Body:** (same as POST)

**Response:** Updated product object.

---

### DELETE `/api/products/:id`

**Description:** Delete a product.

**Response:**  
Status: `204 No Content`

---

## Example `.env.example`

```
# .env.example
PORT=3000
```