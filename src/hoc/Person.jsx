import useHover from '../customHook/useHover';
import wrap from './wrap';

export const Person = (props) => {
  const [ref, hover] = useHover();
  return (
    <div ref={ref}>
      <pre style={{ textAlign: 'left', color: hover ? 'red' : 'white' }}>
        {JSON.stringify(props, null, 4)}
      </pre>
    </div>
  );
};

const WrappedPerson = wrap(Person);
export default WrappedPerson;
