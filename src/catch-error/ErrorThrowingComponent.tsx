const ErrorThrowingComponenet: React.FC = () => {

  return (
    <button
      onClick={() => {
        throw new Error(`Error thrown`);
      }}
    >
      Click me to throw an error
    </button>
  );
};

export default ErrorThrowingComponenet;
