/* eslint-disable react/display-name */
const wrap = (Component) => {
  const injectProps = { pro: 'Software dev' };
  return (props) => {
    return <Component {...props} {...injectProps} />;
  };
};

export default wrap;
