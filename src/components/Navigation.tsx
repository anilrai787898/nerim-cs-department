import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Calendar, FileText, Home, Users, Mail, GraduationCap } from 'lucide-react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { title: 'Home', href: '/', icon: Home },
  { title: 'Courses', href: '/courses', icon: BookOpen },
  { title: 'Faculty', href: '/faculty', icon: Users },
  { title: 'Research', href: '/research', icon: FileText },
  { title: 'Events', href: '/events', icon: Calendar },
  { title: 'Contact', href: '/contact', icon: Mail },
];

export function Navigation() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-indigo-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <GraduationCap className="h-8 w-8 text-white mr-2" />
              <span className="text-white text-xl font-bold">NERIM CS</span>
            </Link>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.href}
                      to={item.href}
                      className="text-white hover:bg-indigo-600 px-3 py-2 rounded-md text-sm font-medium flex items-center gap-2"
                    >
                      {Icon && <Icon className="h-4 w-4" />}
                      {item.title}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-indigo-600 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                to={item.href}
                className="text-white hover:bg-indigo-600 block px-3 py-2 rounded-md text-base font-medium flex items-center gap-2"
                onClick={() => setIsOpen(false)}
              >
                {Icon && <Icon className="h-4 w-4" />}
                {item.title}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}