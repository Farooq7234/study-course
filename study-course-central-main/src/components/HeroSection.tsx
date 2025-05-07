
import React from 'react';
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';

const HeroSection: React.FC = () => {
  return (
    <div className="hero relative bg-gradient-to-r from-teal-50 to-blue-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-20 md:py-28 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Elevate Your Skills with{" "}
              <span className="text-teal-600 inline-block">
                <Typewriter
                  options={{
                    strings: ['Online Courses', 'Expert Instructors', 'Flexible Learning', 'Certified Training'],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-lg">
              Discover high-quality courses taught by industry experts. 
              Learn at your own pace and take your career to the next level.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link 
                to="/courses"
                className="px-6 py-3 rounded-md bg-teal-600 text-white font-medium shadow-sm hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 button-transition"
              >
                Explore Courses
              </Link>
              <Link
                to="/register"
                className="px-6 py-3 rounded-md border border-gray-300 bg-white text-gray-700 font-medium shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 button-transition"
              >
                Register Now
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 animate-fade-in">
            <img 
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
              alt="Online Learning" 
              className="rounded-lg shadow-xl object-cover"
            />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 to-transparent"></div>
    </div>
  );
};

export default HeroSection;
