interface Props {
  text: string;
  hintText: string;
  width?: number;
}

const Tooltip: React.FC<Props> = ({ text, hintText, width }) => {
  const style: any = {
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
