import { useState, useEffect, ReactElement } from 'react';

interface IProps {
  children: ReactElement | Element;
}

const ErrorBoundary = ({ children }: IProps) => {
  const [hasError, setHasError] = useState('');

  useEffect(() => {
    const errorHandler = (error: ErrorEvent) => {
      setHasError(error.message);
      console.error('Error occurred:', error);
    };

    // Listen for unhandled errors in the component tree
    window.addEventListener('error', errorHandler);

    // Cleanup function to remove the error handler
    return () => {
      window.removeEventListener('error', errorHandler);
    };
  }, []);

  if (hasError) {
    return <div>{hasError}</div>;
  }

  return <>{children}</>;
};

export default ErrorBoundary;
