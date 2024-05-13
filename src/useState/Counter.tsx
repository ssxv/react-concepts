import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
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
    </div>
  );
};

export default Counter;
