import React from 'react';
import { Hero } from '../components/Hero';
import { CoursesSection } from '../components/courses/CoursesSection';

export function HomePage() {
  return (
    <>
      <Hero />
      <CoursesSection />
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg font-medium text-gray-900">Latest News</h3>
              <p className="mt-2 text-sm text-gray-500">
                Stay updated with the latest developments in our department.
              </p>
            </div>
          </div>
          
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg font-medium text-gray-900">Research Highlights</h3>
              <p className="mt-2 text-sm text-gray-500">
                Explore our groundbreaking research initiatives.
              </p>
            </div>
          </div>
          
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg font-medium text-gray-900">Upcoming Events</h3>
              <p className="mt-2 text-sm text-gray-500">
                Don't miss our upcoming seminars and workshops.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}