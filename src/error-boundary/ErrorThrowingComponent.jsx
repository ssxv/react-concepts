import { useEffect, useState } from 'react';

const ErrorThrowingComponent = () => {
  const [error, setError] = useState(false);

  useEffect(() => {
    if (error) {
      throw new Error('from ErrorThrowingComponent');
    }
  }, [error]);

  return <button onClick={() => setError(true)}>Throw Error</button>;
};

export default ErrorThrowingComponent;
