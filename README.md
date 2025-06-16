Understood. I will add a new section to the README.md titled "Key Dependencies" and populate it with the provided information, ensuring it follows the specified format and is entirely in English.

-----

# User API with JWT Authentication

This project is a RESTful API built with **Node.js** and **Express.js**, designed for user management with integrated **JSON Web Token (JWT) authentication** for secure access. It allows users to register, log in, and manage their profiles.

-----

## Table of Contents

  * [Features](https://www.google.com/search?q=%23features)
  * [Technologies Used](https://www.google.com/search?q=%23technologies-used)
  * [Folder Structure](https://www.google.com/search?q=%23folder-structure)
  * [Getting Started](https://www.google.com/search?q=%23getting-started)
      * [Prerequisites](https://www.google.com/search?q=%23prerequisites)
      * [Installation](https://www.google.com/search?q=%23installation)
      * [Environment Variables](https://www.google.com/search?q=%23environment-variables)
      * [Running the Application](https://www.google.com/search?q=%23running-the-application)
  * [Key Dependencies](https://www.google.com/search?q=%23key-dependencies)
  * [API Endpoints](https://www.google.com/search?q=%23api-endpoints)
  * [Authentication Flow (JWT)](https://www.google.com/search?q=%23authentication-flow-jwt)
  * [Error Handling](https://www.google.com/search?q=%23error-handling)
  * [License](https://www.google.com/search?q=%23license)

-----

## Features

  * **User Registration**: Create new user accounts.
  * **User Login**: Authenticate users and issue JWTs.
  * **JWT Authentication**: Secure API endpoints using JSON Web Tokens.
  * **Protected Routes**: Restrict access to user data based on authentication and authorization.
  * **User Profile Management**: CRUD operations for user data (view, update, delete).
  * **Password Hashing**: Securely store user passwords using a hashing algorithm (e.g., bcrypt).
  * **Centralized Error Handling**: Consistent error responses for API consumers.
  * **Modular Design**: Clear separation of concerns (routes, controllers, models, middlewares, services).

-----

## Technologies Used

  * **node.js**: JavaScript runtime environment.
  * **express.js**: Fast, unopinionated, minimalist web framework for Node.js.
  * **pg**: MongoDB object modeling tool for Node.js.
  * **JSON Web Tokens (JWT)**: For secure authentication and authorization.
  * **bcrypt.js**: For hashing passwords.
  * **dotenv**: To load environment variables from a `.env` file.
  * **Nodemon**: (For development) Automatically restarts the server on file changes.

-----

## Folder Structure

The project follows a clean and modular folder structure:

```
.
├── src/
│   ├── app.js
│   ├── config/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── services/
│   └── utils/
├── tests/
├── .env
├── .env.example
├── .gitignore
├── package.json
└── README.md
```

For a detailed explanation of each folder and file, please refer to the project's internal documentation or source code comments.

-----

## Getting Started

Follow these steps to get your development environment set up and run the API.

### Prerequisites

Before you begin, ensure you have the following installed:

  * **Node.js**: [Download & Install Node.js](https://nodejs.org/en/download/) (LTS version recommended)
  * **MongoDB**: [Download & Install MongoDB Community Server](https://www.mongodb.com/try/download/community) or have access to a MongoDB Atlas cluster.
  * **npm** or **Yarn**: Node.js package manager (npm comes with Node.js).

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/GDS2005/node-user-api.git
    cd https://github.com/GDS2005/node-user-api.git
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    # or
    yarn install
    ```

### Environment Variables

Create a `.env` file in the root of your project based on the `.env.example` file. This file will store your sensitive configurations.

```
# .env.example content:

NODE_ENV=development
PORT=3000

MONGO_URI=mongodb://localhost:27017/user_api_db
JWT_SECRET=your_super_secret_jwt_key
JWT_EXPIRES_IN=1h
```

**Make sure to replace `your_super_secret_jwt_key` with a strong, unique secret.**

### Running the Application

  * **For Development (with Nodemon):**

    ```bash
    npm run dev
    # or
    yarn dev
    ```

    This will start the server and automatically restart it when you make changes to the code.

  * **For Production:**

    ```bash
    npm start
    # or
    yarn start
    ```

The API will be running at `http://localhost:<PORT>` (default is `http://localhost:3000`).

-----

## Key Dependencies

Here's a list of essential (and recommended) packages used in this project, categorized by their purpose.

### Web Framework

  * **express**: The most popular and flexible web framework for Node.js, fundamental for handling routes, middleware, and HTTP requests.
    ```bash
    npm install express
    ```

### Database and ORM/ODM

  * **sequelize**: (If using relational databases like PostgreSQL, MySQL, SQLite, SQL Server) A robust ORM that lets you interact with relational databases using JavaScript. You'll also need the corresponding database driver.
    ```bash
    npm install sequelize
    # Examples of drivers:
    # npm install pg pg-hstore (for PostgreSQL)
    # npm install mysql2 (for MySQL)
    ```

### Security

  * **Authentication & Authorization:**
      * **jsonwebtoken (JWT)**: For implementing token-based authentication. It generates JWTs for authenticated users to access protected routes.
        ```bash
        npm install jsonwebtoken
        ```
      * **bcryptjs** (or `bcrypt`): For securely hashing passwords. Never store plaintext passwords in the database. `bcryptjs` is a JavaScript implementation, while `bcrypt` is the native version (faster but can have compilation issues). `bcryptjs` is sufficient for most cases.
        ```bash
        npm install bcryptjs
        ```
  * **Application Security:**
      * **helmet**: A collection of 14 middlewares that help secure your Express application by setting security-related HTTP headers. It helps prevent XSS, clickjacking attacks, etc.
        ```bash
        npm install helmet
        ```
      * **cors**: Middleware to enable Cross-Origin Resource Sharing (CORS). Crucial when your frontend and backend are on different domains. It allows you to control which domains can make requests to your API.
        ```bash
        npm install cors
        ```
      * **express-rate-limit**: To limit the number of requests a client can make to your API within a defined time period. Helps prevent brute-force and DDoS attacks.
        ```bash
        npm install express-rate-limit
        ```
      * **xss-clean (Deprecated)**: Middleware to sanitize user input to prevent Cross-Site Scripting (XSS) attacks.
        ```bash
        npm install xss-clean
        ```

### Error Handling & Logging

  * **morgan**: An Express logging middleware. It helps you log HTTP requests coming to your server, which is useful for debugging and monitoring.
    ```bash
    npm install morgan
    ```
  * **http-status-codes**: Facilitates the use of semantic HTTP status codes in your responses.
    ```bash
    npm install http-status-codes
    ```

### Environment Variables

  * **dotenv**: For loading environment variables from a `.env` file into your application. It's a best practice for storing sensitive information like database keys, JWT secrets, etc., outside your source code and differentiated by environment (development, production).
    ```bash
    npm install dotenv
    ```

### Data Validation

  * **joi**: A powerful schema validator for JavaScript. It allows you to define schemas for user input data and validate that the data complies with these schemas before processing or saving it to the database.
    ```bash
    npm install joi
    ```
  * **express-validator**: An abstraction layer for Joi (or Validator.js) that integrates well with Express, allowing you to define validation rules directly in your routes.
    ```bash
    npm install express-validator
    ```

### File Handling (If your API requires it)

  * **multer**: An Express middleware for handling `multipart/form-data`, primarily used for file uploads.
    ```bash
    npm install multer
    ```

-----

## API Endpoints

All API endpoints are prefixed with `/api`.

-----

## Authentication Flow (JWT)

1.  **User Registration (`/api/auth/register`)**:

      * A user sends their `username`, `email`, and `password`.
      * The password is **hashed** before being stored in the database.
      * A new user record is created.

2.  **User Login (`/api/auth/login`)**:

      * A user sends their `email` and `password`.
      * The provided password is compared with the **hashed password** in the database.
      * If credentials are valid, a **JWT** is generated. This token contains a payload (e.g., user ID) and is signed with a secret key.
      * The JWT is sent back to the client.

3.  **Accessing Protected Routes**:

      * For subsequent requests to protected routes (e.g., `/api/users/me`), the client must include the JWT in the `Authorization` header, typically as a Bearer token:
        `Authorization: Bearer <your_jwt_token>`
      * A **middleware** on the server intercepts this token, verifies its signature, and extracts the payload.
      * If the token is valid, the request proceeds to the intended route controller; otherwise, an `Unauthorized` error is returned.

-----

## Error Handling

The API includes a centralized error handling middleware to provide consistent and informative error responses. Common error types include:

  * `400 Bad Request`: Invalid input or missing parameters.
  * `401 Unauthorized`: Missing or invalid JWT.
  * `403 Forbidden`: Authenticated but not authorized to perform the action.
  * `404 Not Found`: Resource not found.
  * `500 Internal Server Error`: Unexpected server errors.


-----

## License

[MIT](https://choosealicense.com/licenses/mit/)