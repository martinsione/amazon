import "./index.css";

function Button({ children, disabled, height, onClick, width }) {
  return (
    <>
      <button
        className="button"
        disabled={disabled}
        onClick={onClick}
        style={{ height: `${height}`, width: `${width}` }}
      >
        {children}
      </button>
    </>
  );
}

export default Button;
