import React from 'react';

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-red-500">404</h1>
      <p className="text-xl text-gray-700">Page Not Found</p>
      <a href="/" className="mt-4 text-blue-500 underline">Go to Home</a>
    </div>
  );
};

export default NotFoundPage;