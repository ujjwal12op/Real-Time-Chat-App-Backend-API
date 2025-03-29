# 💬 Real-Time Chat App Backend API

This is the backend API for a real-time chat application built using **Node.js**, **Express**, **MongoDB**, and **Cloudinary** for image hosting. The API supports user authentication, real-time messaging, profile updates, and more.


## Deployed API

**https://real-time-chat-app-backend-api-1.onrender.com**

Use this API to test your endpoints.

##  Technologies Used

- **Node.js**: Backend runtime environment
- **Express.js**: Web framework for building APIs
- **MongoDB (Mongoose)**: Database for storing user data and messages
- **Cloudinary**: Image upload and management
- **JWT (Json Web Token)**: Secure authentication
- **Socket.io**: Real-time communication between clients
- **dotenv**: Environment variable management

##  Features

- User registration and login with JWT authentication
- Real-time messaging between users
- User profile management with Cloudinary image uploads
- WebSocket support for real-time chat using Socket.io
- Secure password hashing using bcryptjs

##  Folder Structure

```
backend/
├── src/
│   ├── controllers/       # API logic
│   ├── middleware/        # Authentication and error handling
│   ├── models/            # Mongoose models
│   ├── routes/            # API endpoints
│   ├── utils/             # Utility functions
│   └── index.js           # Entry point of the application
├── .env                    # Environment variables
├── package.json            # Dependencies and scripts
└── README.md               # Documentation
```

##  Environment Variables

Create a `.env` file in the root directory and add the following:

```
MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/chat_db
PORT=5001
JWT_SECRET=mysecretkey
NODE_ENV=development
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

##  Installation and Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/chat-backend.git
   cd chat-backend/backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   npm start
   ```
   Server will run on: `http://localhost:5001`

##  Running in Development Mode

To use **nodemon** for auto-reloading:
```
npm run dev
```

##  API Endpoints

### Authentication
- **POST /api/auth/signup**: Register a new user
- **POST /api/auth/login**: Log in a user
- **POST /api/auth/logout**: Log out a user

### User Profile
- **PUT /api/auth/update-profile**: Update user profile with image
- **GET /api/auth/check**: Check authentication status

### Messaging
- **POST /api/messages/send/:id**: Send a message
- **GET /api/messages/:id**: Get all messages between users
- **GET /api/messages/users**: Get a list of users for the sidebar

##  Testing with Postman

1. **Signup:**
   - Method: `POST`
   - URL: `http://localhost:5001/api/auth/signup`
   - Body (JSON):
     ```json
     {
      "fullName" : "Manish Tiwari",
      "email" : "Manish@gmail.com",
      "password" : "1235678"
     }
     ```

2. **Login:**
   - Method: `POST`
   - URL: `http://localhost:5001/api/auth/login`
   - Body (JSON):
     ```json
     {
       "email": "Manish@gmail.com",
       "password": "12345678"
     }
     ```

3. **Update Profile:**
   - Method: `PUT`
   - URL: `http://localhost:5001/api/auth/update-profile`
   - Body (Form Data):
     - `profilePic`: (Upload image)

##  Deploying on Render

1. Set Root Directory to `backend/`
2. Build Command:
   ```bash
   npm install
   ```
3. Start Command:
   ```bash
   npm start
   ```
4. Add environment variables through the Render dashboard.

##  Troubleshooting
- Check the logs in Render for detailed error messages.
- Ensure that all required environment variables are properly set.
- Use `console.log` statements for debugging.

## Use this API and integrate it with your frontend.

##  Feedback
Feel free to open an issue or submit a PR if you find any bugs or want to add new features!

