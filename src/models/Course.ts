
import mongoose from 'mongoose';

// Course schema
const CourseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please provide a course title'],
    trim: true,
    maxlength: [100, 'Title cannot be more than 100 characters'],
  },
  description: {
    type: String,
    required: [true, 'Please provide a course description'],
    trim: true,
  },
  instructor: {
    type: String,
    required: [true, 'Please provide an instructor name'],
    trim: true,
  },
  duration: {
    type: String,
    required: [true, 'Please provide course duration'],
  },
  level: {
    type: String,
    required: [true, 'Please provide course level'],
    enum: ['Beginner', 'Intermediate', 'Advanced'],
  },
  image: {
    type: String,
    default: '/placeholder.svg',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Check if model already exists to prevent overwriting during hot reloads
const Course = mongoose.models.Course || mongoose.model('Course', CourseSchema);

export default Course;
