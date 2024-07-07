import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen dark:bg-gray-800 dark:text-100 bg-gray-100">
      <div className="bg-white  p-8 md:p-10 rounded-lg shadow-lg text-center max-w-md w-full">
        <h1 className="text-6xl font-bold text-red-600">404</h1>
        <p className="mt-4 text-2xl text-gray-700">Page Not Found</p>
        <p className="mt-2 text-gray-500">The page you're looking for doesn't exist or has been moved.</p>
        <div className="mt-6 space-x-4">
          <Link
            to="/"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md transition duration-300 ease-in-out"
          >
            Go Back Home
          </Link>
          <Link
            to="/contact"
            className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg shadow-md transition duration-300 ease-in-out"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
