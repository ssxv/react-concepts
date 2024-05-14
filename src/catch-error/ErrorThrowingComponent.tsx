import { useEffect, useState } from "react";

const ErrorThrowingComponent: React.FC = () => {
  const [flag, setflag] = useState(false);

  useEffect(() => {
    if (flag) throw new Error('from ErrorThrowingComponent');
  }, [flag]);

  return (
    <button
      onClick={() => {
        setflag(true);
      }}
    >
      Throw error from ErrorThrowingComponent
    </button>
  );
};

export default ErrorThrowingComponent;
