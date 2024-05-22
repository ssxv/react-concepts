import { useState } from 'react';

const UseStateCounter = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>This counter uses useState</h1>
      <button
        disabled={count <= 0}
        onClick={() => setCount((count) => count - 1)}
      >
        -
      </button>
      <span style={{ margin: '10px' }}>{count}</span>
      <button
        disabled={count >= 5}
        onClick={() => setCount((count) => count + 1)}
      >
        +
      </button>
    </>
  );
};

export default UseStateCounter;
