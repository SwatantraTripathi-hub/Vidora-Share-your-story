# Vidora — Share Your Story

Vidora is a full-stack video sharing platform where creators upload, stream, and connect with their audience through videos, playlists, and community posts. Built with the MERN stack (MongoDB, Express, React, Node.js).

## Tech stack

**Backend**
- Node.js + Express
- MongoDB with Mongoose
- JWT (access + refresh tokens) for authentication
- bcrypt for password hashing
- Cloudinary for media storage (planned)
- Multer for file upload handling (planned)

**Frontend**
- React (Vite)
- Tailwind CSS
- Axios (with interceptors)
- React Router (planned)

## Project structure

```
Vidora/
├── backend/
│   └── src/
│       ├── models/
│       ├── controllers/     (in progress)
│       ├── routes/          (pending)
│       ├── middlewares/     (pending)
│       ├── utils/
│       └── db/
├── frontend/
│   └── src/
│       ├── components/
│       ├── pages/
│       ├── utils/
│       └── ...
└── README.md
```

## Data models (planned)

Designed around 7 core entities:

| Model | Purpose |
|---|---|
| `User` | Auth, profile, watch history |
| `Video` | Video metadata, ownership, views |
| `Comment` | Comments on videos |
| `Like` | Likes on videos, comments, or tweets |
| `Subscription` | Subscriber ↔ channel relationship |
| `Playlist` | User-created video collections |
| `Tweet` | Short community posts per channel |

## Progress log

### Day 01
- Initialized backend (Express) and frontend (React + Vite) as a monorepo
- Set up `nodemon`, `dotenv`, and basic Express server (`server.js`)
- Connected MongoDB via Mongoose (`db/index.js`)
- Set up Git repository, resolved `.env` tracking/`.gitignore` issues
- Installed and configured Tailwind CSS on the frontend
- Set up CORS on the backend and a Vite dev-server proxy for local development
- Installed and configured Axios with a reusable instance (`utils/axiosInstance.js`)

### Day 02
- Designed the full data model relationships (User, Video, Comment, Like, Subscription, Playlist, Tweet) via an ER diagram
- Designed UI mockups for all core pages: Home, Video Player, Login/Signup, Channel, Tweets/Community, Trending, Subscriptions, Library, History, and Settings
- Finalized project branding: name (Vidora), logo, favicon, and page metadata (`index.html`)
- Planned the full frontend folder structure (components, pages, layouts, routes, context, hooks, utils)

### Day 03
- Built core backend utilities for consistent error/response handling:
  - `asyncHandler` — wraps async route handlers to avoid repetitive try/catch blocks
  - `ApiError` — standardized error class (extends native `Error`) with `statusCode`, `message`, and `errors[]`
  - `ApiResponse` — standardized success response shape (`statusCode`, `data`, `message`, `success`)
- Implemented the `User` model:
  - Fields: `username`, `email`, `fullName`, `avatar`, `coverImage`, `watchHistory`, `password`, `refreshToken`
  - Password hashing via a `pre("save")` hook using bcrypt
  - Instance methods: `isPasswordCorrect`, `generateAccessToken`, `generateRefreshToken`
- Implemented the `Video` model:
  - Fields: `videoFile`, `thumbnail`, `title`, `description`, `duration`, `views`, `isPublished`, `owner`
  - Added `mongoose-aggregate-paginate-v2` plugin for paginated aggregation queries
- Configured `express.json`, `express.urlencoded`, and `express.static` middleware with sensible payload limits

## What's next

- User controller: register, login, logout, refresh access token
- Auth middleware (JWT verification)
- Multer setup for local temp file storage before Cloudinary upload
- Video controller: upload, fetch, update, delete
- Connecting frontend pages to backend APIs

## Getting started

```bash
# Backend
cd backend
npm install
npm run dev

# Frontend
cd frontend
npm install
npm run dev
```

Create a `.env` file in both `backend/` and `frontend/` (see `.env.example` if present) — never commit `.env` files.
