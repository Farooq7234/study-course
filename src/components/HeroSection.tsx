import React, { useState, useEffect } from 'react';
import { ChevronRight, Star, BookOpen, Users, Award } from 'lucide-react';

const HeroSection = () => {
  const [text, setText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const fullText = 'Master New Skills';
  const [stats, setStats] = useState({ courses: 0, students: 0, instructors: 0 });
  const targetStats = { courses: 500, students: 25000, instructors: 120 };

  // Typing animation effect
  useEffect(() => {
    if (isTyping && text.length < fullText.length) {
      const timeout = setTimeout(() => {
        setText(fullText.slice(0, text.length + 1));
      }, 150);
      return () => clearTimeout(timeout);
    } else if (text === fullText) {
      const timeout = setTimeout(() => {
        setIsTyping(false);
      }, 2000);
      return () => clearTimeout(timeout);
    } else if (!isTyping && text.length > 0) {
      const timeout = setTimeout(() => {
        setText(text.slice(0, text.length - 1));
      }, 75);
      return () => clearTimeout(timeout);
    } else if (!isTyping && text === '') {
      const timeout = setTimeout(() => {
        setIsTyping(true);
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [text, isTyping]);

  // Counter animation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prev => ({
        courses: prev.courses < targetStats.courses ? prev.courses + 5 : targetStats.courses,
        students: prev.students < targetStats.students ? prev.students + 250 : targetStats.students,
        instructors: prev.instructors < targetStats.instructors ? prev.instructors + 1 : targetStats.instructors
      }));
    }, 50);

    if (stats.courses === targetStats.courses &&
        stats.students === targetStats.students &&
        stats.instructors === targetStats.instructors) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [stats]);

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-teal-500 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute top-1/2 -right-48 w-96 h-96 bg-purple-500 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute -bottom-24 left-1/3 w-64 h-64 bg-blue-500 rounded-full opacity-10 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="py-20 md:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-center space-x-2">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-teal-600 bg-opacity-20 text-teal-400">
                  <Star size={16} className="mr-1" />
                  Premium Learning Experience
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Elevate Your Potential.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
                  {text}<span className="animate-pulse">|</span>
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 max-w-lg">
                Unlock your career potential with expert-led courses designed for the modern professional. 
                Learn, practice, and apply real-world skills.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a 
                  href="/courses"
                  className="group px-6 py-3 rounded-lg bg-gradient-to-r from-teal-500 to-teal-600 text-white font-medium shadow-lg hover:shadow-teal-500/30 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all duration-300 transform hover:-translate-y-1"
                >
                  Explore Courses
                  <ChevronRight size={18} className="inline ml-1 transition-transform group-hover:translate-x-1" />
                </a>
                <a 
                  href="/register"
                  className="px-6 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white font-medium shadow-lg hover:bg-gray-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all duration-300"
                >
                  Start Free Trial
                </a>
              </div>

              {/* Trust indicators */}
              <div className="pt-8 grid grid-cols-3 gap-4 text-center">
                <div className="flex flex-col items-center p-3 rounded-lg bg-gray-800 bg-opacity-50">
                  <BookOpen size={20} className="mb-2 text-teal-400" />
                  <span className="text-2xl font-bold">{stats.courses}+</span>
                  <span className="text-xs text-gray-400">Courses</span>
                </div>
                <div className="flex flex-col items-center p-3 rounded-lg bg-gray-800 bg-opacity-50">
                  <Users size={20} className="mb-2 text-teal-400" />
                  <span className="text-2xl font-bold">{stats.students.toLocaleString()}+</span>
                  <span className="text-xs text-gray-400">Students</span>
                </div>
                <div className="flex flex-col items-center p-3 rounded-lg bg-gray-800 bg-opacity-50">
                  <Award size={20} className="mb-2 text-teal-400" />
                  <span className="text-2xl font-bold">{stats.instructors}+</span>
                  <span className="text-xs text-gray-400">Instructors</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 -mx-8 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full opacity-20 blur-3xl"></div>
              <div className="relative">
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-2 rounded-2xl shadow-2xl border border-gray-700">
                  <div className="w-full aspect-video rounded-xl overflow-hidden relative bg-gray-800">
                    {/* Interactive Course UI Mockup */}
                    <div className="absolute inset-0 bg-gray-900 bg-opacity-60">
                      {/* Top navigation bar */}
                      <div className="h-10 px-4 flex items-center justify-between bg-gray-800 bg-opacity-70 border-b border-gray-700">
                        <div className="flex items-center space-x-3">
                          <div className="w-3 h-3 rounded-full bg-red-500"></div>
                          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                          <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                        <div className="h-5 w-40 bg-gray-700 rounded-full"></div>
                        <div className="flex space-x-2">
                          <div className="h-5 w-5 bg-gray-700 rounded-md"></div>
                          <div className="h-5 w-5 bg-gray-700 rounded-md"></div>
                        </div>
                      </div>
                      
                      {/* Content area */}
                      <div className="p-4 flex h-full">
                        {/* Left sidebar */}
                        <div className="w-1/4 pr-3 flex flex-col space-y-2">
                          <div className="h-10 w-full bg-teal-600 bg-opacity-20 rounded-lg"></div>
                          {[1, 2, 3, 4, 5].map((i) => (
                            <div key={i} className="h-8 w-full bg-gray-700 bg-opacity-60 rounded-md flex items-center px-2">
                              <div className="w-2 h-2 rounded-full bg-teal-500 mr-2"></div>
                              <div className="h-3 w-3/4 bg-gray-600 rounded-sm"></div>
                            </div>
                          ))}
                          <div className="h-8 w-full bg-teal-600 bg-opacity-30 rounded-md flex items-center px-2">
                            <div className="w-2 h-2 rounded-full bg-teal-400 mr-2"></div>
                            <div className="h-3 w-3/4 bg-teal-500 bg-opacity-30 rounded-sm"></div>
                          </div>
                          {[6, 7, 8].map((i) => (
                            <div key={i} className="h-8 w-full bg-gray-700 bg-opacity-60 rounded-md flex items-center px-2">
                              <div className="w-2 h-2 rounded-full bg-gray-500 mr-2"></div>
                              <div className="h-3 w-3/4 bg-gray-600 rounded-sm"></div>
                            </div>
                          ))}
                        </div>
                        
                        {/* Main content area */}
                        <div className="flex-1 bg-gray-800 bg-opacity-40 rounded-lg p-3 flex flex-col h-[500px]">
                          {/* Video player */}
                          <div className="h-[150px] bg-black bg-opacity-50 rounded-md relative mb-3">
                            <div className="absolute inset-0 flex items-center justify-center">
                              {/* <div className="w-16 h-16 rounded-full bg-teal-500 bg-opacity-90 flex items-center justify-center shadow-lg cursor-pointer transform transition-transform hover:scale-110">
                                <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-white border-b-8 border-b-transparent ml-1"></div>
                              </div> */}
                            </div>
                            
                            {/* Video progress bar */}
                            <div className="absolute bottom-2 left-2 right-2 flex items-center">
                              <div className="h-1 flex-1 bg-gray-700 rounded-full overflow-hidden">
                                <div className="h-full w-2/3 bg-teal-500"></div>
                              </div>
                              <div className="text-xs text-white ml-2">18:24</div>
                            </div>
                          </div>
                          
                          {/* Content tabs and text */}
                          <div className="flex mb-2 border-b border-gray-700">
                            <div className="px-3 py-1 border-b-2 border-teal-500 text-xs text-teal-400">Module Content</div>
                            <div className="px-3 py-1 text-xs text-gray-400">Resources</div>
                            <div className="px-3 py-1 text-xs text-gray-400">Discussion</div>
                          </div>
                          
                          <div className="space-y-2 flex-1">
                            {[1, 2, 3].map((i) => (
                              <div key={i} className="flex items-center justify-between bg-gray-700 bg-opacity-40 p-2 rounded-md">
                                <div className="flex items-center">
                                  {i === 1 ? (
                                    <div className="w-4 h-4 rounded-full bg-teal-500 mr-2 flex items-center justify-center">
                                      <div className="w-2 h-2 bg-white rounded-full"></div>
                                    </div>
                                  ) : (
                                    <div className="w-4 h-4 rounded-full border border-gray-500 mr-2"></div>
                                  )}
                                  <div className="h-2 w-32 bg-gray-600 rounded-sm"></div>
                                </div>
                                <div className="text-xs text-gray-400">12:30</div>
                              </div>
                            ))}
                            
                            {/* Animated typing cursor in the content area */}
                            <div className="h-6 flex items-center">
                              <div className="h-3 w-20 bg-gray-600 rounded-sm mr-1"></div>
                              <div className="h-4 w-px bg-teal-400 animate-pulse"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Course cards floating over the image */}
                  <div className="absolute -bottom-6 -right-10 w-40 h-24 bg-white rounded-lg shadow-lg p-3 transform rotate-6 transition-transform hover:rotate-0">
                    <div className="flex items-center mb-1">
                      <div className="w-6 h-6 rounded-full bg-teal-500 flex items-center justify-center mr-2">
                        <BookOpen size={12} className="text-white" />
                      </div>
                      <div className="text-sm font-bold text-gray-800">UI/UX Design</div>
                    </div>
                    <div className="flex justify-between text-xs text-gray-500 mb-1">
                      <span>24 lessons</span>
                      <span>12 hours</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Star size={12} className="text-yellow-500 fill-yellow-500" />
                        <Star size={12} className="text-yellow-500 fill-yellow-500" />
                        <Star size={12} className="text-yellow-500 fill-yellow-500" />
                        <Star size={12} className="text-yellow-500 fill-yellow-500" />
                        <span className="text-xs ml-1 font-medium">4.9</span>
                      </div>
                      <div className="px-2 py-1 bg-teal-100 text-teal-800 text-xs rounded-full font-medium">
                        Bestseller
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute -top-6 -left-6 w-40 h-24 bg-white rounded-lg shadow-lg p-3 transform -rotate-3 transition-transform hover:rotate-0">
                    <div className="flex items-center mb-1">
                      <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center mr-2">
                        <Users size={12} className="text-white" />
                      </div>
                      <div className="text-sm font-bold text-gray-800">Web Development</div>
                    </div>
                    <div className="flex justify-between text-xs text-gray-500 mb-1">
                      <span>36 lessons</span>
                      <span>18 hours</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Star size={12} className="text-yellow-500 fill-yellow-500" />
                        <Star size={12} className="text-yellow-500 fill-yellow-500" />
                        <Star size={12} className="text-yellow-500 fill-yellow-500" />
                        <Star size={12} className="text-yellow-500 fill-yellow-500" />
                        <Star size={12} className="text-yellow-500 fill-yellow-500" />
                        <span className="text-xs ml-1 font-medium">4.8</span>
                      </div>
                      <div className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full font-medium">
                        Popular
                      </div>
                    </div>
                  </div>
                  
                  {/* Additional floating badge */}
                  <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 rotate-12 transition-transform hover:rotate-0">
                    <div className="bg-red-500 text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg">
                      30% OFF
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave separator */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full">
          <path 
            fill="#ffffff" 
            fillOpacity="1" 
            d="M0,64L60,58.7C120,53,240,43,360,53.3C480,64,600,96,720,96C840,96,960,64,1080,48C1200,32,1320,32,1380,32L1440,32L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;