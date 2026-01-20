# MERN Hotel Booking Application

A full-stack hotel booking web application built using the MERN stack (MongoDB, Express.js, React.js, and Node.js). The project implements real-world booking functionality including authentication, hotel search, room availability, and reservations.

---

## Features

# Authentication
- User registration and login using JWT (JSON Web Tokens)
- Secure password hashing with bcrypt
- Persistent login using React Context API
- Protected routes and role-based access

# Hotel Search & Listing
- Search hotels by destination
- Filter hotels by price range
- Dynamic hotel listing based on search criteria
- Responsive UI with reusable components

# Hotel Details
- Individual hotel pages with dynamic routing
- Image gallery with slider
- Pricing calculation based on selected dates and rooms
- Conditional access to booking for logged-in users

# Room Reservation
- Real-time room availability checking
- Prevents double booking by blocking selected dates
- Reservation modal with room selection
- Booking confirmation flow

---

## Tech Stack

# Frontend
- React.js
- React Router
- Context API
- Axios
- CSS

# Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication

---

## Project Structure

MERN-PROJECT---Booking-App
│
├── api
│ ├── controllers
│ ├── models
│ ├── routes
│ ├── utils
│ └── index.js
│
├── client
│ ├── src
│ │ ├── components
│ │ ├── context
│ │ ├── hooks
│ │ ├── pages
│ │ └── App.js
│ └── package.json
│
└── README.md


---

## Installation & Setup

# Prerequisites
- Node.js (v18 recommended)
- MongoDB (local or MongoDB Atlas)
- npm

---

# Clone the Repository
```bash
git clone https://github.com/Finny251/MERN-PROJECT---Booking-App-main.git
cd MERN-PROJECT---Booking-App-main

# Backend Setup
cd api
npm install


# Create a .env file inside api:

MONGO=your_mongodb_connection_string
JWT=your_jwt_secret


# Start the backend server:

npm start

# Backend runs on:

http://localhost:8800

# Frontend Setup
cd client
npm install
npm start


# Frontend runs on:

http://localhost:3000

# Usage

Register a new user

Login using credentials

Search hotels by destination and date

View hotel details

Select available rooms

Reserve rooms and confirm booking

# Key Learnings

Implementing full-stack authentication with JWT

Managing global state using Context API

Handling real-world bugs like route mismatches and state persistence

Designing RESTful APIs and integrating frontend with backend

Debugging React rendering and API integration issues

# Future Improvements

Booking history for users

Admin dashboard for hotel and room management

Payment gateway integration

Improved UI/UX and responsiveness

# Author

Finny
GitHub: https://github.com/Finny251

# License

This project is for learning and demonstration purposes.
