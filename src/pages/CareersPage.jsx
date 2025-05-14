import React, { useEffect } from 'react';

const CareersPage = () => {
  useEffect(() => {
    window.location.href = "https://www.linkedin.com/in/kavidharan-s-000527274";
  }, []);

  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <h1 className="text-3xl font-bold mb-4">Redirecting to LinkedIn Careers...</h1>
      <p className="text-lg text-gray-600">If you are not redirected, <a href="https://www.linkedin.com/in/kavidharan-s-000527274" className="text-accent underline">click here</a>.</p>
    </div>
  );
};

export default CareersPage;