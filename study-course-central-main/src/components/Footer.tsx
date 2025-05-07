
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-teal-700">CourseHub</h3>
            <p className="mt-1 text-sm text-gray-500">Learn and grow with our online courses</p>
          </div>

          <nav className="flex flex-wrap justify-center mt-8 space-x-6">
            <a href="#" className="text-sm text-gray-600 hover:text-teal-600">About</a>
            <a href="#" className="text-sm text-gray-600 hover:text-teal-600">Privacy Policy</a>
            <a href="#" className="text-sm text-gray-600 hover:text-teal-600">Terms of Service</a>
            <a href="#" className="text-sm text-gray-600 hover:text-teal-600">Contact</a>
          </nav>

          <div className="mt-8">
            <p className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} CourseHub. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
