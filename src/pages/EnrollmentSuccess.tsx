
import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { getCourseById } from '../api/courses';
import { Course } from '../components/CourseCard';

interface LocationState {
  courseId: string;
}

const EnrollmentSuccess: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [course, setCourse] = useState<Course | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  
  const state = location.state as LocationState;
  const courseId = state?.courseId;

  useEffect(() => {
    if (!courseId) {
      navigate('/courses');
      return;
    }

    const fetchCourse = async () => {
      try {
        const courseData = await getCourseById(courseId);
        setCourse(courseData);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch course details:", error);
        setLoading(false);
      }
    };

    fetchCourse();
  }, [courseId, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-teal-600"></div>
      </div>
    );
  }

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">Course not found</h2>
          <div className="mt-4">
            <Link to="/courses" className="text-teal-600 hover:text-teal-800">
              Back to courses
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-md text-center">
        <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100">
          <svg className="h-8 w-8 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="mt-6 text-3xl font-bold text-gray-900">Enrollment Successful!</h2>
        <p className="mt-2 text-base text-gray-600">
          You have successfully enrolled in:
        </p>
        <div className="mt-4 p-4 bg-gray-50 rounded-lg">
          <h3 className="text-xl font-medium text-gray-900">{course.title}</h3>
          <p className="mt-1 text-sm text-gray-500">Instructor: {course.instructor}</p>
        </div>

        <div className="mt-6 flex flex-col space-y-4">
          <Link
            to="/my-courses"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
          >
            Go to My Courses
          </Link>
          <Link
            to="/courses"
            className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
          >
            Browse More Courses
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EnrollmentSuccess;
