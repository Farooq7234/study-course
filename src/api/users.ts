
import { Course } from "../components/CourseCard";
import { toast } from "sonner";

// Type for User
export interface User {
  _id: string;
  name: string;
  email: string;
  courses: string[];
}

// Mock user storage
let mockUsers: User[] = [];
let currentUser: User | null = null;

// Register a new user
export const registerUser = async (name: string, email: string): Promise<User | null> => {
  try {
    // Check if user already exists
    const existingUser = mockUsers.find(user => user.email === email);
    if (existingUser) {
      toast.error("Email already registered. Please log in instead.");
      return null;
    }

    // Create new user
    const newUser: User = {
      _id: Date.now().toString(),
      name,
      email,
      courses: []
    };

    mockUsers.push(newUser);
    currentUser = newUser;
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    
    toast.success("Registration successful!");
    return newUser;
  } catch (error) {
    console.error("Failed to register user:", error);
    toast.error("Registration failed. Please try again.");
    return null;
  }
};

// Get current user
export const getCurrentUser = (): User | null => {
  if (currentUser) return currentUser;
  
  // Try to get user from localStorage
  const storedUser = localStorage.getItem('currentUser');
  if (storedUser) {
    currentUser = JSON.parse(storedUser);
    return currentUser;
  }
  
  return null;
};

// Enroll user in a course
export const enrollInCourse = async (courseId: string): Promise<boolean> => {
  try {
    const user = getCurrentUser();
    if (!user) {
      toast.error("Please register or log in first");
      return false;
    }

    // Check if already enrolled
    if (user.courses.includes(courseId)) {
      toast.info("You are already enrolled in this course");
      return false;
    }

    // Add course to user's courses
    user.courses.push(courseId);
    
    // Update current user in mock storage and localStorage
    currentUser = user;
    mockUsers = mockUsers.map(u => u._id === user._id ? user : u);
    localStorage.setItem('currentUser', JSON.stringify(user));
    
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
    const user = getCurrentUser();
    if (!user) return [];

    // Import courses dynamically to avoid circular dependency
    const { getAllCourses } = await import('./courses');
    const allCourses = await getAllCourses();
    
    // Filter courses that user is enrolled in
    return allCourses.filter(course => user.courses.includes(course._id));
  } catch (error) {
    console.error("Failed to fetch enrolled courses:", error);
    toast.error("Failed to load your courses. Please try again.");
    return [];
  }
};
