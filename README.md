
# CourseHub - Online Course Registration Platform

A modern, full-stack online course registration platform built with Next.js, MongoDB, and Tailwind CSS.

## Features

- Browse and search available courses
- User registration system
- Course enrollment functionality
- Personal dashboard to track enrolled courses
- Responsive design for all devices
- Modern, clean UI with Tailwind CSS

## Tech Stack

- React with React Router for frontend routing
- Tailwind CSS for styling
- MongoDB with Mongoose for data modeling
- API routes for backend functionality

## Setup Instructions

### Prerequisites

- Node.js (v14 or later)
- MongoDB installed locally or MongoDB Atlas account

### Installation

1. Clone this repository
```
git clone <repository-url>
cd coursehub
```

2. Install dependencies
```
npm install
```

3. Set up environment variables
```
cp .env.local.example .env.local
```
Edit `.env.local` and add your MongoDB connection string:
```
MONGODB_URI=mongodb://localhost:27017/coursehub
```
Or if using MongoDB Atlas:
```
MONGODB_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/coursehub?retryWrites=true&w=majority
```

4. Run the development server
```
npm run dev
```

5. Open [http://localhost:8080](http://localhost:8080) in your browser to see the result.

## MongoDB Setup

### Using MongoDB Compass

1. Download and install [MongoDB Compass](https://www.mongodb.com/try/download/compass)
2. Open MongoDB Compass
3. Enter your connection string (e.g., `mongodb://localhost:27017/`)
4. Connect to your MongoDB instance
5. Create a new database named 'coursehub'
6. Create collections: 'users' and 'courses'

### Sample Data

You can use MongoDB Compass to import the following sample data into the 'courses' collection:

```json
[
  {
    "title": "Introduction to Web Development",
    "description": "Learn the fundamentals of web development including HTML, CSS, and JavaScript. Build responsive websites from scratch and understand core concepts.",
    "instructor": "Sarah Johnson",
    "duration": "8 weeks",
    "level": "Beginner",
    "image": "/placeholder.svg"
  },
  {
    "title": "Advanced React Patterns",
    "description": "Master advanced React concepts including hooks, context API, performance optimization, and design patterns for building scalable applications.",
    "instructor": "Michael Chen",
    "duration": "6 weeks",
    "level": "Advanced",
    "image": "/placeholder.svg"
  },
  {
    "title": "Data Science Fundamentals",
    "description": "Introduction to data science concepts, statistical analysis, and machine learning basics using Python and popular libraries.",
    "instructor": "Emma Williams",
    "duration": "10 weeks",
    "level": "Intermediate",
    "image": "/placeholder.svg"
  }
]
```

## Project Structure

```
coursehub/
├── src/
│   ├── api/            # API handlers
│   ├── components/     # Reusable UI components
│   ├── lib/            # Utils and configs
│   ├── models/         # MongoDB schemas
│   └── pages/          # App pages/routes
├── public/             # Static files
└── .env.local          # Environment variables
```

## License

MIT
