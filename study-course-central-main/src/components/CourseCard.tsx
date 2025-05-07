
import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';

export interface Course {
  _id: string;
  title: string;
  description: string;
  instructor: string;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  image: string;
}

interface CourseCardProps {
  course: Course;
  onEnroll?: (courseId: string) => void;
  isEnrolled?: boolean;
}

const CourseCard: React.FC<CourseCardProps> = ({ course, onEnroll, isEnrolled = false }) => {
  const handleEnroll = () => {
    if (onEnroll && !isEnrolled) {
      onEnroll(course._id);
      toast.success(`Successfully enrolled in ${course.title}`);
    }
  };

  return (
    <div className="course-card bg-white rounded-lg overflow-hidden shadow border border-gray-100 h-full flex flex-col">
      <div className="h-48 bg-gray-200 overflow-hidden">
        <img 
          src={course.image || '/placeholder.svg'} 
          alt={course.title}
          className="w-full h-full object-cover"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = '/placeholder.svg';
          }}
        />
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <div className="flex items-center justify-between mb-2">
          <span className="bg-teal-100 text-teal-800 text-xs px-2 py-1 rounded-full font-medium">
            {course.level}
          </span>
          <span className="text-xs text-gray-500">{course.duration}</span>
        </div>
        <h3 className="font-bold text-xl text-gray-900 mb-2">{course.title}</h3>
        <p className="text-gray-600 text-sm mb-4 flex-grow">{course.description}</p>
        <div className="flex items-center justify-between mt-auto">
          <span className="text-sm text-gray-500">By {course.instructor}</span>
          {isEnrolled ? (
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded text-sm font-medium">
              Enrolled
            </span>
          ) : (
            <button
              onClick={handleEnroll}
              className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded font-medium text-sm button-transition"
            >
              Enroll Now
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
