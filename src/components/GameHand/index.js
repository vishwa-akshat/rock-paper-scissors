import "./style.scss";

const GameHand = ({ icon, handType, size, winShadow }) => {
  const gameHandWrapperClass = () => {
    switch (handType) {
      case "rock":
        if (winShadow) {
          return "game-hand-wrapper rock-hand size-large win-shadow";
        }
        if (size === "2x") {
          return "game-hand-wrapper rock-hand size-large";
        }
        return "game-hand-wrapper rock-hand";
      case "paper":
        if (winShadow) {
          return "game-hand-wrapper paper-hand size-large win-shadow";
        }
        if (size === "2x") {
          return "game-hand-wrapper paper-hand size-large";
        }
        return "game-hand-wrapper paper-hand";
      case "scissor":
        if (winShadow) {
          return "game-hand-wrapper scissor-hand size-large win-shadow";
        }
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
