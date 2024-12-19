import React from 'react';

export function FooterNewsletter() {
  return (
    <div className="col-span-1">
      <h3 className="text-white text-lg font-semibold mb-4">Stay Updated</h3>
      <p className="text-sm mb-4">
        Subscribe to our newsletter for the latest updates and news.
      </p>
      <form className="space-y-2" onSubmit={(e) => e.preventDefault()}>
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full px-3 py-2 text-sm bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
        />
        <button
          type="submit"
          className="w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
}