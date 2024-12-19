import React from 'react';
import { CourseCard } from './CourseCard';
import { useCourses } from '../../hooks/useCourses';

export function CourseList() {
  const { courses } = useCourses();
  
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
}