
import { Course } from "../components/CourseCard";
import { toast } from "sonner";
import { connectToDatabase } from "../lib/mongodb";
import User from "../models/User";

// Type for User
export interface User {
  _id: string;
  name: string;
  email: string;
  courses: string[];
}

// Register a new user
export const registerUser = async (name: string, email: string): Promise<User | null> => {
  try {
    // Connect to database
    await connectToDatabase();
    
    // Check if user already exists
    const existingUser = await User.findOne({ email }).lean();
    if (existingUser) {
      toast.error("Email already registered. Please log in instead.");
      return null;
    }

    // Create new user
    const newUser = await User.create({
      name,
      email,
      courses: []
    });

    const userObj = newUser.toObject();
    
    // Store user in localStorage for client-side auth
    localStorage.setItem('currentUser', JSON.stringify(userObj));
    
    toast.success("Registration successful!");
    return userObj;
  } catch (error) {
    console.error("Failed to register user:", error);
    toast.error("Registration failed. Please try again.");
    return null;
  }
};

// Get current user
export const getCurrentUser = async (): Promise<User | null> => {
  // Try to get user from localStorage
  const storedUser = localStorage.getItem('currentUser');
  if (storedUser) {
    const user = JSON.parse(storedUser);
    return user;
  }
  
  return null;
};

// Enroll user in a course
export const enrollInCourse = async (courseId: string): Promise<boolean> => {
  try {
    const user = await getCurrentUser();
    if (!user) {
      toast.error("Please register or log in first");
      return false;
    }

    await connectToDatabase();

    // Check if already enrolled
    if (user.courses.includes(courseId)) {
      toast.info("You are already enrolled in this course");
      return false;
    }

    // Add course to user's courses in MongoDB
    const updatedUser = await User.findByIdAndUpdate(
      user._id,
      { $push: { courses: courseId } },
      { new: true }
    );
    
    if (!updatedUser) {
      toast.error("Failed to update enrollment");
      return false;
    }
    
    // Update localStorage
    const updatedUserObj = updatedUser.toObject();
    localStorage.setItem('currentUser', JSON.stringify(updatedUserObj));
    
    return true;
  } catch (error) {
    console.error("Failed to enroll in course:", error);
    toast.error("Enrollment failed. Please try again.");
    return false;
  }
};

// Get enrolled courses for current user
export const getEnrolledCourses = async (): Promise<Course[]> => {
  try {
    const user = await getCurrentUser();
    if (!user) return [];

    await connectToDatabase();
    
    // Fetch updated user data from MongoDB
    const dbUser = await User.findById(user._id).populate('courses').lean();
    if (!dbUser) return [];
    
    return dbUser.courses as unknown as Course[];
  } catch (error) {
    console.error("Failed to fetch enrolled courses:", error);
    toast.error("Failed to load your courses. Please try again.");
    return [];
  }
};
