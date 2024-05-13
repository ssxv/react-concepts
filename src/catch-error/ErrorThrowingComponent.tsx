import { useContext } from 'react';
import { MyContext } from '../App';

const ErrorThrowingComponenet = () => {
  const myContext: any = useContext(MyContext);

  return (
    <div>
      <input
        type="text"
        value={myContext.name}
        placeholder="Name of error thrower"
        onChange={(e) => {
          myContext.setName(e.target.value);
        }}
      />
      <button
        onClick={() => {
          throw new Error(`Error thrown by ${myContext.name}`);
        }}
      >
        Click me to throw an error
      </button>
    </div>
  );
};

export default ErrorThrowingComponenet;
