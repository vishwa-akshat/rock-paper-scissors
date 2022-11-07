import "./style.scss";

const GameHand = ({ icon, handType, size }) => {
  const gameHandWrapperClass = () => {
    switch (handType) {
      case "rock":
        if (size === "2x") {
          return "game-hand-wrapper rock-hand size-large";
        }
        return "game-hand-wrapper rock-hand";
      case "paper":
        if (size === "2x") {
          return "game-hand-wrapper paper-hand size-large";
        }
        return "game-hand-wrapper paper-hand";
      case "scissor":
        if (size === "2x") {
          return "game-hand-wrapper scissor-hand size-large";
        }
        return "game-hand-wrapper scissor-hand";
      default:
        break;
    }
  };

  return (
    <div className={gameHandWrapperClass()}>
      <div className="inner-block">
        <img src={icon} alt={handType} className="hand-icon" />
      </div>
    </div>
  );
};

export default GameHand;
