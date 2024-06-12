import useHover from '../custom-hooks/useHover';
import wrap from './wrap';

export const FunctionalComp = (props) => {
  const [ref, hover] = useHover();
  return (
    <div ref={ref}>
      <pre style={{ textAlign: 'left', color: hover ? 'red' : 'white' }}>
        {JSON.stringify(props, null, 4)}
      </pre>
    </div>
  );
};

const WrappedFunctionalComp = wrap(FunctionalComp);
export default WrappedFunctionalComp;
