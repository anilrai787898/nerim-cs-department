import React from 'react';

export function FooterLinks() {
  const links = {
    'Quick Links': [
      { label: 'Home', href: '/' },
      { label: 'About NERIM', href: '/about' },
      { label: 'Courses', href: '/courses' },
      { label: 'Faculty', href: '/faculty' },
      { label: 'Admissions', href: '/admissions' },
    ],
    'Resources': [
      { label: 'Digital Library', href: '/library' },
      { label: 'Research Papers', href: '/research' },
      { label: 'Student Portal', href: '/portal' },
      { label: 'Campus Life', href: '/campus' },
      { label: 'Placements', href: '/placements' },
    ],
  };

  return (
    <div className="col-span-1 md:col-span-2 grid grid-cols-2 gap-8">
      {Object.entries(links).map(([title, items]) => (
        <div key={title}>
          <h3 className="text-white text-lg font-semibold mb-4">{title}</h3>
          <ul className="space-y-2">
            {items.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm hover:text-white transition-colors duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}