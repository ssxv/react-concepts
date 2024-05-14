import { useContext } from 'react';
import { MyContext } from '../App';

const ErrorThrowingComponenet: React.FC = () => {
  const { name, setName } = useContext(MyContext);

  return (
    <div>
      <input
        type="text"
        value={name}
        placeholder="Name of error thrower"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <button
        onClick={() => {
          throw new Error(`Error thrown by ${name}`);
        }}
      >
        Click me to throw an error
      </button>
    </div>
  );
};

export default ErrorThrowingComponenet;
