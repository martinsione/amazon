import "./index.css";

function Button({
  bg,
  children,
  color,
  disabled,
  fontSize,
  height,
  onClick,
  type,
  padding,
  width,
}) {
  return (
    <>
      <button
        className="button"
        disabled={disabled}
        onClick={onClick}
        type={type}
        style={{
          backgroundColor: `${bg}`,
          color: `${color}`,
          fontSize: `${fontSize}`,
          height: `${height}`,
          padding: `${padding}`,
          width: `${width}`,
        }}
      >
        {children}
      </button>
    </>
  );
}

export default Button;
