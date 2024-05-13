import { useState, useEffect } from 'react';

const ErrorBoundary = ({ children }: any) => {
  const [hasError, setHasError] = useState('');

  useEffect(() => {
    const errorHandler = (error: any) => {
      // Update state to indicate that an error has occurred
      setHasError(error.message);
      // Log the error to an error reporting service
      console.error('Error occurred:', error);
    };

    // Listen for unhandled errors in the component tree
    window.addEventListener('error', errorHandler);

    // Cleanup function to remove the error handler
    return () => {
      window.removeEventListener('error', errorHandler);
    };
  }, []);

  // If an error occurred, render a fallback UI
  if (hasError) {
    return <div>{hasError}</div>;
  }

  // Otherwise, render the child components
  return <>{children}</>;
};

export default ErrorBoundary;
