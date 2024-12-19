import React from 'react';
import { CourseList } from './CourseList';
import { GraduationCap } from 'lucide-react';

export function CoursesSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <GraduationCap className="h-10 w-10 text-indigo-600" />
          </div>
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Programs
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Choose from our comprehensive range of computer science programs designed to
            prepare you for success in the digital world.
          </p>
        </div>
        
        <CourseList />
      </div>
    </section>
  );
}