# Secure Connect and Communication Platform

A secure backend application built using Node.js, Express.js, MongoDB and Socket.IO. It provides user authentication, role-based access control, secure personal notes management and real-time communication.

## Features

- User Registration and Login
- Password Hashing using bcrypt
- JWT-based Authentication
- Protected Routes
- Role-Based Access Control (RBAC)
- Secure Notes CRUD Operations
- Real-Time Chat using Socket.IO
- Custom Event Handling using EventEmitter
- MongoDB Database Integration
- Environment Variables using dotenv

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- bcrypt
- JSON Web Token (JWT)
- Socket.IO
- dotenv
- Postman

## Project Structure

```text
secure-connect-platform/
│
├── config/
│   └── db.js
│
├── controllers/
│   ├── authController.js
│   └── notesController.js
│
├── events/
│   └── eventEmitter.js
│
├── middleware/
│   ├── authMiddleware.js
│   └── roleMiddleware.js
│
├── models/
│   ├── User.js
│   └── Note.js
│
├── routes/
│   ├── authRoutes.js
│   ├── adminRoutes.js
│   └── notesRoutes.js
│
├── sockets/
│   └── chat.js
│
├── .env
├── .gitignore
├── package.json
├── server.js
└── testSocket.js
```

## Installation and Setup

1. Clone the repository:

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

2. Open the project folder:

```bash
cd secure-connect-platform
```

3. Install dependencies:

```bash
npm install
```

4. Create a `.env` file in the root directory:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
JWT_EXPIRES_IN=1d
```

5. Start the development server:

```bash
npm run dev
```

Server runs at:

`http://localhost:5000`

## API Endpoints

### Authentication

| Method | Endpoint | Description |
|---|---|---|
| POST | /api/auth/signup | Register a user |
| POST | /api/auth/login | Login user |
| GET | /api/auth/profile | Get user profile |

### Notes Management

| Method | Endpoint | Description |
|---|---|---|
| POST | /api/notes | Create a note |
| GET | /api/notes | Get user notes |
| PUT | /api/notes/:id | Update a note |
| DELETE | /api/notes/:id | Delete a note |

All Notes routes require JWT authentication.

### Admin

| Method | Endpoint | Description |
|---|---|---|
| GET | /api/admin/users | Get all users (Admin only) |

## Real-Time Communication

Socket.IO is used to support real-time messaging.

Events:
- `join_room`
- `send_message`
- `receive_message`

## EventEmitter

Custom events are used to track important application activities:

- `userRegistered`
- `noteCreated`

## Testing

API endpoints were tested using Postman.

Socket.IO functionality was tested using the Socket.IO client.

## Screenshots

Screenshots of API testing and real-time communication will be added here.

## Author

Developed as part of the Web Development III Lab Assignment.
