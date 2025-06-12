# User API with JWT Authentication

This project is a RESTful API built with **Node.js** and **Express.js**, designed for user management with integrated **JSON Web Token (JWT) authentication** for secure access. It allows users to register, log in, and manage their profiles.

---

## Installation

First, clone the repository and navigate into the project directory:

```bash
git clone <your-repository-url>
cd <your-project-folder>
```

Use the package manager [npm](https://www.npmjs.com/) (or [Yarn](https://yarnpkg.com/)) to install the project dependencies.

```bash
npm install
# or
yarn install
```

Before running, create a `.env` file in the root of your project based on `.env.example` and fill in the necessary environment variables (e.g., `MONGO_URI`, `JWT_SECRET`, `PORT`).

Then, start the application:

```bash
npm start
# For development with hot-reloading:
npm run dev
```

---

## Usage

Here are examples of how to interact with the API endpoints. You can use tools like `curl` or Postman.

### Register a new user

```bash
curl -X POST -H "Content-Type: application/json" -d '{
  "username": "testuser",
  "email": "test@example.com",
  "password": "securepassword123"
}' http://localhost:3000/api/auth/register
```

### Log in and get a JWT token

```bash
curl -X POST -H "Content-Type: application/json" -d '{
  "email": "test@example.com",
  "password": "securepassword123"
}' http://localhost:3000/api/auth/login
```
*This will return a JSON object including a `token` field.*

### Access a protected user profile (requires JWT)

Replace `<YOUR_JWT_TOKEN>` with the token received from the login endpoint.

```bash
curl -X GET -H "Authorization: Bearer <YOUR_JWT_TOKEN>" http://localhost:3000/api/users/me
```

### Update a user's profile (requires JWT)

```bash
curl -X PUT -H "Content-Type: application/json" -H "Authorization: Bearer <YOUR_JWT_TOKEN>" -d '{
  "username": "updated_testuser",
  "email": "updated_test@example.com"
}' http://localhost:3000/api/users/me
```

---

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

---

## License

[MIT](https://choosealicense.com/licenses/mit/)