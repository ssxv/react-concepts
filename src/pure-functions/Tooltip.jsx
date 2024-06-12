/* eslint-disable react/prop-types */
const Tooltip = ({ text, hintText, width }) => {
  const style = {
    marginLeft: -50
  };
  if (width) {
    style.width = width;
    style.marginLeft = -(width / 2);
  }
  return (
    <span className="tooltip">
      <h1>{text}</h1>
      <span className="tooltiptext" style={style}>{hintText}</span>
    </span>
  );
};

export default Tooltip;
