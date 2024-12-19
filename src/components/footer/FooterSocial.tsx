import React from 'react';
import { Facebook, Twitter, Linkedin, Youtube } from 'lucide-react';

export function FooterSocial() {
  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  return (
    <div className="col-span-1">
      <h3 className="text-white text-lg font-semibold mb-4">Connect With Us</h3>
      <div className="flex space-x-4">
        {socialLinks.map((social) => {
          const Icon = social.icon;
          return (
            <a
              key={social.label}
              href={social.href}
              className="text-gray-400 hover:text-white transition-colors duration-200"
              aria-label={social.label}
            >
              <Icon className="h-6 w-6" />
            </a>
          );
        })}
      </div>
    </div>
  );
}