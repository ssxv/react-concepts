const wrap = (comp) => {
  const injectProps = { pro: 'Software dev' };
  return (props) => {
    return comp({ ...props, ...injectProps });
  };
};

export default wrap;
