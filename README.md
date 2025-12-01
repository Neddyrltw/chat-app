
# Chat-App

Chat-App is a full-stack real-time chat application built with Node.js, Express, MongoDB, React, Vite, and Tailwind CSS. It features authentication, live messaging via WebSockets, and a modern SPA frontend.

## Project Structure

- **backend/**: Node.js/Express API, MongoDB models, authentication, and Socket.io server
- **frontend/**: React SPA using Vite, Tailwind CSS, and DaisyUI

## Prerequisites

- Node.js (v18+ recommended)
- MongoDB instance (local or cloud)

## Setup & Installation
1. **Backend setup:**
	 - Create a `.env` file in `backend/` with:
		 ```env
		 MONGO_DB_URI=<your-mongodb-uri>
		 PORT=4000
		 ```
	 - Install dependencies:
		 ```sh
		 cd backend
		 npm install
		 ```
	 - Start the backend server:
		 ```sh
		 node server.js
		 # or for auto-reload:
		 npx nodemon server.js
		 ```
2. **Frontend setup:**
	 - Install dependencies:
		 ```sh
		 cd ../frontend
		 npm install
		 ```
	 - Start the frontend dev server:
		 ```sh
		 npm run dev
		 ```
	 - The app will be available at [http://localhost:3000](http://localhost:3000)

## Developer Notes

- **API Endpoints:**
	- Auth: `/api/auth` (login, signup, logout)
	- Users: `/api/users`
	- Messages: `/api/messages`
- **WebSocket:**
	- Socket.io server runs on backend (`PORT`), client connects via `SocketContext` in frontend
- **Frontend:**
	- State managed with React Context and custom hooks (see `src/context/`, `src/hooks/`)
	- Styling via Tailwind CSS and DaisyUI
- **Build for production:**
	- Frontend: `npm run build` in `frontend/` (output in `frontend/dist/`)
	- Backend serves static frontend from `frontend/dist/`
