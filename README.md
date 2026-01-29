# MERN Stack AI Chatbot

---

## Overview

A full-stack AI chatbot application inspired by ChatGPT, built with the MERN stack (MongoDB, Express, React, Node.js) and integrated with OpenAI's API. This customized chatbot provides a secure, personalized chat experience where user conversations are stored, retrievable, and manageable.

## Key Features

| Category | Feature | Description |
|----------|---------|-------------|
| **AI Integration** | OpenAI API | Powered by OpenAI for intelligent responses |
| **AI Integration** | Contextual Conversations | Maintains conversation history for context-aware responses |
| **Data Persistence** | Message Storage | All user messages stored in MongoDB database |
| **Data Persistence** | Chat History | Retrieve previous conversations anytime |
| **Data Persistence** | Message Management | Delete individual or all conversations |
| **Security** | JWT Authentication | Secure token-based authentication |
| **Security** | HTTP-Only Cookies | Cookies protected from client-side access |
| **Security** | Signed Cookies | Tamper-proof cookie signatures |
| **Security** | Password Encryption | Bcrypt hashing for secure password storage |
| **Security** | Middleware Protection | Comprehensive middleware chains for request validation |
| **User Experience** | Real-time Chat | Instant AI responses with streaming support |
| **User Experience** | Material UI | Modern, responsive interface with Material-UI components |
| **User Experience** | Toast Notifications | User-friendly feedback with react-hot-toast |

## Technology Stack

### Backend
- **Runtime**: Node.js with TypeScript
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT (JSON Web Tokens)
- **Security**: bcrypt, cookie-parser, express-validator
- **AI**: OpenAI API (v3.3.0)

### Frontend
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **UI Library**: Material-UI (MUI)
- **Routing**: React Router DOM
- **HTTP Client**: Axios
- **Styling**: Emotion (CSS-in-JS)
- **Notifications**: React Hot Toast

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or cloud instance)
- OpenAI API Key

### Installation

1. **Clone the repository**
   ```bash
   git clone git@github.com:BenjaminSalkic/AI-Chatbot.git
   cd AI-Chatbot
   ```

2. **Setup Backend**
   ```bash
   cd backend
   npm install
   ```

   Create a `.env` file in the backend directory:
   ```env
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   COOKIE_SECRET=your_cookie_secret
   OPENAI_API_KEY=your_openai_api_key
   PORT=5000
   ```

3. **Setup Frontend**
   ```bash
   cd ../frontend
   npm install
   ```

   Create a `.env` file in the frontend directory:
   ```env
   VITE_API_URL=http://localhost:5000
   ```

### Running the Application

**Development Mode:**

1. Start the backend:
   ```bash
   cd backend
   npm run dev
   ```

2. Start the frontend (in a new terminal):
   ```bash
   cd frontend
   npm run dev
   ```

The application will be available at `http://localhost:5173` (frontend) and `http://localhost:5000` (backend API).

**Production Build:**

```bash
# Backend
cd backend
npm run build
npm start

# Frontend
cd frontend
npm run build
npm run preview
```

## Project Structure

```
AI-Chatbot/
├── backend/
│   ├── src/
│   │   ├── Config/         # Configuration files
│   │   ├── Controllers/    # Request handlers
│   │   ├── Models/         # Mongoose schemas
│   │   ├── Routes/         # API routes
│   │   ├── Utils/          # Utility functions
│   │   ├── db/             # Database connection
│   │   ├── app.ts          # Express app setup
│   │   └── index.ts        # Server entry point
│   ├── package.json
│   └── tsconfig.json
│
└── frontend/
    ├── src/
    │   ├── components/     # React components
    │   ├── pages/          # Page components
    │   ├── context/        # React context
    │   ├── helpers/        # Helper functions
    │   └── main.tsx        # Application entry
    ├── package.json
    └── vite.config.ts
```

## Security Features

- **JWT Tokens**: Stateless authentication with JSON Web Tokens
- **HTTP-Only Cookies**: Prevents XSS attacks by making cookies inaccessible to JavaScript
- **Signed Cookies**: Ensures cookie integrity and prevents tampering
- **Password Encryption**: Bcrypt with salt rounds for secure password hashing
- **Middleware Chains**: Express middleware for request validation and authorization
- **CORS Configuration**: Controlled cross-origin resource sharing
- **Input Validation**: Express-validator for request data validation

## API Endpoints

### Authentication
- `POST /api/auth/signup` - Register new user
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout
- `GET /api/auth/verify` - Verify authentication status

### Chat
- `POST /api/chat/new` - Send new message to AI
- `GET /api/chat/all` - Retrieve all user conversations
- `DELETE /api/chat/delete` - Delete all user conversations

## Available Scripts

### Backend
- `npm run dev` - Start development server with hot reload
- `npm run build` - Compile TypeScript to JavaScript
- `npm start` - Run production server

### Frontend
- `npm run dev` - Start Vite development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## License

This project is open source and available for educational purposes.

---