import React from 'react';
import { useCourses } from '../hooks/useCourses';
import { CourseCard } from '../components/courses/CourseCard';
import { GraduationCap } from 'lucide-react';

export function CoursesPage() {
  const { courses } = useCourses();

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <GraduationCap className="h-12 w-12 text-indigo-600" />
          </div>
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Academic Programs
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our comprehensive range of computer science programs designed
            to prepare you for success in the digital world.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Why Choose NERIM CS?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Industry-Ready Curriculum
              </h3>
              <p className="text-gray-600">
                Our programs are designed in collaboration with industry experts
                to ensure you're prepared for real-world challenges.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Expert Faculty
              </h3>
              <p className="text-gray-600">
                Learn from experienced professors and industry practitioners
                who bring real-world expertise to the classroom.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Modern Infrastructure
              </h3>
              <p className="text-gray-600">
                Access state-of-the-art computer labs, digital library, and
                research facilities.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-gray-600 mb-8">
            Take the first step towards your future in technology.
          </p>
          <a
            href="/admissions"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
          >
            Apply Now
          </a>
        </div>
      </div>
    </div>
  );
}