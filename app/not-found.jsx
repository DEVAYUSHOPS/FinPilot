import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';

const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen gradient px-4">
      <div className="bg-white p-10 rounded-3xl shadow-2xl text-center max-w-md w-full">
        <h1 className="text-7xl font-extrabold text-transparent bg-clip-text gradient-title">
          404
        </h1>
        <h2 className="mt-4 text-2xl font-semibold text-gray-800">Page Not Found</h2>
        <p className="text-gray-600 mt-2">
          The page you're looking for doesn’t exist or has been moved.
        </p>
        <Button asChild className="mt-4">
          <Link href="/">Back to Home</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
