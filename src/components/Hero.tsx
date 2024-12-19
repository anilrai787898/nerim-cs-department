import React from 'react';
import { Sparkles } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative bg-indigo-800">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
          alt="NERIM Computer Science"
        />
        <div className="absolute inset-0 bg-indigo-800 mix-blend-multiply" />
      </div>
      
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          NERIM Department of Computer Science
        </h1>
        <p className="mt-6 text-xl text-indigo-100 max-w-3xl">
          Empowering the North East through excellence in Computer Science education.
          Join us in shaping the digital future of the region with cutting-edge
          technology education and research.
        </p>
        <div className="mt-10 flex gap-4">
          <a
            href="/courses"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-white hover:bg-indigo-50"
          >
            Explore Courses
          </a>
          <a
            href="/research"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
          >
            <Sparkles className="mr-2 h-5 w-5" />
            Our Research
          </a>
        </div>
      </div>
    </div>
  );
}