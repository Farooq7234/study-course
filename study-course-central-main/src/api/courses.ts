
import { Course } from "../components/CourseCard";
import { toast } from "sonner";

// Mock data for courses
const MOCK_COURSES: Course[] = [
  {
    _id: "1",
    title: "Introduction to Web Development",
    description: "Learn the fundamentals of web development including HTML, CSS, and JavaScript. Build responsive websites from scratch and understand core concepts.",
    instructor: "Sarah Johnson",
    duration: "8 weeks",
    level: "Beginner",
    image: "/placeholder.svg"
  },
  {
    _id: "2",
    title: "Advanced React Patterns",
    description: "Master advanced React concepts including hooks, context API, performance optimization, and design patterns for building scalable applications.",
    instructor: "Michael Chen",
    duration: "6 weeks",
    level: "Advanced",
    image: "/placeholder.svg"
  },
  {
    _id: "3",
    title: "Data Science Fundamentals",
    description: "Introduction to data science concepts, statistical analysis, and machine learning basics using Python and popular libraries.",
    instructor: "Emma Williams",
    duration: "10 weeks",
    level: "Intermediate",
    image: "/placeholder.svg"
  }
];

// Get all courses
export const getAllCourses = async (): Promise<Course[]> => {
  try {
    // In a real application, this would be an API call to your backend
    return MOCK_COURSES;
  } catch (error) {
    console.error("Failed to fetch courses:", error);
    toast.error("Failed to load courses. Please try again.");
    return [];
  }
};

// Get course by ID
export const getCourseById = async (id: string): Promise<Course | null> => {
  try {
    // In a real application, this would be an API call to your backend
    const course = MOCK_COURSES.find(course => course._id === id);
    return course || null;
  } catch (error) {
    console.error(`Failed to fetch course with ID ${id}:`, error);
    toast.error("Failed to load course details. Please try again.");
    return null;
  }
};
