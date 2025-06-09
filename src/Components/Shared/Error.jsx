import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center px-4">
      <h1 className="text-6xl font-bold text-pink-500 mb-4">404</h1>
      <p className="text-2xl text-gray-700 mb-2">Page Not Found</p>
      <p className="text-gray-500 mb-6">
        Oops! The page you are looking for doesn’t exist or has been moved.
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition"
      >
        Go Home
      </Link>
    </div>
  );
};

export default Error;
