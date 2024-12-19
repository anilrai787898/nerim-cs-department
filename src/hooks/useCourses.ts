import { Course } from '../types';

export function useCourses() {
  // In a real application, this would fetch from an API
  const courses: Course[] = [
    {
      id: '1',
      code: 'BCA',
      title: 'Bachelor of Computer Applications',
      description: 'A comprehensive three-year undergraduate program focusing on computer applications, programming, and software development. Perfect for students looking to enter the IT industry or pursue higher education.',
      credits: 120,
      prerequisites: ['10+2 with Mathematics'],
      faculty: 'Department of Computer Science',
      duration: '3 Years',
      subjects: 36,
      seats: 60
    },
    {
      id: '2',
      code: 'MCA',
      title: 'Master of Computer Applications',
      description: 'An advanced two-year postgraduate program designed to create industry-ready professionals with expertise in advanced computing concepts, emerging technologies, and project management.',
      credits: 80,
      prerequisites: ['Bachelor\'s degree in BCA, B.Sc. (CS/IT), B.Tech', 'Minimum 50% aggregate in graduation'],
      faculty: 'Department of Computer Science',
      duration: '2 Years',
      subjects: 24,
      seats: 30
    }
  ];

  return { courses };
}