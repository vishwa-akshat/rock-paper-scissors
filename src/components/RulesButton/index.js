import "./style.scss";

function RulesButton({ handleClick }) {
  return (
    <button onClick={handleClick} className="rules-button">
      Rules
    </button>
  );
}

export default RulesButton;
