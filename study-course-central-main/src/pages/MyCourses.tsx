
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CourseCard, { Course } from '../components/CourseCard';
import { getCurrentUser, getEnrolledCourses } from '../api/users';

const MyCourses: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  useEffect(() => {
    const checkUserAndFetchCourses = async () => {
      const user = getCurrentUser();
      if (!user) {
        navigate('/register', { state: { redirectTo: '/my-courses' } });
        return;
      }

      try {
        const enrolledCourses = await getEnrolledCourses();
        setCourses(enrolledCourses);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch enrolled courses:", error);
        setLoading(false);
      }
    };

    checkUserAndFetchCourses();
  }, [navigate]);

  return (
    <div className="min-h-screen pt-16 pb-16">
      <div className="bg-gradient-to-r from-teal-500/10 via-teal-500/5 to-transparent py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">My Courses</h1>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Track your learning progress and continue where you left off
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-teal-600"></div>
          </div>
        ) : (
          <>
            {courses.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {courses.map((course) => (
                  <CourseCard 
                    key={course._id} 
                    course={course}
                    isEnrolled={true}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="mx-auto w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-6">
                  <svg className="h-12 w-12 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">No courses yet</h3>
                <p className="text-base text-gray-500 mb-6">
                  You haven't enrolled in any courses yet. Start exploring our catalog!
                </p>
                <Link
                  to="/courses"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-teal-600 hover:bg-teal-700"
                >
                  Browse Courses
                </Link>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default MyCourses;
