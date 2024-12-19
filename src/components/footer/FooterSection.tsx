import React from 'react';
import { FooterLinks } from './FooterLinks';
import { FooterSocial } from './FooterSocial';
import { FooterNewsletter } from './FooterNewsletter';

export function FooterSection() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="col-span-1">
            <h3 className="text-white text-lg font-semibold mb-4">NERIM CS Department</h3>
            <p className="text-sm">
              Empowering the North East through excellence in Computer Science education
              since 1970. Located in Guwahati, Assam.
            </p>
            <address className="mt-4 text-sm not-italic">
              <p>NERIM Campus,</p>
              <p>Khanapara, Guwahati,</p>
              <p>Assam - 781022</p>
              <p className="mt-2">Phone: +91-361-2334790</p>
              <p>Email: cs@nerim.edu.in</p>
            </address>
          </div>
          
          {/* Quick Links */}
          <FooterLinks />
          
          {/* Social Links */}
          <FooterSocial />
          
          {/* Newsletter */}
          <FooterNewsletter />
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800">
          <p className="text-center text-sm">
            © {new Date().getFullYear()} NERIM Department of Computer Science. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}