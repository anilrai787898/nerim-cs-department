import React from 'react';
import { Course } from '../../types';
import { BookOpen, Users, Clock } from 'lucide-react';

interface CourseCardProps {
  course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="p-6">
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold text-indigo-600">{course.code}</span>
          <span className="text-sm text-gray-500">{course.credits} Credits</span>
        </div>
        <h3 className="mt-2 text-xl font-bold text-gray-900">{course.title}</h3>
        <p className="mt-3 text-gray-600">{course.description}</p>
        
        <div className="mt-4 flex items-center gap-4 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <BookOpen className="h-4 w-4" />
            <span>{course.subjects} Subjects</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="h-4 w-4" />
            <span>{course.seats} Seats</span>
          </div>
        </div>

        {course.prerequisites.length > 0 && (
          <div className="mt-4">
            <h4 className="text-sm font-semibold text-gray-700">Prerequisites:</h4>
            <ul className="mt-1 text-sm text-gray-600 list-disc list-inside">
              {course.prerequisites.map((prereq, index) => (
                <li key={index}>{prereq}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
      
      <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
        <a
          href={`/courses/${course.code.toLowerCase()}`}
          className="text-indigo-600 hover:text-indigo-800 font-medium text-sm flex items-center justify-between"
        >
          View Details
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
  );
}