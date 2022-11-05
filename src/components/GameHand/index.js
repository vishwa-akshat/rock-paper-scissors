import "./style.scss";

const GameHand = ({ icon, handType }) => {
  const gameHandWrapperClass = () => {
    switch (handType) {
      case "rock":
        return "game-hand-wrapper rock-hand";
      case "paper":
        return "game-hand-wrapper paper-hand";
      case "scissor":
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
